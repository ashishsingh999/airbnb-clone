'use client';

import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <div className="text-center">
        <div className="text-2xl font-bold">
          {title}
        </div>
        <div className="font-light text-neutral-500 mt-2">
          {subtitle}
        </div>
      </div>
      {showReset && (
        <div className="w-48 mt-4">
          <button 
            onClick={() => router.push('/')}
            className="
              relative
              disabled:opacity-70
              disabled:cursor-not-allowed
              rounded-lg
              hover:opacity-80
              transition
              w-full
              bg-rose-500
              border-rose-500
              text-white
              text-md
              py-3
              font-semibold
              border-2
            "
          >
            Remove all filters
          </button>
        </div>
      )}
    </div>
   );
}
 
export default EmptyState;

