import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTimeTable } from "src/lib/time-table/actions";

import TimeTableViewer from "@/components/custom/time-table/viewer";

interface Props {
  params: {
    slug: string[];
  };
}

export default async function Dashboard({ params }: Props) {
  const [department_code, year, semester] = params.slug;

  const timetableData = await getTimeTable(
    department_code,
    Number(year),
    Number(semester)
  );
  if (!timetableData) return notFound();

  return (
    <>
      <div className="flex items-center justify-between gap-2 mx-auto max-w-7xl w-full mt-20">
        <Button variant="default_light" size="sm" asChild>
          <Link href={`/schedules`}>
            <ArrowLeft />
            Go Back
          </Link>
        </Button>
      </div>

      <TimeTableViewer timetableData={timetableData} />
    </>
  );
}
