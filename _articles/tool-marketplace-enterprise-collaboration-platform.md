---
title: Tool marketplace for an Enterprise Collaboration Platform
thumbnail: "/assets/images/articles/tools.jpg"
---

A collaboration is a digital workplace where multiple parties come together to achieve a goal. Quite often the goal is achieved by manipulating some or the other content. Different collaboration deal with different content types –
- Documents – text, spreadsheets, presentations
- Visuals – 2D, 3D
- Designs
- Models – Engineering models, simulation models, digital twins

Each of these content formats require specialized tools to view / manipulate objects of the content type.

The challenge now is to provide a unified platform to provision on-demand tooling for geographically, technologically diverse participants. Managing license costs, software dependencies, up-to-date document versions and network latency is a nightmare.

_**Imagine a product engineering organization employing design engineers across the globe and trying to set up CAD software over VMs and remote access.**_

This article proposes a reference architecture for such a tool market place. Since, the tooling needs for different organizations are highly subjective. We envision a market place where providers can publish the tool offerings and organization can subscribe to them.

The below diagram explains the target architecture –

![Container Architecture](/assets/images/articles/cluster-container.png)

Let's understand the target architecture with an example collaboration of step (part 21) file. The organization has subscribed to tool provider for editing step files. The tool provider publishes the tool built on FreeCAD (docker image built on FreeCAD binaries).

Given a design collaboration containing CAD documents in the collaboration. When a participant in the collaboration opens a CAD document. The application would open the document in tool UI. The tool UI is merely a proxy over a pod spawn by the provisioning API. The pod would instantiate a container for the registered image (in this case docker image for FreeCAD) with entrypoint command on the document. The document content would be passed over to the container using persistent volume and volume mount. Any user interaction on tool UI would be relayed to the container using x11 windows socket connection. Resultant screen update would be overlayed on the tool UI canvas.

Stay tuned to a reference implementation...