/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.core;

public class ExportInfo
  implements Axiom
{
  String name;
  PropertyInfo p;

  public ExportInfo(String name, PropertyInfo p) {
    this.name = name;
    this.p = p;
  }

  public String getName() {
    return name;
  }
}
