/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.core;

import foam.crypto.hash.Hashable;
import foam.crypto.sign.Signable;

import java.util.Map;

public interface FObject extends
  Appendable, ContextAware, Comparable, Freezable, Hashable, Signable, Validatable
{
  ClassInfo getClassInfo();
  FObject copyFrom(FObject obj);
  FObject fclone();
  FObject deepClone();
  FObject shallowClone();
  Map diff(FObject obj);
  FObject freeze();
  boolean isFrozen();
  //Return is FObject that contain different fields between two FObjects.
  FObject hardDiff(FObject obj);
  Object setProperty(java.lang.String prop, Object value);
  Object getProperty(java.lang.String prop);
  boolean isPropertySet(java.lang.String prop);
  boolean hasDefaultValue(java.lang.String prop);
}
