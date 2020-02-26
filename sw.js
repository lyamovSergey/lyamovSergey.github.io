'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","css/**.css", "js/**.js"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});