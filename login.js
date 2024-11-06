import React from 'react';

function Login() {
  const googleLogin = () => {
    window.open('http://localhost:5000/api/users/auth/google', '_self');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
