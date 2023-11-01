import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./TimeZone.css";

class Timezone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Math.round(new Date().getTime() / 1000),
      tzs: [
        {
          id: 1,
          city: "Boston",
          tz: "America/New_York",
          enabled: true,
        },
        {
          id: 2,
          city: "Dublin",
          tz: "Europe/Dublin",
          enabled: true,
        },
        {
          id: 3,
          city: "Taipei",
          tz: "Asia/Taipei",
          enabled: true,
        },
        {
          id: 4,
          city: "Rome",
          tz: "Europe/Rome",
          enabled: true,
        },
        {
          id: 5,
          city: "Sydney",
          tz: "Australia/Sydney",
          enabled: true,
        },
        {
          id: 6,
          city: "Helsinki",
          tz: "Europe/Helsinki",
          enabled: true,
        },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      now: Math.round(new Date().getTime() / 1000),
    });
  }

  onToggleClock = (id) => {
    const updatedTzs = this.state.tzs.map((tz) => {
      if (tz.id === id) tz.enabled = !tz.enabled;
      return tz;
    });
    this.setState({
      tzs: updatedTzs,
    });
  };

  onDeleteClock = (id) => {
    const updatedTzs = this.state.tzs.filter((tz) => tz.id !== id);
    this.setState({
      tzs: updatedTzs,
    });
  };

  onAddTimezone = () => {
    const updatedTzs = [
      ...this.state.tzs,
      {
        id: 7,
        city: "Los Angeles",
        tz: "America/Los_Angeles",
        enabled: true,
      },
    ];
    this.setState({
      tzs: updatedTzs,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tzs.map((tz) => {
          if (tz.enabled) {
            return (
              <div key={tz.id} className="Timezone">
                <div className="Timezone-Header">
                  <span>{tz.city}</span>
                </div>
                <div className="Timezone-Body">
                  <Moment unix tz={tz.tz} format="HH:mm:ss">
                    {this.state.now}
                  </Moment>
                </div>
                <div className="Timezone-Footer">
                  <button
                    className="Button Button-Toggle"
                    onClick={() => this.onToggleClock(tz.id)}
                  >
                    Enable/Disable
                  </button>
                  <button
                    className="Button Button-Delete"
                    onClick={() => this.onDeleteClock(tz.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
        <div>
          <button onClick={this.onAddTimezone}>Add Los Angeles Timezone</button>
        </div>
        <div className="Total">Total Timezones: {this.state.tzs.length}</div>
      </React.Fragment>
    );
  }
}

export default Timezone;
