import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import 'react-day-picker/dist/style.css';
import { CalendarContent, CurrentDate } from './Calendar.styled.js';

export const Calendar = ({selected, setSelected}) => {
  
  // const today = new Date();

  let footer = <p>Выберите срок исполнения</p>;
  if (selected) {
    footer = <p>Срок исполнения: <CurrentDate>{format(selected, 'PP', {locale: ru})}</CurrentDate></p>;
  }
  return (
    <CalendarContent
      mode="single"
      locale={ru}
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      // fromDate={today}
    />
  );
}