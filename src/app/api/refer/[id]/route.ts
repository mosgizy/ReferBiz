import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { Dashboard } from "../../../../../backend/models/dashboard";
import connectDb from "../../../../../backend/connectDb";
 
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDb(process.env.MONGODB_URI as string)
    const referralLink = await Dashboard.findOne({ referralCode: params.id })

    const socialUrl = new URL(referralLink.socialLink, request.url)

    if (!referralLink) { 
      NextResponse.redirect(new URL('/'))
    }

    const referrals = referralLink.referrals + 1

    await Dashboard.findOneAndUpdate({ referralCode: params.id }, { referrals }, { new: true, runValidators: true })

    return NextResponse.redirect(socialUrl)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}