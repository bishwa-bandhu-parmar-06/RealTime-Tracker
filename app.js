const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    // console.log("A user connected:", socket.id);

    socket.on("send-location", (data) => {
        // console.log("Location received:", data);
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id); // Corrected this line
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(PORT, () => {
    console.log(`App is Running on Port ${PORT}`);
});
