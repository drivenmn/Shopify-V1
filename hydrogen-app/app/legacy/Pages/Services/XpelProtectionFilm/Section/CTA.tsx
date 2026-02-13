import { Button } from '~/legacy/components/ui/button';

interface CTAProps {
    onNavigate: (page: string) => void;
}

export function CTA({ onNavigate }: CTAProps) {
    return (
        <section className="py-16 bg-gradient-to-r from-auto-plum-deep to-auto-plum-neon">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Exo_2']">
                    Ready to Protect Your Vehicle?
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                    Get a personalized quote for XPEL Protection Film. Our certified installers ensure a perfect fit every time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={() => onNavigate('contact')}
                        className="bg-white text-auto-plum-deep hover:bg-gray-100 font-semibold px-8 py-3"
                    >
                        Schedule Consultation
                    </Button>
                    <Button
                        onClick={() => onNavigate('ppf-configurator')}
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 px-8 py-3"
                    >
                        Try Our Configurator
                    </Button>
                </div>
            </div>
        </section>
    );
}
