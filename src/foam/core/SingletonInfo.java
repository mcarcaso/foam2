/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.core;

import java.util.Map;
import java.util.HashMap;

public class SingletonInfo<T>
  implements Axiom, XArgsFactory<T>
{
  T instance_;

  Class<T> type;
  String name;

  public SingletonInfo(String name, Class<T> type) {
    this.name = name;
    this.type = type;
  }

  public String getName() {
    return name;
  }

  public synchronized T getInstance(Map<String, Object> args, X x) {
    if ( instance_ == null ) {
      try {
        T obj = type.newInstance();
        ((ContextAware)obj).setX(x);
        for ( Map.Entry<String, Object> entry : args.entrySet() ) {
          ((FObject)obj).setProperty(entry.getKey(), entry.getValue());
        }
        instance_ = obj;
      } catch (java.lang.Exception e) {
        e.printStackTrace();
        return null;
      }
    }
    return instance_;
  }
}

