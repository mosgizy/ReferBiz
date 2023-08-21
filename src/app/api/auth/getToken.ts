// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

const secret = process.env.GOOGLE_SECRET

const Token =  async (req:NextRequest) => {

  const token = await getToken({ req,secret })
  if (token) {
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
  } else {
    return NextResponse.json({ status: 401 })
  }
  return NextResponse.json({msg:'success'})
}

export default Token