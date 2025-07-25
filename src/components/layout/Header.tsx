
"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import {
  Menu,
  BarChart2,
  Layers,
  Sun,
  Moon,
  Laptop,
  ClipboardCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/AuthContext"
import AnimatedLogo from "../shared/AnimatedLogo"
import { ThemeToggle } from "./ThemeToggle"
import { useTheme } from "@/contexts/ThemeContext"
import { UserNav } from "../auth/UserNav"
import { useRouter } from "next/navigation"

export function Header() {
  const { user } = useAuth()
  const { setTheme } = useTheme()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/tests", icon: ClipboardCheck, text: "Tests" },
    { href: "/flashcards", icon: Layers, text: "Flashcards" },
    { href: "/accuracy", icon: BarChart2, text: "Accuracy" },
  ]

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center"></div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <AnimatedLogo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block font-headline">
              NURSE IQN
            </span>
          </Link>
          {user && (
            <nav className="flex items-center gap-2">
              {navLinks.map(({ href, icon: Icon, text }) => (
                <Button key={text} variant="ghost" asChild>
                  <Link href={href}>
                    <Icon className="mr-2 h-4 w-4" />
                    {text}
                  </Link>
                </Button>
              ))}
            </nav>
          )}
        </div>

        <div className="md:hidden">
          {user && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <AnimatedLogo className="h-6 w-6" />
                    <span className="font-bold font-headline">NURSE IQN</span>
                  </Link>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-4">
                  {navLinks.map(({ href, icon: Icon, text }) => (
                    <Button
                      key={text}
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <Link href={href}>
                        <Icon className="mr-2 h-4 w-4" />
                        {text}
                      </Link>
                    </Button>
                  ))}
                </nav>
                <div className="mt-auto pt-4 border-t">
                  <span className="text-sm font-medium text-muted-foreground px-2">Theme</span>
                  <div className="flex flex-col space-y-1 mt-2">
                      <Button variant="ghost" className="justify-start" onClick={() => setTheme("light")}>
                          <Sun className="mr-2 h-4 w-4" />
                          <span>Light</span>
                      </Button>
                      <Button variant="ghost" className="justify-start" onClick={() => setTheme("dark")}>
                          <Moon className="mr-2 h-4 w-4" />
                          <span>Dark</span>
                      </Button>
                      <Button variant="ghost" className="justify-start" onClick={() => setTheme("system")}>
                          <Laptop className="mr-2 h-4 w-4" />
                          <span>System</span>
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden md:block">
            <ThemeToggle />
          </div>
          {user ? (
            <UserNav />
          ) : (
            <Button onClick={() => router.push('/auth')}>Login</Button>
          )}
        </div>
      </div>
    </header>
  )
}
