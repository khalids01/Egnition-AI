import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";
export { Services } from "./services";
export { Header } from "./header";
export { Plans } from "./plans";
export { Footer} from "./footer";

export function Hero() {
  return (
    <section className="text-primary bg-background">
      <div className="container mx-auto py-24 lg:py-32">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
            href="#"
          >
            PRO release - Join to waitlist
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Automate your DM's and Comment's
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">
            Over 10+ fully responsive, UI blocks you can drop into your Shadcn
            UI projects and customize to your heart&apos;s content.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"}>Get started</Button>
          <Button size={"lg"} variant={"outline"}>
            Learn more
          </Button>
        </div>
        {/* End Buttons */}
        <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span className="text-sm text-muted-foreground">
            Social Media Platforms:
          </span>
          <span className="text-sm font-bold inline-flex gap-1">
            <IconBrandFacebook size={20} />
            <IconBrandInstagram size={20} />
            <IconBrandWhatsapp size={20} />
            <IconBrandYoutube size={20} />
            <IconBrandTiktok size={20} />
          </span>
          <svg
            className="h-5 w-5 text-muted-foreground"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
          </svg>
          <a
            className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
            href="#"
          >
            Integration Guide
            <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
