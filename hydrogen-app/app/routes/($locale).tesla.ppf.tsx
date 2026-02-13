import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { TeslaPPF } from '~/legacy/Pages/ByMake/TeslaPPF/TeslaPPF';

export const meta: MetaFunction = () => [
    { title: 'Tesla PPF - DrivenMN' },
    { name: 'description', content: 'Tesla Paint Protection Film from DrivenMN.' },
];

export default function Route() {
    const onNavigate = useOnNavigate();
    return <TeslaPPF onNavigate={onNavigate} />;
}
