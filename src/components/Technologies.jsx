import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { motion } from "framer-motion";



const AwsIcon = () => (
    <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS Logo" width="75" height="30" />
  );

  const AzureIcon = () => (
    <img src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" alt="Azure Logo" width="75" height="30" />
  );

  const GCPIcon = () => (
    <img src="https://img.icons8.com/?size=100&id=fpGM2cINbbu4&format=png&color=000000" alt="GCP Logo" width="75" height="30" />
  );

  const VMwareIcon = () => (
    <img src="https://img.icons8.com/?size=100&id=38687&format=png&color=000000" alt="VMware Logo" width="75" height="30" />
  );


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies & Services</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <AzureIcon className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <AwsIcon className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GCPIcon className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <VMwareIcon className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700" />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies