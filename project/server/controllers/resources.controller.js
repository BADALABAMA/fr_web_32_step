const { resourcesModel } = require('../models/resources.model');

function getResources(req, res) {
  return res.json(resourcesModel);
}
function getResourcesFront(req, res) {
  return res.json(resourcesModel.filter((q) => q.for === 'front-end'));
}

function getResourcesBack(req, res) {
  return res.json(resourcesModel.filter((q) => q.for === 'back-end'));
}

function getResourcesQA(req, res) {
  return res.json(resourcesModel.filter((q) => q.for === 'qa'));
}

module.exports = {
  getResources,
  getResources,
  getResourcesFront,
  getResourcesBack,
  getResourcesQA,
};
