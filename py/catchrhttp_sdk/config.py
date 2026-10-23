# CatchrHttp SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CatchrHttp",
            "slug": "catchr-http",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://catchr.perch-app.workers.dev",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "bin": {},
                "bin_public": {},
                "bin_request": {},
                "hnt": {},
            },
        },
        "entity": {
      "bin": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bin",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/api/bins/{id}/public",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "public",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "public",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "public",
                  "exist": [
                    "id",
                    "token",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/api/bins/{id}/response",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "response",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "response",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "response",
                  "exist": [
                    "id",
                    "token",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/api/bins",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/bins/{id}/public",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "public",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "public",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "public",
                  "exist": [
                    "id",
                    "token",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/bins/{id}/response",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "response",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "response",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "response",
                  "exist": [
                    "id",
                    "token",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bin_public": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bin_public",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/bins/{id}/public.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "public.json",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "public.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bin_request": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bin_request",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/bins/{id}/requests",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "bins",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "requests",
                  },
                ],
                "parts": [
                  "api",
                  "bins",
                  "{id}",
                  "requests",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "since",
                      "orig": "since",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "wait",
                      "orig": "wait",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "token",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "hnt": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "hnt",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/h/{id}",
                "segments": [
                  {
                    "lit": "h",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "h",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
