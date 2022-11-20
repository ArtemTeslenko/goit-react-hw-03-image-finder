import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import React, { Component } from 'react';
import {
  Form,
  Header,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleInputChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onFormSubmit}>
          <SearchBtn type="submit">
            <BiSearch style={{ width: 30, height: 30 }} />
            <SearchBtnLabel>Search</SearchBtnLabel>
          </SearchBtn>
          <SearchInput
            value={this.state.query}
            onChange={this.handleInputChange}
            name="query"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></SearchInput>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
