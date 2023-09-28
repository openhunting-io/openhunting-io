var threatdata = {
    "name": "Dyre",
    "alias": "Dyre, Dyreza, Dyzap, Dyranges",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Dyre",
        "names": [
            {
                "name": "Dyre"
            },
            {
                "name": "Dyreza"
            },
            {
                "name": "Dyzap"
            },
            {
                "name": "Dyranges"
            }
        ],
        "description": "(SecureWorks) In early June 2014, the Dell SecureWorks Counter Threat Unit (CTU) research team discovered the Dyre banking trojan, which was being distributed by {{Cutwail}} botnet spam emails that included links to either Dropbox or Cubby file storage services. The threat actors later shifted to distribution via the {{Upatre}} downloader trojan. Dyre is also known as Dyreza, Dyzap, and Dyranges by the antivirus industry.\n\nDyre harvests credentials, primarily targeting online banking websites to perform Automated Clearing House (ACH) and wire fraud. The malware includes a modular architecture, man-in-the-browser functionality, and a backconnect server that allows threat actors to connect to a bank website through the victim's computer. The man-in-the-browser functionality is based on a unique combination of redirects to fake websites controlled by the threat actor ('web fakes') and a dynamic web inject system that allows the threat actors to manipulate a financial institution's website content. Similar to other banking trojans, Dyre hooks into the most popular web browsers to intercept traffic from a victim's system, stealing information and manipulating website content before it is rendered by the browser.\n\nEarly Dyre versions were relatively primitive, sending command and control (C2) communications and stolen data via unencrypted HTTP. Recent iterations of Dyre use SSL to encrypt all C2 communications, as well as a custom encryption algorithm. Dyre also uses RSA cryptography to digitally sign configuration files and malware plugins to prevent tampering.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/research/dyre-banking-trojan",
            "https://www.blueliv.com/downloads/documentation/reports/Network_insights_of_Dyre_and_Dridex_Trojan_bankers.pdf",
            "https://blog.malwarebytes.com/threat-analysis/2015/11/a-technical-look-at-dyreza/",
            "https://www.forbes.com/sites/thomasbrewster/2017/05/04/dyre-hackers-stealing-millions-from-american-coporates",
            "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0024/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dyre"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Dyre"
        ],
        "uuid": "1b27f8b4-dddf-4d58-b033-3772234bdd47",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dyre",
    "analysis": null
};