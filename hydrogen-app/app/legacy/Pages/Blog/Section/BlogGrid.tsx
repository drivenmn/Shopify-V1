import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { type BlogPost } from '~/legacy/utils/api';

interface BlogGridProps {
  posts: BlogPost[];
  onNavigate?: (page: string) => void;
}

export function BlogGrid({ posts, onNavigate }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="text-white/50 text-lg">No articles found matching your criteria.</div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-auto-asphalt" data-section="BlogGrid">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article 
              key={post.id} 
              className="bg-auto-carbon border border-white/5 rounded-2xl overflow-hidden hover:border-auto-plum-neon/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.15)] transition-all duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => onNavigate?.(`blog/${post.id}`)}
            >
              {post.image && (
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-auto-plum-neon" />
                    <span className="text-xs text-white font-bold">
                      {new Date(post.published_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="bg-auto-plum-deep/20 text-auto-plum-neon border border-auto-plum-neon/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-auto-plum-neon transition-colors font-['Exo_2'] uppercase leading-tight line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-auto-silver text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  
                  <span className="text-auto-plum-neon text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
