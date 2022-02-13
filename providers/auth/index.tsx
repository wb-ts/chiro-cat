import React, { createContext, useContext, useReducer } from "react";
import {
  Action,
  authReducer,
  IInitialState,
  initialState,
} from "../../reducers/auth";

export type Dispatch = (action: Action) => void;
export const AuthContext = createContext<IInitialState | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth(): IInitialState {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export function useAuthDispatch(): Dispatch {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}
