import { AppFeatureContextMap } from 'monday-sdk-js/types/client-context.type';
import {
  FilterResponse,
  LocationResponse,
} from 'monday-sdk-js/types/client-data.interface';

// NOTE: change AppFeatureType to whatever the type of the feature is to get the right types
type ContextType = AppFeatureContextMap['Base'];

export type InitialStateType = {
  context: ContextType | null;
  settings: Record<string, unknown>;
  events?: object;
  itemIds?: number[];
  location?: LocationResponse;
  filter?: FilterResponse;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type MOndayListenOptions =
  | 'context'
  | 'settings'
  | 'itemIds'
  | 'events'
  | 'filter'
  | 'location';

type MondayPayload = {
  context: InitialStateType['context'];
  settings: InitialStateType['settings'];
  itemIds: InitialStateType['itemIds'];
  events: InitialStateType['events'];
  filter: InitialStateType['filter'];
  location: InitialStateType['location'];
};

export type MondayAction =
  ActionMap<MondayPayload>[keyof ActionMap<MondayPayload>];

export type MondayThemes = 'light' | 'dark' | 'black';

export type MondayListenOption =
  | 'context'
  | 'settings'
  | 'itemIds'
  | 'filter'
  | 'location';
