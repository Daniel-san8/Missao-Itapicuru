import Footer from '@/components/common/Footer/Footer';
import Home from '@/components/Home/Home';
import ProjectsHome from '@/components/Home/ProjectsHome';
import SobreNos from '@/components/Home/SobreNos';

export default function PageHome() {
  return (
    <>
      <main>
        <Home />
        <ProjectsHome />
        <SobreNos />
      </main>
      <Footer />
    </>
  );
}
