// all the properties are optional - can be left empty or deleted

const header = {
  homepage: '/portfolio',
  title: 'HOME.',
}

const about = {
  name: 'Marigona Hasaj',
  role: 'front-end developer',
  description:
    'Creative front-end developer with a flair for bringing UX designs and ideas to life.\n' +
    'Passionate about implementing user-friendly platforms, always in search of broadening my skills. \n' +
    'Keen to take a part and/or managerial role in developing complex projects with effieciency and quality.\n' +
    'Proven ability in managing large teams to exceed expectations. ',
  resume: '/CV-.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/marigona-hasaj-973b1816a/',
    github: 'https://github.com/marigonahasaj',
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
  {
    name: 'Geotech`s Website',
    description: 'Responsive SPA in the context of web admin panel, order management, product management, case management, etc',
    stack: ['JavaScript','React'],
    sourceCode: '#projects',
    livePreview: 'http://panel.geonet-ks.com',
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
  'HTML5',
  'Git',

]

const contact = {
  email: 'hasaj.marigona@gmail.com',
}

export { header, about, projects, skills, contact }
