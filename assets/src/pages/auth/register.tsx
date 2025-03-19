import { Link, useForm } from "@inertiajs/react";
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

export default function RegisterPreview() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    post("/register");
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Create a new account by filling out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid gap-4">
              {/* Name Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                  />
                </FormControl>
                {errors.name && (
                  <FormMessage>{errors.name}</FormMessage>
                )}
              </FormItem>

              {/* Email Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="johndoe@mail.com"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                  />
                </FormControl>
                {errors.email && (
                  <FormMessage>{errors.email}</FormMessage>
                )}
              </FormItem>

              {/* Phone Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormControl>
                  <Input
                    id="phone"
                    placeholder="1234567890"
                    type="tel"
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                  />
                </FormControl>
                {errors.phone && (
                  <FormMessage>{errors.phone}</FormMessage>
                )}
              </FormItem>

              {/* Password Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    id="password"
                    placeholder="******"
                    autoComplete="new-password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                  />
                </FormControl>
                {errors.password && (
                  <FormMessage>{errors.password}</FormMessage>
                )}
              </FormItem>

              {/* Confirm Password Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="password_confirmation">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    id="password_confirmation"
                    placeholder="******"
                    autoComplete="new-password"
                    value={data.password_confirmation}
                    onChange={e => setData('password_confirmation', e.target.value)}
                  />
                </FormControl>
                {errors.password_confirmation && (
                  <FormMessage>{errors.password_confirmation}</FormMessage>
                )}
              </FormItem>

              <Button 
                type="submit" 
                className="w-full"
                disabled={processing}
              >
                {processing ? 'Creating account...' : 'Register'}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
