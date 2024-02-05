const resourceRouter = require('express').Router();

const {
  getResources,
  getResourcesBack,
  getResourcesFront,
  getResourcesQA,
} = require('../controllers/resources.controller');
resourceRouter.get('/resources/back-end', getResourcesBack);
resourceRouter.get('/resources/front-end', getResourcesFront);
resourceRouter.get('/resources/qa', getResourcesQA);
resourceRouter.get('/resources', getResources);

module.exports = {
  resourceRouter,
};
