import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { AutomotiveCeramicCoating } from '~/legacy/Pages/Services/XpelFusionCoating/AutomotiveCeramicCoating/AutomotiveCeramicCoating';

export const meta: MetaFunction = () => [
    { title: 'Automotive Ceramic Coating - DrivenMN' },
    { name: 'description', content: 'Automotive Ceramic Coating services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <AutomotiveCeramicCoating onNavigate={onNavigate} />;
}
