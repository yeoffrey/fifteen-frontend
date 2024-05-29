import { enums, number, object, string } from "superstruct";

const TravelMode = enums(["bike"]);

const place = object({ ID: string(), name: string(), address: string() });

const route = object({
  distance: number(),
  duration: number(),
  mode: TravelMode,
});

const PlaceRoute = object({
  place: place,
  route: route,
});

export const FifteenResponseStruct = object({
  cafe: PlaceRoute,
  school: PlaceRoute,
});

export const FifteenRequestStruct = object({
  origin: string(),
});
