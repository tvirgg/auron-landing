import React from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    features: [
      "Demo mode",
      "Basic bundle templates",
      "1 project",
      "Email support",
    ],
    cta: "Try it",
  },
  {
    name: "Pro",
    price: "$49 / mo",
    badge: "Top choice",
    highlighted: true,
    features: [
      "Full access to bundlers",
      "Volume scheduler",
      "Up to 20 projects",
      "Priority support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Self-hosted/On-prem",
      "Audit and security",
      "Unlimited projects",
      "SLA 99.9%",
    ],
    cta: "Contact us",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section py-20 md:py-28">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Choose a plan for your current needs, scale without limits.
          </p>
        </div>
      </FadeIn>

      <FadeIn staggerChildren={0.2} delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
            <FadeIn y={40} key={plan.name}>
              <Card
                className={`p-6 md:p-8 relative h-full flex flex-col ${
                  plan.highlighted ? "border-rose-400" : ""
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-4 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 text-white text-xs font-semibold px-2 py-1 rounded">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-extrabold mb-6">{plan.price}</div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-neutral-300">
                      <Check className="w-5 h-5 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-auto"
                  variant={plan.highlighted ? "primary" : "ghost"}
                >
                  {plan.cta}
                </Button>
              </Card>
            </FadeIn>
        ))}
        </div>
      </FadeIn>
    </section>
  );
}
