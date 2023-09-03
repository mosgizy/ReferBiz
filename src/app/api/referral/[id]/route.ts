import { Dashboard } from "../../../../../backend/models/dashboard";
import connectDb from "../../../../../backend/connectDb";
import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const { email, paystackLink,name } = await req.json();

    const referralLink = await Dashboard.findOne({ referralCode: params.id })

    if (!referralLink) {
      return NextResponse.json({message:"Invalid referral link",status:"invalid"})
    }

    // prevent same user from creating multiple referral links

    const alreadyExist = referralLink.activity.filter((act:any) => act.email === email)
    
    if (alreadyExist.length > 0) {
      return NextResponse.json({ message: "Link already generated" },{status:409})
    }

    const linksCount = referralLink.linksCount + 1

    const info = [{ email, name, paystackLink,info:"link",title:"Referal link generated" }]
    
    const activity = [...referralLink.activity,...info]
    
    await Dashboard.findOneAndUpdate({ referralCode: params.id }, { linksCount,activity }, { new: true, runValidators: true })

    return NextResponse.json({message:"Link generated succesfuly",status:"success",referralLink:referralLink.socialLink})
  } catch (error) {
    // console.error(error)
    return NextResponse.json({message:"An error occured",status:error},{status:500})
  }
}

export const dynamic = 'force-dynamic'