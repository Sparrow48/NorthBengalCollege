'use client';
import { signOut } from 'next-auth/react';

export const Logout = () => {
  return (
    <button onClick={signOut} className="logout-button">
      Logout
    </button>
  );
};
