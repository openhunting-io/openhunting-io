var threatdata = {
    "name": "USBCulprit",
    "alias": "USBCulprit",
    "category": "Malware",
    "type": "Info stealer, Worm",
    "modified": "2021-05-15",
    "all_data": {
        "tool": "USBCulprit",
        "names": [
            {
                "name": "USBCulprit"
            }
        ],
        "description": "(Kaspersky) One of the most notable examples in Cycldek\u2019s toolset that demonstrates both data stealing and lateral movement capabilities is a malware we discovered and dubbed USBCulrpit. This tool, which we saw downloaded by {{RedCore}} implants in several instances, is capable of scanning various paths in victim machines, collecting documents with particular extensions and passing them on to USB drives when they are connected to the system. It can also selectively copy itself to a removable drive in the presence of a particular file, suggesting it can be spread laterally by having designated drives infected and the executable in them opened manually.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Worm"
        ],
        "information": [
            "https://securelist.com/cycldek-bridging-the-air-gap/97157/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.usbculprit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:usbculprit"
        ],
        "uuid": "2efd7c09-c2d3-4e8c-b48b-5cda7a3a80e8",
        "last-card-change": "2021-05-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "usbculprit",
    "analysis": null
};