import SimpleSidebar from '@components/SideBar';
import { Route, Routes as Router, BrowserRouter } from 'react-router-dom';
import Favoritos from '../pages/Favoritos';
import Home from '../pages/Home';
import List from '../pages/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<SimpleSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="favorites" element={<Favoritos />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
