import {
  GraduationCap,
  BookHeart,
  MapPin,
  Volleyball,
  UtensilsCrossed,
  Sparkles,
  Music,
  Heart,
} from "lucide-react"
import { Hero } from "@/components/hero"
import { InfoCard } from "@/components/info-card"

export default function Page() {
  return (
    <main className="min-h-svh pb-20">
      <Hero />

      <section
        aria-label="About Seohyeon Park"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2"
      >
        <div className="sm:col-span-2">
          <InfoCard
            icon={Heart}
            label="About Me"
            title="Hi, I'm Seohyeon!"
            accent="oklch(0.93 0.05 340)"
          >
            I&apos;m currently enjoying my university life and spending time
            with my classmates and friends. I like going out, trying new
            things, and making fun memories.
          </InfoCard>
        </div>

        <InfoCard
          icon={BookHeart}
          label="Major"
          title="Social Welfare"
          accent="oklch(0.93 0.05 340)"
        >
          I study Social Welfare at university. I learn about people,
          communities, and different ways to help people in their everyday
          lives.
        </InfoCard>

        <InfoCard
          icon={GraduationCap}
          label="University"
          title="Seoul Women's University"
          accent="oklch(0.95 0.04 190)"
        >
          I&apos;m a student at Seoul Women&apos;s University in Seoul, South
          Korea. I spend a lot of time studying and working on school projects
          with my classmates.
        </InfoCard>

        <InfoCard
          icon={MapPin}
          label="From"
          title="South Korea 🇰🇷"
          accent="oklch(0.95 0.04 190)"
        >
          I&apos;m from Ilsan, South Korea. I like the area because it has
          parks, restaurants, and many places to spend time with friends.
        </InfoCard>

        <InfoCard
          icon={Volleyball}
          label="Hobbies"
          title="Watching sports 🏐⚾"
          accent="oklch(0.96 0.06 90)"
        >
          I really enjoy watching sports in my free time, especially baseball
          and volleyball. I like cheering for my favorite teams and watching
          exciting games.
        </InfoCard>

        <InfoCard
          icon={UtensilsCrossed}
          label="Favorite Food"
          title="Tteokbokki 🌶️"
          accent="oklch(0.9 0.09 40)"
        >
          My favorite food is tteokbokki, a popular Korean food made with rice
          cakes and spicy sauce. I love spicy food and trying different kinds of
          tteokbokki.
        </InfoCard>

        <InfoCard
          icon={Sparkles}
          label="Fun Fact"
          title="I love trying new foods! 🍜"
          accent="oklch(0.9 0.09 40)"
        >
          I enjoy trying different foods and finding new favorites. When I go to
          a new restaurant, I like ordering something I&apos;ve never tried
          before.
        </InfoCard>

        <InfoCard
          icon={Music}
          label="Favorite Music"
          title="NewJeans 🎵"
          accent="oklch(0.93 0.05 340)"
        >
          I enjoy listening to K-pop, and I especially like NewJeans. I often
          listen to their songs when I&apos;m studying, relaxing, or spending
          time at home.
        </InfoCard>
      </section>

      <footer className="mx-auto mt-16 max-w-5xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Thanks for stopping by — have a wonderful day! 💛
        </p>
      </footer>
    </main>
  )
}
