import "./App.css";
import { Component } from "react";
import { Form } from "../components/Forms/Form";

// import { Form } from "../components/Form";

class App extends Component {
  state = {
    contacts: [],
  };
  addNumber = (obj) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  render() {
    return (
      <header>
        <Form addNumber={this.addNumber} />
      </header>
    );
  }
}

export default App;
