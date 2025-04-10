const ping = (req, res) => {
  res.status(200).json({
    message: "pong",
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  ping,
};
