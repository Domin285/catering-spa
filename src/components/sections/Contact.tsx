import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "../../hooks/useInView";
import { Button } from "../ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  email: z.string().email("Podaj poprawny adres email"),
  phone: z.string().min(9, "Telefon musi mieć minimum 9 cyfr"),
  eventType: z.string().min(1, "Wybierz typ wydarzenia"),
  message: z.string().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { ref, inView } = useInView();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Formularz:", data);
    reset();
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-cream px-4 py-3 outline-none focus:border-primary transition-colors";

  const errorClass = "text-primary text-sm mt-2 font-semibold";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="py-16 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div
        className={`app-container transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="layout-grid gap-y-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Kontakt
            </p>

            <h2 id="contact-heading" className="mb-6">
              Zapytaj o wycenę cateringu
            </h2>

            <p className="text-lg max-w-xl">
              Wypełnij formularz, a przygotujemy propozycję dopasowaną do
              Twojego wydarzenia, liczby gości i preferencji menu.
            </p>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-md">
              {isSubmitSuccessful ? (
                <div role="status" className="text-center py-12">
                  <p className="text-3xl font-bold mb-4">Dziękujemy!</p>

                  <p className="mb-8">Formularz został poprawnie wysłany.</p>

                  <Button onClick={() => reset()}>
                    Wyślij kolejne zapytanie
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-5"
                >
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={inputClass}
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p role="alert" className={errorClass}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p role="alert" className={errorClass}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p role="alert" className={errorClass}>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="eventType"
                      className="block font-semibold mb-2"
                    >
                      Typ wydarzenia
                    </label>
                    <select
                      id="eventType"
                      className={inputClass}
                      aria-invalid={!!errors.eventType}
                      {...register("eventType")}
                    >
                      <option value="">Wybierz</option>
                      <option value="urodziny">Urodziny</option>
                      <option value="firma">Event firmowy</option>
                      <option value="wesele">Wesele</option>
                      <option value="komunia">Komunia</option>
                      <option value="inne">Inne</option>
                    </select>
                    {errors.eventType && (
                      <p role="alert" className={errorClass}>
                        {errors.eventType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-2"
                    >
                      Wiadomość (opcjonalnie)
                    </label>
                    <textarea
                      id="message"
                      className={`${inputClass} h-40 resize-none`}
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p role="alert" className={errorClass}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
