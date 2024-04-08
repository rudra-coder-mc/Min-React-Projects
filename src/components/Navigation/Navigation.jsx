import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <nav className="w-full flex items-center justify-center gap-3 p-4 bg-gray-900 text-white">
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
        </nav>
      </div>
    </>
  );
};
export default Navigation;
