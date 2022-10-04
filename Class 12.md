# Class 12

## Here is my Class 12 reading notes

[Web Sockets](https://en.wikipedia.org/wiki/WebSocket)

1. WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011. The current API specification allowing web applications to use this protocol is known as WebSockets. It is a living standard maintained by the WHATWG and a successor to The WebSocket API from the W3C.

    WebSocket is distinct from HTTP. Both protocols are located at layer 7 in the OSI model and depend on TCP at layer 4. Although they are different, RFC 6455 states that WebSocket "is designed to work over HTTP ports 443 and 80 as well as to support HTTP proxies and intermediaries", thus making it compatible with HTTP. To achieve compatibility, the WebSocket handshake uses the HTTP Upgrade header to change from the HTTP protocol to the WebSocket protocol.

    The WebSocket protocol enables interaction between a web browser (or other client application) and a web server with lower overhead than half-duplex alternatives such as HTTP polling, facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the server to send content to the client without being first requested by the client, and allowing messages to be passed back and forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the server. The communications are usually done over TCP port number 443 (or 80 in the case of unsecured connections), which is beneficial for environments that block non-web Internet connections using a firewall. Similar two-way browser–server communications have been achieved in non-standardized ways using stopgap technologies such as Comet or Adobe Flash Player.
"Quoting from the reading material"

2. The handshake starts with an HTTP request/response, allowing servers to handle HTTP connections as well as WebSocket connections on the same port. Once the connection is established, communication switches to a bidirectional binary protocol which does not conform to the HTTP protocol.
"Quoting from the reading material"

3. Web Sockets provide a  standardized way for the server to send content to the client without being first requested by the client, and allowing messages to be passed back and forth while keeping the connection open.
"Quoting from the reading material"

[Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)

1. Socket.IO is a JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts − a client-side library that runs in the browser, and a server-side library for node.js. Both components have an identical API.
"Quoting from the reading material"

2. socket.emit() send a message to all the connected clients. This code will notify when a user connects to the server.
"Quoting from the reading material"

[Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)

1. Differences between WebSocket and Socket.IO
The main advantages of Socket.IO over WebSockets are:

* Unlike WebSocket, Socket.IO allows you to broadcast a message to all the connected clients. For instance, if you’re writing a chat application and you want to notify all the connected clients that a new user has joined the chat, you can easily broadcast that message in one shot to everyone. Using plain WebSocket, you’ll need a list of all the connected clients and then send the message directly one by one.

* Proxies and load balancers make WebSockets hard to implement and scale. Socket.IO supports these technologies out of the box.

* As said before, Socket.IO can fall back to technologies other than WebSockets when the client doesn’t support it.

* If (for some reason) a WebSocket connection drops, it will not automatically reconnect… but guess what? Socket.IO handles that for you!

* Socket.IO APIs are built to be easier to work with.

"Quoting from the reading material"

2. Socket.IO
Socket.IO is a JavaScript library built on top of WebSocket… and other technologies. In fact, it uses WebSockets when available, but it’s ready to fall back to other technologies such as Flash Socket, AJAX Long Polling, AJAX Multipart Stream, and many more; that allows Socket.IO to be used in contexts where WebSockets are not supported. There’s an amazing article in the Ably blog which describes its features in depths.
"Quoting from the reading material"

3. WebSockets

    When talking about WebSockets, we refer to a web communication protocol that provides a full-duplex communication channel over a single TCP connection. In few words, it allows interactions between client and server with minimum overhead, allowing us to build applications that use the advantages of real-time communications.

    For instance, imagine if you’re building a chat app: you need to receive and send data as soon as possible, right? Well, that’s the right job for WebSockets! You can open one TCP connection and share data leaving it open as long as you need it.

    WebSockets first appeared in 2010 in Google Chrome 4, and the first RFC (RFC 6455) has been published one year later, in 2011.

    Great use cases for WebSockets includes:

* Chat Applications
* Multiplayer Games
* Collaborative Editing
* Social Feeds
* Location-based Applications
