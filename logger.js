// logger.js
// ========
let client = null;
let logchannel = null;
module.exports = {
  client: function (client_instance, log_channel) {
      client        = client_instance;
      logchannel    = log_channel;
  },  
  info: function (guild, log, icon = "") {
    if (icon != "") {
        resolveLogChannel(guild).sendMessage(icon+" "+now()+" "+log);
    } else {
        resolveLogChannel(guild).sendMessage(now()+" "+log);
    }
  }
};

function resolveLogChannel(guild) {
    return guild.channels.find('name', logchannel);
}

function now() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  var year = date.getFullYear();
  var month = date.getMonth()+1; // beware: January = 0; February = 1, etc.
  var day = date.getDate();
  return  "`["+year+"-"+month+"-"+day+" "+hour+":"+minutes+"]`";
}
