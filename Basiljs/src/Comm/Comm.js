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

import { GP } from 'GLOBALS';
import Config from '../config.js';

import { BItem, BItemType } from '../Items/BItem.js';
import { RegisterAbilities } from '../Items/AbilityRegistration.js';

import { BasilComm } from './BasilComm.js';
import { BuildBasilMessageOpMap } from './BasilMessageOps.js';

import { BTransportWW } from './BTransportWW.js';
import { BTransportWS } from './BTransportWS.js';
import { BTransportTest } from './BTransportTest.js';

import { CombineParameters, JSONstringify } from '../Utilities.js';
import { BException } from '../BException.js';

export class Comm extends BItem {
    constructor() {
        GP.DebugLog('Comm: constructor');
        super('org.basil.b.comm', undefined, BItemType.COMM);
        this.layer = Config.layers ? Config.layers.comm : 'org.basil.b.layer.comm';

        this.transports = new Map();

        // Build the table of ops to names and via versa
        BuildBasilMessageOpMap();

        // Do registration of the ability constructors.
        // Kinda of a kludge but had problems with WebPack and re-invocation of Globals.
        RegisterAbilities();
    }

    Start() {
        this.SetReady();
    };

    // Make a connection to a service.
    // 'parms' is passed to the created transport/service
    static ConnectTransport(pComm, parms) {
        let params = CombineParameters(undefined, parms, {
            'transportId': undefined,     // identifier for the created transport
            'transport': 'WS',            // the type of transport to connect (WW, WS, test)
            'transportURL': undefined,    // URL to connect transport to
            'waitTilTransportReadyMS': 5000  // MS before timeout waiting for transport ready
        });
        return new Promise(function(resolve, reject) {
            let xport = undefined;
            // If there is already a transport for this destination URL, return that
            if (pComm.transports.has(params.transporturl)) {
                xport = pComm.transports.get(params.transporturl);
                GP.DebugLog('Comm.ConnectTransport: reusing transport '
                            + xport.id
                            + ' (' + params.transporturl + ')' );
            }
            else {
                // Create a new transport to the URL
                try {
                    switch (params.transport) {
                        case 'WW':
                            xport = new BTransportWW(params);
                            break;
                        case 'WS':
                            xport = new BTransportWS(params);
                            break;
                        case 'Test':
                            xport = new BTransportTest(params);
                            break;
                        default:
                            let errorMsg = 'Comm.ConnectTransport: transport type unknown: '
                                            + JSONstringify(params);
                            GP.ErrorLog(errorMsg);
                            reject(errorMsg);
                    }
                    pComm.transports.set(params.transporturl, xport);
                    GP.DebugLog('Comm.ConnectTransport: created transport ' + xport.id)
                }
                catch(e) {
                    reject('Comm.ConnectTransport: exception opening transport: ' + e.message);
                }
            }
            if (xport) {
                xport.WhenReady(params.waittiltransportreadyms)
                .then( xxport => {
                    resolve(xxport);
                })
                .catch( e => {
                    reject(new BException('Conn.ConnectTransport: timeout waiting for ready'));
                });
            }
            else {
                let errorMsg = 'Comm.ConnectTransport: Did not create transport: '
                                + JSONstringify(params);
                GP.ErrorLog(errorMsg);
                reject(errorMsg);
            }
        });
    };

    // This will connect a transport to either a Pseto service or a
    //     Basil client (Creating the BasilService for this end))
    // Note: this just makes the transport connection and sets up the messsage
    //     processors. Actual communication happens later.
    // Returns a Promise that has a handle to the created processor or undefined.
    static ConnectService(pComm, pTransport, pParams) {
        let params = CombineParameters(undefined, pParams, {
            'service': 'BasilComm',     // or 'Pesto'
            'serviceId': undefined,     // if not passed, unique one created
            'pestoId': undefined,       // if not passed, unique one created
        });
        return new Promise(function(resolve, reject) {
            let svc = undefined;
            let serviceType = params.service;
            let errorMsg = '';
            switch (serviceType) {
                case 'BasilComm':
                    svc = new BasilComm(pTransport, params);
                    svc.Start();
                    GP.DebugLog('Comm.Connect: created BasilComm. Id=' + svc.id);
                    resolve(svc);
                    break;
                case 'SpaceServer':
                    errorMsg = 'Comm.Connect: SOMEONE CALLED for SpaceServer';
                    GP.ErrorLog(errorMsg)
                    reject(errorMsg)
                    break;
                case 'SpaceServerClient':
                    errorMsg = 'Comm.Connect: SOMEONE CALLED for SpaceServerClient!!';
                    GP.ErrorLog(errorMsg)
                    reject(errorMsg)
                    break;
                case 'Pesto':
                    errorMsg = 'Comm.Connect: SOMEONE CALLED for Pesto!!';
                    GP.ErrorLog(errorMsg)
                    reject(errorMsg)
                    break;
                default:
                    errorMsg = 'Comm.Connect: service type unknown: ' + JSONstringify(params.service);
                    GP.ErrorLog(errorMsg)
                    reject(errorMsg)
            }
        });
    };

    ConnectTransportAndService(pComm, pParams) {
        let params = CombineParameters(undefined, pParams, {
            'transportId': undefined,   // identifier for the created transport
            'transport': 'WS',          // the type of transport to connect (WW, WS, test)
            'transportURL': undefined,  // URL to connect transport to
            'waitTilTransportReadyMS': 5000,    // MS before timeout waiting for transport ready
            'service': 'BasilComm',     // or 'Pesto'
            'serviceId': undefined,     // if not passed, unique one created
            'pestoId': undefined        // if not passed, unique one created
        });
        return new Promise( function(resolve, reject) {
            Comm.ConnectTransport(pComm, params)
            .then( function(xport) {
                GP.DebugLog('Comm.ConnectTransportAndService: transport connected. Id=' + xport.id);
                Comm.ConnectService(pComm, xport, params)
                .then( srv => {
                    GP.DebugLog('Comm.ConnectTransportAndService: service connected. Id=' + srv.id);
                    resolve(srv);
                })
                .catch ( e => {
                    reject(e);
                });
            } )
            .catch( e => {
                reject(e);
            });
        } );
    }
}
