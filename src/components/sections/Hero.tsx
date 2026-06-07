import heroImage from "../../assets/hero.webp";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] lg:min-h-[720px] flex items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Catering"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        loading="eager"
      />

      <div className="absolute inset-0 bg-cream/68" />

      <div className="app-container relative z-10 py-12">
        <div className="layout-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
            <h1 className="font-display italic mb-5 lg:mb-8">
              Catering na każdą okazję
            </h1>

            <p className="max-w-3xl mx-auto text-base lg:text-xl font-semibold mb-8 lg:mb-10">
              Przygotowujemy zestawy imprezowe, catering firmowy, słodkie stoły
              i obsługę większych wydarzeń.
            </p>

            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Poproś o wycenę
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
