import React from 'react';
import batman from '../../assets/images/batman.png';

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px'
}

const centerImg = {
    display: 'block',
    margin: '40px auto'
}

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2} > Oops, cette page n'existe pas ! </h2>
                <img style={centerImg} src={batman} width="50%  " alt="error page" />
            </div>
        </div>
    )
}

export default ErrorPage
