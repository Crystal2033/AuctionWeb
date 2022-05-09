const TOKEN_KEY = "token"
export const saveSession = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
}