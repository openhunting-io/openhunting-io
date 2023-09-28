var threatdata = {
    "name": "ELECTRICFISH",
    "alias": "ELECTRICFISH, Alreay",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ELECTRICFISH",
        "names": [
            {
                "name": "ELECTRICFISH"
            },
            {
                "name": "Alreay"
            }
        ],
        "description": "(US-CERT) This report provides analysis of two malicious 32-bit Windows executable file. The malware implements a custom protocol that allows traffic to be tunneled between a source and a destination Internet Protocol (IP) address. The malware continuously attempts to reach out to the source and the designation system, which allows either side to initiate a tunneling session. The malware can be configured with a proxy server/port and proxy username and password. This feature allows connectivity to a system sitting inside of a proxy server, which allows the actor to bypass the compromised system\u2019s required authentication to reach outside of the network.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar19-252b",
            "https://securelist.com/blog/sas/77908/lazarus-under-the-hood/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.electricfish",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alreay"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ElectricFish"
        ],
        "uuid": "0b56379e-b63d-4c34-824f-93e096ee8316",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "electricfish",
    "analysis": null
};