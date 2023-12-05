import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
console.log("sign");
  const handleSignup = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/signup', {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        username,
        password,
      });

      // Handle the API response as needed
      console.log('Signup successful:', response.data);

      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
