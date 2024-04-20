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
        <div className="mb-32 grid text-center lg:mb-0 lg:max-w-6xl lg:grid-cols-2 lg:grid-rows-2 lg:text-left">
        <div>
          <Image src="/user-286.svg" alt="Your Image" width={200} height={200}>
          </Image>
          </div>
          <div>
          <Image src="/tutor.svg" alt="Your Image" width={200} height={200}>
          </Image>
          </div>
        <Link
          href="/student"
          className=""
        >
          <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
            Enter as student{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50" style={{ color: '#007FFF' }}>
          Find a tutor or get valuable notes and presentations.
          </p>
        </Link>
        <Link
          href="/api/auth/logout"
          className=""
        >
          <h2 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
            Enter as tutor{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50" style={{ color: '#007FFF' }}>
          Help students by offering them study material or lessons.
          </p>
        </Link>
      </div>
    </main>
  );
}
