"use strict";
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeprecationNotice = void 0;
const utils_1 = require("./utils");
function createAdmonition({ children }) {
    return `<Admonition type="caution"> deprecated\n\n${(0, utils_1.render)(children)}\n\n</Admonition>`;
}
function createDeprecationNotice({ deprecated, description, }) {
    return (0, utils_1.guard)(deprecated, () => createAdmonition({
        children: description !== null && description !== void 0 ? description : "This endpoint has been deprecated and may be removed in future versions of the API.",
    }));
}
exports.createDeprecationNotice = createDeprecationNotice;
