import { PageBreadcrumb } from '~/legacy/components/PageBreadcrumb';
import { Button } from '~/legacy/components/ui/button';

interface HeroProps {
    onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-auto-asphalt via-auto-carbon to-auto-gunmetal overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--auto-plum-deep)_0%,_transparent_50%)] opacity-30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PageBreadcrumb
                    segments={[
                        { label: 'Services', href: 'services' },
                        { label: 'XPEL Protection Film' }
                    ]}
                    onNavigate={onNavigate}
                />
                <div className="mt-8 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Exo_2']">
                        XPEL <span className="text-auto-plum-neon">Protection Film</span>
                    </h1>
                    <p className="text-lg text-auto-silver mb-8 leading-relaxed">
                        Shield your vehicle with the industry's most advanced paint protection film.
                        XPEL's self-healing technology keeps your paint looking showroom-new for years.
                    </p>
                    <Button
                        onClick={() => onNavigate('contact')}
                        className="bg-auto-plum-neon text-black hover:bg-auto-plum-mist font-semibold px-8 py-3 text-base"
                    >
                        Get a Free Quote
                    </Button>
                </div>
            </div>
        </section>
    );
}
