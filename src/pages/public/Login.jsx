import { useState } from "react";
import { Footer } from "../../assets/components/Footer.jsx";

export const Login = () => {
  // Estado para alternar entre Login y Register
  const [isLoginMode, setIsLoginMode] = useState(true);

  // UN SOLO estado para TODOS los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UN SOLO handleSubmit para ambos casos
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginMode) {
      // Lógica de LOGIN - solo usa email y password
      console.log("Haciendo LOGIN con:", {
        email: formData.email,
        password: formData.password,
      });
      // Aquí harías: fetch('/api/auth/login', { method: 'POST', body: ... })
    } else {
      // Lógica de REGISTER - usa todos los campos
      console.log("Haciendo REGISTER con:", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      // Aquí harías: fetch('/api/auth/register', { method: 'POST', body: ... })
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
          {/* Header Titles */}
          <div className="flex justify-center mb-4">
            <h2 className="font-Primary-Poppins text-3xl font-semibold text-center">
              {isLoginMode ? "Login" : "Register"}
            </h2>
          </div>

          {/* Tab controls */}
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

          {/* UN SOLO FORMULARIO que cambia dinámicamente */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Campos que SOLO aparecen en Register */}
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
