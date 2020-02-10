foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  topics: [
    'onDAOUpdate'
  ],
  requires: [
    'foam.cross_platform.ui.stack.DetailView',
    'foam.dao.ArraySink',
    'foam.mlang.sink.Count',
    'foam.dao.FnSink',
  ],
  imports: [
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
    },
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
            v.setOnClickListener(view -> {
              o.getStack().push(o.DetailView_create()
                .setData(((foam.cross_platform.FObject) fobj).getProperty("data"))
                .build());
            });
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
        class TableViewController: UITableViewController {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView, style: UITableView.Style) {
            daoView = o;
            super.init(style: style);
            tableView.rowHeight = CGFloat(o.getRowHeight());
            tableView.dataSource = o.getTableSource();
            tableView.delegate = o.getTableDelegate();
            tableView.reloadData();
            o.onDetach(o.onDAOUpdate().sub(nil, o.AnonymousListener_create()
              .setFn({ [weak self] (_: foam_core_Detachable?, args: [Any?]?) -> Void in
                self?.tableView.reloadData();
              })
              .build()));
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func viewWillAppear(_ animated: Bool) {
            tableView.reloadData();
          }
        }
        class RowView: UITableViewCell {
          var citationView: foam_cross_platform_ui_View
          init(citationView: foam_cross_platform_ui_View, style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            self.citationView = citationView
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            citationView.getView()!.frame = frame;
            separatorInset = UIEdgeInsets.zero;
            addSubview(citationView.getView()!)
          }
          override func layoutSubviews() {
            super.layoutSubviews();
            let size = citationView.getView()!.sizeThatFits(CGSize(width: frame.width, height: CGFloat.greatestFiniteMagnitude))
            citationView.getView()!.frame = CGRect(
              x: frame.minX,
              y: (frame.height - size.height) / 2,
              width: frame.width,
              height: size.height
            );
          }
          required init?(coder aDecoder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
        }

        public class TableViewDelegate: NSObject, UITableViewDelegate {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView) {
            daoView = o;
          }
          public func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
            let s = daoView.getStack();
            guard let row = tableView.cellForRow(at: indexPath) as? RowView else { return }
            let fobj = row.citationView as! foam_cross_platform_FObject
            s?.push(daoView.DetailView_create()
              .setData(fobj.getProperty("data"))
              .build());
          }
        }

        public class TableSource: NSObject, UITableViewDataSource {
          var daoView: foam_cross_platform_ui_stack_DAOView;
          init(_ o: foam_cross_platform_ui_stack_DAOView) {
            daoView = o;
          }
          var reusableId = "CellID";
          public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            let c = daoView.Count_create().build();
            _ = daoView.getData()!.select(c);
            return c.getValue();
          }

          public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            var cell = tableView.dequeueReusableCell(withIdentifier: reusableId) as? RowView;
            if cell == nil {
              let citationView = daoView.getCitationView()!.createView(daoView.getSubX())!;
              cell = RowView(citationView: citationView, style: .default, reuseIdentifier: reusableId);
            }
            let a = daoView.ArraySink_create().build();
            _ = daoView.getData()?.skip(indexPath.row)?.limit(1)?.select(a);
            (cell?.citationView as? foam_cross_platform_FObject)?.setProperty("data", a.getArray()[0])
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
        setListenSub_(FnSink_create().setFn(<%=fn(\`
          self!.onDAOUpdate_(nil, nil)
          return nil;
        \`)%>).build());
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
      class: 'IntProperty',
      name: 'rowHeight'
    },
    {
      swiftType: 'TableViewDelegate',
      flags: ['swift'],
      name: 'tableDelegate',
      swiftFactory: `return TableViewDelegate(self)`
    },
    {
      swiftType: 'TableSource',
      flags: ['swift'],
      name: 'tableSource',
      swiftFactory: `return TableSource(self)`
    }
  ],
  listeners: [
    {
      name: 'onDAOUpdate_',
      isFramed: true,
      swiftCode: `
        _ = onDAOUpdate().pub([]);
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
        return TableViewController(self, style: .plain);
      `
    }
  ]
});
