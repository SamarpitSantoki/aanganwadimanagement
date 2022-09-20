const GetWorkerList = (req, res) => {
  const { filter } = req.body;
};

const Regiter = (req, res) => {
  res.send("register worker");
};

module.exports = { Regiter, GetWorkerList };
