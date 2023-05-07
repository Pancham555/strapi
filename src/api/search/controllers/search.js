"use strict";

/**
 * A set of functions called "actions" for `search`
 */

module.exports = {
  async query(ctx, next) {
    try {
      const { query } = ctx.query;
      const entries = await strapi.entityService.findMany("api::item.item", {
        filters: {
          $or: [
            {
              title: {
                $containsi: query,
              },
            },
            {
              title: {
                $startsWith: query,
              },
            },
            {
              title: {
                $endsWith: query,
              },
            },
          ],
        },
        populate: {
          image: true,
        },
      });
      ctx.body = entries;
    } catch (error) {
      ctx.body = { error: error.toString() };
    }
  },
};
