import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from 'moment';
import swal from 'sweetalert2';

function Booking() {
    let { roomid } = useParams();
    let { fromDate } = useParams();
    let { toDate } = useParams();
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const momentfromDate = moment(fromDate,'DD-MM-YYYY');
    const momenttoDate = moment(toDate, 'DD-MM-YYYY');
    const totalDays = momenttoDate.diff(momentfromDate, 'days');
    const sumAmount = room.rentPerDay*totalDays;
    const taxes = Math.round(0.28*sumAmount);
    const totalAmount = sumAmount+taxes;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/rooms/${roomid}/`);
                console.log(response.data);
                setRoom(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    async function bookRooms(){
        const bookingDetails ={
            room,
            userid:JSON.parse(localStorage.getItem('currentUser'))._id,
            fromDate,
            toDate,
            totalAmount,
            totalDays
        }
        try{
            const result = await axios.post('http://localhost:5000/api/bookings/bookroom/',bookingDetails)
            swal.fire("Room booked successfully!","success")

        }catch(error){
            console.error(error);
            swal.fire("Something went wrong, please try again later!","error")
        }
    }

    return (
        <div className="m-5">
            {loading ? (<h1>Loading...</h1>) : room ? (<div>

                <div className="row justify-content-center mt-5 bs">
                    <div className="col-md-6">
                        <h4>{room.name}</h4>
                        <img src={room.imageUrls[0]} className="bigimg" />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4>Review your Booking</h4>
                            <hr />
                            <b style={{textAlign:'right'}}>
                                <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                <p>From Date: {fromDate}</p>
                                <p>To Date: {toDate}</p>
                                <p>Max Occupancy: {room.maxPeople}</p>
                            </b>
                        </div>
                        <div>
                            <h5>Amount</h5>
                            <hr/>
                            <b style={{textAlign:'right'}}>
                            <p>1 Room x {totalDays} Night: ₹ {sumAmount}</p>
                            <p>Hotel Taxes and fees (28% GST): ₹ {taxes}</p>
                            <p>Total Amount to be paid: ₹ {totalAmount}</p>
                            </b>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={bookRooms}>Pay Now</button>
                        </div>  
                    </div>
                </div>

            </div>) : (<h1>Error...</h1>)}
        </div>
    )
}

export default Booking;