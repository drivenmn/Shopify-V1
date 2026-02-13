import type { MetaFunction } from '@shopify/remix-oxygen';
import { TintConfigurator } from '~/legacy/components/configurators';

export const meta: MetaFunction = () => [
    { title: 'Tint Configurator - DrivenMN' },
    { name: 'description', content: 'Configure your Window Tint package.' },
];

export default function Route() {
    return <TintConfigurator />;
}
