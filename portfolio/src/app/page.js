import Header from "@/components/Header";
import FixedBar from "@/components/FixedBar";
import SectionReception from "@/components/SectionReception";
import SectionAbout from "@/components/SectionAbout";
import SectionExperience from "@/components/SectionExperience";
import SectionProject from "@/components/SectionProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>    
      <Header />
      <FixedBar />
      <main className="w-100 px-md-5 px-3">
        <SectionReception />
        <SectionAbout />
        <SectionExperience />
        <SectionProject />
      </main>
      <Footer />
    </>
  )
}
