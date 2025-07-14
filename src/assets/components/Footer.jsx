import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="font-Primary-Poppins text-4xl font-bold text-white">
              Suscribe Our Newsletter
            </h2>
            <form
              action=""
              className="md:w-1/3 w-full mt-8 md:mt-0 relative"
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="font-Tertiary-Inter py-4 px-4 rounded shadow-md w-full bg-gray-50"
              />
              <button className="font-Tertiary-Inter bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <img
                src="https://placecats.com/100/30"
                alt="Logo"
                className="h-10 object-cover"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer hover:bg-zinc-400 transition-all ease-in active:scale-105"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer hover:bg-zinc-400 transition-all ease-in active:scale-105"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer hover:bg-zinc-400 transition-all ease-in active:scale-105"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer hover:bg-zinc-400 transition-all ease-in active:scale-105"
                />
              </div>
            </div>
            <div>
              <h2 className="font-Secondary-Gidole text-2xl font-semibold my-4">
                Pages
              </h2>
              <ul className="font-Tertiary-Inter">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-Secondary-Gidole text-2xl font-semibold my-4">
                Category
              </h2>
              <ul className="font-Tertiary-Inter">
                <li>
                  <Link to="/">Graphic Cards</Link>
                </li>
                <li>
                  <Link to="/">Processors</Link>
                </li>
                <li>
                  <Link to="/">Memory</Link>
                </li>
                <li>
                  <Link to="/">Storage</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-Secondary-Gidole text-2xl font-semibold my-4">
                Contact
              </h2>
              <p>Address: 123 Main St, Anytown, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4 text-white">
        <p>Developed by Jhack Alzamora</p>
      </div>
    </footer>
  );
};
