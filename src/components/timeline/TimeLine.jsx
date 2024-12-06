import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "Founded",
    description: "Our journey began.",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    year: "2017",
    title: "First Milestone",
    description: "Reached 1M users.",
    image: "/assets/2017.jpg",
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Opened offices globally.",
    image: "/assets/2020.jpg",
  },
];

function Timeline() {
  return (
    <div className='flex flex-col items-center  px-6 py-12 '>
      <h2 className='text-3xl font-bold text-gray-800 mb-8'>Our Journey</h2>
      <div className='flex flex-col md:flex-row md:gap-8 gap-4 w-full max-w-4xl'>
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 transition-transform'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className='text-xl font-semibold text-blue-500 mb-2'>
              {milestone.year}
            </span>
            <motion.img
              src={milestone.image}
              alt={milestone.title}
              className='w-40 h-40 object-cover rounded-md mb-4'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
              {milestone.title}
            </h3>
            <p className='text-gray-600'>{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
