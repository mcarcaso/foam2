foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.mlang.sink.Count',
    'foam.dao.ArraySink',
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
            androidx.recyclerview.widget.LinearLayoutManager lm =
              new androidx.recyclerview.widget.LinearLayoutManager(getActivity());
            rv.setLayoutManager(lm);
            androidx.recyclerview.widget.DividerItemDecoration divider =
              new androidx.recyclerview.widget.DividerItemDecoration(rv.getContext(),
              lm.getOrientation());
            rv.addItemDecoration(divider);
            rv.setHasFixedSize(true);
            return rv;
          }
        }
        public static class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
          foam.cross_platform.FObject fobj;
          public ViewHolder(foam.cross_platform.FObject fobj) {
            super((android.view.View) fobj.getProperty("view"));
            this.fobj = fobj;
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
            foam.dao.ArraySink a = o.ArraySink_create().build();
            o.getData().skip(position).limit(1).select(a);
            holder.fobj.setProperty("data", a.getArray().get(0));
          }
          public int getItemCount() {
            foam.mlang.sink.Count s = foam.mlang.sink.Count.CountBuilder(o.getSubX()).build();
            o.getData().select(s);
            return (int) s.getValue();
          }
        }
      `,
      swiftCode: `
        class RowView: UITableViewCell {
          var citationView: foam_cross_platform_ui_View
          init(citationView: foam_cross_platform_ui_View, style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            self.citationView = citationView
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            let view = citationView.getView()!;

            let viewMap: [String:UIView] = ["v":view]
            for v in viewMap.values {
              v.translatesAutoresizingMaskIntoConstraints = false
              addSubview(v)
            }
            addConstraints(NSLayoutConstraint.constraints(
              withVisualFormat: "H:|[v]|",
              options: .alignAllCenterY,
              metrics: nil,
              views: viewMap))
            addConstraints(NSLayoutConstraint.constraints(
              withVisualFormat: "V:|[v]|",
              options: .alignAllCenterY,
              metrics: nil,
              views: viewMap))
          }
          required init?(coder aDecoder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
        }

        public class TableSource: NSObject, UITableViewDataSource {
          var daoView: foam_cross_platform_ui_stack_DAOView? = nil;
          var reusableId = "CellID";
          public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            return daoView!.getCount_()!.getValue();
          }

          public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            var cell = tableView.dequeueReusableCell(withIdentifier: reusableId) as? RowView;
            if cell == nil {
              let citationView = daoView!.getCitationView()!.createView(daoView!.getSubX())!;
              cell = RowView(citationView: citationView, style: .default, reuseIdentifier: reusableId);
            }
            let a = daoView?.ArraySink_create().build();
            _ = daoView?.getData()?.skip(indexPath.row)?.limit(1)?.select(a);
            (cell?.citationView as? foam_cross_platform_FObject)?.setProperty("data", a!.getArray()[0])
            return cell!;
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.dao.DAO',
      name: 'data',
      swiftPostSet: `
        getListenSub_()?.detach();
        getCount_()!.reset(nil);
        _ = newValue?.select(getCount_());
        setListenSub_(newValue?.listen(getCount_(), nil));
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.ViewFactory',
      name: 'citationView'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'listenSub_',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.sink.Count',
      name: 'count_',
      swiftFactory: `return Count_create().build();`
    },

    {
      swiftType: 'TableSource',
      name: 'tableSource',
      swiftFactory: `
        let ts = TableSource()
        ts.daoView = self;
        return ts;
      `
    }
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment();
        f.o = this;
        return f;
      `,
      swiftCode: `
        let tv = UITableViewController();
        tv.tableView.dataSource = getTableSource();
        tv.tableView.reloadData();
        return tv;
      `
    }
  ]
});
