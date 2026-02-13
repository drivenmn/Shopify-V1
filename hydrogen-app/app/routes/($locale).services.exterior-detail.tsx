import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { ExteriorDetail } from '~/legacy/Pages/Services/CorrectionAndDetail/ExteriorDetail/ExteriorDetail';

export const meta: MetaFunction = () => [
    { title: 'Exterior Detail - DrivenMN' },
    { name: 'description', content: 'Exterior Detail services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <ExteriorDetail onNavigate={onNavigate} />;
}
