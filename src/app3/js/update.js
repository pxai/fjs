import * as R from "ramda";

export const MSGS = {
  LEFT_VALUE_INPUT: "LEFT_VALUE_INPUT",
  RIGHT_VALUE_INPUT: "RIGHT_VALUE_INPUT",
  LEFT_UNIT_CHANGED: "LEFT_UNIT_CHANGED",
  RIGHT_UNIT_CHANGED: "RIGHT_UNIT_CHANGED",
};

export function leftValueInputMsg(leftValue) {
  return {
    type: MSGS.LEFT_VALUE_INPUT,
    leftValue,
  };
}

export function rightValueInputMsg(rightValue) {
  return {
    type: MSGS.RIGHT_VALUE_INPUT,
    rightValue,
  };
}

export function leftUnitChangedMsg(leftUnit) {
  return {
    type: MSGS.LEFT_UNIT_CHANGED,
    leftUnit,
  };
}

export function rightUnitChangedMsg(rightUnit) {
  return {
    type: MSGS.RIGHT_UNIT_CHANGED,
    rightUnit,
  };
}

const toInt = R.pipe(parseInt, R.defaultTo(0));

function update (msg, model) {
  switch (msg.type) {
    case MSGS.LEFT_VALUE_INPUT: {
      if (msg.leftValue === "")
        return { ...model, sourceLeft: true, leftValue: "", rightValue: "" };
      const leftValue = toInt(msg.leftValue);
      return convert({ ...model, sourceLeft: true, leftValue });
    }
    case MSGS.RIGHT_VALUE_INPUT: {
      if (msg.rightValue === "")
        return { ...model, sourceLeft: false, leftValue: "", rightValue: "" };
      const rightValue = toInt(msg.rightValue);
      return convert({ ...model, sourceLeft: false, rightValue });
    }
    case MSGS.LEFT_UNIT_CHANGED: {
      const { leftUnit } = msg;
      return convert({ ...model, leftUnit });
    }
    case MSGS.RIGHT_UNIT_CHANGED: {
      const { rightUnit } = msg;
      return convert({ ...model, rightUnit });
    }
  }
  return model;
}


function round(number) {
  return Math.round(number * 10) / 10;
}

function convert(model) {
  const { leftValue, leftUnit, rightValue, rightUnit } = model;

  const [fromUnit, fromTemp, toUnit ] =
    model.sourceLeft
    ? [leftUnit, leftValue, rightUnit]
    : [rightUnit, rightValue, leftUnit];

  const otherValue = R.pipe(
    convertFromToCurrency,
    round,
  )(fromUnit, toUnit, fromTemp);

  return model.sourceLeft
    ? { ...model, rightValue: otherValue }
    : { ...model, leftValue: otherValue };
}

function convertFromToCurrency(fromUnit, toUnit, temp) {
  const convertFn = R.pathOr(
    R.identity,
    [fromUnit, toUnit],
    UnitConversions);

  return convertFn(temp);
}

function DollarToEuro(dollar) {
  return dollar * 0.9;
}

function EuroToDollar(euro) {
  return euro * 1.1;
}

function PoundToEuro(pound) {
  return pound * 0.8;
}

function EuroToPound(euro) {
  return euro * 1.2;
}

const DollarToPound = R.pipe(DollarToEuro, EuroToPound);
const PoundToDollar = R.pipe(PoundToEuro, EuroToDollar);

const UnitConversions = {
  Euro: {
    Dollar: EuroToDollar,
    Pound: EuroToPound,
  },
  Dollar: {
    Euro: DollarToEuro,
    Pound: DollarToPound,
  },
  Pound: {
    Euro: PoundToEuro,
    Dollar: PoundToDollar,
  },
};

export default update;
