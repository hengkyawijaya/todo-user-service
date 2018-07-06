const { User } = require("../model")

module.exports = {
   find: async(req, res, next) => {
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
  findOne: async (data, req, res, next) => {
    const { id } = req.params;
    console.log(data);
    try {
      const theUser = await User.findById(id);

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
  create: async(req, res, next) => {
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
  update: async (req, res, next) => {
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
  destroy: async (req, res, next) =>{
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