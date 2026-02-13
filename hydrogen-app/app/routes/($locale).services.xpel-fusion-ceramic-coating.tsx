import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { XpelFusionCoating } from '~/legacy/Pages/Services/XpelFusionCoating/XpelFusionCoating';

export const meta: MetaFunction = () => [
    { title: 'XPEL Fusion Ceramic Coating - DrivenMN' },
    { name: 'description', content: 'XPEL Fusion Ceramic Coating services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <XpelFusionCoating onNavigate={onNavigate} />;
}
