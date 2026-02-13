import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { GraphicPrintedWrap } from '~/legacy/Pages/Services/VehicleWraps/GraphicPrintedWrap/GraphicPrintedWrap';

export const meta: MetaFunction = () => [
    { title: 'Graphic Printed Wrap - DrivenMN' },
    { name: 'description', content: 'Graphic Printed Wrap services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <GraphicPrintedWrap onNavigate={onNavigate} />;
}
