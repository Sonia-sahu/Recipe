import { NavLink } from "react-router-dom";

const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  searchField,
  savedItems,
}) => {
  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "#f43f8b" : null,
      fontFamily: isActive ? 'Helvetica, monospace, Garamond' : 'inherit',
    };
  };

  return (
    <div className='navbar flex justify-between items-center container mx-auto py-8 flex-col gap-5 lg:flex-row lg:gap-0'>
      <h2 className='logo text-3xl font-bold italic lowercase'>
        Balanced<span className='text-purple-500'>Bites</span>
      </h2>
      <form className='search-bar' onSubmit={searchHandler}>
        <input
          ref={searchField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type='search'
          placeholder='Search recipe...'
          required
          className='bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg shadow-purple-100-100 lg:w-96 focus:shadow-purple-200-200 duration-300'
        />
      </form>
      <ul className='menu flex gap-5'>
        <li>
          <NavLink
            style={navActiveStyle}
            end
            to='/'
            className='text-lg text-gray-400 hover:text-gray-600 duration-300 outline-none' 
            
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActiveStyle}
            to='/favourites'
            className='text-lg text-gray-400 hover:text-gray-600 duration-300 outline-none'
          >
            Favourites
            <span className='favourites-count text-sky-400 font-bold ml-1'>
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
