const axios = require("axios");

module.exports = async (req, res, next) => {
  try {
    const theUser = await axios.post("http://todo-auth-service:8001/auth/check", {});

    return next({
      auth: theUser.data
    })
  } catch(err) {
    res.send(err)
  }
}