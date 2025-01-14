import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      onClick={() => {
        switch (count) {
          case 0:
            alert('oh yea baby! click me again!');
            setCount(count + 1);
            break;
          case 1:
            alert('You click me so good');
            setCount(count + 1);
            break;
          case 2:
            alert('Woah your getting a little too spicy with me');
            setCount(count + 1);
            break;
          default:
            alert('we are done');
            break;
        }
      }}
    >
      {count < 2 ? 'Click me , baby' : '🔥🚒🧨'}
    </button>
  );
};

export default Button;
