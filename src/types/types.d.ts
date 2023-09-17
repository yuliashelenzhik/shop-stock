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

// interface ModalState {
//   modals: Record<string, boolean>;
// }

interface ModalState {
  modal: string;
  data: any;
  isVisible: boolean;
}
