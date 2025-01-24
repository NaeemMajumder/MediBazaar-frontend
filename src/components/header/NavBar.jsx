import { Avatar, Badge, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import CartSiteBar from "./CartSideBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthProviderHook from "../../customHooks/AuthProviderHook";
import UseCart from "../../customHooks/UseCart";

const NavBar = () => {
  let { user, setUser, signOutUser, handleError } = AuthProviderHook();
  const [,cartData] = UseCart();
  // console.log(cartData)
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // signout function
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate("/login");
        alert("signout successful");
      })
      .catch(handleError);
  };

  let links = (
    <>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="font-semibold text-[#164193]">
          <NavLink to={"/"}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="font-semibold text-[#164193]">
          <NavLink to="/categories">Categories</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="font-semibold text-[#164193]">
          <NavLink to="/shop">Shop</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="font-semibold text-[#164193]">
          Language
        </Navbar.Link>
      </Navbar.Collapse>
    </>
  );
  return (
    <nav className="bg-[#AAEFEE] sticky top-0 z-50">
      <Navbar fluid rounded className="max-w-[1350px] m-auto bg-transparent">
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            className="mr-3 h-8 md:h-12"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-[#164193] dark:text-[#1ca288] tracking-wide">
            Medi<span className="text-[#1ca288]">Bazaar</span>
          </span>
        </Navbar.Brand>
        <div className="flex gap-2 md:order-2">
          {/* shopping cart */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <GrCart className="w-6 h-6" />
            {cartData && (
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900">
                {cartData?.length}
              </div>
            )}
          </button>

          <>
            <CartSiteBar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              toggleSidebar={toggleSidebar}
              cartData={cartData}
            />
          </>

          {/* --------------------- */}

          {user?.email ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item><Link to={"/dashboard"}>Dashboard</Link></Dropdown.Item>
              <Dropdown.Item>
                <Link to="/myProfile">Update Profile</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <button className="relative px-5 text-md font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
              <Link to="/login">Join Us</Link>
            </button>
          )}

          <Navbar.Toggle />
        </div>
        {links}
      </Navbar>
    </nav>
  );
};

export default NavBar;
