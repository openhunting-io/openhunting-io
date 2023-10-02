var threatdata = {
    "name": "SymonLoader",
    "alias": "SymonLoader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SymonLoader",
        "names": [
            {
                "name": "SymonLoader"
            }
        ],
        "description": "(Palo Alto) When executed, the loader starts monitoring storage device changes on a compromised machine. If SymonLoader detects the targeted type of secure USB drive, it attempts to access the storage through the device driver corresponding to the secure USB and checks for strings specific to one type of secure USB in the drive information fields. Then, it accesses a predefined location of the storage on the USB and extracts an unknown PE file.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-tick-group-weaponized-secure-usb-drives-target-air-gapped-critical-systems/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SymonLoader"
        ],
        "uuid": "fbb29314-33cd-4170-9df9-801828cc3742",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "symonloader",
    "analysis": null,
    "articles": [],
    "mitre": []
};