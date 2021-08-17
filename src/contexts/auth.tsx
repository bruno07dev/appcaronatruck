import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

interface IUser {
  name: string;
  email: string;
}

interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
      ]);

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser[1] as string));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(): Promise<void> {
    const response = await auth.sigIn();
    setUser(response.user);
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }
  function signOut(): void {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signed: !!user, user, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
