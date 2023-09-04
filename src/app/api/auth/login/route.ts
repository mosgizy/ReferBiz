import { Auth } from "../../../../../backend/models/auth";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const { email, name} = await req.json();

    if (!email || !name) { 
      return NextResponse.json({message:"No email provided",status:"invalid"},{status:400})
    }

    const user = await Auth.findOne({ email })
    // console.log("hello",user.createToken())

    // const isValidPassword = await user.comparePassword(password)
    
    if (!user) {
      return NextResponse.json({message:"Invalid credentials, please provide a valid email and password"},{status:401})
    }

    return NextResponse.json({name:user.name,token:user.createToken()});
  } catch (error) {
    console.error(error)
    return NextResponse.json({message:"An error occur", status:"error"},{status:500})
  }
}