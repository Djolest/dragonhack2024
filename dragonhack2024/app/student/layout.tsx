import { ReactNode } from 'react';
import Navbar from '@/app/student/navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* You can add footer, sidebar, etc. here */}
    </div>
  );
};

export default Layout;