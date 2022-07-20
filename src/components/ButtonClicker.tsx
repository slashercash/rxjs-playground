import {
  BehaviorSubject,
  throttle,
  interval,
  map,
  combineLatestWith,
} from 'rxjs';
import styled from 'styled-components';
import { useObservableState } from '../custom-hooks/CustomHooks';

const StyledDiv = styled.div`
  margin-top: 10px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  > div {
    text-align: center;
    > input {
      width: 50px;
      text-align: center;
    }
  }
`;

const clickedSubject$ = new BehaviorSubject(0);
const throttleSubject$ = new BehaviorSubject(1);

const clickedObservable$ = clickedSubject$.pipe(
  combineLatestWith(throttleSubject$),
  throttle(([_, source]) => interval(source * 1000)),
  map(([clicked]) => clicked)
);

const ButtonClicker = () => {
  const clicked: number = useObservableState(clickedObservable$, 0);
  const throttle: number = useObservableState(throttleSubject$, 1);

  return (
    <StyledDiv>
      <div>
        <div>{clicked}</div>
        <button onClick={() => clickedSubject$.next(clicked + 1)}>+ 1</button>
      </div>
      <div>
        <div>Throttle (s)</div>
        <input
          type='number'
          value={throttle}
          onChange={(e) => throttleSubject$.next(Number(e.target.value))}
        />
      </div>
    </StyledDiv>
  );
};

export default ButtonClicker;
