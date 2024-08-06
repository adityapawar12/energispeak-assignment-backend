const UserInformation = require("../models/UserInformation");

const getAllUsers = async (req, res) => {
  try {
    const usersInformation = await UserInformation.find();
    res.json(usersInformation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOneUser = async (req, res) => {
  try {
    const userInformation = await UserInformation.findById(req.params.id);
    res.json(userInformation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const emailExists = await UserInformation.findOne({ email: user.email });

    if (emailExists) {
      res.status(500).json({ error: "Email already exists" });
      return;
    }

    const phoneExists = await UserInformation.findOne({ phone: user.phone });

    if (phoneExists) {
      res.status(500).json({ error: "Phone already exists" });
      return;
    }

    const userInformation = await UserInformation.create(user);
    res.json(userInformation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;

    const emailExists = await UserInformation.findOne({
      email: user.email,
      _id: { $ne: req.params.id },
    });

    if (emailExists) {
      res.status(500).json({ error: "Email already exists" });
      return;
    }

    const phoneExists = await UserInformation.findOne({
      phone: user.phone,
      _id: { $ne: req.params.id },
    });

    if (phoneExists) {
      res.status(500).json({ error: "Phone already exists" });
      return;
    }

    const userInformation = await UserInformation.updateOne(
      {
        _id: req.params.id,
      },
      user
    );
    res.json(userInformation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userInformation = await UserInformation.deleteOne({
      _id: req.params.id,
    });
    res.json(userInformation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
