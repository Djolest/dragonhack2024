'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TopSection ({ title, data } : {title:any, data:any}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const [filteredData, setFilteredData] = useState(data);

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
      let filtered = data;

      setFilteredData(filtered.filter((tutor:any) => {
        if(JSON.stringify(tutor).toLowerCase().includes(term.toLowerCase())) {
          return tutor;
        }
        return null;
      }));
    } else {
      params.delete('query');
      setFilteredData(data);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow mb-8">
        <div className="flex justify-between items-center">
          <h5 className="text-lg font-bold tracking-tight text-white">{title}</h5>
          <div className="relative flex flex-1 flex-shrink-0">
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
              placeholder={'Search Tutors'}
            />
          </div>
        </div>
      </div>

      {filteredData.map( (item:any) => (
        <a key={item.Name} href={'/student/tutor/'+item.user_id_Auth0} className="w-[70%] p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h2 className="text-lg font-semibold">{item.Name}</h2>
          <p>{item.Bio}</p>
        </a>
      ))}
      
    </div>
  )
};
