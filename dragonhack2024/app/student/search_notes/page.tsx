import Search from '@/app/search';
import React from 'react';

// Common styles
const containerStyles = "container mx-auto py-8";
const cardStyles = "w-1/4 max-w-lg p-6 bg-blue-100 border border-blue-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700 mb-8";
const actionButtonStyles = "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const listItemStyles = "w-full max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"; // Changed width to "w-full max-w-xl"

const TopSection = ({ title, data }) => (
  <div>
    <div className={cardStyles + " fixed flex-col"}>
      <div className="flex justify-between items-center mb-4">
        <h5 className="mb-0 text-lg font-bold tracking-tight text-white">{title}</h5>
        <Search placeholder='Search notes'></Search>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h5 className="mb-0 text-lg font-bold tracking-tight text-white">{title}</h5>
        <Search placeholder='FILTERS'></Search>
      </div>
    </div>
  <div className="flex flex-col items-center">
    {data.map(item => (
      <a key={item.id} href="#" className={listItemStyles}>
        <h2 className="text-lg font-semibold">{item.title || item.name}</h2>
        <p>{item.subjects ? `Subjects: ${item.subjects.join(', ')}` : `Author: ${item.author}`}</p>
      </a>
    ))}
  </div>
  </div>
);

const Page = () => {
  // Sample data for top tutors
  const topTutors = [
    { id: 1, name: 'John Doe', subjects: ['Math', 'Science'] },
    { id: 2, name: 'Jane Smith', subjects: ['English', 'History'] },
    { id: 3, name: 'Alice Johnson', subjects: ['Physics', 'Chemistry'] }
  ];

  // Sample data for top notes
  const topNotes = [
    { id: 1, title: 'Note 1', author: 'John Doe' },
    { id: 2, title: 'Note 2', author: 'Jane Smith' },
    { id: 3, title: 'Note 3', author: 'Alice Johnson' },
    { id: 4, title: 'Note 1', author: 'John Doe' },
    { id: 5, title: 'Note 2', author: 'Jane Smith' },
    { id: 6, title: 'Note 3', author: 'Alice Johnson' },
    { id: 7, title: 'Note 1', author: 'John Doe' },
    { id: 8, title: 'Note 2', author: 'Jane Smith' },
    { id: 9, title: 'Note 3', author: 'Alice Johnson' }
  ];

  return (
    <div className={containerStyles}>
      <TopSection title="" data={topNotes} />
    </div>
  );
};

export default Page;
