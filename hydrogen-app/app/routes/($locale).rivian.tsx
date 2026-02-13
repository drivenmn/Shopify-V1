import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { Rivian } from '~/legacy/Pages/ByMake/Rivian/Rivian';

export const meta: MetaFunction = () => [
    { title: 'Rivian Protection Services - DrivenMN' },
    { name: 'description', content: 'Rivian PPF, Window Tint, and Ceramic Coating from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <Rivian onNavigate={onNavigate} />;
}
