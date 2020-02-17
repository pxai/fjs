import { task } from "folktale/concurrency/task";

const map = function(fn, obj) {
  return obj.map(fn);
};

const add = x => y => x + y;
const one = task(resolver => resolver.resolve(1));

const inc = map(add(1), one);

one.run().listen({
  onCancelled: () => {
    console.log("the task was cancelled");
  },
  onRejected: error => {
    console.log("something went wrong");
  },
  onResolved: value => {
    console.log(`The value is ${value}`);
  }
});

inc
  .run()
  .future()
  .map(value => {
    console.log("Value: ", value);
  });


  export { one, inc};