const user = require("../schema/userSchema");


const getuser = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).send({
      success: true,
      message: "user data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "error fetching data",
      error,
    });
  }
};


const setuser = async (req, res) => {
  // console.log(req.body);
  try {
    const users = await user.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};


const singleUser = async (req, res) => {
  const users = await user.findById(req.params.id);
  console.log(users);
  res.status(200).json(users);
};


const edituser = async (req, res) => {
  const users = await user.findById(req.params.id);

  if (!users) {
    res.status(400);
    throw new Error("user not found");
  }

  const updateduser = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateduser);
};


const deleteuser = async (req, res) => {
  try {
    const userData = await user.findByIdAndDelete(req.params.id);
    if (!userData) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = { getuser, setuser, edituser, deleteuser, singleUser };
