foam.CLASS({
  package: 'foam.audio',
  name: 'Speak',
  androidImplements: [
    'android.speech.tts.TextToSpeech.OnInitListener'
  ],
  swiftImplements: [
    'AVSpeechSynthesizerDelegate'
  ],
  swiftImports: [
    'AVFoundation'
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public void onInit(int status) {
          setIsReady(status == 0);
        }
      `,
      swiftCode: `
        public func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
          if synthesizer.isSpeaking { return }
          setNumActivePlays(getNumActivePlays()-1);
        }
      `
    }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'text',
    },
    {
      class: 'BooleanProperty',
      name: 'isReady'
    },
    {
      class: 'BooleanProperty',
      name: 'isActive'
    },
    {
      class: 'IntProperty',
      name: 'numActivePlays'
    },

    // Swift

    {
      swiftType: 'AVAudioSession',
      name: 'audioSession',
      flags: ['swift'],
      swiftFactory: `
        let avs = AVAudioSession.sharedInstance()
        try? avs.setCategory(.playback, options: .duckOthers)
        return avs;
      `
    },
    {
      swiftType: 'AVSpeechSynthesizer',
      flags: ['swift'],
      name: 'synthesizer',
      swiftFactory: `
        let s = AVSpeechSynthesizer();
        s.delegate = self;
        return s;
      `
    },

    // Android
    {
      androidType: 'android.speech.tts.TextToSpeech',
      name: 'textToSpeech',
      flags: ['android'],
      androidFactory: `
        android.speech.tts.TextToSpeech speech = new android.speech.tts.TextToSpeech(getAndroidContext(), this);
        speech.setOnUtteranceProgressListener(new android.speech.tts.UtteranceProgressListener() {
          public void onStart(String utteranceId) {}
          public void onError(String utteranceId) {}
          public void onDone(String utteranceId) {
            setNumActivePlays(getNumActivePlays()-1);
          }
        });
        return speech;
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.isActive', 'manageSessionState'],
    ['', 'propertyChange.numActivePlays', 'manageSessionState']
  ],
  listeners: [
    {
      name: 'manageSessionState',
      isMerged: true,
      mergeDelay: 0,
      androidCode: `
        // Duck currently playing audio?
      `,
      swiftCode: `
        if ( getIsActive() ) {
          try? getAudioSession().setActive(true);
        } else if ( getNumActivePlays() == 0 ) {
          try? getAudioSession().setActive(false);
        }
      `
    }
  ],
  methods: [
    {
      name: 'init',
      code: function() {},
      androidCode: `
        // Touch the TextToSpeech to initialize it. androidContext can change for various
        // reasons (orientation change being one) so be sure to create a new one and shut
        // down the previous one when it changes.
        getTextToSpeech();
        onDetach(getAndroidContext$().slotSub((sub, args) -> {
          getTextToSpeech().shutdown();
          clearProperty("textToSpeech");
        }));
        onDetach(<%=detachable(\`
          getTextToSpeech().shutdown();
        \`)%>);
      `,
      swiftCode: `
        // Set isReady async because the AudioSession needs some time for the
        // category to get respected the first time for some reason.
        _ = getAudioSession()
        DispatchQueue.main.async {
          self.setIsReady(true);
        };
        onDetach(<%=detachable(\`
          try? self?.getAudioSession().setActive(false);
        \`)%>);
      `,
    }
  ],
  actions: [
    {
      name: 'play',
      isEnabledExpressionArgs: ['isReady'],
      androidIsEnabled: 'return isReady;',
      swiftIsEnabled: 'return isReady;',
      androidCode: `
        setNumActivePlays(getNumActivePlays()+1);
        getTextToSpeech().speak(getText(), android.speech.tts.TextToSpeech.QUEUE_FLUSH, null, null);
      `,
      swiftCode: `
        setNumActivePlays(getNumActivePlays()+1);
        getSynthesizer().speak(AVSpeechUtterance(string: getText()!));
      `
    }
  ]
});