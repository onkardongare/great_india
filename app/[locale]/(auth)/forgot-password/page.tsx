"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const locale = useParams().locale || "en"; // fallback to 'en' if not found

  return (
    <div className="flex justify-center items-center ">
      <Card className="w-full max-w-sm shadow-lg border border-blue-300 bg-white">
        <CardHeader>
          <CardTitle className="text-black text-center">Forgot Password</CardTitle>
          <CardDescription className="text-blue-400 text-center">
            Enter your email to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-blue-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 pb-2">
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Reset Link
          </Button>
          <CardAction>
            <Link href={`/${locale}/login`} passHref>
              <Button variant="link" className="text-purple-600 hover:text-purple-800">
                Back to Login
              </Button>
            </Link>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}