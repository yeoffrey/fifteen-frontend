import { ChangeEvent, FormEvent, useState } from "react";
import { FifteenResponse } from "../api/types";
import { handleFifteenRequest } from "../api/handler";
import Header from "./components/header";

export default function Home() {
  const [text, setText] = useState("");
  const [amenitiesData, setAmenitiesData] = useState<FifteenResponse>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await handleFifteenRequest({
      origin: text,
    });

    setAmenitiesData(res);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="textBox">Enter text:</label>
          <input
            type="text"
            id="textBox"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {amenitiesData && (
        <div>
          <h2>You are in a 15 minute neighbourhood!</h2>
          <p>Cafe: {amenitiesData.cafe.place.name}</p>
          <p>School: {amenitiesData.school.place.name}</p>
        </div>
      )}
    </>
  );
}
