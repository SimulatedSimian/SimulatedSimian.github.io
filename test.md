---
layout: stdmain
title: Simulated Simian

projectname: Test 
projectdesc: Its a Test!
projectrepo: https://github.com/SimulatedSimian/
---

test

```C++
BOOL ctrlHandler(DWORD ctrlType) 
{ 
    switch (ctrlType) 
    { 
        case CTRL_C_EVENT: 
        case CTRL_CLOSE_EVENT: 
        case CTRL_BREAK_EVENT: 
        case CTRL_LOGOFF_EVENT: 
        case CTRL_SHUTDOWN_EVENT: 
            g_traceTerminator.setTerminate();
            return TRUE;
        default: 
            return FALSE; 
    } 

    return TRUE;
} 
```
