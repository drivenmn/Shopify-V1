import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { VehicleConfigurator } from '~/legacy/Pages/VehicleConfigurator/VehicleConfigurator';

export const meta: MetaFunction = () => [
    { title: 'Vehicle Configurator - DrivenMN' },
    { name: 'description', content: 'Configure protection options for your vehicle.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <VehicleConfigurator onNavigate={onNavigate} />;
}
