import { create } from 'zustand';

interface TokenStore {
  token: string;
  setToken: (tonekValue: string) => void;
}

const useTokenStore = create<TokenStore>((set) => ({
  token: '',
  setToken: (tokenValue) => set(() => ({ token: tokenValue })),
}));

export default useTokenStore;
