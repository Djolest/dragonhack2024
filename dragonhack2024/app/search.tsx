'use client';
import Image from "next/image";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    
    <div className="relative flex flex-1 flex-shrink-0">
        {
    //  <Image src="/magnifying-glass.svg" alt="magnifying glass" width={10} height={10} />
  }
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <img src="/magnifying-glass.svg" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      {/* Provide the correct path to your image relative to the `public` directory */}
    </div>
  );
}