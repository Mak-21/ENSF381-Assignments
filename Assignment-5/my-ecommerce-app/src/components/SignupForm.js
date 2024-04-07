import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const navigate = useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const validateForm = ()=>{
    if (!username || !password || !confirmPassword || !email) {
        setMessage('Please fill in all fields.');
        return false;
      }
      if (password !== confirmPassword) {
        setMessage('Passwords do not match.');
        return false;
      }

      return true
  }


  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const is_validated = validateForm()
  
    if(!is_validated) return false
    

   
    try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email }),
        });
        const data = await response.json();
        setMessage(data.message);

        if(response.status == 201){
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
        }
       
       
      } catch (err) {
        if(err.response && err.response.data){
            setMessage(err.response.data.message)
        }else{
            setMessage("Something went wrong.Please try again to sign up")
        }
      }
   
   
  };

  return (
    <div>
      <h2>Signup </h2>
      {Message && <div style={{ color: 'red' }}>{Message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>

      <button onClick={()=>navigate('/login')}>Switch to login</button>


        <br />

        <p>© 2024 Your Company Name.All rights reserved.</p>
    </div>
  );
}

export default SignupPage;
