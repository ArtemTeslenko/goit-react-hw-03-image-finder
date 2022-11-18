// import PropTypes from 'prop-types';
import { Form, Header, SearchBtn, SearchBtnLabel } from './Searchbar.styled';

export default function Searchbar() {
  return (
    <Header>
      <Form>
        <SearchBtn>
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>
      </Form>
    </Header>
  );
}
