import mondaySdk from 'monday-sdk-js';
import { ApiClient } from '@mondaydotcomorg/api';
import React, {
  createContext,
  useEffect,
  useReducer,
  Dispatch,
  PropsWithChildren,
  useContext,
} from 'react';
import { InitialStateType, MondayAction, MondayListenOption } from './types';
import { mondayReducer } from './reducer';

const initialState: InitialStateType = {
  context: null,
  settings: {},
};

type Props = {
  listenTo?: MondayListenOption[];
} & PropsWithChildren;

const monday = mondaySdk();
//NOTE: You need to put your api token in the .env file to make this work
const mondayApi = new ApiClient(import.meta.env.MONDAY_API_KEY);

export const MondayContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<MondayAction>;
}>({ state: initialState, dispatch: () => null });

const Monday: React.FC<Props> = ({ listenTo = ['context'], children }) => {
  const [state, dispatch] = useReducer(mondayReducer, initialState);

  useEffect(function initMonday() {
    listenTo.forEach((listenOption) => {
      monday.listen(listenOption, (res) => {
        dispatch({ type: listenOption, payload: res.data } as MondayAction);
      });
    });
  }, []);

  return (
    <MondayContext.Provider value={{ state, dispatch }}>
      {children}
    </MondayContext.Provider>
  );
};

export const useMonday = () => {
  const mondayContext = useContext(MondayContext);
  if (!mondayContext) {
    throw new Error('MondayContext was called outside of the monday provider');
  }

  const { state: mondayState, dispatch: mondayDispatch } = mondayContext;

  return {
    mondayState,
    mondayDispatch,
    monday,
    mondayApi,
  };
};

export default Monday;
