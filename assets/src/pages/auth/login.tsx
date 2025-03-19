import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import * as React from "react";

export default function LoginPreview() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    post("/login");
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Form {...{ register, handleSubmit, errors }}>

          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid gap-4">
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                  />
                </FormControl>
                {errors.email && <FormMessage>{errors.email}</FormMessage>}
              </FormItem>

              <FormItem className="grid gap-2">
                <div className="flex justify-between items-center">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Link
                    href="/users/reset_password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <PasswordInput
                    id="password"
                    placeholder="******"
                    autoComplete="current-password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                  />
                </FormControl>
                {errors.password && (
                  <FormMessage>{errors.password}</FormMessage>
                )}
              </FormItem>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={data.remember}
                  onChange={(e: any) =>
                    setData("remember", e.target.checked)
                  }
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={processing}>
                {processing ? "Logging in..." : "Login"}
              </Button>

              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
          </Form> */}
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
