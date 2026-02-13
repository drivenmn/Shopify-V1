import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { Blog } from '~/legacy/Pages/Blog/Blog';

export const meta: MetaFunction = () => {
    return [
        { title: 'DrivenMN Blog - Automotive Protection Tips & News' },
        { name: 'description', content: 'Read the latest articles on window tinting, PPF, ceramic coating, and vehicle protection from DrivenMN.' },
    ];
};

export default function BlogIndex() {
    const onNavigate = useOnNavigate();
    return <Blog onNavigate={onNavigate} />;
}
