import Hero from '../components/sections/Hero';
import HomeInfoBar from '../components/home/InfoBar';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import WeatherMapSection from '../components/home/WeatherMapSection';
import GovernmentQuickLinks from '../components/home/GovernmentQuickLinks';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import HistorySection from '../components/home/HistorySection';
import LeadershipSection from '../components/home/LeadershipSection';
import ContactSection from '../components/home/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        description="betterTanza.org — a community transparency portal for the Municipality of Tanza, Cavite. Access government services, officials, budgets, and public information."
        keywords="Tanza, Cavite, Municipality of Tanza, LGU Tanza, government, services, transparency, officials, budget"
      />
      <main>
        <Hero />
        <HomeInfoBar />
        <ServicesSection />
        <StatsSection />
        <WeatherMapSection />
        <GovernmentQuickLinks />
        <GovernmentActivitySection />
        <HistorySection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
