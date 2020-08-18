import {ThunkAction} from 'redux-thunk';
import {State} from './types/state';
import {AvailableActions} from './actions';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AvailableActions
>;
