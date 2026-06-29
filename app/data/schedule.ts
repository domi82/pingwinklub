export type Level = 'beginner' | 'intermediate' | 'advanced' | 'open';
export type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';
export type GroupKey = 'children' | 'juniors' | 'adults' | 'competitive' | 'open';

export interface ClassEntry {
  day: Day;
  time: string;
  level: Level;
  group: GroupKey;
  coach: string;
}

export const schedule: ClassEntry[] = [
  { day: 'monday',    time: '16:00–17:30', level: 'beginner',     group: 'children',    coach: 'J. Nowak'      },
  { day: 'monday',    time: '18:00–19:30', level: 'intermediate', group: 'juniors',     coach: 'M. Wiśniewski' },
  { day: 'tuesday',   time: '17:00–18:30', level: 'beginner',     group: 'adults',      coach: 'A. Kowalska'   },
  { day: 'tuesday',   time: '19:00–20:30', level: 'advanced',     group: 'competitive', coach: 'A. Kowalska'   },
  { day: 'wednesday', time: '16:00–17:30', level: 'beginner',     group: 'children',    coach: 'J. Nowak'      },
  { day: 'wednesday', time: '18:00–19:30', level: 'open',         group: 'open',        coach: '—'             },
  { day: 'thursday',  time: '17:00–18:30', level: 'intermediate', group: 'adults',      coach: 'M. Wiśniewski' },
  { day: 'thursday',  time: '19:00–21:00', level: 'advanced',     group: 'competitive', coach: 'A. Kowalska'   },
  { day: 'friday',    time: '16:00–17:30', level: 'beginner',     group: 'juniors',     coach: 'J. Nowak'      },
  { day: 'friday',    time: '18:00–19:30', level: 'intermediate', group: 'adults',      coach: 'M. Wiśniewski' },
  { day: 'saturday',  time: '09:00–11:00', level: 'open',         group: 'open',        coach: '—'             },
  { day: 'saturday',  time: '11:30–13:00', level: 'beginner',     group: 'children',    coach: 'J. Nowak'      },
];
