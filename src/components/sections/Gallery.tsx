import { useInView } from "../../hooks/useInView";
import gallery1 from "../../assets/gallery-1.webp";
import gallery2 from "../../assets/gallery-2.webp";
import gallery3 from "../../assets/gallery-3.webp";
import { Button } from "../ui/Button";

interface GalleryItem {
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Przyjęcie rodzinne",
    image: gallery1,
  },
  {
    title: "Event firmowy",
    image: gallery2,
  },
  {
    title: "Słodki stół",
    image: gallery3,
  },
];

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({
    behavior: "smooth",
  });
}

function GalleryCard({
  item,
  featured = false,
}: {
  item: GalleryItem;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl shadow-xl ${
        featured ? "h-[420px] lg:h-[620px]" : "h-[300px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
          group-hover:brightness-90
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute left-6 right-6 bottom-6 text-white">
        <h3 className="text-2xl font-bold">{item.title}</h3>
      </div>
    </article>
  );
}

export default function Gallery() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="gallery"
      className="bg-card py-16 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div
        className={`app-container transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="layout-grid mb-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Realizacje
            </p>

            <h2 id="gallery-heading">Nasze realizacje</h2>
          </div>
        </div>

        <div className="layout-grid gap-y-6">
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <GalleryCard item={galleryItems[0]} featured />
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col gap-6">
            <GalleryCard item={galleryItems[1]} />
            <GalleryCard item={galleryItems[2]} />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button onClick={scrollToContact}>Zamów podobną realizację</Button>
        </div>
      </div>
    </section>
  );
}
