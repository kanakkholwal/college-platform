import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { DEPARTMENTS_LIST } from "src/constants/departments";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

export default async function Dashboard() {
    const session = await getSession() as sessionType;

    return (
        <>
            {/* <section id="hero" className="z-10 w-full max-w-6xl relative flex flex-col items-center justify-center  py-24 max-h-80 text-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap" data-aos="fade-up">
                    Welcome back, <span className="text-primary">{session.user.firstName}</span>
                </h2>
                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                </p>
            </section> */}

            <Tabs defaultValue="departments" className="w-full">
                <TabsList className="w-full h-14 px-2">
                    <TabsTrigger value="departments" className="text-md w-full">Departments</TabsTrigger>
                    <TabsTrigger value="technology" className="text-md w-full">Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="departments">
                    {DEPARTMENTS_LIST.map((dept, index) => {
                        return <Link href={`/community/department/${dept.code}`} key={`dept_${index}`} className="block w-full p-4 border-b">
                            {dept.name}
                        </Link>
                    })}
                </TabsContent>
                <TabsContent value="technology">
                    <Link href="/community/technology" className="block w-full p-4 border-b">
                        Technology
                    </Link>
                </TabsContent>
            </Tabs>

        </>
    );
}
