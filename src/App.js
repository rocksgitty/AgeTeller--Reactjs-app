import React, { Component } from "react";

import { Form, FormControl, button } from "react-bootstrap";
import Agestats from "./Agestats";

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: " ",
      birthday: "01-01-1970"
    };
  }

  changeBirthday() {
    this.setState({ birthday: this.state.newDate });
  }

  render() {
    return (
      <div className="App">
        <Form inline>
          <h2> Hey! Input Your BirthDay </h2>
          <FormControl
            onChange={event => this.setState({ newDate: event.target.value })}
            type="date"
          />

          <button onClick={() => this.changeBirthday()}>SUBMIT</button>
          <Agestats date={this.state.birthday} />
        </Form>
      </div>
    );
  }
}

export default App;
