import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { AutoWindowTint } from '~/legacy/Pages/Services/XpelPrimeTint/AutoWindowTint/AutoWindowTint';

export const meta: MetaFunction = () => [
    { title: 'Auto Window Tint - DrivenMN' },
    { name: 'description', content: 'Auto Window Tint services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <AutoWindowTint onNavigate={onNavigate} />;
}
