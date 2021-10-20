import {trip, trip1,trip2, trip9,trip8,trip5} from "./mocks.json";
import {_embedded} from "./trips-2.json";
//import chicago from "./chicago.json";
import results from "./mocks.json";
import allstations from "./stations.json";
//import users from "./users.json";

export const mocks = {

  "Megenagna 01, Adama 03": results,
  "Merkato Bus Station 01, Arbaminch 01": trip2,
  //"me, ar": _embedded.trips,
  "me, ar": trip9,
  "me, ad": trip8,
  //"Megenagna 01, Adama 03": trip,
  "allstations": allstations,
  //"Merkato Bus Station 01, Arbaminch 02": trip3,
  //"Merkato Bus Station 01, Arbaminch 03": trip4,
 // "Merkato Bus Station 01, Arbaminch 04": trip1,
};

