import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

export function NewsletterSignup(): JSX.Element {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <div className="p-6 bg-muted rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Stay updated with our latest products, workshops, and offers.
      </p>
      {isSubmitted ? (
        <div className="text-green-500 font-medium">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm"
            placeholder="Your email address"
          />
          <Button type="submit" className="w-full">Subscribe</Button>
        </form>
      )}
    </div>
  );
}
