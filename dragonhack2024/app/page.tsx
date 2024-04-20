import Image from "next/image";
import Hero from "@/app/components/Hero"
import Link from "next/link";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const session = await getSession();
  
  return (
    <>
      <Hero />
    </>  

)
}
