import mongoose from "mongoose";
import { genSaltSync, hashSync,compare } from "bcryptjs"
import {sign} from 'jsonwebtoken'

interface authI{
  name: string;
  email: string;
  password: string;
  createToken(): string;
  comparePassword(token:string):boolean;
}

const AuthSchema = new mongoose.Schema<authI>({
  name: {
    type: String,
    required: [true, "Please provide a valid name"],
    minlength: 3,
    maxlength:50
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    
  }
})

AuthSchema.pre("save", async function () {
  try {
    const salt = genSaltSync(10);
    this.password = hashSync(this.password, salt);
  } catch (error) {
    throw new Error("Password hashing failed");
  }
});

AuthSchema.methods.createToken = function () { 
  const token = sign({ authId: this._id, name: this.name }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_LIFETIME })
  return token;
}

AuthSchema.methods.comparePassword = async function (hashedPassword: string) { 
  const isMatch = await compare(hashedPassword, this.password)
  return isMatch.valueOf()
}

const Auth = mongoose.models['Auth'] ?? mongoose.model('Auth', AuthSchema)

export { Auth }