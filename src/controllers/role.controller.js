const Model = require("../models");

const roleCreator = async (req, res) => {
  if (req.body.role) {
    Model.Role.create({
      name: req.body.role,
    })
      .then((role) => {
        return res.status(201).json({
          meta: {
            status: 201,
            success: true,
            message: "Role created successfully",
          },
          body: role,
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
        message: "Role is required",
      },
    });
  }
};

const roleFetcher = async (req, res) => {
  Model.Role.findAll()
    .then((roles) => {
        if(roles.length > 0){
            return res.status(200).json({
                meta: {
                  status: 200,
                  success: true,
                  message: "Role fetched successfully",
                },
                body: roles,
              });
        }
        else {
            return res.status(404).json({
                meta: {
                  status: 404,
                  success: true,
                  message: "Role is empty",
                },
                body: roles,
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

const roleController = {
  roleCreator,
  roleFetcher
};

module.exports = roleController;
