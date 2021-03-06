// Copyright 2018 Robert Adams
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

import GP from 'GP';
import { BItem, BItemType, BItemState } from '../Items/BItem.js';

export class Displayable extends BItem {
    constructor(id, auth, displayInfo) {
        super(id, auth, BItemType.DISPLAYABLE);
        // A kludge that give all Displayables a handle to the Graphics instance.
        // In the future, there might be multiple graphics engines.
        this.graphics = GP.GR;

        super.DefineProperties( {
            '_DisplayableType': {
                'get': () => { return this.DisplayableType; }
            }
        });
    }

    ReleaseResources() {
        super.ReleaseResources();
    }
}
Displayable.DisplayableType = "UNKNOWN";
