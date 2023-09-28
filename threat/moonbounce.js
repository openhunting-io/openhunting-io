var threatdata = {
    "name": "MoonBounce",
    "alias": "MoonBounce",
    "category": "Malware",
    "type": "Backdoor, Rootkit",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "MoonBounce",
        "names": [
            {
                "name": "MoonBounce"
            }
        ],
        "description": "(Kaspersky) The UEFI implant, which was detected in spring 2021 , was found to have been incorporated by the attackers into the CORE_DXE component of the firmware (also known as the DXE Foundation), which is called early on at the DXE (Driver Execution Environment) phase of the UEFI boot sequence. Among other things, this component is responsible for initializing essential data structures and function interfaces, one of which is the EFI Boot Services Table \u2013 a set of pointers to routines that are part of the CORE_DXE image itself and are callable by other DXE drivers in the boot chain.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit"
        ],
        "information": [
            "https://securelist.com/moonbounce-the-dark-side-of-uefi-firmware/105468/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.moonbounce"
        ],
        "uuid": "14ee64fb-dbd7-4884-8f6c-f53a1d0f02a5",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "moonbounce",
    "analysis": null
};