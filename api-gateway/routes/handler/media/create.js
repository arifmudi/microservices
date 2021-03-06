const apiAdapter = require('../../apiAdapter');
const {
  URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    const media = await api.post('/media', req.body);
    console.log(media);
    return res.json(media.data);
  } catch (error) {
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
}