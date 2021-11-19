import express from "express";

const app = express();

app.get("/api/listings", (req, res) => {
  /**
   * TODO: Use Insomnia to test this endpoint:
   * 'http://localhost:3000/api/listings?price-lte=250&price-gte=150&beds=2&bed_type=real+bed'
   *
   * TODO: Use `reduce` to generate: `{ $and: [{price: {$lte: 250}}, {price: {$gte: 150}}], beds: 2, bed_type:"Real Bed" }`. Hint: `Object.entries`.
   *
   * TODO: Send the response back as JSON. Hint: `res.json`.
   */
});

app.listen(3000, () => {
  console.info("Server 🏃🏾‍♂️ at: http://localhost:3000");
});
