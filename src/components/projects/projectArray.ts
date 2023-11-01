export type ProjectType = {
  id: string;
  name: string;
  code: string;
  preview: string;
  background: string;
  description: string;
};

export const projectArray = [
  {
    id: "1",
    name: "Been There",
    code: "https://github.com/chadjcampbell/been-there",
    preview: "https://been-there.vercel.app/login",
    background: "./been-there-ss.webp",
    description:
      "Been There is a PERN stack social media web app. It has user auth, a friends only news feed, real time chat with notifications, and a LeafletJS map to show posts from friends around the world.",
  },
  {
    id: "2",
    name: "Tally Yo",
    code: "https://github.com/chadjcampbell/tally-yo",
    preview: "https://chadjcampbell.github.io/tally-yo/",
    background: "./tally-yo-ss.webp",
    description:
      "Tally Yo is a chat/stock trading app where you gain cash by chatting with friends, or paper trading stocks. You can search, buy, and sell, then check out how your picks are doing with portfolio performance.",
  },
  {
    id: "3",
    name: "Family Game Night",
    code: "https://github.com/chadjcampbell/familyGameNight",
    preview: "https://web-production-5ab18.up.railway.app/",
    background: "./family-game-night-ss.webp",
    description:
      "Family Game Night is my first full stack CRUD app. It lets an authenticated user add games to a canvas wheel that randomly spins to pick a game. It also lets you add family members for a group leaderboard.",
  },
  {
    id: "4",
    name: "Sweet Deals",
    code: "https://github.com/chadjcampbell/shopping-cart",
    preview: "https://chadjcampbell.github.io/shopping-cart/",
    background: "./sweet-deals-ss.webp",
    description:
      "Sweet Deals is a front end shopping cart app. It uses the Fakestore API for items, and keeps the cart with items and totals using context and local storage.",
  },
];
