import React, { useState } from "react";
import Clock from "./Clock";
import { Button, Card } from "react-bootstrap";
import moment from "moment";

// const countries = [
//   "America/New_York",
//   "Europe/London",
//   "Asia/Tokyo",
//   "Africa/Cairo",
// ];
const countries = moment.tz.names();

function Countries() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const handlChange = (country) => {
    setSelectedCountry(country);
  };

  const ItemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(0);

  const startPage = currentPage * ItemsPerPage;
  const endPage = startPage + ItemsPerPage;
  const displayItems = countries.slice(startPage, endPage);
  const nPage = Math.ceil(countries.length / ItemsPerPage);

  const prevPage = () => {
    if (currentPage !== startPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="App">
        <h1>World Clock App</h1>
        <Clock timezone={selectedCountry} />
        <div className="clocks">
          {displayItems.map((country) => (
            <Button
              key={country}
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
      <div
        style={{
          position: "fixed",
          bottom: "35px",
          display: "flex",
          alignItems: "center",
          marginLeft: "44%",
        }}
      >
        <Button onClick={() => prevPage()} disabled={currentPage === 0}>
          prev
        </Button>
        {currentPage + 1} of {nPage}
        <Button
          onClick={() => nextPage()}
          disabled={endPage >= countries.length}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Countries;
