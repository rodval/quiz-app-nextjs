import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenStore {
  token: string;
  setToken: (tonekValue: string) => void;
}

const UseTokenStore = create<TokenStore>()(
  persist(
    (set) => ({
      token: '',
      setToken: (tokenValue) => set(() => ({ token: tokenValue })),
    }),
    { name: 'token-storage' }
  )
);

export default UseTokenStore;
