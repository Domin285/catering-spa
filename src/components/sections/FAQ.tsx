import { useState } from "react";
import { ChevronRight, Plus } from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Ile dni wcześniej należy złożyć zamówienie?",
    answer:
      "Najlepiej skontaktować się z nami minimum 3–5 dni przed wydarzeniem. Przy większych realizacjach, takich jak wesela, komunie lub eventy firmowe, zalecamy rezerwację z większym wyprzedzeniem.",
  },
  {
    question: "Czy dostarczacie catering na miejsce?",
    answer:
      "Tak, oferujemy dostawę cateringu pod wskazany adres. Koszt dowozu zależy od lokalizacji oraz wielkości zamówienia i jest ustalany indywidualnie podczas wyceny.",
  },
  {
    question: "Czy można dopasować menu do gości?",
    answer:
      "Tak, przygotowujemy menu dopasowane do charakteru wydarzenia oraz preferencji gości. Możemy uwzględnić dania wegetariańskie, bez laktozy lub inne potrzeby po wcześniejszym ustaleniu.",
  },
  {
    question: "Jaka jest minimalna liczba osób?",
    answer:
      "Minimalna liczba osób zależy od rodzaju cateringu. Przy mniejszych zamówieniach przygotowujemy indywidualną wycenę, dlatego najlepiej wysłać zapytanie przez formularz kontaktowy.",
  },
];

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between gap-5 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-5">
          <Plus
            size={16}
            className={`shrink-0 transition-transform duration-300 ${
              open ? "rotate-45 text-primary" : ""
            }`}
          />

          <span className="text-base lg:text-lg font-medium">
            {item.question}
          </span>
        </span>

        <ChevronRight
          size={20}
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-90 text-primary" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pl-10 max-w-3xl text-dark/75">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="faq"
      className="bg-card py-14 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div
        className={`app-container transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="layout-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
            <div className="text-center mb-8 lg:mb-12">
              <h2 id="faq-heading">FAQ</h2>
            </div>

            <div>
              {faqItems.map((item) => (
                <FAQRow key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
