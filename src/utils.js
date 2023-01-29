import img1 from "./images/movie.jpg";
import img2 from "./images/cocktail.jpg";
import img3 from "./images/food.jpg";

export const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Cocktails",
    url: "cocktails",
  },
  {
    name: "Recipes",
    url: "recipes",
  },
  {
    name: "Movies",
    url: "movies",
  },
];

export const homeSections = [
  {
    id: 1,
    title: "Watch",
    image: img1,
    text: "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.",
    btnText: "Find a movie",
    btnUrl: "movies",
  },
  {
    id: 2,
    title: "Drink",
    image: img2,
    text: "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.",
    btnText: "Drink a cocktail",
    btnUrl: "cocktails",
  },
  {
    id: 3,
    title: "Eat",
    image: img3,
    text: "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.",
    btnText: "Eat some food",
    btnUrl: "recipes",
  },
];
