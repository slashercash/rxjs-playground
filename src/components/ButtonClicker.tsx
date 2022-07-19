import { BehaviorSubject, throttleTime } from 'rxjs';
import styled from 'styled-components';
import { useObservableState } from '../custom-hooks/CustomHooks';

const StyledDiv = styled.div`
  margin-top: 10px;
  border: 2px solid black;
`;

const clickedSubject$ = new BehaviorSubject(0);
const clickedObservable$ = clickedSubject$.pipe(throttleTime(1000));

const ButtonClicker = () => {
  const clicked = useObservableState(clickedObservable$, 0);
  return (
    <StyledDiv>
      <button onClick={() => clickedSubject$.next(clicked + 1)}>KlickMe</button>
      <div>{clicked}</div>
    </StyledDiv>
  );
};

export default ButtonClicker;
