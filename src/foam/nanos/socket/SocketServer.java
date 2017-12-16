/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.nanos.socket;

import foam.core.*;
import foam.nanos.logger.Logger;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.util.HashMap;

public class SocketServer
  extends    java.net.ServerSocket
  implements foam.core.ContextAware, Runnable
{
  // ContextAware support.
  protected X x;

  public void setX(X x) {
    this.x = x;
  }

  public X getX() {
    return x;
  }

  public X getY() {
    return x;
  }

  protected foam.nanos.box.NanoServiceRouter router_ = null;

  protected foam.nanos.box.NanoServiceRouter getRouter() {
    if ( router_ == null ) {
      router_ = getX().create(foam.nanos.box.NanoServiceRouter.class);
    }

    return router_;
  }

  public SocketServer(int port) throws java.io.IOException {
    super(port);
  }

  public void start() {
    System.out.println("STARTING!");
    new Thread(this).start();
  }

  @Override
  public void run() {
    while (true) {
      try {
        addSocket(accept());
      } catch(java.io.IOException e) {
        System.out.println("Failed to accept connection:" + e.toString());
      }
    }
  }

  private void addSocket(final Socket clientSocket) {
    new Thread(new Runnable() {
      public void run() {
        try {
          java.io.PrintWriter out =
              new java.io.PrintWriter(clientSocket.getOutputStream(), true);
          final java.io.InputStream in = clientSocket.getInputStream();

          while (true) {
            byte[] sizeBytes = new byte[4];
            if (in.read(sizeBytes) == -1) {
              break;
            }
            for (int i = 0; i < sizeBytes.length/2; i++) {
              byte b = sizeBytes[i];
              sizeBytes[i] = sizeBytes[sizeBytes.length - i - 1];
              sizeBytes[sizeBytes.length - i - 1] = b;
            }
            ByteBuffer sizeBuffer = ByteBuffer.wrap(sizeBytes);
            int size = sizeBuffer.getInt();

            byte[] payloadBytes = new byte[size*2];
            in.read(payloadBytes);
            String payload = new String(payloadBytes);
            System.out.println("Payload: " + payload);
            onMessage(payload, clientSocket);
          }

          System.out.println("Socket disconnected");
        } catch(java.io.IOException e) {
          System.out.println("Lost a socket: " + e.toString());
        }
      }
    }).start();
  }

  private HashMap<String, Socket> registry = new HashMap<String, Socket>();

  public void onMessage(String message, Socket socket) {
    Logger log = (Logger)getX().get("logger");

    /*
    foam.box.RawSocketBox returnBox = getX().create(foam.box.RawSocketBox.class);
    X requestContext = getX().put("returnBox", returnBox);
    */
    X requestContext = getX();

    FObject request = requestContext.create(foam.lib.json.JSONParser.class).parseString(message);

    if ( request == null ) {
      log.warning("Failed to parse request.", message);
      return;
    }

    if ( ! ( request instanceof foam.box.Message ) ) {
      log.warning("Request was not a box message.", message);
      return;
    }

    if ( request instanceof foam.box.RegisterSelfMessage ) {
      String name = ((foam.box.RegisterSelfMessage)request).getName();
      registry.put(name, socket);
      return;
    }

    System.out.println(request);
  }

}
