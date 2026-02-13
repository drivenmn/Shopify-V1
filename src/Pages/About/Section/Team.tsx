import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function Team() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            {/* Image (First on mobile, Second on Desktop via order if needed, but grid handles it) */}
            <div className="order-last lg:order-first relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1682531046921-4a37f93b85de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdXRvJTIwZGV0YWlsZXIlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjQ0NjM3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Driven Styling Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-['Agdasima'] text-4xl font-bold text-slate-900 uppercase tracking-tight">
                Our Team
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our team is made up of passionate car enthusiasts who take pride in their work. With years of combined experience in the industry, we have the skills and knowledge to handle any project, big or small.
                </p>
                <p>
                  We are constantly training and learning new techniques to stay at the forefront of the industry. When you choose Driven Styling, you can trust that your vehicle is in good hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
