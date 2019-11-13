//a user needs to be able to send messages.
//messages need to be stored with the user they belong to.
//need to be able to read individual messages.
//user.inbox --> that person's messages
//user.sendMessage('Brian', 'ayyyeee')
//check whether a message has been read or not, when it was read, make it so people can block each other

//Readability protip:
//- classes start with a captial letter
//- 95% of the time, are singular in name

class User {
  constructor(name) {
    this.name = name
    this.inbox = []
  }

  sendMessage(recipient, content) {
    let msg = new Message(recipient, content)
    recipient.inbox.push(msg)
    return `Your message to ${recipient.name} has been sent!`
  }

  readMessage(i) {
    return this.inbox[i].content
  }
}

let user1 = new User('Erin')
let user2 = new User('Brian')

class Message {
  constructor(recipient, content) {
    this.recipient = recipient
    this.content = content
    alert("You have a new message!")
  }
}

// let sendBtn = document.getElementById('send-btn')
// let messageContent = document.querySelector('#msg-content')
// let username = document.getElementById("username")
// sendBtn.addEventListener('click', () => {
//   let msg = new Message (username.value, messageContent.value)
//   messageContent.value = ''
//   alert("Your message was sent!")
// })
//
// let msg1 = new Message('This is the 1st message.') //each msg is an instance of the class Message
// let msg2 = new Message('This is the 2nd message.')

//any object based on a class is called an instance
// an instance represents one object based on the class name
//every class MUST have a constructor
//An argument of a function is a value that MUST be provided to obtain the function's result. ayyyeee
//The 'this' keyword when used in a constructor always refers to each individual instance.
//The constructor runs once every time with the word 'new'
