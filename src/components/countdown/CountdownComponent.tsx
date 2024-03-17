// src/components/countdown.tsx
import { component$, useStore, useTask$, } from '@builder.io/qwik';

interface CountdownProps {
  targetDay: number; 
  targetMonth: number;
  targetYear?: number;
}

export const Countdown = component$<CountdownProps>((props) => {
    //in react use useState
    const state = useStore({
        days: ''
    });
    //in react useEffect
    useTask$(({ track }) => {
      track(state);
      const calculateDaysLeft = () => {
        const now = new Date();
        const currentYear  = props.targetYear || now.getFullYear();
        let targetDate = new Date(currentYear,props.targetMonth-1,props.targetDay);
        targetDate.setHours(0, 0, 0, 0)
        now.setHours(0, 0, 0, 0);
        if (targetDate < now) {
          targetDate = new Date(currentYear + 1, props.targetMonth, props.targetDay);
        }
        const difference = targetDate.getTime() - now.getTime();
        

        
        if (difference > 0) {
          const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
          return `${days}`;
        }

        return 'It’s my birthday!';
      };

      state.days = calculateDaysLeft();
    });

  return (
    <div>
      <p class="text-center">
        {state.days !== 'It’s my birthday!' && parseInt(state.days) > 0 ? (
          <>
            <span class="text-xl md:text-3xl">{state.days}</span> days <br />
          </>
        ) : null}
        {state.days === 'It’s my birthday!' ? 'It’s my birthday!' : 'until birthday'}
      </p>
    </div>
  );
});
