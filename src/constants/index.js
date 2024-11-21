import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a skilled Cloud and DevOps professional with a passion for leveraging AI and automation to optimize workflows and build scalable solutions. With expertise in designing and managing CI/CD pipelines, deploying cloud-native architectures, and implementing efficient infrastructure as code, I ensure seamless operations and robust system reliability. Additionally, as a full-stack developer, I create innovative applications using front-end tools like React and Next.js, combined with back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My mission is to harness cutting-edge technologies to drive business growth and transform user experiences.`;

export const ABOUT_TEXT = `I am currently working as a DevOps Engineer in Bengaluru, specializing in Cloud and DevOps with a strong focus on AI and automation. My passion lies in optimizing workflows and crafting scalable, efficient solutions. I have expertise in designing CI/CD pipelines, deploying cloud-native architectures, and implementing infrastructure as code to ensure reliable and seamless system performance. As a full-stack developer, I bring ideas to life by building innovative applications using React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Outside of work, I enjoy traveling to new destinations and spending quality time with my pet, Oshi, making every moment an adventure.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - Present",
    role: "DevOps Engineer",
    company: "Unisys",
    description: `Accomplished cloud automation and DevOps professional with a proven track record of designing and implementing multi-cloud frameworks across AWS, Azure, and GCP. Expertise in Infrastructure as Code (IaC), containerized microservices, CI/CD pipelines, real-time data processing, and observability solutions. Demonstrated success in reducing manual tasks by 70%, cutting deployment times by 50%, and achieving cost savings of over $150,000+ annually. Adept at integrating ITSM tools, ensuring compliance with industry standards, and enabling 99.99% system availability with robust automation and monitoring.`,
    technologies: ["Cloud Platforms", "DevOps", "CI/CD", "IaC", "Automation", "Containerization", "Messaging", "ITSM", "APIs", "Databases", "Data Engineering", "Monitoring", "Security", "Compliance", "Design Docs", "Agile"]
    ,
  },
  {
    year: "Jan 2023 - July 2023",
    role: "Full Stack Developer Intern",
    company: "Unisys",
    description: `Worked as a Full Stack Developer Intern, gaining hands-on experience in building and maintaining web applications using modern front-end and back-end technologies. Developed responsive user interfaces with JavaScript, React, HTML, and CSS, and built scalable APIs using Node.js and Express. Managed databases with both SQL and NoSQL solutions. Collaborated with cross-functional teams to optimize application performance, streamline workflows, and deliver high-quality features. Followed industry best practices for version control, code optimization, and agile development, ensuring timely delivery of projects with a strong focus on user experience and efficiency.`,
    technologies: ["JavaScript", "React", "Node.js", "Express", "SQL", "MongoDB", "Git", "RESTful APIs", "AWS", "EC2", "S3", "Docker", "CI/CD", "Agile", "HTML", "CSS", "Version Control"]
    ,
  },
   
];

export const PROJECTS = [
  {
    title: "Full-Stack Food Ordering and Delivery App",
    image: project1,
    description:
      "The Full-Stack Food Ordering and Delivery App is a modern platform that streamlines the online food ordering experience for users and provides robust management tools for admins. Users can create accounts, browse food items, add them to their cart, make secure payments through Stripe, and track their orders in real-time. Admins can manage food items, orders, and user data through an intuitive dashboard. Built with React.js, Node.js, Express.js, and MongoDB, this app offers a seamless and scalable solution for food businesses to manage their operations and enhance customer satisfaction.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API","TailwindCSS","JWT","RESTful API"],
  },
  {
    title: "Book Your Appointment App",
    image: project2,
    description:
      "The Full-Stack Appointment Booking System is a versatile platform designed for doctors or hospitals to streamline appointment scheduling and management. It offers three levels of authentication: Patients can log in, book appointments, and manage their bookings; Doctors can access their dashboards to view appointments, track earnings, and update profiles; and Admins can oversee appointments and manage doctor profiles through an intuitive admin panel. The system also integrates online payment gateways, enabling users to pay appointment fees securely.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
  },
  {
    title: "Chat Messaging App",
    image: project3,
    description:
      "The Full-Stack Realtime Chat Messaging App is a modern communication platform that allows users to send and receive messages instantly with real-time updates. It features secure authentication and authorization using JWT, dynamic online user status indicators, and robust error handling on both the client and server sides. The app ensures seamless user experience with global state management powered by Zustand and a responsive, visually appealing design using TailwindCSS and DaisyUI.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "TailwindCSS", "DaisyUI", "Zustand", "JWT"],
  },
  {
    title: "Trip Planner App",
    image: project4,
    description:
      "The Full-Stack Trip Planner App is an intelligent travel assistant that combines AI-driven insights with a sleek user interface to help users plan trips effortlessly. Built with Gemini AI for smart recommendations, Firebase for real-time data storage and authentication, and styled with TailwindCSS, this app offers a seamless and personalized trip planning experience. Designed for developers eager to explore AI integration and full-stack development, it’s a perfect project to enhance your skills while creating something innovative.",
    technologies: ["React.js", "Gemini AI", "Firebase", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Rayasandra, Bengaluru, Karnataka, India ",
  phoneNo: "+91 7290938326 ",
  email: "pradyunn18@gmail.com",
};
