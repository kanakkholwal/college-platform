import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart } from '@tremor/react';
import { Mail, Undo2 } from 'lucide-react';
import Link from "next/link";
import { notFound } from "next/navigation";
import dbConnect from "src/lib/dbConnect";
import ResultModel, { Semester } from "src/models/result";
import { CgpiCard, RankCard, SemCard } from "./components/card";

export default async function ResultsPage({ params }: { params: { rollNo: string } }) {
    await dbConnect();
    const result = await ResultModel.findOne({
        rollNo: params.rollNo
    }).exec();
    if (!result) {
        return notFound()
    }


    const chartData = result.semesters.map((semester: Semester) => {
        return {
            semester: `Semester ${semester.semester}`,
            sgpi: semester.sgpi.toFixed(2),
            cgpi: semester.cgpi.toFixed(2),
            'Sgpi': semester.sgpi.toFixed(2),
            'Cgpi': semester.cgpi.toFixed(2),
        }
    })

    return (<>
        <section id="hero" className="z-10 w-full max-w-6xl relative flex flex-col items-center justify-center  py-24 max-h-80 text-center">
            <Link href="/results" className="relative flex h-12 w-full items-center justify-center py-4 mr-auto px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                <span className="relative text-base font-semibold text-primary dark:text-white flex items-center gap-2">
                    <Undo2 className="w-5 h-5" />
                    Go Back
                </span>
            </Link>
            <div className="lg:w-3/4 text-center mx-auto mt-10">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                    <span className="relative bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent  md:px-2">
                        {result.name}
                    </span>
                </h1>
                <h5 className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-300 text-center mx-auto uppercase">
                    {result.rollNo}
                    <Link href={`mailto:${result.rollNo}@nith.ac.in`} className="inline-block text-primary hover:text-primaryLight ease-in duration-300 align-middle ml-2 -mt-1" title={"Contact via mail"}>
                        <Mail className="w-5 h-5" />
                    </Link>
                </h5>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                    <div className="w-full flex flex-wrap items-center gap-4 text-sm mx-auto justify-center">
                        <span className={"bg-primary/10 text-primary py-1.5 px-3 rounded-md"}>
                            {getYear(result.semesters)}
                        </span>
                        <span className={"bg-primary/10 text-primary py-1.5 px-3 rounded-md"}>
                            {result.branch}
                        </span>
                        <span className={"bg-primary/10 text-primary py-1.5 px-3 rounded-md"}>
                            {result.programme}
                        </span>

                    </div>

                </div>

            </div>
        </section>
        <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <RankCard result={result} />
            <CgpiCard result={result} />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mx-auto mt-24 mb-10">
                Semester Wise Results
            </h2>


            <Tabs defaultValue="table">
                <div className="flex items-center w-full mb-5">

                    <TabsList className="mx-auto">
                        <TabsTrigger value="table">Tabular View</TabsTrigger>
                        <TabsTrigger value="graph">Graphical View</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="table">
                    <div className="max-w-7xl w-full xl:px-6 grid gap-4 grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3">
                        {result.semesters?.map((semester: Semester, index: number) => {
                            return <SemCard key={index} semester={semester} />
                        })}
                    </div>
                </TabsContent>
                <TabsContent value="graph">
                    <div className="max-w-6xl mx-auto my-5 w-full p-4 rounded-xl bg-white/50">
                        <LineChart
                            className="w-full aspect-video relative z-10"
                            yAxisWidth={65}
                            categories={['Sgpi', 'Cgpi']}
                            colors={['indigo', 'cyan']}
                            data={chartData}
                            title="CGPI Progress"
                            index="semester"
                        />
                    </div>
                </TabsContent>
            </Tabs>


        </div>
    </>)
}

function getYear(semesters: any[]): string | null {

    if (semesters.length === 1 || semesters.length === 2) return "First Year"
    else if (semesters.length === 3 || semesters.length === 4) return "Second Year"
    else if (semesters.length === 5 || semesters.length === 6) return "Third Year"
    else if (semesters.length === 7 || semesters.length === 8) return "Final Year"
    else if (semesters.length === 9 || semesters.length === 10) return "Super Final Year"
    else
        return null

}