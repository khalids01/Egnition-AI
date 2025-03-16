import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, Sparkles } from "lucide-react";
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandInstagram as Instagram,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

export function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-zinc-800 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40rem] -left-[30rem] w-[80rem] h-[80rem] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[30rem] w-[80rem] h-[80rem] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                Egnition AI
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs">
              Automate your DMs and comments with the power of artificial
              intelligence. Save time and engage more effectively.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Product column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="space-y-3">
              {[
                "Features",
                "Pricing",
                "Integrations",
                "Changelog",
                "Documentation",
                "API Reference",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {[
                "About",
                "Blog",
                "Careers",
                "Customers",
                "Partners",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay updated</h3>
            <p className="text-zinc-400 text-sm">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Egnition AI. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            {["Terms", "Privacy", "Cookies", "Security", "Accessibility"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-zinc-500 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Animated accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-[length:200%_100%] animate-[gradient_8s_ease_infinite]"></div>
    </footer>
  );
}
