import React from "react";
import { Container, Grid, List, Segment, Icon } from "semantic-ui-react";

export default function Footer() {
    return (
        <Segment
            vertical
            style={{ padding: "3em 0", background: "#f6f6f6", marginTop: 0 }}
        >
            <Container>
                <Grid stackable columns={3}>
                    <Grid.Column>
                        <h3>Explore</h3>
                        <List link>
                            <List.Item>Home</List.Item>
                            <List.Item>Questions</List.Item>
                            <List.Item>Articles</List.Item>
                            <List.Item>Tutorials</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Support</h3>
                        <List link>
                            <List.Item>FAQs</List.Item>
                            <List.Item>Help</List.Item>
                            <List.Item>Contact Us</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Stay connected</h3>
                        <List horizontal>
                            <List.Item>
                                <Icon name="facebook f" size="big" />
                            </List.Item>
                            <List.Item>
                                <Icon name="twitter" size="big" />
                            </List.Item>
                            <List.Item>
                                <Icon name="instagram" size="big" />
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <div style={{ textAlign: "center", marginTop: 24 }}>
                    <b>DEV@Deakin 2022</b>
                    <List horizontal divided style={{ marginTop: 8 }} link>
                        <List.Item>Privacy Policy</List.Item>
                        <List.Item>Terms</List.Item>
                        <List.Item>Code of Conduct</List.Item>
                    </List>
                </div>
            </Container>
        </Segment>
    );
}
