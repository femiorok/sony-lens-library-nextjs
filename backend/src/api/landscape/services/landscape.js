'use strict';

/**
 * landscape service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::landscape.landscape');
