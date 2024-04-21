import TopSection from '@/app/components/search';
import React from 'react';
import { listTutors } from './../../lib/server/appwrite'

export default async function Page () {
  const { documents:tutors } = await listTutors();

  return (
    <div className="container mx-auto py-8">
      <TopSection title="" data={tutors} />
    </div>
  );
};