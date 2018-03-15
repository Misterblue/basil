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

// All things referenced by the Basil interface are "items' and thus they
//   have these access methods
export class BItem {
    constructor() {
        this.props = new Map();
    }
    // The key this item is stored under
    get key() {
    }
    set key(value) {
        this.key = value;
    }
    // The type of the item
    get type() {
    }
    GetProperties(filter) {
        return this.props;
    }
    SetProperty(prop, value) {
        props[prop] = value;
    }
    SetProperties(propValues) {
        Object.GetOwnpropValues.forEach(prop => {
            this.props[prop] = propValues[prop];
        });
    }
}