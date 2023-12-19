'use-client'
import React from "react"
import '@/styles/sign-in.css'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="signin-layout">
      <img className="background-image" src="/happytown.gif" alt="행복한마을" />
      {children}
    </div>
  )
}
