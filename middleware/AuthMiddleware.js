const axios = require("axios");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  try {
    const theUser = await axios.get("http://todo-auth-service:8001/auth/check", {
      headers : {
        authorization
      }
    });

    return next({
      auth: theUser.data
    })
  } catch(err) {
    res.send(err)
  }
}