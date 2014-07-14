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

# Welcome to tracetcp.

tracetcp is a command line traceroute utility for WIN32 that uses TCP SYN packets rather than ICMP/UDP packets that the usual implementations use, thus bypassing gateways that block traditional traceroute packets.

In addition to providing the functionality of the standard traceroute utility tracetcp allows a trace to be performed over any TCP port. This allows the discovery of what ports a filewall blocks and also the presence of any transparent proxies that have been put in place.

# System Requirements

You **MUST** install the [winpcap library](http://www.winpcap.org) for this version to work. tracetcp has been tested with version 3.* and 4.* of this library.

Previous versions of tracetcp used raw sockets but Microsoft took out support for Raw TCP sockets in XP SP2, and as tracetcp uses this feature it caused it to stop working.

There is an article about this here that may be of interest [here](http://seclists.org/lists/nmap-hackers/2005/Apr-Jun/0000.html).

In order to allow the program to function with XP sp2 it now uses the winpcap library to send and receive packets. The downside of using this is that the program will not function over dial-up connections. 

tracetcp has been tested on on Windows XP, Vista & 7. You must be logged on to the System as a user that has administrator rights to use tracetcp.

# Installation

You MUST install the [winpcap library](http://www.winpcap.org) first.
Just copy tracetcp.exe into a directory that is in you system PATH.

# Usage

From the command prompt:


```
tracetcp host [options]
    where host = hostName|ipAddress[:portNumber|serviceName]
    if portNumber or serviceName is not present then port 80 (http) 
    is assumed.

Options:
    -?            Displays help information.

    -c            Select condensed output mode

    -h start_hop  Starts trace at hop specified.

    -m max_hops   Maximum number of hops to reach target.

    -n            No reverse DNS lookups for each node.

    -p num_pings  # of pings per hop (default 3).

    -r p1 p2      Multiple traces from port p1 to p2.

    -t timeout    Wait timeout milliseconds for each reply.

    -v            Displays version information.

    -s p1 p2      Easy port scan mode. gives the same result as
                  setting the following options:
                  -cnr p1 p2 -h 128 -m 1 -p 1

    -F            Disables the Anti-flood timer. Normally tracetcp
                  waits *at least* 0.5 seconds between sending out 
                  each packet, because if the packets are sent too 
                  fast some host seem to detect this as some form of 
                  flood and stop responding for a time. This option 
                  disables the 0.5 second timer, so the traces occur
                  faster.

    -R            Use raw socket interface to send/receive packets
                  this will not work on XP sp2. 
                  (you still need winpcap installed)

    -g address    use the specified host as a a gateway to remote
                  systems rather than the default gateway.


Examples:
    tracetcp www.microsoft.com:80 -m 60
    tracetcp post.sponge.com:smtp
    tracetcp 192.168.0.1 -n -t 500
```

