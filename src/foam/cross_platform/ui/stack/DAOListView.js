foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOListView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  topics: [
    'onDAOUpdate',
    'onRowSelected',
  ],
  requires: [
    'foam.cross_platform.ui.widget.DefaultCitationView',
    'foam.dao.ArraySink',
    'foam.dao.ListenerSink',
    'foam.mlang.sink.Count',
    {
      path: 'foam.cross_platform.ui.android.RowActionSwipeHelper',
      flags: ['android']
    }
  ],
  constants: [
    {
      type: 'Integer',
      name: 'HORIZONTAL_PADDING',
      value: 12
    }
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android'],
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
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
          <style name="DAOListViewStyle" parent="android:Widget">
              <item name="android:scrollbars">vertical</item>
          </style>
        </resources>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends foam.cross_platform.ui.stack.Stack.ToolbarFragment {
          DAOListView o = null;
          public Fragment(
              DAOListView o,
              foam.cross_platform.Context x) {
            super(x);
            this.o = o;
          }
          public android.view.View onCreateView(
                  android.view.LayoutInflater inflater,
                  android.view.ViewGroup container,
                  android.os.Bundle savedInstanceState) {
            Adapter adapter = new Adapter(o);
            int id = getResources().getIdentifier("DAOListViewStyle", "style", getActivity().getPackageName());
            androidx.recyclerview.widget.RecyclerView rv = new androidx.recyclerview.widget.RecyclerView(new android.view.ContextThemeWrapper(getActivity(), id));
            rv.setBackgroundColor(o.getTheme().getBackground());
            rv.setAdapter(adapter);
            rv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                    android.widget.LinearLayout.LayoutParams.MATCH_PARENT));

            if (o.getActions().length > 0) {
              androidx.recyclerview.widget.ItemTouchHelper itemTouchHelper = new androidx.recyclerview.widget.ItemTouchHelper(
                  new foam.cross_platform.ui.android.SwipeHelper(getContext(), rv, o.getActions()));
              itemTouchHelper.attachToRecyclerView(rv);
            }

            androidx.recyclerview.widget.LinearLayoutManager lm =
              new androidx.recyclerview.widget.LinearLayoutManager(getActivity());
            rv.setLayoutManager(lm);

            androidx.recyclerview.widget.DividerItemDecoration divider =
              new androidx.recyclerview.widget.DividerItemDecoration(rv.getContext(),
              lm.getOrientation());
            rv.addItemDecoration(divider);
            rv.setHasFixedSize(true);

            android.widget.LinearLayout v = (android.widget.LinearLayout) super.onCreateView(inflater, container, savedInstanceState);
            v.addView(rv);
            return v;
          }
        }
        public static class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
          foam.cross_platform.ui.AxiomView citationView = null;
          foam.core.Detachable sub = null;
          public foam.cross_platform.FObject data = null;
          public foam.cross_platform.ui.android.SwipeHelper.UnderlayButton[] actions = null;
          public ViewHolder(android.view.View v, foam.cross_platform.ui.AxiomView citationView) {
            super(v);
            this.citationView = citationView;
          }
          public void setData(foam.cross_platform.FObject data) {
            if ( sub != null ) sub.detach();
            sub = citationView.bindData(data, null);
            this.data = data;
            this.actions = null;
          }
        }
        public static class Adapter extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
          DAOListView o = null;
          public Adapter(DAOListView data) {
            o = data;
            o.onDetach(o.onDAOUpdate().sub(null, <%=listener(\`
              notifyDataSetChanged();
            \`)%>));
          }
          public ViewHolder onCreateViewHolder(android.view.ViewGroup parent, int viewType) {
            float f = o.getAndroidContext().getResources().getDisplayMetrics().density;
            int hp = (int) (f * DAOListView.HORIZONTAL_PADDING());

            foam.cross_platform.ui.AxiomView citationView = (foam.cross_platform.ui.AxiomView) o.getCitationView()
              .createBuilder(o.getSubX())
              .setBuilderProperty("of", o.getData().getOf())
              .builderBuild();

            android.widget.LinearLayout wrapper = new android.widget.LinearLayout(citationView.getView().getContext());
            wrapper.setLayoutParams(new android.widget.TableRow.LayoutParams(
              android.widget.TableRow.LayoutParams.MATCH_PARENT,
              (int) (o.getRowHeight() * f)));
            wrapper.addView(citationView.getView());
            wrapper.setGravity(android.view.Gravity.CENTER);
            wrapper.setPadding(hp, 0, hp, 0);

            ViewHolder vh = new ViewHolder(wrapper, citationView);
            wrapper.setOnClickListener(view -> {
              o.onRowSelected().pub(new Object[]{vh.data});
            });
            return vh;
          }
          public void onBindViewHolder(ViewHolder holder, int position) {
            foam.dao.ArraySink a = o.ArraySink_create().build();
            o.getData().skip(position).limit(1).select(a);
            holder.setData((foam.cross_platform.FObject) a.getArray().get(0));
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
          var daoView: foam_cross_platform_ui_stack_DAOListView;
          init(_ o: foam_cross_platform_ui_stack_DAOListView, style: UITableView.Style) {
            daoView = o;
            super.init(style: style);
            tableView.rowHeight = CGFloat(o.getRowHeight());
            tableView.dataSource = o.getTableSource();
            tableView.delegate = o.getTableDelegate();
            tableView.reloadData();
            o.onDetach(o.onDAOUpdate().sub(nil, o.AnonymousListener_create()
              .setFn({ [weak self] (_: foam_core_Detachable?, args: [Any?]?) -> Void in
                DispatchQueue.main.async { self?.tableView.reloadData(); }
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
          var citationView: foam_cross_platform_ui_AxiomView
          var sub: foam_core_Detachable? = nil;
          var obj: foam_cross_platform_FObject? = nil;
          init(citationView: foam_cross_platform_ui_AxiomView, style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            self.citationView = citationView
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            let v = citationView.getView()!
            addSubview(v)
            let p = CGFloat(foam_cross_platform_ui_stack_DAOListView.HORIZONTAL_PADDING());
            v.translatesAutoresizingMaskIntoConstraints = false;
            v.topAnchor.constraint(equalTo: topAnchor).isActive = true;
            v.leadingAnchor.constraint(equalTo: leadingAnchor, constant: p).isActive = true;
            v.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true;
            v.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -p).isActive = true;
          }
          func setData(data: foam_cross_platform_FObject) {
            sub?.detach();
            sub = citationView.bindData(data, nil);
            obj = data;
          }
          required init?(coder aDecoder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
        }

        public class TableViewDelegate: NSObject, UITableViewDelegate {
          var daoView: foam_cross_platform_ui_stack_DAOListView;
          init(_ o: foam_cross_platform_ui_stack_DAOListView) {
            daoView = o;
          }
          public func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
            guard let row = tableView.cellForRow(at: indexPath) as? RowView else { return }
            _ = daoView.onRowSelected().pub([row.obj]);
          }
          public func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
            guard let obj = (tableView.cellForRow(at: indexPath) as? RowView)?.obj else { return nil }
            let actions = daoView.getActions()?
              .map({ (a) -> UIContextualAction? in
                return a.actionForObj(obj)
              })
              .filter({ (a) -> Bool in return a != nil })
              .map({ (a) -> UIContextualAction in return a! }) ?? []
            let config = actions.count == 0 ? nil : UISwipeActionsConfiguration(actions: actions);
            config?.performsFirstActionWithFullSwipe = false;
            return config;
          }
        }

        public class TableSource: NSObject, UITableViewDataSource {
          var daoView: foam_cross_platform_ui_stack_DAOListView;
          init(_ o: foam_cross_platform_ui_stack_DAOListView) {
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
              let citationView = daoView.getCitationView()!
                .createBuilder(daoView.getSubX())!
                .setBuilderProperty("of", self.daoView.getData()?.getOf())!
                .builderBuild() as! foam_cross_platform_ui_AxiomView
              cell = RowView(citationView: citationView, style: .default, reuseIdentifier: reusableId);
            }
            let a = daoView.ArraySink_create().build();
            _ = daoView.getData()?.skip(indexPath.row)?.limit(1)?.select(a);
            cell?.setData(data: a.getArray()[0] as! foam_cross_platform_FObject)
            return cell!;
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'data',
      androidPostSet: `
        if ( getListenSub_() != null ) getListenSub_().detach();
        setListenSub_(newValue.listen(
          ListenerSink_create()
            .setListener(onDAOUpdate__listener())
            .build()));
      `,
      swiftPostSet: `
        getListenSub_()?.detach();
        setListenSub_(newValue?.listen(
          ListenerSink_create()
            .setListener(onDAOUpdate__listener())
            .build()));
      `
    },
    {
      class: 'ClassProperty',
      name: 'citationView',
      value: 'foam.cross_platform.ui.widget.DynamicCitationView'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'listenSub_',
    },

    {
      class: 'IntProperty',
      name: 'rowHeight',
      value: 100
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
    },
    {
      name: 'title'
    },
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.ui.stack.dao.RowAction',
      name: 'actions'
    },
  ],
  listeners: [
    {
      name: 'onDAOUpdate_',
      androidCode: `
        onDAOUpdate().pub(new Object[0]);
      `,
      swiftCode: `
        _ = onDAOUpdate().pub([]);
      `
    }
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment(this, getSubX());
        onDetach(f.getToolbar().setTitle$(getTitle$()));
        return f;
      `,
      swiftCode: `
        let vc = TableViewController(self, style: .plain);
        let l = <%=listener(\`
          vc.title = self?.getTitle() as? String ?? "";
          // TODO: If title a view, plop it in.
        \`)%>
        onDetach(getTitle$().slotSub(l));
        l.executeListener(nil, nil);
        return vc;
      `
    },
    {
      name: 'backRequested',
      androidCode: `return true;`,
      swiftCode: 'return true;',
    }
  ]
});