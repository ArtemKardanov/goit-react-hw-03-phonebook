import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) return;

    this.props.onAddContact({ ...this.state });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleNameChange}
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Name</label>
        </div>
        <div className={styles.group}>
          <input
            autoComplete="off"
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleNumberChange}
            pattern="[0]{1}[0-9]{8}"
            required
          />
          <span className={styles.bar}></span>
          <label className={styles.label}>Number: (0xxxxxxxxx)</label>
        </div>
        <hr />
        <button className={styles.buttonSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
