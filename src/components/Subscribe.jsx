import React from "react";
import { Segment, Container, Input, Button } from "semantic-ui-react";

export default function Subscribe() {
    return (
        <Segment inverted color="black" style={{ marginTop: 40 }}>
            <Container textAlign="center">
                <b>SIGN UP FOR OUR DAILY INSIDER</b>&nbsp;&nbsp;
                <Input placeholder="Enter your email" />
                <Button style={{ marginLeft: 8 }}>Subscribe</Button>
            </Container>
        </Segment>
    );
}
