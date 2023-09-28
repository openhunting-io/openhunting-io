var threatdata = {
    "name": "Havex RAT",
    "alias": "Havex RAT, Havex, Oldrea, Backdoor.Oldrea, Fertger, PEACEPIPE",
    "category": "Malware",
    "type": "ICS malware, Reconnaissance, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Havex RAT",
        "names": [
            {
                "name": "Havex RAT"
            },
            {
                "name": "Havex"
            },
            {
                "name": "Oldrea"
            },
            {
                "name": "Backdoor.Oldrea"
            },
            {
                "name": "Fertger"
            },
            {
                "name": "PEACEPIPE"
            }
        ],
        "description": "Havex is a remote access trojan (RAT) that was discovered in 2013 as part of a widespread espionage campaign targeting industrial control systems (ICS) used across numerous industries and attributed to a hacking group referred to as 'Dragonfly' and 'Energetic Bear'. Havex is estimated to have impacted thousands of infrastructure sites, a majority of which were located in Europe and the United States. Within the energy sector, Havex specifically targeted energy grid operators, major electricity generation firms, petroleum pipeline operators, and industrial equipment providers. Havex also impacted organizations in the aviation, defense, pharmaceutical, and petrochemical industries.\n\nOnce installed, Havex scanned the infected system to locate any Supervisory Control and Data Acquisition (SCADA) or ICS devices on the network and sent the data back to command and control servers. To do so, the malware leveraged the Open Platform Communications (OPC) standard, which is a universal communication protocol used by ICS components across many industries that facilitates open connectivity and vendor equipment interoperability. Havex used the Distributed Component Object Model (DCOM) to connect to OPC servers inside of an ICS network and collect information such as CLSID, server name, Program ID, OPC version, vendor information, running state, group count, and server bandwidth.\n\nHavex was an intelligence-collection tool used for espionage and not for the disruption or destruction of industrial systems. However, the data collected by Havex would have aided efforts to design and develop attacks against specific targets or industries.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/07/havex-its-down-with-opc.html",
            "https://www.f-secure.com/weblog/archives/00002718.html",
            "https://en.wikipedia.org/wiki/Havex"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0093/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.havex_rat"
        ],
        "uuid": "459f329c-969d-4046-9d42-504e0d48ca4d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "havex_rat",
    "analysis": null
};