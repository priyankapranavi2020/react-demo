import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logoSrc from "../../img/firework.png";
import '../../main_styling/main_styling.scss';


class LogoHomePage extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="logo-container">
                    <h1>Contact form</h1>
                </div>
            </BrowserRouter>
        );
    }
}

export default LogoHomePage;







