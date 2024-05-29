import { Infer } from "superstruct";
import { FifteenRequestStruct, FifteenResponseStruct } from "./validation";

export type FifteenRequest = Infer<typeof FifteenRequestStruct>;

export type FifteenResponse = Infer<typeof FifteenResponseStruct>;
