import React, { Component, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import '../Start/Start.style.scss';

class Start extends Component {


    render() {
        return (
            <div className='start'>
                <Helmet>
                    <title>Tic-Tac-Toe | Home</title>
                </Helmet>
                <div className='start-container'>
                    <div className='title'>
                        <h1>Tic Tac Toe</h1>
                    </div>
                    <Link className="link" to='/game'>
                        <button>Start Game</button>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Start;