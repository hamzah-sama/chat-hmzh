import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js";
import User from "../models/user.model.js";
import { createConnection } from "mongoose";
import redis from "../../../shared/redis/redis.js"

export const login = async (req, res) => {
  try {
    const { token } = req.body;
    let decoded;

    try {
      decoded = await getAuth(app).verifyIdToken(token);
    } catch (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    const { uid, email, name, picture } = decoded;

    const user = await User.findOneAndUpdate(
      { firebaseUid: decoded.uid },
      {
        $setOnInsert: {
          firebaseUid: uid,
          email,
          name,
          avatar: picture,
        },
      },
      { upsert: true, new: true, runValidators: true },
    );

    const sessionId = crypto.randomUUID();
    redis

    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: `login error: ${error}` });
  }
};
