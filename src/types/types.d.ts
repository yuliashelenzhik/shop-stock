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

interface TokenResponse {
  token: string;
}

interface ModalState {
  modal: string;
  data?: any;
  isVisible: boolean;
}

interface NewUser {
  email: string;
  username: string;
  password: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  address?: {
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
    geolocation?: {
      lat?: string;
      long?: string;
    };
  };
  phone?: string;
}
