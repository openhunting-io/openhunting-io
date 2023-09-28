var threatdata = {
    "name": "WinPot",
    "alias": "WinPot, ATMPot",
    "category": "Malware",
    "type": "ATM malware",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "WinPot",
        "names": [
            {
                "name": "WinPot"
            },
            {
                "name": "ATMPot"
            }
        ],
        "description": "(Kaspersky) The criminals had clearly spent some time on the interface to make it look like that of a slot machine. Likely as a reference to the popular term ATM-jackpotting, which refers to techniques designed to empty ATMs. In the WinPot case, each cassette has a reel of its own numbered 1 to 4 (4 is the max number of cash-out cassettes in an ATM) and a button labeled SPIN. As soon as you press the SPIN button (in our case it is greyed out because we are actually dispensing cash), the ATM starts dispensing cash from the corresponding cassette. Down from the SPIN button there is information about the cassette (bank note value and the number of bank notes in the cassette). The SCAN button rescans the ATM and updates the numbers under the SLOT button, while the STOP button stops the dispensing in progress.",
        "category": "Malware",
        "type": [
            "ATM malware"
        ],
        "information": [
            "https://securelist.com/atm-robber-winpot/89611/",
            "https://securelist.com/atm-malware-is-being-sold-on-darknet-market/81871/",
            "https://www.association-secure-transactions.eu/east-publishes-fraud-update-2-2018/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.winpot"
        ],
        "uuid": "0d7fed0f-fde7-4243-b936-54e580820edc",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "winpot",
    "analysis": null
};