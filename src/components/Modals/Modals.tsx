import { observer } from "mobx-react-lite";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import RootStore from "../../store/RootStore";
import './Modals.scss';
import Loader from "../ui/Loader/Loader";

const LazyAuthModal = lazy(() => import('./AuthModal/AuthModal'));

const Modals = observer(() => {
  const [isAnyModalActive, setIsAnyModalActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsAnyModalActive(rootRef.current?.hasChildNodes() ?? false))

  return (
    <div ref={rootRef} className={`modals ${isAnyModalActive ? 'modals--active' : ''}`}>
      <Suspense fallback={<Loader />}>
        {RootStore.auth.isModalActive && <LazyAuthModal />}
      </Suspense>
    </div>
  )
})

export default Modals;