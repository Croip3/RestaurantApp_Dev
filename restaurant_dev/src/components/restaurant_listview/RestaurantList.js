import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue} from "firebase/database";

const RestaurantList = () => {
    const [restaurantIds, setRestaurantIds] = useState([]);
    const [restaurantData, setRestaurantData] = useState({});
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
    
    useEffect(() => {
        get()
    }, [])

    const write = (name, city) => {
        const db = getDatabase();
        const rf = ref(db, "restaurants/");
        push(rf, {
            name: name,
            city: city,
        });
    };

    const get = () => {
        const db = getDatabase();
        const restaurantsRef = ref(db, "restaurants");
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
                    Postleitzahl
                    {restaurantData[r].city} <br /> Straße
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    const app = initializeApp(firebaseConfig);
    //write("bc", "Berlin");
    //write("Grieche", "Bielefeld");
    //get();
    return (
        <div>
            <h1>Restaurants</h1>
            <Button variant="primary" onClick={get}>Aktualisieren</Button>
            <Container>{restaurantList}</Container>
        </div>
    );
};

export default RestaurantList;
