import { Campaign } from "../../../../../backend/models/campaign";
import { Dashboard } from "../../../../../backend/models/dashboard";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import { verifyToken } from "@/utils/verifyToken";
import type { NextRequest } from "next/server";
import shortUUID, { Translator } from "short-uuid";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const { socialLink, rewardType } = await req.json()

    const payload = await verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const createdBy = payload?.authId

    console.log(createdBy)


    if (!socialLink || !rewardType) {
      return NextResponse.json({message:"Please provide a social link and reward type.",status:"invalid"})
    }

    //this to be removed when user are allowed to create multiple campaigns

    const alreadyCreatedcampaign = await Campaign.findOne({ createdBy })
    
    if (alreadyCreatedcampaign) {
      return NextResponse.json({message:"User already created campaign",status:"duplicate"})
    }

    const referralCode = shortUUID.generate()

    const linkGenerated = `${process.env.ENVIRONMENT}/referral/${referralCode}`

    const campaign = await Campaign.create({ socialLink, rewardType, createdBy,referralCode })
    await Dashboard.create({socialLink,userDashboard:createdBy,referralCode,linkGenerated})

    if (!campaign) {
      return NextResponse.json({message:"Error creating campaign",status:"error"})
    }

    return NextResponse.json({message:"Campaign successfully created",status: "success"})
    
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Error creating campaign",status:"error" })
  }
}

export const dynamic = 'force-dynamic'