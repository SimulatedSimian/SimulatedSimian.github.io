---
layout: stdmain
title: Simulated Simian

projectname: Test 
projectdesc: Its a Test!
projectrepo: https://github.com/SimulatedSimian/
---

test

```C++
int main(int argc, char* argv[])
{
	timeBeginPeriod(1);
    SetConsoleCtrlHandler((PHANDLER_ROUTINE) ctrlHandler, TRUE); 

    neo::CommandOptionParser cp;

    try
    {
        setupCommandOptions(cp);
        cp.parse(argc, argv);
    }
    catch (neo::CommandOptionException& e)
    {
        cerr << e.getMessage() << endl;
        return -1;
    }

    TCPTraceSettings settings;

    if (populateSettings(cp, settings))
    {
        try
        {
            net::InitWinsock initWS (2, 2);

            if (cp.getOption(optionCharOutputMode).isPresent())
                doTraceTCP (settings, CondensedTraceOutput(), g_traceTerminator);
            else
                doTraceTCP (settings, StandardTraceOutput(), g_traceTerminator);

        }
		catch (std::exception& e)
		{
			cerr << e.what() << endl;
		}
        catch (std::string& e)
        {
            cerr << endl << e << endl;
        }       
    }

    return 0;
}

```
