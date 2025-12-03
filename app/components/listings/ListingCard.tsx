'use client';

import Image from "next/image";
import { Listing, User } from "@/app/types";

interface ListingCardProps {
  data: Listing;
  reservation?: any;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: User | null;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  return (
    <div 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="absolute top-3 right-3">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.locationValue}
        </div>
        <div className="font-light text-neutral-500">
          {data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            $ {data.price}
          </div>
          {!reservation && (
            <div className="font-light">night</div>
          )}
        </div>
      </div>
    </div>
   );
}
 
export default ListingCard;

