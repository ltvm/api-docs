---
title: Introduction
slug: /
sidebar_position: 1
---

## Overview
This page is built using [Docusaurus 2](https://docusaurus.io/), serving a centralize view for API docs of KyberSwap services.

This page configuration and API specs are managed in [api-docs](https://github.com/KyberNetwork/api-docs) repository.

## How to contribute
### `api-docs` folder structure
```
api-docs
├── docs
│   ├── aggregator.md
│   └── intro.md
│   └── ...
├── openapi
│   ├── aggregator
│   │   ├── ...
│   │   └── openapi.yaml
│   ├── notification
│   │   ├── ...
│   │   └── openapi.yaml
│   ├── referral
│   │   ├── ...
│   │   └── openapi.yaml
│   └── ...
├── docusaurus.config.js
└── ...
```
- `docs` - Contains the Markdown files for the doc.
- `openapi` - Contains the YAML files for the API specs.
- `docusaurus.config.js` - A config file containing the site configuration

### The spec
The API specs are followed [openAPI](https://www.openapis.org/) standard and placed under `openapi` folder of [api-docs](https://github.com/KyberNetwork/api-docs).

Each service has its own folder under `openapi`. For example:
    - Notification Service → `openapi/notification`
    - Aggregator Service → `openapi/aggreagtor`
    - …
Each service has one root file `openapi.yaml`.

> **_NOTE:_**  To make it easier to scale, we can move paths, parameters, responses and schemas into files

### The centralize UI
The centralize UI is a page where we can find all API docs webites.

If your service has not been registered to the centralize UI, please update config in `docusaurus.config.js`:
```javscript
const config = {
    ....
      'redocusaurus',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        specs: [
          {
            id: 'aggregator-api',
            spec: 'openapi/aggregator/openapi.yaml',
            route: '/api/aggregator',
          },
          {
            id: 'notification-api',
            spec: 'openapi/notification/openapi.yaml',
            route: '/api/notification',
          },
          {
            id: 'referral-api',
            spec: 'openapi/referral/openapi.yaml',
            route: '/api/referral',
          }
        ],
        theme: lightCodeTheme,
      },
    ]
  ],
  ....
```

Each service has its own page under `docs`. For example:
    - Notification Service → `docs/notification.md`
    - Aggregator Service → `docs/aggregator.md`
    - …

This is a doc sample:
```
---
title: Aggregator
sidebar_position: 2 #=> sidebar position
---

import ApiDocMdx from '@theme/ApiDocMdx';

<ApiDocMdx id="aggregator-api" /> #=> id you have configured in previous step
```

## Help and Feedback
- For problems setting up or using this product, please contact hank@kyber.network
