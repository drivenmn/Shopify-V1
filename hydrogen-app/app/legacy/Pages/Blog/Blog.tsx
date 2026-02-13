import { useState, useEffect, useMemo } from 'react';
import { getBlogPosts, type BlogPost } from '~/legacy/utils/api';
import { FeaturedPost } from './Section/FeaturedPost';
import { BlogFilter } from './Section/BlogFilter';
import { BlogGrid } from './Section/BlogGrid';
import { Newsletter } from './Section/Newsletter';
import { SEO } from '~/legacy/components/SEO';
import { Button } from '~/legacy/components/ui/button';
import { Loader2 } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

const CATEGORIES = ['All', 'Automotive', 'Residential', 'Commercial', 'News', 'Guides', 'Detailing', 'Protection'];

export function Blog({ onNavigate }: BlogProps = { onNavigate: () => {} }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function loadPosts() {
      const result = await getBlogPosts();
      if (result.success && result.data) {
        setPosts(result.data);
      }
      setLoading(false);
    }
    loadPosts();
  }, []);

  // Filter Logic
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Category Filter (using tags for now as mock data uses tags)
      const matchesCategory = activeCategory === 'All' || 
        post.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase()) ||
        (activeCategory === 'Automotive' && (post.tags.includes('PPF') || post.tags.includes('Tint'))); // Custom mapping for mock

      // Search Filter
      const query = searchQuery.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(query) || 
                            post.excerpt.toLowerCase().includes(query) ||
                            post.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Featured Post Logic
  // Show featured post only if "All" is selected and no search query
  const showFeatured = activeCategory === 'All' && !searchQuery;
  const featuredPost = showFeatured && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = showFeatured ? filteredPosts.slice(1, visibleCount + 1) : filteredPosts.slice(0, visibleCount);
  
  const hasMore = showFeatured 
    ? filteredPosts.length > visibleCount + 1 
    : filteredPosts.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "DrivenMN Blog & Resources",
    "description": "Expert automotive protection tips, guides, and industry news.",
    "publisher": {
      "@type": "Organization",
      "name": "DrivenMN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drivenmn.com/logo.png"
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-auto-asphalt">
        <Loader2 className="w-8 h-8 text-auto-plum-neon animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Blog & Resources | DrivenMN Minneapolis"
        description="Latest news, guides, and tips on paint protection film, ceramic coating, and window tinting from the experts at DrivenMN."
        keywords="car care blog, ppf guide, ceramic coating tips, window tint news, minneapolis auto detailing blog"
        canonicalUrl="https://drivenmn.com/blog"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-auto-asphalt pt-20 pb-20" data-component="BlogPageWrapper">
        
        {/* Featured Section */}
        {featuredPost ? (
          <FeaturedPost post={featuredPost} onNavigate={onNavigate} />
        ) : (
          <div className="bg-auto-carbon border-b border-white/5 py-16 text-center">
             <h1 className="text-4xl font-bold text-white mb-4 font-['Exo_2'] uppercase">
               DrivenMN <span className="text-auto-plum-neon">Insights</span>
             </h1>
             <p className="text-auto-silver max-w-2xl mx-auto">
               Search our library of articles and guides.
             </p>
          </div>
        )}

        {/* Filter Bar */}
        <BlogFilter 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
            setVisibleCount(6); // Reset pagination
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setVisibleCount(6); // Reset pagination
          }}
        />

        {/* Blog Grid */}
        <BlogGrid posts={gridPosts} onNavigate={onNavigate} />

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center pb-12">
            <Button 
              onClick={handleLoadMore}
              variant="outline"
              className="border-white/10 text-white hover:bg-auto-plum-neon hover:text-black hover:border-auto-plum-neon min-w-[200px]"
            >
              Load More Articles
            </Button>
          </div>
        )}

        {/* Newsletter */}
        <Newsletter />
      </div>
    </>
  );
}
