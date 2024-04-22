import React, { FC, createContext, useContext, useEffect, useState } from 'react';

// Definiamo il tipo per il contesto del calendario
interface CalendarContextType {
    calendar: (number | string)[][];
    year: number;
    month: number;
    nextMonth: () => void;
    prevMonth: () => void;
}

// Creiamo il contesto del calendario
const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

// Hook personalizzato per utilizzare il contesto del calendario
export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
};

// Proprietà del provider del calendario
interface CalendarProviderProps {
    children: React.ReactNode;
}

// Componente provider del calendario
export const CalendarProvider: FC<CalendarProviderProps> = ({ children }) => {
    const [calendar, setCalendar] = useState<(number | string)[][]>([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());

    useEffect(() => {
        setCalendar(generateCalendar(year, month));
    }, [year, month]);


    const generateCalendar = (year: number, month: number) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        const weeks: (number | string)[][] = [[]];
        let currentWeek = 0;

        // Aggiungiamo i giorni vuoti all'inizio del mese
        for (let i = 0; i < firstDayOfMonth; i++) {
            weeks[currentWeek].push("");
        }

        // Aggiungiamo i giorni del mese
        for (let i = 1; i <= lastDateOfMonth; i++) {
            weeks[currentWeek].push(i);
            if (weeks[currentWeek].length === 7) {
                // Se la settimana è completa, passiamo alla successiva
                weeks.push([]);
                currentWeek++;
            }
        }

        // Aggiungiamo i giorni vuoti alla fine del mese
        while (weeks[currentWeek].length < 7) {
            weeks[currentWeek].push("");
        }

        // Rimuoviamo la prima settimana se è vuota
        if (weeks[0].length === 0) {
            weeks.shift();
        }

        return weeks;
    };



    // Funzione per passare al mese successivo
    const nextMonth = () => {
        let newYear = year;
        let newMonth = month + 1;

        // Se il mese è dicembre, passiamo all'anno successivo e il mese diventa gennaio
        if (newMonth === 12) {
            newYear++;
            newMonth = 0; // Gennaio è il mese 0 in JavaScript
        }

        setYear(newYear);
        setMonth(newMonth);
        setCalendar(generateCalendar(newYear, newMonth));
    };

    // Funzione per passare al mese precedente
    const prevMonth = () => {
        let newYear = year;
        let newMonth = month - 1;

        if (newMonth < 0) {
            newYear--;
            newMonth = 11; // Dicembre è il mese 11 in JavaScript
        }

        setYear(newYear);
        setMonth(newMonth);
        setCalendar(generateCalendar(newYear, newMonth));
    };

    // Restituiamo il provider del contesto del calendario
    return (
        <CalendarContext.Provider value={{ calendar, nextMonth, prevMonth, year, month }}>
            {children}
        </CalendarContext.Provider>
    );
};
