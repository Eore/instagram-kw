const query = require("../../services/dbOperation")("timeline");

module.exports = {
  postTimeline: (data = { iduser, image, caption }) => {
    query.insert(data);
  },
  deleteTimeline: idtimeline => {
    query.delete(idtimeline);
  }
};
