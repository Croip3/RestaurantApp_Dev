import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import {db} from "../firebase_config"
import {ref, set, push, onValue} from "firebase/database";

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
        //const dbt = getDatabase()
        const restaurantsRef = ref(db, "restaurants/");
        onValue(restaurantsRef, (data) => {
            setRestaurantData(data.val())
            const newRestaurants = Object.keys(data.val())
            setRestaurantIds(newRestaurants)
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
            </Card.Body>
        </Card>
    ));

const createRestaurants = () => {
    console.log("write Restaurant Data")
    writeRestauraurants("BurgerKing", "Berlin", "Am Bahnhof 1");
    writeRestauraurants("Grieche", "Bielefeld", "Poststraße 345");

}

    return (
        <div>
            <h1>Restaurants</h1>
            <Button variant="primary" onClick={get}>Aktualisieren</Button>
            <Button variant="primary" onClick={createRestaurants}>Restaurants anlegen (nur einmal drücken)</Button>
            <Container>{restaurantList}</Container>
            <hr></hr>
        </div>
    );
};

export default RestaurantList;
