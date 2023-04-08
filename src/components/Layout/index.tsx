import SimpleSidebar from '@components/SideBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <SimpleSidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
