import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function LoginPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div>
      <Header />
      {isLoginView ? (
        <LoginForm onSwitch={() => setIsLoginView(false)} />
      ) : (
        <SignupForm onSwitch={() => setIsLoginView(true)} />
      )}
      <Footer />
    </div>
  );
}
