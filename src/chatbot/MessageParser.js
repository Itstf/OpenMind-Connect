class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("")) {
      this.actionProvider.greet();
    }

    // if (lowercase.includes("sobre") || lowercase.includes("sobre a openMind connect")) {
    //   this.actionProvider.about();
    // }
  }
}

export default MessageParser;