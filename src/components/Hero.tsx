import React from 'react';
import { Button } from './ui/Button';
import { PlayCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Hero() {
  return (
    <section className="section relative py-20 md:py-32 text-center overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Automate Token Launch and Trading
        </h1>
        <FadeIn delay={0.3}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 mb-10">
            Auron Bundler is your all-in-one tool for automating token launches, generating volume, and managing trades and wallets.
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="flex justify-center items-center gap-4">
            <Button variant="primary" className="px-6 py-3 text-lg">
              Get Started
            </Button>
            <Button variant="ghost" className="px-6 py-3 text-lg">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
