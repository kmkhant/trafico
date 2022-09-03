import Image from 'next/image';

// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

// import data
import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
} from '../data.json';

const Home = ({
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
}) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Footer />
      <div className='h-[3000px]'></div>
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
    },
  };
};

export default Home;
