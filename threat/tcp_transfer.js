var threatdata = {
    "name": "Tcp_transfer",
    "alias": "Tcp_transfer",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2021-01-06",
    "all_data": {
        "tool": "Tcp_transfer",
        "names": [
            {
                "name": "Tcp_transfer"
            }
        ],
        "description": "(Bitdefender) The executable binds to \u201c0.0.0.0:8080\u2019 address and starts listening for local connection. For each incoming connection on the local address, it creates a new connection to the C&C and start receiving and sending the data.\nThe goal of such tool is to bypass network restriction such that the compromised machines that are not connected directly to the internet can communicate with the C&C through another compromised machine that has an internet connection.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf"
        ],
        "uuid": "c15386a1-c3f9-4c8b-ac4d-47588edbef70",
        "last-card-change": "2021-01-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tcp_transfer",
    "analysis": null,
    "articles": [],
    "mitre": []
};