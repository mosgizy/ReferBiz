import { Auth } from "../../../../../backend/models/auth";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const { email, password } = await req.json();

    if (!email || !password) { 
      return NextResponse.json({message:"Please provide email and password"})
    }

    const user = await Auth.findOne({ email })

    const isValidPassword = await user.comparePassword(password)
    
    if (!user || !isValidPassword) {
      return NextResponse.json({message:"Invalid credentials, please provide a valid email and password"})
    }

    return NextResponse.json({user:user.name,token:user.createToken()});
  } catch (error) {
    console.error(error)
  }
}