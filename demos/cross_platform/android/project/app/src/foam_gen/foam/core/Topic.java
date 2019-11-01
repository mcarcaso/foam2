// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
*   Topics delcare the types of events that an object publishes.  <pre>  Ex.  foam.CLASS({  name: 'Alarm',  topics: [ 'ring' ] 
*  });  then doing:  alarm.ring.pub();  alarm.ring.sub(l);  is the same as:  alarm.pub('ring');  alarm.sub('ring', l);  </pre>   
*/
public class Topic extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot description_$;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object description_;

  private boolean description_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.Property DESCRIPTION =
    init_DESCRIPTION();

  protected foam.core.Topic[] topics_;

  private boolean topics_isSet_ =
    false;

  private foam.core.Slot topics_$;

  public static foam.core.FObjectArray TOPICS =
    init_TOPICS();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getName$() {

    if ( name_$ == null ) {
      name_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NAME)
        .build();
    }
    return name_$;
  }

  public Object getName() {

    if ( ! name_isSet_ ) {
      return null;
    }
    return name_;
  }

  private Object name_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setName(Object value) {

    boolean hasOldValue = hasPropertySet("name");
    Object oldValue = hasOldValue ?
      getName() :
      null;
    Object castedValue = name_adapt(oldValue, value, hasOldValue);
    
    name_isSet_ = true;
    name_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "name", null };
    if ( hasListeners(args) ) {
      args[2] = getName$();
      pub(args);
    }
  }

  private static foam.core.Property init_NAME() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("name")
      .setForClass_("foam.core.Topic")
      .build();
  }

  public foam.core.Slot getDescription$() {

    if ( description_$ == null ) {
      description_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DESCRIPTION)
        .build();
    }
    return description_$;
  }

  public Object getDescription() {

    if ( ! description_isSet_ ) {
      return null;
    }
    return description_;
  }

  private Object description_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDescription(Object value) {

    boolean hasOldValue = hasPropertySet("description");
    Object oldValue = hasOldValue ?
      getDescription() :
      null;
    Object castedValue = description_adapt(oldValue, value, hasOldValue);
    
    description_isSet_ = true;
    description_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "description", null };
    if ( hasListeners(args) ) {
      args[2] = getDescription$();
      pub(args);
    }
  }

  private static foam.core.Property init_DESCRIPTION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("description")
      .setForClass_("foam.core.Topic")
      .build();
  }

  public foam.core.Slot getTopics$() {

    if ( topics_$ == null ) {
      topics_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TOPICS)
        .build();
    }
    return topics_$;
  }

  protected foam.core.Topic[] topics_factory_() {

    return new foam.core.Topic[0];
  }

  public foam.core.Topic[] getTopics() {

    if ( ! topics_isSet_ ) {
      setProperty("topics", topics_factory_());
    }
    return topics_;
  }

  private foam.core.Topic[] topics_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Topic[]) newValue;
  }

  public void setTopics(Object value) {

    boolean hasOldValue = hasPropertySet("topics");
    Object oldValue = hasOldValue ?
      getTopics() :
      null;
    foam.core.Topic[] castedValue = topics_adapt(oldValue, value, hasOldValue);
    
    topics_isSet_ = true;
    topics_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "topics", null };
    if ( hasListeners(args) ) {
      args[2] = getTopics$();
      pub(args);
    }
  }

  private static foam.core.FObjectArray init_TOPICS() {

    return foam.core.FObjectArray.FObjectArrayBuilder(null) // TODO give context
      .setOf("Topic")
      .setType("Topic[]")
      .setAdaptArrayElement(null)
      .setName("topics")
      .setForClass_("foam.core.Topic")
      .build();
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public void makeTopic() {

    throw new RuntimeException("makeTopic is not implemented");
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
  }

  public void swiftInitializer() {

    throw new RuntimeException("swiftInitializer is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "name":
        name_isSet_ = false;
        Object[] nameArgs = new Object[] { "propertyChange", "name", null };
        if ( hasListeners(nameArgs) ) {
          nameArgs[2] = getName$();
          pub(nameArgs);
        }
        return;
    
    
      case "description":
        description_isSet_ = false;
        Object[] descriptionArgs = new Object[] { "propertyChange", "description", null };
        if ( hasListeners(descriptionArgs) ) {
          descriptionArgs[2] = getDescription$();
          pub(descriptionArgs);
        }
        return;
    
    
      case "topics":
        topics_isSet_ = false;
        Object[] topicsArgs = new Object[] { "propertyChange", "topics", null };
        if ( hasListeners(topicsArgs) ) {
          topicsArgs[2] = getTopics$();
          pub(topicsArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "description":
        return getDescription();
    
    
      case "topics":
        return getTopics();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "description":
        return getDescription$();
    
    
      case "topics":
        return getTopics$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "description":
        return description_isSet_;
    
    
      case "topics":
        return topics_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "description":
        setDescription((Object) value);
        return;
    
    
      case "topics":
        setTopics((foam.core.Topic[]) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Topic () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Topic")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Topic.NAME, foam.core.Topic.DESCRIPTION, foam.core.Topic.TOPICS, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.Topic")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("makeTopic")
      .setCode(null)
      .setForClass_("foam.core.Topic")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.core.Topic")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.templates.TemplateAxiom.TemplateAxiomBuilder(null) // TODO give context
      .setTemplate("\nlet topic = BasicTopic()\n\nvar topicMap: [String:Topic] = [:]\n<% this.topics.forEach(function(t) { %>\ndo {\n  let t = BasicTopic()\n  t.parent_ = topic\n  t.name_ = \"<%=t.name%>\"\n  topicMap[\"<%=t.name%>\"] = t\n}\n<% }) %>\n\ntopic.name_ = \"<%=this.name%>\"\ntopic.parent_ = self\ntopic.map_ = topicMap\n\nreturn topic\n      ")
      .setArgs(new foam.core.Argument[] {  })
      .setName("swiftInitializer")
      .setForClass_("foam.core.Topic")
      .build()})
      .build();
  }

  public static Builder TopicBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean description_isSet_ =
      false;

    private Object description_;

    private boolean topics_isSet_ =
      false;

    private foam.core.Topic[] topics_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setDescription(Object value) {

      description_isSet_ = true;
      description_ = value;
      return this;
    }

    public Builder setTopics(foam.core.Topic[] value) {

      topics_isSet_ = true;
      topics_ = value;
      return this;
    }

    private Builder() {

    }

    public Topic build() {

      Topic o = new Topic();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( description_isSet_ ) {
        o.setDescription(description_);
      }
      
      if ( topics_isSet_ ) {
        o.setTopics(topics_);
      }
      
      o.init();
      return o;
    }
  }
}