import { BehaviorSubject, throttle, throttleTime } from 'rxjs';
import styled from 'styled-components';
import { useObservableState } from '../custom-hooks/CustomHooks';

const StyledDiv = styled.div`
  margin-top: 10px;
  border: 2px solid black;
`;

const clickedSubject$ = new BehaviorSubject(0);
const x$ = new BehaviorSubject(0);
const clickedObservable$ = clickedSubject$.pipe(throttle((x) => x$));

const ButtonClicker = () => {
  const clicked = useObservableState(clickedObservable$, 0);
  const throttle = useObservableState(x$, 1000);

  return (
    <StyledDiv>
      <button onClick={() => clickedSubject$.next(clicked + 1)}>KlickMe</button>
      <div>{clicked}</div>
      <input
        type='number'
        value={throttle}
        onChange={(e) => x$.next(Number(e.target.value))}
      />
    </StyledDiv>
  );
};

export default ButtonClicker;
