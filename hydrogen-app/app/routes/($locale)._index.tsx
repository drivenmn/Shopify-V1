import type { MetaFunction } from '@shopify/remix-oxygen';
import { useOnNavigate } from '~/lib/useNavigateCompat';
import { Home } from '~/legacy/Pages/Home/Home';

export const meta: MetaFunction = () => {
  return [
    { title: 'DrivenMN - Premium Window Tint & PPF Burnsville, MN | XPEL Certified' },
    {
      name: 'description',
      content:
        "DrivenMN is Burnsville & Minneapolis's premier automotive protection studio. Expert Window Tinting, Paint Protection Film (PPF), and Ceramic Coating.",
    },
  ];
};

export default function HomePage() {
  const onNavigate = useOnNavigate();
  return <Home onNavigate={onNavigate} />;
}
