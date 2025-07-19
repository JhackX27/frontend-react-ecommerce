import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Footer } from "../../assets/components/layout/Footer";
import { DEMO_USERS } from "../../utils/constants";

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
    confirmPassword: "",
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

  //usar usuarios de prueba
  const useDemo = (userType) => {
    const demoUser = DEMO_USERS[userType];
    setFormData({
      ...formData,
      username: demoUser.username,
      password: demoUser.password,
    });
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
            <h2 className="font-Primary-Poppins text-3xl font-semibold text-center">
              {isLoginMode ? "Login" : "Register"}
            </h2>
          </div>

          {/*usuarios de prueba */}
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">Usuarios de prueba:</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => useDemo("ADMIN")}
                className="text-xs bg-blue-600 text-white px-2 py-1 rounded"
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => useDemo("USER")}
                className="text-xs bg-green-600 text-white px-2 py-1 rounded"
              >
                Usuario
              </button>
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
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/*form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/*campos que solo aparecen en Register */}
            {!isLoginMode && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                />
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                >
                  <option
                    value=""
                    disabled
                    className=""
                  >
                    Select gender
                  </option>
                  <option value="male">Masculine</option>
                  <option value="female">Masculine</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">I prefer not to say</option>
                </select>

                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
                />
              </>
            )}

            {/* Campos que aparecen en AMBOS (Login y Register) */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
            />

            {/* Campo que SOLO aparece en Register */}
            {!isLoginMode && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="font-Tertiary-Inter w-full p-3 border-b-2 border-secondary-dark outline-none focus:border-primary-light placeholder-secondary-dark"
              />
            )}

            {/* Forgot Password - SOLO en Login */}
            {isLoginMode && (
              <div className="text-right">
                <p
                  className="font-Primary-Poppins flex items-center text-sm text-secondary-dark
               hover:text-primary-light hover:underline hover:font-semibold
               cursor-pointer"
                >
                  Forgot Password?
                </p>
              </div>
            )}

            {/* Botón que cambia según el modo */}
            <button
              type="submit"
              className="font-Tertiary-Inter w-full bg-primary-light text-secondary-accent 
                px-8 py-3 rounded-md flex items-center justify-center
                gap-2 hover:bg-primary-accent hover:scale-105 transition-all ease-in"
            >
              {isLoginMode ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch link */}
          <p className="font-Tertiary-Inter text-center text-secondary-dark mt-4">
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-secondary-dark
               hover:text-primary-light hover:underline hover:font-semibold
               cursor-pointer"
            >
              {isLoginMode ? "Sign Up" : "Login"}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
