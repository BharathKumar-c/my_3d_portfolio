import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    jobit,
    tripguide,
    mysql,
    techb,
    hyfe,
    apperectors,
    tcs,
    Marshmallow_mockup_v1,
    drcarrot,
    // carrent,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // laravel,
    // illustrator,
    // bootstrap,
    // photoshop,
    // firebase,
    // postgresql
    // threejs,
    // python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    // {
    //   name: "postgresql",
    //   icon: postgresql,
    // },
    // {
    //   name: "laravel",
    //   icon: laravel,
    // },
    // {
    //   name: "firebase",
    //   icon: firebase,
    // },
    // {
    //   name: "bootstrap",
    //   icon: bootstrap,
    // },
    // {
    //   name: "photoshop",
    //   icon: photoshop,
    // },
    // {
    //   name: "illustrator",
    //   icon: illustrator,
    // },
  ];

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company_name: "Techbumbles",
      icon: techb,
      iconBg: "#383E56",
      date: "Nov 2021 - Feb 2024",
      points: [
        "Developing and maintaining web applications & mobile app using React.js, React-native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full-Stack Freelancer",
      company_name: "HyFe Technologies",
      icon: hyfe,
      iconBg: "#E6DEDD",
      date: "May 2019 - Oct 2021",
      points: [
        "Developing and maintaining web applications using React.js, Laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },  
    {
      title: "Web Application Freelancer",
      company_name: "AppErectors",
      icon: apperectors,
      iconBg: "#383E56",
      date: "Dec 2016 - Jan 2019",
      points: [
        "Developing and maintaining web sites using laravel and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Deployment and maintaining the project",
      ],
    },
    {
      title: "Technical Suport",
      company_name: "TCS",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Mar 2012 - Aug 2014",
      points: [
        "Providing technical assistance and support for incoming queries and issues related to emergency alert systems, software",
        "Responding to customer inquiries via email, chat, and documenting issues and resolutions",
        "Troubleshooting and diagnosing technical problems, and guiding users through step-by-step solutions.",
        "Installing, configuring, and maintaining emergency alert systems and applications",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Marshmellow",
      description:
        "A web-based and mobile-based platform that allows users to invest in mutual funds and withdraw their profits. We have developed an Online KYC system with onfido for the user verification process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Pg-SQL",
          color: "blue-text-gradient",
        }
      ],
      image: Marshmallow_mockup_v1,
      source_code_link: "https://github.com/BharathKumar-c/RN-MutualFundInvestmentAPP",
    },
    {
      name: "DrCarrot",
      description:
        "A web-based and mobile-based platform thats for hospital management application, Develop Features are: Book Appointment, Billing, Stocks management, Online payment system, and etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "laravel",
          color: "blue-text-gradient",
        }
      ],
      image: drcarrot,
      source_code_link: "https://github.com/BharathKumar-c/drcarrot",
    },
    {
      name: "Horse Club",
      description:
        "A web-based platform that for horse club, Develop Features are: Membership Registration, Horse Registration, Online payment system, and etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "pg-sql",
          color: "pink-text-gradient",
        },
        {
          name: "node Js",
          color: "pink-text-gradient",
        },
        {
          name: "express Js",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/BharathKumar-c/HorseClubMembershipApp-USJA/tree/main",
    },
  ];

  const introduction = [
    {
      Title:"Hi, I'm Bharath",
      description: "I'm a full-stack developer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, introduction };