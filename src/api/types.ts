import { Infer } from "superstruct";
import {
  FifteenRequestStruct,
  FifteenResponseStruct,
  placeStruct,
  routeStruct,
} from "./validation";

export type FifteenRequest = Infer<typeof FifteenRequestStruct>;

export type FifteenResponse = Infer<typeof FifteenResponseStruct>;

export type Place = Infer<typeof placeStruct>;

export type Route = Infer<typeof routeStruct>;
