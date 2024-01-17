import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (
    <div className="w-full min-h-screen flex-col background relative overflow-x-hidden ">
     <h1 className="bg-white rounded-lg  w-11/12 text-center items-center mt-10 mx-auto px-10 py-4 text-3xl font-bold ml-[65px]">RANDOM GIF's</h1>
     <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/> 
      <Tag/>
     </div>
    </div>
  );
}

export default App;
