import React from "react";
import { Header } from "semantic-ui-react";

export default function SectionHeading({ children }) {
    return (
        <Header as="h1" textAlign="center" style={{ marginTop: 40 }}>
            {children}
        </Header>
    );
}
