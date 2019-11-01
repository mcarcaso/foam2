// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* An Array of Axioms (used by Model) whose elements are added to this.axioms_. 
*/
public class AxiomArray extends foam.core.Property implements foam.mlang.order.Comparator, foam.dao.SQLStatement {

  protected String swiftExpressionSubscriptionName_;

  protected Object of_;

  private foam.core.Slot of_$;

  public static foam.core.Property OF =
    init_OF();

  protected Object type_;

  private boolean type_isSet_ =
    false;

  private foam.core.Slot type_$;

  public static foam.core.Property TYPE =
    init_TYPE();

  protected Object hidden_;

  private boolean hidden_isSet_ =
    false;

  private foam.core.Slot hidden_$;

  public static foam.core.Property HIDDEN =
    init_HIDDEN();

  protected Object adapt_;

  private boolean adapt_isSet_ =
    false;

  private foam.core.Slot adapt_$;

  public static foam.core.Property ADAPT =
    init_ADAPT();

  protected Object assertValue_;

  private boolean assertValue_isSet_ =
    false;

  private foam.core.Slot assertValue_$;

  public static foam.core.Property ASSERT_VALUE =
    init_ASSERT_VALUE();

  protected Object adaptArrayElement_;

  private boolean adaptArrayElement_isSet_ =
    false;

  private foam.core.Slot adaptArrayElement_$;

  public static foam.core.Property ADAPT_ARRAY_ELEMENT =
    init_ADAPT_ARRAY_ELEMENT();

  protected Object postSet_;

  private boolean postSet_isSet_ =
    false;

  private foam.core.Slot postSet_$;

  public static foam.core.Property POST_SET =
    init_POST_SET();

  protected String name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected Object label_;

  private boolean label_isSet_ =
    false;

  private foam.core.Slot label_$;

  public static foam.core.Property LABEL =
    init_LABEL();

  protected Object documentation_;

  private boolean documentation_isSet_ =
    false;

  private foam.core.Slot documentation_$;

  public static foam.core.Property DOCUMENTATION =
    init_DOCUMENTATION();

  protected Object help_;

  private boolean help_isSet_ =
    false;

  private foam.core.Slot help_$;

  public static foam.core.Property HELP =
    init_HELP();

  protected long order_;

  private boolean order_isSet_ =
    false;

  private foam.core.Slot order_$;

  public static foam.core.LongProperty ORDER =
    init_ORDER();

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  protected Object factory_;

  private boolean factory_isSet_ =
    false;

  private foam.core.Slot factory_$;

  public static foam.core.Property FACTORY =
    init_FACTORY();

  protected Object preSet_;

  private boolean preSet_isSet_ =
    false;

  private foam.core.Slot preSet_$;

  public static foam.core.Property PRE_SET =
    init_PRE_SET();

  protected Object expression_;

  private boolean expression_isSet_ =
    false;

  private foam.core.Slot expression_$;

  public static foam.core.Property EXPRESSION =
    init_EXPRESSION();

  protected Object getter_;

  private boolean getter_isSet_ =
    false;

  private foam.core.Slot getter_$;

  public static foam.core.Property GETTER =
    init_GETTER();

  protected Object setter_;

  private boolean setter_isSet_ =
    false;

  private foam.core.Slot setter_$;

  public static foam.core.Property SETTER =
    init_SETTER();

  protected Object cloneProperty_;

  private boolean cloneProperty_isSet_ =
    false;

  private foam.core.Slot cloneProperty_$;

  public static foam.core.Property CLONE_PROPERTY =
    init_CLONE_PROPERTY();

  protected Object final_;

  private boolean final_isSet_ =
    false;

  private foam.core.Slot final_$;

  public static foam.core.Property FINAL =
    init_FINAL();

  protected Object required_;

  private boolean required_isSet_ =
    false;

  private foam.core.Slot required_$;

  public static foam.core.Property REQUIRED =
    init_REQUIRED();

  protected Object permissionRequired_;

  private boolean permissionRequired_isSet_ =
    false;

  private foam.core.Slot permissionRequired_$;

  public static foam.core.Property PERMISSION_REQUIRED =
    init_PERMISSION_REQUIRED();

  protected Object flags_;

  private boolean flags_isSet_ =
    false;

  private foam.core.Slot flags_$;

  public static foam.core.Property FLAGS =
    init_FLAGS();

  protected Object fromString_;

  private boolean fromString_isSet_ =
    false;

  private foam.core.Slot fromString_$;

  public static foam.core.Property FROM_STRING =
    init_FROM_STRING();

  protected Object comparePropertyValues_;

  private boolean comparePropertyValues_isSet_ =
    false;

  private foam.core.Slot comparePropertyValues_$;

  public static foam.core.Property COMPARE_PROPERTY_VALUES =
    init_COMPARE_PROPERTY_VALUES();

  protected Object isDefaultValue_;

  private boolean isDefaultValue_isSet_ =
    false;

  private foam.core.Slot isDefaultValue_$;

  public static foam.core.Property IS_DEFAULT_VALUE =
    init_IS_DEFAULT_VALUE();

  protected Object diffPropertyValues_;

  private boolean diffPropertyValues_isSet_ =
    false;

  private foam.core.Slot diffPropertyValues_$;

  public static foam.core.Property DIFF_PROPERTY_VALUES =
    init_DIFF_PROPERTY_VALUES();

  protected Object diffProperty_;

  private boolean diffProperty_isSet_ =
    false;

  private foam.core.Slot diffProperty_$;

  public static foam.core.Property DIFF_PROPERTY =
    init_DIFF_PROPERTY();

  protected Object forClass__;

  private boolean forClass__isSet_ =
    false;

  private foam.core.Slot forClass__$;

  public static foam.core.Property FOR_CLASS_ =
    init_FOR_CLASS_();

  protected Object containsPII_;

  private boolean containsPII_isSet_ =
    false;

  private foam.core.Slot containsPII_$;

  public static foam.core.Property CONTAINS_PII =
    init_CONTAINS_PII();

  protected Object containsDeletablePII_;

  private boolean containsDeletablePII_isSet_ =
    false;

  private foam.core.Slot containsDeletablePII_$;

  public static foam.core.Property CONTAINS_DELETABLE_PII =
    init_CONTAINS_DELETABLE_PII();

  protected Object gridColumns_;

  private boolean gridColumns_isSet_ =
    false;

  private foam.core.Slot gridColumns_$;

  public static foam.core.Property GRID_COLUMNS =
    init_GRID_COLUMNS();

  protected String section_;

  private boolean section_isSet_ =
    false;

  private foam.core.Slot section_$;

  public static foam.core.StringProperty SECTION =
    init_SECTION();

  protected boolean transient_;

  private boolean transient_isSet_ =
    false;

  private foam.core.Slot transient_$;

  public static foam.core.BooleanProperty TRANSIENT =
    init_TRANSIENT();

  protected boolean networkTransient_;

  private boolean networkTransient_isSet_ =
    false;

  private foam.core.Slot networkTransient_$;

  public static foam.core.BooleanProperty NETWORK_TRANSIENT =
    init_NETWORK_TRANSIENT();

  protected boolean storageTransient_;

  private boolean storageTransient_isSet_ =
    false;

  private foam.core.Slot storageTransient_$;

  public static foam.core.BooleanProperty STORAGE_TRANSIENT =
    init_STORAGE_TRANSIENT();

  protected foam.core.ValidationPredicate[] validationPredicates_;

  private boolean validationPredicates_isSet_ =
    false;

  private foam.core.Slot validationPredicates_$;

  public static foam.core.FObjectArray VALIDATION_PREDICATES =
    init_VALIDATION_PREDICATES();

  protected Object validateObj_;

  private boolean validateObj_isSet_ =
    false;

  private foam.core.Slot validateObj_$;

  public static foam.core.Property VALIDATE_OBJ =
    init_VALIDATE_OBJ();

  protected String shortName_;

  private boolean shortName_isSet_ =
    false;

  private foam.core.Slot shortName_$;

  public static foam.core.StringProperty SHORT_NAME =
    init_SHORT_NAME();

  protected Object source_;

  private boolean source_isSet_ =
    false;

  private foam.core.Slot source_$;

  public static foam.core.Property SOURCE =
    init_SOURCE();

  protected Object fromJSON_;

  private boolean fromJSON_isSet_ =
    false;

  private foam.core.Slot fromJSON_$;

  public static foam.core.Property FROM_JSON =
    init_FROM_JSON();

  protected Object toJSON_;

  private boolean toJSON_isSet_ =
    false;

  private foam.core.Slot toJSON_$;

  public static foam.core.Property TO_JSON =
    init_TO_JSON();

  protected boolean xmlAttribute_;

  private boolean xmlAttribute_isSet_ =
    false;

  private foam.core.Slot xmlAttribute_$;

  public static foam.core.BooleanProperty XML_ATTRIBUTE =
    init_XML_ATTRIBUTE();

  protected boolean xmlTextNode_;

  private boolean xmlTextNode_isSet_ =
    false;

  private foam.core.Slot xmlTextNode_$;

  public static foam.core.BooleanProperty XML_TEXT_NODE =
    init_XML_TEXT_NODE();

  protected Object fromXML_;

  private boolean fromXML_isSet_ =
    false;

  private foam.core.Slot fromXML_$;

  public static foam.core.Property FROM_XML =
    init_FROM_XML();

  protected Object toXML_;

  private boolean toXML_isSet_ =
    false;

  private foam.core.Slot toXML_$;

  public static foam.core.Property TO_XML =
    init_TO_XML();

  protected foam.cross_platform.GenericFunction fromCSVLabelMapping_;

  private boolean fromCSVLabelMapping_isSet_ =
    false;

  private foam.core.Slot fromCSVLabelMapping_$;

  public static foam.core.FunctionProperty FROM_CSVLABEL_MAPPING =
    init_FROM_CSVLABEL_MAPPING();

  protected String swiftVarName_;

  private boolean swiftVarName_isSet_ =
    false;

  private foam.core.Slot swiftVarName_$;

  public static foam.core.StringProperty SWIFT_VAR_NAME =
    init_SWIFT_VAR_NAME();

  protected String swiftView_;

  private boolean swiftView_isSet_ =
    false;

  private foam.core.Slot swiftView_$;

  public static foam.core.StringProperty SWIFT_VIEW =
    init_SWIFT_VIEW();

  protected String swiftSlotLinkSubName_;

  private boolean swiftSlotLinkSubName_isSet_ =
    false;

  private foam.core.Slot swiftSlotLinkSubName_$;

  public static foam.core.StringProperty SWIFT_SLOT_LINK_SUB_NAME =
    init_SWIFT_SLOT_LINK_SUB_NAME();

  protected String swiftSlotValueName_;

  private boolean swiftSlotValueName_isSet_ =
    false;

  private foam.core.Slot swiftSlotValueName_$;

  public static foam.core.StringProperty SWIFT_SLOT_VALUE_NAME =
    init_SWIFT_SLOT_VALUE_NAME();

  protected String swiftSlotName_;

  private boolean swiftSlotName_isSet_ =
    false;

  private foam.core.Slot swiftSlotName_$;

  public static foam.core.StringProperty SWIFT_SLOT_NAME =
    init_SWIFT_SLOT_NAME();

  protected String swiftInitedName_;

  private boolean swiftInitedName_isSet_ =
    false;

  private foam.core.Slot swiftInitedName_$;

  public static foam.core.StringProperty SWIFT_INITED_NAME =
    init_SWIFT_INITED_NAME();

  protected String swiftValueName_;

  private boolean swiftValueName_isSet_ =
    false;

  private foam.core.Slot swiftValueName_$;

  public static foam.core.StringProperty SWIFT_VALUE_NAME =
    init_SWIFT_VALUE_NAME();

  protected String swiftValueType_;

  private boolean swiftValueType_isSet_ =
    false;

  private foam.core.Slot swiftValueType_$;

  public static foam.core.StringProperty SWIFT_VALUE_TYPE =
    init_SWIFT_VALUE_TYPE();

  protected boolean swiftRequiresEscaping_;

  private boolean swiftRequiresEscaping_isSet_ =
    false;

  private foam.core.Slot swiftRequiresEscaping_$;

  public static foam.core.BooleanProperty SWIFT_REQUIRES_ESCAPING =
    init_SWIFT_REQUIRES_ESCAPING();

  protected boolean swiftOptional_;

  private boolean swiftOptional_isSet_ =
    false;

  private foam.core.Slot swiftOptional_$;

  public static foam.core.BooleanProperty SWIFT_OPTIONAL =
    init_SWIFT_OPTIONAL();

  protected String swiftFactory_;

  private boolean swiftFactory_isSet_ =
    false;

  private foam.core.Slot swiftFactory_$;

  public static foam.core.StringProperty SWIFT_FACTORY =
    init_SWIFT_FACTORY();

  protected String swiftFactoryName_;

  private boolean swiftFactoryName_isSet_ =
    false;

  private foam.core.Slot swiftFactoryName_$;

  public static foam.core.StringProperty SWIFT_FACTORY_NAME =
    init_SWIFT_FACTORY_NAME();

  protected String swiftValue_;

  private boolean swiftValue_isSet_ =
    false;

  private foam.core.Slot swiftValue_$;

  public static foam.core.StringProperty SWIFT_VALUE =
    init_SWIFT_VALUE();

  protected String swiftGetter_;

  private boolean swiftGetter_isSet_ =
    false;

  private foam.core.Slot swiftGetter_$;

  public static foam.core.StringProperty SWIFT_GETTER =
    init_SWIFT_GETTER();

  protected String swiftSetter_;

  private boolean swiftSetter_isSet_ =
    false;

  private foam.core.Slot swiftSetter_$;

  public static foam.core.StringProperty SWIFT_SETTER =
    init_SWIFT_SETTER();

  protected String swiftPreSet_;

  private boolean swiftPreSet_isSet_ =
    false;

  private foam.core.Slot swiftPreSet_$;

  public static foam.core.StringProperty SWIFT_PRE_SET =
    init_SWIFT_PRE_SET();

  protected String swiftPreSetFuncName_;

  private boolean swiftPreSetFuncName_isSet_ =
    false;

  private foam.core.Slot swiftPreSetFuncName_$;

  public static foam.core.StringProperty SWIFT_PRE_SET_FUNC_NAME =
    init_SWIFT_PRE_SET_FUNC_NAME();

  protected String swiftPostSet_;

  private boolean swiftPostSet_isSet_ =
    false;

  private foam.core.Slot swiftPostSet_$;

  public static foam.core.StringProperty SWIFT_POST_SET =
    init_SWIFT_POST_SET();

  protected String swiftPostSetFuncName_;

  private boolean swiftPostSetFuncName_isSet_ =
    false;

  private foam.core.Slot swiftPostSetFuncName_$;

  public static foam.core.StringProperty SWIFT_POST_SET_FUNC_NAME =
    init_SWIFT_POST_SET_FUNC_NAME();

  protected String[] swiftExpressionArgs_;

  private boolean swiftExpressionArgs_isSet_ =
    false;

  private foam.core.Slot swiftExpressionArgs_$;

  public static foam.core.StringArrayProperty SWIFT_EXPRESSION_ARGS =
    init_SWIFT_EXPRESSION_ARGS();

  protected String swiftExpression_;

  private boolean swiftExpression_isSet_ =
    false;

  private foam.core.Slot swiftExpression_$;

  public static foam.core.StringProperty SWIFT_EXPRESSION =
    init_SWIFT_EXPRESSION();

  private boolean of_isSet_ =
    false;

  private boolean swiftExpressionSubscriptionName_isSet_ =
    false;

  private foam.core.Slot swiftExpressionSubscriptionName_$;

  public static foam.core.StringProperty SWIFT_EXPRESSION_SUBSCRIPTION_NAME =
    init_SWIFT_EXPRESSION_SUBSCRIPTION_NAME();

  protected String swiftAdapt_;

  private boolean swiftAdapt_isSet_ =
    false;

  private foam.core.Slot swiftAdapt_$;

  public static foam.core.StringProperty SWIFT_ADAPT =
    init_SWIFT_ADAPT();

  protected String swiftAdaptFuncName_;

  private boolean swiftAdaptFuncName_isSet_ =
    false;

  private foam.core.Slot swiftAdaptFuncName_$;

  public static foam.core.StringProperty SWIFT_ADAPT_FUNC_NAME =
    init_SWIFT_ADAPT_FUNC_NAME();

  protected String swiftPrivateAxiomName_;

  private boolean swiftPrivateAxiomName_isSet_ =
    false;

  private foam.core.Slot swiftPrivateAxiomName_$;

  public static foam.core.StringProperty SWIFT_PRIVATE_AXIOM_NAME =
    init_SWIFT_PRIVATE_AXIOM_NAME();

  protected String swiftAxiomName_;

  private boolean swiftAxiomName_isSet_ =
    false;

  private foam.core.Slot swiftAxiomName_$;

  public static foam.core.StringProperty SWIFT_AXIOM_NAME =
    init_SWIFT_AXIOM_NAME();

  protected String swiftToJSON_;

  private boolean swiftToJSON_isSet_ =
    false;

  private foam.core.Slot swiftToJSON_$;

  public static foam.core.StringProperty SWIFT_TO_JSON =
    init_SWIFT_TO_JSON();

  protected boolean swiftSupport_;

  private boolean swiftSupport_isSet_ =
    false;

  private foam.core.Slot swiftSupport_$;

  public static foam.core.BooleanProperty SWIFT_SUPPORT =
    init_SWIFT_SUPPORT();

  protected String swiftJsonParser_;

  private boolean swiftJsonParser_isSet_ =
    false;

  private foam.core.Slot swiftJsonParser_$;

  public static foam.core.StringProperty SWIFT_JSON_PARSER =
    init_SWIFT_JSON_PARSER();

  protected boolean swiftWeak_;

  private boolean swiftWeak_isSet_ =
    false;

  private foam.core.Slot swiftWeak_$;

  public static foam.core.BooleanProperty SWIFT_WEAK =
    init_SWIFT_WEAK();

  protected boolean generateJava_;

  private boolean generateJava_isSet_ =
    false;

  private foam.core.Slot generateJava_$;

  public static foam.core.BooleanProperty GENERATE_JAVA =
    init_GENERATE_JAVA();

  protected String javaJSONParser_;

  private boolean javaJSONParser_isSet_ =
    false;

  private foam.core.Slot javaJSONParser_$;

  public static foam.core.StringProperty JAVA_JSONPARSER =
    init_JAVA_JSONPARSER();

  protected String javaQueryParser_;

  private boolean javaQueryParser_isSet_ =
    false;

  private foam.core.Slot javaQueryParser_$;

  public static foam.core.StringProperty JAVA_QUERY_PARSER =
    init_JAVA_QUERY_PARSER();

  protected String javaCSVParser_;

  private boolean javaCSVParser_isSet_ =
    false;

  private foam.core.Slot javaCSVParser_$;

  public static foam.core.StringProperty JAVA_CSVPARSER =
    init_JAVA_CSVPARSER();

  protected String javaInfoType_;

  private boolean javaInfoType_isSet_ =
    false;

  private foam.core.Slot javaInfoType_$;

  public static foam.core.StringProperty JAVA_INFO_TYPE =
    init_JAVA_INFO_TYPE();

  protected String javaFactory_;

  private boolean javaFactory_isSet_ =
    false;

  private foam.core.Slot javaFactory_$;

  public static foam.core.StringProperty JAVA_FACTORY =
    init_JAVA_FACTORY();

  protected String javaGetter_;

  private boolean javaGetter_isSet_ =
    false;

  private foam.core.Slot javaGetter_$;

  public static foam.core.StringProperty JAVA_GETTER =
    init_JAVA_GETTER();

  protected String javaSetter_;

  private boolean javaSetter_isSet_ =
    false;

  private foam.core.Slot javaSetter_$;

  public static foam.core.StringProperty JAVA_SETTER =
    init_JAVA_SETTER();

  protected String javaPreSet_;

  private boolean javaPreSet_isSet_ =
    false;

  private foam.core.Slot javaPreSet_$;

  public static foam.core.StringProperty JAVA_PRE_SET =
    init_JAVA_PRE_SET();

  protected String javaPostSet_;

  private boolean javaPostSet_isSet_ =
    false;

  private foam.core.Slot javaPostSet_$;

  public static foam.core.StringProperty JAVA_POST_SET =
    init_JAVA_POST_SET();

  protected String[] aliases_;

  private boolean aliases_isSet_ =
    false;

  private foam.core.Slot aliases_$;

  public static foam.core.StringArrayProperty ALIASES =
    init_ALIASES();

  protected String javaCloneProperty_;

  private boolean javaCloneProperty_isSet_ =
    false;

  private foam.core.Slot javaCloneProperty_$;

  public static foam.core.StringProperty JAVA_CLONE_PROPERTY =
    init_JAVA_CLONE_PROPERTY();

  protected String javaDiffProperty_;

  private boolean javaDiffProperty_isSet_ =
    false;

  private foam.core.Slot javaDiffProperty_$;

  public static foam.core.StringProperty JAVA_DIFF_PROPERTY =
    init_JAVA_DIFF_PROPERTY();

  protected String javaCompare_;

  private boolean javaCompare_isSet_ =
    false;

  private foam.core.Slot javaCompare_$;

  public static foam.core.StringProperty JAVA_COMPARE =
    init_JAVA_COMPARE();

  protected String javaComparePropertyToObject_;

  private boolean javaComparePropertyToObject_isSet_ =
    false;

  private foam.core.Slot javaComparePropertyToObject_$;

  public static foam.core.StringProperty JAVA_COMPARE_PROPERTY_TO_OBJECT =
    init_JAVA_COMPARE_PROPERTY_TO_OBJECT();

  protected String javaComparePropertyToValue_;

  private boolean javaComparePropertyToValue_isSet_ =
    false;

  private foam.core.Slot javaComparePropertyToValue_$;

  public static foam.core.StringProperty JAVA_COMPARE_PROPERTY_TO_VALUE =
    init_JAVA_COMPARE_PROPERTY_TO_VALUE();

  protected String javaAssertValue_;

  private boolean javaAssertValue_isSet_ =
    false;

  private foam.core.Slot javaAssertValue_$;

  public static foam.core.StringProperty JAVA_ASSERT_VALUE =
    init_JAVA_ASSERT_VALUE();

  protected String javaValue_;

  private boolean javaValue_isSet_ =
    false;

  private foam.core.Slot javaValue_$;

  public static foam.core.StringProperty JAVA_VALUE =
    init_JAVA_VALUE();

  protected boolean includeInDigest_;

  private boolean includeInDigest_isSet_ =
    false;

  private foam.core.Slot includeInDigest_$;

  public static foam.core.BooleanProperty INCLUDE_IN_DIGEST =
    init_INCLUDE_IN_DIGEST();

  protected boolean includeInSignature_;

  private boolean includeInSignature_isSet_ =
    false;

  private foam.core.Slot includeInSignature_$;

  public static foam.core.BooleanProperty INCLUDE_IN_SIGNATURE =
    init_INCLUDE_IN_SIGNATURE();

  protected String javaValidateObj_;

  private boolean javaValidateObj_isSet_ =
    false;

  private foam.core.Slot javaValidateObj_$;

  public static foam.core.StringProperty JAVA_VALIDATE_OBJ =
    init_JAVA_VALIDATE_OBJ();

  protected String javaFromCSVLabelMapping_;

  private boolean javaFromCSVLabelMapping_isSet_ =
    false;

  private foam.core.Slot javaFromCSVLabelMapping_$;

  public static foam.core.StringProperty JAVA_FROM_CSVLABEL_MAPPING =
    init_JAVA_FROM_CSVLABEL_MAPPING();

  protected String javaToCSV_;

  private boolean javaToCSV_isSet_ =
    false;

  private foam.core.Slot javaToCSV_$;

  public static foam.core.StringProperty JAVA_TO_CSV =
    init_JAVA_TO_CSV();

  protected String javaToCSVLabel_;

  private boolean javaToCSVLabel_isSet_ =
    false;

  private foam.core.Slot javaToCSVLabel_$;

  public static foam.core.StringProperty JAVA_TO_CSVLABEL =
    init_JAVA_TO_CSVLABEL();

  protected Object attribute_;

  private boolean attribute_isSet_ =
    false;

  private foam.core.Slot attribute_$;

  public static foam.core.Property ATTRIBUTE =
    init_ATTRIBUTE();

  protected String placeholder_;

  private boolean placeholder_isSet_ =
    false;

  private foam.core.Slot placeholder_$;

  public static foam.core.StringProperty PLACEHOLDER =
    init_PLACEHOLDER();

  protected Object view_;

  private boolean view_isSet_ =
    false;

  private foam.core.Slot view_$;

  public static foam.u2.ViewSpec VIEW =
    init_VIEW();

  protected foam.u2.Visibility visibility_;

  private boolean visibility_isSet_ =
    false;

  private foam.core.Slot visibility_$;

  public static foam.core.Enum VISIBILITY =
    init_VISIBILITY();

  protected foam.cross_platform.GenericFunction visibilityExpression_;

  private boolean visibilityExpression_isSet_ =
    false;

  private foam.core.Slot visibilityExpression_$;

  public static foam.core.FunctionProperty VISIBILITY_EXPRESSION =
    init_VISIBILITY_EXPRESSION();

  protected boolean validationTextVisible_;

  private boolean validationTextVisible_isSet_ =
    false;

  private foam.core.Slot validationTextVisible_$;

  public static foam.core.BooleanProperty VALIDATION_TEXT_VISIBLE =
    init_VALIDATION_TEXT_VISIBLE();

  protected boolean validationStyleEnabled_;

  private boolean validationStyleEnabled_isSet_ =
    false;

  private foam.core.Slot validationStyleEnabled_$;

  public static foam.core.BooleanProperty VALIDATION_STYLE_ENABLED =
    init_VALIDATION_STYLE_ENABLED();

  protected foam.cross_platform.GenericFunction toCSV_;

  private boolean toCSV_isSet_ =
    false;

  private foam.core.Slot toCSV_$;

  public static foam.core.FunctionProperty TO_CSV =
    init_TO_CSV();

  protected foam.cross_platform.GenericFunction toCSVLabel_;

  private boolean toCSVLabel_isSet_ =
    false;

  private foam.core.Slot toCSVLabel_$;

  public static foam.core.FunctionProperty TO_CSVLABEL =
    init_TO_CSVLABEL();

  protected Object columnLabel_;

  private boolean columnLabel_isSet_ =
    false;

  private foam.core.Slot columnLabel_$;

  public static foam.core.Property COLUMN_LABEL =
    init_COLUMN_LABEL();

  protected Object tableCellView_;

  private boolean tableCellView_isSet_ =
    false;

  private foam.core.Slot tableCellView_$;

  public static foam.core.Property TABLE_CELL_VIEW =
    init_TABLE_CELL_VIEW();

  protected Object tableHeaderFormatter_;

  private boolean tableHeaderFormatter_isSet_ =
    false;

  private foam.core.Slot tableHeaderFormatter_$;

  public static foam.core.Property TABLE_HEADER_FORMATTER =
    init_TABLE_HEADER_FORMATTER();

  protected foam.u2.view.Formatter tableCellFormatter_;

  private boolean tableCellFormatter_isSet_ =
    false;

  private foam.core.Slot tableCellFormatter_$;

  public static foam.u2.view.TableCellFormatter TABLE_CELL_FORMATTER =
    init_TABLE_CELL_FORMATTER();

  protected int tableWidth_;

  private boolean tableWidth_isSet_ =
    false;

  private foam.core.Slot tableWidth_$;

  public static foam.core.IntProperty TABLE_WIDTH =
    init_TABLE_WIDTH();

  protected Object searchView_;

  private boolean searchView_isSet_ =
    false;

  private foam.core.Slot searchView_$;

  public static foam.u2.ViewSpec SEARCH_VIEW =
    init_SEARCH_VIEW();

  protected Object chartJsFormatter_;

  private boolean chartJsFormatter_isSet_ =
    false;

  private foam.core.Slot chartJsFormatter_$;

  public static foam.core.Property CHART_JS_FORMATTER =
    init_CHART_JS_FORMATTER();

  protected String androidValue_;

  private boolean androidValue_isSet_ =
    false;

  private foam.core.Slot androidValue_$;

  public static foam.core.StringProperty ANDROID_VALUE =
    init_ANDROID_VALUE();

  protected String[] androidExpressionArgs_;

  private boolean androidExpressionArgs_isSet_ =
    false;

  private foam.core.Slot androidExpressionArgs_$;

  public static foam.core.StringArrayProperty ANDROID_EXPRESSION_ARGS =
    init_ANDROID_EXPRESSION_ARGS();

  protected String androidExpression_;

  private boolean androidExpression_isSet_ =
    false;

  private foam.core.Slot androidExpression_$;

  public static foam.core.StringProperty ANDROID_EXPRESSION =
    init_ANDROID_EXPRESSION();

  protected String androidType_;

  private boolean androidType_isSet_ =
    false;

  private foam.core.Slot androidType_$;

  public static foam.android.tools.AndroidType ANDROID_TYPE =
    init_ANDROID_TYPE();

  protected String androidAxiomName_;

  private boolean androidAxiomName_isSet_ =
    false;

  private foam.core.Slot androidAxiomName_$;

  public static foam.core.StringProperty ANDROID_AXIOM_NAME =
    init_ANDROID_AXIOM_NAME();

  protected String androidAxiomInitializerName_;

  private boolean androidAxiomInitializerName_isSet_ =
    false;

  private foam.core.Slot androidAxiomInitializerName_$;

  public static foam.core.StringProperty ANDROID_AXIOM_INITIALIZER_NAME =
    init_ANDROID_AXIOM_INITIALIZER_NAME();

  protected String androidSlotVarName_;

  private boolean androidSlotVarName_isSet_ =
    false;

  private foam.core.Slot androidSlotVarName_$;

  public static foam.core.StringProperty ANDROID_SLOT_VAR_NAME =
    init_ANDROID_SLOT_VAR_NAME();

  protected String androidSlotGetterName_;

  private boolean androidSlotGetterName_isSet_ =
    false;

  private foam.core.Slot androidSlotGetterName_$;

  public static foam.core.StringProperty ANDROID_SLOT_GETTER_NAME =
    init_ANDROID_SLOT_GETTER_NAME();

  protected String androidGetter_;

  private boolean androidGetter_isSet_ =
    false;

  private foam.core.Slot androidGetter_$;

  public static foam.core.StringProperty ANDROID_GETTER =
    init_ANDROID_GETTER();

  protected String androidPrivateVarName_;

  private boolean androidPrivateVarName_isSet_ =
    false;

  private foam.core.Slot androidPrivateVarName_$;

  public static foam.core.StringProperty ANDROID_PRIVATE_VAR_NAME =
    init_ANDROID_PRIVATE_VAR_NAME();

  protected String androidSetter_;

  private boolean androidSetter_isSet_ =
    false;

  private foam.core.Slot androidSetter_$;

  public static foam.core.StringProperty ANDROID_SETTER =
    init_ANDROID_SETTER();

  protected String androidPreSet_;

  private boolean androidPreSet_isSet_ =
    false;

  private foam.core.Slot androidPreSet_$;

  public static foam.core.StringProperty ANDROID_PRE_SET =
    init_ANDROID_PRE_SET();

  protected String androidPostSet_;

  private boolean androidPostSet_isSet_ =
    false;

  private foam.core.Slot androidPostSet_$;

  public static foam.core.StringProperty ANDROID_POST_SET =
    init_ANDROID_POST_SET();

  protected String androidAdapt_;

  private boolean androidAdapt_isSet_ =
    false;

  private foam.core.Slot androidAdapt_$;

  public static foam.core.StringProperty ANDROID_ADAPT =
    init_ANDROID_ADAPT();

  protected String androidFactory_;

  private boolean androidFactory_isSet_ =
    false;

  private foam.core.Slot androidFactory_$;

  public static foam.core.StringProperty ANDROID_FACTORY =
    init_ANDROID_FACTORY();

  protected String androidIsSetVarName_;

  private boolean androidIsSetVarName_isSet_ =
    false;

  private foam.core.Slot androidIsSetVarName_$;

  public static foam.core.StringProperty ANDROID_IS_SET_VAR_NAME =
    init_ANDROID_IS_SET_VAR_NAME();

  protected String androidGetterName_;

  private boolean androidGetterName_isSet_ =
    false;

  private foam.core.Slot androidGetterName_$;

  public static foam.core.StringProperty ANDROID_GETTER_NAME =
    init_ANDROID_GETTER_NAME();

  protected String androidSetterName_;

  private boolean androidSetterName_isSet_ =
    false;

  private foam.core.Slot androidSetterName_$;

  public static foam.core.StringProperty ANDROID_SETTER_NAME =
    init_ANDROID_SETTER_NAME();

  protected foam.cross_platform.GenericFunction androidFAsAndroidValue_;

  private boolean androidFAsAndroidValue_isSet_ =
    false;

  private foam.core.Slot androidFAsAndroidValue_$;

  public static foam.core.FunctionProperty ANDROID_FAS_ANDROID_VALUE =
    init_ANDROID_FAS_ANDROID_VALUE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getOf$() {

    if ( of_$ == null ) {
      of_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(OF)
        .build();
    }
    return of_$;
  }

  public Object getOf() {

    if ( ! of_isSet_ ) {
      return null;
    }
    return of_;
  }

  private Object of_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setOf(Object value) {

    boolean hasOldValue = hasPropertySet("of");
    Object oldValue = hasOldValue ?
      getOf() :
      null;
    Object castedValue = of_adapt(oldValue, value, hasOldValue);
    
    of_isSet_ = true;
    of_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "of", null };
    if ( hasListeners(args) ) {
      args[2] = getOf$();
      pub(args);
    }
  }

  private static foam.core.Property init_OF() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("of")
      .setRequired(true)
      .setForClass_("foam.core.AxiomArray")
      .build();
  }

  public foam.core.Slot getType$() {

    if ( type_$ == null ) {
      type_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TYPE)
        .build();
    }
    return type_$;
  }

  public Object getType() {

    if ( ! type_isSet_ ) {
      return "Any[]";
    }
    return type_;
  }

  private Object type_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setType(Object value) {

    boolean hasOldValue = hasPropertySet("type");
    Object oldValue = hasOldValue ?
      getType() :
      null;
    Object castedValue = type_adapt(oldValue, value, hasOldValue);
    
    type_isSet_ = true;
    type_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "type", null };
    if ( hasListeners(args) ) {
      args[2] = getType$();
      pub(args);
    }
  }

  private static foam.core.Property init_TYPE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("type")
      .setValue("Any[]")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getHidden$() {

    if ( hidden_$ == null ) {
      hidden_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(HIDDEN)
        .build();
    }
    return hidden_$;
  }

  public Object getHidden() {

    if ( ! hidden_isSet_ ) {
      return true;
    }
    return hidden_;
  }

  private Object hidden_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setHidden(Object value) {

    boolean hasOldValue = hasPropertySet("hidden");
    Object oldValue = hasOldValue ?
      getHidden() :
      null;
    Object castedValue = hidden_adapt(oldValue, value, hasOldValue);
    
    hidden_isSet_ = true;
    hidden_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "hidden", null };
    if ( hasListeners(args) ) {
      args[2] = getHidden$();
      pub(args);
    }
  }

  private static foam.core.Property init_HIDDEN() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("hidden")
      .setValue(true)
      .build();
  }

  public foam.core.Slot getAdapt$() {

    if ( adapt_$ == null ) {
      adapt_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ADAPT)
        .build();
    }
    return adapt_$;
  }

  public Object getAdapt() {

    if ( ! adapt_isSet_ ) {
      return null;
    }
    return adapt_;
  }

  private Object adapt_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAdapt(Object value) {

    boolean hasOldValue = hasPropertySet("adapt");
    Object oldValue = hasOldValue ?
      getAdapt() :
      null;
    Object castedValue = adapt_adapt(oldValue, value, hasOldValue);
    
    adapt_isSet_ = true;
    adapt_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "adapt", null };
    if ( hasListeners(args) ) {
      args[2] = getAdapt$();
      pub(args);
    }
  }

  private static foam.core.Property init_ADAPT() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("adapt")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getAssertValue$() {

    if ( assertValue_$ == null ) {
      assertValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ASSERT_VALUE)
        .build();
    }
    return assertValue_$;
  }

  public Object getAssertValue() {

    if ( ! assertValue_isSet_ ) {
      return null;
    }
    return assertValue_;
  }

  private Object assertValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAssertValue(Object value) {

    boolean hasOldValue = hasPropertySet("assertValue");
    Object oldValue = hasOldValue ?
      getAssertValue() :
      null;
    Object castedValue = assertValue_adapt(oldValue, value, hasOldValue);
    
    assertValue_isSet_ = true;
    assertValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "assertValue", null };
    if ( hasListeners(args) ) {
      args[2] = getAssertValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_ASSERT_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("assertValue")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getAdaptArrayElement$() {

    if ( adaptArrayElement_$ == null ) {
      adaptArrayElement_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ADAPT_ARRAY_ELEMENT)
        .build();
    }
    return adaptArrayElement_$;
  }

  public Object getAdaptArrayElement() {

    if ( ! adaptArrayElement_isSet_ ) {
      return null;
    }
    return adaptArrayElement_;
  }

  private Object adaptArrayElement_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAdaptArrayElement(Object value) {

    boolean hasOldValue = hasPropertySet("adaptArrayElement");
    Object oldValue = hasOldValue ?
      getAdaptArrayElement() :
      null;
    Object castedValue = adaptArrayElement_adapt(oldValue, value, hasOldValue);
    
    adaptArrayElement_isSet_ = true;
    adaptArrayElement_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "adaptArrayElement", null };
    if ( hasListeners(args) ) {
      args[2] = getAdaptArrayElement$();
      pub(args);
    }
  }

  private static foam.core.Property init_ADAPT_ARRAY_ELEMENT() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("adaptArrayElement")
      .setValue(null)
      .setForClass_("foam.core.AxiomArray")
      .build();
  }

  public foam.core.Slot getPostSet$() {

    if ( postSet_$ == null ) {
      postSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(POST_SET)
        .build();
    }
    return postSet_$;
  }

  public Object getPostSet() {

    if ( ! postSet_isSet_ ) {
      return null;
    }
    return postSet_;
  }

  private Object postSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPostSet(Object value) {

    boolean hasOldValue = hasPropertySet("postSet");
    Object oldValue = hasOldValue ?
      getPostSet() :
      null;
    Object castedValue = postSet_adapt(oldValue, value, hasOldValue);
    
    postSet_isSet_ = true;
    postSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "postSet", null };
    if ( hasListeners(args) ) {
      args[2] = getPostSet$();
      pub(args);
    }
  }

  private static foam.core.Property init_POST_SET() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("postSet")
      .setValue(null)
      .build();
  }

  public void toIndex() {

    throw new RuntimeException("toIndex is not implemented");
  }

  public foam.core.Slot getName$() {

    if ( name_$ == null ) {
      name_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NAME)
        .build();
    }
    return name_$;
  }

  public String getName() {

    if ( ! name_isSet_ ) {
      return "";
    }
    return name_;
  }

  private String name_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setName(Object value) {

    boolean hasOldValue = hasPropertySet("name");
    Object oldValue = hasOldValue ?
      getName() :
      null;
    String castedValue = name_adapt(oldValue, value, hasOldValue);
    
    name_isSet_ = true;
    name_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "name", null };
    if ( hasListeners(args) ) {
      args[2] = getName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("name")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getLabel$() {

    if ( label_$ == null ) {
      label_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LABEL)
        .build();
    }
    return label_$;
  }

  public Object getLabel() {

    if ( ! label_isSet_ ) {
      return null;
    }
    return label_;
  }

  private Object label_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setLabel(Object value) {

    boolean hasOldValue = hasPropertySet("label");
    Object oldValue = hasOldValue ?
      getLabel() :
      null;
    Object castedValue = label_adapt(oldValue, value, hasOldValue);
    
    label_isSet_ = true;
    label_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "label", null };
    if ( hasListeners(args) ) {
      args[2] = getLabel$();
      pub(args);
    }
  }

  private static foam.core.Property init_LABEL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("label")
      .build();
  }

  public foam.core.Slot getDocumentation$() {

    if ( documentation_$ == null ) {
      documentation_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DOCUMENTATION)
        .build();
    }
    return documentation_$;
  }

  public Object getDocumentation() {

    if ( ! documentation_isSet_ ) {
      return null;
    }
    return documentation_;
  }

  private Object documentation_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDocumentation(Object value) {

    boolean hasOldValue = hasPropertySet("documentation");
    Object oldValue = hasOldValue ?
      getDocumentation() :
      null;
    Object castedValue = documentation_adapt(oldValue, value, hasOldValue);
    
    documentation_isSet_ = true;
    documentation_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "documentation", null };
    if ( hasListeners(args) ) {
      args[2] = getDocumentation$();
      pub(args);
    }
  }

  private static foam.core.Property init_DOCUMENTATION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("documentation")
      .build();
  }

  public foam.core.Slot getHelp$() {

    if ( help_$ == null ) {
      help_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(HELP)
        .build();
    }
    return help_$;
  }

  public Object getHelp() {

    if ( ! help_isSet_ ) {
      return null;
    }
    return help_;
  }

  private Object help_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setHelp(Object value) {

    boolean hasOldValue = hasPropertySet("help");
    Object oldValue = hasOldValue ?
      getHelp() :
      null;
    Object castedValue = help_adapt(oldValue, value, hasOldValue);
    
    help_isSet_ = true;
    help_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "help", null };
    if ( hasListeners(args) ) {
      args[2] = getHelp$();
      pub(args);
    }
  }

  private static foam.core.Property init_HELP() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("help")
      .build();
  }

  public foam.core.Slot getOrder$() {

    if ( order_$ == null ) {
      order_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ORDER)
        .build();
    }
    return order_$;
  }

  public long getOrder() {

    if ( ! order_isSet_ ) {
      return 9007199254740991L;
    }
    return order_;
  }

  private long order_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (long) newValue;
  }

  public void setOrder(Object value) {

    boolean hasOldValue = hasPropertySet("order");
    Object oldValue = hasOldValue ?
      getOrder() :
      null;
    long castedValue = order_adapt(oldValue, value, hasOldValue);
    
    order_isSet_ = true;
    order_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "order", null };
    if ( hasListeners(args) ) {
      args[2] = getOrder$();
      pub(args);
    }
  }

  private static foam.core.LongProperty init_ORDER() {

    return foam.core.LongProperty.LongPropertyBuilder(null) // TODO give context
      .setValue(9007199254740991L)
      .setName("order")
      .setDocumentation("\n        The order to render the property in if rendering multiple properties.\n      ")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getValue$() {

    if ( value_$ == null ) {
      value_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALUE)
        .build();
    }
    return value_$;
  }

  public Object getValue() {

    if ( ! value_isSet_ ) {
      return null;
    }
    return value_;
  }

  private Object value_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValue(Object value) {

    boolean hasOldValue = hasPropertySet("value");
    Object oldValue = hasOldValue ?
      getValue() :
      null;
    Object castedValue = value_adapt(oldValue, value, hasOldValue);
    
    value_isSet_ = true;
    value_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "value", null };
    if ( hasListeners(args) ) {
      args[2] = getValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("value")
      .build();
  }

  public foam.core.Slot getFactory$() {

    if ( factory_$ == null ) {
      factory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FACTORY)
        .build();
    }
    return factory_$;
  }

  public Object getFactory() {

    if ( ! factory_isSet_ ) {
      return null;
    }
    return factory_;
  }

  private Object factory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFactory(Object value) {

    boolean hasOldValue = hasPropertySet("factory");
    Object oldValue = hasOldValue ?
      getFactory() :
      null;
    Object castedValue = factory_adapt(oldValue, value, hasOldValue);
    
    factory_isSet_ = true;
    factory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "factory", null };
    if ( hasListeners(args) ) {
      args[2] = getFactory$();
      pub(args);
    }
  }

  private static foam.core.Property init_FACTORY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("factory")
      .build();
  }

  public foam.core.Slot getPreSet$() {

    if ( preSet_$ == null ) {
      preSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PRE_SET)
        .build();
    }
    return preSet_$;
  }

  public Object getPreSet() {

    if ( ! preSet_isSet_ ) {
      return null;
    }
    return preSet_;
  }

  private Object preSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPreSet(Object value) {

    boolean hasOldValue = hasPropertySet("preSet");
    Object oldValue = hasOldValue ?
      getPreSet() :
      null;
    Object castedValue = preSet_adapt(oldValue, value, hasOldValue);
    
    preSet_isSet_ = true;
    preSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "preSet", null };
    if ( hasListeners(args) ) {
      args[2] = getPreSet$();
      pub(args);
    }
  }

  private static foam.core.Property init_PRE_SET() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("preSet")
      .build();
  }

  public foam.core.Slot getExpression$() {

    if ( expression_$ == null ) {
      expression_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(EXPRESSION)
        .build();
    }
    return expression_$;
  }

  public Object getExpression() {

    if ( ! expression_isSet_ ) {
      return null;
    }
    return expression_;
  }

  private Object expression_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setExpression(Object value) {

    boolean hasOldValue = hasPropertySet("expression");
    Object oldValue = hasOldValue ?
      getExpression() :
      null;
    Object castedValue = expression_adapt(oldValue, value, hasOldValue);
    
    expression_isSet_ = true;
    expression_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "expression", null };
    if ( hasListeners(args) ) {
      args[2] = getExpression$();
      pub(args);
    }
  }

  private static foam.core.Property init_EXPRESSION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("expression")
      .build();
  }

  public foam.core.Slot getGetter$() {

    if ( getter_$ == null ) {
      getter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GETTER)
        .build();
    }
    return getter_$;
  }

  public Object getGetter() {

    if ( ! getter_isSet_ ) {
      return null;
    }
    return getter_;
  }

  private Object getter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setGetter(Object value) {

    boolean hasOldValue = hasPropertySet("getter");
    Object oldValue = hasOldValue ?
      getGetter() :
      null;
    Object castedValue = getter_adapt(oldValue, value, hasOldValue);
    
    getter_isSet_ = true;
    getter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "getter", null };
    if ( hasListeners(args) ) {
      args[2] = getGetter$();
      pub(args);
    }
  }

  private static foam.core.Property init_GETTER() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("getter")
      .build();
  }

  public foam.core.Slot getSetter$() {

    if ( setter_$ == null ) {
      setter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SETTER)
        .build();
    }
    return setter_$;
  }

  public Object getSetter() {

    if ( ! setter_isSet_ ) {
      return null;
    }
    return setter_;
  }

  private Object setter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSetter(Object value) {

    boolean hasOldValue = hasPropertySet("setter");
    Object oldValue = hasOldValue ?
      getSetter() :
      null;
    Object castedValue = setter_adapt(oldValue, value, hasOldValue);
    
    setter_isSet_ = true;
    setter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "setter", null };
    if ( hasListeners(args) ) {
      args[2] = getSetter$();
      pub(args);
    }
  }

  private static foam.core.Property init_SETTER() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("setter")
      .build();
  }

  public foam.core.Slot getCloneProperty$() {

    if ( cloneProperty_$ == null ) {
      cloneProperty_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CLONE_PROPERTY)
        .build();
    }
    return cloneProperty_$;
  }

  public Object getCloneProperty() {

    if ( ! cloneProperty_isSet_ ) {
      return null;
    }
    return cloneProperty_;
  }

  private Object cloneProperty_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setCloneProperty(Object value) {

    boolean hasOldValue = hasPropertySet("cloneProperty");
    Object oldValue = hasOldValue ?
      getCloneProperty() :
      null;
    Object castedValue = cloneProperty_adapt(oldValue, value, hasOldValue);
    
    cloneProperty_isSet_ = true;
    cloneProperty_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "cloneProperty", null };
    if ( hasListeners(args) ) {
      args[2] = getCloneProperty$();
      pub(args);
    }
  }

  private static foam.core.Property init_CLONE_PROPERTY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("cloneProperty")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getFinal$() {

    if ( final_$ == null ) {
      final_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FINAL)
        .build();
    }
    return final_$;
  }

  public Object getFinal() {

    if ( ! final_isSet_ ) {
      return null;
    }
    return final_;
  }

  private Object final_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFinal(Object value) {

    boolean hasOldValue = hasPropertySet("final");
    Object oldValue = hasOldValue ?
      getFinal() :
      null;
    Object castedValue = final_adapt(oldValue, value, hasOldValue);
    
    final_isSet_ = true;
    final_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "final", null };
    if ( hasListeners(args) ) {
      args[2] = getFinal$();
      pub(args);
    }
  }

  private static foam.core.Property init_FINAL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("final")
      .build();
  }

  public foam.core.Slot getRequired$() {

    if ( required_$ == null ) {
      required_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(REQUIRED)
        .build();
    }
    return required_$;
  }

  public Object getRequired() {

    if ( ! required_isSet_ ) {
      return null;
    }
    return required_;
  }

  private Object required_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setRequired(Object value) {

    boolean hasOldValue = hasPropertySet("required");
    Object oldValue = hasOldValue ?
      getRequired() :
      null;
    Object castedValue = required_adapt(oldValue, value, hasOldValue);
    
    required_isSet_ = true;
    required_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "required", null };
    if ( hasListeners(args) ) {
      args[2] = getRequired$();
      pub(args);
    }
  }

  private static foam.core.Property init_REQUIRED() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("required")
      .build();
  }

  public foam.core.Slot getPermissionRequired$() {

    if ( permissionRequired_$ == null ) {
      permissionRequired_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PERMISSION_REQUIRED)
        .build();
    }
    return permissionRequired_$;
  }

  public Object getPermissionRequired() {

    if ( ! permissionRequired_isSet_ ) {
      return false;
    }
    return permissionRequired_;
  }

  private Object permissionRequired_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPermissionRequired(Object value) {

    boolean hasOldValue = hasPropertySet("permissionRequired");
    Object oldValue = hasOldValue ?
      getPermissionRequired() :
      null;
    Object castedValue = permissionRequired_adapt(oldValue, value, hasOldValue);
    
    permissionRequired_isSet_ = true;
    permissionRequired_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "permissionRequired", null };
    if ( hasListeners(args) ) {
      args[2] = getPermissionRequired$();
      pub(args);
    }
  }

  private static foam.core.Property init_PERMISSION_REQUIRED() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("permissionRequired")
      .setValue(false)
      .build();
  }

  public foam.core.Slot getFlags$() {

    if ( flags_$ == null ) {
      flags_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FLAGS)
        .build();
    }
    return flags_$;
  }

  public Object getFlags() {

    if ( ! flags_isSet_ ) {
      return null;
    }
    return flags_;
  }

  private Object flags_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFlags(Object value) {

    boolean hasOldValue = hasPropertySet("flags");
    Object oldValue = hasOldValue ?
      getFlags() :
      null;
    Object castedValue = flags_adapt(oldValue, value, hasOldValue);
    
    flags_isSet_ = true;
    flags_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "flags", null };
    if ( hasListeners(args) ) {
      args[2] = getFlags$();
      pub(args);
    }
  }

  private static foam.core.Property init_FLAGS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("flags")
      .build();
  }

  public foam.core.Slot getFromString$() {

    if ( fromString_$ == null ) {
      fromString_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FROM_STRING)
        .build();
    }
    return fromString_$;
  }

  public Object getFromString() {

    if ( ! fromString_isSet_ ) {
      return null;
    }
    return fromString_;
  }

  private Object fromString_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFromString(Object value) {

    boolean hasOldValue = hasPropertySet("fromString");
    Object oldValue = hasOldValue ?
      getFromString() :
      null;
    Object castedValue = fromString_adapt(oldValue, value, hasOldValue);
    
    fromString_isSet_ = true;
    fromString_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "fromString", null };
    if ( hasListeners(args) ) {
      args[2] = getFromString$();
      pub(args);
    }
  }

  private static foam.core.Property init_FROM_STRING() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("fromString")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getComparePropertyValues$() {

    if ( comparePropertyValues_$ == null ) {
      comparePropertyValues_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(COMPARE_PROPERTY_VALUES)
        .build();
    }
    return comparePropertyValues_$;
  }

  public Object getComparePropertyValues() {

    if ( ! comparePropertyValues_isSet_ ) {
      return null;
    }
    return comparePropertyValues_;
  }

  private Object comparePropertyValues_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setComparePropertyValues(Object value) {

    boolean hasOldValue = hasPropertySet("comparePropertyValues");
    Object oldValue = hasOldValue ?
      getComparePropertyValues() :
      null;
    Object castedValue = comparePropertyValues_adapt(oldValue, value, hasOldValue);
    
    comparePropertyValues_isSet_ = true;
    comparePropertyValues_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "comparePropertyValues", null };
    if ( hasListeners(args) ) {
      args[2] = getComparePropertyValues$();
      pub(args);
    }
  }

  private static foam.core.Property init_COMPARE_PROPERTY_VALUES() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("comparePropertyValues")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getIsDefaultValue$() {

    if ( isDefaultValue_$ == null ) {
      isDefaultValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(IS_DEFAULT_VALUE)
        .build();
    }
    return isDefaultValue_$;
  }

  public Object getIsDefaultValue() {

    if ( ! isDefaultValue_isSet_ ) {
      return null;
    }
    return isDefaultValue_;
  }

  private Object isDefaultValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setIsDefaultValue(Object value) {

    boolean hasOldValue = hasPropertySet("isDefaultValue");
    Object oldValue = hasOldValue ?
      getIsDefaultValue() :
      null;
    Object castedValue = isDefaultValue_adapt(oldValue, value, hasOldValue);
    
    isDefaultValue_isSet_ = true;
    isDefaultValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "isDefaultValue", null };
    if ( hasListeners(args) ) {
      args[2] = getIsDefaultValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_IS_DEFAULT_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("isDefaultValue")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getDiffPropertyValues$() {

    if ( diffPropertyValues_$ == null ) {
      diffPropertyValues_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DIFF_PROPERTY_VALUES)
        .build();
    }
    return diffPropertyValues_$;
  }

  public Object getDiffPropertyValues() {

    if ( ! diffPropertyValues_isSet_ ) {
      return null;
    }
    return diffPropertyValues_;
  }

  private Object diffPropertyValues_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDiffPropertyValues(Object value) {

    boolean hasOldValue = hasPropertySet("diffPropertyValues");
    Object oldValue = hasOldValue ?
      getDiffPropertyValues() :
      null;
    Object castedValue = diffPropertyValues_adapt(oldValue, value, hasOldValue);
    
    diffPropertyValues_isSet_ = true;
    diffPropertyValues_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "diffPropertyValues", null };
    if ( hasListeners(args) ) {
      args[2] = getDiffPropertyValues$();
      pub(args);
    }
  }

  private static foam.core.Property init_DIFF_PROPERTY_VALUES() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("diffPropertyValues")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getDiffProperty$() {

    if ( diffProperty_$ == null ) {
      diffProperty_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DIFF_PROPERTY)
        .build();
    }
    return diffProperty_$;
  }

  public Object getDiffProperty() {

    if ( ! diffProperty_isSet_ ) {
      return null;
    }
    return diffProperty_;
  }

  private Object diffProperty_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDiffProperty(Object value) {

    boolean hasOldValue = hasPropertySet("diffProperty");
    Object oldValue = hasOldValue ?
      getDiffProperty() :
      null;
    Object castedValue = diffProperty_adapt(oldValue, value, hasOldValue);
    
    diffProperty_isSet_ = true;
    diffProperty_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "diffProperty", null };
    if ( hasListeners(args) ) {
      args[2] = getDiffProperty$();
      pub(args);
    }
  }

  private static foam.core.Property init_DIFF_PROPERTY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("diffProperty")
      .setValue(null)
      .build();
  }

  public foam.core.Slot getForClass_$() {

    if ( forClass__$ == null ) {
      forClass__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FOR_CLASS_)
        .build();
    }
    return forClass__$;
  }

  public Object getForClass_() {

    if ( ! forClass__isSet_ ) {
      return null;
    }
    return forClass__;
  }

  private Object forClass__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setForClass_(Object value) {

    boolean hasOldValue = hasPropertySet("forClass_");
    Object oldValue = hasOldValue ?
      getForClass_() :
      null;
    Object castedValue = forClass__adapt(oldValue, value, hasOldValue);
    
    forClass__isSet_ = true;
    forClass__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "forClass_", null };
    if ( hasListeners(args) ) {
      args[2] = getForClass_$();
      pub(args);
    }
  }

  private static foam.core.Property init_FOR_CLASS_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("forClass_")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getContainsPII$() {

    if ( containsPII_$ == null ) {
      containsPII_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CONTAINS_PII)
        .build();
    }
    return containsPII_$;
  }

  public Object getContainsPII() {

    if ( ! containsPII_isSet_ ) {
      return null;
    }
    return containsPII_;
  }

  private Object containsPII_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setContainsPII(Object value) {

    boolean hasOldValue = hasPropertySet("containsPII");
    Object oldValue = hasOldValue ?
      getContainsPII() :
      null;
    Object castedValue = containsPII_adapt(oldValue, value, hasOldValue);
    
    containsPII_isSet_ = true;
    containsPII_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "containsPII", null };
    if ( hasListeners(args) ) {
      args[2] = getContainsPII$();
      pub(args);
    }
  }

  private static foam.core.Property init_CONTAINS_PII() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("containsPII")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getContainsDeletablePII$() {

    if ( containsDeletablePII_$ == null ) {
      containsDeletablePII_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CONTAINS_DELETABLE_PII)
        .build();
    }
    return containsDeletablePII_$;
  }

  public Object getContainsDeletablePII() {

    if ( ! containsDeletablePII_isSet_ ) {
      return null;
    }
    return containsDeletablePII_;
  }

  private Object containsDeletablePII_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setContainsDeletablePII(Object value) {

    boolean hasOldValue = hasPropertySet("containsDeletablePII");
    Object oldValue = hasOldValue ?
      getContainsDeletablePII() :
      null;
    Object castedValue = containsDeletablePII_adapt(oldValue, value, hasOldValue);
    
    containsDeletablePII_isSet_ = true;
    containsDeletablePII_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "containsDeletablePII", null };
    if ( hasListeners(args) ) {
      args[2] = getContainsDeletablePII$();
      pub(args);
    }
  }

  private static foam.core.Property init_CONTAINS_DELETABLE_PII() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("containsDeletablePII")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getGridColumns$() {

    if ( gridColumns_$ == null ) {
      gridColumns_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GRID_COLUMNS)
        .build();
    }
    return gridColumns_$;
  }

  public Object getGridColumns() {

    if ( ! gridColumns_isSet_ ) {
      return null;
    }
    return gridColumns_;
  }

  private Object gridColumns_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setGridColumns(Object value) {

    boolean hasOldValue = hasPropertySet("gridColumns");
    Object oldValue = hasOldValue ?
      getGridColumns() :
      null;
    Object castedValue = gridColumns_adapt(oldValue, value, hasOldValue);
    
    gridColumns_isSet_ = true;
    gridColumns_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "gridColumns", null };
    if ( hasListeners(args) ) {
      args[2] = getGridColumns$();
      pub(args);
    }
  }

  private static foam.core.Property init_GRID_COLUMNS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("gridColumns")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSection$() {

    if ( section_$ == null ) {
      section_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SECTION)
        .build();
    }
    return section_$;
  }

  public String getSection() {

    if ( ! section_isSet_ ) {
      return "_defaultSection";
    }
    return section_;
  }

  private String section_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSection(Object value) {

    boolean hasOldValue = hasPropertySet("section");
    Object oldValue = hasOldValue ?
      getSection() :
      null;
    String castedValue = section_adapt(oldValue, value, hasOldValue);
    
    section_isSet_ = true;
    section_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "section", null };
    if ( hasListeners(args) ) {
      args[2] = getSection$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SECTION() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("_defaultSection")
      .setName("section")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getTransient$() {

    if ( transient_$ == null ) {
      transient_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TRANSIENT)
        .build();
    }
    return transient_$;
  }

  public boolean getTransient() {

    if ( ! transient_isSet_ ) {
      return false;
    }
    return transient_;
  }

  private boolean transient_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setTransient(Object value) {

    boolean hasOldValue = hasPropertySet("transient");
    Object oldValue = hasOldValue ?
      getTransient() :
      null;
    boolean castedValue = transient_adapt(oldValue, value, hasOldValue);
    
    transient_isSet_ = true;
    transient_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "transient", null };
    if ( hasListeners(args) ) {
      args[2] = getTransient$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_TRANSIENT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("transient")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getNetworkTransient$() {

    if ( networkTransient_$ == null ) {
      networkTransient_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NETWORK_TRANSIENT)
        .build();
    }
    return networkTransient_$;
  }

  public boolean getNetworkTransient() {

    if ( ! networkTransient_isSet_ ) {
      return false;
    }
    return networkTransient_;
  }

  private boolean networkTransient_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setNetworkTransient(Object value) {

    boolean hasOldValue = hasPropertySet("networkTransient");
    Object oldValue = hasOldValue ?
      getNetworkTransient() :
      null;
    boolean castedValue = networkTransient_adapt(oldValue, value, hasOldValue);
    
    networkTransient_isSet_ = true;
    networkTransient_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "networkTransient", null };
    if ( hasListeners(args) ) {
      args[2] = getNetworkTransient$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_NETWORK_TRANSIENT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("networkTransient")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getStorageTransient$() {

    if ( storageTransient_$ == null ) {
      storageTransient_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(STORAGE_TRANSIENT)
        .build();
    }
    return storageTransient_$;
  }

  public boolean getStorageTransient() {

    if ( ! storageTransient_isSet_ ) {
      return false;
    }
    return storageTransient_;
  }

  private boolean storageTransient_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setStorageTransient(Object value) {

    boolean hasOldValue = hasPropertySet("storageTransient");
    Object oldValue = hasOldValue ?
      getStorageTransient() :
      null;
    boolean castedValue = storageTransient_adapt(oldValue, value, hasOldValue);
    
    storageTransient_isSet_ = true;
    storageTransient_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "storageTransient", null };
    if ( hasListeners(args) ) {
      args[2] = getStorageTransient$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_STORAGE_TRANSIENT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("storageTransient")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getValidationPredicates$() {

    if ( validationPredicates_$ == null ) {
      validationPredicates_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALIDATION_PREDICATES)
        .build();
    }
    return validationPredicates_$;
  }

  protected foam.core.ValidationPredicate[] validationPredicates_factory_() {

    return new foam.core.ValidationPredicate[0];
  }

  public foam.core.ValidationPredicate[] getValidationPredicates() {

    if ( ! validationPredicates_isSet_ ) {
      setProperty("validationPredicates", validationPredicates_factory_());
    }
    return validationPredicates_;
  }

  private foam.core.ValidationPredicate[] validationPredicates_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.ValidationPredicate[]) newValue;
  }

  public void setValidationPredicates(Object value) {

    boolean hasOldValue = hasPropertySet("validationPredicates");
    Object oldValue = hasOldValue ?
      getValidationPredicates() :
      null;
    foam.core.ValidationPredicate[] castedValue = validationPredicates_adapt(oldValue, value, hasOldValue);
    
    validationPredicates_isSet_ = true;
    validationPredicates_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "validationPredicates", null };
    if ( hasListeners(args) ) {
      args[2] = getValidationPredicates$();
      pub(args);
    }
  }

  private static foam.core.FObjectArray init_VALIDATION_PREDICATES() {

    return foam.core.FObjectArray.FObjectArrayBuilder(null) // TODO give context
      .setOf("foam.core.ValidationPredicate")
      .setType("foam.core.ValidationPredicate[]")
      .setName("validationPredicates")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getValidateObj$() {

    if ( validateObj_$ == null ) {
      validateObj_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALIDATE_OBJ)
        .build();
    }
    return validateObj_$;
  }

  public Object getValidateObj() {

    if ( ! validateObj_isSet_ ) {
      return null;
    }
    return validateObj_;
  }

  private Object validateObj_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValidateObj(Object value) {

    boolean hasOldValue = hasPropertySet("validateObj");
    Object oldValue = hasOldValue ?
      getValidateObj() :
      null;
    Object castedValue = validateObj_adapt(oldValue, value, hasOldValue);
    
    validateObj_isSet_ = true;
    validateObj_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "validateObj", null };
    if ( hasListeners(args) ) {
      args[2] = getValidateObj$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALIDATE_OBJ() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("validateObj")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getShortName$() {

    if ( shortName_$ == null ) {
      shortName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SHORT_NAME)
        .build();
    }
    return shortName_$;
  }

  public String getShortName() {

    if ( ! shortName_isSet_ ) {
      return "";
    }
    return shortName_;
  }

  private String shortName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setShortName(Object value) {

    boolean hasOldValue = hasPropertySet("shortName");
    Object oldValue = hasOldValue ?
      getShortName() :
      null;
    String castedValue = shortName_adapt(oldValue, value, hasOldValue);
    
    shortName_isSet_ = true;
    shortName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "shortName", null };
    if ( hasListeners(args) ) {
      args[2] = getShortName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SHORT_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("shortName")
      .setForClass_("foam.core.Property")
      .build();
  }

  protected foam.core.internal.PropertySlot.Builder PropertySlot_create() {

    return foam.core.internal.PropertySlot.PropertySlotBuilder(getSubX());
  }

  public foam.core.Slot getSource$() {

    if ( source_$ == null ) {
      source_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SOURCE)
        .build();
    }
    return source_$;
  }

  public Object getSource() {

    if ( ! source_isSet_ ) {
      return null;
    }
    return source_;
  }

  private Object source_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSource(Object value) {

    boolean hasOldValue = hasPropertySet("source");
    Object oldValue = hasOldValue ?
      getSource() :
      null;
    Object castedValue = source_adapt(oldValue, value, hasOldValue);
    
    source_isSet_ = true;
    source_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "source", null };
    if ( hasListeners(args) ) {
      args[2] = getSource$();
      pub(args);
    }
  }

  private static foam.core.Property init_SOURCE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("source")
      .setForClass_("foam.core.Property")
      .setTransient(true)
      .build();
  }

  public foam.core.Slot getFromJSON$() {

    if ( fromJSON_$ == null ) {
      fromJSON_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FROM_JSON)
        .build();
    }
    return fromJSON_$;
  }

  public Object getFromJSON() {

    if ( ! fromJSON_isSet_ ) {
      return null;
    }
    return fromJSON_;
  }

  private Object fromJSON_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFromJSON(Object value) {

    boolean hasOldValue = hasPropertySet("fromJSON");
    Object oldValue = hasOldValue ?
      getFromJSON() :
      null;
    Object castedValue = fromJSON_adapt(oldValue, value, hasOldValue);
    
    fromJSON_isSet_ = true;
    fromJSON_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "fromJSON", null };
    if ( hasListeners(args) ) {
      args[2] = getFromJSON$();
      pub(args);
    }
  }

  private static foam.core.Property init_FROM_JSON() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("fromJSON")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getToJSON$() {

    if ( toJSON_$ == null ) {
      toJSON_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TO_JSON)
        .build();
    }
    return toJSON_$;
  }

  public Object getToJSON() {

    if ( ! toJSON_isSet_ ) {
      return null;
    }
    return toJSON_;
  }

  private Object toJSON_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setToJSON(Object value) {

    boolean hasOldValue = hasPropertySet("toJSON");
    Object oldValue = hasOldValue ?
      getToJSON() :
      null;
    Object castedValue = toJSON_adapt(oldValue, value, hasOldValue);
    
    toJSON_isSet_ = true;
    toJSON_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "toJSON", null };
    if ( hasListeners(args) ) {
      args[2] = getToJSON$();
      pub(args);
    }
  }

  private static foam.core.Property init_TO_JSON() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("toJSON")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getXmlAttribute$() {

    if ( xmlAttribute_$ == null ) {
      xmlAttribute_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(XML_ATTRIBUTE)
        .build();
    }
    return xmlAttribute_$;
  }

  public boolean getXmlAttribute() {

    if ( ! xmlAttribute_isSet_ ) {
      return false;
    }
    return xmlAttribute_;
  }

  private boolean xmlAttribute_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setXmlAttribute(Object value) {

    boolean hasOldValue = hasPropertySet("xmlAttribute");
    Object oldValue = hasOldValue ?
      getXmlAttribute() :
      null;
    boolean castedValue = xmlAttribute_adapt(oldValue, value, hasOldValue);
    
    xmlAttribute_isSet_ = true;
    xmlAttribute_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "xmlAttribute", null };
    if ( hasListeners(args) ) {
      args[2] = getXmlAttribute$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_XML_ATTRIBUTE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("xmlAttribute")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getXmlTextNode$() {

    if ( xmlTextNode_$ == null ) {
      xmlTextNode_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(XML_TEXT_NODE)
        .build();
    }
    return xmlTextNode_$;
  }

  public boolean getXmlTextNode() {

    if ( ! xmlTextNode_isSet_ ) {
      return false;
    }
    return xmlTextNode_;
  }

  private boolean xmlTextNode_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setXmlTextNode(Object value) {

    boolean hasOldValue = hasPropertySet("xmlTextNode");
    Object oldValue = hasOldValue ?
      getXmlTextNode() :
      null;
    boolean castedValue = xmlTextNode_adapt(oldValue, value, hasOldValue);
    
    xmlTextNode_isSet_ = true;
    xmlTextNode_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "xmlTextNode", null };
    if ( hasListeners(args) ) {
      args[2] = getXmlTextNode$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_XML_TEXT_NODE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("xmlTextNode")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getFromXML$() {

    if ( fromXML_$ == null ) {
      fromXML_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FROM_XML)
        .build();
    }
    return fromXML_$;
  }

  public Object getFromXML() {

    if ( ! fromXML_isSet_ ) {
      return null;
    }
    return fromXML_;
  }

  private Object fromXML_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFromXML(Object value) {

    boolean hasOldValue = hasPropertySet("fromXML");
    Object oldValue = hasOldValue ?
      getFromXML() :
      null;
    Object castedValue = fromXML_adapt(oldValue, value, hasOldValue);
    
    fromXML_isSet_ = true;
    fromXML_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "fromXML", null };
    if ( hasListeners(args) ) {
      args[2] = getFromXML$();
      pub(args);
    }
  }

  private static foam.core.Property init_FROM_XML() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("fromXML")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getToXML$() {

    if ( toXML_$ == null ) {
      toXML_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TO_XML)
        .build();
    }
    return toXML_$;
  }

  public Object getToXML() {

    if ( ! toXML_isSet_ ) {
      return null;
    }
    return toXML_;
  }

  private Object toXML_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setToXML(Object value) {

    boolean hasOldValue = hasPropertySet("toXML");
    Object oldValue = hasOldValue ?
      getToXML() :
      null;
    Object castedValue = toXML_adapt(oldValue, value, hasOldValue);
    
    toXML_isSet_ = true;
    toXML_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "toXML", null };
    if ( hasListeners(args) ) {
      args[2] = getToXML$();
      pub(args);
    }
  }

  private static foam.core.Property init_TO_XML() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("toXML")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getFromCSVLabelMapping$() {

    if ( fromCSVLabelMapping_$ == null ) {
      fromCSVLabelMapping_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FROM_CSVLABEL_MAPPING)
        .build();
    }
    return fromCSVLabelMapping_$;
  }

  public foam.cross_platform.GenericFunction getFromCSVLabelMapping() {

    if ( ! fromCSVLabelMapping_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return fromCSVLabelMapping_;
  }

  private foam.cross_platform.GenericFunction fromCSVLabelMapping_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setFromCSVLabelMapping(Object value) {

    boolean hasOldValue = hasPropertySet("fromCSVLabelMapping");
    Object oldValue = hasOldValue ?
      getFromCSVLabelMapping() :
      null;
    foam.cross_platform.GenericFunction castedValue = fromCSVLabelMapping_adapt(oldValue, value, hasOldValue);
    
    fromCSVLabelMapping_isSet_ = true;
    fromCSVLabelMapping_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "fromCSVLabelMapping", null };
    if ( hasListeners(args) ) {
      args[2] = getFromCSVLabelMapping$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_FROM_CSVLABEL_MAPPING() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("fromCSVLabelMapping")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftVarName$() {

    if ( swiftVarName_$ == null ) {
      swiftVarName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VAR_NAME)
        .build();
    }
    return swiftVarName_$;
  }

  public String getSwiftVarName() {

    if ( ! swiftVarName_isSet_ ) {
      return "";
    }
    return swiftVarName_;
  }

  private String swiftVarName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftVarName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftVarName");
    Object oldValue = hasOldValue ?
      getSwiftVarName() :
      null;
    String castedValue = swiftVarName_adapt(oldValue, value, hasOldValue);
    
    swiftVarName_isSet_ = true;
    swiftVarName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftVarName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftVarName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VAR_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftVarName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftView$() {

    if ( swiftView_$ == null ) {
      swiftView_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VIEW)
        .build();
    }
    return swiftView_$;
  }

  public String getSwiftView() {

    if ( ! swiftView_isSet_ ) {
      return "";
    }
    return swiftView_;
  }

  private String swiftView_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftView(Object value) {

    boolean hasOldValue = hasPropertySet("swiftView");
    Object oldValue = hasOldValue ?
      getSwiftView() :
      null;
    String castedValue = swiftView_adapt(oldValue, value, hasOldValue);
    
    swiftView_isSet_ = true;
    swiftView_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftView", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftView$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VIEW() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftView")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftSlotLinkSubName$() {

    if ( swiftSlotLinkSubName_$ == null ) {
      swiftSlotLinkSubName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SLOT_LINK_SUB_NAME)
        .build();
    }
    return swiftSlotLinkSubName_$;
  }

  public String getSwiftSlotLinkSubName() {

    if ( ! swiftSlotLinkSubName_isSet_ ) {
      return "";
    }
    return swiftSlotLinkSubName_;
  }

  private String swiftSlotLinkSubName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSlotLinkSubName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSlotLinkSubName");
    Object oldValue = hasOldValue ?
      getSwiftSlotLinkSubName() :
      null;
    String castedValue = swiftSlotLinkSubName_adapt(oldValue, value, hasOldValue);
    
    swiftSlotLinkSubName_isSet_ = true;
    swiftSlotLinkSubName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSlotLinkSubName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSlotLinkSubName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SLOT_LINK_SUB_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSlotLinkSubName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftSlotValueName$() {

    if ( swiftSlotValueName_$ == null ) {
      swiftSlotValueName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SLOT_VALUE_NAME)
        .build();
    }
    return swiftSlotValueName_$;
  }

  public String getSwiftSlotValueName() {

    if ( ! swiftSlotValueName_isSet_ ) {
      return "";
    }
    return swiftSlotValueName_;
  }

  private String swiftSlotValueName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSlotValueName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSlotValueName");
    Object oldValue = hasOldValue ?
      getSwiftSlotValueName() :
      null;
    String castedValue = swiftSlotValueName_adapt(oldValue, value, hasOldValue);
    
    swiftSlotValueName_isSet_ = true;
    swiftSlotValueName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSlotValueName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSlotValueName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SLOT_VALUE_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSlotValueName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftSlotName$() {

    if ( swiftSlotName_$ == null ) {
      swiftSlotName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SLOT_NAME)
        .build();
    }
    return swiftSlotName_$;
  }

  public String getSwiftSlotName() {

    if ( ! swiftSlotName_isSet_ ) {
      return "";
    }
    return swiftSlotName_;
  }

  private String swiftSlotName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSlotName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSlotName");
    Object oldValue = hasOldValue ?
      getSwiftSlotName() :
      null;
    String castedValue = swiftSlotName_adapt(oldValue, value, hasOldValue);
    
    swiftSlotName_isSet_ = true;
    swiftSlotName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSlotName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSlotName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SLOT_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSlotName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftInitedName$() {

    if ( swiftInitedName_$ == null ) {
      swiftInitedName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_INITED_NAME)
        .build();
    }
    return swiftInitedName_$;
  }

  public String getSwiftInitedName() {

    if ( ! swiftInitedName_isSet_ ) {
      return "";
    }
    return swiftInitedName_;
  }

  private String swiftInitedName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftInitedName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftInitedName");
    Object oldValue = hasOldValue ?
      getSwiftInitedName() :
      null;
    String castedValue = swiftInitedName_adapt(oldValue, value, hasOldValue);
    
    swiftInitedName_isSet_ = true;
    swiftInitedName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftInitedName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftInitedName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_INITED_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftInitedName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftValueName$() {

    if ( swiftValueName_$ == null ) {
      swiftValueName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VALUE_NAME)
        .build();
    }
    return swiftValueName_$;
  }

  public String getSwiftValueName() {

    if ( ! swiftValueName_isSet_ ) {
      return "";
    }
    return swiftValueName_;
  }

  private String swiftValueName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftValueName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftValueName");
    Object oldValue = hasOldValue ?
      getSwiftValueName() :
      null;
    String castedValue = swiftValueName_adapt(oldValue, value, hasOldValue);
    
    swiftValueName_isSet_ = true;
    swiftValueName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftValueName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftValueName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VALUE_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftValueName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftValueType$() {

    if ( swiftValueType_$ == null ) {
      swiftValueType_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VALUE_TYPE)
        .build();
    }
    return swiftValueType_$;
  }

  public String getSwiftValueType() {

    if ( ! swiftValueType_isSet_ ) {
      return "";
    }
    return swiftValueType_;
  }

  private String swiftValueType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftValueType(Object value) {

    boolean hasOldValue = hasPropertySet("swiftValueType");
    Object oldValue = hasOldValue ?
      getSwiftValueType() :
      null;
    String castedValue = swiftValueType_adapt(oldValue, value, hasOldValue);
    
    swiftValueType_isSet_ = true;
    swiftValueType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftValueType", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftValueType$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VALUE_TYPE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftValueType")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftRequiresEscaping$() {

    if ( swiftRequiresEscaping_$ == null ) {
      swiftRequiresEscaping_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_REQUIRES_ESCAPING)
        .build();
    }
    return swiftRequiresEscaping_$;
  }

  public boolean getSwiftRequiresEscaping() {

    if ( ! swiftRequiresEscaping_isSet_ ) {
      return false;
    }
    return swiftRequiresEscaping_;
  }

  private boolean swiftRequiresEscaping_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftRequiresEscaping(Object value) {

    boolean hasOldValue = hasPropertySet("swiftRequiresEscaping");
    Object oldValue = hasOldValue ?
      getSwiftRequiresEscaping() :
      null;
    boolean castedValue = swiftRequiresEscaping_adapt(oldValue, value, hasOldValue);
    
    swiftRequiresEscaping_isSet_ = true;
    swiftRequiresEscaping_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftRequiresEscaping", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftRequiresEscaping$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_REQUIRES_ESCAPING() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftRequiresEscaping")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftOptional$() {

    if ( swiftOptional_$ == null ) {
      swiftOptional_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_OPTIONAL)
        .build();
    }
    return swiftOptional_$;
  }

  public boolean getSwiftOptional() {

    if ( ! swiftOptional_isSet_ ) {
      return false;
    }
    return swiftOptional_;
  }

  private boolean swiftOptional_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftOptional(Object value) {

    boolean hasOldValue = hasPropertySet("swiftOptional");
    Object oldValue = hasOldValue ?
      getSwiftOptional() :
      null;
    boolean castedValue = swiftOptional_adapt(oldValue, value, hasOldValue);
    
    swiftOptional_isSet_ = true;
    swiftOptional_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftOptional", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftOptional$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_OPTIONAL() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftOptional")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftFactory$() {

    if ( swiftFactory_$ == null ) {
      swiftFactory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_FACTORY)
        .build();
    }
    return swiftFactory_$;
  }

  public String getSwiftFactory() {

    if ( ! swiftFactory_isSet_ ) {
      return "";
    }
    return swiftFactory_;
  }

  private String swiftFactory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftFactory(Object value) {

    boolean hasOldValue = hasPropertySet("swiftFactory");
    Object oldValue = hasOldValue ?
      getSwiftFactory() :
      null;
    String castedValue = swiftFactory_adapt(oldValue, value, hasOldValue);
    
    swiftFactory_isSet_ = true;
    swiftFactory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftFactory", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftFactory$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_FACTORY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftFactory")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftFactoryName$() {

    if ( swiftFactoryName_$ == null ) {
      swiftFactoryName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_FACTORY_NAME)
        .build();
    }
    return swiftFactoryName_$;
  }

  public String getSwiftFactoryName() {

    if ( ! swiftFactoryName_isSet_ ) {
      return "";
    }
    return swiftFactoryName_;
  }

  private String swiftFactoryName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftFactoryName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftFactoryName");
    Object oldValue = hasOldValue ?
      getSwiftFactoryName() :
      null;
    String castedValue = swiftFactoryName_adapt(oldValue, value, hasOldValue);
    
    swiftFactoryName_isSet_ = true;
    swiftFactoryName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftFactoryName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftFactoryName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_FACTORY_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftFactoryName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftValue$() {

    if ( swiftValue_$ == null ) {
      swiftValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VALUE)
        .build();
    }
    return swiftValue_$;
  }

  public String getSwiftValue() {

    if ( ! swiftValue_isSet_ ) {
      return "";
    }
    return swiftValue_;
  }

  private String swiftValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftValue(Object value) {

    boolean hasOldValue = hasPropertySet("swiftValue");
    Object oldValue = hasOldValue ?
      getSwiftValue() :
      null;
    String castedValue = swiftValue_adapt(oldValue, value, hasOldValue);
    
    swiftValue_isSet_ = true;
    swiftValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftValue", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftValue")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftGetter$() {

    if ( swiftGetter_$ == null ) {
      swiftGetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_GETTER)
        .build();
    }
    return swiftGetter_$;
  }

  public String getSwiftGetter() {

    if ( ! swiftGetter_isSet_ ) {
      return "";
    }
    return swiftGetter_;
  }

  private String swiftGetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftGetter(Object value) {

    boolean hasOldValue = hasPropertySet("swiftGetter");
    Object oldValue = hasOldValue ?
      getSwiftGetter() :
      null;
    String castedValue = swiftGetter_adapt(oldValue, value, hasOldValue);
    
    swiftGetter_isSet_ = true;
    swiftGetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftGetter", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftGetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_GETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftGetter")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftSetter$() {

    if ( swiftSetter_$ == null ) {
      swiftSetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SETTER)
        .build();
    }
    return swiftSetter_$;
  }

  public String getSwiftSetter() {

    if ( ! swiftSetter_isSet_ ) {
      return "";
    }
    return swiftSetter_;
  }

  private String swiftSetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSetter(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSetter");
    Object oldValue = hasOldValue ?
      getSwiftSetter() :
      null;
    String castedValue = swiftSetter_adapt(oldValue, value, hasOldValue);
    
    swiftSetter_isSet_ = true;
    swiftSetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSetter", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSetter")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftPreSet$() {

    if ( swiftPreSet_$ == null ) {
      swiftPreSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_PRE_SET)
        .build();
    }
    return swiftPreSet_$;
  }

  public String getSwiftPreSet() {

    if ( ! swiftPreSet_isSet_ ) {
      return "";
    }
    return swiftPreSet_;
  }

  private String swiftPreSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPreSet(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPreSet");
    Object oldValue = hasOldValue ?
      getSwiftPreSet() :
      null;
    String castedValue = swiftPreSet_adapt(oldValue, value, hasOldValue);
    
    swiftPreSet_isSet_ = true;
    swiftPreSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPreSet", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPreSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_PRE_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPreSet")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftPreSetFuncName$() {

    if ( swiftPreSetFuncName_$ == null ) {
      swiftPreSetFuncName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_PRE_SET_FUNC_NAME)
        .build();
    }
    return swiftPreSetFuncName_$;
  }

  public String getSwiftPreSetFuncName() {

    if ( ! swiftPreSetFuncName_isSet_ ) {
      return "";
    }
    return swiftPreSetFuncName_;
  }

  private String swiftPreSetFuncName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPreSetFuncName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPreSetFuncName");
    Object oldValue = hasOldValue ?
      getSwiftPreSetFuncName() :
      null;
    String castedValue = swiftPreSetFuncName_adapt(oldValue, value, hasOldValue);
    
    swiftPreSetFuncName_isSet_ = true;
    swiftPreSetFuncName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPreSetFuncName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPreSetFuncName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_PRE_SET_FUNC_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPreSetFuncName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftPostSet$() {

    if ( swiftPostSet_$ == null ) {
      swiftPostSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_POST_SET)
        .build();
    }
    return swiftPostSet_$;
  }

  public String getSwiftPostSet() {

    if ( ! swiftPostSet_isSet_ ) {
      return "";
    }
    return swiftPostSet_;
  }

  private String swiftPostSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPostSet(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPostSet");
    Object oldValue = hasOldValue ?
      getSwiftPostSet() :
      null;
    String castedValue = swiftPostSet_adapt(oldValue, value, hasOldValue);
    
    swiftPostSet_isSet_ = true;
    swiftPostSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPostSet", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPostSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_POST_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPostSet")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftPostSetFuncName$() {

    if ( swiftPostSetFuncName_$ == null ) {
      swiftPostSetFuncName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_POST_SET_FUNC_NAME)
        .build();
    }
    return swiftPostSetFuncName_$;
  }

  public String getSwiftPostSetFuncName() {

    if ( ! swiftPostSetFuncName_isSet_ ) {
      return "";
    }
    return swiftPostSetFuncName_;
  }

  private String swiftPostSetFuncName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPostSetFuncName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPostSetFuncName");
    Object oldValue = hasOldValue ?
      getSwiftPostSetFuncName() :
      null;
    String castedValue = swiftPostSetFuncName_adapt(oldValue, value, hasOldValue);
    
    swiftPostSetFuncName_isSet_ = true;
    swiftPostSetFuncName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPostSetFuncName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPostSetFuncName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_POST_SET_FUNC_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPostSetFuncName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftExpressionArgs$() {

    if ( swiftExpressionArgs_$ == null ) {
      swiftExpressionArgs_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_EXPRESSION_ARGS)
        .build();
    }
    return swiftExpressionArgs_$;
  }

  protected String[] swiftExpressionArgs_factory_() {

    return new String[0];
  }

  public String[] getSwiftExpressionArgs() {

    if ( ! swiftExpressionArgs_isSet_ ) {
      setProperty("swiftExpressionArgs", swiftExpressionArgs_factory_());
    }
    return swiftExpressionArgs_;
  }

  private String[] swiftExpressionArgs_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setSwiftExpressionArgs(Object value) {

    boolean hasOldValue = hasPropertySet("swiftExpressionArgs");
    Object oldValue = hasOldValue ?
      getSwiftExpressionArgs() :
      null;
    String[] castedValue = swiftExpressionArgs_adapt(oldValue, value, hasOldValue);
    
    swiftExpressionArgs_isSet_ = true;
    swiftExpressionArgs_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftExpressionArgs", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftExpressionArgs$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_SWIFT_EXPRESSION_ARGS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("swiftExpressionArgs")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftExpression$() {

    if ( swiftExpression_$ == null ) {
      swiftExpression_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_EXPRESSION)
        .build();
    }
    return swiftExpression_$;
  }

  public String getSwiftExpression() {

    if ( ! swiftExpression_isSet_ ) {
      return "";
    }
    return swiftExpression_;
  }

  private String swiftExpression_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftExpression(Object value) {

    boolean hasOldValue = hasPropertySet("swiftExpression");
    Object oldValue = hasOldValue ?
      getSwiftExpression() :
      null;
    String castedValue = swiftExpression_adapt(oldValue, value, hasOldValue);
    
    swiftExpression_isSet_ = true;
    swiftExpression_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftExpression", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftExpression$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_EXPRESSION() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftExpression")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftExpressionSubscriptionName$() {

    if ( swiftExpressionSubscriptionName_$ == null ) {
      swiftExpressionSubscriptionName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_EXPRESSION_SUBSCRIPTION_NAME)
        .build();
    }
    return swiftExpressionSubscriptionName_$;
  }

  public String getSwiftExpressionSubscriptionName() {

    if ( ! swiftExpressionSubscriptionName_isSet_ ) {
      return "";
    }
    return swiftExpressionSubscriptionName_;
  }

  private String swiftExpressionSubscriptionName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftExpressionSubscriptionName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftExpressionSubscriptionName");
    Object oldValue = hasOldValue ?
      getSwiftExpressionSubscriptionName() :
      null;
    String castedValue = swiftExpressionSubscriptionName_adapt(oldValue, value, hasOldValue);
    
    swiftExpressionSubscriptionName_isSet_ = true;
    swiftExpressionSubscriptionName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftExpressionSubscriptionName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftExpressionSubscriptionName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_EXPRESSION_SUBSCRIPTION_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftExpressionSubscriptionName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftAdapt$() {

    if ( swiftAdapt_$ == null ) {
      swiftAdapt_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_ADAPT)
        .build();
    }
    return swiftAdapt_$;
  }

  public String getSwiftAdapt() {

    if ( ! swiftAdapt_isSet_ ) {
      return "";
    }
    return swiftAdapt_;
  }

  private String swiftAdapt_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftAdapt(Object value) {

    boolean hasOldValue = hasPropertySet("swiftAdapt");
    Object oldValue = hasOldValue ?
      getSwiftAdapt() :
      null;
    String castedValue = swiftAdapt_adapt(oldValue, value, hasOldValue);
    
    swiftAdapt_isSet_ = true;
    swiftAdapt_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftAdapt", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftAdapt$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_ADAPT() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftAdapt")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftAdaptFuncName$() {

    if ( swiftAdaptFuncName_$ == null ) {
      swiftAdaptFuncName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_ADAPT_FUNC_NAME)
        .build();
    }
    return swiftAdaptFuncName_$;
  }

  public String getSwiftAdaptFuncName() {

    if ( ! swiftAdaptFuncName_isSet_ ) {
      return "";
    }
    return swiftAdaptFuncName_;
  }

  private String swiftAdaptFuncName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftAdaptFuncName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftAdaptFuncName");
    Object oldValue = hasOldValue ?
      getSwiftAdaptFuncName() :
      null;
    String castedValue = swiftAdaptFuncName_adapt(oldValue, value, hasOldValue);
    
    swiftAdaptFuncName_isSet_ = true;
    swiftAdaptFuncName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftAdaptFuncName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftAdaptFuncName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_ADAPT_FUNC_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftAdaptFuncName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftPrivateAxiomName$() {

    if ( swiftPrivateAxiomName_$ == null ) {
      swiftPrivateAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_PRIVATE_AXIOM_NAME)
        .build();
    }
    return swiftPrivateAxiomName_$;
  }

  public String getSwiftPrivateAxiomName() {

    if ( ! swiftPrivateAxiomName_isSet_ ) {
      return "";
    }
    return swiftPrivateAxiomName_;
  }

  private String swiftPrivateAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPrivateAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPrivateAxiomName");
    Object oldValue = hasOldValue ?
      getSwiftPrivateAxiomName() :
      null;
    String castedValue = swiftPrivateAxiomName_adapt(oldValue, value, hasOldValue);
    
    swiftPrivateAxiomName_isSet_ = true;
    swiftPrivateAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPrivateAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPrivateAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_PRIVATE_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPrivateAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftAxiomName$() {

    if ( swiftAxiomName_$ == null ) {
      swiftAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_AXIOM_NAME)
        .build();
    }
    return swiftAxiomName_$;
  }

  public String getSwiftAxiomName() {

    if ( ! swiftAxiomName_isSet_ ) {
      return "";
    }
    return swiftAxiomName_;
  }

  private String swiftAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftAxiomName");
    Object oldValue = hasOldValue ?
      getSwiftAxiomName() :
      null;
    String castedValue = swiftAxiomName_adapt(oldValue, value, hasOldValue);
    
    swiftAxiomName_isSet_ = true;
    swiftAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftToJSON$() {

    if ( swiftToJSON_$ == null ) {
      swiftToJSON_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_TO_JSON)
        .build();
    }
    return swiftToJSON_$;
  }

  public String getSwiftToJSON() {

    if ( ! swiftToJSON_isSet_ ) {
      return "outputter?.output(out, value)";
    }
    return swiftToJSON_;
  }

  private String swiftToJSON_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftToJSON(Object value) {

    boolean hasOldValue = hasPropertySet("swiftToJSON");
    Object oldValue = hasOldValue ?
      getSwiftToJSON() :
      null;
    String castedValue = swiftToJSON_adapt(oldValue, value, hasOldValue);
    
    swiftToJSON_isSet_ = true;
    swiftToJSON_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftToJSON", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftToJSON$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_TO_JSON() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("outputter?.output(out, value)")
      .setName("swiftToJSON")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftSupport$() {

    if ( swiftSupport_$ == null ) {
      swiftSupport_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SUPPORT)
        .build();
    }
    return swiftSupport_$;
  }

  public boolean getSwiftSupport() {

    if ( ! swiftSupport_isSet_ ) {
      return true;
    }
    return swiftSupport_;
  }

  private boolean swiftSupport_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftSupport(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSupport");
    Object oldValue = hasOldValue ?
      getSwiftSupport() :
      null;
    boolean castedValue = swiftSupport_adapt(oldValue, value, hasOldValue);
    
    swiftSupport_isSet_ = true;
    swiftSupport_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSupport", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSupport$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_SUPPORT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("swiftSupport")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftJsonParser$() {

    if ( swiftJsonParser_$ == null ) {
      swiftJsonParser_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_JSON_PARSER)
        .build();
    }
    return swiftJsonParser_$;
  }

  public String getSwiftJsonParser() {

    if ( ! swiftJsonParser_isSet_ ) {
      return "";
    }
    return swiftJsonParser_;
  }

  private String swiftJsonParser_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftJsonParser(Object value) {

    boolean hasOldValue = hasPropertySet("swiftJsonParser");
    Object oldValue = hasOldValue ?
      getSwiftJsonParser() :
      null;
    String castedValue = swiftJsonParser_adapt(oldValue, value, hasOldValue);
    
    swiftJsonParser_isSet_ = true;
    swiftJsonParser_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftJsonParser", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftJsonParser$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_JSON_PARSER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftJsonParser")
      .setFactory(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSwiftWeak$() {

    if ( swiftWeak_$ == null ) {
      swiftWeak_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_WEAK)
        .build();
    }
    return swiftWeak_$;
  }

  public boolean getSwiftWeak() {

    if ( ! swiftWeak_isSet_ ) {
      return false;
    }
    return swiftWeak_;
  }

  private boolean swiftWeak_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftWeak(Object value) {

    boolean hasOldValue = hasPropertySet("swiftWeak");
    Object oldValue = hasOldValue ?
      getSwiftWeak() :
      null;
    boolean castedValue = swiftWeak_adapt(oldValue, value, hasOldValue);
    
    swiftWeak_isSet_ = true;
    swiftWeak_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftWeak", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftWeak$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_WEAK() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("swiftWeak")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getGenerateJava$() {

    if ( generateJava_$ == null ) {
      generateJava_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GENERATE_JAVA)
        .build();
    }
    return generateJava_$;
  }

  public boolean getGenerateJava() {

    if ( ! generateJava_isSet_ ) {
      return false;
    }
    return generateJava_;
  }

  private boolean generateJava_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setGenerateJava(Object value) {

    boolean hasOldValue = hasPropertySet("generateJava");
    Object oldValue = hasOldValue ?
      getGenerateJava() :
      null;
    boolean castedValue = generateJava_adapt(oldValue, value, hasOldValue);
    
    generateJava_isSet_ = true;
    generateJava_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "generateJava", null };
    if ( hasListeners(args) ) {
      args[2] = getGenerateJava$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_GENERATE_JAVA() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("generateJava")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaJSONParser$() {

    if ( javaJSONParser_$ == null ) {
      javaJSONParser_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_JSONPARSER)
        .build();
    }
    return javaJSONParser_$;
  }

  public String getJavaJSONParser() {

    if ( ! javaJSONParser_isSet_ ) {
      return "foam.lib.json.AnyParser.instance()";
    }
    return javaJSONParser_;
  }

  private String javaJSONParser_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaJSONParser(Object value) {

    boolean hasOldValue = hasPropertySet("javaJSONParser");
    Object oldValue = hasOldValue ?
      getJavaJSONParser() :
      null;
    String castedValue = javaJSONParser_adapt(oldValue, value, hasOldValue);
    
    javaJSONParser_isSet_ = true;
    javaJSONParser_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaJSONParser", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaJSONParser$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_JSONPARSER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("foam.lib.json.AnyParser.instance()")
      .setName("javaJSONParser")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaQueryParser$() {

    if ( javaQueryParser_$ == null ) {
      javaQueryParser_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_QUERY_PARSER)
        .build();
    }
    return javaQueryParser_$;
  }

  public String getJavaQueryParser() {

    if ( ! javaQueryParser_isSet_ ) {
      return "";
    }
    return javaQueryParser_;
  }

  private String javaQueryParser_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaQueryParser(Object value) {

    boolean hasOldValue = hasPropertySet("javaQueryParser");
    Object oldValue = hasOldValue ?
      getJavaQueryParser() :
      null;
    String castedValue = javaQueryParser_adapt(oldValue, value, hasOldValue);
    
    javaQueryParser_isSet_ = true;
    javaQueryParser_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaQueryParser", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaQueryParser$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_QUERY_PARSER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaQueryParser")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaCSVParser$() {

    if ( javaCSVParser_$ == null ) {
      javaCSVParser_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_CSVPARSER)
        .build();
    }
    return javaCSVParser_$;
  }

  public String getJavaCSVParser() {

    if ( ! javaCSVParser_isSet_ ) {
      return "";
    }
    return javaCSVParser_;
  }

  private String javaCSVParser_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaCSVParser(Object value) {

    boolean hasOldValue = hasPropertySet("javaCSVParser");
    Object oldValue = hasOldValue ?
      getJavaCSVParser() :
      null;
    String castedValue = javaCSVParser_adapt(oldValue, value, hasOldValue);
    
    javaCSVParser_isSet_ = true;
    javaCSVParser_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaCSVParser", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaCSVParser$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_CSVPARSER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaCSVParser")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaInfoType$() {

    if ( javaInfoType_$ == null ) {
      javaInfoType_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_INFO_TYPE)
        .build();
    }
    return javaInfoType_$;
  }

  public String getJavaInfoType() {

    if ( ! javaInfoType_isSet_ ) {
      return "";
    }
    return javaInfoType_;
  }

  private String javaInfoType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaInfoType(Object value) {

    boolean hasOldValue = hasPropertySet("javaInfoType");
    Object oldValue = hasOldValue ?
      getJavaInfoType() :
      null;
    String castedValue = javaInfoType_adapt(oldValue, value, hasOldValue);
    
    javaInfoType_isSet_ = true;
    javaInfoType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaInfoType", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaInfoType$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_INFO_TYPE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaInfoType")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaFactory$() {

    if ( javaFactory_$ == null ) {
      javaFactory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_FACTORY)
        .build();
    }
    return javaFactory_$;
  }

  public String getJavaFactory() {

    if ( ! javaFactory_isSet_ ) {
      return "";
    }
    return javaFactory_;
  }

  private String javaFactory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaFactory(Object value) {

    boolean hasOldValue = hasPropertySet("javaFactory");
    Object oldValue = hasOldValue ?
      getJavaFactory() :
      null;
    String castedValue = javaFactory_adapt(oldValue, value, hasOldValue);
    
    javaFactory_isSet_ = true;
    javaFactory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaFactory", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaFactory$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_FACTORY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaFactory")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaGetter$() {

    if ( javaGetter_$ == null ) {
      javaGetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_GETTER)
        .build();
    }
    return javaGetter_$;
  }

  public String getJavaGetter() {

    if ( ! javaGetter_isSet_ ) {
      return "";
    }
    return javaGetter_;
  }

  private String javaGetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaGetter(Object value) {

    boolean hasOldValue = hasPropertySet("javaGetter");
    Object oldValue = hasOldValue ?
      getJavaGetter() :
      null;
    String castedValue = javaGetter_adapt(oldValue, value, hasOldValue);
    
    javaGetter_isSet_ = true;
    javaGetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaGetter", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaGetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_GETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaGetter")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaSetter$() {

    if ( javaSetter_$ == null ) {
      javaSetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_SETTER)
        .build();
    }
    return javaSetter_$;
  }

  public String getJavaSetter() {

    if ( ! javaSetter_isSet_ ) {
      return "";
    }
    return javaSetter_;
  }

  private String javaSetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaSetter(Object value) {

    boolean hasOldValue = hasPropertySet("javaSetter");
    Object oldValue = hasOldValue ?
      getJavaSetter() :
      null;
    String castedValue = javaSetter_adapt(oldValue, value, hasOldValue);
    
    javaSetter_isSet_ = true;
    javaSetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaSetter", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaSetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_SETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaSetter")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaPreSet$() {

    if ( javaPreSet_$ == null ) {
      javaPreSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_PRE_SET)
        .build();
    }
    return javaPreSet_$;
  }

  public String getJavaPreSet() {

    if ( ! javaPreSet_isSet_ ) {
      return "";
    }
    return javaPreSet_;
  }

  private String javaPreSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaPreSet(Object value) {

    boolean hasOldValue = hasPropertySet("javaPreSet");
    Object oldValue = hasOldValue ?
      getJavaPreSet() :
      null;
    String castedValue = javaPreSet_adapt(oldValue, value, hasOldValue);
    
    javaPreSet_isSet_ = true;
    javaPreSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaPreSet", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaPreSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_PRE_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaPreSet")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaPostSet$() {

    if ( javaPostSet_$ == null ) {
      javaPostSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_POST_SET)
        .build();
    }
    return javaPostSet_$;
  }

  public String getJavaPostSet() {

    if ( ! javaPostSet_isSet_ ) {
      return "";
    }
    return javaPostSet_;
  }

  private String javaPostSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaPostSet(Object value) {

    boolean hasOldValue = hasPropertySet("javaPostSet");
    Object oldValue = hasOldValue ?
      getJavaPostSet() :
      null;
    String castedValue = javaPostSet_adapt(oldValue, value, hasOldValue);
    
    javaPostSet_isSet_ = true;
    javaPostSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaPostSet", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaPostSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_POST_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaPostSet")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAliases$() {

    if ( aliases_$ == null ) {
      aliases_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ALIASES)
        .build();
    }
    return aliases_$;
  }

  protected String[] aliases_factory_() {

    return new String[0];
  }

  public String[] getAliases() {

    if ( ! aliases_isSet_ ) {
      setProperty("aliases", aliases_factory_());
    }
    return aliases_;
  }

  private String[] aliases_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setAliases(Object value) {

    boolean hasOldValue = hasPropertySet("aliases");
    Object oldValue = hasOldValue ?
      getAliases() :
      null;
    String[] castedValue = aliases_adapt(oldValue, value, hasOldValue);
    
    aliases_isSet_ = true;
    aliases_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "aliases", null };
    if ( hasListeners(args) ) {
      args[2] = getAliases$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_ALIASES() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("aliases")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaCloneProperty$() {

    if ( javaCloneProperty_$ == null ) {
      javaCloneProperty_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_CLONE_PROPERTY)
        .build();
    }
    return javaCloneProperty_$;
  }

  public String getJavaCloneProperty() {

    if ( ! javaCloneProperty_isSet_ ) {
      return null;
    }
    return javaCloneProperty_;
  }

  private String javaCloneProperty_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaCloneProperty(Object value) {

    boolean hasOldValue = hasPropertySet("javaCloneProperty");
    Object oldValue = hasOldValue ?
      getJavaCloneProperty() :
      null;
    String castedValue = javaCloneProperty_adapt(oldValue, value, hasOldValue);
    
    javaCloneProperty_isSet_ = true;
    javaCloneProperty_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaCloneProperty", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaCloneProperty$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_CLONE_PROPERTY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("javaCloneProperty")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaDiffProperty$() {

    if ( javaDiffProperty_$ == null ) {
      javaDiffProperty_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_DIFF_PROPERTY)
        .build();
    }
    return javaDiffProperty_$;
  }

  public String getJavaDiffProperty() {

    if ( ! javaDiffProperty_isSet_ ) {
      return null;
    }
    return javaDiffProperty_;
  }

  private String javaDiffProperty_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaDiffProperty(Object value) {

    boolean hasOldValue = hasPropertySet("javaDiffProperty");
    Object oldValue = hasOldValue ?
      getJavaDiffProperty() :
      null;
    String castedValue = javaDiffProperty_adapt(oldValue, value, hasOldValue);
    
    javaDiffProperty_isSet_ = true;
    javaDiffProperty_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaDiffProperty", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaDiffProperty$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_DIFF_PROPERTY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("javaDiffProperty")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaCompare$() {

    if ( javaCompare_$ == null ) {
      javaCompare_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_COMPARE)
        .build();
    }
    return javaCompare_$;
  }

  public String getJavaCompare() {

    if ( ! javaCompare_isSet_ ) {
      return "return foam.util.SafetyUtil.compare(get_(o1), get_(o2));";
    }
    return javaCompare_;
  }

  private String javaCompare_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaCompare(Object value) {

    boolean hasOldValue = hasPropertySet("javaCompare");
    Object oldValue = hasOldValue ?
      getJavaCompare() :
      null;
    String castedValue = javaCompare_adapt(oldValue, value, hasOldValue);
    
    javaCompare_isSet_ = true;
    javaCompare_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaCompare", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaCompare$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_COMPARE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("return foam.util.SafetyUtil.compare(get_(o1), get_(o2));")
      .setName("javaCompare")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaComparePropertyToObject$() {

    if ( javaComparePropertyToObject_$ == null ) {
      javaComparePropertyToObject_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_COMPARE_PROPERTY_TO_OBJECT)
        .build();
    }
    return javaComparePropertyToObject_$;
  }

  public String getJavaComparePropertyToObject() {

    if ( ! javaComparePropertyToObject_isSet_ ) {
      return "return foam.util.SafetyUtil.compare(cast(key), get_(o));";
    }
    return javaComparePropertyToObject_;
  }

  private String javaComparePropertyToObject_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaComparePropertyToObject(Object value) {

    boolean hasOldValue = hasPropertySet("javaComparePropertyToObject");
    Object oldValue = hasOldValue ?
      getJavaComparePropertyToObject() :
      null;
    String castedValue = javaComparePropertyToObject_adapt(oldValue, value, hasOldValue);
    
    javaComparePropertyToObject_isSet_ = true;
    javaComparePropertyToObject_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaComparePropertyToObject", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaComparePropertyToObject$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_COMPARE_PROPERTY_TO_OBJECT() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("return foam.util.SafetyUtil.compare(cast(key), get_(o));")
      .setName("javaComparePropertyToObject")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaComparePropertyToValue$() {

    if ( javaComparePropertyToValue_$ == null ) {
      javaComparePropertyToValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_COMPARE_PROPERTY_TO_VALUE)
        .build();
    }
    return javaComparePropertyToValue_$;
  }

  public String getJavaComparePropertyToValue() {

    if ( ! javaComparePropertyToValue_isSet_ ) {
      return "return foam.util.SafetyUtil.compare(cast(key), cast(value));";
    }
    return javaComparePropertyToValue_;
  }

  private String javaComparePropertyToValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaComparePropertyToValue(Object value) {

    boolean hasOldValue = hasPropertySet("javaComparePropertyToValue");
    Object oldValue = hasOldValue ?
      getJavaComparePropertyToValue() :
      null;
    String castedValue = javaComparePropertyToValue_adapt(oldValue, value, hasOldValue);
    
    javaComparePropertyToValue_isSet_ = true;
    javaComparePropertyToValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaComparePropertyToValue", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaComparePropertyToValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_COMPARE_PROPERTY_TO_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("return foam.util.SafetyUtil.compare(cast(key), cast(value));")
      .setName("javaComparePropertyToValue")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaAssertValue$() {

    if ( javaAssertValue_$ == null ) {
      javaAssertValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_ASSERT_VALUE)
        .build();
    }
    return javaAssertValue_$;
  }

  public String getJavaAssertValue() {

    if ( ! javaAssertValue_isSet_ ) {
      return "";
    }
    return javaAssertValue_;
  }

  private String javaAssertValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaAssertValue(Object value) {

    boolean hasOldValue = hasPropertySet("javaAssertValue");
    Object oldValue = hasOldValue ?
      getJavaAssertValue() :
      null;
    String castedValue = javaAssertValue_adapt(oldValue, value, hasOldValue);
    
    javaAssertValue_isSet_ = true;
    javaAssertValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaAssertValue", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaAssertValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_ASSERT_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaAssertValue")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaValue$() {

    if ( javaValue_$ == null ) {
      javaValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_VALUE)
        .build();
    }
    return javaValue_$;
  }

  public String getJavaValue() {

    if ( ! javaValue_isSet_ ) {
      return "";
    }
    return javaValue_;
  }

  private String javaValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaValue(Object value) {

    boolean hasOldValue = hasPropertySet("javaValue");
    Object oldValue = hasOldValue ?
      getJavaValue() :
      null;
    String castedValue = javaValue_adapt(oldValue, value, hasOldValue);
    
    javaValue_isSet_ = true;
    javaValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaValue", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaValue")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getIncludeInDigest$() {

    if ( includeInDigest_$ == null ) {
      includeInDigest_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(INCLUDE_IN_DIGEST)
        .build();
    }
    return includeInDigest_$;
  }

  public boolean getIncludeInDigest() {

    if ( ! includeInDigest_isSet_ ) {
      return true;
    }
    return includeInDigest_;
  }

  private boolean includeInDigest_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setIncludeInDigest(Object value) {

    boolean hasOldValue = hasPropertySet("includeInDigest");
    Object oldValue = hasOldValue ?
      getIncludeInDigest() :
      null;
    boolean castedValue = includeInDigest_adapt(oldValue, value, hasOldValue);
    
    includeInDigest_isSet_ = true;
    includeInDigest_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "includeInDigest", null };
    if ( hasListeners(args) ) {
      args[2] = getIncludeInDigest$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_INCLUDE_IN_DIGEST() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("includeInDigest")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getIncludeInSignature$() {

    if ( includeInSignature_$ == null ) {
      includeInSignature_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(INCLUDE_IN_SIGNATURE)
        .build();
    }
    return includeInSignature_$;
  }

  public boolean getIncludeInSignature() {

    if ( ! includeInSignature_isSet_ ) {
      return true;
    }
    return includeInSignature_;
  }

  private boolean includeInSignature_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setIncludeInSignature(Object value) {

    boolean hasOldValue = hasPropertySet("includeInSignature");
    Object oldValue = hasOldValue ?
      getIncludeInSignature() :
      null;
    boolean castedValue = includeInSignature_adapt(oldValue, value, hasOldValue);
    
    includeInSignature_isSet_ = true;
    includeInSignature_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "includeInSignature", null };
    if ( hasListeners(args) ) {
      args[2] = getIncludeInSignature$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_INCLUDE_IN_SIGNATURE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("includeInSignature")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaValidateObj$() {

    if ( javaValidateObj_$ == null ) {
      javaValidateObj_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_VALIDATE_OBJ)
        .build();
    }
    return javaValidateObj_$;
  }

  public String getJavaValidateObj() {

    if ( ! javaValidateObj_isSet_ ) {
      return "";
    }
    return javaValidateObj_;
  }

  private String javaValidateObj_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaValidateObj(Object value) {

    boolean hasOldValue = hasPropertySet("javaValidateObj");
    Object oldValue = hasOldValue ?
      getJavaValidateObj() :
      null;
    String castedValue = javaValidateObj_adapt(oldValue, value, hasOldValue);
    
    javaValidateObj_isSet_ = true;
    javaValidateObj_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaValidateObj", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaValidateObj$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_VALIDATE_OBJ() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaValidateObj")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaFromCSVLabelMapping$() {

    if ( javaFromCSVLabelMapping_$ == null ) {
      javaFromCSVLabelMapping_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_FROM_CSVLABEL_MAPPING)
        .build();
    }
    return javaFromCSVLabelMapping_$;
  }

  public String getJavaFromCSVLabelMapping() {

    if ( ! javaFromCSVLabelMapping_isSet_ ) {
      return "\n        foam.core.PropertyInfo prop = this;\n        map.put(getName(), new foam.lib.csv.FromCSVSetter() {\n          public void set(foam.core.FObject obj, String str) {\n            prop.set(obj, fromString(str));\n          }\n        });\n      ";
    }
    return javaFromCSVLabelMapping_;
  }

  private String javaFromCSVLabelMapping_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaFromCSVLabelMapping(Object value) {

    boolean hasOldValue = hasPropertySet("javaFromCSVLabelMapping");
    Object oldValue = hasOldValue ?
      getJavaFromCSVLabelMapping() :
      null;
    String castedValue = javaFromCSVLabelMapping_adapt(oldValue, value, hasOldValue);
    
    javaFromCSVLabelMapping_isSet_ = true;
    javaFromCSVLabelMapping_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaFromCSVLabelMapping", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaFromCSVLabelMapping$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_FROM_CSVLABEL_MAPPING() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("\n        foam.core.PropertyInfo prop = this;\n        map.put(getName(), new foam.lib.csv.FromCSVSetter() {\n          public void set(foam.core.FObject obj, String str) {\n            prop.set(obj, fromString(str));\n          }\n        });\n      ")
      .setName("javaFromCSVLabelMapping")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaToCSV$() {

    if ( javaToCSV_$ == null ) {
      javaToCSV_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_TO_CSV)
        .build();
    }
    return javaToCSV_$;
  }

  public String getJavaToCSV() {

    if ( ! javaToCSV_isSet_ ) {
      return "outputter.outputValue(obj != null ? get(obj) : null);";
    }
    return javaToCSV_;
  }

  private String javaToCSV_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaToCSV(Object value) {

    boolean hasOldValue = hasPropertySet("javaToCSV");
    Object oldValue = hasOldValue ?
      getJavaToCSV() :
      null;
    String castedValue = javaToCSV_adapt(oldValue, value, hasOldValue);
    
    javaToCSV_isSet_ = true;
    javaToCSV_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaToCSV", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaToCSV$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_TO_CSV() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("outputter.outputValue(obj != null ? get(obj) : null);")
      .setName("javaToCSV")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getJavaToCSVLabel$() {

    if ( javaToCSVLabel_$ == null ) {
      javaToCSVLabel_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_TO_CSVLABEL)
        .build();
    }
    return javaToCSVLabel_$;
  }

  public String getJavaToCSVLabel() {

    if ( ! javaToCSVLabel_isSet_ ) {
      return "outputter.outputValue(getName());";
    }
    return javaToCSVLabel_;
  }

  private String javaToCSVLabel_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaToCSVLabel(Object value) {

    boolean hasOldValue = hasPropertySet("javaToCSVLabel");
    Object oldValue = hasOldValue ?
      getJavaToCSVLabel() :
      null;
    String castedValue = javaToCSVLabel_adapt(oldValue, value, hasOldValue);
    
    javaToCSVLabel_isSet_ = true;
    javaToCSVLabel_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaToCSVLabel", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaToCSVLabel$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_TO_CSVLABEL() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("outputter.outputValue(getName());")
      .setName("javaToCSVLabel")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAttribute$() {

    if ( attribute_$ == null ) {
      attribute_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ATTRIBUTE)
        .build();
    }
    return attribute_$;
  }

  public Object getAttribute() {

    if ( ! attribute_isSet_ ) {
      return false;
    }
    return attribute_;
  }

  private Object attribute_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAttribute(Object value) {

    boolean hasOldValue = hasPropertySet("attribute");
    Object oldValue = hasOldValue ?
      getAttribute() :
      null;
    Object castedValue = attribute_adapt(oldValue, value, hasOldValue);
    
    attribute_isSet_ = true;
    attribute_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "attribute", null };
    if ( hasListeners(args) ) {
      args[2] = getAttribute$();
      pub(args);
    }
  }

  private static foam.core.Property init_ATTRIBUTE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("attribute")
      .setValue(false)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getPlaceholder$() {

    if ( placeholder_$ == null ) {
      placeholder_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PLACEHOLDER)
        .build();
    }
    return placeholder_$;
  }

  public String getPlaceholder() {

    if ( ! placeholder_isSet_ ) {
      return "";
    }
    return placeholder_;
  }

  private String placeholder_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setPlaceholder(Object value) {

    boolean hasOldValue = hasPropertySet("placeholder");
    Object oldValue = hasOldValue ?
      getPlaceholder() :
      null;
    String castedValue = placeholder_adapt(oldValue, value, hasOldValue);
    
    placeholder_isSet_ = true;
    placeholder_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "placeholder", null };
    if ( hasListeners(args) ) {
      args[2] = getPlaceholder$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_PLACEHOLDER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("placeholder")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getView$() {

    if ( view_$ == null ) {
      view_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VIEW)
        .build();
    }
    return view_$;
  }

  public Object getView() {

    if ( ! view_isSet_ ) {
      return
    new java.util.HashMap<String, Object>() {
    {
    put("class", "foam.u2.TextField");
    }
    }
    ;
    }
    return view_;
  }

  private Object view_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setView(Object value) {

    boolean hasOldValue = hasPropertySet("view");
    Object oldValue = hasOldValue ?
      getView() :
      null;
    Object castedValue = view_adapt(oldValue, value, hasOldValue);
    
    view_isSet_ = true;
    view_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "view", null };
    if ( hasListeners(args) ) {
      args[2] = getView$();
      pub(args);
    }
  }

  private static foam.u2.ViewSpec init_VIEW() {

    return foam.u2.ViewSpec.ViewSpecBuilder(null) // TODO give context
      .setName("view")
      .setValue(
    new java.util.HashMap<String, Object>() {
      {
      put("class", "foam.u2.TextField");
      }
    }
              )
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getVisibility$() {

    if ( visibility_$ == null ) {
      visibility_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VISIBILITY)
        .build();
    }
    return visibility_$;
  }

  public foam.u2.Visibility getVisibility() {

    if ( ! visibility_isSet_ ) {
      return foam.u2.Visibility.VisibilityBuilder(null) // TODO give context
    .setOrdinal(0)
    .setName("RW")
    .setLabel("Read-Write")
    .build();
    }
    return visibility_;
  }

  private foam.u2.Visibility visibility_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.u2.Visibility) newValue;
  }

  public void setVisibility(Object value) {

    boolean hasOldValue = hasPropertySet("visibility");
    Object oldValue = hasOldValue ?
      getVisibility() :
      null;
    foam.u2.Visibility castedValue = visibility_adapt(oldValue, value, hasOldValue);
    
    visibility_isSet_ = true;
    visibility_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "visibility", null };
    if ( hasListeners(args) ) {
      args[2] = getVisibility$();
      pub(args);
    }
  }

  private static foam.core.Enum init_VISIBILITY() {

    return foam.core.Enum.EnumBuilder(null) // TODO give context
      .setOf(foam.u2.Visibility.CLS_)
      .setType("foam.u2.Visibility")
      .setValue(foam.u2.Visibility.VisibilityBuilder(null) // TODO give context
      .setOrdinal(0)
      .setName("RW")
      .setLabel("Read-Write")
      .build())
      .setName("visibility")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getVisibilityExpression$() {

    if ( visibilityExpression_$ == null ) {
      visibilityExpression_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VISIBILITY_EXPRESSION)
        .build();
    }
    return visibilityExpression_$;
  }

  public foam.cross_platform.GenericFunction getVisibilityExpression() {

    if ( ! visibilityExpression_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return visibilityExpression_;
  }

  private foam.cross_platform.GenericFunction visibilityExpression_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setVisibilityExpression(Object value) {

    boolean hasOldValue = hasPropertySet("visibilityExpression");
    Object oldValue = hasOldValue ?
      getVisibilityExpression() :
      null;
    foam.cross_platform.GenericFunction castedValue = visibilityExpression_adapt(oldValue, value, hasOldValue);
    
    visibilityExpression_isSet_ = true;
    visibilityExpression_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "visibilityExpression", null };
    if ( hasListeners(args) ) {
      args[2] = getVisibilityExpression$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_VISIBILITY_EXPRESSION() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("visibilityExpression")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getValidationTextVisible$() {

    if ( validationTextVisible_$ == null ) {
      validationTextVisible_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALIDATION_TEXT_VISIBLE)
        .build();
    }
    return validationTextVisible_$;
  }

  public boolean getValidationTextVisible() {

    if ( ! validationTextVisible_isSet_ ) {
      return true;
    }
    return validationTextVisible_;
  }

  private boolean validationTextVisible_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setValidationTextVisible(Object value) {

    boolean hasOldValue = hasPropertySet("validationTextVisible");
    Object oldValue = hasOldValue ?
      getValidationTextVisible() :
      null;
    boolean castedValue = validationTextVisible_adapt(oldValue, value, hasOldValue);
    
    validationTextVisible_isSet_ = true;
    validationTextVisible_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "validationTextVisible", null };
    if ( hasListeners(args) ) {
      args[2] = getValidationTextVisible$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_VALIDATION_TEXT_VISIBLE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("validationTextVisible")
      .setDocumentation("If true, validation text will be displayed below the input when it's in an invalid state.")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getValidationStyleEnabled$() {

    if ( validationStyleEnabled_$ == null ) {
      validationStyleEnabled_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALIDATION_STYLE_ENABLED)
        .build();
    }
    return validationStyleEnabled_$;
  }

  public boolean getValidationStyleEnabled() {

    if ( ! validationStyleEnabled_isSet_ ) {
      return true;
    }
    return validationStyleEnabled_;
  }

  private boolean validationStyleEnabled_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setValidationStyleEnabled(Object value) {

    boolean hasOldValue = hasPropertySet("validationStyleEnabled");
    Object oldValue = hasOldValue ?
      getValidationStyleEnabled() :
      null;
    boolean castedValue = validationStyleEnabled_adapt(oldValue, value, hasOldValue);
    
    validationStyleEnabled_isSet_ = true;
    validationStyleEnabled_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "validationStyleEnabled", null };
    if ( hasListeners(args) ) {
      args[2] = getValidationStyleEnabled$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_VALIDATION_STYLE_ENABLED() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("validationStyleEnabled")
      .setDocumentation("If true, inputs will be styled when they are in an invalid state.")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getToCSV$() {

    if ( toCSV_$ == null ) {
      toCSV_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TO_CSV)
        .build();
    }
    return toCSV_$;
  }

  public foam.cross_platform.GenericFunction getToCSV() {

    if ( ! toCSV_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return toCSV_;
  }

  private foam.cross_platform.GenericFunction toCSV_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setToCSV(Object value) {

    boolean hasOldValue = hasPropertySet("toCSV");
    Object oldValue = hasOldValue ?
      getToCSV() :
      null;
    foam.cross_platform.GenericFunction castedValue = toCSV_adapt(oldValue, value, hasOldValue);
    
    toCSV_isSet_ = true;
    toCSV_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "toCSV", null };
    if ( hasListeners(args) ) {
      args[2] = getToCSV$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_TO_CSV() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("toCSV")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getToCSVLabel$() {

    if ( toCSVLabel_$ == null ) {
      toCSVLabel_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TO_CSVLABEL)
        .build();
    }
    return toCSVLabel_$;
  }

  public foam.cross_platform.GenericFunction getToCSVLabel() {

    if ( ! toCSVLabel_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return toCSVLabel_;
  }

  private foam.cross_platform.GenericFunction toCSVLabel_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setToCSVLabel(Object value) {

    boolean hasOldValue = hasPropertySet("toCSVLabel");
    Object oldValue = hasOldValue ?
      getToCSVLabel() :
      null;
    foam.cross_platform.GenericFunction castedValue = toCSVLabel_adapt(oldValue, value, hasOldValue);
    
    toCSVLabel_isSet_ = true;
    toCSVLabel_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "toCSVLabel", null };
    if ( hasListeners(args) ) {
      args[2] = getToCSVLabel$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_TO_CSVLABEL() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("toCSVLabel")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getColumnLabel$() {

    if ( columnLabel_$ == null ) {
      columnLabel_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(COLUMN_LABEL)
        .build();
    }
    return columnLabel_$;
  }

  public Object getColumnLabel() {

    if ( ! columnLabel_isSet_ ) {
      return null;
    }
    return columnLabel_;
  }

  private Object columnLabel_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setColumnLabel(Object value) {

    boolean hasOldValue = hasPropertySet("columnLabel");
    Object oldValue = hasOldValue ?
      getColumnLabel() :
      null;
    Object castedValue = columnLabel_adapt(oldValue, value, hasOldValue);
    
    columnLabel_isSet_ = true;
    columnLabel_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "columnLabel", null };
    if ( hasListeners(args) ) {
      args[2] = getColumnLabel$();
      pub(args);
    }
  }

  private static foam.core.Property init_COLUMN_LABEL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("columnLabel")
      .setFactory(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getTableCellView$() {

    if ( tableCellView_$ == null ) {
      tableCellView_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_CELL_VIEW)
        .build();
    }
    return tableCellView_$;
  }

  public Object getTableCellView() {

    if ( ! tableCellView_isSet_ ) {
      return null;
    }
    return tableCellView_;
  }

  private Object tableCellView_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setTableCellView(Object value) {

    boolean hasOldValue = hasPropertySet("tableCellView");
    Object oldValue = hasOldValue ?
      getTableCellView() :
      null;
    Object castedValue = tableCellView_adapt(oldValue, value, hasOldValue);
    
    tableCellView_isSet_ = true;
    tableCellView_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableCellView", null };
    if ( hasListeners(args) ) {
      args[2] = getTableCellView$();
      pub(args);
    }
  }

  private static foam.core.Property init_TABLE_CELL_VIEW() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("tableCellView")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getTableHeaderFormatter$() {

    if ( tableHeaderFormatter_$ == null ) {
      tableHeaderFormatter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_HEADER_FORMATTER)
        .build();
    }
    return tableHeaderFormatter_$;
  }

  public Object getTableHeaderFormatter() {

    if ( ! tableHeaderFormatter_isSet_ ) {
      return null;
    }
    return tableHeaderFormatter_;
  }

  private Object tableHeaderFormatter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setTableHeaderFormatter(Object value) {

    boolean hasOldValue = hasPropertySet("tableHeaderFormatter");
    Object oldValue = hasOldValue ?
      getTableHeaderFormatter() :
      null;
    Object castedValue = tableHeaderFormatter_adapt(oldValue, value, hasOldValue);
    
    tableHeaderFormatter_isSet_ = true;
    tableHeaderFormatter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableHeaderFormatter", null };
    if ( hasListeners(args) ) {
      args[2] = getTableHeaderFormatter$();
      pub(args);
    }
  }

  private static foam.core.Property init_TABLE_HEADER_FORMATTER() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("tableHeaderFormatter")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getTableCellFormatter$() {

    if ( tableCellFormatter_$ == null ) {
      tableCellFormatter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_CELL_FORMATTER)
        .build();
    }
    return tableCellFormatter_$;
  }

  public foam.u2.view.Formatter getTableCellFormatter() {

    if ( ! tableCellFormatter_isSet_ ) {
      return null;
    }
    return tableCellFormatter_;
  }

  private foam.u2.view.Formatter tableCellFormatter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.u2.view.Formatter) newValue;
  }

  public void setTableCellFormatter(Object value) {

    boolean hasOldValue = hasPropertySet("tableCellFormatter");
    Object oldValue = hasOldValue ?
      getTableCellFormatter() :
      null;
    foam.u2.view.Formatter castedValue = tableCellFormatter_adapt(oldValue, value, hasOldValue);
    
    tableCellFormatter_isSet_ = true;
    tableCellFormatter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableCellFormatter", null };
    if ( hasListeners(args) ) {
      args[2] = getTableCellFormatter$();
      pub(args);
    }
  }

  private static foam.u2.view.TableCellFormatter init_TABLE_CELL_FORMATTER() {

    return foam.u2.view.TableCellFormatter.TableCellFormatterBuilder(null) // TODO give context
      .setType("foam.u2.view.Formatter")
      .setName("tableCellFormatter")
      .setFactory(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getTableWidth$() {

    if ( tableWidth_$ == null ) {
      tableWidth_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_WIDTH)
        .build();
    }
    return tableWidth_$;
  }

  public int getTableWidth() {

    if ( ! tableWidth_isSet_ ) {
      return 0;
    }
    return tableWidth_;
  }

  private int tableWidth_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (int) newValue;
  }

  public void setTableWidth(Object value) {

    boolean hasOldValue = hasPropertySet("tableWidth");
    Object oldValue = hasOldValue ?
      getTableWidth() :
      null;
    int castedValue = tableWidth_adapt(oldValue, value, hasOldValue);
    
    tableWidth_isSet_ = true;
    tableWidth_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableWidth", null };
    if ( hasListeners(args) ) {
      args[2] = getTableWidth$();
      pub(args);
    }
  }

  private static foam.core.IntProperty init_TABLE_WIDTH() {

    return foam.core.IntProperty.IntPropertyBuilder(null) // TODO give context
      .setName("tableWidth")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getSearchView$() {

    if ( searchView_$ == null ) {
      searchView_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SEARCH_VIEW)
        .build();
    }
    return searchView_$;
  }

  public Object getSearchView() {

    if ( ! searchView_isSet_ ) {
      return
    new java.util.HashMap<String, Object>() {
    {
    put("class", "foam.u2.search.GroupAutocompleteSearchView");
    }
    }
    ;
    }
    return searchView_;
  }

  private Object searchView_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSearchView(Object value) {

    boolean hasOldValue = hasPropertySet("searchView");
    Object oldValue = hasOldValue ?
      getSearchView() :
      null;
    Object castedValue = searchView_adapt(oldValue, value, hasOldValue);
    
    searchView_isSet_ = true;
    searchView_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "searchView", null };
    if ( hasListeners(args) ) {
      args[2] = getSearchView$();
      pub(args);
    }
  }

  private static foam.u2.ViewSpec init_SEARCH_VIEW() {

    return foam.u2.ViewSpec.ViewSpecBuilder(null) // TODO give context
      .setName("searchView")
      .setValue(
    new java.util.HashMap<String, Object>() {
      {
      put("class", "foam.u2.search.GroupAutocompleteSearchView");
      }
    }
              )
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getChartJsFormatter$() {

    if ( chartJsFormatter_$ == null ) {
      chartJsFormatter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CHART_JS_FORMATTER)
        .build();
    }
    return chartJsFormatter_$;
  }

  public Object getChartJsFormatter() {

    if ( ! chartJsFormatter_isSet_ ) {
      return null;
    }
    return chartJsFormatter_;
  }

  private Object chartJsFormatter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setChartJsFormatter(Object value) {

    boolean hasOldValue = hasPropertySet("chartJsFormatter");
    Object oldValue = hasOldValue ?
      getChartJsFormatter() :
      null;
    Object castedValue = chartJsFormatter_adapt(oldValue, value, hasOldValue);
    
    chartJsFormatter_isSet_ = true;
    chartJsFormatter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "chartJsFormatter", null };
    if ( hasListeners(args) ) {
      args[2] = getChartJsFormatter$();
      pub(args);
    }
  }

  private static foam.core.Property init_CHART_JS_FORMATTER() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("chartJsFormatter")
      .setValue(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  protected foam.cross_platform.Lib.Builder Lib_create() {

    return foam.cross_platform.Lib.LibBuilder(getSubX());
  }

  protected foam.core.ExpressionSlot.Builder ExpressionSlot_create() {

    return foam.core.ExpressionSlot.ExpressionSlotBuilder(getSubX());
  }

  public foam.core.Slot getAndroidValue$() {

    if ( androidValue_$ == null ) {
      androidValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_VALUE)
        .build();
    }
    return androidValue_$;
  }

  public String getAndroidValue() {

    if ( ! androidValue_isSet_ ) {
      return "";
    }
    return androidValue_;
  }

  private String androidValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidValue(Object value) {

    boolean hasOldValue = hasPropertySet("androidValue");
    Object oldValue = hasOldValue ?
      getAndroidValue() :
      null;
    String castedValue = androidValue_adapt(oldValue, value, hasOldValue);
    
    androidValue_isSet_ = true;
    androidValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidValue", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidValue")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidExpressionArgs$() {

    if ( androidExpressionArgs_$ == null ) {
      androidExpressionArgs_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_EXPRESSION_ARGS)
        .build();
    }
    return androidExpressionArgs_$;
  }

  protected String[] androidExpressionArgs_factory_() {

    return new String[0];
  }

  public String[] getAndroidExpressionArgs() {

    if ( ! androidExpressionArgs_isSet_ ) {
      setProperty("androidExpressionArgs", androidExpressionArgs_factory_());
    }
    return androidExpressionArgs_;
  }

  private String[] androidExpressionArgs_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setAndroidExpressionArgs(Object value) {

    boolean hasOldValue = hasPropertySet("androidExpressionArgs");
    Object oldValue = hasOldValue ?
      getAndroidExpressionArgs() :
      null;
    String[] castedValue = androidExpressionArgs_adapt(oldValue, value, hasOldValue);
    
    androidExpressionArgs_isSet_ = true;
    androidExpressionArgs_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidExpressionArgs", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidExpressionArgs$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_ANDROID_EXPRESSION_ARGS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("androidExpressionArgs")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidExpression$() {

    if ( androidExpression_$ == null ) {
      androidExpression_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_EXPRESSION)
        .build();
    }
    return androidExpression_$;
  }

  public String getAndroidExpression() {

    if ( ! androidExpression_isSet_ ) {
      return "";
    }
    return androidExpression_;
  }

  private String androidExpression_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidExpression(Object value) {

    boolean hasOldValue = hasPropertySet("androidExpression");
    Object oldValue = hasOldValue ?
      getAndroidExpression() :
      null;
    String castedValue = androidExpression_adapt(oldValue, value, hasOldValue);
    
    androidExpression_isSet_ = true;
    androidExpression_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidExpression", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidExpression$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_EXPRESSION() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidExpression")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidType$() {

    if ( androidType_$ == null ) {
      androidType_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_TYPE)
        .build();
    }
    return androidType_$;
  }

  public String getAndroidType() {

    if ( ! androidType_isSet_ ) {
      return "";
    }
    return androidType_;
  }

  private String androidType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidType(Object value) {

    boolean hasOldValue = hasPropertySet("androidType");
    Object oldValue = hasOldValue ?
      getAndroidType() :
      null;
    String castedValue = androidType_adapt(oldValue, value, hasOldValue);
    
    androidType_isSet_ = true;
    androidType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidType", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidType$();
      pub(args);
    }
  }

  private static foam.android.tools.AndroidType init_ANDROID_TYPE() {

    return foam.android.tools.AndroidType.AndroidTypeBuilder(null) // TODO give context
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidAxiomName$() {

    if ( androidAxiomName_$ == null ) {
      androidAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_AXIOM_NAME)
        .build();
    }
    return androidAxiomName_$;
  }

  public String getAndroidAxiomName() {

    if ( ! androidAxiomName_isSet_ ) {
      return "";
    }
    return androidAxiomName_;
  }

  private String androidAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("androidAxiomName");
    Object oldValue = hasOldValue ?
      getAndroidAxiomName() :
      null;
    String castedValue = androidAxiomName_adapt(oldValue, value, hasOldValue);
    
    androidAxiomName_isSet_ = true;
    androidAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidAxiomInitializerName$() {

    if ( androidAxiomInitializerName_$ == null ) {
      androidAxiomInitializerName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_AXIOM_INITIALIZER_NAME)
        .build();
    }
    return androidAxiomInitializerName_$;
  }

  public String getAndroidAxiomInitializerName() {

    if ( ! androidAxiomInitializerName_isSet_ ) {
      return "";
    }
    return androidAxiomInitializerName_;
  }

  private String androidAxiomInitializerName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidAxiomInitializerName(Object value) {

    boolean hasOldValue = hasPropertySet("androidAxiomInitializerName");
    Object oldValue = hasOldValue ?
      getAndroidAxiomInitializerName() :
      null;
    String castedValue = androidAxiomInitializerName_adapt(oldValue, value, hasOldValue);
    
    androidAxiomInitializerName_isSet_ = true;
    androidAxiomInitializerName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidAxiomInitializerName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidAxiomInitializerName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_AXIOM_INITIALIZER_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidAxiomInitializerName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidSlotVarName$() {

    if ( androidSlotVarName_$ == null ) {
      androidSlotVarName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_SLOT_VAR_NAME)
        .build();
    }
    return androidSlotVarName_$;
  }

  public String getAndroidSlotVarName() {

    if ( ! androidSlotVarName_isSet_ ) {
      return "";
    }
    return androidSlotVarName_;
  }

  private String androidSlotVarName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidSlotVarName(Object value) {

    boolean hasOldValue = hasPropertySet("androidSlotVarName");
    Object oldValue = hasOldValue ?
      getAndroidSlotVarName() :
      null;
    String castedValue = androidSlotVarName_adapt(oldValue, value, hasOldValue);
    
    androidSlotVarName_isSet_ = true;
    androidSlotVarName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidSlotVarName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidSlotVarName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_SLOT_VAR_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidSlotVarName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidSlotGetterName$() {

    if ( androidSlotGetterName_$ == null ) {
      androidSlotGetterName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_SLOT_GETTER_NAME)
        .build();
    }
    return androidSlotGetterName_$;
  }

  public String getAndroidSlotGetterName() {

    if ( ! androidSlotGetterName_isSet_ ) {
      return "";
    }
    return androidSlotGetterName_;
  }

  private String androidSlotGetterName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidSlotGetterName(Object value) {

    boolean hasOldValue = hasPropertySet("androidSlotGetterName");
    Object oldValue = hasOldValue ?
      getAndroidSlotGetterName() :
      null;
    String castedValue = androidSlotGetterName_adapt(oldValue, value, hasOldValue);
    
    androidSlotGetterName_isSet_ = true;
    androidSlotGetterName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidSlotGetterName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidSlotGetterName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_SLOT_GETTER_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidSlotGetterName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidGetter$() {

    if ( androidGetter_$ == null ) {
      androidGetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_GETTER)
        .build();
    }
    return androidGetter_$;
  }

  public String getAndroidGetter() {

    if ( ! androidGetter_isSet_ ) {
      return "";
    }
    return androidGetter_;
  }

  private String androidGetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidGetter(Object value) {

    boolean hasOldValue = hasPropertySet("androidGetter");
    Object oldValue = hasOldValue ?
      getAndroidGetter() :
      null;
    String castedValue = androidGetter_adapt(oldValue, value, hasOldValue);
    
    androidGetter_isSet_ = true;
    androidGetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidGetter", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidGetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_GETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidGetter")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidPrivateVarName$() {

    if ( androidPrivateVarName_$ == null ) {
      androidPrivateVarName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_PRIVATE_VAR_NAME)
        .build();
    }
    return androidPrivateVarName_$;
  }

  public String getAndroidPrivateVarName() {

    if ( ! androidPrivateVarName_isSet_ ) {
      return "";
    }
    return androidPrivateVarName_;
  }

  private String androidPrivateVarName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidPrivateVarName(Object value) {

    boolean hasOldValue = hasPropertySet("androidPrivateVarName");
    Object oldValue = hasOldValue ?
      getAndroidPrivateVarName() :
      null;
    String castedValue = androidPrivateVarName_adapt(oldValue, value, hasOldValue);
    
    androidPrivateVarName_isSet_ = true;
    androidPrivateVarName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidPrivateVarName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidPrivateVarName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_PRIVATE_VAR_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidPrivateVarName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidSetter$() {

    if ( androidSetter_$ == null ) {
      androidSetter_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_SETTER)
        .build();
    }
    return androidSetter_$;
  }

  public String getAndroidSetter() {

    if ( ! androidSetter_isSet_ ) {
      return "";
    }
    return androidSetter_;
  }

  private String androidSetter_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidSetter(Object value) {

    boolean hasOldValue = hasPropertySet("androidSetter");
    Object oldValue = hasOldValue ?
      getAndroidSetter() :
      null;
    String castedValue = androidSetter_adapt(oldValue, value, hasOldValue);
    
    androidSetter_isSet_ = true;
    androidSetter_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidSetter", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidSetter$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_SETTER() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidSetter")
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidPreSet$() {

    if ( androidPreSet_$ == null ) {
      androidPreSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_PRE_SET)
        .build();
    }
    return androidPreSet_$;
  }

  public String getAndroidPreSet() {

    if ( ! androidPreSet_isSet_ ) {
      return "";
    }
    return androidPreSet_;
  }

  private String androidPreSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidPreSet(Object value) {

    boolean hasOldValue = hasPropertySet("androidPreSet");
    Object oldValue = hasOldValue ?
      getAndroidPreSet() :
      null;
    String castedValue = androidPreSet_adapt(oldValue, value, hasOldValue);
    
    androidPreSet_isSet_ = true;
    androidPreSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidPreSet", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidPreSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_PRE_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidPreSet")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidPostSet$() {

    if ( androidPostSet_$ == null ) {
      androidPostSet_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_POST_SET)
        .build();
    }
    return androidPostSet_$;
  }

  public String getAndroidPostSet() {

    if ( ! androidPostSet_isSet_ ) {
      return "";
    }
    return androidPostSet_;
  }

  private String androidPostSet_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidPostSet(Object value) {

    boolean hasOldValue = hasPropertySet("androidPostSet");
    Object oldValue = hasOldValue ?
      getAndroidPostSet() :
      null;
    String castedValue = androidPostSet_adapt(oldValue, value, hasOldValue);
    
    androidPostSet_isSet_ = true;
    androidPostSet_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidPostSet", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidPostSet$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_POST_SET() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidPostSet")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidAdapt$() {

    if ( androidAdapt_$ == null ) {
      androidAdapt_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_ADAPT)
        .build();
    }
    return androidAdapt_$;
  }

  public String getAndroidAdapt() {

    if ( ! androidAdapt_isSet_ ) {
      return "";
    }
    return androidAdapt_;
  }

  private String androidAdapt_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidAdapt(Object value) {

    boolean hasOldValue = hasPropertySet("androidAdapt");
    Object oldValue = hasOldValue ?
      getAndroidAdapt() :
      null;
    String castedValue = androidAdapt_adapt(oldValue, value, hasOldValue);
    
    androidAdapt_isSet_ = true;
    androidAdapt_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidAdapt", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidAdapt$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_ADAPT() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidAdapt")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidFactory$() {

    if ( androidFactory_$ == null ) {
      androidFactory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_FACTORY)
        .build();
    }
    return androidFactory_$;
  }

  public String getAndroidFactory() {

    if ( ! androidFactory_isSet_ ) {
      return "";
    }
    return androidFactory_;
  }

  private String androidFactory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidFactory(Object value) {

    boolean hasOldValue = hasPropertySet("androidFactory");
    Object oldValue = hasOldValue ?
      getAndroidFactory() :
      null;
    String castedValue = androidFactory_adapt(oldValue, value, hasOldValue);
    
    androidFactory_isSet_ = true;
    androidFactory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidFactory", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidFactory$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_FACTORY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidFactory")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidIsSetVarName$() {

    if ( androidIsSetVarName_$ == null ) {
      androidIsSetVarName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_IS_SET_VAR_NAME)
        .build();
    }
    return androidIsSetVarName_$;
  }

  public String getAndroidIsSetVarName() {

    if ( ! androidIsSetVarName_isSet_ ) {
      return "";
    }
    return androidIsSetVarName_;
  }

  private String androidIsSetVarName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidIsSetVarName(Object value) {

    boolean hasOldValue = hasPropertySet("androidIsSetVarName");
    Object oldValue = hasOldValue ?
      getAndroidIsSetVarName() :
      null;
    String castedValue = androidIsSetVarName_adapt(oldValue, value, hasOldValue);
    
    androidIsSetVarName_isSet_ = true;
    androidIsSetVarName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidIsSetVarName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidIsSetVarName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_IS_SET_VAR_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidIsSetVarName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidGetterName$() {

    if ( androidGetterName_$ == null ) {
      androidGetterName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_GETTER_NAME)
        .build();
    }
    return androidGetterName_$;
  }

  public String getAndroidGetterName() {

    if ( ! androidGetterName_isSet_ ) {
      return "";
    }
    return androidGetterName_;
  }

  private String androidGetterName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidGetterName(Object value) {

    boolean hasOldValue = hasPropertySet("androidGetterName");
    Object oldValue = hasOldValue ?
      getAndroidGetterName() :
      null;
    String castedValue = androidGetterName_adapt(oldValue, value, hasOldValue);
    
    androidGetterName_isSet_ = true;
    androidGetterName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidGetterName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidGetterName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_GETTER_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidGetterName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidSetterName$() {

    if ( androidSetterName_$ == null ) {
      androidSetterName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_SETTER_NAME)
        .build();
    }
    return androidSetterName_$;
  }

  public String getAndroidSetterName() {

    if ( ! androidSetterName_isSet_ ) {
      return "";
    }
    return androidSetterName_;
  }

  private String androidSetterName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidSetterName(Object value) {

    boolean hasOldValue = hasPropertySet("androidSetterName");
    Object oldValue = hasOldValue ?
      getAndroidSetterName() :
      null;
    String castedValue = androidSetterName_adapt(oldValue, value, hasOldValue);
    
    androidSetterName_isSet_ = true;
    androidSetterName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidSetterName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidSetterName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_SETTER_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidSetterName")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public foam.core.Slot getAndroidFAsAndroidValue$() {

    if ( androidFAsAndroidValue_$ == null ) {
      androidFAsAndroidValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_FAS_ANDROID_VALUE)
        .build();
    }
    return androidFAsAndroidValue_$;
  }

  public foam.cross_platform.GenericFunction getAndroidFAsAndroidValue() {

    if ( ! androidFAsAndroidValue_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return androidFAsAndroidValue_;
  }

  private foam.cross_platform.GenericFunction androidFAsAndroidValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setAndroidFAsAndroidValue(Object value) {

    boolean hasOldValue = hasPropertySet("androidFAsAndroidValue");
    Object oldValue = hasOldValue ?
      getAndroidFAsAndroidValue() :
      null;
    foam.cross_platform.GenericFunction castedValue = androidFAsAndroidValue_adapt(oldValue, value, hasOldValue);
    
    androidFAsAndroidValue_isSet_ = true;
    androidFAsAndroidValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidFAsAndroidValue", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidFAsAndroidValue$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_ANDROID_FAS_ANDROID_VALUE() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("androidFAsAndroidValue")
      .setExpression(null)
      .setForClass_("foam.core.Property")
      .build();
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "of":
        of_isSet_ = false;
        Object[] ofArgs = new Object[] { "propertyChange", "of", null };
        if ( hasListeners(ofArgs) ) {
          ofArgs[2] = getOf$();
          pub(ofArgs);
        }
        return;
    
    
      case "type":
        type_isSet_ = false;
        Object[] typeArgs = new Object[] { "propertyChange", "type", null };
        if ( hasListeners(typeArgs) ) {
          typeArgs[2] = getType$();
          pub(typeArgs);
        }
        return;
    
    
      case "hidden":
        hidden_isSet_ = false;
        Object[] hiddenArgs = new Object[] { "propertyChange", "hidden", null };
        if ( hasListeners(hiddenArgs) ) {
          hiddenArgs[2] = getHidden$();
          pub(hiddenArgs);
        }
        return;
    
    
      case "adapt":
        adapt_isSet_ = false;
        Object[] adaptArgs = new Object[] { "propertyChange", "adapt", null };
        if ( hasListeners(adaptArgs) ) {
          adaptArgs[2] = getAdapt$();
          pub(adaptArgs);
        }
        return;
    
    
      case "assertValue":
        assertValue_isSet_ = false;
        Object[] assertValueArgs = new Object[] { "propertyChange", "assertValue", null };
        if ( hasListeners(assertValueArgs) ) {
          assertValueArgs[2] = getAssertValue$();
          pub(assertValueArgs);
        }
        return;
    
    
      case "adaptArrayElement":
        adaptArrayElement_isSet_ = false;
        Object[] adaptArrayElementArgs = new Object[] { "propertyChange", "adaptArrayElement", null };
        if ( hasListeners(adaptArrayElementArgs) ) {
          adaptArrayElementArgs[2] = getAdaptArrayElement$();
          pub(adaptArrayElementArgs);
        }
        return;
    
    
      case "postSet":
        postSet_isSet_ = false;
        Object[] postSetArgs = new Object[] { "propertyChange", "postSet", null };
        if ( hasListeners(postSetArgs) ) {
          postSetArgs[2] = getPostSet$();
          pub(postSetArgs);
        }
        return;
    
    
      case "name":
        name_isSet_ = false;
        Object[] nameArgs = new Object[] { "propertyChange", "name", null };
        if ( hasListeners(nameArgs) ) {
          nameArgs[2] = getName$();
          pub(nameArgs);
        }
        return;
    
    
      case "label":
        label_isSet_ = false;
        Object[] labelArgs = new Object[] { "propertyChange", "label", null };
        if ( hasListeners(labelArgs) ) {
          labelArgs[2] = getLabel$();
          pub(labelArgs);
        }
        return;
    
    
      case "documentation":
        documentation_isSet_ = false;
        Object[] documentationArgs = new Object[] { "propertyChange", "documentation", null };
        if ( hasListeners(documentationArgs) ) {
          documentationArgs[2] = getDocumentation$();
          pub(documentationArgs);
        }
        return;
    
    
      case "help":
        help_isSet_ = false;
        Object[] helpArgs = new Object[] { "propertyChange", "help", null };
        if ( hasListeners(helpArgs) ) {
          helpArgs[2] = getHelp$();
          pub(helpArgs);
        }
        return;
    
    
      case "order":
        order_isSet_ = false;
        Object[] orderArgs = new Object[] { "propertyChange", "order", null };
        if ( hasListeners(orderArgs) ) {
          orderArgs[2] = getOrder$();
          pub(orderArgs);
        }
        return;
    
    
      case "value":
        value_isSet_ = false;
        Object[] valueArgs = new Object[] { "propertyChange", "value", null };
        if ( hasListeners(valueArgs) ) {
          valueArgs[2] = getValue$();
          pub(valueArgs);
        }
        return;
    
    
      case "factory":
        factory_isSet_ = false;
        Object[] factoryArgs = new Object[] { "propertyChange", "factory", null };
        if ( hasListeners(factoryArgs) ) {
          factoryArgs[2] = getFactory$();
          pub(factoryArgs);
        }
        return;
    
    
      case "preSet":
        preSet_isSet_ = false;
        Object[] preSetArgs = new Object[] { "propertyChange", "preSet", null };
        if ( hasListeners(preSetArgs) ) {
          preSetArgs[2] = getPreSet$();
          pub(preSetArgs);
        }
        return;
    
    
      case "expression":
        expression_isSet_ = false;
        Object[] expressionArgs = new Object[] { "propertyChange", "expression", null };
        if ( hasListeners(expressionArgs) ) {
          expressionArgs[2] = getExpression$();
          pub(expressionArgs);
        }
        return;
    
    
      case "getter":
        getter_isSet_ = false;
        Object[] getterArgs = new Object[] { "propertyChange", "getter", null };
        if ( hasListeners(getterArgs) ) {
          getterArgs[2] = getGetter$();
          pub(getterArgs);
        }
        return;
    
    
      case "setter":
        setter_isSet_ = false;
        Object[] setterArgs = new Object[] { "propertyChange", "setter", null };
        if ( hasListeners(setterArgs) ) {
          setterArgs[2] = getSetter$();
          pub(setterArgs);
        }
        return;
    
    
      case "cloneProperty":
        cloneProperty_isSet_ = false;
        Object[] clonePropertyArgs = new Object[] { "propertyChange", "cloneProperty", null };
        if ( hasListeners(clonePropertyArgs) ) {
          clonePropertyArgs[2] = getCloneProperty$();
          pub(clonePropertyArgs);
        }
        return;
    
    
      case "final":
        final_isSet_ = false;
        Object[] finalArgs = new Object[] { "propertyChange", "final", null };
        if ( hasListeners(finalArgs) ) {
          finalArgs[2] = getFinal$();
          pub(finalArgs);
        }
        return;
    
    
      case "required":
        required_isSet_ = false;
        Object[] requiredArgs = new Object[] { "propertyChange", "required", null };
        if ( hasListeners(requiredArgs) ) {
          requiredArgs[2] = getRequired$();
          pub(requiredArgs);
        }
        return;
    
    
      case "permissionRequired":
        permissionRequired_isSet_ = false;
        Object[] permissionRequiredArgs = new Object[] { "propertyChange", "permissionRequired", null };
        if ( hasListeners(permissionRequiredArgs) ) {
          permissionRequiredArgs[2] = getPermissionRequired$();
          pub(permissionRequiredArgs);
        }
        return;
    
    
      case "flags":
        flags_isSet_ = false;
        Object[] flagsArgs = new Object[] { "propertyChange", "flags", null };
        if ( hasListeners(flagsArgs) ) {
          flagsArgs[2] = getFlags$();
          pub(flagsArgs);
        }
        return;
    
    
      case "fromString":
        fromString_isSet_ = false;
        Object[] fromStringArgs = new Object[] { "propertyChange", "fromString", null };
        if ( hasListeners(fromStringArgs) ) {
          fromStringArgs[2] = getFromString$();
          pub(fromStringArgs);
        }
        return;
    
    
      case "comparePropertyValues":
        comparePropertyValues_isSet_ = false;
        Object[] comparePropertyValuesArgs = new Object[] { "propertyChange", "comparePropertyValues", null };
        if ( hasListeners(comparePropertyValuesArgs) ) {
          comparePropertyValuesArgs[2] = getComparePropertyValues$();
          pub(comparePropertyValuesArgs);
        }
        return;
    
    
      case "isDefaultValue":
        isDefaultValue_isSet_ = false;
        Object[] isDefaultValueArgs = new Object[] { "propertyChange", "isDefaultValue", null };
        if ( hasListeners(isDefaultValueArgs) ) {
          isDefaultValueArgs[2] = getIsDefaultValue$();
          pub(isDefaultValueArgs);
        }
        return;
    
    
      case "diffPropertyValues":
        diffPropertyValues_isSet_ = false;
        Object[] diffPropertyValuesArgs = new Object[] { "propertyChange", "diffPropertyValues", null };
        if ( hasListeners(diffPropertyValuesArgs) ) {
          diffPropertyValuesArgs[2] = getDiffPropertyValues$();
          pub(diffPropertyValuesArgs);
        }
        return;
    
    
      case "diffProperty":
        diffProperty_isSet_ = false;
        Object[] diffPropertyArgs = new Object[] { "propertyChange", "diffProperty", null };
        if ( hasListeners(diffPropertyArgs) ) {
          diffPropertyArgs[2] = getDiffProperty$();
          pub(diffPropertyArgs);
        }
        return;
    
    
      case "forClass_":
        forClass__isSet_ = false;
        Object[] forClass_Args = new Object[] { "propertyChange", "forClass_", null };
        if ( hasListeners(forClass_Args) ) {
          forClass_Args[2] = getForClass_$();
          pub(forClass_Args);
        }
        return;
    
    
      case "containsPII":
        containsPII_isSet_ = false;
        Object[] containsPIIArgs = new Object[] { "propertyChange", "containsPII", null };
        if ( hasListeners(containsPIIArgs) ) {
          containsPIIArgs[2] = getContainsPII$();
          pub(containsPIIArgs);
        }
        return;
    
    
      case "containsDeletablePII":
        containsDeletablePII_isSet_ = false;
        Object[] containsDeletablePIIArgs = new Object[] { "propertyChange", "containsDeletablePII", null };
        if ( hasListeners(containsDeletablePIIArgs) ) {
          containsDeletablePIIArgs[2] = getContainsDeletablePII$();
          pub(containsDeletablePIIArgs);
        }
        return;
    
    
      case "gridColumns":
        gridColumns_isSet_ = false;
        Object[] gridColumnsArgs = new Object[] { "propertyChange", "gridColumns", null };
        if ( hasListeners(gridColumnsArgs) ) {
          gridColumnsArgs[2] = getGridColumns$();
          pub(gridColumnsArgs);
        }
        return;
    
    
      case "section":
        section_isSet_ = false;
        Object[] sectionArgs = new Object[] { "propertyChange", "section", null };
        if ( hasListeners(sectionArgs) ) {
          sectionArgs[2] = getSection$();
          pub(sectionArgs);
        }
        return;
    
    
      case "transient":
        transient_isSet_ = false;
        Object[] transientArgs = new Object[] { "propertyChange", "transient", null };
        if ( hasListeners(transientArgs) ) {
          transientArgs[2] = getTransient$();
          pub(transientArgs);
        }
        return;
    
    
      case "networkTransient":
        networkTransient_isSet_ = false;
        Object[] networkTransientArgs = new Object[] { "propertyChange", "networkTransient", null };
        if ( hasListeners(networkTransientArgs) ) {
          networkTransientArgs[2] = getNetworkTransient$();
          pub(networkTransientArgs);
        }
        return;
    
    
      case "storageTransient":
        storageTransient_isSet_ = false;
        Object[] storageTransientArgs = new Object[] { "propertyChange", "storageTransient", null };
        if ( hasListeners(storageTransientArgs) ) {
          storageTransientArgs[2] = getStorageTransient$();
          pub(storageTransientArgs);
        }
        return;
    
    
      case "validationPredicates":
        validationPredicates_isSet_ = false;
        Object[] validationPredicatesArgs = new Object[] { "propertyChange", "validationPredicates", null };
        if ( hasListeners(validationPredicatesArgs) ) {
          validationPredicatesArgs[2] = getValidationPredicates$();
          pub(validationPredicatesArgs);
        }
        return;
    
    
      case "validateObj":
        validateObj_isSet_ = false;
        Object[] validateObjArgs = new Object[] { "propertyChange", "validateObj", null };
        if ( hasListeners(validateObjArgs) ) {
          validateObjArgs[2] = getValidateObj$();
          pub(validateObjArgs);
        }
        return;
    
    
      case "shortName":
        shortName_isSet_ = false;
        Object[] shortNameArgs = new Object[] { "propertyChange", "shortName", null };
        if ( hasListeners(shortNameArgs) ) {
          shortNameArgs[2] = getShortName$();
          pub(shortNameArgs);
        }
        return;
    
    
      case "source":
        source_isSet_ = false;
        Object[] sourceArgs = new Object[] { "propertyChange", "source", null };
        if ( hasListeners(sourceArgs) ) {
          sourceArgs[2] = getSource$();
          pub(sourceArgs);
        }
        return;
    
    
      case "fromJSON":
        fromJSON_isSet_ = false;
        Object[] fromJSONArgs = new Object[] { "propertyChange", "fromJSON", null };
        if ( hasListeners(fromJSONArgs) ) {
          fromJSONArgs[2] = getFromJSON$();
          pub(fromJSONArgs);
        }
        return;
    
    
      case "toJSON":
        toJSON_isSet_ = false;
        Object[] toJSONArgs = new Object[] { "propertyChange", "toJSON", null };
        if ( hasListeners(toJSONArgs) ) {
          toJSONArgs[2] = getToJSON$();
          pub(toJSONArgs);
        }
        return;
    
    
      case "xmlAttribute":
        xmlAttribute_isSet_ = false;
        Object[] xmlAttributeArgs = new Object[] { "propertyChange", "xmlAttribute", null };
        if ( hasListeners(xmlAttributeArgs) ) {
          xmlAttributeArgs[2] = getXmlAttribute$();
          pub(xmlAttributeArgs);
        }
        return;
    
    
      case "xmlTextNode":
        xmlTextNode_isSet_ = false;
        Object[] xmlTextNodeArgs = new Object[] { "propertyChange", "xmlTextNode", null };
        if ( hasListeners(xmlTextNodeArgs) ) {
          xmlTextNodeArgs[2] = getXmlTextNode$();
          pub(xmlTextNodeArgs);
        }
        return;
    
    
      case "fromXML":
        fromXML_isSet_ = false;
        Object[] fromXMLArgs = new Object[] { "propertyChange", "fromXML", null };
        if ( hasListeners(fromXMLArgs) ) {
          fromXMLArgs[2] = getFromXML$();
          pub(fromXMLArgs);
        }
        return;
    
    
      case "toXML":
        toXML_isSet_ = false;
        Object[] toXMLArgs = new Object[] { "propertyChange", "toXML", null };
        if ( hasListeners(toXMLArgs) ) {
          toXMLArgs[2] = getToXML$();
          pub(toXMLArgs);
        }
        return;
    
    
      case "fromCSVLabelMapping":
        fromCSVLabelMapping_isSet_ = false;
        Object[] fromCSVLabelMappingArgs = new Object[] { "propertyChange", "fromCSVLabelMapping", null };
        if ( hasListeners(fromCSVLabelMappingArgs) ) {
          fromCSVLabelMappingArgs[2] = getFromCSVLabelMapping$();
          pub(fromCSVLabelMappingArgs);
        }
        return;
    
    
      case "swiftVarName":
        swiftVarName_isSet_ = false;
        Object[] swiftVarNameArgs = new Object[] { "propertyChange", "swiftVarName", null };
        if ( hasListeners(swiftVarNameArgs) ) {
          swiftVarNameArgs[2] = getSwiftVarName$();
          pub(swiftVarNameArgs);
        }
        return;
    
    
      case "swiftView":
        swiftView_isSet_ = false;
        Object[] swiftViewArgs = new Object[] { "propertyChange", "swiftView", null };
        if ( hasListeners(swiftViewArgs) ) {
          swiftViewArgs[2] = getSwiftView$();
          pub(swiftViewArgs);
        }
        return;
    
    
      case "swiftSlotLinkSubName":
        swiftSlotLinkSubName_isSet_ = false;
        Object[] swiftSlotLinkSubNameArgs = new Object[] { "propertyChange", "swiftSlotLinkSubName", null };
        if ( hasListeners(swiftSlotLinkSubNameArgs) ) {
          swiftSlotLinkSubNameArgs[2] = getSwiftSlotLinkSubName$();
          pub(swiftSlotLinkSubNameArgs);
        }
        return;
    
    
      case "swiftSlotValueName":
        swiftSlotValueName_isSet_ = false;
        Object[] swiftSlotValueNameArgs = new Object[] { "propertyChange", "swiftSlotValueName", null };
        if ( hasListeners(swiftSlotValueNameArgs) ) {
          swiftSlotValueNameArgs[2] = getSwiftSlotValueName$();
          pub(swiftSlotValueNameArgs);
        }
        return;
    
    
      case "swiftSlotName":
        swiftSlotName_isSet_ = false;
        Object[] swiftSlotNameArgs = new Object[] { "propertyChange", "swiftSlotName", null };
        if ( hasListeners(swiftSlotNameArgs) ) {
          swiftSlotNameArgs[2] = getSwiftSlotName$();
          pub(swiftSlotNameArgs);
        }
        return;
    
    
      case "swiftInitedName":
        swiftInitedName_isSet_ = false;
        Object[] swiftInitedNameArgs = new Object[] { "propertyChange", "swiftInitedName", null };
        if ( hasListeners(swiftInitedNameArgs) ) {
          swiftInitedNameArgs[2] = getSwiftInitedName$();
          pub(swiftInitedNameArgs);
        }
        return;
    
    
      case "swiftValueName":
        swiftValueName_isSet_ = false;
        Object[] swiftValueNameArgs = new Object[] { "propertyChange", "swiftValueName", null };
        if ( hasListeners(swiftValueNameArgs) ) {
          swiftValueNameArgs[2] = getSwiftValueName$();
          pub(swiftValueNameArgs);
        }
        return;
    
    
      case "swiftValueType":
        swiftValueType_isSet_ = false;
        Object[] swiftValueTypeArgs = new Object[] { "propertyChange", "swiftValueType", null };
        if ( hasListeners(swiftValueTypeArgs) ) {
          swiftValueTypeArgs[2] = getSwiftValueType$();
          pub(swiftValueTypeArgs);
        }
        return;
    
    
      case "swiftRequiresEscaping":
        swiftRequiresEscaping_isSet_ = false;
        Object[] swiftRequiresEscapingArgs = new Object[] { "propertyChange", "swiftRequiresEscaping", null };
        if ( hasListeners(swiftRequiresEscapingArgs) ) {
          swiftRequiresEscapingArgs[2] = getSwiftRequiresEscaping$();
          pub(swiftRequiresEscapingArgs);
        }
        return;
    
    
      case "swiftOptional":
        swiftOptional_isSet_ = false;
        Object[] swiftOptionalArgs = new Object[] { "propertyChange", "swiftOptional", null };
        if ( hasListeners(swiftOptionalArgs) ) {
          swiftOptionalArgs[2] = getSwiftOptional$();
          pub(swiftOptionalArgs);
        }
        return;
    
    
      case "swiftFactory":
        swiftFactory_isSet_ = false;
        Object[] swiftFactoryArgs = new Object[] { "propertyChange", "swiftFactory", null };
        if ( hasListeners(swiftFactoryArgs) ) {
          swiftFactoryArgs[2] = getSwiftFactory$();
          pub(swiftFactoryArgs);
        }
        return;
    
    
      case "swiftFactoryName":
        swiftFactoryName_isSet_ = false;
        Object[] swiftFactoryNameArgs = new Object[] { "propertyChange", "swiftFactoryName", null };
        if ( hasListeners(swiftFactoryNameArgs) ) {
          swiftFactoryNameArgs[2] = getSwiftFactoryName$();
          pub(swiftFactoryNameArgs);
        }
        return;
    
    
      case "swiftValue":
        swiftValue_isSet_ = false;
        Object[] swiftValueArgs = new Object[] { "propertyChange", "swiftValue", null };
        if ( hasListeners(swiftValueArgs) ) {
          swiftValueArgs[2] = getSwiftValue$();
          pub(swiftValueArgs);
        }
        return;
    
    
      case "swiftGetter":
        swiftGetter_isSet_ = false;
        Object[] swiftGetterArgs = new Object[] { "propertyChange", "swiftGetter", null };
        if ( hasListeners(swiftGetterArgs) ) {
          swiftGetterArgs[2] = getSwiftGetter$();
          pub(swiftGetterArgs);
        }
        return;
    
    
      case "swiftSetter":
        swiftSetter_isSet_ = false;
        Object[] swiftSetterArgs = new Object[] { "propertyChange", "swiftSetter", null };
        if ( hasListeners(swiftSetterArgs) ) {
          swiftSetterArgs[2] = getSwiftSetter$();
          pub(swiftSetterArgs);
        }
        return;
    
    
      case "swiftPreSet":
        swiftPreSet_isSet_ = false;
        Object[] swiftPreSetArgs = new Object[] { "propertyChange", "swiftPreSet", null };
        if ( hasListeners(swiftPreSetArgs) ) {
          swiftPreSetArgs[2] = getSwiftPreSet$();
          pub(swiftPreSetArgs);
        }
        return;
    
    
      case "swiftPreSetFuncName":
        swiftPreSetFuncName_isSet_ = false;
        Object[] swiftPreSetFuncNameArgs = new Object[] { "propertyChange", "swiftPreSetFuncName", null };
        if ( hasListeners(swiftPreSetFuncNameArgs) ) {
          swiftPreSetFuncNameArgs[2] = getSwiftPreSetFuncName$();
          pub(swiftPreSetFuncNameArgs);
        }
        return;
    
    
      case "swiftPostSet":
        swiftPostSet_isSet_ = false;
        Object[] swiftPostSetArgs = new Object[] { "propertyChange", "swiftPostSet", null };
        if ( hasListeners(swiftPostSetArgs) ) {
          swiftPostSetArgs[2] = getSwiftPostSet$();
          pub(swiftPostSetArgs);
        }
        return;
    
    
      case "swiftPostSetFuncName":
        swiftPostSetFuncName_isSet_ = false;
        Object[] swiftPostSetFuncNameArgs = new Object[] { "propertyChange", "swiftPostSetFuncName", null };
        if ( hasListeners(swiftPostSetFuncNameArgs) ) {
          swiftPostSetFuncNameArgs[2] = getSwiftPostSetFuncName$();
          pub(swiftPostSetFuncNameArgs);
        }
        return;
    
    
      case "swiftExpressionArgs":
        swiftExpressionArgs_isSet_ = false;
        Object[] swiftExpressionArgsArgs = new Object[] { "propertyChange", "swiftExpressionArgs", null };
        if ( hasListeners(swiftExpressionArgsArgs) ) {
          swiftExpressionArgsArgs[2] = getSwiftExpressionArgs$();
          pub(swiftExpressionArgsArgs);
        }
        return;
    
    
      case "swiftExpression":
        swiftExpression_isSet_ = false;
        Object[] swiftExpressionArgs = new Object[] { "propertyChange", "swiftExpression", null };
        if ( hasListeners(swiftExpressionArgs) ) {
          swiftExpressionArgs[2] = getSwiftExpression$();
          pub(swiftExpressionArgs);
        }
        return;
    
    
      case "swiftExpressionSubscriptionName":
        swiftExpressionSubscriptionName_isSet_ = false;
        Object[] swiftExpressionSubscriptionNameArgs = new Object[] { "propertyChange", "swiftExpressionSubscriptionName", null };
        if ( hasListeners(swiftExpressionSubscriptionNameArgs) ) {
          swiftExpressionSubscriptionNameArgs[2] = getSwiftExpressionSubscriptionName$();
          pub(swiftExpressionSubscriptionNameArgs);
        }
        return;
    
    
      case "swiftAdapt":
        swiftAdapt_isSet_ = false;
        Object[] swiftAdaptArgs = new Object[] { "propertyChange", "swiftAdapt", null };
        if ( hasListeners(swiftAdaptArgs) ) {
          swiftAdaptArgs[2] = getSwiftAdapt$();
          pub(swiftAdaptArgs);
        }
        return;
    
    
      case "swiftAdaptFuncName":
        swiftAdaptFuncName_isSet_ = false;
        Object[] swiftAdaptFuncNameArgs = new Object[] { "propertyChange", "swiftAdaptFuncName", null };
        if ( hasListeners(swiftAdaptFuncNameArgs) ) {
          swiftAdaptFuncNameArgs[2] = getSwiftAdaptFuncName$();
          pub(swiftAdaptFuncNameArgs);
        }
        return;
    
    
      case "swiftPrivateAxiomName":
        swiftPrivateAxiomName_isSet_ = false;
        Object[] swiftPrivateAxiomNameArgs = new Object[] { "propertyChange", "swiftPrivateAxiomName", null };
        if ( hasListeners(swiftPrivateAxiomNameArgs) ) {
          swiftPrivateAxiomNameArgs[2] = getSwiftPrivateAxiomName$();
          pub(swiftPrivateAxiomNameArgs);
        }
        return;
    
    
      case "swiftAxiomName":
        swiftAxiomName_isSet_ = false;
        Object[] swiftAxiomNameArgs = new Object[] { "propertyChange", "swiftAxiomName", null };
        if ( hasListeners(swiftAxiomNameArgs) ) {
          swiftAxiomNameArgs[2] = getSwiftAxiomName$();
          pub(swiftAxiomNameArgs);
        }
        return;
    
    
      case "swiftToJSON":
        swiftToJSON_isSet_ = false;
        Object[] swiftToJSONArgs = new Object[] { "propertyChange", "swiftToJSON", null };
        if ( hasListeners(swiftToJSONArgs) ) {
          swiftToJSONArgs[2] = getSwiftToJSON$();
          pub(swiftToJSONArgs);
        }
        return;
    
    
      case "swiftSupport":
        swiftSupport_isSet_ = false;
        Object[] swiftSupportArgs = new Object[] { "propertyChange", "swiftSupport", null };
        if ( hasListeners(swiftSupportArgs) ) {
          swiftSupportArgs[2] = getSwiftSupport$();
          pub(swiftSupportArgs);
        }
        return;
    
    
      case "swiftJsonParser":
        swiftJsonParser_isSet_ = false;
        Object[] swiftJsonParserArgs = new Object[] { "propertyChange", "swiftJsonParser", null };
        if ( hasListeners(swiftJsonParserArgs) ) {
          swiftJsonParserArgs[2] = getSwiftJsonParser$();
          pub(swiftJsonParserArgs);
        }
        return;
    
    
      case "swiftWeak":
        swiftWeak_isSet_ = false;
        Object[] swiftWeakArgs = new Object[] { "propertyChange", "swiftWeak", null };
        if ( hasListeners(swiftWeakArgs) ) {
          swiftWeakArgs[2] = getSwiftWeak$();
          pub(swiftWeakArgs);
        }
        return;
    
    
      case "generateJava":
        generateJava_isSet_ = false;
        Object[] generateJavaArgs = new Object[] { "propertyChange", "generateJava", null };
        if ( hasListeners(generateJavaArgs) ) {
          generateJavaArgs[2] = getGenerateJava$();
          pub(generateJavaArgs);
        }
        return;
    
    
      case "javaJSONParser":
        javaJSONParser_isSet_ = false;
        Object[] javaJSONParserArgs = new Object[] { "propertyChange", "javaJSONParser", null };
        if ( hasListeners(javaJSONParserArgs) ) {
          javaJSONParserArgs[2] = getJavaJSONParser$();
          pub(javaJSONParserArgs);
        }
        return;
    
    
      case "javaQueryParser":
        javaQueryParser_isSet_ = false;
        Object[] javaQueryParserArgs = new Object[] { "propertyChange", "javaQueryParser", null };
        if ( hasListeners(javaQueryParserArgs) ) {
          javaQueryParserArgs[2] = getJavaQueryParser$();
          pub(javaQueryParserArgs);
        }
        return;
    
    
      case "javaCSVParser":
        javaCSVParser_isSet_ = false;
        Object[] javaCSVParserArgs = new Object[] { "propertyChange", "javaCSVParser", null };
        if ( hasListeners(javaCSVParserArgs) ) {
          javaCSVParserArgs[2] = getJavaCSVParser$();
          pub(javaCSVParserArgs);
        }
        return;
    
    
      case "javaInfoType":
        javaInfoType_isSet_ = false;
        Object[] javaInfoTypeArgs = new Object[] { "propertyChange", "javaInfoType", null };
        if ( hasListeners(javaInfoTypeArgs) ) {
          javaInfoTypeArgs[2] = getJavaInfoType$();
          pub(javaInfoTypeArgs);
        }
        return;
    
    
      case "javaFactory":
        javaFactory_isSet_ = false;
        Object[] javaFactoryArgs = new Object[] { "propertyChange", "javaFactory", null };
        if ( hasListeners(javaFactoryArgs) ) {
          javaFactoryArgs[2] = getJavaFactory$();
          pub(javaFactoryArgs);
        }
        return;
    
    
      case "javaGetter":
        javaGetter_isSet_ = false;
        Object[] javaGetterArgs = new Object[] { "propertyChange", "javaGetter", null };
        if ( hasListeners(javaGetterArgs) ) {
          javaGetterArgs[2] = getJavaGetter$();
          pub(javaGetterArgs);
        }
        return;
    
    
      case "javaSetter":
        javaSetter_isSet_ = false;
        Object[] javaSetterArgs = new Object[] { "propertyChange", "javaSetter", null };
        if ( hasListeners(javaSetterArgs) ) {
          javaSetterArgs[2] = getJavaSetter$();
          pub(javaSetterArgs);
        }
        return;
    
    
      case "javaPreSet":
        javaPreSet_isSet_ = false;
        Object[] javaPreSetArgs = new Object[] { "propertyChange", "javaPreSet", null };
        if ( hasListeners(javaPreSetArgs) ) {
          javaPreSetArgs[2] = getJavaPreSet$();
          pub(javaPreSetArgs);
        }
        return;
    
    
      case "javaPostSet":
        javaPostSet_isSet_ = false;
        Object[] javaPostSetArgs = new Object[] { "propertyChange", "javaPostSet", null };
        if ( hasListeners(javaPostSetArgs) ) {
          javaPostSetArgs[2] = getJavaPostSet$();
          pub(javaPostSetArgs);
        }
        return;
    
    
      case "aliases":
        aliases_isSet_ = false;
        Object[] aliasesArgs = new Object[] { "propertyChange", "aliases", null };
        if ( hasListeners(aliasesArgs) ) {
          aliasesArgs[2] = getAliases$();
          pub(aliasesArgs);
        }
        return;
    
    
      case "javaCloneProperty":
        javaCloneProperty_isSet_ = false;
        Object[] javaClonePropertyArgs = new Object[] { "propertyChange", "javaCloneProperty", null };
        if ( hasListeners(javaClonePropertyArgs) ) {
          javaClonePropertyArgs[2] = getJavaCloneProperty$();
          pub(javaClonePropertyArgs);
        }
        return;
    
    
      case "javaDiffProperty":
        javaDiffProperty_isSet_ = false;
        Object[] javaDiffPropertyArgs = new Object[] { "propertyChange", "javaDiffProperty", null };
        if ( hasListeners(javaDiffPropertyArgs) ) {
          javaDiffPropertyArgs[2] = getJavaDiffProperty$();
          pub(javaDiffPropertyArgs);
        }
        return;
    
    
      case "javaCompare":
        javaCompare_isSet_ = false;
        Object[] javaCompareArgs = new Object[] { "propertyChange", "javaCompare", null };
        if ( hasListeners(javaCompareArgs) ) {
          javaCompareArgs[2] = getJavaCompare$();
          pub(javaCompareArgs);
        }
        return;
    
    
      case "javaComparePropertyToObject":
        javaComparePropertyToObject_isSet_ = false;
        Object[] javaComparePropertyToObjectArgs = new Object[] { "propertyChange", "javaComparePropertyToObject", null };
        if ( hasListeners(javaComparePropertyToObjectArgs) ) {
          javaComparePropertyToObjectArgs[2] = getJavaComparePropertyToObject$();
          pub(javaComparePropertyToObjectArgs);
        }
        return;
    
    
      case "javaComparePropertyToValue":
        javaComparePropertyToValue_isSet_ = false;
        Object[] javaComparePropertyToValueArgs = new Object[] { "propertyChange", "javaComparePropertyToValue", null };
        if ( hasListeners(javaComparePropertyToValueArgs) ) {
          javaComparePropertyToValueArgs[2] = getJavaComparePropertyToValue$();
          pub(javaComparePropertyToValueArgs);
        }
        return;
    
    
      case "javaAssertValue":
        javaAssertValue_isSet_ = false;
        Object[] javaAssertValueArgs = new Object[] { "propertyChange", "javaAssertValue", null };
        if ( hasListeners(javaAssertValueArgs) ) {
          javaAssertValueArgs[2] = getJavaAssertValue$();
          pub(javaAssertValueArgs);
        }
        return;
    
    
      case "javaValue":
        javaValue_isSet_ = false;
        Object[] javaValueArgs = new Object[] { "propertyChange", "javaValue", null };
        if ( hasListeners(javaValueArgs) ) {
          javaValueArgs[2] = getJavaValue$();
          pub(javaValueArgs);
        }
        return;
    
    
      case "includeInDigest":
        includeInDigest_isSet_ = false;
        Object[] includeInDigestArgs = new Object[] { "propertyChange", "includeInDigest", null };
        if ( hasListeners(includeInDigestArgs) ) {
          includeInDigestArgs[2] = getIncludeInDigest$();
          pub(includeInDigestArgs);
        }
        return;
    
    
      case "includeInSignature":
        includeInSignature_isSet_ = false;
        Object[] includeInSignatureArgs = new Object[] { "propertyChange", "includeInSignature", null };
        if ( hasListeners(includeInSignatureArgs) ) {
          includeInSignatureArgs[2] = getIncludeInSignature$();
          pub(includeInSignatureArgs);
        }
        return;
    
    
      case "javaValidateObj":
        javaValidateObj_isSet_ = false;
        Object[] javaValidateObjArgs = new Object[] { "propertyChange", "javaValidateObj", null };
        if ( hasListeners(javaValidateObjArgs) ) {
          javaValidateObjArgs[2] = getJavaValidateObj$();
          pub(javaValidateObjArgs);
        }
        return;
    
    
      case "javaFromCSVLabelMapping":
        javaFromCSVLabelMapping_isSet_ = false;
        Object[] javaFromCSVLabelMappingArgs = new Object[] { "propertyChange", "javaFromCSVLabelMapping", null };
        if ( hasListeners(javaFromCSVLabelMappingArgs) ) {
          javaFromCSVLabelMappingArgs[2] = getJavaFromCSVLabelMapping$();
          pub(javaFromCSVLabelMappingArgs);
        }
        return;
    
    
      case "javaToCSV":
        javaToCSV_isSet_ = false;
        Object[] javaToCSVArgs = new Object[] { "propertyChange", "javaToCSV", null };
        if ( hasListeners(javaToCSVArgs) ) {
          javaToCSVArgs[2] = getJavaToCSV$();
          pub(javaToCSVArgs);
        }
        return;
    
    
      case "javaToCSVLabel":
        javaToCSVLabel_isSet_ = false;
        Object[] javaToCSVLabelArgs = new Object[] { "propertyChange", "javaToCSVLabel", null };
        if ( hasListeners(javaToCSVLabelArgs) ) {
          javaToCSVLabelArgs[2] = getJavaToCSVLabel$();
          pub(javaToCSVLabelArgs);
        }
        return;
    
    
      case "attribute":
        attribute_isSet_ = false;
        Object[] attributeArgs = new Object[] { "propertyChange", "attribute", null };
        if ( hasListeners(attributeArgs) ) {
          attributeArgs[2] = getAttribute$();
          pub(attributeArgs);
        }
        return;
    
    
      case "placeholder":
        placeholder_isSet_ = false;
        Object[] placeholderArgs = new Object[] { "propertyChange", "placeholder", null };
        if ( hasListeners(placeholderArgs) ) {
          placeholderArgs[2] = getPlaceholder$();
          pub(placeholderArgs);
        }
        return;
    
    
      case "view":
        view_isSet_ = false;
        Object[] viewArgs = new Object[] { "propertyChange", "view", null };
        if ( hasListeners(viewArgs) ) {
          viewArgs[2] = getView$();
          pub(viewArgs);
        }
        return;
    
    
      case "visibility":
        visibility_isSet_ = false;
        Object[] visibilityArgs = new Object[] { "propertyChange", "visibility", null };
        if ( hasListeners(visibilityArgs) ) {
          visibilityArgs[2] = getVisibility$();
          pub(visibilityArgs);
        }
        return;
    
    
      case "visibilityExpression":
        visibilityExpression_isSet_ = false;
        Object[] visibilityExpressionArgs = new Object[] { "propertyChange", "visibilityExpression", null };
        if ( hasListeners(visibilityExpressionArgs) ) {
          visibilityExpressionArgs[2] = getVisibilityExpression$();
          pub(visibilityExpressionArgs);
        }
        return;
    
    
      case "validationTextVisible":
        validationTextVisible_isSet_ = false;
        Object[] validationTextVisibleArgs = new Object[] { "propertyChange", "validationTextVisible", null };
        if ( hasListeners(validationTextVisibleArgs) ) {
          validationTextVisibleArgs[2] = getValidationTextVisible$();
          pub(validationTextVisibleArgs);
        }
        return;
    
    
      case "validationStyleEnabled":
        validationStyleEnabled_isSet_ = false;
        Object[] validationStyleEnabledArgs = new Object[] { "propertyChange", "validationStyleEnabled", null };
        if ( hasListeners(validationStyleEnabledArgs) ) {
          validationStyleEnabledArgs[2] = getValidationStyleEnabled$();
          pub(validationStyleEnabledArgs);
        }
        return;
    
    
      case "toCSV":
        toCSV_isSet_ = false;
        Object[] toCSVArgs = new Object[] { "propertyChange", "toCSV", null };
        if ( hasListeners(toCSVArgs) ) {
          toCSVArgs[2] = getToCSV$();
          pub(toCSVArgs);
        }
        return;
    
    
      case "toCSVLabel":
        toCSVLabel_isSet_ = false;
        Object[] toCSVLabelArgs = new Object[] { "propertyChange", "toCSVLabel", null };
        if ( hasListeners(toCSVLabelArgs) ) {
          toCSVLabelArgs[2] = getToCSVLabel$();
          pub(toCSVLabelArgs);
        }
        return;
    
    
      case "columnLabel":
        columnLabel_isSet_ = false;
        Object[] columnLabelArgs = new Object[] { "propertyChange", "columnLabel", null };
        if ( hasListeners(columnLabelArgs) ) {
          columnLabelArgs[2] = getColumnLabel$();
          pub(columnLabelArgs);
        }
        return;
    
    
      case "tableCellView":
        tableCellView_isSet_ = false;
        Object[] tableCellViewArgs = new Object[] { "propertyChange", "tableCellView", null };
        if ( hasListeners(tableCellViewArgs) ) {
          tableCellViewArgs[2] = getTableCellView$();
          pub(tableCellViewArgs);
        }
        return;
    
    
      case "tableHeaderFormatter":
        tableHeaderFormatter_isSet_ = false;
        Object[] tableHeaderFormatterArgs = new Object[] { "propertyChange", "tableHeaderFormatter", null };
        if ( hasListeners(tableHeaderFormatterArgs) ) {
          tableHeaderFormatterArgs[2] = getTableHeaderFormatter$();
          pub(tableHeaderFormatterArgs);
        }
        return;
    
    
      case "tableCellFormatter":
        tableCellFormatter_isSet_ = false;
        Object[] tableCellFormatterArgs = new Object[] { "propertyChange", "tableCellFormatter", null };
        if ( hasListeners(tableCellFormatterArgs) ) {
          tableCellFormatterArgs[2] = getTableCellFormatter$();
          pub(tableCellFormatterArgs);
        }
        return;
    
    
      case "tableWidth":
        tableWidth_isSet_ = false;
        Object[] tableWidthArgs = new Object[] { "propertyChange", "tableWidth", null };
        if ( hasListeners(tableWidthArgs) ) {
          tableWidthArgs[2] = getTableWidth$();
          pub(tableWidthArgs);
        }
        return;
    
    
      case "searchView":
        searchView_isSet_ = false;
        Object[] searchViewArgs = new Object[] { "propertyChange", "searchView", null };
        if ( hasListeners(searchViewArgs) ) {
          searchViewArgs[2] = getSearchView$();
          pub(searchViewArgs);
        }
        return;
    
    
      case "chartJsFormatter":
        chartJsFormatter_isSet_ = false;
        Object[] chartJsFormatterArgs = new Object[] { "propertyChange", "chartJsFormatter", null };
        if ( hasListeners(chartJsFormatterArgs) ) {
          chartJsFormatterArgs[2] = getChartJsFormatter$();
          pub(chartJsFormatterArgs);
        }
        return;
    
    
      case "androidValue":
        androidValue_isSet_ = false;
        Object[] androidValueArgs = new Object[] { "propertyChange", "androidValue", null };
        if ( hasListeners(androidValueArgs) ) {
          androidValueArgs[2] = getAndroidValue$();
          pub(androidValueArgs);
        }
        return;
    
    
      case "androidExpressionArgs":
        androidExpressionArgs_isSet_ = false;
        Object[] androidExpressionArgsArgs = new Object[] { "propertyChange", "androidExpressionArgs", null };
        if ( hasListeners(androidExpressionArgsArgs) ) {
          androidExpressionArgsArgs[2] = getAndroidExpressionArgs$();
          pub(androidExpressionArgsArgs);
        }
        return;
    
    
      case "androidExpression":
        androidExpression_isSet_ = false;
        Object[] androidExpressionArgs = new Object[] { "propertyChange", "androidExpression", null };
        if ( hasListeners(androidExpressionArgs) ) {
          androidExpressionArgs[2] = getAndroidExpression$();
          pub(androidExpressionArgs);
        }
        return;
    
    
      case "androidType":
        androidType_isSet_ = false;
        Object[] androidTypeArgs = new Object[] { "propertyChange", "androidType", null };
        if ( hasListeners(androidTypeArgs) ) {
          androidTypeArgs[2] = getAndroidType$();
          pub(androidTypeArgs);
        }
        return;
    
    
      case "androidAxiomName":
        androidAxiomName_isSet_ = false;
        Object[] androidAxiomNameArgs = new Object[] { "propertyChange", "androidAxiomName", null };
        if ( hasListeners(androidAxiomNameArgs) ) {
          androidAxiomNameArgs[2] = getAndroidAxiomName$();
          pub(androidAxiomNameArgs);
        }
        return;
    
    
      case "androidAxiomInitializerName":
        androidAxiomInitializerName_isSet_ = false;
        Object[] androidAxiomInitializerNameArgs = new Object[] { "propertyChange", "androidAxiomInitializerName", null };
        if ( hasListeners(androidAxiomInitializerNameArgs) ) {
          androidAxiomInitializerNameArgs[2] = getAndroidAxiomInitializerName$();
          pub(androidAxiomInitializerNameArgs);
        }
        return;
    
    
      case "androidSlotVarName":
        androidSlotVarName_isSet_ = false;
        Object[] androidSlotVarNameArgs = new Object[] { "propertyChange", "androidSlotVarName", null };
        if ( hasListeners(androidSlotVarNameArgs) ) {
          androidSlotVarNameArgs[2] = getAndroidSlotVarName$();
          pub(androidSlotVarNameArgs);
        }
        return;
    
    
      case "androidSlotGetterName":
        androidSlotGetterName_isSet_ = false;
        Object[] androidSlotGetterNameArgs = new Object[] { "propertyChange", "androidSlotGetterName", null };
        if ( hasListeners(androidSlotGetterNameArgs) ) {
          androidSlotGetterNameArgs[2] = getAndroidSlotGetterName$();
          pub(androidSlotGetterNameArgs);
        }
        return;
    
    
      case "androidGetter":
        androidGetter_isSet_ = false;
        Object[] androidGetterArgs = new Object[] { "propertyChange", "androidGetter", null };
        if ( hasListeners(androidGetterArgs) ) {
          androidGetterArgs[2] = getAndroidGetter$();
          pub(androidGetterArgs);
        }
        return;
    
    
      case "androidPrivateVarName":
        androidPrivateVarName_isSet_ = false;
        Object[] androidPrivateVarNameArgs = new Object[] { "propertyChange", "androidPrivateVarName", null };
        if ( hasListeners(androidPrivateVarNameArgs) ) {
          androidPrivateVarNameArgs[2] = getAndroidPrivateVarName$();
          pub(androidPrivateVarNameArgs);
        }
        return;
    
    
      case "androidSetter":
        androidSetter_isSet_ = false;
        Object[] androidSetterArgs = new Object[] { "propertyChange", "androidSetter", null };
        if ( hasListeners(androidSetterArgs) ) {
          androidSetterArgs[2] = getAndroidSetter$();
          pub(androidSetterArgs);
        }
        return;
    
    
      case "androidPreSet":
        androidPreSet_isSet_ = false;
        Object[] androidPreSetArgs = new Object[] { "propertyChange", "androidPreSet", null };
        if ( hasListeners(androidPreSetArgs) ) {
          androidPreSetArgs[2] = getAndroidPreSet$();
          pub(androidPreSetArgs);
        }
        return;
    
    
      case "androidPostSet":
        androidPostSet_isSet_ = false;
        Object[] androidPostSetArgs = new Object[] { "propertyChange", "androidPostSet", null };
        if ( hasListeners(androidPostSetArgs) ) {
          androidPostSetArgs[2] = getAndroidPostSet$();
          pub(androidPostSetArgs);
        }
        return;
    
    
      case "androidAdapt":
        androidAdapt_isSet_ = false;
        Object[] androidAdaptArgs = new Object[] { "propertyChange", "androidAdapt", null };
        if ( hasListeners(androidAdaptArgs) ) {
          androidAdaptArgs[2] = getAndroidAdapt$();
          pub(androidAdaptArgs);
        }
        return;
    
    
      case "androidFactory":
        androidFactory_isSet_ = false;
        Object[] androidFactoryArgs = new Object[] { "propertyChange", "androidFactory", null };
        if ( hasListeners(androidFactoryArgs) ) {
          androidFactoryArgs[2] = getAndroidFactory$();
          pub(androidFactoryArgs);
        }
        return;
    
    
      case "androidIsSetVarName":
        androidIsSetVarName_isSet_ = false;
        Object[] androidIsSetVarNameArgs = new Object[] { "propertyChange", "androidIsSetVarName", null };
        if ( hasListeners(androidIsSetVarNameArgs) ) {
          androidIsSetVarNameArgs[2] = getAndroidIsSetVarName$();
          pub(androidIsSetVarNameArgs);
        }
        return;
    
    
      case "androidGetterName":
        androidGetterName_isSet_ = false;
        Object[] androidGetterNameArgs = new Object[] { "propertyChange", "androidGetterName", null };
        if ( hasListeners(androidGetterNameArgs) ) {
          androidGetterNameArgs[2] = getAndroidGetterName$();
          pub(androidGetterNameArgs);
        }
        return;
    
    
      case "androidSetterName":
        androidSetterName_isSet_ = false;
        Object[] androidSetterNameArgs = new Object[] { "propertyChange", "androidSetterName", null };
        if ( hasListeners(androidSetterNameArgs) ) {
          androidSetterNameArgs[2] = getAndroidSetterName$();
          pub(androidSetterNameArgs);
        }
        return;
    
    
      case "androidFAsAndroidValue":
        androidFAsAndroidValue_isSet_ = false;
        Object[] androidFAsAndroidValueArgs = new Object[] { "propertyChange", "androidFAsAndroidValue", null };
        if ( hasListeners(androidFAsAndroidValueArgs) ) {
          androidFAsAndroidValueArgs[2] = getAndroidFAsAndroidValue$();
          pub(androidFAsAndroidValueArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "of":
        return getOf();
    
    
      case "type":
        return getType();
    
    
      case "hidden":
        return getHidden();
    
    
      case "adapt":
        return getAdapt();
    
    
      case "assertValue":
        return getAssertValue();
    
    
      case "adaptArrayElement":
        return getAdaptArrayElement();
    
    
      case "postSet":
        return getPostSet();
    
    
      case "name":
        return getName();
    
    
      case "label":
        return getLabel();
    
    
      case "documentation":
        return getDocumentation();
    
    
      case "help":
        return getHelp();
    
    
      case "order":
        return getOrder();
    
    
      case "value":
        return getValue();
    
    
      case "factory":
        return getFactory();
    
    
      case "preSet":
        return getPreSet();
    
    
      case "expression":
        return getExpression();
    
    
      case "getter":
        return getGetter();
    
    
      case "setter":
        return getSetter();
    
    
      case "cloneProperty":
        return getCloneProperty();
    
    
      case "final":
        return getFinal();
    
    
      case "required":
        return getRequired();
    
    
      case "permissionRequired":
        return getPermissionRequired();
    
    
      case "flags":
        return getFlags();
    
    
      case "fromString":
        return getFromString();
    
    
      case "comparePropertyValues":
        return getComparePropertyValues();
    
    
      case "isDefaultValue":
        return getIsDefaultValue();
    
    
      case "diffPropertyValues":
        return getDiffPropertyValues();
    
    
      case "diffProperty":
        return getDiffProperty();
    
    
      case "forClass_":
        return getForClass_();
    
    
      case "containsPII":
        return getContainsPII();
    
    
      case "containsDeletablePII":
        return getContainsDeletablePII();
    
    
      case "gridColumns":
        return getGridColumns();
    
    
      case "section":
        return getSection();
    
    
      case "transient":
        return getTransient();
    
    
      case "networkTransient":
        return getNetworkTransient();
    
    
      case "storageTransient":
        return getStorageTransient();
    
    
      case "validationPredicates":
        return getValidationPredicates();
    
    
      case "validateObj":
        return getValidateObj();
    
    
      case "shortName":
        return getShortName();
    
    
      case "source":
        return getSource();
    
    
      case "fromJSON":
        return getFromJSON();
    
    
      case "toJSON":
        return getToJSON();
    
    
      case "xmlAttribute":
        return getXmlAttribute();
    
    
      case "xmlTextNode":
        return getXmlTextNode();
    
    
      case "fromXML":
        return getFromXML();
    
    
      case "toXML":
        return getToXML();
    
    
      case "fromCSVLabelMapping":
        return getFromCSVLabelMapping();
    
    
      case "swiftVarName":
        return getSwiftVarName();
    
    
      case "swiftView":
        return getSwiftView();
    
    
      case "swiftSlotLinkSubName":
        return getSwiftSlotLinkSubName();
    
    
      case "swiftSlotValueName":
        return getSwiftSlotValueName();
    
    
      case "swiftSlotName":
        return getSwiftSlotName();
    
    
      case "swiftInitedName":
        return getSwiftInitedName();
    
    
      case "swiftValueName":
        return getSwiftValueName();
    
    
      case "swiftValueType":
        return getSwiftValueType();
    
    
      case "swiftRequiresEscaping":
        return getSwiftRequiresEscaping();
    
    
      case "swiftOptional":
        return getSwiftOptional();
    
    
      case "swiftFactory":
        return getSwiftFactory();
    
    
      case "swiftFactoryName":
        return getSwiftFactoryName();
    
    
      case "swiftValue":
        return getSwiftValue();
    
    
      case "swiftGetter":
        return getSwiftGetter();
    
    
      case "swiftSetter":
        return getSwiftSetter();
    
    
      case "swiftPreSet":
        return getSwiftPreSet();
    
    
      case "swiftPreSetFuncName":
        return getSwiftPreSetFuncName();
    
    
      case "swiftPostSet":
        return getSwiftPostSet();
    
    
      case "swiftPostSetFuncName":
        return getSwiftPostSetFuncName();
    
    
      case "swiftExpressionArgs":
        return getSwiftExpressionArgs();
    
    
      case "swiftExpression":
        return getSwiftExpression();
    
    
      case "swiftExpressionSubscriptionName":
        return getSwiftExpressionSubscriptionName();
    
    
      case "swiftAdapt":
        return getSwiftAdapt();
    
    
      case "swiftAdaptFuncName":
        return getSwiftAdaptFuncName();
    
    
      case "swiftPrivateAxiomName":
        return getSwiftPrivateAxiomName();
    
    
      case "swiftAxiomName":
        return getSwiftAxiomName();
    
    
      case "swiftToJSON":
        return getSwiftToJSON();
    
    
      case "swiftSupport":
        return getSwiftSupport();
    
    
      case "swiftJsonParser":
        return getSwiftJsonParser();
    
    
      case "swiftWeak":
        return getSwiftWeak();
    
    
      case "generateJava":
        return getGenerateJava();
    
    
      case "javaJSONParser":
        return getJavaJSONParser();
    
    
      case "javaQueryParser":
        return getJavaQueryParser();
    
    
      case "javaCSVParser":
        return getJavaCSVParser();
    
    
      case "javaInfoType":
        return getJavaInfoType();
    
    
      case "javaFactory":
        return getJavaFactory();
    
    
      case "javaGetter":
        return getJavaGetter();
    
    
      case "javaSetter":
        return getJavaSetter();
    
    
      case "javaPreSet":
        return getJavaPreSet();
    
    
      case "javaPostSet":
        return getJavaPostSet();
    
    
      case "aliases":
        return getAliases();
    
    
      case "javaCloneProperty":
        return getJavaCloneProperty();
    
    
      case "javaDiffProperty":
        return getJavaDiffProperty();
    
    
      case "javaCompare":
        return getJavaCompare();
    
    
      case "javaComparePropertyToObject":
        return getJavaComparePropertyToObject();
    
    
      case "javaComparePropertyToValue":
        return getJavaComparePropertyToValue();
    
    
      case "javaAssertValue":
        return getJavaAssertValue();
    
    
      case "javaValue":
        return getJavaValue();
    
    
      case "includeInDigest":
        return getIncludeInDigest();
    
    
      case "includeInSignature":
        return getIncludeInSignature();
    
    
      case "javaValidateObj":
        return getJavaValidateObj();
    
    
      case "javaFromCSVLabelMapping":
        return getJavaFromCSVLabelMapping();
    
    
      case "javaToCSV":
        return getJavaToCSV();
    
    
      case "javaToCSVLabel":
        return getJavaToCSVLabel();
    
    
      case "attribute":
        return getAttribute();
    
    
      case "placeholder":
        return getPlaceholder();
    
    
      case "view":
        return getView();
    
    
      case "visibility":
        return getVisibility();
    
    
      case "visibilityExpression":
        return getVisibilityExpression();
    
    
      case "validationTextVisible":
        return getValidationTextVisible();
    
    
      case "validationStyleEnabled":
        return getValidationStyleEnabled();
    
    
      case "toCSV":
        return getToCSV();
    
    
      case "toCSVLabel":
        return getToCSVLabel();
    
    
      case "columnLabel":
        return getColumnLabel();
    
    
      case "tableCellView":
        return getTableCellView();
    
    
      case "tableHeaderFormatter":
        return getTableHeaderFormatter();
    
    
      case "tableCellFormatter":
        return getTableCellFormatter();
    
    
      case "tableWidth":
        return getTableWidth();
    
    
      case "searchView":
        return getSearchView();
    
    
      case "chartJsFormatter":
        return getChartJsFormatter();
    
    
      case "androidValue":
        return getAndroidValue();
    
    
      case "androidExpressionArgs":
        return getAndroidExpressionArgs();
    
    
      case "androidExpression":
        return getAndroidExpression();
    
    
      case "androidType":
        return getAndroidType();
    
    
      case "androidAxiomName":
        return getAndroidAxiomName();
    
    
      case "androidAxiomInitializerName":
        return getAndroidAxiomInitializerName();
    
    
      case "androidSlotVarName":
        return getAndroidSlotVarName();
    
    
      case "androidSlotGetterName":
        return getAndroidSlotGetterName();
    
    
      case "androidGetter":
        return getAndroidGetter();
    
    
      case "androidPrivateVarName":
        return getAndroidPrivateVarName();
    
    
      case "androidSetter":
        return getAndroidSetter();
    
    
      case "androidPreSet":
        return getAndroidPreSet();
    
    
      case "androidPostSet":
        return getAndroidPostSet();
    
    
      case "androidAdapt":
        return getAndroidAdapt();
    
    
      case "androidFactory":
        return getAndroidFactory();
    
    
      case "androidIsSetVarName":
        return getAndroidIsSetVarName();
    
    
      case "androidGetterName":
        return getAndroidGetterName();
    
    
      case "androidSetterName":
        return getAndroidSetterName();
    
    
      case "androidFAsAndroidValue":
        return getAndroidFAsAndroidValue();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "of":
        return getOf$();
    
    
      case "type":
        return getType$();
    
    
      case "hidden":
        return getHidden$();
    
    
      case "adapt":
        return getAdapt$();
    
    
      case "assertValue":
        return getAssertValue$();
    
    
      case "adaptArrayElement":
        return getAdaptArrayElement$();
    
    
      case "postSet":
        return getPostSet$();
    
    
      case "name":
        return getName$();
    
    
      case "label":
        return getLabel$();
    
    
      case "documentation":
        return getDocumentation$();
    
    
      case "help":
        return getHelp$();
    
    
      case "order":
        return getOrder$();
    
    
      case "value":
        return getValue$();
    
    
      case "factory":
        return getFactory$();
    
    
      case "preSet":
        return getPreSet$();
    
    
      case "expression":
        return getExpression$();
    
    
      case "getter":
        return getGetter$();
    
    
      case "setter":
        return getSetter$();
    
    
      case "cloneProperty":
        return getCloneProperty$();
    
    
      case "final":
        return getFinal$();
    
    
      case "required":
        return getRequired$();
    
    
      case "permissionRequired":
        return getPermissionRequired$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "fromString":
        return getFromString$();
    
    
      case "comparePropertyValues":
        return getComparePropertyValues$();
    
    
      case "isDefaultValue":
        return getIsDefaultValue$();
    
    
      case "diffPropertyValues":
        return getDiffPropertyValues$();
    
    
      case "diffProperty":
        return getDiffProperty$();
    
    
      case "forClass_":
        return getForClass_$();
    
    
      case "containsPII":
        return getContainsPII$();
    
    
      case "containsDeletablePII":
        return getContainsDeletablePII$();
    
    
      case "gridColumns":
        return getGridColumns$();
    
    
      case "section":
        return getSection$();
    
    
      case "transient":
        return getTransient$();
    
    
      case "networkTransient":
        return getNetworkTransient$();
    
    
      case "storageTransient":
        return getStorageTransient$();
    
    
      case "validationPredicates":
        return getValidationPredicates$();
    
    
      case "validateObj":
        return getValidateObj$();
    
    
      case "shortName":
        return getShortName$();
    
    
      case "source":
        return getSource$();
    
    
      case "fromJSON":
        return getFromJSON$();
    
    
      case "toJSON":
        return getToJSON$();
    
    
      case "xmlAttribute":
        return getXmlAttribute$();
    
    
      case "xmlTextNode":
        return getXmlTextNode$();
    
    
      case "fromXML":
        return getFromXML$();
    
    
      case "toXML":
        return getToXML$();
    
    
      case "fromCSVLabelMapping":
        return getFromCSVLabelMapping$();
    
    
      case "swiftVarName":
        return getSwiftVarName$();
    
    
      case "swiftView":
        return getSwiftView$();
    
    
      case "swiftSlotLinkSubName":
        return getSwiftSlotLinkSubName$();
    
    
      case "swiftSlotValueName":
        return getSwiftSlotValueName$();
    
    
      case "swiftSlotName":
        return getSwiftSlotName$();
    
    
      case "swiftInitedName":
        return getSwiftInitedName$();
    
    
      case "swiftValueName":
        return getSwiftValueName$();
    
    
      case "swiftValueType":
        return getSwiftValueType$();
    
    
      case "swiftRequiresEscaping":
        return getSwiftRequiresEscaping$();
    
    
      case "swiftOptional":
        return getSwiftOptional$();
    
    
      case "swiftFactory":
        return getSwiftFactory$();
    
    
      case "swiftFactoryName":
        return getSwiftFactoryName$();
    
    
      case "swiftValue":
        return getSwiftValue$();
    
    
      case "swiftGetter":
        return getSwiftGetter$();
    
    
      case "swiftSetter":
        return getSwiftSetter$();
    
    
      case "swiftPreSet":
        return getSwiftPreSet$();
    
    
      case "swiftPreSetFuncName":
        return getSwiftPreSetFuncName$();
    
    
      case "swiftPostSet":
        return getSwiftPostSet$();
    
    
      case "swiftPostSetFuncName":
        return getSwiftPostSetFuncName$();
    
    
      case "swiftExpressionArgs":
        return getSwiftExpressionArgs$();
    
    
      case "swiftExpression":
        return getSwiftExpression$();
    
    
      case "swiftExpressionSubscriptionName":
        return getSwiftExpressionSubscriptionName$();
    
    
      case "swiftAdapt":
        return getSwiftAdapt$();
    
    
      case "swiftAdaptFuncName":
        return getSwiftAdaptFuncName$();
    
    
      case "swiftPrivateAxiomName":
        return getSwiftPrivateAxiomName$();
    
    
      case "swiftAxiomName":
        return getSwiftAxiomName$();
    
    
      case "swiftToJSON":
        return getSwiftToJSON$();
    
    
      case "swiftSupport":
        return getSwiftSupport$();
    
    
      case "swiftJsonParser":
        return getSwiftJsonParser$();
    
    
      case "swiftWeak":
        return getSwiftWeak$();
    
    
      case "generateJava":
        return getGenerateJava$();
    
    
      case "javaJSONParser":
        return getJavaJSONParser$();
    
    
      case "javaQueryParser":
        return getJavaQueryParser$();
    
    
      case "javaCSVParser":
        return getJavaCSVParser$();
    
    
      case "javaInfoType":
        return getJavaInfoType$();
    
    
      case "javaFactory":
        return getJavaFactory$();
    
    
      case "javaGetter":
        return getJavaGetter$();
    
    
      case "javaSetter":
        return getJavaSetter$();
    
    
      case "javaPreSet":
        return getJavaPreSet$();
    
    
      case "javaPostSet":
        return getJavaPostSet$();
    
    
      case "aliases":
        return getAliases$();
    
    
      case "javaCloneProperty":
        return getJavaCloneProperty$();
    
    
      case "javaDiffProperty":
        return getJavaDiffProperty$();
    
    
      case "javaCompare":
        return getJavaCompare$();
    
    
      case "javaComparePropertyToObject":
        return getJavaComparePropertyToObject$();
    
    
      case "javaComparePropertyToValue":
        return getJavaComparePropertyToValue$();
    
    
      case "javaAssertValue":
        return getJavaAssertValue$();
    
    
      case "javaValue":
        return getJavaValue$();
    
    
      case "includeInDigest":
        return getIncludeInDigest$();
    
    
      case "includeInSignature":
        return getIncludeInSignature$();
    
    
      case "javaValidateObj":
        return getJavaValidateObj$();
    
    
      case "javaFromCSVLabelMapping":
        return getJavaFromCSVLabelMapping$();
    
    
      case "javaToCSV":
        return getJavaToCSV$();
    
    
      case "javaToCSVLabel":
        return getJavaToCSVLabel$();
    
    
      case "attribute":
        return getAttribute$();
    
    
      case "placeholder":
        return getPlaceholder$();
    
    
      case "view":
        return getView$();
    
    
      case "visibility":
        return getVisibility$();
    
    
      case "visibilityExpression":
        return getVisibilityExpression$();
    
    
      case "validationTextVisible":
        return getValidationTextVisible$();
    
    
      case "validationStyleEnabled":
        return getValidationStyleEnabled$();
    
    
      case "toCSV":
        return getToCSV$();
    
    
      case "toCSVLabel":
        return getToCSVLabel$();
    
    
      case "columnLabel":
        return getColumnLabel$();
    
    
      case "tableCellView":
        return getTableCellView$();
    
    
      case "tableHeaderFormatter":
        return getTableHeaderFormatter$();
    
    
      case "tableCellFormatter":
        return getTableCellFormatter$();
    
    
      case "tableWidth":
        return getTableWidth$();
    
    
      case "searchView":
        return getSearchView$();
    
    
      case "chartJsFormatter":
        return getChartJsFormatter$();
    
    
      case "androidValue":
        return getAndroidValue$();
    
    
      case "androidExpressionArgs":
        return getAndroidExpressionArgs$();
    
    
      case "androidExpression":
        return getAndroidExpression$();
    
    
      case "androidType":
        return getAndroidType$();
    
    
      case "androidAxiomName":
        return getAndroidAxiomName$();
    
    
      case "androidAxiomInitializerName":
        return getAndroidAxiomInitializerName$();
    
    
      case "androidSlotVarName":
        return getAndroidSlotVarName$();
    
    
      case "androidSlotGetterName":
        return getAndroidSlotGetterName$();
    
    
      case "androidGetter":
        return getAndroidGetter$();
    
    
      case "androidPrivateVarName":
        return getAndroidPrivateVarName$();
    
    
      case "androidSetter":
        return getAndroidSetter$();
    
    
      case "androidPreSet":
        return getAndroidPreSet$();
    
    
      case "androidPostSet":
        return getAndroidPostSet$();
    
    
      case "androidAdapt":
        return getAndroidAdapt$();
    
    
      case "androidFactory":
        return getAndroidFactory$();
    
    
      case "androidIsSetVarName":
        return getAndroidIsSetVarName$();
    
    
      case "androidGetterName":
        return getAndroidGetterName$();
    
    
      case "androidSetterName":
        return getAndroidSetterName$();
    
    
      case "androidFAsAndroidValue":
        return getAndroidFAsAndroidValue$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "of":
        return of_isSet_;
    
    
      case "type":
        return type_isSet_;
    
    
      case "hidden":
        return hidden_isSet_;
    
    
      case "adapt":
        return adapt_isSet_;
    
    
      case "assertValue":
        return assertValue_isSet_;
    
    
      case "adaptArrayElement":
        return adaptArrayElement_isSet_;
    
    
      case "postSet":
        return postSet_isSet_;
    
    
      case "name":
        return name_isSet_;
    
    
      case "label":
        return label_isSet_;
    
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "help":
        return help_isSet_;
    
    
      case "order":
        return order_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    
      case "factory":
        return factory_isSet_;
    
    
      case "preSet":
        return preSet_isSet_;
    
    
      case "expression":
        return expression_isSet_;
    
    
      case "getter":
        return getter_isSet_;
    
    
      case "setter":
        return setter_isSet_;
    
    
      case "cloneProperty":
        return cloneProperty_isSet_;
    
    
      case "final":
        return final_isSet_;
    
    
      case "required":
        return required_isSet_;
    
    
      case "permissionRequired":
        return permissionRequired_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "fromString":
        return fromString_isSet_;
    
    
      case "comparePropertyValues":
        return comparePropertyValues_isSet_;
    
    
      case "isDefaultValue":
        return isDefaultValue_isSet_;
    
    
      case "diffPropertyValues":
        return diffPropertyValues_isSet_;
    
    
      case "diffProperty":
        return diffProperty_isSet_;
    
    
      case "forClass_":
        return forClass__isSet_;
    
    
      case "containsPII":
        return containsPII_isSet_;
    
    
      case "containsDeletablePII":
        return containsDeletablePII_isSet_;
    
    
      case "gridColumns":
        return gridColumns_isSet_;
    
    
      case "section":
        return section_isSet_;
    
    
      case "transient":
        return transient_isSet_;
    
    
      case "networkTransient":
        return networkTransient_isSet_;
    
    
      case "storageTransient":
        return storageTransient_isSet_;
    
    
      case "validationPredicates":
        return validationPredicates_isSet_;
    
    
      case "validateObj":
        return validateObj_isSet_;
    
    
      case "shortName":
        return shortName_isSet_;
    
    
      case "source":
        return source_isSet_;
    
    
      case "fromJSON":
        return fromJSON_isSet_;
    
    
      case "toJSON":
        return toJSON_isSet_;
    
    
      case "xmlAttribute":
        return xmlAttribute_isSet_;
    
    
      case "xmlTextNode":
        return xmlTextNode_isSet_;
    
    
      case "fromXML":
        return fromXML_isSet_;
    
    
      case "toXML":
        return toXML_isSet_;
    
    
      case "fromCSVLabelMapping":
        return fromCSVLabelMapping_isSet_;
    
    
      case "swiftVarName":
        return swiftVarName_isSet_;
    
    
      case "swiftView":
        return swiftView_isSet_;
    
    
      case "swiftSlotLinkSubName":
        return swiftSlotLinkSubName_isSet_;
    
    
      case "swiftSlotValueName":
        return swiftSlotValueName_isSet_;
    
    
      case "swiftSlotName":
        return swiftSlotName_isSet_;
    
    
      case "swiftInitedName":
        return swiftInitedName_isSet_;
    
    
      case "swiftValueName":
        return swiftValueName_isSet_;
    
    
      case "swiftValueType":
        return swiftValueType_isSet_;
    
    
      case "swiftRequiresEscaping":
        return swiftRequiresEscaping_isSet_;
    
    
      case "swiftOptional":
        return swiftOptional_isSet_;
    
    
      case "swiftFactory":
        return swiftFactory_isSet_;
    
    
      case "swiftFactoryName":
        return swiftFactoryName_isSet_;
    
    
      case "swiftValue":
        return swiftValue_isSet_;
    
    
      case "swiftGetter":
        return swiftGetter_isSet_;
    
    
      case "swiftSetter":
        return swiftSetter_isSet_;
    
    
      case "swiftPreSet":
        return swiftPreSet_isSet_;
    
    
      case "swiftPreSetFuncName":
        return swiftPreSetFuncName_isSet_;
    
    
      case "swiftPostSet":
        return swiftPostSet_isSet_;
    
    
      case "swiftPostSetFuncName":
        return swiftPostSetFuncName_isSet_;
    
    
      case "swiftExpressionArgs":
        return swiftExpressionArgs_isSet_;
    
    
      case "swiftExpression":
        return swiftExpression_isSet_;
    
    
      case "swiftExpressionSubscriptionName":
        return swiftExpressionSubscriptionName_isSet_;
    
    
      case "swiftAdapt":
        return swiftAdapt_isSet_;
    
    
      case "swiftAdaptFuncName":
        return swiftAdaptFuncName_isSet_;
    
    
      case "swiftPrivateAxiomName":
        return swiftPrivateAxiomName_isSet_;
    
    
      case "swiftAxiomName":
        return swiftAxiomName_isSet_;
    
    
      case "swiftToJSON":
        return swiftToJSON_isSet_;
    
    
      case "swiftSupport":
        return swiftSupport_isSet_;
    
    
      case "swiftJsonParser":
        return swiftJsonParser_isSet_;
    
    
      case "swiftWeak":
        return swiftWeak_isSet_;
    
    
      case "generateJava":
        return generateJava_isSet_;
    
    
      case "javaJSONParser":
        return javaJSONParser_isSet_;
    
    
      case "javaQueryParser":
        return javaQueryParser_isSet_;
    
    
      case "javaCSVParser":
        return javaCSVParser_isSet_;
    
    
      case "javaInfoType":
        return javaInfoType_isSet_;
    
    
      case "javaFactory":
        return javaFactory_isSet_;
    
    
      case "javaGetter":
        return javaGetter_isSet_;
    
    
      case "javaSetter":
        return javaSetter_isSet_;
    
    
      case "javaPreSet":
        return javaPreSet_isSet_;
    
    
      case "javaPostSet":
        return javaPostSet_isSet_;
    
    
      case "aliases":
        return aliases_isSet_;
    
    
      case "javaCloneProperty":
        return javaCloneProperty_isSet_;
    
    
      case "javaDiffProperty":
        return javaDiffProperty_isSet_;
    
    
      case "javaCompare":
        return javaCompare_isSet_;
    
    
      case "javaComparePropertyToObject":
        return javaComparePropertyToObject_isSet_;
    
    
      case "javaComparePropertyToValue":
        return javaComparePropertyToValue_isSet_;
    
    
      case "javaAssertValue":
        return javaAssertValue_isSet_;
    
    
      case "javaValue":
        return javaValue_isSet_;
    
    
      case "includeInDigest":
        return includeInDigest_isSet_;
    
    
      case "includeInSignature":
        return includeInSignature_isSet_;
    
    
      case "javaValidateObj":
        return javaValidateObj_isSet_;
    
    
      case "javaFromCSVLabelMapping":
        return javaFromCSVLabelMapping_isSet_;
    
    
      case "javaToCSV":
        return javaToCSV_isSet_;
    
    
      case "javaToCSVLabel":
        return javaToCSVLabel_isSet_;
    
    
      case "attribute":
        return attribute_isSet_;
    
    
      case "placeholder":
        return placeholder_isSet_;
    
    
      case "view":
        return view_isSet_;
    
    
      case "visibility":
        return visibility_isSet_;
    
    
      case "visibilityExpression":
        return visibilityExpression_isSet_;
    
    
      case "validationTextVisible":
        return validationTextVisible_isSet_;
    
    
      case "validationStyleEnabled":
        return validationStyleEnabled_isSet_;
    
    
      case "toCSV":
        return toCSV_isSet_;
    
    
      case "toCSVLabel":
        return toCSVLabel_isSet_;
    
    
      case "columnLabel":
        return columnLabel_isSet_;
    
    
      case "tableCellView":
        return tableCellView_isSet_;
    
    
      case "tableHeaderFormatter":
        return tableHeaderFormatter_isSet_;
    
    
      case "tableCellFormatter":
        return tableCellFormatter_isSet_;
    
    
      case "tableWidth":
        return tableWidth_isSet_;
    
    
      case "searchView":
        return searchView_isSet_;
    
    
      case "chartJsFormatter":
        return chartJsFormatter_isSet_;
    
    
      case "androidValue":
        return androidValue_isSet_;
    
    
      case "androidExpressionArgs":
        return androidExpressionArgs_isSet_;
    
    
      case "androidExpression":
        return androidExpression_isSet_;
    
    
      case "androidType":
        return androidType_isSet_;
    
    
      case "androidAxiomName":
        return androidAxiomName_isSet_;
    
    
      case "androidAxiomInitializerName":
        return androidAxiomInitializerName_isSet_;
    
    
      case "androidSlotVarName":
        return androidSlotVarName_isSet_;
    
    
      case "androidSlotGetterName":
        return androidSlotGetterName_isSet_;
    
    
      case "androidGetter":
        return androidGetter_isSet_;
    
    
      case "androidPrivateVarName":
        return androidPrivateVarName_isSet_;
    
    
      case "androidSetter":
        return androidSetter_isSet_;
    
    
      case "androidPreSet":
        return androidPreSet_isSet_;
    
    
      case "androidPostSet":
        return androidPostSet_isSet_;
    
    
      case "androidAdapt":
        return androidAdapt_isSet_;
    
    
      case "androidFactory":
        return androidFactory_isSet_;
    
    
      case "androidIsSetVarName":
        return androidIsSetVarName_isSet_;
    
    
      case "androidGetterName":
        return androidGetterName_isSet_;
    
    
      case "androidSetterName":
        return androidSetterName_isSet_;
    
    
      case "androidFAsAndroidValue":
        return androidFAsAndroidValue_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "of":
        setOf((Object) value);
        return;
    
    
      case "type":
        setType((Object) value);
        return;
    
    
      case "hidden":
        setHidden((Object) value);
        return;
    
    
      case "adapt":
        setAdapt((Object) value);
        return;
    
    
      case "assertValue":
        setAssertValue((Object) value);
        return;
    
    
      case "adaptArrayElement":
        setAdaptArrayElement((Object) value);
        return;
    
    
      case "postSet":
        setPostSet((Object) value);
        return;
    
    
      case "name":
        setName((String) value);
        return;
    
    
      case "label":
        setLabel((Object) value);
        return;
    
    
      case "documentation":
        setDocumentation((Object) value);
        return;
    
    
      case "help":
        setHelp((Object) value);
        return;
    
    
      case "order":
        setOrder((long) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    
      case "factory":
        setFactory((Object) value);
        return;
    
    
      case "preSet":
        setPreSet((Object) value);
        return;
    
    
      case "expression":
        setExpression((Object) value);
        return;
    
    
      case "getter":
        setGetter((Object) value);
        return;
    
    
      case "setter":
        setSetter((Object) value);
        return;
    
    
      case "cloneProperty":
        setCloneProperty((Object) value);
        return;
    
    
      case "final":
        setFinal((Object) value);
        return;
    
    
      case "required":
        setRequired((Object) value);
        return;
    
    
      case "permissionRequired":
        setPermissionRequired((Object) value);
        return;
    
    
      case "flags":
        setFlags((Object) value);
        return;
    
    
      case "fromString":
        setFromString((Object) value);
        return;
    
    
      case "comparePropertyValues":
        setComparePropertyValues((Object) value);
        return;
    
    
      case "isDefaultValue":
        setIsDefaultValue((Object) value);
        return;
    
    
      case "diffPropertyValues":
        setDiffPropertyValues((Object) value);
        return;
    
    
      case "diffProperty":
        setDiffProperty((Object) value);
        return;
    
    
      case "forClass_":
        setForClass_((Object) value);
        return;
    
    
      case "containsPII":
        setContainsPII((Object) value);
        return;
    
    
      case "containsDeletablePII":
        setContainsDeletablePII((Object) value);
        return;
    
    
      case "gridColumns":
        setGridColumns((Object) value);
        return;
    
    
      case "section":
        setSection((String) value);
        return;
    
    
      case "transient":
        setTransient((boolean) value);
        return;
    
    
      case "networkTransient":
        setNetworkTransient((boolean) value);
        return;
    
    
      case "storageTransient":
        setStorageTransient((boolean) value);
        return;
    
    
      case "validationPredicates":
        setValidationPredicates((foam.core.ValidationPredicate[]) value);
        return;
    
    
      case "validateObj":
        setValidateObj((Object) value);
        return;
    
    
      case "shortName":
        setShortName((String) value);
        return;
    
    
      case "source":
        setSource((Object) value);
        return;
    
    
      case "fromJSON":
        setFromJSON((Object) value);
        return;
    
    
      case "toJSON":
        setToJSON((Object) value);
        return;
    
    
      case "xmlAttribute":
        setXmlAttribute((boolean) value);
        return;
    
    
      case "xmlTextNode":
        setXmlTextNode((boolean) value);
        return;
    
    
      case "fromXML":
        setFromXML((Object) value);
        return;
    
    
      case "toXML":
        setToXML((Object) value);
        return;
    
    
      case "fromCSVLabelMapping":
        setFromCSVLabelMapping((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "swiftVarName":
        setSwiftVarName((String) value);
        return;
    
    
      case "swiftView":
        setSwiftView((String) value);
        return;
    
    
      case "swiftSlotLinkSubName":
        setSwiftSlotLinkSubName((String) value);
        return;
    
    
      case "swiftSlotValueName":
        setSwiftSlotValueName((String) value);
        return;
    
    
      case "swiftSlotName":
        setSwiftSlotName((String) value);
        return;
    
    
      case "swiftInitedName":
        setSwiftInitedName((String) value);
        return;
    
    
      case "swiftValueName":
        setSwiftValueName((String) value);
        return;
    
    
      case "swiftValueType":
        setSwiftValueType((String) value);
        return;
    
    
      case "swiftRequiresEscaping":
        setSwiftRequiresEscaping((boolean) value);
        return;
    
    
      case "swiftOptional":
        setSwiftOptional((boolean) value);
        return;
    
    
      case "swiftFactory":
        setSwiftFactory((String) value);
        return;
    
    
      case "swiftFactoryName":
        setSwiftFactoryName((String) value);
        return;
    
    
      case "swiftValue":
        setSwiftValue((String) value);
        return;
    
    
      case "swiftGetter":
        setSwiftGetter((String) value);
        return;
    
    
      case "swiftSetter":
        setSwiftSetter((String) value);
        return;
    
    
      case "swiftPreSet":
        setSwiftPreSet((String) value);
        return;
    
    
      case "swiftPreSetFuncName":
        setSwiftPreSetFuncName((String) value);
        return;
    
    
      case "swiftPostSet":
        setSwiftPostSet((String) value);
        return;
    
    
      case "swiftPostSetFuncName":
        setSwiftPostSetFuncName((String) value);
        return;
    
    
      case "swiftExpressionArgs":
        setSwiftExpressionArgs((String[]) value);
        return;
    
    
      case "swiftExpression":
        setSwiftExpression((String) value);
        return;
    
    
      case "swiftExpressionSubscriptionName":
        setSwiftExpressionSubscriptionName((String) value);
        return;
    
    
      case "swiftAdapt":
        setSwiftAdapt((String) value);
        return;
    
    
      case "swiftAdaptFuncName":
        setSwiftAdaptFuncName((String) value);
        return;
    
    
      case "swiftPrivateAxiomName":
        setSwiftPrivateAxiomName((String) value);
        return;
    
    
      case "swiftAxiomName":
        setSwiftAxiomName((String) value);
        return;
    
    
      case "swiftToJSON":
        setSwiftToJSON((String) value);
        return;
    
    
      case "swiftSupport":
        setSwiftSupport((boolean) value);
        return;
    
    
      case "swiftJsonParser":
        setSwiftJsonParser((String) value);
        return;
    
    
      case "swiftWeak":
        setSwiftWeak((boolean) value);
        return;
    
    
      case "generateJava":
        setGenerateJava((boolean) value);
        return;
    
    
      case "javaJSONParser":
        setJavaJSONParser((String) value);
        return;
    
    
      case "javaQueryParser":
        setJavaQueryParser((String) value);
        return;
    
    
      case "javaCSVParser":
        setJavaCSVParser((String) value);
        return;
    
    
      case "javaInfoType":
        setJavaInfoType((String) value);
        return;
    
    
      case "javaFactory":
        setJavaFactory((String) value);
        return;
    
    
      case "javaGetter":
        setJavaGetter((String) value);
        return;
    
    
      case "javaSetter":
        setJavaSetter((String) value);
        return;
    
    
      case "javaPreSet":
        setJavaPreSet((String) value);
        return;
    
    
      case "javaPostSet":
        setJavaPostSet((String) value);
        return;
    
    
      case "aliases":
        setAliases((String[]) value);
        return;
    
    
      case "javaCloneProperty":
        setJavaCloneProperty((String) value);
        return;
    
    
      case "javaDiffProperty":
        setJavaDiffProperty((String) value);
        return;
    
    
      case "javaCompare":
        setJavaCompare((String) value);
        return;
    
    
      case "javaComparePropertyToObject":
        setJavaComparePropertyToObject((String) value);
        return;
    
    
      case "javaComparePropertyToValue":
        setJavaComparePropertyToValue((String) value);
        return;
    
    
      case "javaAssertValue":
        setJavaAssertValue((String) value);
        return;
    
    
      case "javaValue":
        setJavaValue((String) value);
        return;
    
    
      case "includeInDigest":
        setIncludeInDigest((boolean) value);
        return;
    
    
      case "includeInSignature":
        setIncludeInSignature((boolean) value);
        return;
    
    
      case "javaValidateObj":
        setJavaValidateObj((String) value);
        return;
    
    
      case "javaFromCSVLabelMapping":
        setJavaFromCSVLabelMapping((String) value);
        return;
    
    
      case "javaToCSV":
        setJavaToCSV((String) value);
        return;
    
    
      case "javaToCSVLabel":
        setJavaToCSVLabel((String) value);
        return;
    
    
      case "attribute":
        setAttribute((Object) value);
        return;
    
    
      case "placeholder":
        setPlaceholder((String) value);
        return;
    
    
      case "view":
        setView((Object) value);
        return;
    
    
      case "visibility":
        setVisibility((foam.u2.Visibility) value);
        return;
    
    
      case "visibilityExpression":
        setVisibilityExpression((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "validationTextVisible":
        setValidationTextVisible((boolean) value);
        return;
    
    
      case "validationStyleEnabled":
        setValidationStyleEnabled((boolean) value);
        return;
    
    
      case "toCSV":
        setToCSV((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "toCSVLabel":
        setToCSVLabel((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "columnLabel":
        setColumnLabel((Object) value);
        return;
    
    
      case "tableCellView":
        setTableCellView((Object) value);
        return;
    
    
      case "tableHeaderFormatter":
        setTableHeaderFormatter((Object) value);
        return;
    
    
      case "tableCellFormatter":
        setTableCellFormatter((foam.u2.view.Formatter) value);
        return;
    
    
      case "tableWidth":
        setTableWidth((int) value);
        return;
    
    
      case "searchView":
        setSearchView((Object) value);
        return;
    
    
      case "chartJsFormatter":
        setChartJsFormatter((Object) value);
        return;
    
    
      case "androidValue":
        setAndroidValue((String) value);
        return;
    
    
      case "androidExpressionArgs":
        setAndroidExpressionArgs((String[]) value);
        return;
    
    
      case "androidExpression":
        setAndroidExpression((String) value);
        return;
    
    
      case "androidType":
        setAndroidType((String) value);
        return;
    
    
      case "androidAxiomName":
        setAndroidAxiomName((String) value);
        return;
    
    
      case "androidAxiomInitializerName":
        setAndroidAxiomInitializerName((String) value);
        return;
    
    
      case "androidSlotVarName":
        setAndroidSlotVarName((String) value);
        return;
    
    
      case "androidSlotGetterName":
        setAndroidSlotGetterName((String) value);
        return;
    
    
      case "androidGetter":
        setAndroidGetter((String) value);
        return;
    
    
      case "androidPrivateVarName":
        setAndroidPrivateVarName((String) value);
        return;
    
    
      case "androidSetter":
        setAndroidSetter((String) value);
        return;
    
    
      case "androidPreSet":
        setAndroidPreSet((String) value);
        return;
    
    
      case "androidPostSet":
        setAndroidPostSet((String) value);
        return;
    
    
      case "androidAdapt":
        setAndroidAdapt((String) value);
        return;
    
    
      case "androidFactory":
        setAndroidFactory((String) value);
        return;
    
    
      case "androidIsSetVarName":
        setAndroidIsSetVarName((String) value);
        return;
    
    
      case "androidGetterName":
        setAndroidGetterName((String) value);
        return;
    
    
      case "androidSetterName":
        setAndroidSetterName((String) value);
        return;
    
    
      case "androidFAsAndroidValue":
        setAndroidFAsAndroidValue((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected AxiomArray () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.AxiomArray")
      .setParent(foam.core.Property.CLS_)
      .setAxioms(new Object[] {foam.core.AxiomArray.OF, foam.core.AxiomArray.ADAPT_ARRAY_ELEMENT})
      .build();
  }

  public static Builder AxiomArrayBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean swiftExpressionSubscriptionName_isSet_ =
      false;

    private boolean of_isSet_ =
      false;

    private boolean type_isSet_ =
      false;

    private Object type_;

    private boolean hidden_isSet_ =
      false;

    private Object hidden_;

    private boolean adapt_isSet_ =
      false;

    private Object adapt_;

    private boolean assertValue_isSet_ =
      false;

    private Object assertValue_;

    private boolean adaptArrayElement_isSet_ =
      false;

    private Object adaptArrayElement_;

    private boolean postSet_isSet_ =
      false;

    private Object postSet_;

    private boolean name_isSet_ =
      false;

    private String name_;

    private boolean label_isSet_ =
      false;

    private Object label_;

    private boolean documentation_isSet_ =
      false;

    private Object documentation_;

    private boolean help_isSet_ =
      false;

    private Object help_;

    private boolean order_isSet_ =
      false;

    private long order_;

    private boolean value_isSet_ =
      false;

    private Object value_;

    private boolean factory_isSet_ =
      false;

    private Object factory_;

    private boolean preSet_isSet_ =
      false;

    private Object preSet_;

    private boolean expression_isSet_ =
      false;

    private Object expression_;

    private boolean getter_isSet_ =
      false;

    private Object getter_;

    private boolean setter_isSet_ =
      false;

    private Object setter_;

    private boolean cloneProperty_isSet_ =
      false;

    private Object cloneProperty_;

    private boolean final_isSet_ =
      false;

    private Object final_;

    private boolean required_isSet_ =
      false;

    private Object required_;

    private boolean permissionRequired_isSet_ =
      false;

    private Object permissionRequired_;

    private boolean flags_isSet_ =
      false;

    private Object flags_;

    private boolean fromString_isSet_ =
      false;

    private Object fromString_;

    private boolean comparePropertyValues_isSet_ =
      false;

    private Object comparePropertyValues_;

    private boolean isDefaultValue_isSet_ =
      false;

    private Object isDefaultValue_;

    private boolean diffPropertyValues_isSet_ =
      false;

    private Object diffPropertyValues_;

    private boolean diffProperty_isSet_ =
      false;

    private Object diffProperty_;

    private boolean forClass__isSet_ =
      false;

    private Object forClass__;

    private boolean containsPII_isSet_ =
      false;

    private Object containsPII_;

    private boolean containsDeletablePII_isSet_ =
      false;

    private Object containsDeletablePII_;

    private boolean gridColumns_isSet_ =
      false;

    private Object gridColumns_;

    private boolean section_isSet_ =
      false;

    private String section_;

    private boolean transient_isSet_ =
      false;

    private boolean transient_;

    private boolean networkTransient_isSet_ =
      false;

    private boolean networkTransient_;

    private boolean storageTransient_isSet_ =
      false;

    private boolean storageTransient_;

    private boolean validationPredicates_isSet_ =
      false;

    private foam.core.ValidationPredicate[] validationPredicates_;

    private boolean validateObj_isSet_ =
      false;

    private Object validateObj_;

    private boolean shortName_isSet_ =
      false;

    private String shortName_;

    private boolean source_isSet_ =
      false;

    private Object source_;

    private boolean fromJSON_isSet_ =
      false;

    private Object fromJSON_;

    private boolean toJSON_isSet_ =
      false;

    private Object toJSON_;

    private boolean xmlAttribute_isSet_ =
      false;

    private boolean xmlAttribute_;

    private boolean xmlTextNode_isSet_ =
      false;

    private boolean xmlTextNode_;

    private boolean fromXML_isSet_ =
      false;

    private Object fromXML_;

    private boolean toXML_isSet_ =
      false;

    private Object toXML_;

    private boolean fromCSVLabelMapping_isSet_ =
      false;

    private foam.cross_platform.GenericFunction fromCSVLabelMapping_;

    private boolean swiftVarName_isSet_ =
      false;

    private String swiftVarName_;

    private boolean swiftView_isSet_ =
      false;

    private String swiftView_;

    private boolean swiftSlotLinkSubName_isSet_ =
      false;

    private String swiftSlotLinkSubName_;

    private boolean swiftSlotValueName_isSet_ =
      false;

    private String swiftSlotValueName_;

    private boolean swiftSlotName_isSet_ =
      false;

    private String swiftSlotName_;

    private boolean swiftInitedName_isSet_ =
      false;

    private String swiftInitedName_;

    private boolean swiftValueName_isSet_ =
      false;

    private String swiftValueName_;

    private boolean swiftValueType_isSet_ =
      false;

    private String swiftValueType_;

    private boolean swiftRequiresEscaping_isSet_ =
      false;

    private boolean swiftRequiresEscaping_;

    private boolean swiftOptional_isSet_ =
      false;

    private boolean swiftOptional_;

    private boolean swiftFactory_isSet_ =
      false;

    private String swiftFactory_;

    private boolean swiftFactoryName_isSet_ =
      false;

    private String swiftFactoryName_;

    private boolean swiftValue_isSet_ =
      false;

    private String swiftValue_;

    private boolean swiftGetter_isSet_ =
      false;

    private String swiftGetter_;

    private boolean swiftSetter_isSet_ =
      false;

    private String swiftSetter_;

    private boolean swiftPreSet_isSet_ =
      false;

    private String swiftPreSet_;

    private boolean swiftPreSetFuncName_isSet_ =
      false;

    private String swiftPreSetFuncName_;

    private boolean swiftPostSet_isSet_ =
      false;

    private String swiftPostSet_;

    private boolean swiftPostSetFuncName_isSet_ =
      false;

    private String swiftPostSetFuncName_;

    private boolean swiftExpressionArgs_isSet_ =
      false;

    private String[] swiftExpressionArgs_;

    private boolean swiftExpression_isSet_ =
      false;

    private String swiftExpression_;

    private Object of_;

    private String swiftExpressionSubscriptionName_;

    private boolean swiftAdapt_isSet_ =
      false;

    private String swiftAdapt_;

    private boolean swiftAdaptFuncName_isSet_ =
      false;

    private String swiftAdaptFuncName_;

    private boolean swiftPrivateAxiomName_isSet_ =
      false;

    private String swiftPrivateAxiomName_;

    private boolean swiftAxiomName_isSet_ =
      false;

    private String swiftAxiomName_;

    private boolean swiftToJSON_isSet_ =
      false;

    private String swiftToJSON_;

    private boolean swiftSupport_isSet_ =
      false;

    private boolean swiftSupport_;

    private boolean swiftJsonParser_isSet_ =
      false;

    private String swiftJsonParser_;

    private boolean swiftWeak_isSet_ =
      false;

    private boolean swiftWeak_;

    private boolean generateJava_isSet_ =
      false;

    private boolean generateJava_;

    private boolean javaJSONParser_isSet_ =
      false;

    private String javaJSONParser_;

    private boolean javaQueryParser_isSet_ =
      false;

    private String javaQueryParser_;

    private boolean javaCSVParser_isSet_ =
      false;

    private String javaCSVParser_;

    private boolean javaInfoType_isSet_ =
      false;

    private String javaInfoType_;

    private boolean javaFactory_isSet_ =
      false;

    private String javaFactory_;

    private boolean javaGetter_isSet_ =
      false;

    private String javaGetter_;

    private boolean javaSetter_isSet_ =
      false;

    private String javaSetter_;

    private boolean javaPreSet_isSet_ =
      false;

    private String javaPreSet_;

    private boolean javaPostSet_isSet_ =
      false;

    private String javaPostSet_;

    private boolean aliases_isSet_ =
      false;

    private String[] aliases_;

    private boolean javaCloneProperty_isSet_ =
      false;

    private String javaCloneProperty_;

    private boolean javaDiffProperty_isSet_ =
      false;

    private String javaDiffProperty_;

    private boolean javaCompare_isSet_ =
      false;

    private String javaCompare_;

    private boolean javaComparePropertyToObject_isSet_ =
      false;

    private String javaComparePropertyToObject_;

    private boolean javaComparePropertyToValue_isSet_ =
      false;

    private String javaComparePropertyToValue_;

    private boolean javaAssertValue_isSet_ =
      false;

    private String javaAssertValue_;

    private boolean javaValue_isSet_ =
      false;

    private String javaValue_;

    private boolean includeInDigest_isSet_ =
      false;

    private boolean includeInDigest_;

    private boolean includeInSignature_isSet_ =
      false;

    private boolean includeInSignature_;

    private boolean javaValidateObj_isSet_ =
      false;

    private String javaValidateObj_;

    private boolean javaFromCSVLabelMapping_isSet_ =
      false;

    private String javaFromCSVLabelMapping_;

    private boolean javaToCSV_isSet_ =
      false;

    private String javaToCSV_;

    private boolean javaToCSVLabel_isSet_ =
      false;

    private String javaToCSVLabel_;

    private boolean attribute_isSet_ =
      false;

    private Object attribute_;

    private boolean placeholder_isSet_ =
      false;

    private String placeholder_;

    private boolean view_isSet_ =
      false;

    private Object view_;

    private boolean visibility_isSet_ =
      false;

    private foam.u2.Visibility visibility_;

    private boolean visibilityExpression_isSet_ =
      false;

    private foam.cross_platform.GenericFunction visibilityExpression_;

    private boolean validationTextVisible_isSet_ =
      false;

    private boolean validationTextVisible_;

    private boolean validationStyleEnabled_isSet_ =
      false;

    private boolean validationStyleEnabled_;

    private boolean toCSV_isSet_ =
      false;

    private foam.cross_platform.GenericFunction toCSV_;

    private boolean toCSVLabel_isSet_ =
      false;

    private foam.cross_platform.GenericFunction toCSVLabel_;

    private boolean columnLabel_isSet_ =
      false;

    private Object columnLabel_;

    private boolean tableCellView_isSet_ =
      false;

    private Object tableCellView_;

    private boolean tableHeaderFormatter_isSet_ =
      false;

    private Object tableHeaderFormatter_;

    private boolean tableCellFormatter_isSet_ =
      false;

    private foam.u2.view.Formatter tableCellFormatter_;

    private boolean tableWidth_isSet_ =
      false;

    private int tableWidth_;

    private boolean searchView_isSet_ =
      false;

    private Object searchView_;

    private boolean chartJsFormatter_isSet_ =
      false;

    private Object chartJsFormatter_;

    private boolean androidValue_isSet_ =
      false;

    private String androidValue_;

    private boolean androidExpressionArgs_isSet_ =
      false;

    private String[] androidExpressionArgs_;

    private boolean androidExpression_isSet_ =
      false;

    private String androidExpression_;

    private boolean androidType_isSet_ =
      false;

    private String androidType_;

    private boolean androidAxiomName_isSet_ =
      false;

    private String androidAxiomName_;

    private boolean androidAxiomInitializerName_isSet_ =
      false;

    private String androidAxiomInitializerName_;

    private boolean androidSlotVarName_isSet_ =
      false;

    private String androidSlotVarName_;

    private boolean androidSlotGetterName_isSet_ =
      false;

    private String androidSlotGetterName_;

    private boolean androidGetter_isSet_ =
      false;

    private String androidGetter_;

    private boolean androidPrivateVarName_isSet_ =
      false;

    private String androidPrivateVarName_;

    private boolean androidSetter_isSet_ =
      false;

    private String androidSetter_;

    private boolean androidPreSet_isSet_ =
      false;

    private String androidPreSet_;

    private boolean androidPostSet_isSet_ =
      false;

    private String androidPostSet_;

    private boolean androidAdapt_isSet_ =
      false;

    private String androidAdapt_;

    private boolean androidFactory_isSet_ =
      false;

    private String androidFactory_;

    private boolean androidIsSetVarName_isSet_ =
      false;

    private String androidIsSetVarName_;

    private boolean androidGetterName_isSet_ =
      false;

    private String androidGetterName_;

    private boolean androidSetterName_isSet_ =
      false;

    private String androidSetterName_;

    private boolean androidFAsAndroidValue_isSet_ =
      false;

    private foam.cross_platform.GenericFunction androidFAsAndroidValue_;


    public Builder setOf(Object value) {

      of_isSet_ = true;
      of_ = value;
      return this;
    }

    public Builder setType(Object value) {

      type_isSet_ = true;
      type_ = value;
      return this;
    }

    public Builder setHidden(Object value) {

      hidden_isSet_ = true;
      hidden_ = value;
      return this;
    }

    public Builder setAdapt(Object value) {

      adapt_isSet_ = true;
      adapt_ = value;
      return this;
    }

    public Builder setAssertValue(Object value) {

      assertValue_isSet_ = true;
      assertValue_ = value;
      return this;
    }

    public Builder setAdaptArrayElement(Object value) {

      adaptArrayElement_isSet_ = true;
      adaptArrayElement_ = value;
      return this;
    }

    public Builder setPostSet(Object value) {

      postSet_isSet_ = true;
      postSet_ = value;
      return this;
    }

    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setLabel(Object value) {

      label_isSet_ = true;
      label_ = value;
      return this;
    }

    public Builder setDocumentation(Object value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setHelp(Object value) {

      help_isSet_ = true;
      help_ = value;
      return this;
    }

    public Builder setOrder(long value) {

      order_isSet_ = true;
      order_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    public Builder setFactory(Object value) {

      factory_isSet_ = true;
      factory_ = value;
      return this;
    }

    public Builder setPreSet(Object value) {

      preSet_isSet_ = true;
      preSet_ = value;
      return this;
    }

    public Builder setExpression(Object value) {

      expression_isSet_ = true;
      expression_ = value;
      return this;
    }

    public Builder setGetter(Object value) {

      getter_isSet_ = true;
      getter_ = value;
      return this;
    }

    public Builder setSetter(Object value) {

      setter_isSet_ = true;
      setter_ = value;
      return this;
    }

    public Builder setCloneProperty(Object value) {

      cloneProperty_isSet_ = true;
      cloneProperty_ = value;
      return this;
    }

    public Builder setFinal(Object value) {

      final_isSet_ = true;
      final_ = value;
      return this;
    }

    public Builder setRequired(Object value) {

      required_isSet_ = true;
      required_ = value;
      return this;
    }

    public Builder setPermissionRequired(Object value) {

      permissionRequired_isSet_ = true;
      permissionRequired_ = value;
      return this;
    }

    public Builder setFlags(Object value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setFromString(Object value) {

      fromString_isSet_ = true;
      fromString_ = value;
      return this;
    }

    public Builder setComparePropertyValues(Object value) {

      comparePropertyValues_isSet_ = true;
      comparePropertyValues_ = value;
      return this;
    }

    public Builder setIsDefaultValue(Object value) {

      isDefaultValue_isSet_ = true;
      isDefaultValue_ = value;
      return this;
    }

    public Builder setDiffPropertyValues(Object value) {

      diffPropertyValues_isSet_ = true;
      diffPropertyValues_ = value;
      return this;
    }

    public Builder setDiffProperty(Object value) {

      diffProperty_isSet_ = true;
      diffProperty_ = value;
      return this;
    }

    public Builder setForClass_(Object value) {

      forClass__isSet_ = true;
      forClass__ = value;
      return this;
    }

    public Builder setContainsPII(Object value) {

      containsPII_isSet_ = true;
      containsPII_ = value;
      return this;
    }

    public Builder setContainsDeletablePII(Object value) {

      containsDeletablePII_isSet_ = true;
      containsDeletablePII_ = value;
      return this;
    }

    public Builder setGridColumns(Object value) {

      gridColumns_isSet_ = true;
      gridColumns_ = value;
      return this;
    }

    public Builder setSection(String value) {

      section_isSet_ = true;
      section_ = value;
      return this;
    }

    public Builder setTransient(boolean value) {

      transient_isSet_ = true;
      transient_ = value;
      return this;
    }

    public Builder setNetworkTransient(boolean value) {

      networkTransient_isSet_ = true;
      networkTransient_ = value;
      return this;
    }

    public Builder setStorageTransient(boolean value) {

      storageTransient_isSet_ = true;
      storageTransient_ = value;
      return this;
    }

    public Builder setValidationPredicates(foam.core.ValidationPredicate[] value) {

      validationPredicates_isSet_ = true;
      validationPredicates_ = value;
      return this;
    }

    public Builder setValidateObj(Object value) {

      validateObj_isSet_ = true;
      validateObj_ = value;
      return this;
    }

    public Builder setShortName(String value) {

      shortName_isSet_ = true;
      shortName_ = value;
      return this;
    }

    public Builder setSource(Object value) {

      source_isSet_ = true;
      source_ = value;
      return this;
    }

    public Builder setFromJSON(Object value) {

      fromJSON_isSet_ = true;
      fromJSON_ = value;
      return this;
    }

    public Builder setToJSON(Object value) {

      toJSON_isSet_ = true;
      toJSON_ = value;
      return this;
    }

    public Builder setXmlAttribute(boolean value) {

      xmlAttribute_isSet_ = true;
      xmlAttribute_ = value;
      return this;
    }

    public Builder setXmlTextNode(boolean value) {

      xmlTextNode_isSet_ = true;
      xmlTextNode_ = value;
      return this;
    }

    public Builder setFromXML(Object value) {

      fromXML_isSet_ = true;
      fromXML_ = value;
      return this;
    }

    public Builder setToXML(Object value) {

      toXML_isSet_ = true;
      toXML_ = value;
      return this;
    }

    public Builder setFromCSVLabelMapping(foam.cross_platform.GenericFunction value) {

      fromCSVLabelMapping_isSet_ = true;
      fromCSVLabelMapping_ = value;
      return this;
    }

    public Builder setSwiftVarName(String value) {

      swiftVarName_isSet_ = true;
      swiftVarName_ = value;
      return this;
    }

    public Builder setSwiftView(String value) {

      swiftView_isSet_ = true;
      swiftView_ = value;
      return this;
    }

    public Builder setSwiftSlotLinkSubName(String value) {

      swiftSlotLinkSubName_isSet_ = true;
      swiftSlotLinkSubName_ = value;
      return this;
    }

    public Builder setSwiftSlotValueName(String value) {

      swiftSlotValueName_isSet_ = true;
      swiftSlotValueName_ = value;
      return this;
    }

    public Builder setSwiftSlotName(String value) {

      swiftSlotName_isSet_ = true;
      swiftSlotName_ = value;
      return this;
    }

    public Builder setSwiftInitedName(String value) {

      swiftInitedName_isSet_ = true;
      swiftInitedName_ = value;
      return this;
    }

    public Builder setSwiftValueName(String value) {

      swiftValueName_isSet_ = true;
      swiftValueName_ = value;
      return this;
    }

    public Builder setSwiftValueType(String value) {

      swiftValueType_isSet_ = true;
      swiftValueType_ = value;
      return this;
    }

    public Builder setSwiftRequiresEscaping(boolean value) {

      swiftRequiresEscaping_isSet_ = true;
      swiftRequiresEscaping_ = value;
      return this;
    }

    public Builder setSwiftOptional(boolean value) {

      swiftOptional_isSet_ = true;
      swiftOptional_ = value;
      return this;
    }

    public Builder setSwiftFactory(String value) {

      swiftFactory_isSet_ = true;
      swiftFactory_ = value;
      return this;
    }

    public Builder setSwiftFactoryName(String value) {

      swiftFactoryName_isSet_ = true;
      swiftFactoryName_ = value;
      return this;
    }

    public Builder setSwiftValue(String value) {

      swiftValue_isSet_ = true;
      swiftValue_ = value;
      return this;
    }

    public Builder setSwiftGetter(String value) {

      swiftGetter_isSet_ = true;
      swiftGetter_ = value;
      return this;
    }

    public Builder setSwiftSetter(String value) {

      swiftSetter_isSet_ = true;
      swiftSetter_ = value;
      return this;
    }

    public Builder setSwiftPreSet(String value) {

      swiftPreSet_isSet_ = true;
      swiftPreSet_ = value;
      return this;
    }

    public Builder setSwiftPreSetFuncName(String value) {

      swiftPreSetFuncName_isSet_ = true;
      swiftPreSetFuncName_ = value;
      return this;
    }

    public Builder setSwiftPostSet(String value) {

      swiftPostSet_isSet_ = true;
      swiftPostSet_ = value;
      return this;
    }

    public Builder setSwiftPostSetFuncName(String value) {

      swiftPostSetFuncName_isSet_ = true;
      swiftPostSetFuncName_ = value;
      return this;
    }

    public Builder setSwiftExpressionArgs(String[] value) {

      swiftExpressionArgs_isSet_ = true;
      swiftExpressionArgs_ = value;
      return this;
    }

    public Builder setSwiftExpression(String value) {

      swiftExpression_isSet_ = true;
      swiftExpression_ = value;
      return this;
    }

    public Builder setSwiftExpressionSubscriptionName(String value) {

      swiftExpressionSubscriptionName_isSet_ = true;
      swiftExpressionSubscriptionName_ = value;
      return this;
    }

    public Builder setSwiftAdapt(String value) {

      swiftAdapt_isSet_ = true;
      swiftAdapt_ = value;
      return this;
    }

    public Builder setSwiftAdaptFuncName(String value) {

      swiftAdaptFuncName_isSet_ = true;
      swiftAdaptFuncName_ = value;
      return this;
    }

    public Builder setSwiftPrivateAxiomName(String value) {

      swiftPrivateAxiomName_isSet_ = true;
      swiftPrivateAxiomName_ = value;
      return this;
    }

    public Builder setSwiftAxiomName(String value) {

      swiftAxiomName_isSet_ = true;
      swiftAxiomName_ = value;
      return this;
    }

    public Builder setSwiftToJSON(String value) {

      swiftToJSON_isSet_ = true;
      swiftToJSON_ = value;
      return this;
    }

    public Builder setSwiftSupport(boolean value) {

      swiftSupport_isSet_ = true;
      swiftSupport_ = value;
      return this;
    }

    public Builder setSwiftJsonParser(String value) {

      swiftJsonParser_isSet_ = true;
      swiftJsonParser_ = value;
      return this;
    }

    public Builder setSwiftWeak(boolean value) {

      swiftWeak_isSet_ = true;
      swiftWeak_ = value;
      return this;
    }

    public Builder setGenerateJava(boolean value) {

      generateJava_isSet_ = true;
      generateJava_ = value;
      return this;
    }

    public Builder setJavaJSONParser(String value) {

      javaJSONParser_isSet_ = true;
      javaJSONParser_ = value;
      return this;
    }

    public Builder setJavaQueryParser(String value) {

      javaQueryParser_isSet_ = true;
      javaQueryParser_ = value;
      return this;
    }

    public Builder setJavaCSVParser(String value) {

      javaCSVParser_isSet_ = true;
      javaCSVParser_ = value;
      return this;
    }

    public Builder setJavaInfoType(String value) {

      javaInfoType_isSet_ = true;
      javaInfoType_ = value;
      return this;
    }

    public Builder setJavaFactory(String value) {

      javaFactory_isSet_ = true;
      javaFactory_ = value;
      return this;
    }

    public Builder setJavaGetter(String value) {

      javaGetter_isSet_ = true;
      javaGetter_ = value;
      return this;
    }

    public Builder setJavaSetter(String value) {

      javaSetter_isSet_ = true;
      javaSetter_ = value;
      return this;
    }

    public Builder setJavaPreSet(String value) {

      javaPreSet_isSet_ = true;
      javaPreSet_ = value;
      return this;
    }

    public Builder setJavaPostSet(String value) {

      javaPostSet_isSet_ = true;
      javaPostSet_ = value;
      return this;
    }

    public Builder setAliases(String[] value) {

      aliases_isSet_ = true;
      aliases_ = value;
      return this;
    }

    public Builder setJavaCloneProperty(String value) {

      javaCloneProperty_isSet_ = true;
      javaCloneProperty_ = value;
      return this;
    }

    public Builder setJavaDiffProperty(String value) {

      javaDiffProperty_isSet_ = true;
      javaDiffProperty_ = value;
      return this;
    }

    public Builder setJavaCompare(String value) {

      javaCompare_isSet_ = true;
      javaCompare_ = value;
      return this;
    }

    public Builder setJavaComparePropertyToObject(String value) {

      javaComparePropertyToObject_isSet_ = true;
      javaComparePropertyToObject_ = value;
      return this;
    }

    public Builder setJavaComparePropertyToValue(String value) {

      javaComparePropertyToValue_isSet_ = true;
      javaComparePropertyToValue_ = value;
      return this;
    }

    public Builder setJavaAssertValue(String value) {

      javaAssertValue_isSet_ = true;
      javaAssertValue_ = value;
      return this;
    }

    public Builder setJavaValue(String value) {

      javaValue_isSet_ = true;
      javaValue_ = value;
      return this;
    }

    public Builder setIncludeInDigest(boolean value) {

      includeInDigest_isSet_ = true;
      includeInDigest_ = value;
      return this;
    }

    public Builder setIncludeInSignature(boolean value) {

      includeInSignature_isSet_ = true;
      includeInSignature_ = value;
      return this;
    }

    public Builder setJavaValidateObj(String value) {

      javaValidateObj_isSet_ = true;
      javaValidateObj_ = value;
      return this;
    }

    public Builder setJavaFromCSVLabelMapping(String value) {

      javaFromCSVLabelMapping_isSet_ = true;
      javaFromCSVLabelMapping_ = value;
      return this;
    }

    public Builder setJavaToCSV(String value) {

      javaToCSV_isSet_ = true;
      javaToCSV_ = value;
      return this;
    }

    public Builder setJavaToCSVLabel(String value) {

      javaToCSVLabel_isSet_ = true;
      javaToCSVLabel_ = value;
      return this;
    }

    public Builder setAttribute(Object value) {

      attribute_isSet_ = true;
      attribute_ = value;
      return this;
    }

    public Builder setPlaceholder(String value) {

      placeholder_isSet_ = true;
      placeholder_ = value;
      return this;
    }

    public Builder setView(Object value) {

      view_isSet_ = true;
      view_ = value;
      return this;
    }

    public Builder setVisibility(foam.u2.Visibility value) {

      visibility_isSet_ = true;
      visibility_ = value;
      return this;
    }

    public Builder setVisibilityExpression(foam.cross_platform.GenericFunction value) {

      visibilityExpression_isSet_ = true;
      visibilityExpression_ = value;
      return this;
    }

    public Builder setValidationTextVisible(boolean value) {

      validationTextVisible_isSet_ = true;
      validationTextVisible_ = value;
      return this;
    }

    public Builder setValidationStyleEnabled(boolean value) {

      validationStyleEnabled_isSet_ = true;
      validationStyleEnabled_ = value;
      return this;
    }

    public Builder setToCSV(foam.cross_platform.GenericFunction value) {

      toCSV_isSet_ = true;
      toCSV_ = value;
      return this;
    }

    public Builder setToCSVLabel(foam.cross_platform.GenericFunction value) {

      toCSVLabel_isSet_ = true;
      toCSVLabel_ = value;
      return this;
    }

    public Builder setColumnLabel(Object value) {

      columnLabel_isSet_ = true;
      columnLabel_ = value;
      return this;
    }

    public Builder setTableCellView(Object value) {

      tableCellView_isSet_ = true;
      tableCellView_ = value;
      return this;
    }

    public Builder setTableHeaderFormatter(Object value) {

      tableHeaderFormatter_isSet_ = true;
      tableHeaderFormatter_ = value;
      return this;
    }

    public Builder setTableCellFormatter(foam.u2.view.Formatter value) {

      tableCellFormatter_isSet_ = true;
      tableCellFormatter_ = value;
      return this;
    }

    public Builder setTableWidth(int value) {

      tableWidth_isSet_ = true;
      tableWidth_ = value;
      return this;
    }

    public Builder setSearchView(Object value) {

      searchView_isSet_ = true;
      searchView_ = value;
      return this;
    }

    public Builder setChartJsFormatter(Object value) {

      chartJsFormatter_isSet_ = true;
      chartJsFormatter_ = value;
      return this;
    }

    public Builder setAndroidValue(String value) {

      androidValue_isSet_ = true;
      androidValue_ = value;
      return this;
    }

    public Builder setAndroidExpressionArgs(String[] value) {

      androidExpressionArgs_isSet_ = true;
      androidExpressionArgs_ = value;
      return this;
    }

    public Builder setAndroidExpression(String value) {

      androidExpression_isSet_ = true;
      androidExpression_ = value;
      return this;
    }

    public Builder setAndroidType(String value) {

      androidType_isSet_ = true;
      androidType_ = value;
      return this;
    }

    public Builder setAndroidAxiomName(String value) {

      androidAxiomName_isSet_ = true;
      androidAxiomName_ = value;
      return this;
    }

    public Builder setAndroidAxiomInitializerName(String value) {

      androidAxiomInitializerName_isSet_ = true;
      androidAxiomInitializerName_ = value;
      return this;
    }

    public Builder setAndroidSlotVarName(String value) {

      androidSlotVarName_isSet_ = true;
      androidSlotVarName_ = value;
      return this;
    }

    public Builder setAndroidSlotGetterName(String value) {

      androidSlotGetterName_isSet_ = true;
      androidSlotGetterName_ = value;
      return this;
    }

    public Builder setAndroidGetter(String value) {

      androidGetter_isSet_ = true;
      androidGetter_ = value;
      return this;
    }

    public Builder setAndroidPrivateVarName(String value) {

      androidPrivateVarName_isSet_ = true;
      androidPrivateVarName_ = value;
      return this;
    }

    public Builder setAndroidSetter(String value) {

      androidSetter_isSet_ = true;
      androidSetter_ = value;
      return this;
    }

    public Builder setAndroidPreSet(String value) {

      androidPreSet_isSet_ = true;
      androidPreSet_ = value;
      return this;
    }

    public Builder setAndroidPostSet(String value) {

      androidPostSet_isSet_ = true;
      androidPostSet_ = value;
      return this;
    }

    public Builder setAndroidAdapt(String value) {

      androidAdapt_isSet_ = true;
      androidAdapt_ = value;
      return this;
    }

    public Builder setAndroidFactory(String value) {

      androidFactory_isSet_ = true;
      androidFactory_ = value;
      return this;
    }

    public Builder setAndroidIsSetVarName(String value) {

      androidIsSetVarName_isSet_ = true;
      androidIsSetVarName_ = value;
      return this;
    }

    public Builder setAndroidGetterName(String value) {

      androidGetterName_isSet_ = true;
      androidGetterName_ = value;
      return this;
    }

    public Builder setAndroidSetterName(String value) {

      androidSetterName_isSet_ = true;
      androidSetterName_ = value;
      return this;
    }

    public Builder setAndroidFAsAndroidValue(foam.cross_platform.GenericFunction value) {

      androidFAsAndroidValue_isSet_ = true;
      androidFAsAndroidValue_ = value;
      return this;
    }

    private Builder() {

    }

    public AxiomArray build() {

      AxiomArray o = new AxiomArray();
      
      if ( of_isSet_ ) {
        o.setOf(of_);
      }
      
      if ( type_isSet_ ) {
        o.setType(type_);
      }
      
      if ( hidden_isSet_ ) {
        o.setHidden(hidden_);
      }
      
      if ( adapt_isSet_ ) {
        o.setAdapt(adapt_);
      }
      
      if ( assertValue_isSet_ ) {
        o.setAssertValue(assertValue_);
      }
      
      if ( adaptArrayElement_isSet_ ) {
        o.setAdaptArrayElement(adaptArrayElement_);
      }
      
      if ( postSet_isSet_ ) {
        o.setPostSet(postSet_);
      }
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( label_isSet_ ) {
        o.setLabel(label_);
      }
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( help_isSet_ ) {
        o.setHelp(help_);
      }
      
      if ( order_isSet_ ) {
        o.setOrder(order_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      if ( factory_isSet_ ) {
        o.setFactory(factory_);
      }
      
      if ( preSet_isSet_ ) {
        o.setPreSet(preSet_);
      }
      
      if ( expression_isSet_ ) {
        o.setExpression(expression_);
      }
      
      if ( getter_isSet_ ) {
        o.setGetter(getter_);
      }
      
      if ( setter_isSet_ ) {
        o.setSetter(setter_);
      }
      
      if ( cloneProperty_isSet_ ) {
        o.setCloneProperty(cloneProperty_);
      }
      
      if ( final_isSet_ ) {
        o.setFinal(final_);
      }
      
      if ( required_isSet_ ) {
        o.setRequired(required_);
      }
      
      if ( permissionRequired_isSet_ ) {
        o.setPermissionRequired(permissionRequired_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( fromString_isSet_ ) {
        o.setFromString(fromString_);
      }
      
      if ( comparePropertyValues_isSet_ ) {
        o.setComparePropertyValues(comparePropertyValues_);
      }
      
      if ( isDefaultValue_isSet_ ) {
        o.setIsDefaultValue(isDefaultValue_);
      }
      
      if ( diffPropertyValues_isSet_ ) {
        o.setDiffPropertyValues(diffPropertyValues_);
      }
      
      if ( diffProperty_isSet_ ) {
        o.setDiffProperty(diffProperty_);
      }
      
      if ( forClass__isSet_ ) {
        o.setForClass_(forClass__);
      }
      
      if ( containsPII_isSet_ ) {
        o.setContainsPII(containsPII_);
      }
      
      if ( containsDeletablePII_isSet_ ) {
        o.setContainsDeletablePII(containsDeletablePII_);
      }
      
      if ( gridColumns_isSet_ ) {
        o.setGridColumns(gridColumns_);
      }
      
      if ( section_isSet_ ) {
        o.setSection(section_);
      }
      
      if ( transient_isSet_ ) {
        o.setTransient(transient_);
      }
      
      if ( networkTransient_isSet_ ) {
        o.setNetworkTransient(networkTransient_);
      }
      
      if ( storageTransient_isSet_ ) {
        o.setStorageTransient(storageTransient_);
      }
      
      if ( validationPredicates_isSet_ ) {
        o.setValidationPredicates(validationPredicates_);
      }
      
      if ( validateObj_isSet_ ) {
        o.setValidateObj(validateObj_);
      }
      
      if ( shortName_isSet_ ) {
        o.setShortName(shortName_);
      }
      
      if ( source_isSet_ ) {
        o.setSource(source_);
      }
      
      if ( fromJSON_isSet_ ) {
        o.setFromJSON(fromJSON_);
      }
      
      if ( toJSON_isSet_ ) {
        o.setToJSON(toJSON_);
      }
      
      if ( xmlAttribute_isSet_ ) {
        o.setXmlAttribute(xmlAttribute_);
      }
      
      if ( xmlTextNode_isSet_ ) {
        o.setXmlTextNode(xmlTextNode_);
      }
      
      if ( fromXML_isSet_ ) {
        o.setFromXML(fromXML_);
      }
      
      if ( toXML_isSet_ ) {
        o.setToXML(toXML_);
      }
      
      if ( fromCSVLabelMapping_isSet_ ) {
        o.setFromCSVLabelMapping(fromCSVLabelMapping_);
      }
      
      if ( swiftVarName_isSet_ ) {
        o.setSwiftVarName(swiftVarName_);
      }
      
      if ( swiftView_isSet_ ) {
        o.setSwiftView(swiftView_);
      }
      
      if ( swiftSlotLinkSubName_isSet_ ) {
        o.setSwiftSlotLinkSubName(swiftSlotLinkSubName_);
      }
      
      if ( swiftSlotValueName_isSet_ ) {
        o.setSwiftSlotValueName(swiftSlotValueName_);
      }
      
      if ( swiftSlotName_isSet_ ) {
        o.setSwiftSlotName(swiftSlotName_);
      }
      
      if ( swiftInitedName_isSet_ ) {
        o.setSwiftInitedName(swiftInitedName_);
      }
      
      if ( swiftValueName_isSet_ ) {
        o.setSwiftValueName(swiftValueName_);
      }
      
      if ( swiftValueType_isSet_ ) {
        o.setSwiftValueType(swiftValueType_);
      }
      
      if ( swiftRequiresEscaping_isSet_ ) {
        o.setSwiftRequiresEscaping(swiftRequiresEscaping_);
      }
      
      if ( swiftOptional_isSet_ ) {
        o.setSwiftOptional(swiftOptional_);
      }
      
      if ( swiftFactory_isSet_ ) {
        o.setSwiftFactory(swiftFactory_);
      }
      
      if ( swiftFactoryName_isSet_ ) {
        o.setSwiftFactoryName(swiftFactoryName_);
      }
      
      if ( swiftValue_isSet_ ) {
        o.setSwiftValue(swiftValue_);
      }
      
      if ( swiftGetter_isSet_ ) {
        o.setSwiftGetter(swiftGetter_);
      }
      
      if ( swiftSetter_isSet_ ) {
        o.setSwiftSetter(swiftSetter_);
      }
      
      if ( swiftPreSet_isSet_ ) {
        o.setSwiftPreSet(swiftPreSet_);
      }
      
      if ( swiftPreSetFuncName_isSet_ ) {
        o.setSwiftPreSetFuncName(swiftPreSetFuncName_);
      }
      
      if ( swiftPostSet_isSet_ ) {
        o.setSwiftPostSet(swiftPostSet_);
      }
      
      if ( swiftPostSetFuncName_isSet_ ) {
        o.setSwiftPostSetFuncName(swiftPostSetFuncName_);
      }
      
      if ( swiftExpressionArgs_isSet_ ) {
        o.setSwiftExpressionArgs(swiftExpressionArgs_);
      }
      
      if ( swiftExpression_isSet_ ) {
        o.setSwiftExpression(swiftExpression_);
      }
      
      if ( swiftExpressionSubscriptionName_isSet_ ) {
        o.setSwiftExpressionSubscriptionName(swiftExpressionSubscriptionName_);
      }
      
      if ( swiftAdapt_isSet_ ) {
        o.setSwiftAdapt(swiftAdapt_);
      }
      
      if ( swiftAdaptFuncName_isSet_ ) {
        o.setSwiftAdaptFuncName(swiftAdaptFuncName_);
      }
      
      if ( swiftPrivateAxiomName_isSet_ ) {
        o.setSwiftPrivateAxiomName(swiftPrivateAxiomName_);
      }
      
      if ( swiftAxiomName_isSet_ ) {
        o.setSwiftAxiomName(swiftAxiomName_);
      }
      
      if ( swiftToJSON_isSet_ ) {
        o.setSwiftToJSON(swiftToJSON_);
      }
      
      if ( swiftSupport_isSet_ ) {
        o.setSwiftSupport(swiftSupport_);
      }
      
      if ( swiftJsonParser_isSet_ ) {
        o.setSwiftJsonParser(swiftJsonParser_);
      }
      
      if ( swiftWeak_isSet_ ) {
        o.setSwiftWeak(swiftWeak_);
      }
      
      if ( generateJava_isSet_ ) {
        o.setGenerateJava(generateJava_);
      }
      
      if ( javaJSONParser_isSet_ ) {
        o.setJavaJSONParser(javaJSONParser_);
      }
      
      if ( javaQueryParser_isSet_ ) {
        o.setJavaQueryParser(javaQueryParser_);
      }
      
      if ( javaCSVParser_isSet_ ) {
        o.setJavaCSVParser(javaCSVParser_);
      }
      
      if ( javaInfoType_isSet_ ) {
        o.setJavaInfoType(javaInfoType_);
      }
      
      if ( javaFactory_isSet_ ) {
        o.setJavaFactory(javaFactory_);
      }
      
      if ( javaGetter_isSet_ ) {
        o.setJavaGetter(javaGetter_);
      }
      
      if ( javaSetter_isSet_ ) {
        o.setJavaSetter(javaSetter_);
      }
      
      if ( javaPreSet_isSet_ ) {
        o.setJavaPreSet(javaPreSet_);
      }
      
      if ( javaPostSet_isSet_ ) {
        o.setJavaPostSet(javaPostSet_);
      }
      
      if ( aliases_isSet_ ) {
        o.setAliases(aliases_);
      }
      
      if ( javaCloneProperty_isSet_ ) {
        o.setJavaCloneProperty(javaCloneProperty_);
      }
      
      if ( javaDiffProperty_isSet_ ) {
        o.setJavaDiffProperty(javaDiffProperty_);
      }
      
      if ( javaCompare_isSet_ ) {
        o.setJavaCompare(javaCompare_);
      }
      
      if ( javaComparePropertyToObject_isSet_ ) {
        o.setJavaComparePropertyToObject(javaComparePropertyToObject_);
      }
      
      if ( javaComparePropertyToValue_isSet_ ) {
        o.setJavaComparePropertyToValue(javaComparePropertyToValue_);
      }
      
      if ( javaAssertValue_isSet_ ) {
        o.setJavaAssertValue(javaAssertValue_);
      }
      
      if ( javaValue_isSet_ ) {
        o.setJavaValue(javaValue_);
      }
      
      if ( includeInDigest_isSet_ ) {
        o.setIncludeInDigest(includeInDigest_);
      }
      
      if ( includeInSignature_isSet_ ) {
        o.setIncludeInSignature(includeInSignature_);
      }
      
      if ( javaValidateObj_isSet_ ) {
        o.setJavaValidateObj(javaValidateObj_);
      }
      
      if ( javaFromCSVLabelMapping_isSet_ ) {
        o.setJavaFromCSVLabelMapping(javaFromCSVLabelMapping_);
      }
      
      if ( javaToCSV_isSet_ ) {
        o.setJavaToCSV(javaToCSV_);
      }
      
      if ( javaToCSVLabel_isSet_ ) {
        o.setJavaToCSVLabel(javaToCSVLabel_);
      }
      
      if ( attribute_isSet_ ) {
        o.setAttribute(attribute_);
      }
      
      if ( placeholder_isSet_ ) {
        o.setPlaceholder(placeholder_);
      }
      
      if ( view_isSet_ ) {
        o.setView(view_);
      }
      
      if ( visibility_isSet_ ) {
        o.setVisibility(visibility_);
      }
      
      if ( visibilityExpression_isSet_ ) {
        o.setVisibilityExpression(visibilityExpression_);
      }
      
      if ( validationTextVisible_isSet_ ) {
        o.setValidationTextVisible(validationTextVisible_);
      }
      
      if ( validationStyleEnabled_isSet_ ) {
        o.setValidationStyleEnabled(validationStyleEnabled_);
      }
      
      if ( toCSV_isSet_ ) {
        o.setToCSV(toCSV_);
      }
      
      if ( toCSVLabel_isSet_ ) {
        o.setToCSVLabel(toCSVLabel_);
      }
      
      if ( columnLabel_isSet_ ) {
        o.setColumnLabel(columnLabel_);
      }
      
      if ( tableCellView_isSet_ ) {
        o.setTableCellView(tableCellView_);
      }
      
      if ( tableHeaderFormatter_isSet_ ) {
        o.setTableHeaderFormatter(tableHeaderFormatter_);
      }
      
      if ( tableCellFormatter_isSet_ ) {
        o.setTableCellFormatter(tableCellFormatter_);
      }
      
      if ( tableWidth_isSet_ ) {
        o.setTableWidth(tableWidth_);
      }
      
      if ( searchView_isSet_ ) {
        o.setSearchView(searchView_);
      }
      
      if ( chartJsFormatter_isSet_ ) {
        o.setChartJsFormatter(chartJsFormatter_);
      }
      
      if ( androidValue_isSet_ ) {
        o.setAndroidValue(androidValue_);
      }
      
      if ( androidExpressionArgs_isSet_ ) {
        o.setAndroidExpressionArgs(androidExpressionArgs_);
      }
      
      if ( androidExpression_isSet_ ) {
        o.setAndroidExpression(androidExpression_);
      }
      
      if ( androidType_isSet_ ) {
        o.setAndroidType(androidType_);
      }
      
      if ( androidAxiomName_isSet_ ) {
        o.setAndroidAxiomName(androidAxiomName_);
      }
      
      if ( androidAxiomInitializerName_isSet_ ) {
        o.setAndroidAxiomInitializerName(androidAxiomInitializerName_);
      }
      
      if ( androidSlotVarName_isSet_ ) {
        o.setAndroidSlotVarName(androidSlotVarName_);
      }
      
      if ( androidSlotGetterName_isSet_ ) {
        o.setAndroidSlotGetterName(androidSlotGetterName_);
      }
      
      if ( androidGetter_isSet_ ) {
        o.setAndroidGetter(androidGetter_);
      }
      
      if ( androidPrivateVarName_isSet_ ) {
        o.setAndroidPrivateVarName(androidPrivateVarName_);
      }
      
      if ( androidSetter_isSet_ ) {
        o.setAndroidSetter(androidSetter_);
      }
      
      if ( androidPreSet_isSet_ ) {
        o.setAndroidPreSet(androidPreSet_);
      }
      
      if ( androidPostSet_isSet_ ) {
        o.setAndroidPostSet(androidPostSet_);
      }
      
      if ( androidAdapt_isSet_ ) {
        o.setAndroidAdapt(androidAdapt_);
      }
      
      if ( androidFactory_isSet_ ) {
        o.setAndroidFactory(androidFactory_);
      }
      
      if ( androidIsSetVarName_isSet_ ) {
        o.setAndroidIsSetVarName(androidIsSetVarName_);
      }
      
      if ( androidGetterName_isSet_ ) {
        o.setAndroidGetterName(androidGetterName_);
      }
      
      if ( androidSetterName_isSet_ ) {
        o.setAndroidSetterName(androidSetterName_);
      }
      
      if ( androidFAsAndroidValue_isSet_ ) {
        o.setAndroidFAsAndroidValue(androidFAsAndroidValue_);
      }
      
      o.init();
      return o;
    }
  }
}