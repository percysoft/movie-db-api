import { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Title } from "./index.style";

interface IIDateComponent {
  label?: string;
  getValue: (value: Date | null) => void;
  placeholder?: string;
}

export const DateComponent = ({
  label = "Seleccionar fecha",
  getValue,
  placeholder='Fecha'
}: IIDateComponent) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange: ReactDatePickerProps["onChange"] = (date) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      getValue(date);
    }
  };

  return (
    <Container>
      <Title>{label}</Title>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
      />
    </Container>
  );
};
