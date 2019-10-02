/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.geocode',
  name: 'GoogleMapsPlacesResponse',

  documentation: `Response model representing response from calling Google's Places API`,

  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.nanos.geocode.GoogleMapsPlacesPredictions',
      name: 'predictions',
      documentation: 'Array of geocoded address information and geometry information'
    },
    {
      class: 'StringProperty',
      name: 'status',
      documentation: 'Contains the status of the request'
    },
    {
      class: 'StringProperty',
      name: 'error_message',
      documentation: 'Contains an error message'
    }
  ]
});
