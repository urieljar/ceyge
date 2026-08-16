import { Header } from '../components/Header/Header'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { BenefitsSection } from '../components/BenefitsSection/BenefitsSection'
import { AboutSection } from '../components/AboutSection/AboutSection'
import { AudienceSection } from '../components/AudienceSection/AudienceSection'
import { ProcessSection } from '../components/ProcessSection/ProcessSection'
import { ProgramSection } from '../components/ProgramSection/ProgramSection'
import { InstitutionSection } from '../components/InstitutionSection/InstitutionSection'
import { TestimonialsSection } from '../components/TestimonialsSection/TestimonialsSection'
import { FAQSection } from '../components/FAQSection/FAQSection'
import { LocationSection } from '../components/LocationSection/LocationSection'
import { FinalCTA } from '../components/FinalCTA/FinalCTA'
import { Footer } from '../components/Footer/Footer'

export function Home() {
  return <>
  <Header />
  <main>
    <HeroSection />
    <BenefitsSection />
    <AboutSection />
    <AudienceSection />
    <ProcessSection />
    <ProgramSection />
    <InstitutionSection />
    <TestimonialsSection />
    <FAQSection />
    <LocationSection />
    <FinalCTA />
    </main>
    <Footer />
    </>
}

