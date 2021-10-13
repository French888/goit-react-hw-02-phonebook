import { Component } from "react";
import { v4 as uuid } from "uuid";

export class Form extends Component {
  nameId = uuid();
  numberId = uuid();
  selectId = uuid();

  state = {
    filter: "",
    name: "",
    number: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const obj = {
      name,
      number,
    };
    this.props.addNumber(obj);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, filter } = this.state;
    const { nameId, numberId, selectId, handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={numberId}>Number</label>
        <input
          id={numberId}
          type="text"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="+380"
          required
        />
        <label htmlFor={selectId}>Find contacts by name</label>
        <select
          id={selectId}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        >
          <option value="">name</option>
        </select>
        <button type="submit">ADD</button>
      </form>
    );
  }
}
