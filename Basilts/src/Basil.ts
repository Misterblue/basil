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

// Global debugging parameters and variables. "GP.variable"
import { GlobalReady } from '@Base/Globals';
import { Config } from '@Base/Config';
import { VERSION } from '@Base/VERSION';

import { Comm } from '@Comm/Comm';
import { OpenSessionReqProps } from '@Comm/BMessageProps';
import { Eventing } from '@Eventing/Eventing';
import { Graphics } from '@Graphics/Graphics';
import { UI } from '@Tools/UI';

// Force the processing of the CSS format file
import '@Base/Basilts.less';

import { IsNullOrEmpty, IsNotNullOrEmpty, ConfigGetQueryVariable } from '@Tools/Misc';
import { ExtractStringError, JSONstringify } from '@Tools/Utilities';
import { BKeyedCollection } from '@Tools/bTypes';
import { initLogging, Logger } from '@Tools/Logging';

// Setup logging so progress and errors will be seen
initLogging();
Eventing.init();
UI.init();

// Called with communication configuration parameters in the URL.
// The 'c' parameter is Base64 encoded JSON data which is merged into
//    'Config' thus it can specify any configuration parameter but
//    most commonly has a 'comm' section for setting up the
//    initial connections from this viewer to space servers.
let configParams = ConfigGetQueryVariable('c');
if (IsNullOrEmpty(configParams)) {
    // If no communication parameters are given, use testing parameters
    let testConfigParams: BKeyedCollection = {};
    // If there are parameters for testing, use them
    if (Config.WWTester && Config.WWTester.initialMakeConnection) {
        testConfigParams.Init = Config.WWTester.initialMakeConnection;
    }
    else {
        testConfigParams = {
            'Init': {
                'Transport': 'WW',
                'TransportURL': './wwtester.js',
                'Protocol': 'Basil-JSON',
                'Service': 'SpaceServer',
                'ServiceAuth': '12345678901234567890',
                'OpenParams': {
                    'AssetURL': 'https://files.misterblue.com/BasilTest/testtest88/unoptimized/testtest88.gltf',
                    'LoaderType': 'GLTF'
                }
            }
        };
    };
    configParams = btoa(JSON.stringify(testConfigParams));
};

// Parse the passed configuration parameters and add to Config
if (IsNotNullOrEmpty(configParams)) {
    try {
        const unpacked = atob(configParams);
        const newParams = (JSON.parse(unpacked) as BKeyedCollection);
        Logger.debug(`Basilts: newParams: ${unpacked}`);
        if (IsNotNullOrEmpty(newParams)) {
            // Could do this assign but then the caller could change any configuration param.
            // Only the 'initialMakeConnection' parameter is passed in for more security.
            // deepmerge(Config, newParams);    // property merge of unpacked into Config
            Config.initialMakeConnection = newParams['Init'];
            for (const section of Config.basil.KnownConfigurationSections.split(',')) {
                if (newParams.hasOwnProperty(section)) {
                    if (!Config.hasOwnProperty(section)) {
                        (Config as BKeyedCollection)[section] = newParams[section];
                    }
                    else {
                        Logger.error(`Basilts: Cannot assign existing section with passed invocation parameters.`);
                        Logger.error(`Basilts:  Attempted section = ${section}`);
                    };
                };
            };
        };
    }
    catch(e) {
        const se = <SyntaxError>e;
        Logger.debug(`Basilts: failed parsing option config: ${se.message}`);
    };
};

// Names of display regions on web page.
const container = document.getElementById(Config.page.webGLcontainerId);
const canvas = document.getElementById(Config.page.webGLcanvasId) as HTMLCanvasElement;

// Get the graphics syste running
Graphics.connectGraphics(container, canvas);
Graphics.Start();

// TypeScript issue https://github.com/microsoft/TypeScript/issues/41628
// @ts-ignore
GlobalReady = true;

Logger.info(`Starting Basil version ${VERSION['version-tag']}`);

// If there are connection parameters, start the first connection
if (Config.initialMakeConnection) {
    Logger.debug('Basilts: starting transport and service: ' + JSONstringify(Config.initialMakeConnection));
    try {
        // Connect to the server
        Comm.MakeConnection(Config.initialMakeConnection)
        .then( conn => {
            const sessionParams: OpenSessionReqProps = {
                BasilVersion: VERSION['version-tag'],
                ClientAuth: conn.IncomingAuth.token
            };
            // The original caller can pass test URL and Loader parameters that
            //      this passed to the session. This is for testing using the WebWorker
            if (Config.initialMakeConnection.OpenParams) {
                sessionParams.TestAssetURL = Config.initialMakeConnection.OpenParams.AssetURL;
                sessionParams.TestAssetLoader = Config.initialMakeConnection.OpenParams.LoaderType;
            }
            // Start the displayed session
            conn.CreateSession(sessionParams) 
            .then ( conn2 => {
                Logger.debug(`Basiljs: session is opened`);
            })
            .catch( e => {
                Logger.error(`CreateSession exception: ${ExtractStringError(e)}`);
            });
        })
        .catch( e => {
            Logger.error(`MakeConnection exception: ${ExtractStringError(e)}`);
        });
    }
    catch ( e ) {
        const err = ExtractStringError(e);
        Logger.debug(`Basilts: OpenSession failed: ${err}`);
    };
};
