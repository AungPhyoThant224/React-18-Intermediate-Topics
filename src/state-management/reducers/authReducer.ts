interface Login {
  type: "LOGIN";
  user: string;
}

interface Logout {
  type: "LOGOUT";
}

export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return (state = action.user);
  if (action.type === "LOGOUT") return (state = "");
  return "";
};

export default authReducer;
