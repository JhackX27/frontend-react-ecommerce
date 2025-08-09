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
    localStorage.removeItem("userData");
  },

  //guardar datos del usuario
  setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  },

  //obtener datos del usuario guardados
  getUserData() {
    try {
      const userData = localStorage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
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
