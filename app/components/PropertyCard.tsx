import Image from 'next/image';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
        <Image
          fill
          src={property.imageUrl}
          alt={property.title}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 truncate">{property.location}</h3>
          <div className="flex items-center gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{property.title}</p>
        <p className="text-gray-500 text-sm">{property.dates}</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="font-semibold">${property.price}</span>
          <span className="text-gray-900">night</span>
        </div>
      </div>
    </div>
  );
}

