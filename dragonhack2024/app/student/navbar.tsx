import Link from 'next/link';
import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0" style={{ background: "#7CB9E8" }}>
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors mb-3 text-2xl font-semibold">
            <Image src="/tutor.svg" alt="Your Image" width={100} height={100}></Image>
        </div>
          <ul className="flex gap-x-6 text-white">
            <li>
              <Link href="/home">
                <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/search_tutor">
                <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
                  Search Tutor
                </p>
              </Link>
            </li>
            <li>
              <Link href="/search_notes">
                <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}>
                  Search Notes
                </p>
              </Link>
            </li>
            <li>
            <Link href="/profil">
            <Image src="/user-286.svg" alt="Your Image" width={90} height={90}></Image>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
