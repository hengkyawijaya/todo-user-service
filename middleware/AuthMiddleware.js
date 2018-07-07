const axios = require("axios");
const config = require("../config");

module.exports = async (req, res, next) => {
  const { authorization=null } = req.headers
  try {
    const theUser = await axios.get(`${config.AUTH_SERVICE_BASE_URL}/auth/check`, {
      headers : {
        authorization,
        "Content-Type":"application/json"
      }
    });
    console.log(theUser.data);
    next(theUser.data)
   
  } catch(err) {
    console.log(err.response);
    res.status(err.response.data.status.code).send(err.response.data)
  }
}