import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import { db } from "../firebase_config";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { AddBtn, Add } from "./RestaurantsElements";
import { ref, set, push, update, remove, onValue } from "firebase/database";

const RestaurantList = () => {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantCity, setRestaurantCity] = useState("");
  const [restaurantStreet, setRestaurantStreet] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeName = (e) => {
    setRestaurantName(e.target.value);
  };
  const changeCity = (e) => {
    setRestaurantCity(e.target.value);
  };
  const changeStreet = (e) => {
    setRestaurantStreet(e.target.value);
  };

  const onSubmit = () => {
      console.log("send to db")
      writeRestauraurants(restaurantName, restaurantCity, restaurantStreet)
  }

  useEffect(() => {
    get();
  }, []);

  /* const createRestaurant = (event) => {
        event.preventDefault();
        const restaurantRef = firebase.database().ref("Restaurant");
        const restaurant = {
            restaurantName,
          complete: false,
        };
        restaurantRef.push(restaurant);
        setRestaurantName("");
      }; */

  const writeRestauraurants = (name, city, street) => {
    //const db = getDatabase()
    const rf = ref(db, "restaurants/");
    push(rf, {
      name: name,
      city: city,
      street: street,
    });
  };

  const get = () => {
    //const dbt = getDatabase()
    const restaurantsRef = ref(db, "restaurants/");
    onValue(restaurantsRef, (data) => {
      if (data.val() === null) return;

      setRestaurantData(data.val());
      const newRestaurants = Object.keys(data.val());
      setRestaurantIds(newRestaurants);
    });
  };

  const deleteRestaurantById = (id) => {
    console.log("Delete: ", id);
    const deleteRef = ref(db, "restaurants/" + id);
    remove(deleteRef);
  };

  const updateRestaurantById = (id, name, city, street) => {
    const updateRef = ref(db, "restaurants/" + id);
    update(updateRef, {
      name: name,
      city: city,
      street: street,
    });
  };

  const restaurantList = restaurantIds.map((r) => (
    <Card className="mt-2 text-left" key={r}>
      <Card.Body>
        <Card.Title className="text-left">{restaurantData[r].name}</Card.Title>
        <Card.Text>rating</Card.Text>
        <Card.Text>
          {restaurantData[r].city} <br /> {restaurantData[r].street}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteRestaurantById(r)}>
          Löschen
        </Button>
      </Card.Body>
    </Card>
  ));

  // only Helper/Test functions !
  const restaurantsEmpty = () => {
    if (restaurantIds.length === 0) return false;
    return true;
  };

  const createRestaurants = () => {
    console.log("write Restaurant Data");
    writeRestauraurants("BurgerKing", "Berlin", "Am Bahnhof 1");
    writeRestauraurants("Grieche", "Bielefeld", "Poststraße 345");
  };

  const updateTest = () => {
    updateRestaurantById(restaurantIds[0], "Nudelio", "Hamburg", "Ackerstraße");
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/*<Button
        variant="primary"
        disabled={restaurantsEmpty()}
        onClick={createRestaurants}
      >
        Restaurants anlegen (nur einmal drücken)
      </Button>*/}
      {/*<Button variant="primary" onClick={updateTest}>
        Update Test
    </Button>*/}
      <Container>
        {restaurantList}
        <form onSubmit={onSubmit}>
          <Card className="mt-2 text-left">
            <Card.Body>
              <Card.Title className="text-left">
                <input
                  type="text"
                  placeholder="Name hinzufügen..."
                  className="name-input"
                  value={restaurantName}
                  required
                  onChange={changeName}
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                  }}
                />
              </Card.Title>
              <Card.Text>rating</Card.Text>
              <Card.Text>
                <input
                  type="text"
                  placeholder="Stadt hinzufügen..."
                  className="name-input"
                  value={restaurantCity}
                  required
                  onChange={changeCity}
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                  }}
                />
                <br />
                <input
                  type="text"
                  placeholder="Straße hinzufügen..."
                  className="street-input"
                  value={restaurantStreet}
                  required
                  onChange={changeStreet}
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                  }}
                />
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="form-group mt-2">
            <AddBtn className="btn btn-success btn-lg float-center" type="submit">
              <Add />
            </AddBtn>
          </div>
        </form>
      </Container>
      <hr></hr>
    </>
  );
};

export default RestaurantList;
