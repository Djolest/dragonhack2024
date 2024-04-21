import React from 'react';
import { listTutors, listNotes } from './../lib/server/appwrite'

const TopSectionTutors = ({title, data}:{title:any, data:any}) => (
  <div className="flex flex-col items-center">
    
    <div className="w-[80%] p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow mb-8">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-bold tracking-tight text-gray-50">{title}</h5>
        <a href="/student/searchTutor" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300">
          <span>See All</span>
          <img src="/search.svg" alt="Search" className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
    
    {data.map( (item:any) => (
      <a key={item.id} href="/student/searchTutor" className="w-[70%] p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h2 className="text-lg font-semibold">{item.Name ? item.Name : item.Title}</h2>
        <p>{item.Bio + ' ' +  (item.Subjects ? " " : item.Subject.toString())}</p>
      </a>
    ))}

  </div>
);

const TopSectionNotes = ({title, data}:{title:any, data:any}) => (
  <div className="flex flex-col items-center">
    
    <div className="w-[80%] p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow mb-8">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-bold tracking-tight text-gray-50">{title}</h5>
        <a href="/student/searchNotes" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300">
          <span>See All</span>
          <img src="/search.svg" alt="Search" className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
    
    {data.map( (item:any) => (
      <a key={item.id} href={item.Url} className="w-[70%] p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h2 className="text-lg font-semibold">{item.Name ? item.Name : item.Title}</h2>
        <p>{item.Bio + ' ' +  item.Subject.toString()}</p>
      </a>
    ))}

  </div>
);


export const dynamic = 'force-dynamic';

export default async function Page(){
  const { documents:tutors } = await listTutors();
  const { documents:notes } = await listNotes();
  console.log(notes);

  return (
    <div className="container mx-auto py-8">
      <TopSectionTutors title="Top Tutors" data={tutors} />
      <TopSectionNotes title="Top Notes" data={notes} />
    </div>
  );
};
