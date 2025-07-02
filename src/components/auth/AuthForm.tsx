"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/AuthContext"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

const signupSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

type LoginFormValues = z.infer<typeof loginSchema>
type SignupFormValues = z.infer<typeof signupSchema>

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false);

  const { login, signup } = useAuth()
  const { toast } = useToast()

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const onLogin = async (data: LoginFormValues) => {
    setIsLoading(true);
    await login(data.email, data.password);
    setIsLoading(false);
  }

  const onSignup = async (data: SignupFormValues) => {
    setIsLoading(true);
    await signup(data.email, data.password, data.username);
    setIsLoading(false);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-card p-8 rounded-2xl shadow-2xl border">
          <h2 className="text-3xl font-bold text-center font-headline mb-2">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            {isLogin ? "Sign in to continue your journey." : "Join Nurse IQ to start learning."}
          </p>

          <form onSubmit={isLogin ? handleLoginSubmit(onLogin) : handleSignupSubmit(onSignup)} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" {...registerSignup("username")} />
                {signupErrors.username && <p className="text-sm text-destructive">{signupErrors.username.message}</p>}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...(isLogin ? registerLogin("email") : registerSignup("email"))} />
              {(isLogin ? loginErrors.email : signupErrors.email) && (
                <p className="text-sm text-destructive">{(isLogin ? loginErrors.email : signupErrors.email)?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...(isLogin ? registerLogin("password") : registerSignup("password"))} />
              {(isLogin ? loginErrors.password : signupErrors.password) && (
                <p className="text-sm text-destructive">{(isLogin ? loginErrors.password : signupErrors.password)?.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full !mt-6" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
          
          <p className="mt-6 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="font-semibold">
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
