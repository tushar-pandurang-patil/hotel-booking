import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";

function Room({ room, fromDate, toDate }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row bs auto blocks">
            <div className="col-md-4">
                <img src={room.imageUrls[0]} className="smallimg" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <b>
                    <p>
                        {" "}
                        <p>Max Occupancy: {room.maxPeople}</p>
                    </p>
                </b>
                <div style={{ float: "right" }}>

                {(fromDate && toDate) && (
                <Link to={`/book/${room._id}/${fromDate}/${toDate}`}><button className="btn btn-primary">Book now</button></Link>
                )}
                    <button className="btn btn-primary m-2" onClick={handleShow}>View Details</button>
                </div>
            </div>

            <Modal className="roomModal" show={show} onHide={handleClose} size="lg"  >
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel='' fade>
                        {room.imageUrls.map(url => {
                            return <Carousel.Item>
                                <img className="d-block w-100 bigimg"
                                    src={url}
                                />
                            </Carousel.Item>
                        })}
                    </Carousel>
                    <p>
                        <br/>
                        {room.desc}
                        <br/>
                        Max Occupancy: {room.maxPeople}
                        <br/>
                        Fees per night: ₹ {room.rentPerDay}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Room;