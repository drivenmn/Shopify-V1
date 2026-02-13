import type { MetaFunction } from '@shopify/remix-oxygen';
import { useParams } from '@remix-run/react';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { BlogPostPage } from '~/legacy/Pages/Blog/BlogPostPage';

export const meta: MetaFunction = () => {
    return [
        { title: 'Blog Post - DrivenMN' },
        { name: 'description', content: 'Read this article from DrivenMN.' },
    ];
};

export default function BlogPost() {
    const { slug } = useParams();
    const onNavigate = useOnNavigate();
    return <BlogPostPage id={slug || ''} onNavigate={onNavigate} />;
}
