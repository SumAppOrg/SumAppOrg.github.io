---
title: Process control in Enterprise Collaboration Systems
thumbnail: "/assets/images/articles/process-control.png"
---

**Enterprise collaboration** enables employees in an organization to share information with one another and work together on projects from different geographic locations through a combination of software technologies, networking capabilities and collaborative processes.

**Business process management (BPM)** is a discipline in operations management in which people use various methods to discover, model, analyze, measure, improve, optimize, and automate business processes. Any combination of methods used to manage a company's business processes is BPM. Processes can be structured and repeatable or unstructured and variable.

Business process control ensures that organization best practices are digitized and incorporated in software systems and tools used within the organizations. This article looks at how classical workflow engines are ill equipped to handle enterprise collaborations.
- The classical workflow engines are BPMN based and are good for making models of structured business processes.
- The business process in real world collaborations (be it change management, document management, design collaboration or supplier collaboration) are often emergent and unpredictable.

_**The key is a balance between effectiveness (Doing things right) and efficiency (Doing the right things)**_

Our observations on real world collaborative efforts -
- Every collaborative activity happens in phases. Each phase is event driven, had adhoc / structured actions available.
- The exact course of action is unknown and highly situation specific. Digitizing such a process in procedural model is cumbersome.
- The exact course of action only emerges during process execution when more information becomes available. Contextual instead of transitional.

![Status and Action](/assets/images/articles/status-action.png)

The diagram above depict the process control model of a agile, smart and contextual process control system in collaborative activities.
- **Agile**: A collaboration has multiple phases. Introduction of a phase does not require re-modeling of the entire process flow. The process map is additive.
- **Smart**: Each arrow modeled above depicts a transition to a target phase / action / object and can be guarded by a rule based on available knowledge in the system.
- **Contextual**: The processes are information focused and leverage business events. e.g. editing any document in a collaboration results in the collaboration moving to preparation phase.

Stay tuned to the upcoming reference implementation of this new paradigm in Business Process Management in Collaborations.