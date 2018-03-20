/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.input",
  name: "Mouse",
  topics: [
    "down",
    "move",
    "touch",
    "up"
  ],
  properties: [
    "lastTouch",
    "x",
    "y",
    {
      name: "element",
      postSet: function (old, e) {
        if ( old ) {
          old.removeEventListener('mousedown', this.onMouseDown);
          old.removeEventListener('mouseup',   this.onMouseUp);
          old.removeEventListener('mousemove', this.onMouseMove);
        }
        e.addEventListener('mousedown', this.onMouseDown);
        e.addEventListener('mouseup',   this.onMouseUp);
        e.addEventListener('mousemove', this.onMouseMove);
      }
    }
  ],
  methods: [
    function install(element) {
      this.ref = element;
    }
  ],
  listeners: [
    {
      name: "onMouseDown",
      code: function (e) {
        var bounds = this.element.getBoundingClientRect();

        this.x = e.clientX - bounds.left;
        this.y = e.clientY - bounds.top;

        this.down.pub();

        if ( this.touch.hasListeners() ) {
          if ( this.lastTouch ) this.lastTouch.detach();

          this.lastTouch = foam.input.TouchEvent.create();
          this.lastTouch.onDetach(this.lastTouch.x$.follow(this.x$));
          this.lastTouch.onDetach(this.lastTouch.y$.follow(this.y$));

          this.touch.pub(this.lastTouch);

          if ( this.lastTouch && this.lastTouch.claimed ) e.preventDefault();
        }

        // While the mouse is down, track the movements and mouseup on the
        // entire window so it's tracked if/when the mouse leaves the element.
        window.addEventListener('mouseup',   this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
      }
    },
    {
      name: "onMouseUp",
      code: function (e) {
        this.up.pub();

        if ( this.lastTouch ) {
          this.lastTouch.detach();
          this.lastTouch = undefined;
        }

        window.removeEventListener('mouseup',   this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
      }
    },
    {
      name: "onMouseMove",
      code: function (e) {
        if ( this.lastTouch ||
             this.hasListeners('propertyChange') ||
             this.move.hasListeners() ) {

          var bounds = this.element.getBoundingClientRect();

          this.x = e.clientX - bounds.left;
          this.y = e.clientY - bounds.top;

          this.move.pub();

          if ( this.lastTouch && this.lastTouch.claimed ) e.preventDefault();
        }
      }
    }
  ]
});