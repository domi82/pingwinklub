import type { Translation } from './types';

export const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    schedule: 'Schedule',
    contact: 'Contact',
    langToggle: 'Polski',
  },
  home: {
    hero: {
      tagline: 'We share a passion for table tennis',
      subtagline:
        'Join our classes and develop your skills under experienced coaches. Groups for children, juniors, and adults at every level.',
      cta: 'Check the schedule',
    },
    features: [
      {
        icon: '🏓',
        title: 'Classes for everyone',
        body: 'We run groups for children, juniors, and adults at every skill level. It is never too late to start!',
      },
      {
        icon: '🏅',
        title: 'Qualified coaches',
        body: 'Our coaches hold PZTS licences and have years of experience training players of all backgrounds.',
      },
      {
        icon: '🏢',
        title: 'Modern facilities',
        body: '8 Butterfly tables, professional lighting, and comfortable changing rooms are waiting for you.',
      },
    ],
    ctaBanner: {
      text: 'Ready to get started? Join Pingwin Klub today!',
      button: 'Get in touch',
    },
  },
  about: {
    heading: 'About Us',
    intro:
      'Pingwin Klub is a place where passion for table tennis meets professional coaching. Since 2012 we have been developing talents and helping players at every level reach their goals.',
    mission: {
      heading: 'Our mission',
      body: 'We cultivate a passion for table tennis in a friendly sporting environment. We believe that everyone — regardless of age or skill — can enjoy the game and keep improving.',
    },
    coaches: {
      heading: 'Our coaches',
      list: [
        {
          name: 'Anna Kowalska',
          role: 'Head Coach',
          bio: 'A former national team player and multiple Polish championship medallist. Anna leads advanced and competitive groups with extraordinary passion and precision.',
        },
        {
          name: 'Marek Wiśniewski',
          role: 'Youth Specialist',
          bio: 'Over 15 years of experience working with children and juniors. Marek specialises in technique and tactics for young players.',
        },
        {
          name: 'Joanna Nowak',
          role: 'Fitness & Footwork Coach',
          bio: 'A graduate of the Academy of Physical Education and an expert in athletic preparation. Joanna keeps all club players fit and agile.',
        },
      ],
    },
    history: {
      heading: 'Our history',
      body: 'Pingwin Klub was founded in 2012 by a group of table tennis enthusiasts. In 2015, our junior player won gold at the Masovian Championships. In 2020 we launched the Young Penguin Academy for children from age 6. Today the club counts over 200 active members and grows stronger every year.',
    },
  },
  schedule: {
    heading: 'Class schedule',
    subheading: 'Find the perfect class for you',
    note: '* Schedule is subject to change. Please contact us to confirm.',
    legend: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      open: 'Open',
    },
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
    },
    groups: {
      children: 'Children (8–12 yrs)',
      juniors: 'Juniors (13–17 yrs)',
      adults: 'Adults',
      competitive: 'Competitive',
      open: 'Open to all',
    },
    table: {
      day: 'Day',
      time: 'Time',
      level: 'Level',
      group: 'Group',
      coach: 'Coach',
    },
  },
  contact: {
    heading: 'Contact',
    form: {
      name: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      successMsg:
        'Thank you! Your message has been sent. We will get back to you as soon as possible.',
      subjectOptions: [
        'Register for classes',
        'Schedule enquiry',
        'Pricing & passes',
        'Tournament organisation',
        'Other',
      ],
    },
    info: {
      address: { label: 'Address', value: 'Krakow, Poland' },
      phone: { label: 'Phone', value: '+48 TBD' },
      email: { label: 'Email', value: 'contact@pingwinklub.pl' },
      hours: { label: 'Opening hours', value: 'Mon–Fri: 16:00–21:00\nSat: 09:00–14:00' },
    },
  },
  footer: {
    tagline: 'Pingwin Klub — Your table tennis home in Krakow',
    copyright: 'Pingwin Klub. All rights reserved.',
  },
};
