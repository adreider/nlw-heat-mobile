import React, { createContext, useContext, useState } from "react";
import * as AuthSessions from 'expo-auth-session';

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null,
  isSignIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type AuthResponse = {
  token: string;
  user: User;
}

type AuthorizationReponse = {
  params: {
    code?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const CLIENT_ID = '0cc0e4f417c2275e9f87';
  const SCOPE = 'read:user';

  async function signIn() {
    setIsSignIn(true);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
    const { params } = await AuthSessions.startAsync({ authUrl }) as AuthorizationReponse;
  
    if (params && params.code) {
      // const authResponse = await 
    }

    setIsSignIn
  }

  async function signOut() {

  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isSignIn }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }