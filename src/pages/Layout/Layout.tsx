import { Navigate, Outlet } from 'react-router-dom';
import { S_appLayout } from './LayoutStyles';
import { Routes } from '../../types/Routes';

const Layout: React.FC = () => {
  return (
    <S_appLayout>
      <Outlet />
      <Navigate to={Routes.Home} />
    </S_appLayout>
  );
};

export default Layout;
