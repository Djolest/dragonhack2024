'use client';
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder}: { placeholder: string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    }
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
        onChange={(e) => {
            handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      {/* Provide the correct path to your image relative to the `public` directory */}
    </div>
  );
}
