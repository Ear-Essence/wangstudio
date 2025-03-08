import { Navbar } from '@/app/components/navbar/Navbar';
import { Footer } from '@/app/components/footer/Footer';
import { ContactForm } from '@/app/components/contactnewsletter/ContactForm';
import { NewsletterSignup } from '@/app/components/contactnewsletter/NewsletterSignup';

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              We'd love to hear from you! Whether you have questions about our products, workshops, or anything else, please don't hesitate to reach out.
            </p>
            
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Visit Our Studio</h2>
              <p className="mb-2">123 Studio Street</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-6">Country</p>
              
              <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
              <p className="mb-1">Monday - Friday: 9am - 6pm</p>
              <p className="mb-1">Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2">Email: info@wangstudio.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
            </div>
            
            <NewsletterSignup />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
