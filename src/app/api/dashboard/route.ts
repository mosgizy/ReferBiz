import { Dashboard } from "../../../../backend/models/dashboard";
import connectDb from "../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";
import { verifyToken } from "@/utils/verifyToken";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const payload = verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const userId = payload?.authId

    const dashboard = await Dashboard.findOne({userDashboard:userId})

    return NextResponse.json({dashboard,status:"success"})
  } catch (error) {
    console.error(error);
    return NextResponse.json({status:error})
  } 
}