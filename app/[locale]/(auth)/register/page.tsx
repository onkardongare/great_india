"use client";

import Link from "next/link";
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
    const locale = useParams().locale || "en";  //fallback to en if no locale is provided

  return (
    <div className="flex justify-center ">
      <Card className="w-full max-w-sm shadow-lg border border-blue-300 bg-white">
        <CardHeader>
          <CardTitle className="flex-row justify-center text-black text-center">Create your account</CardTitle>
          <CardDescription className="text-blue-400 text-center">
            Enter your details below to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-blue-700">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-blue-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-blue-700">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-blue-700">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 pb-2">
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Register
          </Button>
          <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
            Register with Google
          </Button>
          <CardAction>
           <Link href={`/${locale}/login`} passHref>
              <Button variant="link" className="text-purple-600 hover:text-purple-800">
                Already have an account? Login
              </Button>
            </Link>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  )
}