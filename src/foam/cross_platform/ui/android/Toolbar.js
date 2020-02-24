foam.CLASS({
  package: 'foam.cross_platform.ui.android',
  name: 'Toolbar',
  implements: [
    'foam.cross_platform.ui.View'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/toolbar_back.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"/>
</vector>
      `
    },
  ],
  properties: [
    {
      androidType: 'android.widget.Toolbar',
      name: 'view'
    },
    {
      class: 'StringProperty',
      name: 'title'
    },
    {
      class: 'FunctionProperty',
      name: 'backButtonFn'
    }
  ],
  reactions: [
    ['', 'propertyChange', 'updateView']
  ],
  listeners: [
    {
      name: 'updateView',
      androidCode: `
        if ( getView() == null ) return;
        getView().removeAllViews();
        getView().setBackgroundColor(getTheme().getPrimary());
        getView().setTitleTextColor(getTheme().getOnPrimary());
        
        getView().setTitle(getTitle());
        
        if ( hasPropertySet("backButtonFn") ) {
          android.content.Context x = getView().getContext();
          getView().setNavigationIcon(x.getResources().getIdentifier(
                  "toolbar_back",
                  "drawable",
                  x.getPackageName()));
          getView().setNavigationOnClickListener(v -> {
            getBackButtonFn().executeFunction(null);
          });
        }
      `
    }
  ]
});
