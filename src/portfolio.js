// all the properties are optional - can be left empty or deleted

const header = {
  homepage: '/portfolio',
  title: 'HOME.',
}

const about = {
  name: 'Marigona Hasaj',
  role: 'Front-end developer',
  description:
    'My objective is to take a challenging and\n' +
    'managerial role in the field of computer programming and\n' +
    'implement the expertise and experience gained in this field to\n' +
    'develop complex projects with efficiency and quality.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/marigona-hasaj-a3a515102/',
    github: 'https://github.com/Marigonna',
    twitter: 'https://twitter.com/marigona_hasaj',
  },
}

const projects = [
  {
    name: 'Kosovo - Water Information System',
    description:
      'Designed and developed a complete GIS system for \n' +
      'managing and interacting with national water data with the\n' +
      'purpose of digitizing and interacting everyday with the \n' +
      'system.',
    stack: ['C#', 'Java', 'JavaScript', 'Razor', 'jQuery'],
    sourceCode: 'https://siu.rks-gov.net',
    livePreview: 'https://siu.rks-gov.net',
  },
  {
    name: 'Web App for the creation of dynamic reports',
    description: 'Designed to offer dynamic report creation for a specific database logic for KuBIT software company. Includes filtering, grouping, sorting, adding, removing, etc.',
    stack: ['JavaScript','React','ExpressJS'],
    sourceCode: '#projects',
    livePreview: '#projects',
  },
  {
    name: 'Geocad`s Website',
    description: 'Responsive static website based on company needs',
    stack: ['JavaScript','React'],
    sourceCode: '#projects',
    livePreview: 'https://geocad-ks.com',
  },
]

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'TypeScript',
  'React Native',
  'jQuery',
  'SASS',
  'LESS',
  'CSS',
  'Git',
]

const contact = {
  email: 'hasaj.marigona@gmail.com',
}

export { header, about, projects, skills, contact }
