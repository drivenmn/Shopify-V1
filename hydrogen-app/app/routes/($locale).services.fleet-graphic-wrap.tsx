import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { FleetGraphicWrap } from '~/legacy/Pages/Services/VehicleWraps/FleetGraphicWrap/FleetGraphicWrap';

export const meta: MetaFunction = () => [
    { title: 'Fleet Graphic Wrap - DrivenMN' },
    { name: 'description', content: 'Fleet Graphic Wrap services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <FleetGraphicWrap onNavigate={onNavigate} />;
}
