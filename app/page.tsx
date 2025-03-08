import { Navbar } from '@/app/components/navbar/Navbar';
import { Footer } from '@/app/components/footer/Footer';
import { HeroSection } from '@/app/components/herosection/HeroSection';
import { ProductCard } from '@/app/components/featureproduct/ProductCard';
import { WorkshopCard } from '@/app/components/workshop/WorkshopCard';
import { NewsletterSignup } from '@/app/components/contactnewsletter/NewsletterSignup';
import { Product, Workshop } from '@/app/types';

// Featured products
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    description: 'Handcrafted ceramic vase with a unique glazed finish.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1612196808214-b7e239d5d28d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Wooden Serving Board',
    description: 'Artisanal wooden serving board made from sustainable oak.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1579609372306-7b34639ef310?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Linen Throw Pillow',
    description: 'Soft linen throw pillow with hand-stitched detailing.',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1619295748088-59c232a7eec2?q=80&w=800&auto=format&fit=crop'
  }
];

// Featured workshops
const featuredWorkshops: Workshop[] = [
  {
    id: '1',
    title: 'Ceramic Handbuilding for Beginners',
    description: 'Learn the fundamentals of ceramic handbuilding techniques.',
    date: '2025-04-15',
    location: 'WANGSTUDIO Main Gallery',
    price: 120.00,
    capacity: 12,
    instructor: 'Maria Chen',
    imageUrl: 'https://images.unsplash.com/photo-1565373987291-4d7424dd9e59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Textile Printing Workshop',
    description: 'Explore various fabric printing techniques using natural dyes.',
    date: '2025-04-22',
    location: 'WANGSTUDIO Textile Lab',
    price: 95.00,
    capacity: 8,
    instructor: 'David Wong',
    imageUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <a href="/products" className="text-primary hover:underline mt-2 md:mt-0">View all products</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-3xl font-bold">Upcoming Workshops</h2>
            <a href="/workshops" className="text-primary hover:underline mt-2 md:mt-0">View all workshops</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Stay Connected</h2>
          <NewsletterSignup />
        </div>
      </section>
      
      <Footer />
    </>
  );
}
