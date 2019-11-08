/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  name: 'MidiNote',
  package: 'foam.swift.ui',
  swiftImports: ['AudioToolbox'],
  properties: [
    {
      class: 'IntProperty',
      name: 'channel',
      value: 0,
    },
    {
      class: 'IntProperty',
      name: 'note',
      value: 60,
    },
    {
      class: 'IntProperty',
      name: 'velocity',
      value: 64,
    },
    {
      class: 'IntProperty',
      name: 'releaseVelocity',
      value: 0,
    },
    {
      class: 'FloatProperty',
      name: 'duration',
      value: 1,
    },
    {
      swiftType: 'MIDINoteMessage',
      name: 'noteMessage',
      swiftExpressionArgs: [
        'channel',
        'note',
        'velocity',
        'releaseVelocity',
        'duration'
      ],
      swiftExpression: function() {/*
return MIDINoteMessage(
    channel: UInt8(channel),
    note: UInt8(note),
    velocity: UInt8(velocity),
    releaseVelocity: UInt8(releaseVelocity),
    duration: Float32(duration))
      */},
    },
  ],
  actions: [
    {
      name: 'play',
      swiftCode_DELETE: function() {/*
// Creating the sequence

var sequence: MusicSequence? = nil
_ = NewMusicSequence(&sequence)

// Creating a track

var track: MusicTrack? = nil
_ = MusicSequenceNewTrack(sequence!, &track)

// Adding notes

let time = MusicTimeStamp(0.0)
_ = MusicTrackNewMIDINoteEvent(track!, time, &noteMessage)

// Creating a player

var musicPlayer: MusicPlayer? = nil
_ = NewMusicPlayer(&musicPlayer)

_ = MusicPlayerSetSequence(musicPlayer!, sequence!)
_ = MusicPlayerStart(musicPlayer!)
      */},
    },
  ],
});
