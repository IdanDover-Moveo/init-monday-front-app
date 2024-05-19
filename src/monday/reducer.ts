import { InitialStateType, MondayAction } from './types';

export const mondayReducer: (
  state: InitialStateType,
  action: MondayAction
) => InitialStateType = (state, action) => {
  switch (action.type) {
    case 'context':
      return { ...state, context: action.payload };
    case 'settings':
      return { ...state, settings: action.payload };
    case 'itemIds':
      const itemIds = [...(action.payload ?? [])];
      return { ...state, itemIds };
    case 'events':
      return { ...state, events: action.payload };
    case 'filter':
      return { ...state, filter: action.payload };
    case 'location':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
