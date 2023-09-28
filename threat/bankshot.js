var threatdata = {
    "name": "Bankshot",
    "alias": "Bankshot, COPPERHEDGE, Trojan Manuscript",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Bankshot",
        "names": [
            {
                "name": "Bankshot"
            },
            {
                "name": "COPPERHEDGE"
            },
            {
                "name": "Trojan Manuscript"
            }
        ],
        "description": "(US-CERT) This report provides analysis of seven (7) malicious executable files. Five (5) of these files are proxy applications that all use a similar cipher algorithm to mask traffic between the malware and the remote operator. Additionally, two of the five proxies have the ability to generate fake TLS handshake sessions using valid public SSL certificates, disguising network connections with remote malicious actors. The remaining two (2) executables are remote access tools (RATs), providing remote users with the ability to run various commands on an infected system. One of these RATs uses a cipher and the OpenSSL library to add a layer of encryption to communications between the infected system and its command and control (C2) server; this RAT may have been used to install the proxy servers onto compromised systems.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-B_WHITE.PDF",
            "https://securingtomorrow.mcafee.com/mcafee-labs/hidden-cobra-targets-turkish-financial-sector-new-bankshot-implant/",
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-133a"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0239/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bankshot"
        ],
        "uuid": "92386fd7-132d-4a22-a582-1d4460daa5e5",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bankshot",
    "analysis": null
};