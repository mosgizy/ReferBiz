import { Campaign } from "../../../../../backend/models/campaign";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";
import { verifyToken } from "@/utils/verifyToken";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDb(process.env.MONGODB_URI as string)

    const payload = verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const createdBy = payload?.authId

    const campaign = await Campaign.findOne({ _id: params.id,createdBy })
    
    if (!campaign) {
      return NextResponse.json({message:"Campaign not found",status:"Invalid"})
    }

    return NextResponse.json({campaign})
    
  } catch (error) {
    console.error(error)
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const body = await req.json()

    const payload = verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const createdBy = payload?.authId

    const campaign = await Campaign.findOneAndUpdate(
      {
        _id: params.id,
        createdBy
      },
      body,
      {
        new: true,
        runValidators: true
      })
    
    if (!campaign) {
      return NextResponse.json({message:"Campaign not found",status:"Invalid"})
    }

    return NextResponse.json({campaign,status:"sucess"})
    
  } catch (error) {
    console.error(error)
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDb(process.env.MONGODB_URI as string)

    const payload = verifyToken(req)

    if (!payload) {
      return NextResponse.json({message:"Invalid Authentication",status:"invalid"})
    }

    const createdBy = payload?.authId

    const campaign = await Campaign.findOneAndRemove({ _id: params.id, createdBy },)
    
    if (!campaign) {
      return NextResponse.json({message:"Campaign not found",status:"Invalid"})
    }

    return NextResponse.json({status:"sucess"})
    
  } catch (error) {
    console.error(error)
  }
}