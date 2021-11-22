import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: "Ciao Bella",
            city: "Leipzig",
            street: "Bahnhofstraße 14",
            postalCode: "12345",
            reviews: [
                { name: "Peter Lustig", rating: 4, comment: "" },
                { name: "Hanz Ebert", rating: 4, comment: "Nichts zu meckern" },
                { name: "Herbert Langholz", rating: 5, comment: "War gut" },
            ],
        },
        {
            id: 2,
            name: "Burger King",
            city: "Chemnitz",
            street: "Feldrand 5",
            postalCode: "54321",
            reviews: [
                { id: 1, name: "Peter Lustig", rating: 4, comment: "" },
                {
                    id: 2,
                    name: "Hanz Ebert",
                    rating: 4,
                    comment: "Nichts zu meckern",
                },
                {
                    id: 3,
                    name: "Herbert Langholz",
                    rating: 5,
                    comment: "War gut",
                },
            ],
        },
    ]);
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

    const write = (name, city) => {
        const db = getDatabase();
        const rf = ref(db, "restaurants/" + name);
        set(rf, {
            name: name,
            city: city,
        });
    };

    const get = () => {
        const db = getDatabase();
        const starCountRef = ref(db, "/");
        onValue(starCountRef, (snapshot) => {
            setRestaurants(snapshot.val());
            console.log(restaurants);
            //updateStarCount(postElement, data);
        });
    };

    const restaurantList = restaurants.map((r) => (
        <Card className="mt-2 text-left" key={r.id}>
            <Card.Body>
                <Card.Title className="text-left">{r.name}</Card.Title>
                <Card.Text>rating</Card.Text>
                <Card.Text>
                    {r.postalCode}
                    {r.city} <br /> {r.street}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    const app = initializeApp(firebaseConfig);
    write("bc", "Berlin");
    write("Grieche", "Bielefeld");
    //get();
    return (
        <div>
            <h1>Restaurants</h1>
            <Container>{restaurantList}</Container>
        </div>
    );
};

export default RestaurantList;
