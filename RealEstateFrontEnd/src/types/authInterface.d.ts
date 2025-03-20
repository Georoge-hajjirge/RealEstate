export interface AuthContextType {
    user: any;
    token: string | null;
    login: (token: string, userId: string) => void;
    logout: () => void;
  }