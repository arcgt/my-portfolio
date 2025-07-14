import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {

  return (
    <>
      <nav className='flex flex-col fixed top-0 left-0 z-[10] h-36  gap-4 w-full items-center justify-center bg-white shadow-sm'>
        <div className='flex flex-row items-center gap-16'>
          <Link to="/"><p className='font-light text-black'>TIANHONG GAN</p></Link>
        </div>
        <div className="flex flex-row bg-black w-4/5 h-1/100"> </div>
        <div className='flex flex-row items-center gap-16'>
          <Link to="/"><p className='font-light text-black'>Home</p></Link>
          <Link to="/portfolio"><p className='font-light text-black'>Portfolio</p></Link>
          <Link to="/contact"><p className='font-light text-black'>Contact</p></Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;