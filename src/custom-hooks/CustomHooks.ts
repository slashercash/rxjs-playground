import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export const useObservableState = <T>(
  observable: Observable<T>,
  initalState: T
) => {
  const [state, setstate] = useState(initalState);

  useEffect(() => {
    const sub = observable.subscribe((p) => setstate(p));
    return () => sub.unsubscribe();
  });

  return state;
};
