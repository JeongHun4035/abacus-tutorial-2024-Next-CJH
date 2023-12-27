'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import GlobalHeader from "../components/Header.tsx"
const Main = () => {
  const router = useRouter()
  const presentSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null
  
  const checkToSession = () => {
    if(!presentSession) {
      router.push('/sign-in')
    }
  }

  useEffect(() => {
    checkToSession()
  }, [])


  return (
    <div>
      <GlobalHeader />
    </div>
  )
}

export default Main;