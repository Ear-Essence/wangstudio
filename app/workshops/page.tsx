import { Navbar } from '@/app/components/navbar/Navbar';
import { Footer } from '@/app/components/footer/Footer';
import { WorkshopCard } from '@/app/components/workshop/WorkshopCard';
import { Workshop } from '@/app/types';

// Mock workshop data
const workshops: Workshop[] = [
  {
    id: '1',
    title: 'Ceramic Handbuilding for Beginners',
    description: 'Learn the fundamentals of ceramic handbuilding techniques in this beginner-friendly workshop.',
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
    description: 'Explore various fabric printing techniques using natural dyes and traditional methods.',
    date: '2025-04-22',
    location: 'WANGSTUDIO Textile Lab',
    price: 95.00,
    capacity: 8,
    instructor: 'David Wong',
    imageUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Woodworking Essentials',
    description: 'Master basic woodworking skills and complete a small take-home project in this hands-on workshop.',
    date: '2025-05-10',
    location: 'WANGSTUDIO Wood Shop',
    price: 150.00,
    capacity: 6,
    instructor: 'Alex Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1603873439803-e13f524e05b9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Modern Calligraphy',
    description: 'Develop your own calligraphy style through guided practice and personalized instruction.',
    date: '2025-05-18',
    location: 'WANGSTUDIO Paper Studio',
    price: 85.00,
    capacity: 15,
    instructor: 'Emma Nguyen',
    imageUrl: 'https://images.unsplash.com/photo-1560830889-96792b39c713?q=80&w=800&auto=format&fit=crop'
  }
];

export default function WorkshopsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-6">Our Workshops</h1>
        <p className="text-lg mb-8">
          Join our expert-led workshops to learn new skills, meet like-minded creatives, and explore your artistic potential.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
