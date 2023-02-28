class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage(
        'Em que podemos ajudar? Clique em uma das opções.',
        {
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };
  
    // Contacts = () => {
    //   const message = this.createChatBotMessage(
    //     "Vias de Contato",
    //   );
    //   const message2 = this.createChatBotMessage(
    //     "Instagram: @OpenMind.Connect",
    //   );
    //   const message3 = this.createChatBotMessage(
    //     "Tel: (19) 99423-8412",
    //   );
    //   const message4 = this.createChatBotMessage(
    //     "Email: openConnect@gmail.com",
    //   );

    //   this.addMessageToState(message);
    //   this.addMessageToState(message2);
    //   this.addMessageToState(message3);
    //   this.addMessageToState(message4);
    // };

    Contatar = () => {
      const message = this.createChatBotMessage(
        "Selecione o meio de contato desejado",
        {
          widget: "duvidasQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
      Email = () => {
        const message = this.createChatBotMessage(
          "openMindconnect@gmail.com",
        );
    
        this.addMessageToState(message);
      };

      Whatsapp = () => {
        const message = this.createChatBotMessage(
          "(19) 99423-8412",
        );
    
        this.addMessageToState(message);
      };

      RedesSociais = () => {
        const message = this.createChatBotMessage(
          "@openmind.connect",
        );
    
        this.addMessageToState(message);
      };

    about = () => {
      const message = this.createChatBotMessage(
        'Sobre empresa',
        {
          widget: "javascriptQuiz",
        }
      );
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;