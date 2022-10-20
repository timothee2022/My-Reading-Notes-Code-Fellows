# Class 19

## Here is my Class 19 reading notes

[AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

1. Difference between SQS and SNS:

![SQS vs SNS](../SQS%20vs%20SNS.PNG)

SQS and SNS are important components for scalable, large scale, distributed, cloud-based applications:

* SNS is a distributed publish-subscribe service.

* SQS is distributed queuing service.

"Quoting from the reading material"

2. Use Cases

Choose SNS if:

* You would like to be able to publish and consume batches of messages.
* You would like to allow same message to be processed in multiple ways.
* Multiple subscribers are needed.

Choose SQS if:

* You need a simple queue with no particular additional requirements.
* Decoupling two applications and allowing parallel asynchronous processing.
* Only one subscriber is needed.

"Quoting from the reading material"

3. Send Push Notifications

In AWS SNS push notification, the app user can create a topic. A publisher sends notifications to the topics. Amazon SNS service matches the topic to a list of subscribers who have subscribed to that topic and sends the notification to each of those subscribers.

"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>