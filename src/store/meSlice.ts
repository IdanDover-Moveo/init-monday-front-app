import { FirstDayOfTheWeek, User } from '@mondaydotcomorg/api';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

const initialState: User = {
  id: '',
  email: '',
  is_admin: false,
  name: '',
  enabled: false,
  url: '',
  account: {
    first_day_of_the_week: FirstDayOfTheWeek.Sunday,
    id: '',
    name: '',
    show_timeline_weekends: false,
    slug: '',
  },
};

const meSlice = createSlice({
  name: 'meSlice',
  initialState,
  reducers: {
    storeMe(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { storeMe } = meSlice.actions;
export const getMe = (state: RootState) => state.me;
export default meSlice.reducer;
