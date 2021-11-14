import React from "react";
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
    <Card className="mt-2" key={r.id}>
        {r.name}
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
