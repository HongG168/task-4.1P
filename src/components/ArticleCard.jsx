import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default function ArticleCard({ item }) {
    return (
        <Card>
            <Image src={item.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Article’s Name</Card.Header>
                <Card.Meta>{item.description}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name="star" /> {item.rating} &nbsp;&nbsp; Author’s name:{" "}
                {item.author}
            </Card.Content>
        </Card>
    );
}
