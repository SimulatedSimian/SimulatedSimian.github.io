---
layout: stdproject
title: tracetcp - download

projectname: tracetcp
projectdesc: Traceroute utility that uses tcp syn packets to trace network routes.
projectrepo: https://github.com/SimulatedSimian/tracetcp
projectdownloadURL: https://github.com/0xcafed00d/tracetcp/releases
projectdownloadtext: v1.0.3
dlcounterapi: https://api.github.com/repos/0xcafed00d/tracetcp/releases
initialdate: 3rd July 2014

---

# System Requirements

You **MUST** install the [winpcap library](http://www.winpcap.org) for this version to work. tracetcp has been tested with version 3.* and 4.* of this library.

Previous versions of tracetcp used raw sockets but Microsoft took out support for Raw TCP sockets in XP SP2, and as tracetcp uses this feature it caused it to stop working.

There is an article about this here that may be of interest [here](http://seclists.org/lists/nmap-hackers/2005/Apr-Jun/0000.html).

In order to allow the program to function with XP sp2 it now uses the winpcap library to send and receive packets. The downside of using this is that the program will not function over dial-up connections. 

tracetcp has been tested on on Windows XP, Vista & 7. You must be logged on to the System as a user that has administrator rights to use tracetcp.


<a href="https://www.digitalocean.com/?refcode=e145b7a8b7a6">
	<img src="images/ssd-virtual-servers-banner-2-728x90.jpg"
  		 alt="Sign up with Digital Ocean and get $10 Free Credit"/>
</a>

# Download
Download the latest version of tracetcp [here](https://github.com/0xcafed00d/tracetcp/releases)


# Installation

You MUST install the [winpcap library](http://www.winpcap.org) first.
Just unzip the downloaded file and copy tracetcp.exe into a directory that is in you system PATH.

# Revision History

### version 1.0.3 24-11-2016
* Add support for HSRP routers (fix provided by Dresco)

### version 1.0.2 07-01-2016
* if destination reached but port is closed, this maybe due to some hosts not allowing connections with ttl = 0. Resend ping with large ttl to see if its really closed. 

### version 1.0.1 05-01-2016
* make a generated SYN packet look as much like a SYN from chrome on windows as packets with no options were being dropped by some hosts

### version 1.0.0 23-06-2014
* Upgraded solution to Visual Studio 2013
* Moved Repo to GitHub

### version 0.99.4 beta 23-05-2005
* fixed problem with in-accurate hop timing.

### version 0.99.3 beta 21-05-2005
* added winpcap support to bypass Microsofts removal of raw tcp sockets in xp sp2.
* added -g option to override the default gateway
* added -R option to revert to using raw sockets

### version 0.99.2 beta 23-04-2004
* Added -s option for "Easy port scan"
* Added abitity to combine options on the command line e.g -cnr 10 30 instead of -c -n - r 10 30
* Updated readme.txt with more info about software firewalls.
* Fixed bug in anti-flood timeout code.
* Added -F option to disable the anti-flood timer.
* complete ip header construction - not leaving any fields for winsock to fill in now.

### version 0.99.1 beta 25-08-2003
* Added start hop option (-h) and changed help to -?
* Added port range option -r to allow port scanning
* Separated Tracing code and results display so that different display formats can be supported.
* Added Condensed output mode (-c)
* Added pings per hop option (-p)
* Fixed a few Problems with the way packets were built
* Visual Studio project files now included in source archive

### version 0.99 beta 19-08-2003
* First release on sourceforge.

### version 0.90beta 21-07-2003
* Internal test version.

