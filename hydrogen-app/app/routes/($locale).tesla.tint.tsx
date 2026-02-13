import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { TeslaTint } from '~/legacy/Pages/ByMake/TeslaTint/TeslaTint';

export const meta: MetaFunction = () => [
    { title: 'Tesla Window Tint - DrivenMN' },
    { name: 'description', content: 'Tesla Window Tint services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <TeslaTint onNavigate={onNavigate} />;
}
