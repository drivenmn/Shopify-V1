import type { MetaFunction } from '@shopify/remix-oxygen';
import { ColorPPFConfigurator } from '~/legacy/components/configurators';

export const meta: MetaFunction = () => [
    { title: 'Color PPF Visualizer - DrivenMN' },
    { name: 'description', content: 'Visualize Color PPF options for your vehicle.' },
];

export default function Route() {
    return <ColorPPFConfigurator />;
}
