import { Auth } from "../../../../../backend/models/auth";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const { email, name } = await req.json();
    const register = await Auth.create({ email, name });

    return NextResponse.json({user:register.name,token:register.createToken()});
  } catch (error:any) {
    if (error.name === "ValidationError") {
      const validationErrors = [];
      for (const field in error.errors) {
        validationErrors.push(error.errors[field].message);
      }
      console.log(validationErrors);
      return NextResponse.json({message: validationErrors});
    } 
    if (error.code === 11000 && error.keyPattern.email === 1) {
      return NextResponse.json({message: "Email already exists"},{status:409});
    }

    return NextResponse.json({ message: error.name });
  }
}