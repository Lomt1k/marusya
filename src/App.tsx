import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from './components/ui/Loader/Loader';

const LazyMainPage = lazy(() => import('./pages/MainPage/MainPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LazyMainPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
