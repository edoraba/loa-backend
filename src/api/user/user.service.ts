import User from "./user.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function register(data) {
  const { email, password } = data;
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token };
}

async function login(data) {
  const { email, password } = data;
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }
  
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }

  const userData = {
    _id: user._id,
    email: email,
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
  return { token, user: userData };
}

export { register, login };
