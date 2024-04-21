import React from 'react';

interface Subject {
  name: string;
  desiredGrade: string;
}

interface Student {
  name: string;
  info: string;
  about: string;
  profilePicture: string;
  subjects: Subject[];
}

const ProfilePage: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:max-w-6xl lg:grid-cols-1 lg:grid-rows-2 lg:text-left">
        {/* Left side */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="md:flex-shrink-0 md:mr-8 mb-8 md:mb-0"> 
            {/* Profile picture */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 md:mr-4">
            <img src={student.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Right side */}
        <div className="md:flex flex-col">
            {/* Name */}
            <h1 style={{ fontSize: '50px' }} className="text-2xl font-bold ">{student.name}</h1>
            {/* Info */}
            <p style={{ fontSize: '30px' }} className="text-gray-600 mb-2">{student.info}</p>
            {/* About */}
            <p className="text-sm text-gray-700 mb-4">{student.about}</p>
        </div>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:max-w-6xl lg:grid-cols-3 lg:grid-rows-2 lg:text-left">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors mb-3 text-2xl font-semibold" style={{ color: '#007FFF', position: 'absolute', bottom: '0', left: '0' }}>Subjects</h2>
</div>
        <h2 className="text-xl font-semibold mb-4"></h2>
        <h2 className="text-xl font-semibold mb-4"></h2>
        {student.subjects.map((subject, index) => (
          <div key={index} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
            <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
            <p className="text-gray-600">Desired Grade: {subject.desiredGrade}</p>
          </div>
        ))}
      </div>

      {/* Subjects */}
      
    </div>
  );
};

export default ProfilePage;
