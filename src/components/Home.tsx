import Sidebar from "./Sidebar";
import Contact from "./Contact";

const Home = () => (
  <>

    <h1 className='z-50 w-full shadow-sm shadow-slate-700 top-0 text-2xl text-black bg-indigo-300 font-bold p-4 text-center'>
      Contact Page
    </h1>
    <div className="flex flex-col md:flex-row">

      <Sidebar />
      <Contact />
    </div>
  </>
);

export default Home;