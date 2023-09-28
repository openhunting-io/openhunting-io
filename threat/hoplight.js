var threatdata = {
    "name": "HOPLIGHT",
    "alias": "HOPLIGHT, HANGMAN",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "HOPLIGHT",
        "names": [
            {
                "name": "HOPLIGHT"
            },
            {
                "name": "HANGMAN"
            }
        ],
        "description": "(US-CERT) This report provides analysis of twenty malicious executable files. Sixteen of these files are proxy applications that mask traffic between the malware and the remote operators. The proxies have the ability to generate fake TLS handshake sessions using valid public SSL certificates, disguising network connections with remote malicious actors. One file contains a public SSL certificate and the payload of the file appears to be encoded with a password or key. The remaining file does not contain any of the public SSL certificates, but attempts outbound connections and drops four files. The dropped files primarily contain IP addresses and SSL certificates.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-045g",
            "https://www.computing.co.uk/ctg/news/3074007/lazarus-rises-warning-over-new-hoplight-malware-linked-with-north-korea"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0376/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hoplight"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HOPLIGHT"
        ],
        "uuid": "a2a00578-4e93-4833-acbc-25ace6e45504",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hoplight",
    "analysis": null
};