import { NavLink} from "react-router";
function Header (){
    return (
        <header className="bg-[#B99470] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-semibold">
          <a href="/" className="hover:text-gray-300">
            Coffee Shop
          </a>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-8">
            
          <NavLink
              to="/"
              className="hover:text-gray-300"
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className="hover:text-gray-300"
            >
              Product
            </NavLink>

            

            <NavLink
              to="/recipe"
              className="hover:text-gray-300"
            >
              Recipe
            </NavLink>

            <NavLink
              to="/about"
              className="hover:text-gray-300"
            >
              About
            </NavLink>

            


            
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header;