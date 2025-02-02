
export default function LandingPage() {
    const handleLogin = () => {
        window.location.href = 'https://gytpay.in/zerodha-kite/login';
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Gyt App</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
