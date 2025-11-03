require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");


const app = express();

app.use(
  cors({
    origin: "*", // ⚠️ change to frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();
app.use(express.json());


app.get("/", (req, res) => {
  res.send(" Gyandeep Backend is Running...");
});

app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
