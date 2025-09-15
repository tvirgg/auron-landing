"use client";

import React, { useState } from "react";
import { Card } from "./ui/Card";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "Is it safe to connect wallets?",
    a: "Yes. The keys are stored only by you. The platform can be self-hosted, and the connection to providers is made directly.",
  },
  {
    q: "Which networks are supported?",
    a: "We are starting with popular L1/L2. Support is supplemented by modules, including custom EVM-compatible networks.",
  },
  {
    q: "Is it possible to automate volume generation?",
    a: "Yes. A scheduler with volume patterns, time windows, and wallet rotation is available.",
  },
  {
    q: "How to test without risk?",
    a: "Use demo mode and testnets. Dry-run and simulations are also available.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section py-20 md:py-28">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Frequently asked questions about launch, automation, and security.
          </p>
        </div>
      </FadeIn>

      <FadeIn staggerChildren={0.15} delay={0.3} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((item, i) => {
          return <FaqItem key={i} item={item} />;
        })}
      </FadeIn>
    </section>
  );
}

const FaqItem = ({ item }: { item: { q: string; a: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FadeIn y={30}>
      <Card className="p-6">
        <div className="group">
          <div
            className="cursor-pointer flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-lg font-semibold">{item.q}</h3>
            <span
              className={`text-neutral-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-neutral-300">{item.a}</p>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
