---
title: Document View Command Framework
---
SumApp is the next generation realtime enterprise collaboration platform. 
The reach and desirability of such a platform is accentuated by the ability to manage and 
maintain content. A true cross platform solution shall support content editors that work 
natively on web and require no further plugins or applets (even if requires some polyfills).

The aim of this abstract is to outline approaches to build such a generic 
framework for content editors.

If we look at the available options, we have 
 - XML-XSLT based editors like Eclipse EMF
 - D3js with its excellent document driven approach
 - Draw.io / Diagram.net
 - MathJax and other LaTeX libraries
 - Three.js for 3D visualizations
 - Microsoft Office Online ActiveX based controls
 - VNC based hosted editors for anything complex. In the past linux X windowing system was an excellent example of such distributed editors.

We aim to study various approaches possible today and prepare a draft for target 
framework for content editing. The product quality attributes governing such a 
framework shall be
 - Multitenancy
 - Extensibility
 - Performance
 - Usability, the order does not reflect significance.