import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { XpelProtectionFilm } from '~/legacy/Pages/Services/XpelProtectionFilm/XpelProtectionFilm';

export const meta: MetaFunction = () => [
    { title: 'XPEL Protection Film - DrivenMN' },
    { name: 'description', content: 'XPEL Protection Film services from DrivenMN in Burnsville, MN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <XpelProtectionFilm onNavigate={onNavigate} />;
}
