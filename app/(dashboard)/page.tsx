import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

const quick_links = [
  {
    href: "/results",
    title: "Results",
    description: "Check your results here."
  },
  {
    href: "/syllabus",
    title: "Syllabus",
    description: "Check your syllabus here."
  },
  {
    href: "/classroom-availability",
    title: "Classroom Availability",
    description: "Check the availability of classrooms here."
  },
  {
    href: "/schedules",
    title: "Schedules",
    description: "Check your schedules here."
  }
]

export default async function Dashboard() {
  const session = await getSession() as sessionType;

  return (
    <>
      <section id="hero" className="z-10 w-full max-w-6xl relative flex flex-col items-center justify-center  py-24 max-h-80 text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap" data-aos="fade-up">
          Welcome back, <span className="text-primary">{session.user.firstName}</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
        </p>
      </section>
      <section id="quick-links" className="z-10 w-full max-w-6xl relative space-y-4 text-left">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100" data-aos="fade-right">
          Quick Links
        </h2>

        <div className="mb-32 grid  lg:mb-0 lg:w-full mx-auto @5xl:max-w-6xl grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-4 text-left gap-4">
          {quick_links.map((link, index) => <RouterCard key={index} {...link} />)}
        </div>
      </section>

    </>
  );
}

interface RouterCardProps {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}

function RouterCard({ href, title, description, external = false }: RouterCardProps) {
  return (<Link
    href={href}
    className="group rounded-lg  border border-gray-50/50 px-5 py-4 transition-colors backdrop-blur-2xl hover:bg-white/10 hover:shadow hover:border-primary/5"
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : undefined}
  >
    <h2 className="mb-3 text-xl font-semibold whitespace-nowrap">
      {title}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        {external ? <ArrowUpRight className="w-4 h-4 ml-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">
      {description}
    </p>
  </Link>)
}