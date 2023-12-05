const Footer = () => {
    return (
      <footer className='p-8 flex flex-col  items-center gap-3 bg-purple-300 opacity-75'>
        <h2 className='footer-logo font-bold lowercase italic text-2xl'>
          Balanced<span className='text-purple-500'>Bites</span>
        </h2>
        <p>&copy; {new Date().getFullYear()} BalancedBites. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  