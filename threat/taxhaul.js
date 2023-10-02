var threatdata = {
    "name": "TAXHAUL",
    "alias": "TAXHAUL",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "TAXHAUL",
        "names": [
            {
                "name": "TAXHAUL"
            }
        ],
        "description": "(Mandiant) TAXHAUL is a DLL that, when executed, decrypts a shellcode payload expected at C:\\Windows\\System32\\config\\TxR\\<machine hardware profile GUID>.TxR.0.regtrans-ms. Mandiant has seen TAXHAUL persist via DLL search order hijacking.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/3cx-software-supply-chain-compromise"
        ],
        "uuid": "71b734a7-1ca4-457f-97bd-d6112e85c41f",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "taxhaul",
    "analysis": null,
    "articles": [],
    "mitre": []
};