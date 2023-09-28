var threatdata = {
    "name": "FastPOS",
    "alias": "FastPOS",
    "category": "Malware",
    "type": "POS malware, Backdoor, Keylogger, Credential stealer",
    "modified": "2020-08-02",
    "all_data": {
        "tool": "FastPOS",
        "names": [
            {
                "name": "FastPOS"
            }
        ],
        "description": "(Trend Micro) How do the components make the entire system work? The main file extracts all components and passes control to the main service (serv32.exe). The main service creates and monitors a central communication medium and directly sends all received information to the C&C server. The keylogger components (Kl32.exe/Kl64.exe) hook the keyboard then communicate with the main service to send logged keystrokes to the C&C server. The RAM scraper modules monitor processes and scan for credit card track data, which are then sent to the main service.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Keylogger",
            "Credential stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/fastpos-updates-in-time-for-retail-sale-season/",
            "http://documents.trendmicro.com/assets/Appendix%20-%20FastPOS%20Updates%20in%20Time%20for%20the%20Retail%20Sale%20Season.pdf",
            "http://documents.trendmicro.com/assets/fastPOS-quick-and-easy-credit-card-theft.pdf",
            "https://www.bankinfosecurity.com/fastpos-malware-creator-pleads-guilty-to-federal-charges-a-14751"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.fast_pos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:fastpos"
        ],
        "uuid": "367c3161-847f-4f81-a69f-d70fa65db070",
        "last-card-change": "2020-08-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "fastpos",
    "analysis": null
};