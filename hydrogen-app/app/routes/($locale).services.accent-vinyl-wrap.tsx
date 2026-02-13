import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { AccentVinylWrap } from '~/legacy/Pages/Services/VehicleWraps/AccentVinylWrap/AccentVinylWrap';

export const meta: MetaFunction = () => [
    { title: 'Accent Vinyl Wrap - DrivenMN' },
    { name: 'description', content: 'Accent Vinyl Wrap services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <AccentVinylWrap onNavigate={onNavigate} />;
}
