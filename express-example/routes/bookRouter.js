const express = require("express");
const app = express();
const router = express.Router();

const books = [
  { id: 1, name: "JS", author: "Mayur" },
  { id: 2, name: "Java", author: "Bhavik" },
  { id: 3, name: "Python", author: "Ishita" },
  { id: 4, name: "Node", author: "Mayur" },
];

router.get("/books", (req, res) => {
  res.send(JSON.stringify(books));
});

router.get("/book/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);
  if (book) {
    res.send(book);
  } else {
    res.sendStatus(404);
  }
});

router.get("/book", (req, res) => {
  const { author } = req.query;
  const filteredBooks = books.filter((book) => book.author == author);
  if (filteredBooks.length) {
    res.send(filteredBooks);
  } else {
    res.status(404).send(`books not found for author - ${author}`);
  }
});

module.exports = router;
