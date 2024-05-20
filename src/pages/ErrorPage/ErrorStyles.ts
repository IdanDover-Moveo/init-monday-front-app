import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const S_errorLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  background-color: var(--background-color);

  & > * {
    margin-bottom: 1rem;
  }
`;

export const S_p_text = styled.p`
  font-weight: bold;
`;

export const S_Link_return = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
`;
