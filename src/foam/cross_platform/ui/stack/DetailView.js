foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DetailView'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends androidx.fragment.app.Fragment {
          public foam.cross_platform.ui.widget.DetailView dv = null;
          public android.view.View onCreateView(
                  android.view.LayoutInflater inflater, 
                  android.view.ViewGroup container, 
                  android.os.Bundle savedInstanceState) {
            android.widget.ScrollView sv = new android.widget.ScrollView(dv.getAndroidContext());
            dv.clearProperty("view");
            sv.addView(dv.getView());
            return sv;
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment();
        f.dv = DetailView_create()
          .build();
        f.dv.onDetach(f.dv.getData$().follow(getData$()));
        return f;
      `
    }
  ]
});
