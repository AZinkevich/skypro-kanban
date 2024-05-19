import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import 'react-day-picker/dist/style.css';
import { CalendarContent } from './Calendar.styled.js';

export const Calendar = ({selected, setSelected}) => {
  

  let footer = <p>Выберите срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, 'PP', {locale: ru})}</p>;
  }
  return (
    <CalendarContent
      mode="single"
      locale={ru}
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}