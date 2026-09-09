import Hero from '../components/sections/Hero';
import InfoBar from '../components/home/InfoBar';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import GovernmentQuickLinks from '../components/home/GovernmentQuickLinks';
import HistorySection from '../components/home/HistorySection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Official website of the Municipality of Tanza, Cavite. Access government services, news, and information for residents and visitors."
        keywords="Tanza, Cavite, Municipality of Tanza, LGU Tanza, government services"
      />
      <main>
        <Hero />
        <InfoBar />
        <ServicesSection />
        <StatsSection />
        <GovernmentQuickLinks />
        <HistorySection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
