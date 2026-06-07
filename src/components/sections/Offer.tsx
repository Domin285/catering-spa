import { useInView } from "../../hooks/useInView";
import offer1 from "../../assets/offer-1.webp";
import offer2 from "../../assets/offer-2.webp";
import offer3 from "../../assets/offer-3.webp";
import { Button } from "../ui/Button";

interface OfferItem {
  title: string;
  description: string;
  image: string;
}

const offers: OfferItem[] = [
  {
    title: "Zestawy imprezowe",
    description: "Idealne na urodziny, komunie i przyjęcia rodzinne.",
    image: offer1,
  },
  {
    title: "Catering firmowy",
    description: "Boxy na spotkania biznesowe, szkolenia i eventy firmowe.",
    image: offer2,
  },
  {
    title: "Słodkie stoły",
    description: "Desery i słodkie bufety na wyjątkowe okazje.",
    image: offer3,
  },
];

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({
    behavior: "smooth",
  });
}

function OfferCard({ offer }: { offer: OfferItem }) {
  return (
    <article className="h-full bg-card border border-border rounded-2xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={offer.image}
        alt={offer.title}
        loading="lazy"
        className="w-full h-44 sm:h-56 lg:h-48 rounded-xl object-cover mb-6 lg:mb-8"
      />

      <h3 className="text-xl lg:text-2xl font-bold mb-4">{offer.title}</h3>

      <p className="mb-6 lg:mb-8 max-w-sm text-sm sm:text-base lg:min-h-[64px]">
        {offer.description}
      </p>

      <div className="mt-auto">
        <Button onClick={scrollToContact}>Zapytaj o ofertę</Button>
      </div>
    </article>
  );
}

export default function Offer() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="offer"
      className="py-14 lg:py-24"
      aria-labelledby="offer-heading"
    >
      <div
        className={`app-container transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="layout-grid mb-10 lg:mb-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
            <p className="uppercase tracking-[0.3em] text-xs lg:text-sm font-semibold mb-3">
              Oferta
            </p>

            <h2 id="offer-heading">Nasza oferta</h2>
          </div>
        </div>

        <div className="layout-grid gap-y-6 lg:gap-y-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-auto"
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
