var threatdata = {
    "name": "EvilBunny",
    "alias": "EvilBunny",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "EvilBunny",
        "names": [
            {
                "name": "EvilBunny"
            }
        ],
        "description": "(Infosec Institute) EvilBunny is written in C++ and is able to detect installed antivirus and other defensive solutions. It includes a Lua 5.1 interpreter, which allows the spyware to execute Lua scripts and change its behavior at runtime.\n\nThe experts discovered that EvilBunny is able to receive commands from the C&C server at least in three different ways, via HTTP, through a downloaded database file or as a scheduled task.\n\nThe EvilBunny malware was initially delivered through a malicious PDF document, exploiting CVE-2011-4369. Once compromised the target the malware is loaded onto the system and infects the PC with EvilBunny malware.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://resources.infosecinstitute.com/animal-farm-apt-and-the-shadow-of-france-intelligence/",
            "https://www.cyphort.com/evilbunny-malware-instrumented-lua/",
            "https://www.gdatasoftware.com/blog/2015/02/24270-babar-espionage-software-finally-found-and-put-under-the-microscope"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0396/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.evilbunny"
        ],
        "uuid": "dbcec021-bbde-487d-85e3-684c4fb7e9bb",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "evilbunny",
    "analysis": null
};