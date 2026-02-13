import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { VehicleWraps } from '~/legacy/Pages/Services/VehicleWraps/VehicleWraps';

export const meta: MetaFunction = () => [
    { title: 'Vehicle Wraps - DrivenMN' },
    { name: 'description', content: 'Vehicle Wrap services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <VehicleWraps onNavigate={onNavigate} />;
}
