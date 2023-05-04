import Header from "@/components/Header"
import FixedBar from "@/components/FixedBar"
import SectionAbout from "@/components/SectionAbout"
import SectionReception from "@/components/SectionReception"

export default function Home() {
  return (
    <>    
    <Header />
    <FixedBar />
    <main>
      <SectionReception />
      <SectionAbout />
    </main>
    </>
  )
}
