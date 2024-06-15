// 'use client'
import HowItWorks from "../components/HoWItWorks/HowItWorks"
import { getHowItWorks } from "@/lib/howItWorks"


const About = async({params:lang}) => {
    const howItWorks = await getHowItWorks(lang)
    return(
        <main>
            <HowItWorks howItWorks={howItWorks} lang={lang}/>
        </main>
    )
}

export default About