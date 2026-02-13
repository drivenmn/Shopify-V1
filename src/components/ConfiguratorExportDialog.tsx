import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Download, Code2, PackageOpen, FileText, FolderArchive, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface ConfiguratorExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectConfigurator: (configurator: 'tint' | 'ppf' | 'tesla', format: 'code' | 'docs') => void;
}

export function ConfiguratorExportDialog({ 
  open, 
  onOpenChange, 
  onSelectConfigurator 
}: ConfiguratorExportDialogProps) {
  const configurators = [
    {
      id: 'tint' as const,
      name: 'React Component',
      description: 'Standalone React component with all dependencies',
      icon: Code2,
      color: 'hsl(var(--primary))',
      files: [
        'TintConfigurator.tsx',
        'TintLivePreview.tsx',
        'types.ts',
        'shared utilities'
      ],
      features: [
        '7-step configuration flow',
        'Live vehicle preview',
        'Real-time pricing',
        'VLT selection (5-50%)'
      ]
    },
    {
      id: 'ppf' as const,
      name: 'Full Package',
      description: 'Complete configurator package with documentation',
      icon: PackageOpen,
      color: 'hsl(var(--warning))',
      files: [
        'PPFConfigurator.tsx',
        'types.ts',
        'shared utilities',
        'XPEL branding'
      ],
      features: [
        '5 coverage packages',
        'XPEL film selection',
        'Add-ons system',
        'Coverage visualization'
      ]
    },
    {
      id: 'tesla' as const,
      name: 'Tesla Package',
      description: 'Tesla-specific package builder with PPF + Tint bundles and live 3D preview',
      icon: Zap,
      color: '#E82127',
      files: [
        'TeslaPackageConfigurator.tsx',
        'TeslaPackageLivePreview.tsx',
        'types.ts',
        'shared utilities'
      ],
      features: [
        'Model 3, Y, S, X support',
        '3 package tiers',
        'PPF + Tint bundles',
        '3D live preview'
      ]
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border text-foreground max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
              <FolderArchive className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-['Agdasima'] text-white uppercase tracking-tight">
                Export Sub-Module
              </DialogTitle>
              <DialogDescription className="text-white/60 text-sm">
                Select a configurator to export as a standalone module
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
          {configurators.map((config, index) => {
            const Icon = config.icon;
            return (
              <motion.div
                key={config.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${config.color}, transparent)` }}
                />
                
                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${config.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: config.color }} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 
                          className="text-2xl font-['Agdasima'] text-white mb-1 uppercase tracking-tight transition-colors"
                          style={{ color: config.color }}
                        >
                          {config.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {config.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {config.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: config.color }} />
                          <span className="text-white/50 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Files */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {config.files.map((file) => (
                        <span
                          key={file}
                          className="text-xs bg-muted border border-border rounded-lg px-3 py-1 text-muted-foreground font-mono"
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                    
                    {/* Export Button */}
                    <button
                      onClick={() => {
                        onSelectConfigurator(config.id, 'code');
                        onOpenChange(false);
                      }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 group/btn"
                      style={{ 
                        background: `linear-gradient(135deg, ${config.color}, ${config.color}DD)`,
                        boxShadow: `0 0 20px ${config.color}40`
                      }}
                    >
                      <Download className="w-4 h-4 text-white group-hover/btn:translate-y-0.5 transition-transform" />
                      <span className="text-white" style={{ fontWeight: 700, fontSize: '14px' }}>
                        Export {config.name}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Footer */}
        <div className="mt-6 pt-6 border-t border-border space-y-3">
          <div className="flex items-start gap-3 text-sm text-white/50">
            <Code2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>
              Exports include: Component files, type definitions, shared utilities, UI components, documentation, and setup guides
            </p>
          </div>
          <div className="flex items-start gap-3 text-sm text-white/50">
            <FolderArchive className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>
              Each module is fully self-contained and ready to integrate into any React project
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}