import type { MetaFunction } from '@shopify/remix-oxygen';
import { PPFConfigurator } from '~/legacy/components/configurators';

export const meta: MetaFunction = () => [
    { title: 'PPF Configurator - DrivenMN' },
    { name: 'description', content: 'Configure your Paint Protection Film package.' },
];

export default function Route() {
    return <PPFConfigurator />;
}
