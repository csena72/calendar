import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Navbar } from "../";

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Cumpleaños de Cristian',
    notes: 'Cumpleaños de Cristian',
    start: new Date('2024-12-12'),
    end: addHours(new Date('2024-12-12'), 2),
    allDay: true,
    desc: 'Cumpleaños de Cristian',
    user: {
      _id: '123',
      name: 'Cristian'
    }
  },
  {
    title: 'Cumpleaños de Cristian',
    notes: 'Cumpleaños de Cristian',
    start: new Date('2024-12-12'),
    end: addHours(new Date('2024-12-12'), 2),
    allDay: true,
    desc: 'Cumpleaños de Cristian',
    user: {
      _id: '123',
      name: 'Cristian'
    }
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
      />

    </>
  )
}
