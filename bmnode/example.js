const bmapi = require('bitmex-node');
// import { BitmexAPI } from "bitmex-node";

const bitmex = new bmapi.BitmexAPI({
  "apiKeyID": "y9HAp8vVk7peXuIBTJCPzed2",
  "apiKeySecret": "hY0MlonjxN9ZjcSnCNaB3KnPCHGbd8aEQ4KKCDp3e33JyFSR",
  // "proxy": "https://cors-anywhere.herokuapp.com/"
});

!async function () {
  try {
    const chatMessage = await bitmex.Chat.new({ message: 'Pump incoming !!! ' });
  }
  catch (err) {
    console.log(err);
  }
}()