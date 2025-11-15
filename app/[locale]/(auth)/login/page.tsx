"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "@/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { AppDispatch, RootState } from "@/redux/store";

export default function LoginCard() {
  const locale = useParams().locale || "en";
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, loggedIn } = useSelector((state: RootState) => state.auth || { loading: false, error: null });
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.auth.userData);

  useEffect(() => {
    if (user) {
      router.replace("/en/profile");
    }
  }, [user, router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop browser reload

    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
  
      if (!trimmedEmail || !trimmedPassword) {
        alert("Error, Please fill in all fields");
        return;
      }
  
      // 1. Await login thunk
      const result = await (dispatch as any)((loginUser as any)({
        email: trimmedEmail,
        password: trimmedPassword,
      })).unwrap();

      // 2. Success → log result (optional)
      console.log("Login successful, redirecting...", result.user);
  
      // 3. Navigate only after confirmed login
      // router.replace(`/en/profile`);
      
    } catch (err) {
      // 4. Failure → show error
      alert("Login failed, Please check your email and password");
      // console.error("Login error:", err);
    }
  };
  

  return (
    <div className="flex justify-center ">
      <Card className="w-full max-w-sm bg-white border border-gray-200 shadow-md rounded-xl">
        <CardHeader className="flex-col items-center space-y-2">
          <CardTitle className="text-blue-600 text-xl font-semibold">
            Login to your account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your email below to login to your account
          </CardDescription>    
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                  className="bg-slate-100 text-gray-800"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-blue-500 hover:underline hover:text-blue-700"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-100 text-gray-800"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Login with Google
          </Button>
          <CardAction>
            <Link href={`/${locale}/register`} passHref>
              <Button variant="link" className="text-purple-600 hover:text-purple-800">
                Don’t have an account? Register
              </Button>
            </Link>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}
