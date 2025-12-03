export interface Listing {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  userId: string;
  price: number;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  favoriteIds: string[];
}

