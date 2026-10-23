"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "bin",
        "accessor": "Bin",
        "op": "create",
        "method": "POST",
        "path": "/api/bins/{id}/public",
        "action": "public",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "token": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "token"
        ],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin",
        "accessor": "Bin",
        "op": "create",
        "method": "POST",
        "path": "/api/bins/{id}/response",
        "action": "response",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "token": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "token"
        ],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin",
        "accessor": "Bin",
        "op": "create",
        "method": "POST",
        "path": "/api/bins",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin",
        "accessor": "Bin",
        "op": "remove",
        "method": "DELETE",
        "path": "/api/bins/{id}/public",
        "action": "public",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "token": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "token"
        ],
        "queryArgs": [
            {
                "name": "token",
                "wire": "token"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin",
        "accessor": "Bin",
        "op": "remove",
        "method": "DELETE",
        "path": "/api/bins/{id}/response",
        "action": "response",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "token": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "token"
        ],
        "queryArgs": [
            {
                "name": "token",
                "wire": "token"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin_public",
        "accessor": "BinPublic",
        "op": "load",
        "method": "GET",
        "path": "/api/bins/{id}/public.json",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bin_request",
        "accessor": "BinRequest",
        "op": "load",
        "method": "GET",
        "path": "/api/bins/{id}/requests",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "token": "v1",
            "since": "v1",
            "wait": "v1"
        },
        "headers": [],
        "cookies": [],
        "query": [
            "token",
            "wait",
            "since"
        ],
        "queryArgs": [
            {
                "name": "since",
                "wire": "since"
            },
            {
                "name": "token",
                "wire": "token"
            },
            {
                "name": "wait",
                "wire": "wait"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "hnt",
        "accessor": "Hnt",
        "op": "create",
        "method": "POST",
        "path": "/h/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map