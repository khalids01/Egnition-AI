
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
import React from "react";

export default function ForgotPasswordPreview() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    post("/users/reset_password");
  }

  return (
    <div className="flex min-h-[40vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email address to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid gap-4">
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

              <Button 
                type="submit" 
                className="w-full"
                disabled={processing}
              >
                {processing ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
