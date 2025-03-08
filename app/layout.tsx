import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WANGSTUDIO',
  description: 'Next.js web application for WANGSTUDIO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
