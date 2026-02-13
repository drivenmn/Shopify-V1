import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/legacy/components/ui/carousel";

interface TintCareProductsProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    id: 1,
    name: "XPEL Anti-Static Window Tint Cleaner",
    price: "$19.95",
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1550505095-81378a674395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBnbGFzcyUyMGNsZWFuZXIlMjBib3R0bGVlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjUxOTYyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Specially formulated to clean and protect your window tint without damaging the film. Anti-static properties repel dust and lint."
  },
  {
    id: 2,
    name: "Premium Microfiber Towel Set",
    price: "$14.95",
    rating: 5,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2ZpYmVyJTIwdG93ZWwlMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzY1MTk2MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ultra-soft, edgeless microfiber towels designed to prevent scratches on delicate window films. Perfect for daily maintenance."
  },
  {
    id: 3,
    name: "XPEL Ceramic Boost Spray",
    price: "$24.95",
    rating: 5,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1714042073736-8f6347a156a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGNsZWFuaW5nJTIwc3ByYXklMjBib3R0bGV8ZW58MXx8fHwxNzY1MTk2MjY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Enhances the hydrophobic properties of your ceramic tint. Adds a layer of protection and slickness to treated surfaces."
  },
  {
    id: 4,
    name: "Glass Cleaning Kit",
    price: "$34.95",
    rating: 5,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwa2l0fGVufDB8fHx8MTc2NTE5NjM1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete kit including cleaner, towels, and glass sealant for the ultimate clarity and protection."
  }
];

export function TintCareProducts({ onNavigate }: TintCareProductsProps) {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Aftercare Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Maintain Your Tint
            <span className="block text-primary mt-2">Professional Care Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your window tint looking new with our curated selection of safe, effective cleaning and maintenance products.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="mb-12 relative px-12 md:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col border border-border h-full">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(product.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                        <span className="font-bold text-lg text-primary">{product.price}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                        {product.description}
                      </p>

                      <button 
                        onClick={() => onNavigate('shop')}
                        className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group/btn mt-auto"
                      >
                        Add to Cart
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 md:-left-12 w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 md:-right-12 w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Car Care Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
