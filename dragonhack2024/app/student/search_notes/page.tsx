'use client';
import Search from '@/app/search';
import React, { useState } from "react";

// Common styles
const containerStyles = "container mx-auto py-8";
const cardStyles = "w-1/4 max-w-lg p-6 bg-blue-100 border border-blue-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700 mb-8";
const actionButtonStyles = "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const listItemStyles = "w-full max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"; // Changed width to "w-full max-w-xl"

const subjects = [
  { id: 1, title: 'Subject 1', enabled : true },
  { id: 2, title: 'Subject 2', enabled : true },
  { id: 3, title: 'Subject 3', enabled : true },
  { id: 4, title: 'Subject 4', enabled : true },
  { id: 5, title: 'Subject 5', enabled : true },
  { id: 6, title: 'Subject 6', enabled : true }
];

const Filters = ({ data }) => {
  // State to keep track of button states
  const [buttonStates, setButtonStates] = useState(new Array(data.length).fill(false));

  // Function to handle button click and change states
  const handleButtonClick = (index) => {
      setButtonStates(prevStates => {
          const newButtonStates = [...prevStates];
          newButtonStates[index] = !newButtonStates[index]; // Toggle state
          if(newButtonStates[index] == true){
            data[index].enabled = true;
          }else{
            data[index].enabled = false;
          }

          return newButtonStates;
      });
  };

  return (
      <div>
          <div className="flex"> {/* Added flex container */}
              <h2 className="text-lg font-semibold h-10">Filters</h2>
          </div>
          <div className="flex flex-col items-center">
              {data.map((item, index) => (
                  <div key={item.id} className="flex"> {/* Added flex container */}
                      <button onClick={() => handleButtonClick(index)}
                          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors mb-3 text-2xl font-semibold ${
                              buttonStates[index] ? 'bg-green-500 text-white' : 'hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                          }`}
                          style={{ color: '#000000'}}>{item.title || item.name}</button>
                  </div>
              ))}
          </div>
      </div>
  );
};


const TopSection = ({ title, data }) => (
  <div>
    <div className={cardStyles + " fixed flex-col"}>
      <div className="flex justify-between items-center mb-4">
        <h5 className="mb-0 text-lg font-bold tracking-tight text-white">{title}</h5>
        <Search placeholder='Search notes'></Search>
      </div>
      <div className="">
        <h5 className="mb-0 text-lg font-bold tracking-tight text-white">{title}</h5>
        <Filters data={subjects}></Filters>
      </div>
    </div>
  <div className="flex flex-col items-center">
    {data.map(item => item.enabled == true ? (
      <a key={item.id} href="#" className={listItemStyles}>
        <h2 className="text-lg font-semibold">{item.title || item.name}</h2>
        <p>{item.subjects ? `Subjects: ${item.subjects.join(', ')}` : `Author: ${item.author} Subject: ${item.subject}`}</p>
      </a>
    ) : null)}
  </div>
  </div>
);

const Page = () => {

  // Sample data for top notes
  const topNotes = [
    { id: 1, title: 'Note 1', author: 'John Doe', subject : 'Subject 1'},
    { id: 2, title: 'Note 2', author: 'Jane Smith', subject : 'Subject 2' },
    { id: 3, title: 'Note 3', author: 'Alice Johnson', subject : 'Subject 3' },
    { id: 4, title: 'Note 1', author: 'John Doe', subject : 'Subject 1' },
    { id: 5, title: 'Note 2', author: 'Jane Smith', subject : 'Subject 2' },
    { id: 6, title: 'Note 3', author: 'Alice Johnson', subject : 'Subject 3' },
    { id: 7, title: 'Note 1', author: 'John Doe', subject : 'Subject 1' },
    { id: 8, title: 'Note 2', author: 'Jane Smith', subject : 'Subject 2' },
    { id: 9, title: 'Note 3', author: 'Alice Johnson', subject : 'Subject 3' }
  ];

  return (
    <div className={containerStyles}>
      <TopSection title="" data={topNotes} />
    </div>
  );
};

export default Page;
