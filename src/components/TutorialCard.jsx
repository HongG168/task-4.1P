import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default function TutorialCard({ item }) {
    return (
        <Card>
            <Image src={item.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Tutorial’s Name</Card.Header>
                <Card.Meta>{item.description}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name="star" /> {item.rating} &nbsp;&nbsp; {item.username}
            </Card.Content>
        </Card>
    );
}
