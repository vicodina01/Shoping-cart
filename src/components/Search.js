import React from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search({ searchText, setSearchText }) {
  return (
    <Form.Group as={Row} controlId='formBasicSearch'>
      <Col>
        <Form.Control
          type='search'
          placeholder='Search ...'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </Col>
    </Form.Group>
  );
}

export default Search;
