import React from 'react';
import Search from './Search';
import InputCheck from './InputCheck';
import Datatable from './Datatable';
import { Button, Col, Row } from 'react-bootstrap';

function Catalog({
  data,
  sortBy,
  searchText,
  setSearchText,
  showStock,
  setShowStock,
  selectItem,
  updateSelectItem,
  showCart,
  setShowCart,
}) {
  if (!showCart) {
    return (
      <div>
        <Row>
          <Col md></Col>
          <Col xs md={8}>
            <Row>
              <Col md>
                <Search searchText={searchText} setSearchText={setSearchText} />
              </Col>
              <Col md>
                <InputCheck
                  checked={showStock}
                  onChangeFunc={setShowStock}
                  label={'Show All Products'}
                />
              </Col>
              <br />
              <br />
            </Row>
            <Row>
              <Datatable
                data={data}
                sortBy={sortBy}
                searchText={searchText}
                showStock={showStock}
                selectItem={selectItem}
                updateSelectItem={updateSelectItem}
              />
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <Col md></Col>
              <Col md>
                <Button
                  variant='primary'
                  onClick={(e) => {
                    setShowCart(true);
                  }}>
                  Check out
                </Button>
              </Col>
              <Col md></Col>
            </Row>
          </Col>
          <Col md></Col>
        </Row>
      </div>
    );
  } else {
    return null;
  }
}

export default Catalog;
