import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { InteriorProtectionFilm } from '~/legacy/Pages/Services/XpelProtectionFilm/InteriorProtectionFilm/InteriorProtectionFilm';

export const meta: MetaFunction = () => [
    { title: 'Interior Protection Film - DrivenMN' },
    { name: 'description', content: 'Interior Protection Film services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <InteriorProtectionFilm onNavigate={onNavigate} />;
}
