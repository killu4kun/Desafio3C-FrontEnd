import { Outlet } from 'react-router-dom';

import SimpleSidebar from '@components/SideBar';

function Layout() {
  return (
    <div>
      <SimpleSidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
