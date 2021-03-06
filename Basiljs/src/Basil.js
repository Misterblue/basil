// @ts-nocheck

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

// Global debugging parameters and variables. "GP.variable"
import { GP } from 'GLOBALS';
import Config from './config.js';
import { BItem, BItemType, BItemState } from './Items/BItem.js';

GGP = GP;   // easy linkage to global context for debugging
GP.Config = Config;

import { Base64 } from 'js-base64';

import { Eventing } from './Eventing/Eventing.js';
import { Graphics } from './Graphics/Graphics.js';
import { Controls } from './Controls/Controls.js';
import { Comm } from './Comm/Comm.js';
import { CreateToken } from './Auth/Auth.js';
import { AnAbility } from './Items/Abilities.js';

import { JSONstringify } from './Utilities.js';

// Force the processing of the CSS format file
import './Basiljs.less';
import { util } from 'protobufjs';

// From https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
// Used to fetch invocation parameters. The request better be well formed as
//     parsing is pretty simplistic and unforgiving.
GP.ConfigGetQueryVariable = function (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
};

// Global debug information printout.
// Adds a text line to a div and scroll the area
GP.LogMessage = function LogMessage(msg, classs) {
    if (GP.EnableDebugLog) {
        if (GP.DebugLogToConsole) {
            if (classs) {
              console.log(classs + ": " + msg);
            }
            else {
              console.log(msg);
            }
        }
        else {
            var debugg = document.querySelector('#DEBUGG');
            if (debugg) {
                var newLine = document.createElement('div');
                newLine.appendChild(document.createTextNode(msg));
                if (classs) {
                newLine.setAttribute('class', classs);
                }
                debugg.appendChild(newLine);
                if (debugg.childElementCount > Config.page.debugLogLines) {
                    debugg.removeChild(debugg.firstChild);
                }
            }
        }
    }
};
GP.DebugLog = function DebugLog(msg) {
    GP.LogMessage(msg, undefined);
};

GP.ErrorLog = function ErrorLog(msg) {
    GP.LogMessage(msg, 'errorMsg');
};

// A special instance that displays it's 'Msg' property in the debug window
export class DebugBItem extends BItem {
    constructor() {
        let debugInstanceName = (Config.Debug && Config.Debug.DebugLogInstanceName)
                          ? Config.Debug.DebugLogInstanceName : 'bitem.debug.b.basil.org';
        super(debugInstanceName, undefined);
        this.SetReady();
        this.lastMessage = 'none';
        this.lastErrorMessage = 'none';

        super.DefineProperties( {
            'msg': {
                get: (th) => { return th.lastMessage; },
                set: (th, val) => {
                    th.lastMessage = val;
                    GP.DebugLog('REMOTE: ' + val);
                },
                name: 'Msg'
            },
            'errormsg': {
                get: (th) => { return th.lastErrorMessage; },
                set: (th, val) => {
                    th.lastErrorMessage = val;
                    GP.ErrorLog('REMOTE: ' + val);
                },
                name: 'ErrorMsg'
            }
        } );
    }
}

// =====================================================
/* The GP variable is for debugging only. Most of the major components
   have an instance there and reference GP for outputting debug information.
   It is NOT intended to be used for general commuinication between modules.
*/

GP.Ready = false;

// Whether to enable DebugLog writing somewhere
if (Config && Config.Debug) {
    GP.EnableDebugLog = Config.Debug.CollectDebug;
    GP.DebugLogToConsole = Config.Debug.DebugLogToConsole;
    // This BItem receives remote messages and calls DebugLog
    GP.debugItem = new DebugBItem();
}

// Called with communication configuration parameters in the URL.
// The 'c' parameter is Base64 encoded JSON data which is merged into
//    'Config' thus it can specify any configuration parameter but
//    most commonly has a 'comm' section for setting up the
//    initial connections from this viewer to space servers.
let configParams = GP.ConfigGetQueryVariable('c');
if (typeof(configParams) === 'undefined') {
    // If no communication parameters are given, use testing parameters
    let testConfigParams = {};
    // If there are parameters for testing, use them
    if (Config.WWTester && Config.WWTester.comm) {
        testConfigParams.comm = Config.WWTester.comm;
    }
    else {
        testConfigParams = {
            'comm': {
                'testmode': true,
                'transportURL': './wwtester.js',
                'transport': 'WW',
                'service': 'BasilComm',
                'TestAsset': {
                    'displayableurl': 'https://files.misterblue.com/BasilTest/testtest88/unoptimized/testtest88.gltf',
                    'loaderType': 'GLTF'
                }
            }
        }
    };
    configParams = Base64.encode(JSON.stringify(testConfigParams));
}

if (configParams) {
    try {
        let unpacked = Base64.decode(configParams);
        let newParams = JSON.parse(unpacked);
        GP.DebugLog("Basiljs: newParams: " + unpacked)
        if (newParams) {
            // Could do this assign but then the caller could change any configuration param.
            // Only the 'comm' and 'auth' parameters are passed in for more security.
            // Object.assign(Config, newParams);    // property merge of unpacked into Config
            Config.comm = newParams.comm;
            Config.auth = newParams.auth;
        }
    }
    catch(e) {
        GP.DebugLog('Basiljs: failed parsing option config: ' + e);
    }
}

// Names of display regions on web page.
let container = document.getElementById(Config.page.webGLcontainerId);
let canvas = document.getElementById(Config.page.webGLcanvasId);

// Create the major component instances (Singletons)
GP.EV = new Eventing();
GP.GR = new Graphics(container, canvas, Eventing.Instance());
GP.CO = new Controls(Eventing.Instance());
GP.CM = new Comm();

// Push the 'Start' button
GP.CO.Start();
GP.GR.Start();
GP.CM.Start();
GP.Ready = true;

// If there are connection parameters, start the first connection
if (Config.comm && Config.comm.transportURL) {
    GP.DebugLog('Basiljs: starting transport and service: ' + JSONstringify(Config.comm));
    GP.CM.ConnectTransportAndService(GP.CM, Config.comm)
    .then( srv => {
        GP.DebugLog('Basiljs: initial service connection successful. Id=' + srv.id);
        try {
            let srvParams = {};
            if (Config.comm.testmode) {
                if (Config.comm.TestAsset) {
                    // If a test asset has been specified in test mode, that asset info
                    //    is passed in the OpenSession request so the test server knows
                    //    what asset to ask for. This is a very round about way of passing
                    //    the asset spec from Basil.js invocation parameters to the server.
                    let testMapping = { // mapping from TestAsset to special OpenSession params.
                        'displayableurl': 'TestURL',
                        'loadertype': 'TestLoaderType' ,
                        'displayabletype': 'TestDisplayableType'
                    };
                    Object.keys(testMapping).forEach( assetProp => {
                        if (Config.comm.TestAsset[assetProp]) {
                            srvParams[testMapping[assetProp]] = Config.comm.TestAsset[assetProp];
                        }
                    });
                };
            };
            // If the invoker passed auth information, construct response with our auth info.
            let userAuth = Config.auth ? Config.auth.UserAuth : undefined;
            let sessionKey = Config.auth? Config.auth.SessionKey : undefined;
            // Create a token that authenticates incoming requests
            let clientAuth = CreateToken('Basil');
            srvParams['ClientAuth'] = clientAuth;
            srvParams['SessionKey'] = sessionKey;
            srv.SetIncomingAuth(clientAuth);

            srv.OpenSession(userAuth, srvParams)
            .then( resp => {
                if (resp.exception) {
                    GP.DebugLog('Basiljs: OpenSession failed: '
                                    + JSONstringify(resp.exception));
                }
                else {
                    // Successful OpenSession. Collect properties passed back.
                    if (resp.IProps) {
                        GP.DebugLog('Basiljs: Session opened to SpaceServer. Params='
                                    + JSONstringify(resp.IProps));
                        srv.OpenSessionProperties = resp.IProps;
                        srv.SetOutgoingAuth(resp.IProps.SessionAuth);
                        srv.SessionKey = resp.IProps.SessionKey;
                        srv.ConnectionKey = resp.IProps.ConnectionKey;
                    }
                }
            })
            .catch( e => {
                GP.DebugLog('Basiljs: error from OpenSession: ' + e.message);
            });
        }
        catch (e) {
            GP.DebugLog('Basiljs: exception from OpenSession: ' + e);
        }
    })
    .catch( e => {
        GP.DebugLog('Basiljs: failed connecting initial SpaceServer: ' + e.message);
    });
};
