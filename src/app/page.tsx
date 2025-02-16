import HomeDesktop from '@/components/display/Desktop/Home/HomeDesktop';
import Home from '@/components/Home/Home';
import ProjectsHome from '@/components/Home/ProjectsHome';
import SobreNos from '@/components/Home/SobreNos';

export default function PageHome() {
  return (
    <main>
      <Home />
      <HomeDesktop />
      <ProjectsHome />
      <SobreNos />
    </main>
  );
}
