const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const origin = process.env.ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.use("/api/v1/tasks", require("./routes/taskRouter"));

app.listen(port, () => console.log(`Server running on port ${port}`));
