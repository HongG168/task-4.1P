import React from "react";
import { Menu, Input, Button, Container } from "semantic-ui-react";

export default function HeaderBar() {
    return (
        <Menu
            secondary
            borderless
            style={{ borderBottom: "1px solid #eee", marginBottom: 10 }}
        >
            <Container>
                <Menu.Item
                    header
                    style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                    <b>DEV@Deakin</b>
                </Menu.Item>
                <Menu.Item style={{ flex: 1 }}>
                    <Input icon="search" placeholder="Search..." fluid />
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary>Post</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>Login</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
}
