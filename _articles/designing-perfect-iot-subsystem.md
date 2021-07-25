---
title: Designing a perfect IoT subsystem
thumbnail: "/assets/images/articles/iot.jpg"
---

_**IoT promotes a heightened level of awareness about our world, ‘Reach out and touch somebody’ is becoming ‘reach out and touch everything’**_

## Motivation
Why another IoT platform? Don't we have enough already? No, on the contrary.

The five most important characteristics on an ideal IoT platform -
- *Security*: Securing both data and communication channels without compromising flexibility of installation.
- *Scalability*: A scalable architect is configurable to any industrial environment handling growth in data and devices.
- *Reliability*: Mitigating intermittent connections and failover ensuring disaster recovery and predictable data processing.
- *Extensibility*: Meet specific business requirements with minimum learning curve.
- *Modularity*: Componentizing IoT solutions for maximum reuse.

{% capture hbox-left %}
Why subsystem? Why not platform?

All major hyperscalers (GCP, AWS and Azure) have mature NoSQL DBs, Container based edge devices, and business services. Instead of reinventing the wheel, we build the system that is pluggable with the infrastructure components out of box.
{% endcapture %}
{% capture hbox-right %}
![IoT Platform](/assets/images/articles/iot-platform.png)
{% endcapture %}
{%- include hbox.html left=hbox-left right=hbox-right style="2fr 1fr" -%}

## Components
The basic element of modeling in IoT is a Thing (No price for guess, given that IoT stands for Internet of Things eh)

{% capture hbox-left %}
![Configuration](/assets/images/articles/iot-config.png)
{% endcapture %}
{% capture hbox-right %}
A Thing is a logical abstraction of any business object / processes / physical asset of relevance in the system. Typical examples are - Vehicles, containers, machines, plants, warehouses, planning, decommissioning etc.

Thing type hierarchies allow system to be generalized by encapsulating and inheriting behaviors. At the same time the thing hierarchies allow commonalities between things. For example consider thresholds to be defined for all containers per plant they are physically located in.
{% endcapture %}
{%- include hbox.html left=hbox-left right=hbox-right style="1fr 2fr" -%}

A property set is any value that the things of the type emit during operation. Every property set results into a time series to be evaluated or a stream to be notified of. A property set could be set of measures emitted by a sensor periodically, values configured for defining behavior or triggers for business events. The events could be reflecting a business situation, response to an application rule, triggers scheduled at a fixed frequency or events marked to monitor a sensor pattern after the application rule is processed.

![Properties](/assets/images/articles/iot-entities.png)

### Rules
IoT systems require processing of data in motion ― in other words, computing on data directly as it is produced or received. These rules are typically operating at discrete events.

{% capture hbox-left %}
Upon receiving an event from a data stream, the application reacts to the event immediately. The application might trigger an action, update an aggregate, or “remember” the event for future use. Computations can also handle multiple streams jointly, and each computation over the event data stream may produce other event data streams.
{% endcapture %}
{% capture hbox-right %}
![Time Series](/assets/images/articles/iot-timeseries.png)
{% endcapture %}
{%- include hbox.html left=hbox-left right=hbox-right style="2fr 1fr" -%}

Rule engines are designed to focus on the high throughput stream execution. Executions over streams are generally "continuous," executing for long periods of time and returning incremental results. Operations include: selecting from a stream, Stream-Relation Joins, Union and Merge, and Windowing and Aggregation operations.

![Rules](/assets/images/articles/iot-rules.png)

The core artefact rule runs on one or more property sets. Property sets could be stream of measure values, time dependent configuration parameters or event triggers from earlier rule. The combination consists of stream delimited by the join of all properties. A rule can have windowing interval defined for rule to operate on distinct or aggregated values in the the interval.

{% capture hbox-left %}
![Process Context](/assets/images/articles/iot-context.png)
{% endcapture %}
{% capture hbox-right %}
The processing logic is defined using process steps with application defined scripts, checks using exclusive or parallel gateways and actions in form of external service calls or event triggers. At any point in the processing variables can be written or read from the context.
{% endcapture %}
{%- include hbox.html left=hbox-left right=hbox-right style="1fr 2fr" -%}

### Code push down
IoT processing can be performed at three levels: IoT devices, edge nodes, and servers over cloud. The need for processing at each level depends on the time sensitiveness of the application. For example, sometimes things need to make real-time decisions to avoid a critical situation. This fast decision making would not be possible through transferring data from the devices to cloud instances and return the results back to the devices. Instead, all the operation should be performed locally in the device. This require rules to be transplied in a container based deployment model. All majorly used microcontrollers available today support container based deployments. See [Balena](https://www.balena.io/os/) OS for one such example.

### Special use cases
**Ingesting out of band data**: No matter how reliable and robust the application architecture might be, we still have situations where data frames are not ingested owing to bad network connection, race condition resulting out of slow processing at destination. A reliable IoT system should be able to relay buffered out of band data during quieter time frames along with aggregating sensor data with next in sync data frame.

{% capture hbox-left %}
**One time callbacks**: We often run into situations where the business applications depend on synchronous processing on IoT sensor data or condition. The rules we define then should be able to publish event or results to an application defined one time callback.
{% endcapture %}
{% capture hbox-right %}
![Sequence](/assets/images/articles/iot-sequence.png)
{% endcapture %}
{%- include hbox.html left=hbox-left right=hbox-right style="2fr 1fr" -%}

## Conclusion
We are working on a spring based implementation of an IoT subsystem with above specification. Stay tuned to this space for further details. Ciao

## What's next?
- Evaluating IoT readiness - Playback situations ...coming soon
- Democratizing home automation ...coming soon
- Modelling IoT Content - Why No Code ...coming soon
- IoT and Analytics - The Sweet Spot ...coming soon
- Geo location processing ...coming soon