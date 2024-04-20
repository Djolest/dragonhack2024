// pages/profile.tsx

import React from 'react';
import ProfilePage from '@/components/ProfilePage';

const Profile = () => {
  // Sample student data
  const student = {
    name: 'John Doe',
    info: 'Faculty, BSc',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ligula sed viverra dictum.',
    profilePicture: '/profilna.jpeg', // Path to profile picture
    subjects: [
      { name: 'Mathematics', desiredGrade: 'A' },
      { name: 'Physics', desiredGrade: 'B' },
      { name: 'Biology', desiredGrade: 'A' },
      { name: 'Biology', desiredGrade: 'A' }
      // Add more subjects as needed
    ],
  };

  return <ProfilePage student={student} />;
};

export default Profile;
