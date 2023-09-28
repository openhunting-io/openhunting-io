var threatdata = {
    "name": "GameOver Zeus",
    "alias": "GameOver Zeus, Peer-to-Peer Zeus, P2P Zeus, GOZ",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Downloader, Botnet",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "GameOver Zeus",
        "names": [
            {
                "name": "GameOver Zeus"
            },
            {
                "name": "Peer-to-Peer Zeus"
            },
            {
                "name": "P2P Zeus"
            },
            {
                "name": "GOZ"
            }
        ],
        "description": "(US-CERT) GOZ, which is often propagated through spam and phishing messages, is primarily used by cybercriminals to harvest banking information, such as login credentials, from a victim\u2019s computer. Infected systems can also be used to engage in other malicious activities, such as sending spam or participating in distributed denial-of-service (DDoS) attacks.\n\nPrior variants of the {{Zeus}} malware utilized a centralized command and control (C2) botnet infrastructure to execute commands. Centralized C2 servers are routinely tracked and blocked by the security community. GOZ, however, utilizes a P2P network of infected hosts to communicate and distribute data, and employs encryption to evade detection. These peers act as a massive proxy network that is used to propagate binary updates, distribute configuration files, and to send stolen data. Without a single point of failure, the resiliency of GOZ\u2019s P2P infrastructure makes takedown efforts more difficult.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Botnet"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA14-150A",
            "http://www.syssec-project.eu/m/page-media/3/zeus_malware13.pdf",
            "https://www.blackhat.com/docs/us-15/materials/us-15-Peterson-GameOver-Zeus-Badguys-And-Backends.pdf",
            "https://www.cert.pl/wp-content/uploads/2015/12/2013-06-p2p-rap_en.pdf",
            "https://krebsonsecurity.com/2019/12/inside-evil-corp-a-100m-cybercrime-menace/",
            "https://www.justice.gov/opa/pr/us-leads-multi-national-action-against-gameover-zeus-botnet-and-cryptolocker-ransomware",
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-008.pdf",
            "https://www.lawfareblog.com/what-point-these-nation-state-indictments"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0016/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gameover_p2p"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:gameover%20zeus"
        ],
        "uuid": "f120d94b-15cc-4290-b899-724a4f1c2af4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gameover_zeus",
    "analysis": null
};