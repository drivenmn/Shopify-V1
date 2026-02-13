import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { MarineCeramicCoating } from '~/legacy/Pages/Services/XpelFusionCoating/MarineCeramicCoating/MarineCeramicCoating';

export const meta: MetaFunction = () => [
    { title: 'Marine Ceramic Coating - DrivenMN' },
    { name: 'description', content: 'Marine Ceramic Coating services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <MarineCeramicCoating onNavigate={onNavigate} />;
}
