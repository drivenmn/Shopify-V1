import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { About } from '~/legacy/Pages/About/About';

export const meta: MetaFunction = () => {
    return [
        { title: 'About DrivenMN - XPEL Certified Automotive Protection Studio' },
        { name: 'description', content: 'Learn about DrivenMN, Burnsville MN\'s premier XPEL certified automotive protection studio.' },
    ];
};

export default function AboutPage() {
    const onNavigate = useOnNavigate();
    return <About onNavigate={onNavigate} />;
}
