import React, { useEffect } from "react";
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
import { toast } from "sonner";

// Define the form schema
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPreview() {
  // Inertia form handling
  const {
    post,
    processing,
    setData,
    errors: inertiaErrors,
  } = useInertiaForm({
    name: "",
    email: "",
    password: "",
  });

  // Shadcn/React Hook Form handling
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  function onSubmit(values: RegisterFormValues) {
    post(endpoints.api.register);
  }

  console.log(inertiaErrors);

  useEffect(() => {
    if (!inertiaErrors && Object.keys(inertiaErrors).length > 0) {
      Object.keys(inertiaErrors)?.forEach((element) => {
        toast(inertiaErrors[element]);
        form.setError(element as "name" | "email" | "password", {
          message: inertiaErrors[element],
        });
      });
    }
  }, [inertiaErrors]);

  return (
    <AuthLayout>
      <Flash />
      <div className="flex min-h-[60vh] py-16 h-full w-full items-center justify-center px-4">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>
              Create a new account by filling out the form below.
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
                    name="name"
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            onChange={(e) => {
                              onChange(e);
                              setData("name", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage>{inertiaErrors.name}</FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="khalid@mail.com"
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            placeholder="******"
                            autoComplete="new-password"
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
                    name="password_confirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            placeholder="******"
                            autoComplete="new-password"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={processing}
                  >
                    {processing ? "Creating account..." : "Register"}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
