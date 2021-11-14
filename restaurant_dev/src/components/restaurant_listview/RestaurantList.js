import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

const restaurants = [
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
            { id: 3, name: "Herbert Langholz", rating: 5, comment: "War gut" },
        ],
    },
];

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

const RestaurantList = () => {
    return (
        <div>
            <h1>Restaurants</h1>
            <Container>{restaurantList}</Container>
        </div>
    );
};

export default RestaurantList;
