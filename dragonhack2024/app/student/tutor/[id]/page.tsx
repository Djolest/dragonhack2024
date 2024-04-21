import { getUser } from '@/app/lib/server/appwrite'
import Form from '@/app/components/form';

export default async function TutorProfile({ params }: { params: { id: string } }) {
    
    let { documents: user } = await getUser(params);
    user = user[0];
    return (
        <>
            <div className="grid mb-0 grid-cols-1 grid-rows-2 text-left">
                {/* Left side */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="mb-8"> 
                    {/* Profile picture */}
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 md:mr-4">
                            <img src='/user-286.svg' alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col">
                        {/* Name */}
                        <h1 style={{ fontSize: '50px' }} className="text-2xl font-bold mb-2">{user.Name}</h1>
                        {/* Info */}
                        <p style={{ fontSize: '30px' }} className="text-gray-600 mb-2">{user.Bio}</p>
                        {/* About */}

                        <p className="text-xl text-gray-700 mb-4">{user.email}</p>
                    </div>
                </div>

                {/** Form for requsting tutoring */}

                <Form />


                {/*<div className="mb-32 grid text-center lg:mb-0 lg:max-w-6xl lg:grid-cols-3 lg:grid-rows-2 lg:text-left">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors mb-3 text-2xl font-semibold" style={{ color: '#007FFF', position: 'absolute', bottom: '0', left: '0' }}>Subjects</h2>
                    </div>
                    <h2 className="text-xl font-semibold mb-4"></h2>
                    <h2 className="text-xl font-semibold mb-4"></h2>

                    {user.Subjects.map((subject:any, index:number) => (
                    <div key={index} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
                        <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
                        <p className="text-gray-600">Desired Grade: {subject.desiredGrade}</p>
                    </div>
                    ))}
                </div>*/}
            </div>
        </>
    );
}