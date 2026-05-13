import taylorTaylorImage from '../assets/images/Taylor-Taylor-website.png';
import freshMilkImage from '../assets/images/Fresh-Milk.jpg';
import glowUpImage from '../assets/images/GlowUp.jpg';
import proNetImage from '../assets/images/ProNet.jpg';
import mobileApp1 from '../assets/Mobile_app/1.png';
import mobileApp2 from '../assets/Mobile_app/2.png';
import mobileApp3 from '../assets/Mobile_app/3.png';
import mobileApp4 from '../assets/Mobile_app/4.png';
import mobileApp5 from '../assets/Mobile_app/5.png';
import mobileApp6 from '../assets/Mobile_app/6.png';
import mobileApp7 from '../assets/Mobile_app/7.png';
import mobileApp8 from '../assets/Mobile_app/8.png';
import mobileApp9 from '../assets/Mobile_app/9.png';
import dryCleaningHero from '../assets/Dry&Cleaning/hero.png';
import dryCleaningAbout from '../assets/Dry&Cleaning/About.png';
import dryCleaningServices from '../assets/Dry&Cleaning/Services.png';
import dryCleaningPrices from '../assets/Dry&Cleaning/prices.png';
import dryCleaningWorks from '../assets/Dry&Cleaning/works.png';
import dryCleaningFooter from '../assets/Dry&Cleaning/footer.png';
import smartShowHero from '../assets/Smart-show/hero.png';
import smartShowLogin from '../assets/Smart-show/login.png';
import smartShowFileManager from '../assets/Smart-show/File-Manager.png';
import smartShowBackupStore from '../assets/Smart-show/backup-store.png';
import nimbusAiConsole from '../assets/Nimbus_Ai/console.png';
import nimbusAiLaunch from '../assets/Nimbus_Ai/Launch.png';
import nimbusAiInstances from '../assets/Nimbus_Ai/Instances.png';
import nimbusAiAmi from '../assets/Nimbus_Ai/ami.png';
import nimbusAiSetting from '../assets/Nimbus_Ai/setting.png';

export const PROJECTS = [
  {
    id: 1,
    title: 'Taylor Taylor Website',
    category: 'web',
    image: taylorTaylorImage,
    description: 'Modern website with responsive design and interactive elements.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://dasumalam.github.io/Taylor-Taylor-project/',
    githubUrl: 'https://github.com/dasumalam/Taylor-Taylor-project'
  },
  {
    id: 2,
    title: 'Garage App',
    category: 'web',
    image: mobileApp1,
    gallery: [mobileApp1, mobileApp2, mobileApp3, mobileApp4, mobileApp5, mobileApp6, mobileApp7, mobileApp8, mobileApp9],
    description: 'Garage management mobile application with vehicle tracking, service scheduling, and maintenance records for efficient garage operations.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveUrl: null
  },
  {
    id: 3,
    title: 'Smart Show',
    category: 'web',
    image: smartShowHero,
    gallery: [smartShowHero, smartShowLogin, smartShowFileManager, smartShowBackupStore],
    description: 'Desktop software UI application built with React.js, featuring file management, backup systems, and modern interface design using HTML and Tailwind CSS.',
    technologies: ['React.js', 'HTML', 'Tailwind CSS'],
    liveUrl: null
  },
  {
    id: 4,
    title: 'Nimbus AI',
    category: 'web',
    image: nimbusAiConsole,
    gallery: [
      nimbusAiConsole,
      nimbusAiLaunch,
      nimbusAiInstances,
      nimbusAiAmi,
      nimbusAiSetting,
    ],
    description: 'Advanced AI-powered platform built with React.js, featuring intelligent console interface and comprehensive control panel for seamless AI management and automation.',
    technologies: ['React.js', 'AI/ML', 'JavaScript'],
    liveUrl: null
  },
  {
    id: 5,
    title: 'Dry-Cleaning',
    category: 'web',
    image: dryCleaningHero,
    gallery: [dryCleaningHero, dryCleaningAbout, dryCleaningServices, dryCleaningPrices, dryCleaningWorks, dryCleaningFooter],
    description: 'Professional dry-cleaning website with modern design, service showcase, pricing tables, and online booking system.',
    technologies: ['HTML', 'JS', 'Tailwind CSS'],
    liveUrl: null
  },
  {
    id: 6,
    title: 'Fresh Milk',
    category: 'design',
    image: freshMilkImage,
    description: 'Brand design and packaging concept for fresh milk product.',
    technologies: ['Figma', 'Brand'],
    liveUrl: null
  },
  {
    id: 7,
    title: 'GlowUp',
    category: 'design',
    image: glowUpImage,
    description: 'Beauty and wellness app design with modern interface.',
    technologies: ['XD', 'UI/UX'],
    liveUrl: null
  },
  {
    id: 8,
    title: 'ProNet',
    category: 'design',
    image: proNetImage,
    description: 'Professional networking platform design with modern interface.',
    technologies: ['Figma', 'Platform'],
    liveUrl: null
  }
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'design', label: 'Design' }
];
