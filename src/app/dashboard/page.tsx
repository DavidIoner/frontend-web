import { getServerSession } from "next-auth"
import UserInfo from "@/components/user-info"
import Link from "next/link"

export default async function DashBoard() {
  const session = await getServerSession()
  
  return (
    <div>
      <p>DashBoard!</p>
      <>{session ? (<UserInfo user={session.user} />) : (<div>Not logged in, <Link href="/api/auth/signin">click here to Sign in</Link>.</div>)}</>
      
    </div>
    
  )
}