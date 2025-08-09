import { useState } from "react";
<<<<<<< HEAD
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { Footer } from "../../assets/components/layout/Footer.jsx";
import { Circle } from "lucide-react";
=======
import { Footer } from "../../assets/components/layout/Footer.jsx";
>>>>>>> rama-nueva

export const Login = () => {
  //estado para alternar entre Login y Register
  const [isLoginMode, setIsLoginMode] = useState(true);

  //un solo estado para todos los campos del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    confirmPassword: "",
  });

  const { login, loading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //ruta para dirigir despues del login
  const from = location.state?.from?.pathname || "/";

  //función para manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    //limpiar error al escribir
    if (error) {
      clearError();
    }
  };

  //un solo handlesubmit para ambos casos
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      //login
      const result = await login(formData.username, formData.password);
      if (result.success) {
        navigate(from, { replace: true });
      }
    } else {
      //register, simulacion
      console.log("Haciendo REGISTER con: Dummy");
      /*
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
        confirmPassword: formData.confirmPassword
        */
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <div
        className="/*propiedades moviles*/
       flex-1 px-4 pb-8 pt-[184px] bg-secondary-light
      
      /*propiedades tablet*/
      max-iphone:pt-[72px]

      /*propiedades pc*/
      max-tablet:w-full 
      "
      >
        <div className="bg-white mx-auto my-8 p-8 max-w-lg rounded-md shadow-lg">
          {/*header titles */}
          <div className="flex justify-center mb-4">
            <h2 className="font-Primary-Poppins text-3xl font-semibold text-center text-primary-dark">
              {isLoginMode ? "Login" : "Register"}
            </h2>
          </div>
          {/* Instrucciones para DummyJSON */}
          <div className="mb-4 p-4 bg-state-info/10 border border-state-info/20 rounded-lg">
            <p className="text-sm text-state-info mb-2 font-Tertiary-Inter">
              Para probar:
            </p>
            <div className="text-xs text-secondary-dark font-Tertiary-Inter">
              <p>
                Username:{" "}
                <code className="bg-secondary-light px-1 rounded text-primary-dark">
                  kminchelle
                </code>
              </p>
              <p>
                Password:{" "}
                <code className="bg-secondary-light px-1 rounded text-primary-dark">
                  0lelplR
                </code>
              </p>
            </div>
          </div>
          {/*tab controls */}
          <div className="relative flex h-12 mb-6 bg-primary-light rounded-full overflow-hidden">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`w-1/2 font-Secondary-Gidole text-lg font-medium transition-all z-10 ${
                isLoginMode ? "text-primary-dark" : "text-secondary-accent"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`w-1/2 font-Secondary-Gidole text-lg font-medium transition-all z-10 ${
                !isLoginMode ? "text-primary-dark" : "text-secondary-accent"
              }`}
            >
              Sign Up
            </button>
            <div
              className={`absolute top-0 h-full w-1/2 rounded-full bg-secondary-light ${
                isLoginMode ? "left-0" : "left-1/2"
              } `}
            ></div>
          </div>
          {/*error Message */}
          {error && (
            <div className="bg-state-danger/10 border border-state-danger/20 text-state-danger px-4 py-3 rounded-lg mb-4">
              <div className="flex items-center">
                <Circle />
                <span className="font-Tertiary-Inter">{error}</span>
              </div>
            </div>
          )}
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Campos de Register */}
            {!isLoginMode && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark disabled:opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark disabled:opacity-50"
                />
              </>
            )}

            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder={isLoginMode ? "Username" : "Username"}
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark disabled:opacity-50"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark disabled:opacity-50"
            />

            {!isLoginMode && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
                className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark disabled:opacity-50"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className={`font-Tertiary-Inter w-full py-3 rounded-md transition-all flex items-center justify-center gap-2 ${
                loading
                  ? "bg-secondary-dark cursor-not-allowed text-secondary-accent"
                  : "bg-primary-light text-secondary-accent hover:bg-primary-accent hover:scale-105"
              }`}
            >
              {loading && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
              )}
              {loading ? "Procesando..." : isLoginMode ? "Login" : "Sign Up"}
            </button>
          </form>
          {/*switch mode */}
          <p className="font-Tertiary-Inter text-center text-secondary-dark mt-4">
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}

            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              disabled={loading}
              className="text-secondary-dark hover:text-primary-light hover:underline disabled:opacity-50"
            >
              {isLoginMode ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
