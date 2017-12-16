/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.util;

public class Reference<T> {
  public T value;
  public Reference(T value) {
    this.value = value;
  }
}
