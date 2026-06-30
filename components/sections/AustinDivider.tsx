import Image from "next/image";

export function AustinDivider() {
  return (
    <section className="relative h-[260px] sm:h-[340px] overflow-hidden">
      <Image
        src="/images/hero/austin-divider.jpg"
        alt="Austin skyline along Lady Bird Lake"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <p className="font-display text-2xl font-semibold text-parchment sm:text-3xl">
          Proudly Edo. Proudly Austin.
        </p>
      </div>
    </section>
  );
}