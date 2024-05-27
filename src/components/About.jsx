import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          &nbsp;&nbsp;&nbsp; My full name is Hasna Rahma Bedla, and I am a passionate Full Stack Developer with dual Master’s degrees one in Computer Science Engineering from ESI in Algiers and another one in Business Intelligence from the University of Lorraine in France. I have gained valuable experience through roles in companies such as LIST, ATM Mobilis, Rgrid, and CDTA in Luxembourg, France and Algeria. <br className="sm:block hidden" />
          &nbsp;&nbsp;&nbsp; I am capable of creating complete applications from scratch to deployment, with solid skills in both Front-end and Back-end development. I am proficient in a variety of languages and technologies, including JavaScript, React.js, Node.js/Express.js, Java,C# and deployment techniques such as CI/CD with Docker and Kubernetes. I have worked with different database management systems such as MongoDB, PostgreSQL, MonetDB, Oracle, SQL Server, and MySQL. <br className="sm:block hidden" />
          &nbsp;&nbsp;&nbsp; Thanks to my expertise in listening to customers' needs, designing interactive user interfaces, implementing complex functionalities, database management, application deployment, and performance optimization, I am able to solve technical problems efficiently and deliver high-quality solutions that satisfy users.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
