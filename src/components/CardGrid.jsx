import React from "react";
import { Container, Card, Button } from "semantic-ui-react";

export default function CardGrid({ items, renderCard, buttonText }) {
    return (
        <Container textAlign="center">
            <Card.Group itemsPerRow={3} stackable>
                {items.map((it) => renderCard(it))}
            </Card.Group>

            <Button basic style={{ marginTop: 16 }}>
                {buttonText}
            </Button>
        </Container>
    );
}
