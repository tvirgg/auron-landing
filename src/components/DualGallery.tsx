import Image from "next/image";
import React from "react";
import { FadeIn } from "./FadeIn";

export default function DualGallery() {
  return (
    <section className="section relative py-16 md:py-24">
      {/* верхняя разделительная линия как на макете */}
      <div className="absolute inset-x-0 top-0 h-px bg-neutral-800" />

      <FadeIn y={30}>
        {/* Заголовок блока */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400">
              Powerful features
            </span>{" "}
            <span className="text-white">at your fingertips</span>
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-400">
            Discover unique solutions designed to streamline your journey and improve your experience.
          </p>
        </div>
      </FadeIn>

      {/* Контейнер сетки + вертикальная линия посередине на md+ */}
      <div className="relative">
        <div className="pointer-events-none hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-800" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn x={-40} delay={0.3} duration={0.6}>
            {/* Левая колонка: 1.png и 2.png */}
            <div className="flex flex-col justify-between space-y-6">
              <figure className="card p-0 overflow-hidden border border-neutral-800 bg-neutral-900/40">
                <div className="relative">
                  {/* мягкое свечение карточки */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-rose-500/5 to-transparent pointer-events-none" />
                  <Image
                    src="/1.png"
                    alt="Wallet Manager preview"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </figure>

              <figure className="card p-0 overflow-hidden border border-neutral-800 bg-neutral-900/40">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
                  <Image
                    src="/2.png"
                    alt="Wallet Manager cards"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </figure>
            </div>
          </FadeIn>

          <FadeIn x={40} delay={0.3} duration={0.6}>
            {/* Правая колонка: 3.png and 4.png */}
            <div className="space-y-6">
              <figure className="card p-0 overflow-hidden border border-neutral-800 bg-neutral-900/40">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
                  <Image
                    src="/6.png"
                    alt="Wallet Manager cards"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </figure>
              <figure className="card p-0 overflow-hidden border border-neutral-800 bg-neutral-900/40">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-500/10 via-rose-500/5 to-transparent pointer-events-none" />
                  <Image
                    src="/3.png"
                    alt="Built-in transaction monitor"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </figure>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* нижняя разделительная линия как на макете (тонкая) */}
      <div className="mt-12 h-px bg-neutral-800" />
    </section>
  );
}
