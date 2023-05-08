import Header from "@/components/Header"
import FixedBar from "@/components/FixedBar"
import SectionReception from "@/components/SectionReception"
import SectionAbout from "@/components/SectionAbout"
import SectionExperience from "@/components/SectionExperience"

export default function Home() {
  return (
    <>    
    <Header />
    <FixedBar />
    <main>
      <SectionReception />
      <SectionAbout />
      <SectionExperience />
    </main>
    </>
  )
}
