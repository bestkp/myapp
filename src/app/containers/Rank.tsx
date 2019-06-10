import * as actions from 'actions/index';
import Rank from 'components/rank/Rank';
import { connect, DispatchProp } from 'react-redux';
import { StoreState } from '../types/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}
export function mapDispatchToProps(dispatch: any) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank);
