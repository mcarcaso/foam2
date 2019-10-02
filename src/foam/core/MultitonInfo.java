/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.core;

import java.util.Map;
import java.util.HashMap;

public class MultitonInfo<T>
  implements Axiom, XArgsFactory<T>
{
  Map<Object, T> instanceMap = new HashMap<Object, T>();

  java.lang.String name;
  PropertyInfo p;

  public MultitonInfo(java.lang.String name, PropertyInfo p) {
    this.name = name;
    this.p = p;
  }

  public java.lang.String getName() {
    return name;
  }

  public synchronized T getInstance(Map<java.lang.String, Object> args, X x) {
    Object key = args.get(p.getName());
    if ( ! instanceMap.containsKey(key) ) {
      try {
        Class<T> type = (Class<T>)p.getClassInfo().getObjClass();
        T obj = type.newInstance();
        ((ContextAware)obj).setX(x);
        for ( Map.Entry<java.lang.String, Object> entry : args.entrySet() ) {
          ((FObject)obj).setProperty(entry.getKey(), entry.getValue());
        }
        instanceMap.put(key, obj);
      } catch (java.lang.Exception e) {
        e.printStackTrace();
        return null;
      }
    }
    return instanceMap.get(key);
  }
}
