import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2">
        <h1 className="text-3xl text-fuchsia-900">
         🖐 Hi, it's Amarnath mandal 😎
        </h1>
        <h2 className="text-xl text-blue-500">
       <span className="text-3xl">🐱‍👤</span>  The SITE is under development
        </h2>
      </div>
    </div>
  );
};

export default App;
