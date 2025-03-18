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

export default function ResetPasswordPreview() {
  const { data, setData, post, processing, errors } = useForm({
    password: "",
    password_confirmation: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // The token should be extracted from the URL and included in the post request
    const token = window.location.pathname.split("/").pop();
    post(`/users/reset_password/${token}`);
  }

  return (
    <div className="flex min-h-[50vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your new password to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid gap-4">
              {/* New Password Field */}
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="password">New Password</FormLabel>
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
                {processing ? 'Resetting...' : 'Reset Password'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
