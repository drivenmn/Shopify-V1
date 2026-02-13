import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { MarineWindowTint } from '~/legacy/Pages/Services/XpelPrimeTint/MarineWindowTint/MarineWindowTint';

export const meta: MetaFunction = () => [
    { title: 'Marine Window Tint - DrivenMN' },
    { name: 'description', content: 'Marine Window Tint services from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <MarineWindowTint onNavigate={onNavigate} />;
}
