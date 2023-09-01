import { JwtPayload, verify } from 'jsonwebtoken'
import type { NextRequest } from "next/server";

const verifyToken = (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers)
    const header = requestHeaders.get('authorization')

    if (!header || !header.startsWith('Bearer')) {
      return undefined
    }

    const token = header.split(' ')[1]

    const secret = process.env.JWT_SECRET || ""
    const payload: JwtPayload = verify(token, secret) as JwtPayload
  
    return payload
}

export {verifyToken}