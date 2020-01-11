import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import {
  leftValueInputMsg,
  rightValueInputMsg,
  leftUnitChangedMsg,
  rightUnitChangedMsg,
} from './update';

const {
  div,
  h1,
  pre,
  input,
  select,
  option,
} = hh(h);

const UNITS = ['Dollar', 'Euro', 'Pound'];

function unitOptions(selectedUnit) {
  return R.map( 
    unit => option({ value: unit, selected: selectedUnit === unit}, unit),
    UNITS
  )
}

function unitSection(update, unit, value, inputMsg, unitMsg) {
  return div({ className: 'w-50 ma1' }, [
    input({
      type: 'text',
      value,
      oninput: e => update(inputMsg(e.target.value)),
    }),
    div([
        select(
            {
              onchange: e => update(unitMsg(e.target.value)),
            },
            unitOptions(unit),
          )
    ])
  ]);
}

function view(update, model) {
  return div([
    h1('Currency Converter'),
    div({ className: 'flex' }, [
      unitSection(
        update,
        model.leftUnit,
        model.leftValue,
        leftValueInputMsg,
        leftUnitChangedMsg,
      ),
      unitSection(
        update,
        model.rightUnit,
        model.rightValue,
        rightValueInputMsg,
        rightUnitChangedMsg,
      ),
    ]),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
