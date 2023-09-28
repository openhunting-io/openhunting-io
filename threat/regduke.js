var threatdata = {
    "name": "RegDuke",
    "alias": "RegDuke",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RegDuke",
        "names": [
            {
                "name": "RegDuke"
            }
        ],
        "description": "(ESET) A recovery first stage, which uses Dropbox as its C&C server. The main payload is encrypted on disk and the encryption key is stored in the Windows registry. It also relies on steganography as above.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2019/10/17/operation-ghost-dukes-never-left/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0511/"
        ],
        "uuid": "760f8de4-7a50-42ff-bd9e-fba58f5f5204",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "regduke",
    "analysis": null
};