import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
const CustomeDatePicker=()=>{
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [date, setDate] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={date}
        onChange={(newDate) => setDate(newDate)}
      />
    </LocalizationProvider>
  );
}
export default CustomeDatePicker