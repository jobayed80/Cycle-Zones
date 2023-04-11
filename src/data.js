//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
import { FcGoogle } from 'react-icons/fc'
import { FcPhone } from 'react-icons/fc'

// projects images
import Project1 from './assets/img/projects/blood.PNG';
import Project2 from './assets/img/projects/josocial.PNG';
import Project3 from './assets/img/projects/billing.PNG';
import Project4 from './assets/img/projects/student.PNG';
import Project5 from './assets/img/projects/cal.PNG';
import Project6 from './assets/img/projects/eid.PNG';

// skills images
import SkillImg1 from './assets/img/skills/c.png';
import SkillImg2 from './assets/img/skills/java.png';
import SkillImg3 from './assets/img/skills/js1.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/ds.PNG';
import TestiImage2 from './assets/img/testimonials/projec-show.jfif';
import TestiImage3 from './assets/img/testimonials/testing.PNG';

// Components


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

//Login Social media
export const login_social = [
  {icon: <FcGoogle></FcGoogle>},
  {icon: <FcPhone></FcPhone>}
]

// social
export const social = [
  
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/md-jobayed-hossain-rabbi-aa4072200/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/jobayed80',
  },

  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/Jobayed.102/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/jobayed_hossain_rabbi/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Blood Management',
    category: 'Java Swing Programming',
  },
  {
    id: '2',
    image: Project2,
    name: 'JoSocial',
    category: 'Web Designing',
  },
  {
    id: '3',
    image: Project3,
    name: 'Billing Management',
    category: 'Java Swing Programming',
  },
  {
    id: '4',
    image: Project4,
    name: 'Student Management',
    category: 'C Programming',
  },
  {
    id: '5',
    image: Project5,
    name: 'Calculator',
    category: 'Java Swing programming',
  },
  {
    id: '6',
    image: Project6,
    name: 'Eid Mubarak Text Animation',
    category: 'C Programming',
  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Java Swing Programming',
  },
  {
    name: 'C Programming',
  },
  {
    name: 'Web Designing',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    sticker:'&#128512',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at jobayed35-2948@diu.edu.bd',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Md. Jobayed Hossain Rabbi, Dhaka,Bangladesh',
    description: 'Serving clients worldwide',
  },
];
