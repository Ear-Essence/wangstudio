import Link from 'next/link';

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WANGSTUDIO</h3>
            <p className="text-sm text-muted-foreground">
              A modern web application for showcasing our work, products, and workshops.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@wangstudio.com</li>
              <li className="text-sm text-muted-foreground">Phone: (123) 456-7890</li>
              <li className="text-sm text-muted-foreground">Address: 123 Studio St, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} WANGSTUDIO. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
