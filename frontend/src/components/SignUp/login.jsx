import { useState } from 'react';
import './Login.css'; // Make sure this file exists and is correctly placed

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError(false);
    setPasswordError(false);

    // Simple validation
    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      valid = false;
    }

    if (!password || password.length < 8) {
      setPasswordError(true);
      valid = false;
    }

    if (valid) {
      // Process login/signup logic
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email / Mobile Number</label>
            <input
              type="text"
              className={emailError ? 'error' : ''}
              placeholder="Enter your email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error-text">Incorrect email or mobile number</span>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              className={passwordError ? 'error' : ''}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error-text">Password must be at least 8 characters long</span>}
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="alternative-login">
          <p>OR</p>
          <button className="facebook-btn">Login with Facebook</button>
          <button className="google-btn">Login with Google</button>
        </div>
        <h2>Sign up for a new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email / Mobile Number</label>
            <input
              type="text"
              className={emailError ? 'error' : ''}
              placeholder="Enter your email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error-text">Please enter a valid email or mobile number</span>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              className={passwordError ? 'error' : ''}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error-text">Password must be at least 8 characters long</span>}
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
