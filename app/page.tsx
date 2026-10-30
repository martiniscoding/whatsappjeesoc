
import Image from "next/image";


import JoinButton from "@/components/JoinButton";
import logo from "@/public/logo.jpeg";


const WA_LINK = "https://chat.whatsapp.com/HIKB1JmnfjJCkaDbZlGHRm";


const YOUTUBE_LINK = "https://www.youtube.com/@SreyashBhaiyaIITB";


const offers = [
  {
title: "Live Webinars by IITians",
chip: "Live webinars by IITians",
copy: "Real IIT students and JEE toppers break down strategy, the mistakes that cost ranks, and revision plans that hold. Live Q&A every month.",
icon: (
<>
<rect x="2.5" y="4.5" width="19" height="13" rx="2.5" />
<path d="M8 21h8M12 17.5V21" />
<path d="m10.5 9.2 4 1.8-4 1.8z" />
</>
    ),
  },
  {
title: "Premium JEE Study Material",
chip: "Premium study material",
copy: "Handwritten notes, formula sheets, PYQ sets and short notes for Physics, Chemistry and Maths — delivered free in the group.",
icon: (
<>
<path d="M4 4.5h6a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h6v13h-6a2.5 2.5 0 0 0-2 1 2.5 2.5 0 0 0-2-1H4z" />
<path d="M12 5.5v13" />
<path d="M6.5 8.5h3M6.5 11.5h3M14.5 8.5h3M14.5 11.5h3" />
</>
    ),
  },
];


export default function Home() {
return (
<main className="flex-1">
<section className="relative isolate overflow-hidden px-5 pt-16 pb-20 sm:pt-24 sm:pb-24">
<div aria-hidden className="absolute inset-0 -z-10 hero-bloom" />
<div aria-hidden className="absolute inset-0 -z-10 paper-grid" />
<div
aria-hidden
className="pointer-events-none absolute inset-0 -z-10 grain opacity-[0.025] mix-blend-multiply"
/>


<div className="mx-auto flex max-w-3xl flex-col items-center text-center">
<div className="rise relative aspect-[40/7] w-[244px] overflow-hidden rounded-xl border border-gold/35 shadow-[0_14px_32px_-18px_rgba(123,20,23,0.5)] sm:w-[288px]">
<Image
src={logo}
alt="JEESociety"
fill
priority
sizes="288px"
className="object-cover object-[50%_47%]"
/>
</div>


<p className="rise mt-7 inline-flex items-center rounded-full border border-gold/45 bg-gold/[0.12] px-4 py-1.5 text-[13px] font-medium text-muted backdrop-blur-sm"
style={{ animationDelay: "0.08s" }}
>
            100% Free · For JEE 2027 &amp; 2028 Aspirants
</p>


<h1
className="rise mt-7 max-w-[850px] text-[clamp(2.4rem,8.5vw,4.5rem)] leading-[1.04] font-bold tracking-[-0.04em] text-balance"
style={{ animationDelay: "0.16s" }}
>
            Join{" "}
<span className="marker-ink relative inline-block whitespace-nowrap">
{/* Two uneven passes of a highlighter, the way a marked-up
                  formula sheet actually looks. */}
<svg
aria-hidden="true"
viewBox="0 0 200 48"
preserveAspectRatio="none"
fill="none"
stroke="currentColor"
strokeLinecap="round"
className="absolute top-[26%] -left-[4%] -z-10 h-[68%] w-[108%] -rotate-[1.2deg] text-gold"
>
<path
className="marker-pass"
pathLength="1"
d="M8 25c54-8 134 5 186-5"
strokeWidth="32"
opacity="0.45"
/>
<path
className="marker-pass marker-pass-2"
pathLength="1"
d="M13 36c58-6 122 4 176-3"
strokeWidth="11"
opacity="0.3"
/>
</svg>
              Free
</span>{" "}
<span className="text-red-500">IITian's</span>
<br />
Community for JEE Preparation
</h1>


<p
className="rise mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg"
style={{ animationDelay: "0.24s" }}
>
            Live webinars by IITians and premium study material — no fees, ever.
</p>


<ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
{offers.map((offer, i) => (
<li
key={offer.title}
className="rise flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/[0.12] py-1.5 pr-4 pl-1.5 text-sm font-medium shadow-[0_8px_20px_-12px_rgba(123,20,23,0.4)]"
style={{ animationDelay: `${0.32 + i * 0.09}s` }}
>
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/25 text-gold-deep">
<svg
aria-hidden="true"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.6"
strokeLinecap="round"
strokeLinejoin="round"
className="h-4 w-4"
>
{offer.icon}
</svg>
</span>
{offer.chip}
</li>
            ))}
</ul>


<div
className="rise mt-10 w-full sm:w-auto"
style={{ animationDelay: "0.52s" }}
>
<JoinButton href={WA_LINK} shine />
</div>


<p
className="rise mt-5 text-[13px] text-muted"
style={{ animationDelay: "0.6s" }}
>
            Already 10,000+ aspirants inside · Free forever
</p>
</div>
</section>


<section
aria-labelledby="offers-heading"
className="border-t border-ink/10 px-5 pt-14 pb-20 sm:pt-20 sm:pb-28"
>
<div className="mx-auto max-w-5xl">
<h2
id="offers-heading"
className="text-center text-[clamp(1.6rem,4.5vw,2.25rem)] font-bold tracking-[-0.03em]"
>
            What you get inside the group
</h2>


<div className="mt-12 grid gap-6 md:grid-cols-2">
{offers.map((offer) => (
<article
key={offer.title}
className="rounded-[1.1rem] bg-gradient-to-b from-gold/60 to-ink/[0.08] p-px transition duration-300 hover:from-gold hover:to-crimson/35"
>
<div className="flex h-full flex-col rounded-2xl bg-surface bg-[radial-gradient(120%_100%_at_50%_0%,rgba(232,160,33,0.1),transparent_62%)] p-7 shadow-[0_14px_36px_-26px_rgba(27,12,13,0.5)] sm:p-9">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-surface-2 text-gold-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
<svg
aria-hidden="true"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
className="h-7 w-7"
>
{offer.icon}
</svg>
</span>
<span className="rounded-full border border-gold/45 bg-gold/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gold-deep">
                      FREE
</span>
</div>


<h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] sm:text-[1.375rem]">
{offer.title}
</h3>
<p className="mt-3 text-[15px] leading-relaxed text-muted">
{offer.copy}
</p>
</div>
</article>
            ))}
</div>


<div className="mt-14 flex flex-col items-center">
<JoinButton href={WA_LINK} />
</div>
</div>
</section>


<footer className="border-t border-ink/10 px-5 py-8">
<p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-muted">
<span>JEESociety · Made for JEE aspirants</span>
<span aria-hidden className="text-ink/25">
            ·
</span>
<a
href={YOUTUBE_LINK}
target="_blank"
rel="noopener noreferrer"
className="rounded text-text underline decoration-gold-deep/40 underline-offset-4 transition hover:decoration-gold-deep"
>
            @SreyashBhaiyaIITB on YouTube
</a>
</p>
</footer>
</main>
  );
}
