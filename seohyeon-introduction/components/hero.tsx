import Image from "next/image"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pb-10 pt-16 text-center md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Nice to meet you!
        </span>

        <div className="flex flex-col items-center gap-5">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-card shadow-sm ring-4 ring-primary/15 sm:h-48 sm:w-48">
            <Image
              src="/images/community-illustration.png"
              alt="Warm illustration of a diverse community of people helping and supporting one another"
              fill
              priority
              sizes="(max-width: 640px) 10rem, 12rem"
              className="object-cover"
            />
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hi, I&apos;m Seohyeon Park
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m a university student from South Korea. I love watching
            sports, trying new food, and listening to music. I also like meeting
            new people and learning about different cultures. Nice to meet you!
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% -10%, oklch(0.93 0.05 340 / 0.6), transparent), radial-gradient(50rem 25rem at 90% 10%, oklch(0.95 0.04 190 / 0.6), transparent)",
        }}
      />
    </header>
  )
}
