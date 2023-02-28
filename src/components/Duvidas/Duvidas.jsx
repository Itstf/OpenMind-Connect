import React from "react";

import '../Options/options.css';

const Duvidas = (props) => {
  const duvidas = [
    {
      text: "Email",
      handler: props.actionProvider.Email,
      id: 1,
    },
    { text: "Whatsapp",
      handler: props.actionProvider.Whatsapp, 
      id: 2 
    },
    { text: "Redes Sociais", 
    handler: props.actionProvider.RedesSociais, 
    id: 3
    },
    // { text: "O que é a OpenMind Connect?", 
    // handler: props.actionProvider.Doubt4, 
    // id: 4
    // },
  ];

  const buttonsMarkup = duvidas.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Duvidas;
