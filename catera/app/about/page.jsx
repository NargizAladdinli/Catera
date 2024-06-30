import AboutUs from "../components/AboutUs/AboutUs"
import GetInTouch from "../components/GetInTouch/GetInTouch"
import HowItWorks from "../components/HoWItWorks/HowItWorks"
import { getHowItWorks } from "@/lib/howItWorks"


const About = async({params:lang}) => {
    const howItWorks = await getHowItWorks(lang)
    return(
        <main>
            <AboutUs/>
            <HowItWorks howItWorks={howItWorks} lang={lang}/>
            <GetInTouch/>
        </main>
    )
}

export default About