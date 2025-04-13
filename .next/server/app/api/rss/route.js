"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/rss/route";
exports.ids = ["app/api/rss/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frss%2Froute&page=%2Fapi%2Frss%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frss%2Froute.ts&appDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frss%2Froute&page=%2Fapi%2Frss%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frss%2Froute.ts&appDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_amino_code_blog_src_app_api_rss_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/rss/route.ts */ \"(rsc)/./src/app/api/rss/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/rss/route\",\n        pathname: \"/api/rss\",\n        filename: \"route\",\n        bundlePath: \"app/api/rss/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\amino\\\\code\\\\blog\\\\src\\\\app\\\\api\\\\rss\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_amino_code_blog_src_app_api_rss_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/rss/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyc3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJzcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJzcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhbWlubyU1Q2NvZGUlNUNibG9nJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNhbWlubyU1Q2NvZGUlNUNibG9nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1U7QUFDdkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLz9mNjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGFtaW5vXFxcXGNvZGVcXFxcYmxvZ1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyc3NcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jzcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jzc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcnNzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYW1pbm9cXFxcY29kZVxcXFxibG9nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJzc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yc3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frss%2Froute&page=%2Fapi%2Frss%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frss%2Froute.ts&appDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/rss/route.ts":
/*!**********************************!*\
  !*** ./src/app/api/rss/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rss-parser */ \"(rsc)/./node_modules/rss-parser/index.js\");\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst parser = new (rss_parser__WEBPACK_IMPORTED_MODULE_1___default())({\n    customFields: {\n        item: [\n            \"media:content\",\n            \"media:thumbnail\",\n            \"enclosure\"\n        ]\n    }\n});\nasync function POST(request) {\n    try {\n        const { feedUrl } = await request.json();\n        if (!feedUrl) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Feed URL is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Add CORS headers\n        const headers = {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Allow-Methods\": \"POST, OPTIONS\",\n            \"Access-Control-Allow-Headers\": \"Content-Type\"\n        };\n        // Handle OPTIONS request for CORS\n        if (request.method === \"OPTIONS\") {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(null, {\n                headers\n            });\n        }\n        const feed = await parser.parseURL(feedUrl);\n        const posts = feed.items.map((item)=>{\n            // Try to get image URL from various sources\n            const imageUrl = item.enclosure?.url || item[\"media:content\"]?.[\"$\"]?.url || item[\"media:thumbnail\"]?.[\"$\"]?.url;\n            return {\n                id: item.guid || item.link || Math.random().toString(),\n                title: item.title || \"Untitled\",\n                content: item.content || item.contentSnippet || \"\",\n                excerpt: item.contentSnippet || item.content?.slice(0, 150) || \"\",\n                date: item.pubDate || new Date().toISOString(),\n                author: item.creator || item.author || \"Unknown\",\n                slug: item.guid || item.link?.split(\"/\").pop() || Math.random().toString(),\n                imageUrl\n            };\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            posts\n        }, {\n            headers\n        });\n    } catch (error) {\n        console.error(\"Error fetching RSS feed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch RSS feed. Please check the URL and try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yc3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNYO0FBR2hDLE1BQU1FLFNBQVMsSUFBSUQsbURBQU1BLENBQUM7SUFDeEJFLGNBQWM7UUFDWkMsTUFBTTtZQUFDO1lBQWlCO1lBQW1CO1NBQVk7SUFDekQ7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7UUFFdEMsSUFBSSxDQUFDRCxTQUFTO1lBQ1osT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF1QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUU7UUFFQSxtQkFBbUI7UUFDbkIsTUFBTUMsVUFBVTtZQUNkLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsZ0NBQWdDO1FBQ2xDO1FBRUEsa0NBQWtDO1FBQ2xDLElBQUlMLFFBQVFNLE1BQU0sS0FBSyxXQUFXO1lBQ2hDLE9BQU8sSUFBSVoscURBQVlBLENBQUMsTUFBTTtnQkFBRVc7WUFBUTtRQUMxQztRQUVBLE1BQU1FLE9BQU8sTUFBTVgsT0FBT1ksUUFBUSxDQUFDUDtRQUVuQyxNQUFNUSxRQUFvQkYsS0FBS0csS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ2I7WUFDeEMsNENBQTRDO1lBQzVDLE1BQU1jLFdBQ0pkLEtBQUtlLFNBQVMsRUFBRUMsT0FDaEJoQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUVnQixPQUM5QmhCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRWdCO1lBRWxDLE9BQU87Z0JBQ0xDLElBQUlqQixLQUFLa0IsSUFBSSxJQUFJbEIsS0FBS21CLElBQUksSUFBSUMsS0FBS0MsTUFBTSxHQUFHQyxRQUFRO2dCQUNwREMsT0FBT3ZCLEtBQUt1QixLQUFLLElBQUk7Z0JBQ3JCQyxTQUFTeEIsS0FBS3dCLE9BQU8sSUFBSXhCLEtBQUt5QixjQUFjLElBQUk7Z0JBQ2hEQyxTQUFTMUIsS0FBS3lCLGNBQWMsSUFBSXpCLEtBQUt3QixPQUFPLEVBQUVHLE1BQU0sR0FBRyxRQUFRO2dCQUMvREMsTUFBTTVCLEtBQUs2QixPQUFPLElBQUksSUFBSUMsT0FBT0MsV0FBVztnQkFDNUNDLFFBQVFoQyxLQUFLaUMsT0FBTyxJQUFJakMsS0FBS2dDLE1BQU0sSUFBSTtnQkFDdkNFLE1BQU1sQyxLQUFLa0IsSUFBSSxJQUFJbEIsS0FBS21CLElBQUksRUFBRWdCLE1BQU0sS0FBS0MsU0FBU2hCLEtBQUtDLE1BQU0sR0FBR0MsUUFBUTtnQkFDeEVSO1lBQ0Y7UUFDRjtRQUVBLE9BQU9sQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVPO1FBQU0sR0FBRztZQUFFSjtRQUFRO0lBQ2hELEVBQUUsT0FBT0YsT0FBTztRQUNkZ0MsUUFBUWhDLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBZ0UsR0FDekU7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vc3JjL2FwcC9hcGkvcnNzL3JvdXRlLnRzPzdhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgUGFyc2VyIGZyb20gJ3Jzcy1wYXJzZXInO1xyXG5pbXBvcnQgeyBCbG9nUG9zdCB9IGZyb20gJ0AvdHlwZXMvYmxvZyc7XHJcblxyXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKHtcclxuICBjdXN0b21GaWVsZHM6IHtcclxuICAgIGl0ZW06IFsnbWVkaWE6Y29udGVudCcsICdtZWRpYTp0aHVtYm5haWwnLCAnZW5jbG9zdXJlJ10sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZmVlZFVybCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBcclxuICAgIGlmICghZmVlZFVybCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZlZWQgVVJMIGlzIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBDT1JTIGhlYWRlcnNcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ1BPU1QsIE9QVElPTlMnLFxyXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBIYW5kbGUgT1BUSU9OUyByZXF1ZXN0IGZvciBDT1JTXHJcbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdPUFRJT05TJykge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShudWxsLCB7IGhlYWRlcnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmVlZCA9IGF3YWl0IHBhcnNlci5wYXJzZVVSTChmZWVkVXJsKTtcclxuICAgIFxyXG4gICAgY29uc3QgcG9zdHM6IEJsb2dQb3N0W10gPSBmZWVkLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAvLyBUcnkgdG8gZ2V0IGltYWdlIFVSTCBmcm9tIHZhcmlvdXMgc291cmNlc1xyXG4gICAgICBjb25zdCBpbWFnZVVybCA9IFxyXG4gICAgICAgIGl0ZW0uZW5jbG9zdXJlPy51cmwgfHwgXHJcbiAgICAgICAgaXRlbVsnbWVkaWE6Y29udGVudCddPy5bJyQnXT8udXJsIHx8IFxyXG4gICAgICAgIGl0ZW1bJ21lZGlhOnRodW1ibmFpbCddPy5bJyQnXT8udXJsO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogaXRlbS5ndWlkIHx8IGl0ZW0ubGluayB8fCBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUgfHwgJ1VudGl0bGVkJyxcclxuICAgICAgICBjb250ZW50OiBpdGVtLmNvbnRlbnQgfHwgaXRlbS5jb250ZW50U25pcHBldCB8fCAnJyxcclxuICAgICAgICBleGNlcnB0OiBpdGVtLmNvbnRlbnRTbmlwcGV0IHx8IGl0ZW0uY29udGVudD8uc2xpY2UoMCwgMTUwKSB8fCAnJyxcclxuICAgICAgICBkYXRlOiBpdGVtLnB1YkRhdGUgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGF1dGhvcjogaXRlbS5jcmVhdG9yIHx8IGl0ZW0uYXV0aG9yIHx8ICdVbmtub3duJyxcclxuICAgICAgICBzbHVnOiBpdGVtLmd1aWQgfHwgaXRlbS5saW5rPy5zcGxpdCgnLycpLnBvcCgpIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcclxuICAgICAgICBpbWFnZVVybCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHBvc3RzIH0sIHsgaGVhZGVycyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgUlNTIGZlZWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIFJTUyBmZWVkLiBQbGVhc2UgY2hlY2sgdGhlIFVSTCBhbmQgdHJ5IGFnYWluLicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUGFyc2VyIiwicGFyc2VyIiwiY3VzdG9tRmllbGRzIiwiaXRlbSIsIlBPU1QiLCJyZXF1ZXN0IiwiZmVlZFVybCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImhlYWRlcnMiLCJtZXRob2QiLCJmZWVkIiwicGFyc2VVUkwiLCJwb3N0cyIsIml0ZW1zIiwibWFwIiwiaW1hZ2VVcmwiLCJlbmNsb3N1cmUiLCJ1cmwiLCJpZCIsImd1aWQiLCJsaW5rIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidGl0bGUiLCJjb250ZW50IiwiY29udGVudFNuaXBwZXQiLCJleGNlcnB0Iiwic2xpY2UiLCJkYXRlIiwicHViRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImF1dGhvciIsImNyZWF0b3IiLCJzbHVnIiwic3BsaXQiLCJwb3AiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/rss/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/xmlbuilder","vendor-chunks/entities","vendor-chunks/xml2js","vendor-chunks/rss-parser","vendor-chunks/sax"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frss%2Froute&page=%2Fapi%2Frss%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frss%2Froute.ts&appDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Camino%5Ccode%5Cblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();