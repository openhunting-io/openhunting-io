var threatdata = {
    "name": "BlackEnergy",
    "alias": "BlackEnergy, Black Energy",
    "category": "Malware",
    "type": "ICS malware, Reconnaissance, Backdoor, Rootkit, Banking trojan, Keylogger, Info stealer, Wiper, DDoS, Worm",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BlackEnergy",
        "names": [
            {
                "name": "BlackEnergy"
            },
            {
                "name": "Black Energy"
            }
        ],
        "description": "BlackEnergy, its first version shortened as BE1, started as a crimeware being sold in the Russian cyber underground as early as 2007. Initially, it was designed as a toolkit for creating botnets for conducting DDoS attacks. It supported a variety of flooding commands including protocols like ICMP, TCP SYN, UDP, HTTP and DNS. Among the high profile targets of cyber attacks utilising BE1 were a Norwegian bank and government websites in Georgia three weeks before Russo-Georgian War.\n\nVersion 2 of BlackEnergy, BE2, came in 2008 with a complete code rewrite that introduced a protective layer, a kernel-mode rootkit and a modular architecture. Plugins included mostly DDoS attacks, a spam plugin and two banking authentication plugins to steal from Russian nad Ukrainian banks. The banking plugin was paired with a module designed to destroy the filesystem. Moreover, BE2 was able to\n- download and execute a remote file;\n- execute a local file on the infected computer;\n- update the bot and its plugins;\n\nThe Industrial Control Systems Cyber Emergency Response Team issued an alert warning that BE2 was leveraging the human-machine interfaces of industrial control systems like GE CIMPLICITY, Advantech/Broadwin WebAccess, and Siemens WinCC to gain access to critical infrastructure networks.\n\nIn 2014, the BlackEnergy toolkit, BE3, switched to a lighter footprint with no kernel-mode driver component. Its plugins included:\n- operations with victim's filesystem\n- spreading with a parasitic infector\n- spying features like keylogging, screenshoots or a robust password stealer\n- Team viewer and a simple pseudo \u201cremote desktop\u201d\n- listing Windows accounts and scanning network\n- destroying the system\n\nTypical for distribution of BE3 was heavy use of spear-phishing emails containing Microsoft Word or Excel documents with a malicious VBA macro, Rich Text Format (RTF) documents embedding exploits or a PowerPoint presentation with zero-day exploit CVE-2014-4114.\n\nOn 23 December 2015, attackers behind the BlackEnergy malware successfully caused power outages for several hours in different regions of Ukraine. This cyber sabotage against three energy companies has been confirmed by the Ukrainian government. The power grid compromise has become known as the first-of-its-kind cyber warfare attack affecting civilians.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Reconnaissance",
            "Backdoor",
            "Rootkit",
            "Banking trojan",
            "Keylogger",
            "Info stealer",
            "Wiper",
            "DDoS",
            "Worm"
        ],
        "information": [
            "https://www.recordedfuture.com/blackenergy-malware-analysis/",
            "https://threatconnect.com/blog/casting-a-light-on-blackenergy/",
            "https://securelist.com/blackenergy-apt-attacks-in-ukraine-employ-spearphishing-with-word-documents/73440/",
            "https://securelist.com/be2-extraordinary-plugins-siemens-targeting-dev-fails/68838/",
            "https://securelist.com/be2-custom-plugins-router-abuse-and-target-profiles/67353/",
            "https://marcusedmondson.com/2019/01/18/black-energy-analysis/",
            "https://en.wikipedia.org/wiki/BlackEnergy"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0089/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackenergy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:blackenergy"
        ],
        "uuid": "71a41973-bea6-4f24-a218-afb42673d16d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "blackenergy",
    "analysis": null
};