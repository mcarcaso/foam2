/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package foam.core;

import java.util.Collections;
import java.util.Map;

// TODO: make this a functional tree rather than a linked list. (for performance)

abstract class AbstractX
  implements X, Appendable
{
  public <T> T get(Class<T> key) {
    return (T)get(this, key);
  }

  public Object get(Object key) {
    return get(this, key.toString());
  }

  public int getInt(Object key) {
    return getInt(key, 0);
  }

  public int getInt(Object key, int defaultValue) {
    return getInt(this, key, defaultValue);
  }

  public int getInt(X x, Object key, int defaultValue) {
    Number i = (Number) x.get(key);

    return i == null ? defaultValue : i.intValue();
  }

  public boolean getBoolean(Object key) {
    return getBoolean(key, false);
  }

  public boolean getBoolean(Object key, boolean defaultValue) {
    return getBoolean(this, key, defaultValue);
  }

  public boolean getBoolean(X x, Object key, boolean defaultValue) {
    Boolean b = (Boolean) x.get(key);
    return b == null ? defaultValue : b;
  }

  public Object getInstanceOf(Object value, Class type) {
    return ((FacetManager) get("facetManager")).getInstanceOf(value, type, this);
  }

  public <T> T create(Class<T> type) {
    return create(type, Collections.<java.lang.String, Object>emptyMap());
  }

  public <T> T create(Class<T> type, Map<java.lang.String, Object> args) {
    return ((FacetManager)get("facetManager")).create(type, args, this);
  }

  public void append(StringBuilder sb) {
    sb.append("[context]");
  }
}

abstract class AbstractXI
  extends AbstractX
  implements Cloneable
{
  protected X leftChild_;
  protected X rightChild_;

  protected abstract java.lang.String getKey();
  protected X getLeftChild()  { return leftChild_; }
  protected X getRightChild() { return rightChild_; }
  protected void setLeftChild(X child)  { leftChild_  = child; }
  protected void setRightChild(X child) { rightChild_ = child; }

  public X put(Object key, Object value) {
    java.lang.String skey = key.toString();
    int comp = skey.compareTo(getKey());
    if ( comp == 0 ) return new XI(getLeftChild(), getRightChild(), skey, value);
    if ( comp < 0  ) return clone(getLeftChild().put(skey, value), getRightChild());
    return clone(getLeftChild(), getRightChild().put(skey, value));
  }

  public X putFactory(Object key, XFactory factory) {
    java.lang.String skey = key.toString();
    int comp = skey.compareTo(getKey());
    if ( comp == 0 ) return new FactoryXI(getLeftChild(), getRightChild(), getKey(), factory);
    if ( comp < 0  ) return clone(getLeftChild().putFactory(skey, factory), getRightChild());
    return clone(getLeftChild(), getRightChild().putFactory(skey, factory));
  }

  protected X clone(X left, X right) {
    AbstractXI result = this.clone();
    result.setLeftChild(left);
    result.setRightChild(right);
    return result;
  }

  @Override
  protected AbstractXI clone() {
    AbstractXI x = null;
    try {
      x = (AbstractXI) super.clone();
    } catch ( CloneNotSupportedException e ) {
      e.printStackTrace();
    }
    return x;
  }
}

/** Default implementation of X interface. Stores one key-value binding. **/
class XI
  extends AbstractXI
{
  final java.lang.String key_;
  final Object value_;

  XI(X leftChild, X rightChild, Object key, Object value) {
    leftChild_  = leftChild;
    rightChild_ = rightChild;
    key_        = key.toString();
    value_      = value;
  }
  @Override
  protected java.lang.String getKey() { return key_; }

  public Object get(X x, Object key) {
    java.lang.String skey = key.toString();
    int comp = skey.compareTo(key_);
    if ( comp == 0 ) return value_;
    if ( comp < 0  ) return getLeftChild().get(x, skey);
    return getRightChild().get(x, skey);
  }

  @Override
  public java.lang.String toString() {
    return getLeftChild().toString() + ( "{Key: " + key_ + ", Object: "  + value_ + "}\n" ) + getRightChild().toString();
  }
}


/** Implementation of X interface when binding a key-factory pair. **/
class FactoryXI
  extends AbstractXI
{
  final java.lang.String   key_;
  final XFactory factory_;

  FactoryXI(X leftChild, X rightChild, Object key, XFactory factory) {
    leftChild_  = leftChild;
    rightChild_ = rightChild;
    key_        = key.toString();
    factory_    = factory;
  }

  @Override
  protected java.lang.String getKey() { return key_; }

  public Object get(X x, Object key) {
    java.lang.String skey = key.toString();
    int comp = skey.compareTo(key_);
    if ( comp == 0 ) return factory_.create(x);
    if ( comp < 0  ) return getLeftChild().get(x, skey);
    return getRightChild().get(x, skey);
  }

  @Override
  public java.lang.String toString() {
    return getLeftChild().toString() + ( "{Key: " + key_ + ", XFactory: "  + factory_ + "}\n" ) + getRightChild().toString();
  }
}


/** Empty Context. Used to create new contexts. **/
public class EmptyX
  extends AbstractX
{
  private static X x_ = new EmptyX().put("facetManager", new SimpleFacetManager());

  private EmptyX() {}

  public static X instance() { return x_; }

  public Object get(X x, Object key) { return null; }

  public X put(Object key, Object value) {
    return new XI(this, this, key, value);
  }

  public X putFactory(Object key, XFactory factory) {
    return new FactoryXI(this, this, key, factory);
  }

  @Override
  public java.lang.String toString() { return ""; }
}
