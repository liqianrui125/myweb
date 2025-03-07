const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/chemtutor", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model("User", UserSchema);

// Sign-up Route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully!" });
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Find user in database
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
