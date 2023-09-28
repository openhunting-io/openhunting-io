var threatdata = {
    "name": "PupyRAT",
    "alias": "PupyRAT, Pupy, pupy",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2023-02-15",
    "all_data": {
        "tool": "PupyRAT",
        "names": [
            {
                "name": "PupyRAT"
            },
            {
                "name": "Pupy"
            },
            {
                "name": "pupy"
            }
        ],
        "description": "Pupy is an open-source, cross-platform RAT and post-exploitation framework mainly written in python. Pupy can be loaded from various loaders, including PE EXE, reflective DLL, Linux ELF, pure python, powershell and APK. Most of the loaders bundle an embedded python runtime, python library modules in source/compiled/native forms as well as a flexible configuration. They bootstrap a python runtime environment mostly in-memory for the later stages of pupy to run in. Pupy can communicate using various transports, migrate into processes, load remote python code, python packages and python C-extensions from memory.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/blog/iranian-pupyrat-bites-middle-eastern-organizations",
            "https://blog.cyber4sight.com/2017/02/malicious-powershell-script-analysis-indicates-shamoon-actors-used-pupy-rat/",
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html",
            "https://researchcenter.paloaltonetworks.com/2017/02/unit42-magic-hound-campaign-attacks-saudi-targets/",
            "https://github.com/n1nj4sec/pupy",
            "https://labs.k7computing.com/index.php/pupy-rat-hiding-under-werfaults-cover/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0192/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.pupy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/py.pupy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pupy"
        ],
        "uuid": "7b6db856-4677-46f4-b422-1272cbb8c783",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pupyrat",
    "analysis": null
};