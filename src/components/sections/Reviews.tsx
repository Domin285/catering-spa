import { User } from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface Review {
  name: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Anna Kowalska",
    text: "Świetny catering, wszystko było pyszne i pięknie podane!",
    rating: 5,
  },
  {
    name: "Jakub Nowak",
    text: "Profesjonalna obsługa i szybki kontakt.",
    rating: 5,
  },
  {
    name: "Firma XYZ",
    text: "Idealne rozwiązanie na event firmowy.",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex justify-center gap-1 text-primary text-lg"
      role="img"
      aria-label={`Ocena ${rating} na 5`}
    >
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="
        mx-auto
        -mt-16
        mb-6
        flex
        h-28
        w-28
        items-center
        justify-center
        rounded-full
        bg-white
        shadow-lg
        text-dark/20
        lg:h-32
        lg:w-32
      "
    >
      <User size={56} strokeWidth={1.5} />
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="reviews"
      className="bg-light py-16 lg:py-24"
      aria-labelledby="reviews-heading"
    >
      <div
        className={`app-container transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="layout-grid mb-16">
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
            <p className="section-eyebrow">OPINIE</p>

            <h2 id="reviews-heading" className="mt-4 text-4xl lg:text-6xl">
              Co mówią nasi klienci?
            </h2>
          </div>
        </div>

        <div className="layout-grid gap-y-20">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="
                col-span-4
                rounded-3xl
                border
                border-border
                bg-card
                p-8
                text-center
                shadow-lg
                md:col-span-6
                md:col-start-2
                lg:col-span-4
                lg:col-start-auto
              "
            >
              <Avatar />

              <h3 className="mb-3 text-2xl font-bold">{review.name}</h3>

              <Stars rating={review.rating} />

              <p className="mx-auto mt-5 max-w-xs text-dark/80 leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
