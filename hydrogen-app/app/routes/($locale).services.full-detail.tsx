import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { FullDetail } from '~/legacy/Pages/Services/CorrectionAndDetail/FullDetail/FullDetail';

export const meta: MetaFunction = () => [
    { title: 'Full Detail - DrivenMN' },
    { name: 'description', content: 'Full Detail services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <FullDetail onNavigate={onNavigate} />;
}
