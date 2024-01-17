import { getServerSession } from "next-auth"

export default async function DashBoard() {
  const session = await getServerSession()
  
  return (
    <>{session?.user}</>
  )
}