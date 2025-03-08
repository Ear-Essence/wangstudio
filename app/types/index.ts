export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  capacity: number;
  instructor: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
