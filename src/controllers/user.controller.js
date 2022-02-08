const Model = require("../models");

const userCreator = async (req, res) => {
  if (req.body.name && req.body.password && req.body.roleId) {
    Model.User.create({
      name: req.body.name,
      password: req.body.password,
      status: req.body.status,
      roleId: req.body.roleId,
    })
      .then((user) => {
        return res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "User account created successfully",
          },
          body: user,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          meta: {
            status: 500,
            success: false,
            message: err,
          },
        });
      });
  } else {
    return res.status(402).json({
      meta: {
        status: 402,
        success: false,
        message: "User data is required",
      },
    });
  }
};

const userFetcher = async (req, res) => {
    Model.User.findAll()
    .then((users) => {
      if (users.length > 0) {
        return res.status(200).json({
          meta: {
            status: 200,
            success: true,
            message: "User list fetched successfully",
          },
          body: users,
        });
      } else {
        return res.status(404).json({
          meta: {
            status: 404,
            success: true,
            message: "User list is empty",
          },
          body: users,
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        meta: {
          status: 500,
          success: false,
          message: err,
        },
      });
    });
};

const userController = {
  userCreator,
  userFetcher,
};

module.exports = userController;
