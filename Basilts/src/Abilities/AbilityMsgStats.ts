// Copyright 2021 Robert Adams
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

import { Ability } from '@Abilities/Ability';
import { BItem, PropValue, PropEntry } from '@BItem/BItem';
import { BKeyedCollection } from '@Base/Tools/bTypes';

export const MessagesReceivedProp: string = 'messagesReceived';
export const MessagesSentProp: string = 'messagesSent';

export enum BItemState {
    UNINITIALIZED = 0,
    LOADING,
    FAILED,
    READY,
    SHUTDOWN
};

export const MsgStatsAbilityName = "MsgStats";

export function AbilityMsgStatsFromProps(pProps: BKeyedCollection): AbilityMsgStats {
    return new AbilityMsgStats();
};

// Ability that holds messages received and sent count
export class AbilityMsgStats extends Ability {

    _messagesSent: number = 0;
    _messagesReceived: number = 0;

    constructor() {
        super(MsgStatsAbilityName);
    };

    addProperties(pBItem: BItem): void {
        // Get and Set the number of received messages
        pBItem.addProperty({
            name: MessagesReceivedProp,
            ability: this,
            getter: (pPE: PropEntry, pBItem: BItem): PropValue => {
                return (pPE.ability as AbilityMsgStats)._messagesReceived;
            },
            setter: (pPE: PropEntry, pBItem: BItem, pVal: PropValue): void => {
                (pPE.ability as AbilityMsgStats)._messagesReceived = <number>pVal;
            }
        });
        // Get and Set the number of sent messages
        pBItem.addProperty({
            name: MessagesSentProp,
            ability: this,
            getter: (pPE: PropEntry, pBItem: BItem): PropValue => {
                return (pPE.ability as AbilityMsgStats)._messagesSent;
            },
            setter: (pPE: PropEntry, pBItem: BItem, pVal: PropValue): void => {
                (pPE.ability as AbilityMsgStats)._messagesSent = <number>pVal;
            }
        });
    };
};
