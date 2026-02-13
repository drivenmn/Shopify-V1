import { Calendar, User, ArrowRight } from 'lucide-react';
import { type BlogPost } from '../../../../utils/api';
import { Button } from '../../../../components/ui/button';

interface FeaturedPostProps {
  post: BlogPost;
  onNavigate: (page: string) => void;
}

export function FeaturedPost({ post, onNavigate }: FeaturedPostProps) {
  return (
    <section className="relative w-full bg-auto-carbon border-b border-white/5 overflow-hidden group cursor-pointer" onClick={() => onNavigate(`blog/${post.id}`)}>
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Image Side */}
        <div className="relative h-[300px] lg:h-auto overflow-hidden">
          <img 
            src={post.image || 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80'} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 lg:from-transparent lg:bg-gradient-to-r lg:via-black/20 lg:to-black/80 opacity-60" />
        </div>

        {/* Content Side */}
        <div className="relative flex flex-col justify-center p-8 lg:p-16 bg-auto-asphalt lg:bg-transparent">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-auto-plum-neon text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              Featured Article
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-['Exo_2'] uppercase">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-auto-silver text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-auto-plum-neon" />
              {new Date(post.published_at).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-auto-plum-neon" />
              {post.author}
            </div>
          </div>

          <p className="text-gray-300 text-lg mb-8 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          <div>
            <Button 
              className="bg-transparent border border-auto-plum-neon text-auto-plum-neon hover:bg-auto-plum-neon hover:text-black font-bold uppercase tracking-wide gap-2 group-hover:gap-3 transition-all"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
