import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('asc');
  const [showStock, setShowStock] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    let url =
      'https://my-json-server.typicode.com/alerodriguez162/JSON-Example/db';

    //fecth data from API and add some atributtes
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        let products = [];
        json.products.forEach((element) => {
          element.status = false;
          element.quantity = 0;

          products.push(element);
        });

        setData(products);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  //Sort column data function
  const sortBy = (col) => {
    if (order === 'asc') {
      //sort ascendant
      const sortedData = [...data].sort((a, b) => {
        //check if the value is not a number
        let aCol = isNaN(a[col]) ? a[col].toLowerCase() : a[col];
        let bCol = isNaN(b[col]) ? b[col].toLowerCase() : b[col];

        return aCol > bCol ? 1 : -1;
      });

      setData(sortedData);
      setOrder('desc');
    } else {
      //sort descendant
      const sortedData = [...data].sort((a, b) => {
        //check if the value is not a number
        let aCol = isNaN(a[col]) ? a[col].toLowerCase() : a[col];
        let bCol = isNaN(b[col]) ? b[col].toLowerCase() : b[col];

        return aCol < bCol ? 1 : -1;
      });

      setData(sortedData);
      setOrder('asc');
    }
  };

  //select item and update quantity
  const selectItem = (status, id) => {
    let quantity = status ? 1 : 0;
    setData(
      data.map((product) =>
        product.name === id ? { ...product, status, quantity } : product
      )
    );
  };

  //update quantity input
  const updateSelectItem = (quantity, id) => {
    const newData = [...data];
    const index = data.findIndex((products) => products.name === id);

    //if aquantity change , set status selected
    newData[index].status = quantity > 0 ? true : false;

    //validate quantity over stock
    if (newData[index].stock >= quantity) {
      newData[index].quantity = quantity;
    } else {
      alert('The quantity of products exceeds the stock');
      newData[index].quantity = newData[index].stock;
    }

    setData(newData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className='card-main'>
            <Card.Body>
              <Card.Title>
                <h3>CATÁLOGO</h3>
              </Card.Title>
              <Card.Subtitle className='text-muted'>
                Listado de Productos
              </Card.Subtitle>
              <hr />
              <Catalog
                data={data}
                sortBy={sortBy}
                searchText={searchText}
                setSearchText={setSearchText}
                showStock={showStock}
                setShowStock={setShowStock}
                selectItem={selectItem}
                updateSelectItem={updateSelectItem}
                showCart={showCart}
                setShowCart={setShowCart}
              />

              <Cart data={data} showCart={showCart} setShowCart={setShowCart} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
