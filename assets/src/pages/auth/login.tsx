import React from "react";
import { Link, useForm as useInertiaForm } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { AuthLayout } from "@/layouts/auth";
import { endpoints } from "@/constants/endpoints";
import { Flash } from "@/components/flash";
import { Checkbox } from "@/components/ui/checkbox";

// Define the form schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPreview() {
  // Inertia form handling
  const {
    post,
    processing,
    setData,
    errors: inertiaErrors,
  } = useInertiaForm({
    email: "",
    password: "",
    remember: false,
  });

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: LoginFormValues) {
    post(endpoints.api.login);
  }

  return (
    <AuthLayout>
      <Flash />
      <div className="flex flex-col py-16 min-h-[50vh] h-full w-full items-center justify-center px-4">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            autoComplete="email"
                            {...field}
                            onChange={(e) => {
                              onChange(e);
                              setData("email", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage>{inertiaErrors.email}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Password</FormLabel>
                          <Link
                            href="/users/reset_password"
                            className="ml-auto inline-block text-sm underline"
                          >
                            Forgot your password?
                          </Link>
                        </div>
                        <FormControl>
                          <PasswordInput
                            placeholder="******"
                            autoComplete="current-password"
                            {...field}
                            onChange={(e) => {
                              onChange(e);
                              setData("password", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage>{inertiaErrors.password}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="remember"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          {/* @ts-ignore */}
                          <Checkbox
                            {...field}
                            checked={value as boolean}
                            onCheckedChange={(e: any) => {
                              onChange(e);
                              setData("remember", e.target.checked);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-gray-600">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={processing}
                  >
                    {processing ? "Logging in..." : "Login"}
                  </Button>

                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
