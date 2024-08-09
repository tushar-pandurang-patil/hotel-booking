import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';


function Profile() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const items = [
        {
            key: '1',
            label: 'Profile',
            children:
                <>
                    <br />
                    <h6>Name: {user.name}</h6>
                    <br />
                    <h6>Email: {user.email}</h6>
                    <br />
                    <h6>Admin Privileges: {user.isAdmin ? "Yes" : "No"}</h6>
                </>
        },
        {
            key: '2',
            label: 'Bookings',
            children: <MyBookings/>
        },
    ];


    useEffect(() => {
        if (!user) {
            window.location.href = "/login";
        }
    },[]);

    return (
        <Tabs defaultActiveKey="1" items={items} className='Tabselement'/>
    )
}
export default Profile;

export function MyBookings() {
    // const user = JSON.parse(localStorage.getItem("currentUser"));

    // useEffect(async () => {
    //         try{
    //         const rooms = await (await axios.post('http://localhost:5000/api/bookings/getBookingsByUserId', { userid: user._id })).data;
    //         console.log(rooms);
    //         }catch(error){
    //             console.log(error);
    //         }
    // }, []);
    return (
        <div>
            <h1>My Bookings</h1>
        </div>
    )
}