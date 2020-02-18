import * as R from "ramda";
import Maybe from "./maybe";

const id = function (x) {
    return x;
}

var chain = R.curry(function(mv, f) {
    return mv.chain(f);
});

var mjoin = function(mmv) {
    return chain(mmv, R.identity);
};


export { mjoin, chain };