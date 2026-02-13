import type { MetaFunction } from '@shopify/remix-oxygen';
import { TeslaPackage } from '~/legacy/Pages/ByMake/TeslaPackage/TeslaPackage';

export const meta: MetaFunction = () => [
    { title: 'Tesla Package - DrivenMN' },
    { name: 'description', content: 'Tesla Protection Package from DrivenMN.' },
];

export default function Route() {
    return <TeslaPackage />;
}
