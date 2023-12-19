'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import GlobalHeader from "./header"
const Main = () => {
  const router = useRouter()
  const presentSession = sessionStorage.getItem('user')
  
  const checkToSession = () => {
    if(!presentSession) {
      router.push('/sign-in')
    }
  }

  useEffect(() => {
    checkToSession()
  }, [])


  return (
    <>
      <div>
        <GlobalHeader />
      </div>
      Main
    </>
  )
}

export default Main;