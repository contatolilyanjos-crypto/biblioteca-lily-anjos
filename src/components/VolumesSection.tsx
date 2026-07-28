import { volumes } from "@/data/products";
import VolumeCard from "./VolumeCard";

export default function VolumesSection() {
  return (
    <section id="volumes" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-2xl text-(--color-title) sm:text-3xl">
            Prefere adquirir apenas um volume?
          </h2>
          <p className="mt-3 text-base text-(--color-text) sm:text-lg">
            Escolha o conteúdo que mais atende à sua necessidade atual.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volumes.map((volume) => (
            <VolumeCard key={volume.slug} volume={volume} />
          ))}
        </div>
      </div>
    </section>
  );
}
