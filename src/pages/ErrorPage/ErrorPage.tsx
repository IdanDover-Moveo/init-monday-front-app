import { Routes } from '../../types/Routes';
import { S_errorLayout, S_p_text, S_Link_return } from './ErrorStyles';

const ErrorPage: React.FC = () => {
  return (
    <S_errorLayout>
      <S_p_text>It seems like you are not in the right place</S_p_text>
      <S_Link_return to={Routes.Root}>&rarr; Go back</S_Link_return>
    </S_errorLayout>
  );
};

export default ErrorPage;
