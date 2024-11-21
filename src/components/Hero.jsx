// import {HERO_CONTENT} from "../constants";
// import profilePic from "../assets/pradyunnChauhaanProfile.png";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.5, delay: delay },
//     },
// });

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                     variants={container(0)}
//                     initial="hidden"
//                     animate="visible"
//                     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Pradyunn Chauhaan</motion.h1>
//                     <motion.span
//                     variants={container(0.5)}
//                     initial="hidden"
//                     animate="visible"
//                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">DevOps | Full Stack Developer</motion.span>
//                     <motion.p 
//                     variants={container(1)}
//                     initial="hidden"
//                     animate="visible"
//                     className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
//                 </div>
//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex justify-center">
//                 <motion.div
//   initial={{ scale: 0.8, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   transition={{ duration: 1, delay: 1 }}
//   className="relative flex items-center justify-center"
// >
//   {/* Animated Glowing Border */}
//   <div
//     className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 blur-md animate-gradient"
//     style={{ backgroundSize: "400%" }}
//   />

//   {/* Profile Image */}
//   <img
//     src={profilePic}
//     alt="Pradyunn Chauhaan"
//     className="relative rounded-full border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300"
//   />
// </motion.div>




//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Hero



import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/pradyunnChauhaanProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Pradyunn Chauhaan</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Cloud | DevOps | Full Stack Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
  className="relative flex items-center justify-center"
>
  {/* Animated Glowing Border */}
  <div
    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 blur-lg animate-gradient"
    style={{ backgroundSize: "400%" }}
  />

  {/* Profile Image with Glow Animation */}
  <img
    src={profilePic}
    alt="Pradyunn Chauhaan"
    className="relative rounded-full border-4 border-white shadow-lg animate-glow transition-all duration-300"
  />
</motion.div>



                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero