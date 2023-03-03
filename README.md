# caps
Author: Adrienne frey

# Description

Lab 11:
 In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

Lab 12:
The goal of this lab is to create a namespaced Socket.io event server, and to configure Vendor and Driver Client Modules.

The Socket Server will create a namespace of caps that will receive all CAPS event traffic.
Each Vendor and Driver Client will connect to the caps namespace.
The server will emit specific events to each socket that is listening for their designated events from the Global Event Pool defined in the Server.
Each Vendor will only emit and listen for specific events based on their Vendor ID. This will be managed by rooms within Socket.io.
Each Driver will “pick up” a package when the vendor notifies the Server that an “order” is ready and simulate “in-transit” and “delivered” events.

Lab 13:
In this final phase, we’ll be implementing a “Queue” feature on the Server, allowing Driver and Vendor clients to subscribe to messages added to pickup and delivered queues.

We are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and “scanning” package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive “delivery” notifications from the Queue system.


# User Stories

Lab 11:
As a vendor, I want to alert the system when I have a package to be picked up. As a driver, I want to be notified when there is a package to be delivered.
As a driver, I want to alert the system when I have picked up a package and it is in transit. As a driver, I want to alert the system when a package has been delivered.
As a vendor, I want to be notified when my package has been delivered

As a developer, I want to use industry standards for managing the state of each package. As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

Lab 12:
As a vendor, I want to alert the system when I have a package to be picked up. As a driver, I want to be notified when there is a package to be delivered. As a driver, I want to alert the system when I have picked up a package and it is in transit. As a driver, I want to alert the system when a package has been delivered. As a vendor, I want to be notified when my package has been delivered.

As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications

Lab 13:
As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered. As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log. As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver. As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything. As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

As a developer, I want to create a system of tracking who is subscribing to each event.
As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

# UML

![LAB 11 & 12 & 13](assets/Lab11UML.png)

# Collaborators:
John Chavez - code used during code review
Ryan Gallaway - code during demo/code review
Joe Davitt 
Ken Holt
Rafael Aldana
Marco Villifana
