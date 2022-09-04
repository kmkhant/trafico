// import components
import Slider from './Slider';

// import motion
import { motion } from 'framer-motion';

// import variants
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerTextContainer,
} from '../variants';

const Testimonials = ({ testimonialData }) => {
  // destructure testimonial data
  const { pretitle, title, clients } = testimonialData;
  return (
    <section className='relative min-h-[600px]'>
      <div className='container mx-auto'>
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          className='flex flex-col gap-y-[40px]'
        >
          {/* text */}
          <motion.div variants={fadeInUp}>
            {/* pretitle */}
            <h3 className='h3 mb-10'>{pretitle}</h3>
            <div className='w-[40%]'>
              <h2 className='h2'>{title}</h2>
            </div>
          </motion.div>
          {/* slider */}
          <motion.div variants={fadeInUp} className='w-[60%] absolute right-0'>
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;