import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarContent = styled(DayPicker)`
  width: 168px;
  font-size: 10px;

  .rdp-nav_icon {
    width: 12px;
    height: 12px;
  }

  .rdp-caption_label {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: #94a6be;
    text-transform: capitalize;
  }

  .rdp-button_reset.rdp-button.rdp-day {
    font-size: 10px;
    color: #94a6be;
    /* width: 28px;
    height: 28px; */
    padding-left: 0;
    border: none;
    &:focus {
      outline: none;
    }
  }
  /* .rdp-button_reset.rdp-button.rdp-day.rdp-day_disabled {
    color: #94a6be;
  } */

  .rdp-head_cell {
    font-size: 10px;
    color: #94a6be;
    text-transform: none;
  }
  .rdp-button_reset.rdp-button.rdp-day.rdp-day_selected {
    color: #fff;
    background-color: #94a6be;
    border: none;
  }
  /* .rdp-tbody {
    width: 168px;
    height: 172px;
  } */
`;

export const CurrentDate = styled.span`
  color: #000;
`;
