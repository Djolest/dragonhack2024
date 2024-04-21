import React from 'react';
import ProfilePage from '@/app/components/ProfilePage';

const Profile = () => {
  // Sample student data, still not connected to the backend
  const student = {
    name: 'Dimitar Djorlev',
    info: 'Faculty, BSc',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ligula sed viverra dictum.',
    profilePicture: '/viber_image_2024-04-21_01-46-13-333.jpg', // Path to profile picture
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
