$.ajax({
    async: false,
    url: `${PREFIX}js/haley-mock.js`,
    dataType: "script"
});

global.UI_DEV_MODE = true;

// require('./lib-vital/vitalservice-js/vital-core-0.2.304');
// require('./lib-vital/vitalservice-js/vital-0.2.304');
// const HaleyAPI = require('./lib-vital/haley-js-api/haley-js-api-0.0.1');
// const HaleyWrappedAPI = require('./lib-vital/haley-js-api/haley-js-api-wrapped-0.0.1');
// const HaleyAPIVitalServiceImpl = require('./lib-vital/haley-js-api/haley-js-vitalservice-implementation-0.0.1');
// require('./lib-vital/vitalservice-js/lru');
// require('./lib-vital/vitalservice-js/sockjs-0.3.4.min');
// global.tv4 = require('./lib-vital/vitalservice-js/tv4.min');
// require('./lib-vital/vitalservice-js/vertx-eventbus-3.2.1');
const HaleyAPIMockVitalServiceImpl = require('./lib-vital/haley-js-api/haley-js-mock-implementation-0.0.1');
const VitalServiceMockImpl = require('./lib-vital/vitalservice-js/vitalservice-mock-impl-0.2.304').VitalServiceMockImpl;
// const VitalService = require('./lib-vital/vitalservice-js/vitalservice-0.2.304');
// const VitalServiceWebsocketImpl = require('./lib-vital/vitalservice-js/vitalservice-impl-0.2.304');
// const vitaljs = require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304').vitaljs;
// const VitalServiceJson = require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304').VitalServiceJson;

// global.HaleyAPI = HaleyAPI;
// global.HaleyWrappedAPI = HaleyWrappedAPI;
// global.VitalService = VitalService;
// global.VitalServiceWebsocketImpl = VitalServiceWebsocketImpl;
// global.HaleyAPIVitalServiceImpl = HaleyAPIVitalServiceImpl;
// global.vitaljs = vitaljs;
// global.VitalServiceJson = VitalServiceJson,
global.HaleyAPIMockVitalServiceImpl = HaleyAPIMockVitalServiceImpl;
global.VitalServiceMockImpl = VitalServiceMockImpl;