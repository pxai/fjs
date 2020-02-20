import R from "ramda";
import Maybe from "./maybe";

const map = R.curry(function(fn, obj) {
  return obj.map(fn);
});

const chain = R.curry(function(fn, mv) {
  console.log("Lets chain: ", fn, mv);
  return mv.chain(fn);
});

const id = function(x) {
  return x;
};

const mjoin = chain(id);

const getData = id => obj => obj[id];

const ApiFindOrder = () => {
  return { id: 666, text: "Ok" };
};

const getTrackingId = R.compose(
  Maybe,
  getData("id")
);

const findOrder = R.compose(
  Maybe,
  ApiFindOrder
);

const getOrderTracking = R.compose(
  mjoin,
  map(getTrackingId),
  findOrder
);

export { getTrackingId, getData, findOrder, mjoin, getOrderTracking, map };
