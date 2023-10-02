var threatdata = {
    "name": "RomeoNovember",
    "alias": "RomeoNovember",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "RomeoNovember",
        "names": [
            {
                "name": "RomeoNovember"
            }
        ],
        "description": "(Novetta) RomeoNovember is a client-mode RAT that has a strong structural and familial relationship to both {{RomeoAlfa}} (see Section 3) and {{RomeoBravo}} (see Section 4). Romeo-CoreOne-based, structurally RomeoNovember is most like RomeoAlfa, as it operates as a standalone executable, constructs its configuration data structure from hardcoded values, and leverages the same scaffolding for supporting R-C1.\n\nFunctionally, however, RomeoNovember is closer to RomeoBravo than RomeoAlfa. Like RomeoBravo, RomeoNovember uses DNSCALC-style encoding to obfuscate network communication instead of RomeoAlfa\u2019s reliance on fake TLS. The similarity to RomeoBravo also extends to the use of the same base command number (0x523B) and channel ID (0x3456). The commands within R-C1 supported by RomeoNovember are the nearly the same as those supported by RomeoBravo, to the extent that RomeoNovember and RomeoBravo both implement the Secure Delete command with the same code. Only the Upload Directory as Archive command is missing from RomeoNovember.\n\nRomeoNovember\u2019s hybrid nature may indicate an active development period for the developer(s).",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "uuid": "c0f7cd3b-3b65-47f7-8188-2b8b89e51fea",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeonovember",
    "analysis": null,
    "articles": [],
    "mitre": []
};