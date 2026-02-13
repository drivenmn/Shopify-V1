import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { PaintProtectionFilm } from '~/legacy/Pages/Services/XpelProtectionFilm/PaintProtectionFilm/PaintProtectionFilm';

export const meta: MetaFunction = () => [
    { title: 'Paint Protection Film (PPF) - DrivenMN' },
    { name: 'description', content: 'Paint Protection Film services in Burnsville, MN. XPEL certified.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <PaintProtectionFilm onNavigate={onNavigate} />;
}
