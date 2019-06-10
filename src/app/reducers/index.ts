import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from 'actions/actionTyps';
import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      // @ts-ignore
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      // @ts-ignore
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}
