var threatdata = {
    "name": "BrutishCommand",
    "alias": "BrutishCommand",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-06-13",
    "all_data": {
        "tool": "BrutishCommand",
        "names": [
            {
                "name": "BrutishCommand"
            }
        ],
        "description": "(Palo Alto) The BrutishCommand loader uses a very interesting method to decrypt the {{FakeM}} functional code. The main function in this loader checks the command line arguments passed to it, and if there are none present it will obtain a random number between 0-9 and create a new process using the same executable with this random number as a command line argument.\n\nIf the executable has a command line argument, the Trojan subjects the value to a hashing algorithm and compares the hash to 0x20E3EEBA. If the value matches the static hash, the executable will subject the command line argument to a second algorithm that will produce a value that the Trojan will use as the decryption key to decrypt the embedded FakeM shellcode. It essentially brute forces its own decryption key by rerunning itself over and over until it runs with the correct value is provided on the command line. Unit 42 had not seen this technique used by other malware families and it introduces a challenging hurdle when attempting to analyze or debug the loader Trojan.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BrutishCommand"
        ],
        "uuid": "3e2c0fb6-a852-47dd-9638-4a04399adbf9",
        "last-card-change": "2020-06-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "brutishcommand",
    "analysis": null,
    "articles": [],
    "mitre": []
};