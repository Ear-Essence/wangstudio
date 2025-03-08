import { Navbar } from '@/app/components/navbar/Navbar';
import { Footer } from '@/app/components/footer/Footer';
import { ProductCard } from '@/app/components/featureproduct/ProductCard';
import { Product } from '@/app/types';

// Mock product data
const products: Product[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    description: 'Handcrafted ceramic vase with a unique glazed finish. Perfect for modern home decor.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1612196808214-b7e239d5d28d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Wooden Serving Board',
    description: 'Artisanal wooden serving board made from sustainable oak. Ideal for entertaining.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1579609372306-7b34639ef310?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Linen Throw Pillow',
    description: 'Soft linen throw pillow with hand-stitched detailing and natural dyes.',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1619295748088-59c232a7eec2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Handwoven Basket',
    description: 'Traditional handwoven basket using natural fibers and ancient techniques.',
    price: 78.50,
    imageUrl: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Pottery Coffee Mug',
    description: 'Hand-thrown pottery coffee mug with a comfortable handle and unique glaze.',
    price: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf16?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Art Print',
    description: 'Limited edition art print featuring original artwork by our studio artists.',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ProductsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>
        <p className="text-lg mb-8">
          Discover our collection of handcrafted products, thoughtfully designed and made with quality materials.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
