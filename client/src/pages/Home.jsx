import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;


function Home() {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [duplicateRooms, setDuplicateRooms] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/rooms/');
                setRooms(response.data);
                setDuplicateRooms(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function filterByDate(dates) {
        if (!dates) return;
        setFromDate(dates[0].format("DD-MM-YYYY"));
        setToDate(dates[1].format("DD-MM-YYYY"));

        var tempRooms = [];
      
        for (const room of duplicateRooms) {
          var availability = false;
      
          if (room.currentBookings.length > 0) {
            for ( const booking of room.currentBookings) {
              if (
                !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
                  booking.fromDate,
                  booking.toDate
                ) &&
                !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
                  booking.fromDate,
                  booking.toDate
                )
              ) {
                
                if (
                  dates[0].format("DD-MM-YYYY") !== booking.fromDate &&
                  dates[0].format("DD-MM-YYYY") !== booking.toDate &&
                  dates[1].format("DD-MM-YYYY") !== booking.fromDate &&
                  dates[1].format("DD-MM-YYYY") !== booking.toDate
                ) {
                  availability = true;
                }
              }
            }
          } else {
            availability = true;
          }
      
          if (availability === true) {
            tempRooms.push(room);
          }
        }
      
        setRooms(tempRooms);
      }

    return (
        <div className='container home'>

            <div className='row'>
                <div className="col-md-3">
                    <RangePicker className='datepicker1 mt-5' format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                {loading ? (<h1>Loading...</h1>) : rooms.length > 1 ? (rooms.map((room) => {
                    return <div className="col-md-9 mt-2">
                        <Room room={room} fromDate={fromDate} toDate={toDate} />
                    </div>
                })) : (<h1>Error...</h1>)}
            </div>
        </div>
    );
}

export default Home;
