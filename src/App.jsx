// import Banner3 from './components/Banner3';
// import Banner4 from './components/Banner4';
// import Blogs from './components/Blogs';
// import Brands from './components/Brands';
// import Footer from './components/Footer';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import NabBar from './components/NabBar';

// import Products from './components/Products';
// import Service from './components/Service';

function App() {

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <NabBar />
      <Banner />
      <Banner2 />
      {/* <Service />
      <Banner3 />
      <Products />
      <Banner4 />
      <Blogs />
      <Brands />
      <Footer /> */}
    </div>
  )
}

export default App
