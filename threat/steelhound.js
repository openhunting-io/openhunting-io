var threatdata = {
    "name": "STEELHOUND",
    "alias": "STEELHOUND",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-04-03",
    "all_data": {
        "tool": "STEELHOUND",
        "names": [
            {
                "name": "STEELHOUND"
            }
        ],
        "description": "(Mandiant) Mandiant discovered UNC2891 leveraging a similar ({{STEELCORGI}}) in-memory dropper that also used environment variables to decrypt its embedded payload but instead relied on RC4 encryption, we have named this STEELHOUND. In addition to functioning as dropper for an embedded payload, STEELHOUND is also able to encrypt new payloads by encrypting a target binary and writing it to disk along with a copy of itself and an end-of-file configuration.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/unc2891-overview"
        ],
        "uuid": "7ba6ed83-c174-4edc-8e35-1a8ad536b511",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "steelhound",
    "analysis": null,
    "articles": [],
    "mitre": []
};