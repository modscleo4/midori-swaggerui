/**
 * Copyright 2023 Dhiego Cassiano Fogaça Barbosa
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { dirname, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { Response } from "midori/http";
import { Router } from "midori/router";

export default function addSwaggerRoutes(Router: Router): void {
    Router.get('/docs', async (req, app) => Response.file(fileURLToPath(normalize(dirname(import.meta.url) + '/../index.html'))));
    Router.get('/openapi.yml', async (req, app) => Response.file('./openapi.yml', req));
}
