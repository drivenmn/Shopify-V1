// Mock API functions for Supabase integration
// Replace with actual Supabase client calls when connected

import movedImage from "figma:asset/1519557d6f87c8fdad43e0e63353e72148f221bb.png";

export interface PPFQuote {
  id?: string;
  created_at?: string;
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    type: string;
  };
  configuration: {
    package: string;
    film: string;
    addons: string[];
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
  status?: string;
}

export interface TintQuote {
  id?: string;
  created_at?: string;
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    type: string;
  };
  configuration: {
    package: string;
    film: string;
    vlt: number;
    addons: string[];
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
  status?: string;
}

export interface ContactSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  vehicle?: string;
  service?: string;
  message: string;
  status?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  tags: string[];
  image?: string;
}

// Mock storage
const mockStorage = {
  ppfQuotes: [] as PPFQuote[],
  tintQuotes: [] as TintQuote[],
  contactSubmissions: [] as ContactSubmission[],
  blogPosts: [] as BlogPost[]
};

export async function submitPPFQuote(quoteData: PPFQuote): Promise<{ success: boolean; data?: PPFQuote; error?: string }> {
  try {
    const quote: PPFQuote = {
      ...quoteData,
      id: `ppf-${Date.now()}`,
      created_at: new Date().toISOString(),
      status: 'pending'
    };

    mockStorage.ppfQuotes.push(quote);

    // Simulate API delay
    // Mock delay removed for SSR compatibility

    return { success: true, data: quote };
  } catch (error) {
    return { success: false, error: 'Failed to submit quote' };
  }
}

export async function submitTintQuote(quoteData: TintQuote): Promise<{ success: boolean; data?: TintQuote; error?: string }> {
  try {
    const quote: TintQuote = {
      ...quoteData,
      id: `tint-${Date.now()}`,
      created_at: new Date().toISOString(),
      status: 'pending'
    };

    mockStorage.tintQuotes.push(quote);

    // Simulate API delay
    // Mock delay removed for SSR compatibility

    return { success: true, data: quote };
  } catch (error) {
    return { success: false, error: 'Failed to submit quote' };
  }
}

export async function submitContactForm(formData: ContactSubmission): Promise<{ success: boolean; data?: ContactSubmission; error?: string }> {
  try {
    const submission: ContactSubmission = {
      ...formData,
      id: `contact-${Date.now()}`,
      created_at: new Date().toISOString(),
      status: 'new'
    };

    mockStorage.contactSubmissions.push(submission);

    // Simulate API delay
    // Mock delay removed for SSR compatibility

    return { success: true, data: submission };
  } catch (error) {
    return { success: false, error: 'Failed to submit contact form' };
  }
}

export async function getBlogPosts(): Promise<{ success: boolean; data?: BlogPost[]; error?: string }> {
  try {
    // Mock blog posts
    const posts: BlogPost[] = [
      // Commercial
      {
        id: 'c1',
        title: 'Enhancing Your Office with Privacy Window Film',
        excerpt: 'Increase productivity and privacy in your workspace with commercial window tinting solutions.',
        content: '<p>Commercial window film is a game-changer for modern offices...</p>',
        author: 'DrivenMN Commercial Team',
        published_at: '2025-10-05T00:00:00Z',
        tags: ['Commercial', 'Tint', 'Office'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
      },
      {
        id: 'c2',
        title: 'Fleet Protection: Why Wrap Your Company Vehicles?',
        excerpt: 'Protect your fleet\'s resale value while advertising your brand on the go.',
        content: '<p>Your fleet is a mobile billboard waiting to happen...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-10-02T00:00:00Z',
        tags: ['Commercial', 'Wraps', 'Fleet'],
        image: 'https://images.unsplash.com/photo-1616423664033-63518d396d1d?auto=format&fit=crop&q=80'
      },
      {
        id: 'c3',
        title: 'Energy Savings for Large Commercial Buildings',
        excerpt: 'How solar control window film can significantly reduce your building\'s cooling costs.',
        content: '<p>Energy efficiency is a top priority for building managers...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-28T00:00:00Z',
        tags: ['Commercial', 'Tint', 'Efficiency'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
      },
      {
        id: 'c4',
        title: 'Security Films: Protecting Your Retail Storefront',
        excerpt: 'Fortify your business against break-ins and severe weather with security window film.',
        content: '<p>Glass is the weakest point of entry for any storefront...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-15T00:00:00Z',
        tags: ['Commercial', 'Safety', 'Security'],
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80'
      },

      // News
      {
        id: 'n1',
        title: 'We Have Moved! Visit Our New HQ in Burnsville',
        excerpt: 'DrivenMN has a new home. Come visit our expanded facility at 12040 Riverwood Dr in Burnsville.',
        content: `
          <p class="lead text-xl text-white mb-6">Big news for the DrivenMN family! We have officially moved our operations to a brand new, state-of-the-art facility in Burnsville.</p>
          
          <p>You can now find us at our new home:</p>
          <div class="bg-auto-plum-deep/10 border-l-4 border-auto-plum-neon p-6 my-8 rounded-r-lg">
            <h3 class="text-xl font-bold text-white m-0">DrivenMN Headquarters</h3>
            <p class="text-lg text-auto-silver mt-2">12040 Riverwood Dr<br/>Burnsville, MN 55337</p>
          </div>

          <h2>Why We Moved</h2>
          <p>Thanks to the incredible support from our customers, we simply outgrew our old shop. To maintain the high standards of quality and service you expect from DrivenMN, we needed a space that could keep up with our demand.</p>
          
          <h2>What This Means for You</h2>
          <p>Our new facility isn't just bigger; it's better. We've designed it from the ground up to be the ultimate vehicle protection studio:</p>
          <ul class="grid md:grid-cols-2 gap-4 my-8">
            <li class="flex items-start gap-3">
              <span class="text-auto-plum-neon mt-1">✓</span>
              <span><strong>Climate-Controlled Bays:</strong> Essential for the perfect application of PPF and Ceramic Coatings.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-auto-plum-neon mt-1">✓</span>
              <span><strong>Advanced Lighting:</strong> High-CRI lighting allows us to spot and correct paint defects that others miss.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-auto-plum-neon mt-1">✓</span>
              <span><strong>Expanded Capacity:</strong> Shorter lead times for appointments so you can get protected sooner.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-auto-plum-neon mt-1">✓</span>
              <span><strong>Client Lounge:</strong> A comfortable space for you to relax during consultations or quick services.</span>
            </li>
          </ul>

          <h2>Come Visit Us!</h2>
          <p>Whether you're looking for a full vehicle wrap, window tint, or just want to see the new shop, we invite you to stop by. We're excited to show you what the future of DrivenMN looks like.</p>
        `,
        author: 'DrivenMN Team',
        published_at: '2025-10-10T00:00:00Z',
        tags: ['News', 'Company', 'New Location'],
        image: movedImage
      },
      {
        id: 'n2',
        title: 'New XPEL Fusion Plus Ceramic Coating Formula Released',
        excerpt: 'Experience the next generation of hydrophobic protection with XPEL\'s latest formula.',
        content: '<p>XPEL has raised the bar once again with Fusion Plus...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-10-01T00:00:00Z',
        tags: ['News', 'Product Launch', 'Ceramic'],
        image: 'https://images.unsplash.com/photo-1632823471443-7eb6622d99d3?auto=format&fit=crop&q=80'
      },
      {
        id: 'n3',
        title: 'Winter 2025: Protecting Your Car from Road Salt',
        excerpt: 'Prepare your vehicle for the harsh Minnesota winter with our seasonal protection packages.',
        content: '<p>Winter is coming, and so is the salt...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-20T00:00:00Z',
        tags: ['News', 'Seasonal', 'Winter'],
        image: 'https://images.unsplash.com/photo-1483304528321-0674f0040030?auto=format&fit=crop&q=80'
      },
      {
        id: 'n4',
        title: 'DrivenMN Wins "Best Detailing Shop of 2025" Award',
        excerpt: 'We are honored to be recognized by the Minneapolis Auto Enthusiast Group.',
        content: '<p>Hard work pays off! We are thrilled to accept this award...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-05T00:00:00Z',
        tags: ['News', 'Awards', 'Community'],
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80'
      },

      // Guides
      {
        id: 'g1',
        title: 'How to Maintain Your Ceramic Coating',
        excerpt: 'Essential tips and tricks to ensure your ceramic coating lasts for years.',
        content: '<p>You\'ve invested in a ceramic coating, now here is how to care for it...</p>',
        author: 'DrivenMN Tech',
        published_at: '2025-09-25T00:00:00Z',
        tags: ['Guides', 'Maintenance', 'Ceramic'],
        image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80'
      },
      {
        id: 'g2',
        title: 'PPF vs. Vinyl Wraps: What\'s the Difference?',
        excerpt: 'Confused between Paint Protection Film and Vinyl Wraps? We break it down.',
        content: '<p>While they might look similar, PPF and Vinyl serve very different purposes...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-18T00:00:00Z',
        tags: ['Guides', 'Comparison', 'PPF'],
        image: 'https://images.unsplash.com/photo-1621217646141-8f352601c70e?auto=format&fit=crop&q=80'
      },
      {
        id: 'g3',
        title: 'Pre-Installation Checklist: Getting Your Car Ready',
        excerpt: 'What you need to do before bringing your car in for PPF or Tint.',
        content: '<p>A smooth installation starts with preparation...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-10T00:00:00Z',
        tags: ['Guides', 'Preparation', 'Tips'],
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80'
      },
      {
        id: 'g4',
        title: 'Understanding Tint Percentages and Laws in MN',
        excerpt: 'Stay legal and stylish. A guide to Minnesota window tint laws.',
        content: '<p>Don\'t get pulled over. Know the legal limits for your vehicle...</p>',
        author: 'DrivenMN Legal',
        published_at: '2025-08-25T00:00:00Z',
        tags: ['Guides', 'Legal', 'Tint'],
        image: 'https://images.unsplash.com/photo-1562916174-c36149441221?auto=format&fit=crop&q=80'
      },

      // Detailing
      {
        id: 'd1',
        title: 'The Art of Paint Correction: Removing Swirls',
        excerpt: 'Dive deep into the process of restoring your paint to a mirror finish.',
        content: '<p>Paint correction is more than just polishing; it is surgery for your clear coat...</p>',
        author: 'DrivenMN Detailer',
        published_at: '2025-09-30T00:00:00Z',
        tags: ['Detailing', 'Paint Correction'],
        image: 'https://images.unsplash.com/photo-1605218427306-022ba8c1a668?auto=format&fit=crop&q=80'
      },
      {
        id: 'd2',
        title: 'Interior Detailing: More Than Just a Vacuum',
        excerpt: 'Why deep cleaning your interior is crucial for your health and comfort.',
        content: '<p>Your car interior can harbor more bacteria than a public restroom...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-22T00:00:00Z',
        tags: ['Detailing', 'Interior', 'Cleaning'],
        image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80'
      },
      {
        id: 'd3',
        title: 'Engine Bay Cleaning: Safe and Effective Methods',
        excerpt: 'Keep your engine running cool and looking clean with professional detailing.',
        content: '<p>Many owners fear cleaning their engine bay, but with the right tools...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-12T00:00:00Z',
        tags: ['Detailing', 'Engine', 'Maintenance'],
        image: 'https://images.unsplash.com/photo-1486262715619-01b8c2297615?auto=format&fit=crop&q=80'
      },
      {
        id: 'd4',
        title: 'Restoring Headlights to Like-New Clarity',
        excerpt: 'Improve your night vision and vehicle aesthetics with headlight restoration.',
        content: '<p>Foggy headlights are not just ugly; they are dangerous...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-08-30T00:00:00Z',
        tags: ['Detailing', 'Restoration', 'Safety'],
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80'
      },

      // Protection
      {
        id: 'p1',
        title: 'Windshield Protection Film: Is It Worth It?',
        excerpt: 'Stop rock chips before they crack your expensive windshield.',
        content: '<p>Replacing a modern windshield with ADAS sensors is expensive...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-10-08T00:00:00Z',
        tags: ['Protection', 'Glass', 'PPF'],
        image: 'https://images.unsplash.com/photo-1494905998402-395d579af97f?auto=format&fit=crop&q=80'
      },
      {
        id: 'p2',
        title: 'Ceramic Coating for Wheels and Calipers',
        excerpt: 'Make cleaning brake dust a breeze with high-temp ceramic coatings.',
        content: '<p>Wheels face the harshest environment on your vehicle...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-10-03T00:00:00Z',
        tags: ['Protection', 'Wheels', 'Ceramic'],
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80'
      },
      {
        id: 'p3',
        title: 'Matte Paint Protection: Specific Care Needs',
        excerpt: 'Owning a matte car requires special attention. Here is what you need to know.',
        content: '<p>Matte paint is beautiful but unforgiving. You cannot polish it...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-29T00:00:00Z',
        tags: ['Protection', 'Matte', 'PPF'],
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80'
      },
      {
        id: 'p4',
        title: 'Protecting Piano Black Trim from Scratches',
        excerpt: 'How to keep those delicate interior surfaces scratch-free forever.',
        content: '<p>Piano black trim looks great on the showroom floor, but scratches instantly...</p>',
        author: 'DrivenMN Team',
        published_at: '2025-09-16T00:00:00Z',
        tags: ['Protection', 'Interior', 'PPF'],
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80'
      },

      // Existing / Legacy (keeping for variety)
      {
        id: '1',
        title: 'Why Paint Protection Film is Essential for Tesla Owners',
        excerpt: 'Discover how PPF can protect your Tesla\'s pristine paint from rock chips, scratches, and environmental damage.',
        content: `
          <p>Tesla vehicles are renowned for their sleek design and cutting-edge technology, but their paint quality has often been a topic of discussion among owners. The water-based paints used by manufacturers today are environmentally friendly but can be softer and more susceptible to damage than traditional paints. This makes Paint Protection Film (PPF) an essential investment for any Tesla owner looking to maintain their vehicle's showroom finish.</p>
          
          <h2>What is Paint Protection Film?</h2>
          <p>Paint Protection Film, commonly known as "Clear Bra," is a transparent, urethane material that is applied to the exterior painted surfaces of your vehicle. It is designed to absorb the impact of rock chips, road debris, and bug splatter, preventing them from damaging the paint underneath. Modern PPF, like XPEL ULTIMATE PLUS, also features self-healing technology that allows minor swirls and scratches to disappear with heat.</p>

          <h2>Key Benefits for Tesla Owners</h2>
          <ul>
            <li><strong>Impact Protection:</strong> The front end of a Tesla, with its lack of a traditional grille, presents a large surface area that acts as a magnet for stone chips. PPF provides a robust barrier against this daily wear and tear.</li>
            <li><strong>Self-Healing Properties:</strong> Say goodbye to swirl marks from washing. The top coat of high-quality PPF heals itself when exposed to the sun or warm water.</li>
            <li><strong>Resale Value:</strong> A Tesla with pristine paint will always command a higher resale value than one riddled with chips and scratches. PPF protects your investment.</li>
            <li><strong>Invisible Protection:</strong> When professionally installed, PPF is virtually invisible, preserving the original look and color of your Tesla.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Investing in PPF is not just about keeping your car looking good; it's about peace of mind. Knowing that your Tesla is protected from the hazards of the road allows you to enjoy the driving experience to the fullest. At DrivenMN, we specialize in seamless PPF installations for all Tesla models, ensuring maximum coverage and protection.</p>
        `,
        author: 'DrivenMN Team',
        published_at: '2025-10-01T00:00:00Z',
        tags: ['PPF', 'Tesla', 'Protection', 'Automotive'],
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80'
      },
      {
        id: '2',
        title: 'XPEL Stealth vs. Ultimate Plus: Which Film is Right for You?',
        excerpt: 'A comprehensive comparison of XPEL\'s premium paint protection films and their unique benefits.',
        content: `
          <p>Choosing the right Paint Protection Film (PPF) can be a tough decision, especially when faced with excellent options like XPEL ULTIMATE PLUS and XPEL STEALTH. Both films offer superior protection against rock chips and road debris, but they offer very different aesthetic results. Let's break down the differences to help you decide which one fits your style.</p>

          <h2>XPEL ULTIMATE PLUS: The Invisible Shield</h2>
          <p>XPEL ULTIMATE PLUS is a gloss finish film designed to be virtually invisible on your vehicle's paint. It enhances the depth and clarity of your factory paint while providing robust protection.</p>
          <p><strong>Best for:</strong> Owners who love the factory gloss look of their vehicle and want to keep it looking brand new without altering its appearance.</p>

          <h2>XPEL STEALTH: The Satin Transformation</h2>
          <p>XPEL STEALTH is a satin-finish film that transforms glossy paint into a sleek, matte finish. It allows you to change the look of your car completely while providing the same level of protection as ULTIMATE PLUS.</p>
          <p><strong>Best for:</strong> Owners looking to make a statement. It gives your vehicle a unique, custom look that stands out from the crowd, turning any color into a stunning frozen or matte version of itself.</p>

          <h2>Shared Features</h2>
          <ul>
            <li><strong>Self-Healing:</strong> Both films feature self-healing top coats that eliminate fine scratches and swirl marks.</li>
            <li><strong>Stain Resistance:</strong> They are resistant to staining from bird droppings, bug guts, and air pollution.</li>
            <li><strong>Warranty:</strong> Both come with a 10-year manufacturer's warranty against yellowing, cracking, peeling, and hazing.</li>
          </ul>

          <h2>Verdict</h2>
          <p>If you want protection that disappears, go with ULTIMATE PLUS. If you want protection that turns heads and transforms your vehicle's aesthetic, XPEL STEALTH is the way to go. Whichever you choose, DrivenMN guarantees a professional, custom installation.</p>
        `,
        author: 'DrivenMN Team',
        published_at: '2025-09-28T00:00:00Z',
        tags: ['PPF', 'XPEL', 'Comparison', 'Automotive'],
        image: 'https://images.unsplash.com/photo-1621217646141-8f352601c70e?auto=format&fit=crop&q=80'
      },
      {
        id: '4',
        title: 'Protecting Your Rivian: EV-Specific Considerations',
        excerpt: 'Why electric vehicles like Rivian need specialized protection and care.',
        content: `
          <p>Rivian's R1T and R1S are rugged, capable, and undeniably stylish. However, as electric adventure vehicles, they face unique challenges that make paint protection even more critical. Here is why every Rivian owner should consider professional protection immediately after delivery.</p>

          <h2>The "Flat Face" Factor</h2>
          <p>Like many EVs, Rivians have a distinct front-end design with less grille and more painted surface area. This "flat face" takes the brunt of aerodynamic impact, making it a prime target for rock chips and bug splatter on highway drives.</p>

          <h2>Off-Road Readiness</h2>
          <p>Rivians are built for adventure. If you plan to take your R1T onto gravel roads or trails, the risk of "pin-striping" from branches and brush is high. Paint Protection Film (PPF) acts as a sacrificial layer, absorbing these scratches so your factory paint remains untouched.</p>

          <h2>The Gear Tunnel and Cargo Areas</h2>
          <p>Unique features like the Gear Tunnel see a lot of traffic. Loading and unloading gear can easily lead to scuffs and scratches on the sills and surrounding paint. Applying PPF to these high-wear areas ensures they stay looking new.</p>

          <h2>Ceramic Coating for Easy Cleanup</h2>
          <p>After a day on the trails, your Rivian will likely be covered in mud and dust. A high-quality ceramic coating makes cleaning effortless. The hydrophobic surface sheds water and dirt, meaning you can often rinse your truck clean without heavy scrubbing.</p>

          <h2>Conclusion</h2>
          <p>Your Rivian is built to handle the elements, but its paint doesn't have to suffer for it. A combination of PPF for impact protection and ceramic coating for ease of maintenance is the ultimate prescription for keeping your EV adventure-ready.</p>
        `,
        author: 'DrivenMN Team',
        published_at: '2025-09-20T00:00:00Z',
        tags: ['Rivian', 'EV', 'Protection', 'Automotive'],
        image: 'https://images.unsplash.com/photo-1669649562854-c92c90858102?auto=format&fit=crop&q=80'
      }
    ];

    // Mock delay removed for SSR compatibility

    return { success: true, data: posts };
  } catch (error) {
    return { success: false, error: 'Failed to fetch blog posts' };
  }
}

export async function getBlogPost(id: string): Promise<{ success: boolean; data?: BlogPost; error?: string }> {
  try {
    const posts = await getBlogPosts();
    const post = posts.data?.find(p => p.id === id);

    if (!post) {
      return { success: false, error: 'Post not found' };
    }

    return { success: true, data: post };
  } catch (error) {
    return { success: false, error: 'Failed to fetch blog post' };
  }
}
