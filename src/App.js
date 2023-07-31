import SideBar from './components/SideBar';
import Route from "./components/Route";
import AccordianPage from './pages/AccordianPage';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

function App() {
    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <SideBar />
            <div className='col-span-5'>
                <Route path='/accordian'><AccordianPage /></Route>
                <Route path='/'><DropDownPage /></Route>
                <Route path='/buttons'><ButtonPage /></Route>
                <Route path='/modal'><ModalPage /></Route>
                <Route path='/table'><TablePage /></Route>
                <Route path='/count'><CounterPage initialCount={10} /></Route>

            </div>
        </div>
    )
}

export default App