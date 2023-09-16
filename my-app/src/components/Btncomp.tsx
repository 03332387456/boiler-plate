import React, { useState } from "react";



type ButtonProps = {
  buttons: string[];
};

export default function Btncomp(props: ButtonProps) {
  const { buttons } = props;
  const [clickedText, setClickedText] = useState("");

  const onclick = (buttonText: string) => {
    setClickedText(`You clicked on ${buttonText}`);
  };

  return (
    <div>
      {buttons.map((buttonText, index) => (
        <button className="btn btn-success m-2"
        key={index}
          onClick={() => onclick(buttonText)}
         >Button</button>
      ))}
      <p>{clickedText}</p>
    </div>
  );
}