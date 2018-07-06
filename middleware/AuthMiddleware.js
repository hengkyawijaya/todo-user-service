const axios = require("axios");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  try {
    const theUser = await axios.post("http://todo-auth-service:8001/auth/check", {}, {
      headers : {
        authorization
      }
    });

    console.log(theUser);

    return next({
      auth: theUser.data.data.user
    })
  } catch(err) {
    res.send(err)
  }
}