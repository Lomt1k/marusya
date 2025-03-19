import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import RootStore from "../../store/RootStore";
import './Modals.scss';

const Modals = observer(() => {
  const [isAnyModalActive, setIsAnyModalActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsAnyModalActive(rootRef.current?.hasChildNodes() ?? false))

  return (
    <div ref={rootRef} className={`modals ${isAnyModalActive ? 'modals--active' : ''}`}>
      {RootStore.auth.isModalActive && <span>hi</span>}
    </div>
  )
})

export default Modals;