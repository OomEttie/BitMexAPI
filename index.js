const bmapi = require("bitmex-node");
const iostuff = require('./lib/iostuff');

const api = new bmapi.BitmexAPI({
  apiKeyID: "EhoyDxuQyjaK23xbsMnj4pFn",
  apiKeySecret: "4Wt8-aC3kElvQKc4BjKvSNY3HCacj-YWDydHl6Zu-LzypVXw",
});

!async function () {
  // const chatMessage = await bitmex.Chat.new({ message: 'Pump incoming !!! ' });

  try {
    const result = await api.Trade.getBucketed({ binSize: "1d", symbol: "XBT:quarterly", reverse: true });
    iostuff(result, () => { console.log("callback") })
    // console.log(result);
    console.log("result->", result.length);
  }
  catch (err) {
    console.log(err);
  }

}()
