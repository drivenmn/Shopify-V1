import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { getBlogPost, getBlogPosts, type BlogPost } from '~/legacy/utils/api';
import { Button } from '~/legacy/components/ui/button';
import { Newsletter } from './Section/Newsletter';
import { SEO } from '~/legacy/components/SEO';
import { Loader2 } from 'lucide-react';

interface BlogPostPageProps {
  id: string;
  onNavigate: (page: string) => void;
}

export function BlogPostPage({ id, onNavigate }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const postResult = await getBlogPost(id);
      
      if (postResult.success && postResult.data) {
        setPost(postResult.data);
        
        // Fetch related posts (mock logic: just get other posts)
        const allPostsResult = await getBlogPosts();
        if (allPostsResult.success && allPostsResult.data) {
          const others = allPostsResult.data
            .filter(p => p.id !== id)
            .slice(0, 3); // Take first 3 as related
          setRelatedPosts(others);
        }
      }
      setLoading(false);
    }
    loadData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-auto-asphalt">
        <Loader2 className="w-8 h-8 text-auto-plum-neon animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-auto-asphalt text-white">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Button onClick={() => onNavigate('blog')}>Return to Blog</Button>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrivenMN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drivenmn.com/logo.png"
      }
    },
    "datePublished": post.published_at,
    "description": post.excerpt
  };

  return (
    <>
      <SEO 
        title={`${post.title} | DrivenMN Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonicalUrl={`https://drivenmn.com/blog/${post.id}`}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-auto-asphalt pb-20 pt-20">
        
        {/* Navigation Bar */}
        <div className="bg-auto-carbon border-b border-white/5 sticky top-[72px] z-30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
             <Button 
               variant="ghost" 
               onClick={() => onNavigate('blog')}
               className="text-auto-silver hover:text-white hover:bg-white/5 pl-0 gap-2"
             >
               <ArrowLeft className="w-4 h-4" />
               Back to Articles
             </Button>

             <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-auto-silver uppercase tracking-wider hidden sm:inline-block mr-2">Share:</span>
               <button className="p-2 rounded-full bg-white/5 text-auto-silver hover:bg-[#1877F2] hover:text-white transition-colors">
                 <Facebook className="w-4 h-4" />
               </button>
               <button className="p-2 rounded-full bg-white/5 text-auto-silver hover:bg-[#1DA1F2] hover:text-white transition-colors">
                 <Twitter className="w-4 h-4" />
               </button>
               <button className="p-2 rounded-full bg-white/5 text-auto-silver hover:bg-[#0A66C2] hover:text-white transition-colors">
                 <Linkedin className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article>
                {/* Header */}
                <header className="mb-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-auto-plum-deep/20 text-auto-plum-neon border border-auto-plum-neon/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-['Exo_2'] uppercase">
                    {post.title}
                  </h1>

                  <div className="flex items-center gap-6 text-auto-silver text-sm border-b border-white/5 pb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-auto-plum-neon" />
                      {new Date(post.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-auto-plum-neon" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-auto-plum-neon" />
                      5 min read
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="mb-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  <img 
                    src={post.image || 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80'} 
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Body Content */}
                <div 
                  className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-['Exo_2'] prose-headings:uppercase prose-headings:font-bold prose-headings:text-white
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
                    prose-h3:text-xl prose-h3:text-auto-plum-neon prose-h3:mt-8
                    prose-p:text-auto-silver prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-white
                    prose-ul:my-6 prose-li:text-auto-silver prose-li:my-2
                    prose-a:text-auto-plum-neon prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Author Box */}
              <div className="bg-auto-carbon border border-white/5 rounded-2xl p-6">
                 <h3 className="text-white font-bold uppercase font-['Exo_2'] mb-4">About the Author</h3>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-auto-plum-deep/20 rounded-full flex items-center justify-center border border-auto-plum-neon/30">
                     <User className="w-6 h-6 text-auto-plum-neon" />
                   </div>
                   <div>
                     <p className="text-white font-bold">{post.author}</p>
                     <p className="text-xs text-auto-silver">Automotive Protection Specialist</p>
                   </div>
                 </div>
                 <p className="text-sm text-auto-silver leading-relaxed">
                   The DrivenMN team consists of certified installers and detailing experts dedicated to protecting and perfecting vehicles in Minneapolis.
                 </p>
              </div>

              {/* Related Posts */}
              <div className="bg-auto-carbon border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold uppercase font-['Exo_2'] mb-6 flex items-center gap-2">
                  <span className="w-1 h-4 bg-auto-plum-neon rounded-full"></span>
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map(related => (
                    <div 
                      key={related.id} 
                      className="group cursor-pointer"
                      onClick={() => onNavigate(`blog/${related.id}`)}
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-3 relative">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">Read</span>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-2 group-hover:text-auto-plum-neon transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Calendar className="w-3 h-3" />
                        {new Date(related.published_at).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-auto-plum-deep/20 to-auto-carbon border border-auto-plum-neon/20 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 font-['Exo_2'] uppercase">
                    Ready to Protect Your Vehicle?
                  </h3>
                  <p className="text-sm text-auto-silver mb-6">
                    Get a free quote for the services mentioned in this article.
                  </p>
                  <Button 
                    onClick={() => onNavigate('vehicle-configurator')}
                    className="w-full bg-auto-plum-neon text-black hover:bg-white font-bold uppercase tracking-wide"
                  >
                    Start Configuration
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    </>
  );
}
