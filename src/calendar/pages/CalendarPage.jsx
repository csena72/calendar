import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';


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
    title: 'Cumpleaños de Cacho',
    notes: 'Cumpleaños de Cacho',
    start: new Date('2024-12-12'),
    end: addHours(new Date('2024-12-12'), 2),
    allDay: true,
    desc: 'Cumpleaños de Cacho',
    user: {
      _id: '123',
      name: 'Cristian'
    }
  },
];

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer }
        culture='es'
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />

    </>
  )
}
