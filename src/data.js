import { faker } from "@faker-js/faker";

const picsum = (w, h, i) => `https://picsum.photos/100?random=3`;

export const featuredArticles = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    title: "Article’s Name",
    description:
        ["React OR Vue", "NodeJS", "React Hooks"][i] || faker.hacker.noun(),
    author: faker.person.fullName(),
    rating: 5,
    image: picsum(300, 180, i + 1),
}));

export const featuredTutorials = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    title: "Tutorial’s Name",
    description: ["JS6", "React Router", "Express"][i] || faker.hacker.verb(),
    username: faker.internet.userName(),
    rating: [5, 5, 4.9][i] || 5,
    image: picsum(300, 180, i + 5),
}));
