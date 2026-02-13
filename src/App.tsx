import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';
import { CartProvider } from './utils/cartContext';
import { ThemeProvider } from './utils/themeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// New Modular Pages
import * as Services from './Pages/Services';
import * as ByMake from './Pages/ByMake';
import { About, Contact, Home as HomePage, Blog as BlogPage, VehicleConfigurator } from './Pages';
import { BlogPostPage } from './Pages/Blog'; // Import directly from new structure

import ShopPage from './components/ShopPage';
import { FloatingActions } from './components/FloatingActions';
import { DevModeIndicator } from './components/DevModeIndicator';
import { copyToClipboard } from './utils/clipboard';
import { ConfiguratorExportDialog } from './components/ConfiguratorExportDialog';
import { exportSubModule, type SubModuleType } from './utils/submoduleExportHandler';
import { PPFConfigurator, TintConfigurator, TeslaPackageConfigurator, ColorPPFConfigurator } from './components/configurators';

type Page = string;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showDevTools, setShowDevTools] = useState(false);
  const [showExportDialog, setShowExportDialog] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        setShowDevTools(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setShowExportDialog(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleConfiguratorExport = async (type: any) => {
     // ... export logic
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage.startsWith('blog/')) {
      const blogId = currentPage.split('/')[1];
      // Use the new BlogPostPage from /Pages/Blog
      return <BlogPostPage id={blogId} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      // Services - Protection Film
      case 'xpel-protection-film':
        return <Services.XpelProtectionFilm onNavigate={handleNavigate} />;
      case 'paint-protection-film':
      case 'ppf':
        return <Services.PaintProtectionFilm onNavigate={handleNavigate} />;
      case 'windshield-protection-film':
        return <Services.WindshieldProtectionFilm onNavigate={handleNavigate} />;
      case 'headlight-protection-film':
        return <Services.HeadlightProtectionFilm onNavigate={handleNavigate} />;
      case 'interior-protection-film':
        return <Services.InteriorProtectionFilm onNavigate={handleNavigate} />;

      // Services - Window Tint
      case 'xpel-prime-window-tint':
        return <Services.XpelPrimeTint onNavigate={handleNavigate} />;
      case 'auto-window-tint':
        return <Services.AutoWindowTint onNavigate={handleNavigate} />;
      case 'marine-window-tint':
        return <Services.MarineWindowTint onNavigate={handleNavigate} />;
      case 'home-office-window-tint':
        return <Services.HomeOfficeWindowTint onNavigate={handleNavigate} />;

      // Services - Vehicle Wraps
      case 'vehicle-wraps':
        return <Services.VehicleWraps onNavigate={handleNavigate} />;
      case 'color-change-vehicle-wrap':
        return <Services.ColorChangeVehicleWrap onNavigate={handleNavigate} />;
      case 'graphic-printed-wrap':
        return <Services.GraphicPrintedWrap onNavigate={handleNavigate} />;
      case 'fleet-graphic-wrap':
        return <Services.FleetGraphicWrap onNavigate={handleNavigate} />;
      case 'accent-vinyl-wrap':
        return <Services.AccentVinylWrap onNavigate={handleNavigate} />;

      // Services - Ceramic Coating
      case 'xpel-fusion-ceramic-coating':
        return <Services.XpelFusionCoating onNavigate={handleNavigate} />;
      case 'automotive-ceramic-coating':
        return <Services.AutomotiveCeramicCoating onNavigate={handleNavigate} />;
      case 'marine-ceramic-coating':
        return <Services.MarineCeramicCoating onNavigate={handleNavigate} />;

      // Services - Correction & Detail
      case 'paint-correction-detail':
        return <Services.CorrectionAndDetail onNavigate={handleNavigate} />;
      case 'paint-correction':
        return <Services.PaintCorrection onNavigate={handleNavigate} />;
      case 'exterior-detail':
        return <Services.ExteriorDetail onNavigate={handleNavigate} />;
      case 'full-detail':
        return <Services.FullDetail onNavigate={handleNavigate} />;
      
      // By Make
      case 'tesla':
        return <ByMake.TeslaHub onNavigate={handleNavigate} />;
      case 'tesla-ppf':
        return <ByMake.TeslaPPF onNavigate={handleNavigate} />;
      case 'tesla-tint':
        return <ByMake.TeslaTint onNavigate={handleNavigate} />;
      case 'tesla-package':
        return <ByMake.TeslaPackage />;
      case 'rivian':
        return <ByMake.Rivian onNavigate={handleNavigate} />;

      // Standalone / Top Level
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'shop':
        return <ShopPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'services':
        return <Services.XpelProtectionFilm onNavigate={handleNavigate} />; 
      
      // Configurators
      case 'ppf-configurator':
        return <PPFConfigurator />;
      case 'tint-configurator':
        return <TintConfigurator />;
      case 'color-ppf-visualizer':
        return <ColorPPFConfigurator />;
      case 'vehicle-configurator':
        return <VehicleConfigurator onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          <main className="flex-1" data-section="MainContent">
            {renderPage()}
          </main>
          <Footer onNavigate={handleNavigate} />
          <FloatingActions onNavigate={handleNavigate} />
          {showDevTools && <DevModeIndicator currentPage={currentPage} />}
          <Toaster position="top-right" expand={false} richColors closeButton />
          <ConfiguratorExportDialog open={showExportDialog} onOpenChange={setShowExportDialog} onSelectConfigurator={handleConfiguratorExport} />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
