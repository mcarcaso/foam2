/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
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

foam.CLASS({
  package: 'foam.net.auth',
  name: 'TokenBearerCredential',

  documentation: `Data class for "Authorization: Bearer <access token>"-style
      authentication.`,

  properties: [
    {
      class: 'StringProperty',
      documentation: `Token used for "Authorization: Bearer <token>"-style HTTP
          request authentication.`,
      name: 'accessToken'
    },
    {
      class: 'IntProperty',
      documentation: `date.getTime()-style time stamp of "accessToken"
          expiration.`,
      name: 'expiry'
    }
  ]
});
