import React, { useState } from "react";
import Clock from "./Clock";
import { Button, Card } from "react-bootstrap";

const countries = [
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Africa/Cairo",
];

function Countries() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const handlChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="App">
        <h1>World Clock App</h1>

        <Clock timezone={selectedCountry} />
        <div className="clocks">
          {countries.map((country) => (
            <Button
              style={{ backgroundColor: "white", borderColor: "white" }}
              onClick={() => handlChange(country)}
            >
              <Card
                style={{ width: "18rem", backgroundColor: "slategray" }}
                className="mb-2"
              >
                <Card.Header>{country}</Card.Header>
              </Card>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;

/* <div className="country-selector">
          <label>Select a country: </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div> */
