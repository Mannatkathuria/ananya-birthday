import { useEffect, useState } from "react";

const text = `Happy Birthday Ananya
here's some mixed jumbled opinions about you from everyons:
Hey Ananya, A very Happy Birthday to you .🥰🥰 
Us , your so Called very good friends want to make your birthday very special 🤗 . 
We really hope you will like this Gift .
Hey Ananya, meri taraf se bhi boht saara Happy wala Birthday 🥳, 
stay blessed, keep studying, keep grinding, keep winning ❤️. 
And haan by studying I mean pdhna hai. 
It is funny ki kisi ke birthday pe pdhne ke liye bola 😂.
You are humble despite your achievements, which makes you even more admirable.
I hate you kabhi Aryan ko chod ke hamare sath bhi time spend kar liya karo. 
Hence ab ham koi bhi trek pe ya ghumne jaa rahe ho don't matter tum thak jaati ho tumhe hamare sath chalna hoga.
You are a very hardworking and intelligent person, which is clearly reflected in your being an IIT first-year student.
And smile krte rha kro😊, achi lgti ho, itni achi shakal bhagwan ji ne rone ke liye nhi di 😂.
I know that you like to talk with Aryan 24*7 
but atleast usme se 1 hr hamare liye sach me nikal lo 😅 jisme wo call pe na ho😂.
May your day the coming year be filled with love , Sunshine and a lots of laughter ❤️.
BTW me understanding hu, kuch ho toh sidha bta skte ho, ese ekdam se shock nhi krna hota 😂.
You are supportive and understanding, always ready to help her friends.`;

export default function GiftOne({ back, mark }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    mark();
    let i = 0;
    const interval = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 20); // FAST typing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overlay">
      <pre className="typewriter">{display}</pre>
      <button onClick={back}>Back 🎀</button>
    </div>
  );
}
