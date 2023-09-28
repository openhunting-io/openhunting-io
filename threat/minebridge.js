var threatdata = {
    "name": "MINEBRIDGE",
    "alias": "MINEBRIDGE, MINEBRIDGE RAT, GazGolder",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "MINEBRIDGE",
        "names": [
            {
                "name": "MINEBRIDGE"
            },
            {
                "name": "MINEBRIDGE RAT"
            },
            {
                "name": "GazGolder"
            }
        ],
        "description": "(FireEye) MINEBRIDGE is a 32-bit C++ backdoor designed to be loaded by an older, unpatched instance of the legitimate remote desktop software {{TeamViewer}} by DLL load-order hijacking. The backdoor hooks Windows APIs to prevent the victim from seeing the TeamViewer application. By default, MINEBRIDGE conducts command and control (C2) communication via HTTPS POST requests to hard-coded C2 domains. The POST requests contain a GUID derived from the system\u2019s volume serial number, a TeamViewer unique id and password, username, computer name, operating system version, and beacon interval. MINEBRIDGE can also communicate with a C2 server by sending TeamViewer chat messages using a custom window procedure hook. Collectively, the two C2 methods support commands for downloading and executing payloads, downloading arbitrary files, self-deletion and updating, process listing, shutting down and rebooting the system, executing arbitrary shell commands, process elevation, turning on/off TeamViewer's microphone, and gathering system UAC information.\n\nMINEBRIDGE\u2019s default method of communication is sending HTTPS POST requests over TCP port 443. This method of communication is always active; however, the beacon-interval time may be changed via a command. Before sending any C2 beacons, the sample waits to collect the TeamViewer generated unique id (<tv_id>) and password (<tv_pass>) via SetWindowsTextW hooks.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2020/01/stomp-2-dis-brilliance-in-the-visual-basics.html",
            "https://www.zscaler.com/blogs/security-research/return-minebridge-rat-new-ttps-and-social-engineering-lures",
            "https://labs.sentinelone.com/breaking-ta505s-crypter-with-an-smt-solver/",
            "https://blog.morphisec.com/minebridge-on-the-rise-sophisticated-delivery-mechanism"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.minebridge"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MINEBRIDGE"
        ],
        "uuid": "a84d3839-83ef-427c-b914-f46018515096",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "minebridge",
    "analysis": null
};