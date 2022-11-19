// import PropTypes from 'prop-types';
import {
  Form,
  Header,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './Searchbar.styled';

export default function Searchbar() {
  return (
    <Header>
      <Form>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        ></SearchInput>
      </Form>
    </Header>
  );
}
