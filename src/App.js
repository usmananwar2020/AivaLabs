import './App.css';
import ShowHeading from './pages/ShowHeading';
import SpinningWheel from './pages/SpinningWheel';
import ColorPicker from './pages/ColorPicker';
import Draggable from './pages/Draggable';

function App() {
  return (
    <div>
      <h1 className={'task'}>Task 1#</h1>
        <Draggable/>
      <h1 className={'task'}>Task 2#</h1>
        <SpinningWheel/>
      <h1 className={'task'}>Task 3#</h1>
        <ColorPicker/>
      <h1 className={'task'}>Task 4#</h1>
        <ShowHeading/>
    </div>
  );
}

export default App;
