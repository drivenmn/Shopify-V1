import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { TeslaHub } from '~/legacy/Pages/ByMake/TeslaHub/TeslaHub';

export const meta: MetaFunction = () => [
    { title: 'Tesla Protection Services - DrivenMN' },
    { name: 'description', content: 'Tesla PPF, Window Tint, and Ceramic Coating from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <TeslaHub onNavigate={onNavigate} />;
}
