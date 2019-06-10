import { enthusiasm } from 'reducers/index';
import { createStore } from 'redux';

// @ts-ignore
const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
export default store
