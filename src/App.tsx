import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from './components/ui/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LazyMainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LazyGenresPage = lazy(() => import('./pages/GenresPage/GenresPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LazyMainPage />} />
          <Route path='/genres' element={<LazyGenresPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
