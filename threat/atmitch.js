var threatdata = {
    "name": "ATMitch",
    "alias": "ATMitch",
    "category": "Malware",
    "type": "ATM malware, Backdoor",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "ATMitch",
        "names": [
            {
                "name": "ATMitch"
            }
        ],
        "description": "(Kaspersky) The malware, which we have dubbed ATMitch, is fairly straightforward. Once remotely installed and executed via Remote Desktop Connection (RDP) access to the ATM from within the bank, the malware looks for the \u201ccommand.txt\u201d file that should be located in the same directory as the malware and created by the attacker.\n\nAfter execution, ATMitch writes the results of this command to the log file and removes \u201ccommand.txt\u201d from the ATM\u2019s hard drive.\n\nThe malware uses the standard XFS library to control the ATM. It should be noted that it works on every ATM that supports the XFS library (which is the vast majority).",
        "category": "Malware",
        "type": [
            "ATM malware",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/atmitch-remote-administration-of-atms/77918/",
            "https://blog.yoroi.company/research/atmitch-new-evidence-spotted-in-the-wild/",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.atmitch"
        ],
        "uuid": "2c14cee1-e5ec-4c33-bce9-7d87d9e5ced4",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "atmitch",
    "analysis": null
};