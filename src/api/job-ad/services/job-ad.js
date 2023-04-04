'use strict';

/**
 * job-ad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-ad.job-ad');
