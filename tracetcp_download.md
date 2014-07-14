---
layout: stdproject_dl
title: tracetcp

projectname: tracetcp
projectdesc: Traceroute utility that uses tcp syn packets to trace network routes.
projectrepo: https://github.com/SimulatedSimian/tracetcp
projectdownloadURL: https://github.com/SimulatedSimian/tracetcp/releases
projectdownloadtext: v1.0.0
dlcounterapi: https://api.github.com/repos/SimulatedSimian/tracetcp/releases/assets/165755
initialdate: 3rd July 2014

---

# System Requirements

You **MUST** install the [winpcap library](http://www.winpcap.org) for this version to work. tracetcp has been tested with version 3.* and 4.* of this library.

Previous versions of tracetcp used raw sockets but Microsoft took out support for Raw TCP sockets in XP SP2, and as tracetcp uses this feature it caused it to stop working.

There is an article about this here that may be of interest [here](http://seclists.org/lists/nmap-hackers/2005/Apr-Jun/0000.html).

In order to allow the program to function with XP sp2 it now uses the winpcap library to send and receive packets. The downside of using this is that the program will not function over dial-up connections. 

tracetcp has been tested on on Windows XP, Vista & 7. You must be logged on to the System as a user that has administrator rights to use tracetcp.

# Installation

You MUST install the [winpcap library](http://www.winpcap.org) first.
Just copy tracetcp.exe into a directory that is in you system PATH.
