const TOKEN_KEY = "token"

export const saveSession = (token: string) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export const getSession = () => {
    if (typeof window !== "undefined") {
        return { token: localStorage.getItem(TOKEN_KEY) || '' };
    }
    return null;
}