import { Routes } from '../../types/Routes';
import { S_errorLayout, S_p, S_returnLink } from './ErrorStyles';

const ErrorPage: React.FC = () => {
  return (
    <S_errorLayout>
      <S_p>It seems like you are not in the right place</S_p>
      <S_returnLink to={Routes.Root}>&rarr; Go back</S_returnLink>
    </S_errorLayout>
  );
};

export default ErrorPage;
