import { Campaign } from "../../../../backend/models/campaign";
import connectDb from "../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";
import { verifyToken } from "@/utils/verifyToken";

export async function GET(req: NextRequest) {
  try {
    await connectDb(process.env.MONGODB_URI as string)

    const payload = verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const createdBy = payload?.authId

    const campaign = await Campaign.find({createdBy}).sort('createdAt')
    
    if (!campaign) {
      return NextResponse.json({message:"Campaing not found",status:"Invalid"})
    }

    return NextResponse.json({campaign,count:campaign.length})
    
  } catch (error) {
    console.error(error)
  }
}