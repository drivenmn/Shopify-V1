import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { WindshieldProtectionFilm } from '~/legacy/Pages/Services/XpelProtectionFilm/WindshieldProtectionFilm/WindshieldProtectionFilm';

export const meta: MetaFunction = () => [
    { title: 'Windshield Protection Film - DrivenMN' },
    { name: 'description', content: 'Windshield Protection Film services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <WindshieldProtectionFilm onNavigate={onNavigate} />;
}
