var threatdata = {
    "name": "SierraCharlie",
    "alias": "SierraCharlie",
    "category": "Malware",
    "type": "Loader, Worm",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SierraCharlie",
        "names": [
            {
                "name": "SierraCharlie"
            }
        ],
        "description": "(Novetta) SierraCharlie is a spreader that appears to target RDP as its vector for propagation. Novetta has not spent a significant amount of time investigating the SierraCharlie family before publication, but the following characteristics of the malware family are known:\n1. The random IP generation code found in both SierraJuliett-MikeOne and SierraBravo can be found within SierraCharlie\n2. SierraCharlie, structurally speaking, is heavily object oriented (C++)\n3. The suicide script within SierraCharlie is consistent with other Lazarus Group malware families\n4. The propagation mechanism appears to focus on RDP\n5. At least one sample identifies the malware\u2019s program name as \u201cRDPBForce\u201d\n6. At least two samples have two distinct version information entries with in the resource section with one entry in English and the other in Korean.",
        "category": "Malware",
        "type": [
            "Loader",
            "Worm"
        ],
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "uuid": "48f2f3da-c0d2-49f9-b71a-a9560fd3b528",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sierracharlie",
    "analysis": null,
    "articles": [],
    "mitre": []
};