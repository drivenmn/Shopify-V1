import { Button } from '~/legacy/components/ui/button';

interface CategoryGridProps {
    onNavigate: (page: string) => void;
}

const categories = [
    {
        title: 'Paint Protection Film',
        description: 'Full body or partial coverage to protect your paint from rock chips, scratches, and road debris.',
        pageKey: 'paint-protection-film',
        icon: '🛡️',
    },
    {
        title: 'Windshield Protection',
        description: 'Protect your windshield from rock chips and cracks with clear XPEL film.',
        pageKey: 'windshield-protection-film',
        icon: '🔲',
    },
    {
        title: 'Headlight Protection',
        description: 'Keep your headlights clear and protected from yellowing and debris damage.',
        pageKey: 'headlight-protection-film',
        icon: '💡',
    },
    {
        title: 'Interior Protection',
        description: 'Protect interior surfaces like piano black trim, screens, and door sills.',
        pageKey: 'interior-protection-film',
        icon: '🪑',
    },
];

export function CategoryGrid({ onNavigate }: CategoryGridProps) {
    return (
        <section className="py-16 bg-auto-carbon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 text-center font-['Exo_2']">
                    Our Protection <span className="text-auto-plum-neon">Services</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <button
                            key={cat.pageKey}
                            onClick={() => onNavigate(cat.pageKey)}
                            className="glass-card p-6 rounded-xl text-left transition-all duration-300 hover:scale-[1.02] group"
                        >
                            <div className="text-3xl mb-4">{cat.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-auto-plum-neon transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-auto-silver text-sm">{cat.description}</p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
