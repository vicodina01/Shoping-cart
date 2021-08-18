import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';

const Datatable = ({
  data,
  sortBy,
  searchText,
  showStock,
  selectItem,
  updateSelectItem,
}) => {
  return (
    <Table striped bordered hover>
      <thead className='table-header-blue'>
        <tr className='txt-center'>
          <th style={{ width: '40px' }}></th>
          <th style={{ width: '120px' }}>Image</th>
          <th onClick={() => sortBy('name')}>Product</th>
          <th onClick={() => sortBy('category')}>Category</th>
          <th onClick={() => sortBy('price')}>Price</th>
          <th style={{ width: '100px' }} onClick={() => sortBy('stock')}>
            Stock
          </th>
          <th style={{ width: '100px' }}>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((val) => {
            if (searchText === '') {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .filter((val) => {
            if (showStock) {
              return val;
            } else if (val.stock > 0) {
              return val;
            }
            return null;
          })
          .map((product, index) => (
            <tr key={index} className={product.status ? 'selected-row' : ''}>
              <td>
                <Form.Check
                  type='checkbox'
                  disabled={product.stock === 0}
                  checked={product.status}
                  className='big-check'
                  onChange={(e) => {
                    selectItem(e.target.checked, product.name);
                  }}
                />
              </td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className='img-table'
                />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td className='txt-right currency'>{product.price}</td>
              <td className='txt-center'>{product.stock}</td>
              <td>
                <Form.Control
                  type='input'
                  disabled={product.stock === 0}
                  value={product.quantity}
                  onChange={(e) => {
                    updateSelectItem(e.target.value, product.name);
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Datatable;
