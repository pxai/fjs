import { of } from "folktale/concurrency/task";

const hello = of("hello");

const add = (a, b) => of(a + b);

const toUpper = a => of(a.toUpperCase());
const trim = a => of(a.trim());

export { hello, add, toUpper, trim };
