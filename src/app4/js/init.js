import { urlStream } from "./eventstreams";
import { log, map, compose } from "./utils";
import * as R from "ramda";


// IMPURE starts here:
urlStream.onValue(log);