/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.core;

public class ContextAgentRunnable
  implements Runnable
{
  final X            x_;
  final ContextAgent agent_;
  final java.lang.String description_;

  public ContextAgentRunnable(X x, ContextAgent agent, java.lang.String description) {
    x_     = x;
    agent_ = agent;
    description_ = description;
  }

  public java.lang.String toString() {
    return description_;
  }

  public void run() {
    agent_.execute(x_);
  }
}
