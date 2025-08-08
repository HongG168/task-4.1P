import React from "react";
import { Container, Image } from "semantic-ui-react";

export default function Hero() {
    const url =
        "https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=1200/https://images.accommodationforstudents.com/website/university-guides/au/deakin-university/uni.jpg";
    return (
        <Container>
            <Image src={url} fluid rounded />
        </Container>
    );
}
