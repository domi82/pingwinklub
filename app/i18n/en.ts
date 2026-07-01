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
        icon: 'paddle',
        title: 'Classes for everyone',
        body: 'We run groups for children, juniors, and adults at every skill level. It is never too late to start!',
      },
      {
        icon: 'coach',
        title: 'Qualified coaches',
        body: 'Our coaches hold PZTS licences and have years of experience training players of all backgrounds.',
      },
      {
        icon: 'facility',
        title: 'Modern facilities',
        body: 'New table tennis tables, professional lighting, and comfortable changing rooms are waiting for you.',
      },
    ],
    ctaBanner: {
      text: 'Ready to get started? Join PingWin today!',
      button: 'Get in touch',
    },
  },
  about: {
    heading: 'About Us',
    intro:
      'PingWin is a place where passion for table tennis meets professional coaching. For more than 15 years we have been developing talents and helping players at every level reach their goals.',
    mission: {
      heading: 'Our mission',
      body: 'We cultivate a passion for table tennis in a friendly sporting environment. We believe that everyone — regardless of age or skill — can enjoy the game and keep improving.',
    },
    coaches: {
      heading: 'Our coaches',
      list: [
        {
          name: 'Antonina Szymańska',
          role: 'Head Coach',
          bio: 'A former national team player and multiple Polish championship medallist. Antonina leads advanced and competitive groups with extraordinary passion and precision.',
        },
      ],
    },
    history: {
      heading: 'Our history',
      body: 'PingWin was founded more than 15 years ago by Antonina Szymańska. In 2020 we launched the Young Penguin Academy for children in school age. Today the club counts many active members and grows stronger every year.',
    },
  },
  schedule: {
    heading: 'Class schedule',
    subheading: 'Find the perfect class for you',
    note: '* Schedule is subject to change. Please contact us to confirm. To schedule a trial lesson, use the app available at kspingwin.pl.',
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
      email: { label: 'Email', value: 'contact@pingwinklub.pl' },
      note:'To schedule a trial or individual lesson, use the app available at kspingwin.pl.'
    },
  },
  footer: {
    tagline: 'PingWin Klub — Your table tennis home in Krakow',
    copyright: 'PingWin Klub. All rights reserved.',
  },
};
