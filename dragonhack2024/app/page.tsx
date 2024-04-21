import Hero from "@/app/components/Hero"
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const session = await getSession();
  /**
   * There are few easter eggs in this project, try to find as many as possible :)
   * Hope you will be reading this extremly good quality code with ease!
   * 
   * 
   * Bouns riddle: What is in the source of the oatmeal?
   * 
   * Bouns Bouns: https://forms.gle/8F8YKF7Dx4LymMJb9
   */
  return (
    <>
      <Hero />
    </>  

)
}
