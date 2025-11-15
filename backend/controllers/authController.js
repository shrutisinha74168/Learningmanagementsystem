import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// ✅ REGISTER USER
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await User.create({ name, email, password, role });

    // Respond with token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("❌ Register error:", err.message);
    res.status(500).json({ message: err.message });
  }
};



// ✅ LOGIN USER (Fixed version with debugging + strict logic)
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("📩 Login request:", email, password);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    console.log("🔐 Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("✅ Login success:", user.email);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });

  } catch (err) {
    console.error("🔥 Login error:", err.message);
    res.status(500).json({ message: "Server error: " + err.message });
  }
};
