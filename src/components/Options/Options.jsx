import React from "react";

import '../Options/options.css';

const Options = (props) => {
  const options = [
    { text: "Sobre a OpenMind Connect",
    handler: props.actionProvider.about, 
    id: 1
    },
    { text: "Contatar OpenMind Connect",
      handler: props.actionProvider.Contatar, 
      id: 2
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
