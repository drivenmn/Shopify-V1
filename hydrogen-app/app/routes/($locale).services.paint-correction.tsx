import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { PaintCorrection } from '~/legacy/Pages/Services/CorrectionAndDetail/PaintCorrection/PaintCorrection';

export const meta: MetaFunction = () => [
    { title: 'Paint Correction - DrivenMN' },
    { name: 'description', content: 'Paint Correction services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <PaintCorrection onNavigate={onNavigate} />;
}
