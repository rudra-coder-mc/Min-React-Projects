import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="w-full flex items-cente justify-around bg-gray-900 text-white">
        <nav className="w-4/5 flex items-center justify-center gap-3 p-4 ">
          <div className="hover:text-black hover:bg-white p-1">
            <NavLink to="">Home</NavLink>
          </div>
          <div className="hover:text-black hover:bg-white p-1">
            <NavLink to="bgChanger">Bg Changer</NavLink>
          </div>
          <div className="hover:text-black hover:bg-white p-1">
            <NavLink to="passwordGenerator">Password Generator</NavLink>
          </div>
          <div className="hover:text-black hover:bg-white p-1">
            <NavLink to="currencyConvertor">Currency Convertor</NavLink>
          </div>
          <div className="hover:text-black hover:bg-white p-1">
            <NavLink to="card">card</NavLink>
          </div>
        </nav>
        <div className="w-1/5 flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
        <button className="bg-blue-600 p-1 rounded-lg">
          <NavLink to="Login">Login</NavLink>
        </button>
        </div>
        
      </div>
    </>
  );
};
export default Navigation;
