// ============================================================
// Portfolio content. Edit this file to update the whole site.
// Only information provided by Harshit is included here.
// ============================================================

export const profile = {
  name: 'Harshit Kushwaha',
  role: 'Full Stack Developer | Software Engineer',
  tagline:
    'Building practical full-stack applications and exploring AI-powered software solutions.',
  location: 'Noida, India',
  email: 'mauryahaharshit@gmail.com',
  github: 'https://github.com/harshitkushwaha45',
  linkedin: 'https://www.linkedin.com/in/harshitkushwaha45',
  leetcode: 'https://leetcode.com/u/harshit_4507/',
  // File lives in /public/resume. Replace the PDF there to update it.
  resumeUrl: '/resume/HARSHIT_10_OCT_LATEST_RESUME.pdf',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

// Shown in the hero "profile.json" card.
export const snapshot = [
  { key: 'education', value: 'B.Tech, Information Technology' },
  { key: 'college', value: 'AKGEC' },
  { key: 'cgpa', value: '7.8 / 10' },
  { key: 'year', value: '4th year, 7th semester' },
  { key: 'focus', value: 'Full stack, real-time, AI' },
  { key: 'location', value: 'Noida, India' },
];

export const about = {
  paragraphs: [
    "I'm a B.Tech Information Technology student at Ajay Kumar Garg Engineering College, currently in my 4th year with a CGPA of 7.8 / 10. My main interests are full-stack web development, real-time applications, and the engineering behind software that holds up under real use.",
    "I've built and deployed MERN-stack applications on Vercel and Render, including a real-time chat app with Socket.io and an AI-assisted mock interview platform. I'm preparing for software engineering roles through DSA practice, core CS subjects, and mock interviews, and I pick up new tools quickly when a project needs them.",
  ],
  facts: [
    { label: 'Focus', value: 'Full stack development, backend APIs, real-time systems' },
    { label: 'Currently', value: 'Preparing for software engineering placements' },
    { label: 'Deployed on', value: 'Vercel and Render' },
    { label: 'Exploring', value: 'AI fundamentals and LLM application design' },
  ],
};

export const skillGroups = [
  { title: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'Python'] },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite', 'Tailwind CSS', 'DaisyUI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT', 'HTTP-only cookies'],
  },
  { title: 'Databases', items: ['MongoDB', 'SQL', 'MySQL'] },
  { title: 'State & Media', items: ['Zustand', 'Cloudinary', 'Multer'] },
  {
    title: 'AI & Computer Vision',
    items: ['TensorFlow.js', 'face-api.js', 'Chart.js', 'Browser Speech API', 'pdf-parse'],
  },
  {
    title: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Resend', 'Arcjet', 'Postman', 'VS Code'],
  },
  {
    title: 'CS Fundamentals',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Computer Organization',
    ],
  },
];

// Presented as "studied / exploring", not as production experience.
export const learningAreas = [
  'AI fundamentals',
  'Machine learning basics',
  'Deep learning basics',
  'Generative AI',
  'LLM concepts',
  'Tokens and context windows',
  'Prompt engineering',
  'Structured outputs',
  'Embeddings',
  'RAG',
  'Vector databases',
  'AI agents',
  'MCP',
  'AI security (prompt injection, hallucinations)',
];

export const projects = [
  {
    id: 'chat-app',
    name: 'Real-Time Chat Application',
    summary:
      'A MERN-stack messaging app with live one-to-one chat, presence tracking, and JWT-based sessions.',
    features: [
      'One-to-one messaging over Socket.io WebSocket connections',
      'Typing indicators, message seen status, and online/offline tracking',
      'JWT authentication and authorization with secure HTTP-only cookies',
      'Profile image uploads stored on Cloudinary',
      'REST APIs for users and messages, with Arcjet rate limiting and Resend welcome emails',
    ],
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'JWT',
      'Zustand',
      'Tailwind CSS',
      'DaisyUI',
      'Cloudinary',
      'Resend',
      'Arcjet',
    ],
    github: 'https://github.com/harshitkushwaha45/CHATAPP',
    live: 'https://chatapp-hazel-psi.vercel.app/',
    backend: 'https://chatapp-1-z8w7.onrender.com',
    backendLabel: 'Backend on Render',
  },
  {
    id: 'ai-mock-interview',
    name: 'AI-Powered Mock Interview Platform',
    summary:
      'An AI-assisted platform for practicing interviews, reviewing answers, and tracking performance with structured feedback.',
    features: [
      'Dynamic interview question generation and session management',
      'Answer submission with simulated AI feedback and scoring logic',
      'Resume parsing to extract skills and experience (pdf-parse, Multer)',
      'Facial expression analysis using TensorFlow.js and face-api.js',
      'Performance dashboard with Chart.js visualizations',
    ],
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'TensorFlow.js',
      'face-api.js',
      'Chart.js',
      'pdf-parse',
      'Multer',
      'REST APIs',
    ],
    note:
      'AI feedback currently uses a simulated scoring system rather than a production LLM integration.',
    github: 'https://github.com/harshitkushwaha45/AI_MOCK_INTERVIEW_PLATFORM',
    live: 'https://ai-mock-interview-platform-1-ofb2.onrender.com',
  },
];

export const experience = [
  {
    role: 'Artificial Intelligence Intern',
    org: 'IBM',
    program: 'IBM Artificial Intelligence Virtual Internship',
    period: 'Mar 2026 – May 2026',
    location: 'Remote',
    certificateUrl: 'https://drive.google.com/file/d/1zdqL0ukJrki7KqKJYVvXCeJtCS0nP1VM/view?usp=drive_link',
    points: [
      'Completed an 8-week hands-on training program in AI, machine learning, deep learning, NLP, and computer vision through IBM SkillsBuild.',
      'Worked on predictive analytics and classification models, covering data preprocessing, feature engineering, and model optimization.',
      'Applied machine learning workflows, including data cleaning, model evaluation, and performance analysis, across 5+ AI case studies.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    school: 'Ajay Kumar Garg Engineering College (AKGEC)',
    period: 'Expected May 2027',
    detail: 'CGPA 7.8 / 10 · 4th year, 7th semester',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];

export const coding = {
  summary:
    'I practice DSA consistently for software engineering placements, covering core data structures and common problem-solving patterns.',
  stat: '200+ problems solved across LeetCode and HackerRank',
  topics: [
    'Arrays',
    'Strings',
    'Linked Lists',
    'Stacks',
    'Queues',
    'Trees',
    'Graphs',
    'Greedy',
    'Dynamic Programming',
    'Sliding Window',
    'Binary Search',
    'Recursion',
    'Hashing / Maps',
    'Two Pointers',
  ],
  problems: [
    'Two Sum',
    'Longest Substring Without Repeating Characters',
    'Product of Array Except Self',
    'Merge Two Sorted Lists',
    'Remove Nth Node From End',
    'Reverse Linked List',
    'Valid Parentheses',
    'Min Stack',
    'Valid Anagram',
    'Majority Element',
    'Longest Common Prefix',
    'Move Zeroes',
  ],
};

export const achievements = [
  {
    title: 'HackWithInfy',
    detail: 'Qualified for the second round and shortlisted for the interview.',
  },
];

export const certifications = [
  { name: 'IBM Artificial Intelligence Virtual Internship', issuer: 'IBM', url: 'https://drive.google.com/file/d/1zdqL0ukJrki7KqKJYVvXCeJtCS0nP1VM/view?usp=drive_link' },
  {
    name: 'Full Stack Web Development Certification',
    issuer: 'CodeSquadz Education Pvt. Ltd.',
    collaborator: 'Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad',
    url: 'https://drive.google.com/file/d/1iIDnV9J0vPAdQN_gaQ6MxTFgMGMjzjEF/view?usp=drive_link',
  },
  { name: 'Data Structures & Algorithms Certification', issuer: 'Comprehensive DSA Training', url: 'https://drive.google.com/file/d/1sFaHUBzJ1ad1-cFxvkAaEBp1lYmhX0q7/view?usp=drive_link' },
  { name: 'Frontend Development Certification', issuer: 'Sheryians Coding School', url: 'https://drive.google.com/file/d/1IaObN2qcvTzfE7rSv5s94hAfkr6H3xYT/view?usp=drive_link' },
  { name: 'Python Programming Certification', issuer: 'Infosys Springboard', url: 'https://drive.google.com/file/d/1QUeY7u2AjW9GVPmjfQZjsX36IipfxbyP/view?usp=drive_link' },
];
