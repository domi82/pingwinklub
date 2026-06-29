export interface Translation {
  nav: {
    home: string;
    about: string;
    schedule: string;
    contact: string;
    langToggle: string;
  };
  home: {
    hero: {
      tagline: string;
      subtagline: string;
      cta: string;
    };
    features: Array<{
      icon: string;
      title: string;
      body: string;
    }>;
    ctaBanner: {
      text: string;
      button: string;
    };
  };
  about: {
    heading: string;
    intro: string;
    mission: {
      heading: string;
      body: string;
    };
    coaches: {
      heading: string;
      list: Array<{
        name: string;
        role: string;
        bio: string;
      }>;
    };
    history: {
      heading: string;
      body: string;
    };
  };
  schedule: {
    heading: string;
    subheading: string;
    note: string;
    legend: {
      beginner: string;
      intermediate: string;
      advanced: string;
      open: string;
    };
    days: Record<string, string>;
    groups: {
      children: string;
      juniors: string;
      adults: string;
      competitive: string;
      open: string;
    };
    table: {
      day: string;
      time: string;
      level: string;
      group: string;
      coach: string;
    };
  };
  contact: {
    heading: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      successMsg: string;
      subjectOptions: string[];
    };
    info: {
      address: { label: string; value: string };
      phone: { label: string; value: string };
      email: { label: string; value: string };
      hours: { label: string; value: string };
    };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}
