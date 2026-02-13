import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { Contact } from '~/legacy/Pages/Contact/Contact';

export const meta: MetaFunction = () => {
    return [
        { title: 'Contact DrivenMN - Schedule Your Appointment' },
        { name: 'description', content: 'Contact DrivenMN in Burnsville, MN for window tinting, PPF, ceramic coating, and vehicle wraps.' },
    ];
};

export default function ContactPage() {
    const onNavigate = useOnNavigate();
    return <Contact onNavigate={onNavigate} />;
}
