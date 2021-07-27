---
title: Multitenancy for XMPP Server
---
SumApp is the next generation realtime enterprise collaboration platform. 
One of the most important feature of SumApp is video, audio and text conferencing. 
SumApp being a multi-tenant application, we need to extend same multi tenancy 
also to video conferencing server.

The aim of this abstract is to outline approaches to build such a multi-tenant 
environment for the conferencing server.

If we look at the available options, we can
 - Spin separate container/pod per domain
 - Extend Apache Vysper bosh endpoint implementation and hook in multiple domains
 - Let the domain be a generic one e.g. sum-app.com and tenant information be encoded in jid

So far, we tend to incline with third option as -
 - Users are synchronized with this approach from keycloak to rethink
 - No need to override the Vysper implementation and allows us to use openfire out of box
 - No need to burn separate resources per domain e.g. pod quota, ingress
