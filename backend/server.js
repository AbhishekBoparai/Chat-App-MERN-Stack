const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes=require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

// To accept JSON data
app.use(express.json());

// Base route to check if API is running
app.get("/", (req, res) => {
    res.send("API is Running");
});

// User routes
app.use('/api/user', userRoutes);

// Chat routes
app.use("/api/chat", chatRoutes);

app.use("/api/message",messageRoutes);

// Error handling middlewares (should be placed after routes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App started on port number ${PORT}`));
