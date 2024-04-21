'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid text-center mb-0 max-w-6xl grid-cols-2 grid-rows-2 text-center gap-10">
        
        <div className='flex justify-center'>
          <Image src="/user-286.svg" alt="Your Image" width={200} height={200}></Image>
        </div>

        <div className='flex justify-center'>
          <Image src="/tutor.svg" alt="Your Image" width={200} height={200}></Image>
        </div>
        
        <Link
          href="/student"
          className=""
        >
          <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold text-cyan-500">
            Enter as student{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-cyan-500">
          Find a tutor or get valuable notes and presentations.
          </p>
        </Link>

        <Link
          href="/tutor"
          className=""
        >
          <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold text-cyan-500">
            Enter as tutor{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-cyan-500">
          Help students by offering them study material or lessons.
          </p>
        </Link>
      </div>
    </main>
  );
}
