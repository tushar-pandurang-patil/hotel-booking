import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage(){
    return (
        <div class="row landing">
            <div className="col-md-12 text-center">
                <h1>Welcome to hotels.com</h1>
                <Link to='/home'>
                <br/>
                <br/>
                <Button variant="outline-primary">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;