var threatdata = {
    "name": "IronNetInjector",
    "alias": "IronNetInjector",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "IronNetInjector",
        "names": [
            {
                "name": "IronNetInjector"
            }
        ],
        "description": "(Palo Alto) IronNetInjector is made of an IronPython script that contains a .NET injector and one or more payloads. The payloads can be also .NET assemblies (x86/64) or native PEs (x86/64). When an IronPython script is run, the .NET injector gets loaded, which in turn injects the payload(s) into its own or a remote process.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/ironnetinjector/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0581/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ironnetinjector"
        ],
        "uuid": "db8af4a3-93ac-429e-896d-7fe469e8d1ad",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "ironnetinjector",
    "analysis": null
};