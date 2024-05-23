const header = {
  homepage: 'https://pswami.github.io',
  title: 'SWAMI.',
}

const about = {
  name: 'Pauras Swami',
  role: 'Software Engineer',
  description:
    'I’m <b>Pauras Swami</b>, an experienced software engineer specializing in full-stack development, focused on delivering high-quality software.',
  resume: 'https://example.com',
  social: {
    email: 'pauras53@gmail.com',
    linkedin: 'www.linkedin.com/in/pauraswami',
    github: 'https://github.com/pswami',
  },
}

const projects = [
  {
    name: 'AI Database Chatbot',
    cover: 'https://github.com/pswami/pswami.github.io/assets/7545796/26bec0a5-fa0e-44cf-82e4-73759488db0e',
    description: 'A chatbot that can answer questions about a database schema.',
    stack: ['Python', 'Langchain', 'OpenAI'],
  },
  {
    name: 'Next.js + Rails Saas Boilerplate',
    cover: 'https://github.com/pswami/pswami.github.io/assets/7545796/9d8f5ac4-ba31-4cc5-a84a-afb95958302e',
    description: 'A boilerplate for a SaaS application, reducing project initiation time future side projects by providing ready-to-use authentication, Stripe integration and landing page',
    stack: ['Next.js', 'Rails', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    sourceCode: 'https://github.com/pswami/nextjs-rails-boilerplate',
  },
  {
    name: 'BracketBattle',
    cover: 'https://pbs.twimg.com/media/Ftuz9qYaIAEelOW?format=jpg&name=4096x4096',
    description: 'A platform for hosting bracket-style tournaments. Reached ~100 users',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://bracketbattle.app',
  },
  {
    name: 'FanDuel Lineup Optimizer',
    cover: 'https://www-assets.kolide.com/assets/inventory/device_properties/icons/chrome-extensions-4312d461ebc9499f478fcbe6b6cce5a1c6438636.png',
    description: 'A Chrome extension to optimize FanDuel lineups, collaborated with RotoGrinders (acquired by them).',
    stack: ['Javascript'],
  },
  {
    name: 'Swami Ayurveda',
    cover: 'https://github.com/pswami/pswami.github.io/assets/7545796/0ff73fdb-e0f0-4b9a-ac63-787cc787abf5',
    description: 'An business site for an Ayurvedic doctor, providing information about services and contact information.',
    stack: ['React', 'Node.js', 'MongoDB'],
    livePreview: 'https://swami.life/'
  },
]

const skills = {
  'frameworks/libraries': ['Ruby on Rails', 'React', 'Redux', 'Next.js'],
  languages: ['JavaScript/TypeScript', 'Solidity', 'HTML', 'Python', 'Java', 'C'],
  tools: ['Git', 'CI/CD', 'Flow Blockchain', 'Docker', 'Redis', 'Langchain'],
  testing: ['Jest', 'Enzyme', 'Cypress'],
  styles: ['SASS', 'Tailwind CSS'],
  database: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  infrastructure: ['AWS', 'Fly.io', 'Oracle Cloud', 'Kafka'],
};

const contact = {
  email: 'pauras53@yahoo.com',
}

export { header, about, projects, skills, contact }
