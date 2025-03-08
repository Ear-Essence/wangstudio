import Link from 'next/link';
import { NavItem } from '@/app/types';

interface NavbarProps {
  items?: NavItem[];
}

export function Navbar({ items = [] }: NavbarProps): JSX.Element {
  return (
    <header className="w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">WANGSTUDIO</Link>
        <nav className="flex gap-6">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {item.title}
            </Link>
          ))}
          {items.length === 0 && (
            <>
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
              <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">Products</Link>
              <Link href="/workshops" className="text-sm font-medium transition-colors hover:text-primary">Workshops</Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
