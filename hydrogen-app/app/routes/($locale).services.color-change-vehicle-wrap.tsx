import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { ColorChangeVehicleWrap } from '~/legacy/Pages/Services/VehicleWraps/ColorChangeVehicleWrap/ColorChangeVehicleWrap';

export const meta: MetaFunction = () => [
    { title: 'Color Change Vehicle Wrap - DrivenMN' },
    { name: 'description', content: 'Color Change Vehicle Wrap services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <ColorChangeVehicleWrap onNavigate={onNavigate} />;
}
