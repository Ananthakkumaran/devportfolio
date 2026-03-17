export const siteConfig = {
  name: "Ananthakkumaran Pushpananthan",
  title: "Senior Software Engineer-Android",
  description: "Portfolio website of Ananth",
  accentColor: "#1d4ed8",
  social: {
    email: "ananthakkumaran@gmail.com",
    linkedin: "https://www.linkedin.com/in/ananthakkumaran/",
    github: "https://github.com/Ananthakkumaran",
  },
  aboutMe:
    "Software Engineer specializing in Android development with Kotlin, Java, and Jetpack Compose, building scalable mobile applications and cloud-integrated systems on AWS, with additional experience in AI-powered vehicle safety solutions and IoT integrations for asset tracking and monitoring.",
  skills: ["Android Development", "Kotlin", "Jetpack Compose", "Java", "Android SDK", "REST APIs", "AWS Cloud", "API Gateway", "Firebase", "Git", "CI/CD", "IoT Integration"],
  projects: [
    {
    name: "TouchLK – Merchant Payment Platform",
    year: "2023",
    description:
      "Android payment platform built for Sri Lankan merchants to process mobile reloads, internet payments, utility bills, insurance premiums, DTH services, and e-wallet top-ups in one place. The app enables merchants to earn commissions on transactions while managing their account balance through local bank deposits. Designed with a simple and reliable interface to support small businesses across Sri Lanka.",
    link: "https://play.google.com/store/apps/details?id=com.ananth.rechargenow&hl=en_SG",
    skills: ["Android", "XML", "Firebase", "REST APIs"],
    type: "personal"
    },
    {
    name: "Paddy Calculator – Agricultural Calculation App",
    year: "2021",
    description:
      "Android application built to support farmers by simplifying sack-based crop calculations for paddy, onion, and other grains. The app calculates total bag count, price, and weight, and generates PDF reports that can be shared or printed for record keeping. Designed with configurable bag weight and price settings to adapt to different farming scenarios.",
    link: "https://play.google.com/store/apps/details?id=com.ananth.asc",
    skills: ["Android", "XML", "PDF Generation", "Mobile UI/UX"],
    type: "personal"
    },
    {
      name: "DTHLK – DTH Payment Platform (Ongoing)",
      year: "2025 - Present",
      description:
        "Ongoing Android project designed for Sri Lankan users to make DTH payments quickly and securely. Built with Jetpack Compose and Kotlin for a modern, responsive UI, and integrated with AWS Cloud backend for handling DTH payment processing reliably. Focused on simplicity and speed to help users complete payments efficiently.",
      link: "",
      skills: ["Android", "Kotlin", "Jetpack Compose", "AWS Cloud", "Payment Gateway Integration"],
      type: "personal"
    },
    {
      name: "CEAsia Operations Suite – Android Enterprise App",
      year: "2024",
      description:
        "Enterprise Android application for the CEAsia Operations Suite, digitizing end‑to‑end workflows including sales management, job coordination, fleet tracking, and internal communication. Developed Android features with seamless backend integration using AWS and real‑time MQTT data streams for operational efficiency.",
      link: "",
      skills: ["Android", "Kotlin", "Jetpack Compose", "AWS (Lambda, API Gateway, DynamoDB, iOT)","Firebase", "MQTT"],
       type: "work"
    },
    {
      name: "KKL EMA – Worker Safety & Compliance Platform",
      year: "2025",
      description:
        "Android companion application designed to help companies meet Workplace Safety and Health (WSH) compliance requirements. The platform allows workers to submit safety declarations, report incidents, and access training materials while enabling organizations to monitor workforce safety and operational compliance through a centralized digital system.",
      link: "",
      skills: ["Android", "Kotlin", "Jetpack Compose", "AWS (Lambda, DynamoDB)", "Firebase"],
      type: "work"
    },
    {
      name: "SH Operation App – Daily Operations Management",
      year: "2025",
      description:
        "Android application developed for Singheng to digitally manage and track daily operational activities. The app allows staff to record tasks, monitor daily operations, and maintain structured records directly from mobile devices. By replacing manual tracking methods, the system improves operational visibility, simplifies record keeping, and ensures more efficient day-to-day management.",
      link: "",
      skills: ["Android", "Kotlin", "Jetpack Compose", "REST APIs", "Mobile UI/UX"],
      type: "work"
    },
    {
      name: "TrackGenius – Android Vehicle Control & IoT App",
      year: "2024",
      description:
        "Developed the Android version of the TrackGenius platform for secure, keyless vehicle access and real-time IoT monitoring. Implemented Jetpack Compose for modern UI, Eddystone (Android) and iBeacon (iOS) protocols for proximity-based engine start, and AWS Face Recognition to ensure authorized user verification. Integrated IoT workflows for engine control and vehicle tracking, delivering a full-stack mobile and cloud solution.",
      link: "",
      skills: ["Android", "Kotlin", "Jetpack Compose", "IoT Integration", "AWS (Lambda, API Gateway, DynamoDB,Face Recognition)", "Eddystone"],
      type: "work"
    },
     {
        name: "WKS Delivery Partner – Android Operations App",
        year: "2024",
        description:
          "Android version of the WKS Delivery Partner app, a unified platform for sales job creation, order management, delivery tracking, and team messaging. Developed using Jetpack Compose for a modern UI and integrated with AWS backend (DynamoDB, S3, SNS) for reliable data storage and notifications.",
        link: "",
        skills: ["Android", "Kotlin", "XML", "AWS", "DynamoDB", "S3", "SNS", "Mobile UI/UX"],
        type: "work"
      },
      {
        name: "KKL Asset Management – Android Fleet & Operations App",
        year: "2023",
        description:
          "Developed the Android version of the KKL Asset Management platform to streamline fleet operations, track operator work hours, manage machinery maintenance, and handle internal orders. Implemented Jetpack Compose for responsive UI, integrated AWS backend for real-time updates, and automated workflows like PDF report generation, operator work auto-end, and maintenance reminders. The solution increased productivity by 300%, reduced manual workload, and centralized operations in one intuitive mobile platform.",
        link: "",
        skills: ["Android", "XML", "AWS", "PDF Generation", "Mobile UI/UX"],
        type: "work"
      },
      {
        name: "KKL Workshop – Android Service & Task Management",
        year: "2023",
        description:
          "Developed the Android version of the KKL Workshop app, enabling efficient workshop service task management with real‑time job assignment, status updates, and progress workflows. Built with Jetpack Compose for a responsive UI and connected to AWS backend for secure data updates and reliable syncing. Improved operational visibility and reduced service turnaround times through streamlined mobile workflows.",
        link: "",
        skills: ["Android", "XML", "AWS", "Mobile UI/UX"],
        type: "work"
      },
      {
        name: "WFAE – Wong Fong Advanced Engineering Operations App",
        year: "2023",
        description:
          "Android application developed to digitize field operations for Wong Fong Advanced Engineering. The app replaces paper-based workflows by enabling technicians to complete operational checklists, capture photos, and collect client and technician signatures directly on mobile devices. All records and images are securely stored in AWS S3, providing centralized access and improving operational efficiency, traceability, and documentation.",
        link: "",
        skills: ["Android", "Kotlin", "Jetpack Compose", "AWS S3", "REST APIs", "Digital Signature", "Field Operations"],
        type: "work"
      },{
          name: "MST – Mobile Service Team",
          year: "2022",
          description:
            "Android application developed to digitize the workflow of the Mobile Service Team responsible for maintaining cranes and garbage collector trucks. The app allows service faults to be assigned digitally, enables technicians to record maintenance tasks, capture before-and-after work photos onsite, and generate detailed PDF service reports. Client and technician signatures are collected digitally, eliminating paperwork. All photos and reports are securely stored in AWS S3, ensuring centralized documentation, improved traceability, and more efficient field operations.",
          link: "",
          skills: ["Android", "Kotlin", "XML", "AWS S3", "PDF Generation", "Digital Signature", "Field Service Management"],
          type: "work"
        },
    {
      name: "Digital Signage & Queue Management Platform",
      year: "2020 – 2021",
      description:
        "Developed a complete Android-based Digital Signage and Queue Management platform used across businesses and hospitals. The system included multiple applications such as Kiosk, Calling Pad, Main Display, Counter Display, Customer Feedback, and Digital Signage players running on Android phones, tablets, Android TV, and Android Boxes. Implemented dynamic signage templates, offline content caching, and support for rich media including videos, images, YouTube, RSS feeds, live streams, HDMI input, and weather widgets. The queue management system provided real-time updates, voice announcements, and seamless service flow. Integrated POS and thermal printers such as Bixolon, NPI, and Epson to support ticket printing and operational workflows.",
      link: "",
      skills: [
        "Android",
        "Kotlin",
        "Java",
        "Android TV",
        "Digital Signage",
        "Queue Management Systems",
        "POS & Printer Integration",
        "REST APIs",
        "Git"
      ],
      type: "work"
    }

  ],
  experience: [
    {
        company: "Wong Fong Engineering Works (1988) Pte Ltd",
        title: "Software Engineer – Android & Cloud",
        dateRange: "Feb 2022 - Present",
        location: "Singapore · On-site",
        bullets: [
          "Specialize in Android application development using Kotlin, Jetpack Compose, and modern Android architectures (MVVM, Clean Architecture).",
          "Develop and maintain high-performance mobile apps integrated with cloud services and REST APIs.",
          "Design and manage backend infrastructure using AWS (Amplify, DynamoDB, Lambda, API Gateway, S3, SNS, SES, EC2).",
          "Implement secure authentication and keyless access solutions using AWS Rekognition, enabling smart rental-style equipment access.",
          "Research and deploy AI-powered 360° vehicle safety camera systems with backend video services hosted on AWS EC2.",
          "Integrate IoT and telematics devices for asset tracking, operational monitoring, and real-time analytics.",
          "Collaborate with cross-functional teams using Agile workflows, Git, Bitbucket, and Jira."
        ],
        techStack: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "REST APIs", "AWS Cloud", "IoT Integration", "Git", "Bitbucket", "Jira"]
      },
      {
        company: "Alles · Freelance",
        title: "Software Engineer Android",
        dateRange: "Oct 2022 - Apr 2025",
        location: "Sri Lanka · Remote",
        bullets: [
          "Developed the complete frontend of the TouchLK merchant payment app using native Android (Kotlin/Java).",
          "Built user-friendly UI flows for mobile, internet, DTH, utility, insurance, and e-wallet payments.",
          "Implemented secure transaction handling, merchant balance management, and top-up workflows.",
          "Optimized app performance for fast, reliable payments for Sri Lankan merchants.",
          "Collaborated with backend teams to integrate APIs and ensure smooth feature delivery."
        ],
        techStack: ["Android", "Kotlin", "Java", "Jetpack Compose", "Firebase", "REST APIs", "Mobile Payments"]
      },
      {
        company: "T S Technologies (Pvt) Ltd",
        title: "Software Engineer",
        dateRange: "Feb 2018 - Dec 2021",
        location: "Colombo District, Sri Lanka",
        bullets: [
          "Developed and maintained Android applications for Digital Signage, Queue Management, Hospital QMS, and Customer Feedback systems.",
          "Built a complete Digital Signage platform with dynamic template creation, offline caching, and rich content support (videos, images, YouTube, RSS, live streams, HDMI, weather, etc.).",
          "Delivered end-to-end Queue Management solutions including Kiosk, Calling Pad, Main Display, and Counter Display apps with real-time updates and voice announcements.",
          "Created Customer Feedback apps for collecting ratings and service insights.",
          "Delivered Android applications across phones, tablets, Android Box, and Android TV.",
          "Integrated apps with POS and printer devices such as Bixolon, NPI, Epson, and other thermal printers.",
          "Maintained clean, organized, and scalable code using Git with proper version control practices."
        ],
        techStack: ["Android", "Kotlin", "Java", "Android SDK", "REST APIs", "POS & Printer Integration", "Git"]
      },
  ],
  education: [
  {
      school: "Wayamba University of Sri Lanka",
      degree: "Bachelor of Science (B.Sc) in Computing and Information Systems",
      dateRange: "Jan 2015 - Jan 2018",
      achievements: [
        "Member of the Computing and Information Systems Society",
        "Member of Electronic Society (ESOC) and Mathematics Society",
      ],
    },
    {
      school: "Wayamba University of Sri Lanka",
      degree: "Certificate in Business English",
      dateRange: "Dec 2017",
      achievements: [],
    },
  ],
};
