import { Search } from 'lucide-react';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}: BlogFilterProps) {
  return (
    <div className="bg-auto-carbon border-y border-white/5 sticky top-[72px] z-30 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-auto-plum-neon text-black shadow-[0_0_15px_rgba(157,78,221,0.4)]'
                    : 'bg-white/5 text-auto-silver hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-black/20 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-auto-plum-neon focus:ring-1 focus:ring-auto-plum-neon transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-auto-silver" />
          </div>
        </div>
      </div>
    </div>
  );
}
