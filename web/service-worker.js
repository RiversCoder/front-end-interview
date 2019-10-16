/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "289a5f24c530e2122a7e79970e6dbf53"
  },
  {
    "url": "assets/css/0.styles.2e27808e.css",
    "revision": "b5f9ad258e2444cba5922d810e058e02"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.39e16057.js",
    "revision": "f103015a3101cf536ef928c836f0cb04"
  },
  {
    "url": "assets/js/11.3d51bd6b.js",
    "revision": "1ff639412742dde4667da795b4468a49"
  },
  {
    "url": "assets/js/12.36253797.js",
    "revision": "aa468580f7c30fa031b0ed36efa9c851"
  },
  {
    "url": "assets/js/13.575916d7.js",
    "revision": "2d21667fb132c2b8e63e608f8ac3a3ee"
  },
  {
    "url": "assets/js/14.3472533d.js",
    "revision": "7d337cffd8627f4a3dd1f3f31a1bcf07"
  },
  {
    "url": "assets/js/15.a4ef63ee.js",
    "revision": "64f9e717123f45f4225f850137d52f5c"
  },
  {
    "url": "assets/js/16.9075e6d0.js",
    "revision": "8e3d79c976d5a1fea4f0c2e8256de7b2"
  },
  {
    "url": "assets/js/17.4d741fd4.js",
    "revision": "c1ba1a40248d8ef07d7ada4cfeef184b"
  },
  {
    "url": "assets/js/18.340c89e3.js",
    "revision": "4896ddb705436a0c7cbddfcb03caa352"
  },
  {
    "url": "assets/js/19.6c140664.js",
    "revision": "5cc8b9e2f82b1eb73f96f975ab593222"
  },
  {
    "url": "assets/js/20.afd2cee9.js",
    "revision": "e2081e91fde4d97f7b2295e1bb632399"
  },
  {
    "url": "assets/js/21.e2a69144.js",
    "revision": "cbdd14b04de30d5b0d518fc19cbc45ec"
  },
  {
    "url": "assets/js/22.78f09237.js",
    "revision": "fda84f4bd084014cde5a2de4330b90d1"
  },
  {
    "url": "assets/js/23.5125ad5f.js",
    "revision": "b751f22652e959262d3770f466dfd537"
  },
  {
    "url": "assets/js/24.f0299768.js",
    "revision": "f065c5659a81edf726d2eb2acbbf7cb9"
  },
  {
    "url": "assets/js/25.6cc1aab3.js",
    "revision": "12d1e96cd7b715e97af44483f0812c93"
  },
  {
    "url": "assets/js/26.ad3045ca.js",
    "revision": "775726698a479ed277942dd0af98ac64"
  },
  {
    "url": "assets/js/27.45d49c87.js",
    "revision": "3b5b6dc8e32b16214de8b8ba8895631d"
  },
  {
    "url": "assets/js/28.73fdbc37.js",
    "revision": "9b36a2bc17f36c5ac2e47619e6a6d6af"
  },
  {
    "url": "assets/js/29.a36855c7.js",
    "revision": "5823dcbe992aa4d387003ddb62d0379a"
  },
  {
    "url": "assets/js/3.a4f7c1d3.js",
    "revision": "4989a9256c34c8d482e58ce7b117ce8b"
  },
  {
    "url": "assets/js/30.749e7e0a.js",
    "revision": "3df16a6a09fdf13b859f727cb9e050c6"
  },
  {
    "url": "assets/js/31.58e8d40d.js",
    "revision": "9305abe1f76792653adf0d11a450b50f"
  },
  {
    "url": "assets/js/32.5983033f.js",
    "revision": "b54f8357424a6595e1c0aec30e0ec224"
  },
  {
    "url": "assets/js/33.6d70ca6e.js",
    "revision": "a39a6c3c828b38d076db537d58cd18ff"
  },
  {
    "url": "assets/js/34.26f74270.js",
    "revision": "0ad4d6a6c40e467806568e2a97cf1891"
  },
  {
    "url": "assets/js/35.5ec96b7b.js",
    "revision": "046840fe08d169fdbdcb85c7e94138b3"
  },
  {
    "url": "assets/js/36.5ac52199.js",
    "revision": "7271642fb86e93a43aba0d02be3448d0"
  },
  {
    "url": "assets/js/37.0bea1e8c.js",
    "revision": "3dd8cc073b79052b1181df81d664324b"
  },
  {
    "url": "assets/js/38.6408b1d7.js",
    "revision": "37f2d39ed86d3155bdc679482072243d"
  },
  {
    "url": "assets/js/39.1ebab46e.js",
    "revision": "5a11fd022efc42782a690ab007833f1c"
  },
  {
    "url": "assets/js/4.ca579393.js",
    "revision": "e5fad755ade5e2c2b5431a7211ecd1f8"
  },
  {
    "url": "assets/js/40.dbe27a4f.js",
    "revision": "5bcee7f7c23fc55885b0a2d3e13297f3"
  },
  {
    "url": "assets/js/41.ffb28da6.js",
    "revision": "d58e4b8cb6f2bc2241626611134ee277"
  },
  {
    "url": "assets/js/42.bb5f750c.js",
    "revision": "e75b1a764661a768e86caa98e1b24f20"
  },
  {
    "url": "assets/js/43.be202f85.js",
    "revision": "297c272eb522e3a96f2ac46cc61cbe53"
  },
  {
    "url": "assets/js/44.b7392cdc.js",
    "revision": "e073ef543ba2eaae6d4ba9504d022886"
  },
  {
    "url": "assets/js/45.a585baff.js",
    "revision": "9f41625f36f8289ef683087763d84b0a"
  },
  {
    "url": "assets/js/46.8368c105.js",
    "revision": "0fcd4ac42b4b3d804987bfe4ba5e2f25"
  },
  {
    "url": "assets/js/47.0087a6a7.js",
    "revision": "7395f4b0981e50ddf8050008e8b11d70"
  },
  {
    "url": "assets/js/48.6b38fd60.js",
    "revision": "4a5d0f9cf15a43d075181ede0dbb66f8"
  },
  {
    "url": "assets/js/49.5d11cbcc.js",
    "revision": "63ed35c13d5f05237dd7146b6ffc48e7"
  },
  {
    "url": "assets/js/5.1f91ab48.js",
    "revision": "eb439cf52d35545543ceb4a435242010"
  },
  {
    "url": "assets/js/50.879bdcba.js",
    "revision": "cdba07ca59b2d44f754b5e69f79c8ee3"
  },
  {
    "url": "assets/js/51.22038c62.js",
    "revision": "3ff5c1ecefe505aa13216a7cc4e69e61"
  },
  {
    "url": "assets/js/52.bd5f3f75.js",
    "revision": "fd2f5787e63fc5ff28529baeb51e72e3"
  },
  {
    "url": "assets/js/53.e0025550.js",
    "revision": "1cb79290d400dcc12f7afc50ca5b438f"
  },
  {
    "url": "assets/js/54.5b4cc19c.js",
    "revision": "c12b48a05c28fcf96286486bb55724d2"
  },
  {
    "url": "assets/js/55.e7109f71.js",
    "revision": "f415663d15b6c05b6c3a9a8cb2f4efa9"
  },
  {
    "url": "assets/js/56.0e8072fe.js",
    "revision": "6e22da8b23708aeca3756fdfa84d4a5a"
  },
  {
    "url": "assets/js/57.d1ac2984.js",
    "revision": "9a2559c6da4f7cdfd5b32df2fdb5a2b5"
  },
  {
    "url": "assets/js/58.5f51e50a.js",
    "revision": "8923c975352a46c74b458d89f0bb41a6"
  },
  {
    "url": "assets/js/59.b7f3e4e5.js",
    "revision": "c948281f6c1faa3f1491fbc5bed958e6"
  },
  {
    "url": "assets/js/6.0f24b935.js",
    "revision": "abc60efa5cad0662c39a89d99f50b26a"
  },
  {
    "url": "assets/js/60.94603fa7.js",
    "revision": "d5e12e7fc7c3c18c30d5270043f7c75e"
  },
  {
    "url": "assets/js/61.7a75150a.js",
    "revision": "f1e0dcc4fbdbecd493f9598a55a16fea"
  },
  {
    "url": "assets/js/62.d663ce62.js",
    "revision": "b1e6ff9191f53a54104e4aae6576146b"
  },
  {
    "url": "assets/js/63.5e3c4f7d.js",
    "revision": "fcdeb3452c5164878eb0463a2128352c"
  },
  {
    "url": "assets/js/64.3f57aa96.js",
    "revision": "a4c483b408b9e89c5d0a4967641728f1"
  },
  {
    "url": "assets/js/65.96a75dbe.js",
    "revision": "000d8ef8d17191263fa593ed3cfefa0a"
  },
  {
    "url": "assets/js/66.993c316d.js",
    "revision": "c63f0e58123ddad46467287da42f0566"
  },
  {
    "url": "assets/js/67.acb5769f.js",
    "revision": "a5e968a0e3cc2170d53080320a3a6fca"
  },
  {
    "url": "assets/js/68.e612e102.js",
    "revision": "3423e43b291546f3a57f82ee91464b80"
  },
  {
    "url": "assets/js/69.d36b9346.js",
    "revision": "a62161d64c344bc5314a3d3812406686"
  },
  {
    "url": "assets/js/7.ddff1de1.js",
    "revision": "bffc95a187bd1ad20b0d63cc8bccd782"
  },
  {
    "url": "assets/js/70.b75e09d2.js",
    "revision": "71188b13e8954d1bba587d0c527fcc9c"
  },
  {
    "url": "assets/js/8.4d0122f6.js",
    "revision": "a306c419f3c33b4376beaed91b96de19"
  },
  {
    "url": "assets/js/9.76ee1ddb.js",
    "revision": "16b34be036260acbf4c8d83555b4bf5c"
  },
  {
    "url": "assets/js/app.747200a5.js",
    "revision": "8cee66b528d68bfe99d600cab3ba9370"
  },
  {
    "url": "assets/js/vendors~notification.af440727.js",
    "revision": "6f3a17da18256759ba1cac05964a35e8"
  },
  {
    "url": "guide/abstract.html",
    "revision": "8636b97866c42f10ad8ca9b9a4117c50"
  },
  {
    "url": "guide/algorithm.html",
    "revision": "e5f269c13dcdfd7061c77d00dacbbb9d"
  },
  {
    "url": "guide/ast.html",
    "revision": "15cb1a760595df05e6e5b837ae43de5b"
  },
  {
    "url": "guide/babel.html",
    "revision": "330ada0b45bf262f5b1de7628a71c073"
  },
  {
    "url": "guide/babelPlugin.html",
    "revision": "5d83e4242234a58e8be4779a2d3394a9"
  },
  {
    "url": "guide/book.html",
    "revision": "081a2c3b6eace3f0e5efada0b487702f"
  },
  {
    "url": "guide/browser.html",
    "revision": "94d0b96cced1ad9b186faac494c9ecf8"
  },
  {
    "url": "guide/carousel.html",
    "revision": "7bddb0031b2bcacb701358553f87491a"
  },
  {
    "url": "guide/common.html",
    "revision": "ddcbbd53f72909ad1dca5cb05aae2446"
  },
  {
    "url": "guide/component.html",
    "revision": "149e2d0ca932c2deec9aea0ad0ff705f"
  },
  {
    "url": "guide/componentCli.html",
    "revision": "f9115c5b861698490c5556f9a0bcc399"
  },
  {
    "url": "guide/composite.html",
    "revision": "08cf11f9bf354d93babd67b923411711"
  },
  {
    "url": "guide/cssBasic.html",
    "revision": "8d1e5c3490a0672af7959283cffdcbcc"
  },
  {
    "url": "guide/dataStructure.html",
    "revision": "703c3ac4b8838475b49ceadf196d9f3b"
  },
  {
    "url": "guide/deepclone.html",
    "revision": "ae9f9f807330722a553e33c3aa1b7223"
  },
  {
    "url": "guide/designPatterns.html",
    "revision": "233c9a88d06a7a851fb770b60354b967"
  },
  {
    "url": "guide/devsProxy.html",
    "revision": "2f4726304d96a590182d996a436d612a"
  },
  {
    "url": "guide/dom.html",
    "revision": "5010b69a198f47b65c2075e983aab75b"
  },
  {
    "url": "guide/engineering.html",
    "revision": "d1071e695f9ec806748e92b7b87e993a"
  },
  {
    "url": "guide/event.html",
    "revision": "c21efc1217e05cfb2b73922dd461ffef"
  },
  {
    "url": "guide/eventLoop.html",
    "revision": "d783a05c89aea96d68f2bd1072bcc5a0"
  },
  {
    "url": "guide/execute.html",
    "revision": "a5bb2b67b324f7f88ced2bf8fba2d59a"
  },
  {
    "url": "guide/fiber.html",
    "revision": "46f70f8bba43eb23cb5008824599bd5b"
  },
  {
    "url": "guide/framework.html",
    "revision": "c827fcd55520e7ad109d46e0fb6a9a41"
  },
  {
    "url": "guide/hoisting.html",
    "revision": "13d30ff6081da7debd2b66bbca5629fa"
  },
  {
    "url": "guide/hr.html",
    "revision": "976df78ab93d39df0a7957fa548a6663"
  },
  {
    "url": "guide/htmlBasic.html",
    "revision": "b479b07ad6e98a03130e4addcd419a13"
  },
  {
    "url": "guide/http.html",
    "revision": "4e1b38eef8f4e3445a2a3f398faa5e28"
  },
  {
    "url": "guide/httpWritten.html",
    "revision": "86bf742bb2c9de01a973b4d0b69cc9a6"
  },
  {
    "url": "guide/immutable.html",
    "revision": "7c6187950d24d9af8df1e92e76a65c0a"
  },
  {
    "url": "guide/index.html",
    "revision": "58cd47118db4b6a2f2d616bcd8bcd5fc"
  },
  {
    "url": "guide/jsBasic.html",
    "revision": "b992294d3f4b2457b3ff1fbf5d19f77e"
  },
  {
    "url": "guide/jsWritten.html",
    "revision": "2d1755628d984b2a2facbb4a3e903182"
  },
  {
    "url": "guide/load.html",
    "revision": "a576c85a68acf6913567c86b141e5176"
  },
  {
    "url": "guide/mechanism.html",
    "revision": "fa409aa98ee354ade1c7ca9f0bf72c8d"
  },
  {
    "url": "guide/memory.html",
    "revision": "90a17c0d17401da1968ef7673db506ae"
  },
  {
    "url": "guide/node.html",
    "revision": "0a7993dd32092b7f0752e29c9b8c4590"
  },
  {
    "url": "guide/preface.html",
    "revision": "e5703d2fe256409bafc737c21d232b10"
  },
  {
    "url": "guide/project.html",
    "revision": "a7a8073f0699e0c5b0ba7673866e2ed4"
  },
  {
    "url": "guide/react.html",
    "revision": "109e36e773e042b1dbcba44b5ae2d5cf"
  },
  {
    "url": "guide/reactHook.html",
    "revision": "bb27e104194a56a09641af77ff314e95"
  },
  {
    "url": "guide/reactivity.html",
    "revision": "4b0db8bd91b0ba50a7f9f098de6340c0"
  },
  {
    "url": "guide/redux.html",
    "revision": "e5e8b91acbdc96d3195245a0d5353862"
  },
  {
    "url": "guide/resume.html",
    "revision": "7228e45e5e324135a425498b1b418c92"
  },
  {
    "url": "guide/router.html",
    "revision": "056d79004e044872083ccfc6b7c5ed2a"
  },
  {
    "url": "guide/security.html",
    "revision": "be0bd84c8ce95122c9e85762ebab854d"
  },
  {
    "url": "guide/setState.html",
    "revision": "8749983660577e1c76e5a94c83b9e68c"
  },
  {
    "url": "guide/string.html",
    "revision": "ac8abd146d1ad46a5469fc341d1395ad"
  },
  {
    "url": "guide/tcp.html",
    "revision": "707b28108e71e59845d832e1c1f0bbe2"
  },
  {
    "url": "guide/virtualDom.html",
    "revision": "9c59270e0d75c6e2a4818b7815152b1d"
  },
  {
    "url": "guide/vue.html",
    "revision": "ffe59a26ba36b230cbd91641138184b1"
  },
  {
    "url": "guide/webpack.html",
    "revision": "a40d81c2008d798f8ae27c3dc2d8f4a6"
  },
  {
    "url": "guide/WebpackHMR.html",
    "revision": "96088353e2659b2c3f009fcd4292ec24"
  },
  {
    "url": "guide/webpackLoader.html",
    "revision": "e387078e9911ebc82f9b38e46936dd2e"
  },
  {
    "url": "guide/webpackMoudle.html",
    "revision": "3eadb155eb099afa58dde2910a512c7f"
  },
  {
    "url": "guide/webpackPlugin.html",
    "revision": "9dc4fe008827ff011696bb97bf6dc9aa"
  },
  {
    "url": "guide/webpackPluginDesign.html",
    "revision": "d8c521a92e0e8c1ca50fafc11376733e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "9a04582403d1293a88357f7fcb436a75"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
