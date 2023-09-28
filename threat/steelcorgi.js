var threatdata = {
    "name": "STEELCORGI",
    "alias": "STEELCORGI",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-04-05",
    "all_data": {
        "tool": "STEELCORGI",
        "names": [
            {
                "name": "STEELCORGI"
            }
        ],
        "description": "(FireEye) STEELCORGI is a packer for Linux ELF programs that uses key material from the executing environment to decrypt the payload. When first starting up, the malware expects to find up to four environment variables that contain numeric values. The malware uses the environment variable values as a key to decrypt additional data to be executed.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/live-off-the-land-an-overview-of-unc1945",
            "https://yoroi.company/research/opening-steelcorgi-a-sophisticated-apt-swiss-army-knife/",
            "https://yoroi.company/research/shadows-from-the-past-threaten-italian-enterprises/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.steelcorgi"
        ],
        "uuid": "be20bbeb-da73-447b-9690-442052f15c7d",
        "last-card-change": "2022-04-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "steelcorgi",
    "analysis": null
};