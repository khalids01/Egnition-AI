import React from "react";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: {
    text: string;
    included: boolean;
    footnote?: string;
  }[];
  limits: {
    messages: string;
    comments: string;
  };
  cta: string;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: "hobby",
    name: "Hobby",
    description: "Perfect for individuals and small projects",
    price: {
      monthly: 0,
      annually: 0,
    },
    features: [
      { text: "1,000 messages", included: true },
      { text: "1,000 comments", included: true },
      { text: "Basic automation templates", included: true },
      { text: "1 team member", included: true },
      { text: "24-hour response time", included: true },
      { text: "Community support", included: true },
      { text: "API access", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Custom integrations", included: false },
    ],
    limits: {
      messages: "1,000",
      comments: "1,000",
    },
    cta: "Get Started",
  },
  {
    id: "scale",
    name: "Scale",
    description: "For growing businesses and teams",
    price: {
      monthly: 59,
      annually: 49,
    },
    features: [
      { text: "100,000 messages", included: true },
      { text: "100,000 comments", included: true },
      { text: "Advanced automation workflows", included: true },
      { text: "Up to 5 team members", included: true },
      { text: "8-hour response time", included: true },
      { text: "Priority email support", included: true },
      { text: "API access", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom integrations", included: false },
    ],
    limits: {
      messages: "100,000",
      comments: "100,000",
    },
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: {
      monthly: 199,
      annually: 169,
    },
    features: [
      { text: "Unlimited messages", included: true },
      { text: "Unlimited comments", included: true },
      { text: "Custom automation workflows", included: true },
      { text: "Unlimited team members", included: true },
      { text: "2-hour response time", included: true },
      { text: "Dedicated support manager", included: true },
      { text: "Advanced API access", included: true },
      { text: "Custom analytics dashboard", included: true },
      {
        text: "Custom integrations",
        included: true,
        footnote: "Including white-labeling",
      },
    ],
    limits: {
      messages: "Unlimited",
      comments: "Unlimited",
    },
    cta: "Contact Sales",
  },
];

export function Plans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  return (
    <section className="w-full py-12 bg-background text-primary">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Choose the perfect plan for your automation needs. No hidden fees.
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <span
              className={cn(
                "text-sm",
                billingCycle === "monthly" ? "text-white" : "text-zinc-400"
              )}
            >
              Monthly
            </span>
            <Switch
              checked={billingCycle === "annually"}
              onCheckedChange={(checked) =>
                setBillingCycle(checked ? "annually" : "monthly")
              }
              className="data-[state=checked]:bg-primary"
            />
            <span
              className={cn(
                "text-sm",
                billingCycle === "annually" ? "text-white" : "text-zinc-400"
              )}
            >
              Annually
              <span className="ml-1 rounded-full bg-emerald-900/30 px-2 py-0.5 text-xs text-emerald-400">
                Save 15%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative flex flex-col border border-zinc-800 bg-zinc-950 text-white shadow-lg",
                plan.popular && "border-primary/50 shadow-primary/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="flex flex-col space-y-1.5 pb-6">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    $
                    {billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.annually}
                  </span>
                  <span className="text-zinc-400">/month</span>
                </div>

                <div className="grid gap-2 py-4">
                  <div className="grid grid-cols-2 gap-2 rounded-lg bg-zinc-900/50 p-3">
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-400">Messages</p>
                      <p className="font-medium">{plan.limits.messages}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-400">Comments</p>
                      <p className="font-medium">{plan.limits.comments}</p>
                    </div>
                  </div>
                </div>

                <ul className="grid gap-2 py-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 text-zinc-600 mt-0.5" />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          !feature.included && "text-zinc-400"
                        )}
                      >
                        {feature.text}
                        {feature.footnote && (
                          <span className="block text-xs text-zinc-500">
                            {feature.footnote}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  )}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm">
            All plans include: SSL encryption, 99.9% uptime guarantee, and GDPR
            compliance
          </p>
          <p className="mt-2 text-zinc-400 text-sm">
            Need a custom plan?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
