import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { CorrectionAndDetail } from '~/legacy/Pages/Services/CorrectionAndDetail/CorrectionAndDetail';

export const meta: MetaFunction = () => [
    { title: 'Paint Correction & Detail - DrivenMN' },
    { name: 'description', content: 'Paint Correction and Detail services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <CorrectionAndDetail onNavigate={onNavigate} />;
}
