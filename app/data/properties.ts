export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  dates: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Loft in Downtown',
    location: 'New York, NY',
    price: 250,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Oct 15 - 20',
  },
  {
    id: '2',
    title: 'Cozy Cabin in the Woods',
    location: 'Aspen, CO',
    price: 180,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Nov 3 - 8',
  },
  {
    id: '3',
    title: 'Beachfront Villa',
    location: 'Malibu, CA',
    price: 450,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Sep 20 - 25',
  },
  {
    id: '4',
    title: 'Historic Apartment',
    location: 'Rome, Italy',
    price: 120,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Dec 10 - 15',
  },
  {
    id: '5',
    title: 'Mountain View Chalet',
    location: 'Zermatt, Switzerland',
    price: 300,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Jan 5 - 10',
  },
  {
    id: '6',
    title: 'Tropical Bungalow',
    location: 'Bali, Indonesia',
    price: 90,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dates: 'Feb 14 - 19',
  },
];

