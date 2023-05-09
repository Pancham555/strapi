"use strict";

/**
 * A set of functions called "actions" for `api-keys`
 */

module.exports = {
  exposeApiKeys: async (ctx, next) => {
    try {
      ctx.body = {
        opencagegeocoderapikey: process.env.OPEN_CAGE_GEOCODER_API_KEY,
        androidclientid: process.env.ANDROID_CLIENT_ID,
        expoclientid: process.env.EXPO_CLIENT_ID,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
