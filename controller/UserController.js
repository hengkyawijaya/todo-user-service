const { User } = require("../model")

module.exports = {
  async find(req, res){
    const { page=1, limit=10, searchBy='type', search='', orderBy='updatedAt', order='desc', filter  } = req.query;
    try {
      const theUser = await User.paginate({}, { page, limit});

      res.send({
        data: {
          user: theUser.docs,
          total: theUser.total
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      });

    } catch(err) {
      res.send(err)
    }
  },
  async findOne({ auth }, req, res){
    const { id } = req.params;
    try {
      const theUser = await User.findById(id);

      res.send({
        auth,
        data: {
          user: theUser,
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      });
    } catch(err) {
      res.send(err)
    }
  },
  async create(req, res){
    const { user } = req.body;
    try {
      const theUser = await new User(user).save();

      res.send({
        data: {
          user: theUser
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      });

    } catch(err) {
      res.send(err)
    }
  },
  async update(req, res){
    const { id } = req.params;
    const { user } = req.body;

    try {
      const theUser = await User.findByIdAndUpdate({ id }, user);

      res.send({
        data: {
          user: theUser,
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      });
    } catch(err) {
      res.send(err)
    }
  },
  async destroy(req, res){
    const { id } = req.params;
    try {
      const theUser = await User.remove({ id });

      res.send({
        data: {
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      });
    } catch(err) {
      res.send(err)
    }
  },

}