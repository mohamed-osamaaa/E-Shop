import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import NabBar from './components/NabBar';

function App() {

  return (
    <div className='!bg-white !dark:bg-gray-900 !dark:text-white'>
      <NabBar />
      <Banner />
      <Banner2 />
    </div>
  )
}

export default App
