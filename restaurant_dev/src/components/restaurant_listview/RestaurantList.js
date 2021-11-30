import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import {db} from "../firebase_config"
import {ref, set, push, update, remove, onValue} from "firebase/database";

const RestaurantList = () => {
    const [restaurantIds, setRestaurantIds] = useState([]);
    const [restaurantData, setRestaurantData] = useState({});

    useEffect(() => {
        get()
    }, [])

    const writeRestauraurants = (name, city, street) => {
        const rf = ref(db, "restaurants/");
        push(rf, {
            name: name,
            city: city,
            street: street,
        });
    };

    const get = () => {
        const restaurantsRef = ref(db, "restaurants/");
        onValue(restaurantsRef, (data) => {

            if(data.val() === null) return

            setRestaurantData(data.val())
            const newRestaurants = Object.keys(data.val())
            setRestaurantIds(newRestaurants)
        });

    };

    const deleteRestaurantById = (id) => {
        console.log("Delete: ", id)
        const deleteRef = ref(db, "restaurants/" + id);
        remove(deleteRef)
    }

    const updateRestaurantById = (id, name, city, street) => {
        const updateRef = ref(db, "restaurants/" + id);
        update(updateRef, {
            name: name,
            city: city,
            street: street
        })
    }

const restaurantList = restaurantIds.map((r) => (
        <Card className="mt-2 text-left" key={r}>
            <Card.Body>
                <Card.Title className="text-left">{restaurantData[r].name}</Card.Title>
                <Card.Text>rating</Card.Text>
                <Card.Text>
                    {restaurantData[r].city} <br /> {restaurantData[r].street}
                </Card.Text>
            <Button variant="danger" onClick={() => deleteRestaurantById(r)}>Löschen</Button>
            </Card.Body>
        </Card>
    ));


// only Helper/Test functions !
const restaurantsEmpty = () => {
    if(restaurantIds.length === 0) return false
    return true
}

const createRestaurants = () => {
    console.log("write Restaurant Data")
    writeRestauraurants("BurgerKing", "Berlin", "Am Bahnhof 1");
    writeRestauraurants("Grieche", "Bielefeld", "Poststraße 345");
}

const updateTest = () =>{
    updateRestaurantById(restaurantIds[0], "Nudelio", "Hamburg", "Ackerstraße")
}

    return (
        <div>
            <h1>Restaurants</h1>
            <Button variant="primary" onClick={get}>Aktualisieren</Button>
            <Button variant="primary" disabled={restaurantsEmpty()} onClick={createRestaurants}>Restaurants anlegen (nur einmal drücken)</Button>
            <Button variant="primary" onClick={updateTest}>Update Test</Button>
            <Container>{restaurantList}</Container>
            <hr></hr>
        </div>
    );
};

export default RestaurantList;
