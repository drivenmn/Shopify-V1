import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { XpelPrimeTint } from '~/legacy/Pages/Services/XpelPrimeTint/XpelPrimeTint';

export const meta: MetaFunction = () => [
    { title: 'XPEL PRIME Window Tint - DrivenMN' },
    { name: 'description', content: 'XPEL PRIME Window Tint services from DrivenMN in Burnsville, MN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <XpelPrimeTint onNavigate={onNavigate} />;
}
