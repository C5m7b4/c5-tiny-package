import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');

  return (
    <div>
      <button
        query-id="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
        onClick={() => {
          switch (count) {
            case 0:
              setMessage('oh yea baby! click me again!');
              setCount(count + 1);
              break;
            case 1:
              setMessage('You click me so good');
              setCount(count + 1);
              break;
            case 2:
              setMessage('Woah your getting a little too spicy with me');
              setCount(count + 1);
              break;
            default:
              setMessage('we are done');
              break;
          }
        }}
      >
        {count < 3 ? 'Click me , baby' : '🔥🚒🧨'}
      </button>
      <div query-id="message">{message}</div>
    </div>
  );
};

export default Button;
