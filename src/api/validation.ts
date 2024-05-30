import { enums, number, object, string } from "superstruct";

const TravelMode = enums(["bike"]);

export const placeStruct = object({
  ID: string(),
  name: string(),
  address: string(),
});

export const routeStruct = object({
  distance: number(),
  duration: number(),
  mode: TravelMode,
});

export const PlaceRouteStruct = object({
  place: placeStruct,
  route: routeStruct,
});

export const FifteenResponseStruct = object({
  cafe: PlaceRouteStruct,
  school: PlaceRouteStruct,
});

export const FifteenRequestStruct = object({
  origin: string(),
});
