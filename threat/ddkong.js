var threatdata = {
    "name": "DDKONG",
    "alias": "DDKONG",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "DDKONG",
        "names": [
            {
                "name": "DDKONG"
            }
        ],
        "description": "(Palo Alto) The malware in question is configured with the following three exported functions:\n\u2022 ServiceMain\n\u2022 Rundll32Call\n\u2022 DllEntryPoint\n\nThe ServiceMain exported function indicates that this DLL is expected to be loaded as a service. If this function is successfully loaded, it will ultimately spawn a new instance of itself with the Rundll32Call export via a call to rundll32.exe.\nThe Rundll32Call exported function begins by creating a named event named \u2018RunOnce\u2019. This event ensures that only a single instance of DDKong is executed at a given time. If this is the only instance of DDKong running at the time, the malware continues. If it\u2019s not, it dies. This ensures that only a single instance of DDKong is executed at a given time.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-rancor-targeted-attacks-south-east-asia-using-plaintee-ddkong-malware-families/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0255/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ddkong"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DDKONG"
        ],
        "uuid": "84cd6758-4303-4a23-a102-3853651997fa",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "ddkong",
    "analysis": null
};