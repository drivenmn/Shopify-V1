import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import ShopPage from '~/legacy/components/ShopPage';

export const meta: MetaFunction = () => [
    { title: 'Shop - DrivenMN' },
    { name: 'description', content: 'Shop automotive protection products from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <ShopPage onNavigate={onNavigate} />;
}
