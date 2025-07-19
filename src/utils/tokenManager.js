export const tokenManager = {
  //guardar
  setTokens(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }
  },

  //obtener access token
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },

  //obtener refresh token
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },

  //limpiar tokens
  clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },

  //verificar si expiro
  isTokenExpired(token) {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  },

  //obtener datos del usuario
  getUserFromToken(token) {
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        id: payload.id || payload.userId,
        username: payload.username,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };
    } catch {
      return null;
    }
  },
};
