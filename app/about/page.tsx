import { Navbar } from '@/app/components/navbar/Navbar';
import { Footer } from '@/app/components/footer/Footer';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-6">About WANGSTUDIO</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl">WANGSTUDIO is a creative space dedicated to innovative design and artistic expression.</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Founded in 2020, WANGSTUDIO emerged from a passion for combining traditional craft techniques with contemporary design principles.
              Our founder, Jane Wang, envisioned a space where artists and designers could collaborate, learn, and create together.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At WANGSTUDIO, we're committed to fostering creativity through education, collaboration, and the production of thoughtfully designed products.
              We believe in sustainable practices, ethical production, and the power of design to transform everyday experiences.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p>
              Our diverse team consists of designers, craftspeople, educators, and creative thinkers who bring a wide range of skills and perspectives to our studio.
              Together, we work to create beautiful products and meaningful experiences for our community.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
