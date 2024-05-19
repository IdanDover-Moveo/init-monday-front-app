import { Outlet } from 'react-router-dom';
import { S_appLayout } from './LayoutStyles';

const Layout: React.FC = () => {
  return (
    <S_appLayout>
      <Outlet />
    </S_appLayout>
  );
};

export default Layout;
