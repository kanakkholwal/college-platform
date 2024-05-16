import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";


export default async function Dashboard() {
    const session = await getSession() as sessionType;

    return (<>
    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap" data-aos="fade-up">
        Welcome back, <span className="text-primary">{session.user.firstName}</span>
    </h2>


    </>)

}