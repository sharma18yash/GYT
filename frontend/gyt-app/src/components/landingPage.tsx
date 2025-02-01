import React from 'react';

class LandingPage extends React.Component {
    handleLogin = () => {
        window.location.href = 'https://gytpay.in/zerodha-kite/login';
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Welcome to Gyt App</h1>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default LandingPage;
