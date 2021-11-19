import express from "express";

const app = express();

app.get("/api/listings", (req, res) => {
  /**
   * TODO: Use Insomnia to test this endpoint:
   * 'http://localhost:3000/api/listings?price-lte=250&price-gte=150&beds=2&bed_type=real+bed'
   *
   * TODO: Use `reduce` to generate: `{ "price-lte": 250, "price-gte": 150, "beds": 2, "bed_type": "real bed" }`. Hint: `Object.entries`.
   *
   * TODO: Send the response back as JSON. Hint: `res.json`.
   */
});
