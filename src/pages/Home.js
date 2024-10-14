import HeroHome from "../components/modules/home/hero.home"
import LandingNav from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"
import BlogSection from "../components/modules/home/home.BlogSection"
import InsightsSection from "../components/modules/home/home.Insights"
import FAQSection from "../components/modules/home/home.FAQSection"
export const Home = ()=>{
    return <main>
        <LandingNav/>
        <HeroHome/>
        <InsightsSection />
      <BlogSection />
      <FAQSection />
        <Footer/>
    </main>
}