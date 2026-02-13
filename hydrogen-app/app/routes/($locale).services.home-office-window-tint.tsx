import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { HomeOfficeWindowTint } from '~/legacy/Pages/Services/XpelPrimeTint/HomeOfficeWindowTint/HomeOfficeWindowTint';

export const meta: MetaFunction = () => [
    { title: 'Home & Office Window Tint - DrivenMN' },
    { name: 'description', content: 'Home & Office Window Tint services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <HomeOfficeWindowTint onNavigate={onNavigate} />;
}
