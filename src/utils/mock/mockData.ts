import { IResume } from '../types/resume';

export const mockResume: IResume = {
  id: '',
  cvName: '',
  details: {
    jobTitle: 'React Developer',
    firstName: 'Michael',
    lastName: 'De Santa',
    email: 'testmain@gmain.com',
    phone: '555-99-11',
    country: 'USA',
    city: 'Lost Santos',
    photo: '',
  },
  summary:
    "super badass bank robber I'm a Full-stack developer with effective collaboration and communication to solve problems, improve personal performance, and contribute my best to the team I'm working with.",
  workExpeprience: [
    {
      id: '123',
      jobTitle: 'Bank Robber',
      employer: 'self-employed',
      description: 'just tried to make money',
      startEndDate: 'Aug 1998 - Present',
      city: 'Los Santos',
    },
  ],
  education: [
    {
      id: '123',
      school: 'Los Santos High School',
      degree: 'dont know',
      city: 'lost santons',
      description: 'i was a bad student',
      startEndDate: 'Sep 1989 - May 2000',
    },
  ],
  projects: [],
  links: [{ id: '123', title: 'GitHub', link: 'https://github.com/DeSanta' }],
  skills: [
    {
      id: '1',
      title: 'Planning',
      level: 80,
    },
    {
      id: '2',
      title: 'Grinding',
      level: 40,
    },
    {
      id: '3',
      title: 'JavaScript',
      level: 100,
    },
    {
      id: '4',
      title: 'Fishing',
      level: 20,
    },
  ],
  languages: [
    { id: '123', title: 'English', level: 'C2' },
    { id: '12343', title: 'Spanish', level: 'A1' },
  ],
  courses: [
    {
      id: '12312',
      course: 'Robbing Stores',
      institution: 'Piswasser',
      startEndDate: 'Apr 2007 - June 2007',
    },
    {
      id: '12',
      course: 'Lockpicking',
      institution: 'Neighbour house',
      startEndDate: 'Feb 1999 - Sep 2003',
    },
  ],
};
