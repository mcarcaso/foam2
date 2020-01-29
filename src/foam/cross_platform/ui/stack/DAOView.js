foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'values/dao_view_styles.xml',
      androidCode: `
        <resources>
          <style name="DAOViewStyle" parent="android:Widget">
              <item name="android:scrollbars">vertical</item>
          </style>
        </resources>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends androidx.fragment.app.Fragment {
          DAOView o = null;
          public android.view.View onCreateView(
                  android.view.LayoutInflater inflater,
                  android.view.ViewGroup container,
                  android.os.Bundle savedInstanceState) {
            int id = getResources().getIdentifier("DAOViewStyle", "style", getActivity().getPackageName());
            androidx.recyclerview.widget.RecyclerView rv = new androidx.recyclerview.widget.RecyclerView(new android.view.ContextThemeWrapper(getActivity(), id));
            rv.setAdapter(new Adapter(o));
            rv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
            rv.setLayoutManager(new androidx.recyclerview.widget.LinearLayoutManager(getActivity()));
            rv.setHasFixedSize(true);
            return rv;
          }
        }
        public static class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
          foam.cross_platform.FObject fobj;
          public ViewHolder(foam.cross_platform.FObject fobj) {
            super((android.view.View) fobj.getProperty("view"));
            this.fobj = fobj;
            ((android.view.View) fobj.getProperty("view")).setOnClickListener(v -> {
              ((foam.cross_platform.ui.stack.Stack) fobj.getSubX().getXProp("stack"))
                .push(foam.cross_platform.ui.stack.DetailView.DetailViewBuilder(fobj.getSubX())
                  .setData(fobj.getProperty("data"))
                  .build());
            });
          }
        }
        public static class Adapter extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
          DAOView o = null;
          public Adapter(DAOView data) {
            o = data;
          }
          public ViewHolder onCreateViewHolder(android.view.ViewGroup parent, int viewType) {
            foam.cross_platform.ui.View fobj = o.getCitationView().createView(o.getSubX());
            android.view.View v = fobj.getView();
            return new ViewHolder((foam.cross_platform.FObject) fobj);
          }
          public void onBindViewHolder(ViewHolder holder, int position) {
            foam.dao.ArraySink a = foam.dao.ArraySink.ArraySinkBuilder(o.getSubX()).build();
            o.getData().skip(position).limit(1).select(a);
            holder.fobj.setProperty("data", a.getArray().get(0));
          }
          public int getItemCount() {
            foam.mlang.sink.Count s = foam.mlang.sink.Count.CountBuilder(o.getSubX()).build();
            o.getData().select(s);
            return (int) s.getValue();
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.dao.DAO',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.ViewFactory',
      name: 'citationView'
    },
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment();
        f.o = this;
        return f;
      `
    }
  ]
});
