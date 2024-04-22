
import AddBookingBtn from '../../Components/AddBookingBtn/AddBookingBtn';
import { useCalendar } from '../../Provider/useCalendar';
import './Prenota.css'

const Prenota = () => {
    const { calendar, nextMonth, prevMonth, year, month } = useCalendar();

    const currentMonth = new Date(year, month).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    return (
        <>
            <div>
                <div className='main-table' >
                    <h2 className='title'>Booking</h2>
                    <div className="month-nav">
                        <button
                            className='btn'
                            onClick={prevMonth}>
                            <img
                                src="arrowLeft.png"
                                alt=""
                                className='arrow' />
                        </button>
                        <p>{currentMonth}</p>
                        <button
                            className='btn'
                            onClick={nextMonth}>
                            <img
                                src="arrowRigth.png"
                                alt=""
                                className='arrow' />
                        </button>
                    </div>

                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Lunedì</th>
                            <th>Martedì</th>
                            <th>Mercoledì</th>
                            <th>Giovedì</th>
                            <th>Venerdì</th>
                            <th>Sabato</th>
                            <th>Domenica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendar.map((week, rowIndex) => (
                            <tr key={rowIndex}>
                                {week.map((day, colIndex) => (
                                    <td key={colIndex} style={{ position: 'relative' }}>
                                        {day !== -1 ? <span style={
                                            {
                                                position: 'absolute',
                                                top: 0, right: 0,
                                                padding: '3px',
                                            }}>{day}</span> : ''}
                                        <AddBookingBtn/>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Prenota
