import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

function Cart({ data, showCart, setShowCart }) {
  let total = 0;
  let emptyCart = true;

  data.forEach((val) => {
    if (val.status) {
      emptyCart = false;
      total = total + val.price;
    }
  });

  if (!showCart) {
    return null;
  } else {
    if (!emptyCart) {
      return (
        <div>
          <Row>
            <Col md></Col>
            <Col xs md={6} style={{ textAlign: 'center' }}>
              <h5>SHOPPING CART</h5>
              <hr />
              <Table responsive striped bordered hover>
                <thead className='table-header-blue'>
                  <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Price/unit</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((val) => val.status)
                    .map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.image}
                            alt={product.name}
                            className='img-table'
                          />
                        </td>
                        <td>{product.name}</td>
                        <td className='txt-right currency'>{product.price}</td>
                        <td className='txt-center'>{product.quantity}</td>
                        <td className='txt-right currency'>
                          {(product.quantity * product.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan='4' className='txt-right txt-bold'>
                      Total:
                    </td>
                    <td className='currency txt-bold'>{total}</td>
                  </tr>
                </tfoot>
              </Table>
              <Button
                variant='primary'
                onClick={(e) => {
                  setShowCart(false);
                }}>
                Back to Shop
              </Button>
            </Col>
            <Col md></Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row>
            <Col md></Col>
            <Col xs md={6} className='txt-center'>
              <h5>SHOPPING CART</h5>
              <hr />
              <p>The cart is empty!</p>
              <p>try shop something </p>
              <Button
                variant='primary'
                onClick={(e) => {
                  setShowCart(false);
                }}>
                Back to Shop
              </Button>
            </Col>
            <Col md></Col>
          </Row>
        </div>
      );
    }
  }
}

export default Cart;
