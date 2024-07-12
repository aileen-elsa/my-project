import BurgerIcon from "../components/BurgerIcon";
import Drinks from "../components/Drinks";
import Sandwitch from "../components/Sandwitch";
import Icecream from "../components/Icecream";
import Main from "../components/Main";
export default function Home() {
  return (
    <main>
      <div className='flex'>
        <div className="py-6 px-4 mt-40 ml-40  border-emerald-400 border-4 rounded-xl">
          <BurgerIcon />
        </div>
        <div className="py-6 px-4 mt-40 ml-40  border-emerald-400 border-4 rounded-xl">
          <Drinks />
        </div>
        <div className="py-6 px-4 mt-40 ml-40  border-emerald-400 border-4 rounded-xl">
          <Sandwitch />
        </div>
      </div>
      <div className='flex'>
        <div className="py-6 px-4 mt-20 ml-80  border-emerald-400 border-4 rounded-xl">
          <Icecream />
        </div>
        <div className="py-6 px-4 mt-20 ml-40  border-emerald-400 border-4 rounded-xl">
          <Main />
        </div>
      </div>
    </main>
  );
}
