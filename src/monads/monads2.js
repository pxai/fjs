import R from "ramda";
import Maybe from "./maybe";
import { map, mjoin } from "./utils";

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
  map(getTrackingId),
  findOrder
);

const renderTemplate = function(id) {
  return `<div>Order: ${id}</div>`;
};

export {
  getTrackingId,
  getData,
  findOrder,
  mjoin,
  getOrderTracking,
  map,
  renderTemplate
};
