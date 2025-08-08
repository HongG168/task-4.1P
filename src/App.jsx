import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ArticleCard from "./components/ArticleCard";
import CardGrid from "./components/CardGrid";
import TutorialCard from "./components/TutorialCard";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { featuredArticles, featuredTutorials } from "./data";

function App() {
    return (
        <div>
            <HeaderBar />,
            <Hero />
            <SectionHeading>Feature's Article</SectionHeading>
            <CardGrid
                items={featuredArticles}
                renderCard={(item) => <ArticleCard key={item.id} item={item} />}
                buttonText="See all articles"
            />
            <SectionHeading>Featured Tutorials</SectionHeading>
            <CardGrid
                items={featuredTutorials}
                renderCard={(item) => (
                    <TutorialCard key={item.id} item={item} />
                )}
                buttonText="See all tutorials"
            />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
