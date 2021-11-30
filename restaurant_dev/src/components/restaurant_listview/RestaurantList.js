import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
=======
import {db} from "../firebase_config"
import {ref, set, push, onValue} from "firebase/database";
>>>>>>> d7b69f2f5a2c267d79cd51c6fd931e7cd2180f99

const RestaurantList = () => {
    const [restaurantIds, setRestaurantIds] = useState([]);
    const [restaurantData, setRestaurantData] = useState({});
<<<<<<< HEAD
    const firebaseConfig = {
        apiKey: "AIzaSyBvWfgW2euxpEcPGhynwfHMJ6wtLqZztBI",
        authDomain: "restaurant-webtechnologien.firebaseapp.com",
        databaseURL:
            "https://restaurant-webtechnologien-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "restaurant-webtechnologien",
        storageBucket: "restaurant-webtechnologien.appspot.com",
        messagingSenderId: "256465085944",
        appId: "1:256465085944:web:346c00a78579aeb34fa20d",
    };
=======
>>>>>>> d7b69f2f5a2c267d79cd51c6fd931e7cd2180f99

    useEffect(() => {
        get()
    }, [])

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
