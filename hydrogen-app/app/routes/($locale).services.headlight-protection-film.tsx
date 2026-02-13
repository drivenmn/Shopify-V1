import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { HeadlightProtectionFilm } from '~/legacy/Pages/Services/XpelProtectionFilm/HeadlightProtectionFilm/HeadlightProtectionFilm';

export const meta: MetaFunction = () => [
    { title: 'Headlight Protection Film - DrivenMN' },
    { name: 'description', content: 'Headlight Protection Film services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <HeadlightProtectionFilm onNavigate={onNavigate} />;
}
