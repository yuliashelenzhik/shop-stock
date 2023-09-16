interface Product {
  id?: number;
  image?: string;
  title?: string;
  desc?: string;
  category?: string;
  price?: number;
}

interface User {
  username?: string;
  password?: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

type TokenResponse = {
  token: string;
};
