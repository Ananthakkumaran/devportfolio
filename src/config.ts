export const siteConfig = {
  name: "Ananthakkumaran Pushpananthan",
  title: "Senior Android Engineer",
  description:
    "Portfolio of Ananthakkumaran Pushpananthan, Senior Android Engineer specializing in Kotlin, Jetpack Compose and AWS cloud systems.",
  accentColor: "#1E9E68",
  location: "Singapore",
  availability: "Available immediately · Eligible for EP application",
  social: {
    phone: "+65 8248 2428",
    email: "p.ananthakkumaran@gmail.com",
    linkedin: "https://www.linkedin.com/in/ananthakkumaran/",
    github: "https://github.com/Ananthakkumaran",
  },
  aboutMe:
    "Senior Android Engineer with 8+ years delivering production-grade mobile apps across enterprise operations, fintech, IoT, and digital signage. Proficient in Kotlin, Jetpack Compose, and Clean Architecture (MVVM), with hands-on experience designing and deploying AWS cloud infrastructure. Proven track record leading Android development end-to-end — architecture through Play Store release — across phones, tablets, Android TV, and Android Boxes.",

  skillGroups: [
    { category: "Languages", items: ["Kotlin", "Java"] },
    {
      category: "Android",
      items: [
        "Jetpack Compose",
        "Android SDK",
        "MVVM",
        "Clean Architecture",
        "MVC",
        "XML Layouts",
        "ViewBinding",
      ],
    },
    {
      category: "Libraries",
      items: [
        "Retrofit",
        "OkHttp",
        "Room",
        "Hilt",
        "WorkManager",
        "ExoPlayer",
        "Media3",
        "Gson",
        "Moshi",
        "Kotlinx Serialization",
      ],
    },
    {
      category: "Cloud & AWS",
      items: [
        "EC2",
        "Lambda",
        "DynamoDB",
        "API Gateway",
        "S3",
        "SNS",
        "SES",
        "IoT Core",
        "Rekognition",
        "AWS Amplify",
      ],
    },
    {
      category: "IoT & Hardware",
      items: [
        "MQTT",
        "BLE",
        "Telematics",
        "Android TV",
        "Android Boxes (Zidoo, APC)",
        "Thermal Printers (Bixolon, Epson, NPI)",
      ],
    },
    {
      category: "Firebase",
      items: ["Crashlytics", "Realtime Database", "Cloud Messaging (FCM)"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "Bitbucket", "CI/CD", "Jira", "Google Play Console"],
    },
  ],

  projects: [
    {
      name: "KKL Operations Suite & MST",
      year: "2022 – Present",
      status: "Deployed",
      impact: "1,000+ daily users across 30+ screens",
      description:
        "Enterprise operations platform digitising workshop operations, asset management and field service. Migrated a 30+ screen codebase from Java/XML (MVC) to Kotlin/MVVM with Jetpack Compose adoption underway. Includes MST, a companion field app for ~20 service staff replacing paper-based job tracking with digital task management, reporting and on-device signature capture.",
      skills: ["Kotlin", "Jetpack Compose", "MVVM", "AWS", "Firebase"],
      link: "",
    },
    {
      name: "CEAsia Operations Suite",
      year: "2024",
      status: "Deployed",
      description:
        "Enterprise app digitising sales, job coordination, fleet tracking and internal communication, with real-time MQTT data streams and AWS backend integration.",
      skills: ["Kotlin", "Jetpack Compose", "AWS", "MQTT", "Firebase"],
      link: "",
    },
    {
      name: "KKL EMA – Safety & Compliance",
      year: "2025",
      status: "Deployed",
      description:
        "Workplace Safety and Health (WSH) compliance platform. Workers submit safety declarations, report incidents and access training; organisations monitor workforce compliance centrally.",
      skills: ["Kotlin", "Jetpack Compose", "AWS", "Firebase"],
      link: "",
    },
    {
      name: "WKS Delivery Partner",
      year: "2024",
      status: "Deployed",
      description:
        "Unified platform for sales job creation, order management, delivery tracking and team messaging, backed by AWS (DynamoDB, S3, SNS) for data storage and push notifications.",
      skills: ["Kotlin", "Jetpack Compose", "AWS DynamoDB", "AWS S3", "AWS SNS"],
      link: "",
    },
    {
      name: "WFAE Field Operations",
      year: "2023",
      status: "Deployed",
      description:
        "Replaced paper-based workflows for field technicians with digital checklists, photo capture and client/technician signature collection, all stored securely in AWS S3.",
      skills: ["Kotlin", "Jetpack Compose", "AWS S3", "Digital Signature"],
      link: "",
    },
    {
      name: "TouchLK — Payment Platform",
      year: "2022 – 2025",
      status: "Live",
      impact: "100+ active merchants on Google Play",
      description:
        "Merchant payment and e-wallet platform for the Sri Lankan market — mobile reloads, bill payments and e-wallet top-ups. Led Android end-to-end: architecture, secure payment flows with bank-transfer reconciliation, and the full Play Store release lifecycle.",
      skills: ["Kotlin", "Android", "REST APIs", "Play Console"],
      link: "https://play.google.com/store/apps/details?id=com.ananth.rechargenow&hl=en_SG",
    },
    {
      name: "TrackGenius — Vehicle Access & IoT",
      year: "2024",
      status: "Deployed",
      impact: "~20 operators, fleet expansion planned",
      description:
        "Internal keyless vehicle access system using BLE and AWS Rekognition face recognition. Integrated a third-party GPS fleet-management platform via vendor API, enabling remote vehicle immobilisation from Android.",
      skills: ["Kotlin", "BLE", "AWS Rekognition", "IoT Core"],
      link: "",
    },
    {
      name: "KlikShield",
      year: "2025 – Present",
      status: "Active",
      description:
        "Android SaaS app for vehicle rental handover evidence — digital documentation, photo capture and compliance records, built under Klik Innovatech.",
      skills: ["Kotlin", "Jetpack Compose", "AWS"],
      link: "",
    },
    {
      name: "TouchLK Plus",
      year: "2025 – Present",
      status: "In Development",
      description:
        "Ground-up rewrite of the TouchLK merchant payment platform in Kotlin and Jetpack Compose with Clean Architecture, carrying forward the full TouchLK feature set — mobile reloads, bill payments, insurance premiums and e-wallet top-ups — rebuilt for best-in-class app performance and UX.",
      skills: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Android"],
      link: "",
    },
    {
      name: "Digital Signage & Queue Management",
      year: "2018 – 2021",
      status: "Archived",
      impact: "100+ client sites",
      description:
        "Android-based digital signage platform deployed across hospitals, banks and corporates, supporting rich media scheduling — video, YouTube, live streams, RSS, weather, HDMI and PowerPoint. Paired with a real-time queue management system with voice announcements across healthcare and banking clients. Delivered across Android TV, Android Boxes, phones and tablets, integrated with POS systems and thermal printers.",
      skills: ["Java", "Android SDK", "Android TV", "MQTT"],
      link: "",
    },
  ],

  experience: [
    {
      company: "Klik Innovatech Pvt Ltd",
      companyDescription:
        "Independent freelance studio building Android applications for enterprise and consumer markets.",
      title: "Senior Software Engineer (Freelance)",
      dateRange: "Apr 2025 – Present",
      location: "Sri Lanka",
      bullets: [
        "Leading Android development for multiple independent projects including KlikShield, TouchLK Plus, and a DTH recharge platform, using Kotlin and Jetpack Compose.",
        "Architecting apps using Clean Architecture (MVVM) with AWS backend integration and REST APIs.",
        "Managing end-to-end delivery — from architecture and build to Google Play Store release and maintenance.",
      ],
    },
    {
      company: "Wong Fong Engineering Works (1988) Pte Ltd",
      companyDescription:
        "Established enterprise company specialising in specialised vehicles, cranes, and industrial equipment.",
      title: "Mobile Applications Developer",
      dateRange: "Feb 2022 – Mar 2026",
      location: "Singapore",
      bullets: [
        "Led KKL Operations Suite — migrated 30+ screen enterprise codebase from Java/XML (MVC) to Kotlin/MVVM with Jetpack Compose adoption underway, serving 1,000+ internal users daily.",
        "Built MST (Mobile Service Team) field app for ~20 staff, replacing paper-based job tracking with digital task management, reporting, and on-device signature capture.",
        "Designed and deployed AWS backend (EC2, Lambda, DynamoDB, API Gateway, S3, SNS, SES) supporting real-time mobile–cloud data sync across enterprise apps.",
        "Built TrackGenius — internal keyless vehicle access system using BLE and AWS Rekognition face recognition, deployed for ~20 operators with planned fleet expansion.",
        "Evaluated and onboarded a third-party AI vehicle safety system (4-camera per vehicle); set up Singapore-hosted server infrastructure and maintained ongoing system operations.",
        "Studied and onboarded a third-party GPS fleet management platform; integrated into TrackGenius app via vendor API enabling remote vehicle immobilisation from Android.",
        "Delivered additional enterprise apps — CEAsia Operations Suite, WKS Delivery Partner, WFAE Field Operations, and KKL EMA Safety Platform — using Kotlin, Jetpack Compose, AWS, Firebase, and MQTT.",
        "Monitored app stability via Firebase Crashlytics; managed all releases through Google Play Console.",
      ],
    },
    {
      company: "Alles (Pvt) Ltd",
      companyDescription:
        "Fintech startup building a merchant payment and e-wallet platform for the Sri Lankan market.",
      title: "Android Developer – Lead (Freelance)",
      dateRange: "Oct 2022 – Apr 2025",
      location: "Sri Lanka · Remote",
      bullets: [
        "Led Android development for TouchLK — live merchant payment app on Google Play serving 100+ active merchants, supporting mobile reloads, bill payments, and e-wallet top-ups.",
        "Designed secure payment flows with bank-transfer reconciliation and admin-approval workflows; platform roadmapped for local LK payment rail integration.",
        "Sole Android lead — owned architecture, development, and full Play Store release lifecycle.",
      ],
    },
    {
      company: "T S Technologies (Pvt) Ltd",
      companyDescription:
        "Technology company delivering digital signage and queue management solutions across enterprise, healthcare, and banking sectors.",
      title: "Software Engineer – Android",
      dateRange: "Feb 2018 – Dec 2021",
      location: "Sri Lanka",
      bullets: [
        "Built and maintained an Android-based Digital Signage platform deployed across 100+ client sites (hospitals, banks, corporates), supporting rich media scheduling — video, YouTube, live streams, RSS, weather, HDMI, audio, and PowerPoint.",
        "Developed a real-time Queue Management system with live display updates and voice announcements across healthcare and banking clients.",
        "Delivered apps across Android TV, Android Boxes (Zidoo, APC), phones, and tablets; integrated POS systems and thermal printers (Bixolon, Epson, NPI).",
      ],
    },
  ],

  education: [
    {
      school: "Wayamba University of Sri Lanka",
      degree: "B.Sc. in Computing and Information Systems",
      dateRange: "2015 – 2020",
      achievements: [
        "Faculty of Applied Science · Graduated January 2020",
        "Academic qualifications verified by Singapore Ministry of Manpower (MOM)",
      ],
    },
    {
      school: "Wayamba University of Sri Lanka",
      degree: "Certificate in Business English",
      dateRange: "2017",
      achievements: [],
    },
  ],
};
