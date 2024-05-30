import { Place, Route } from "../../api/types";

export default function Amenity(type: string, place: Place, route: Route) {
  return (
    <div>
      <h1>{type}</h1>
      <h2>{place.name}</h2>
      <h6>{place.address}</h6>
      <h6>
        {route.duration} by {route.mode}
      </h6>
    </div>
  );
}
