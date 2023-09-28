var threatdata = {
    "name": "TwoFace",
    "alias": "TwoFace, Minion, HighShell, HyperShell, SEASHARPEE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "TwoFace",
        "names": [
            {
                "name": "TwoFace"
            },
            {
                "name": "Minion"
            },
            {
                "name": "HighShell"
            },
            {
                "name": "HyperShell"
            },
            {
                "name": "SEASHARPEE"
            }
        ],
        "description": "According to Unit42, TwoFace is a two-staged (loader+payload) webshell, written in C# and meant to run on webservers with ASP.NET. The author of the initial loader webshell included legitimate and expected content that will be displayed if a visitor accesses the shell in a browser, likely to remain undetected. The code in the loader webshell includes obfuscated variable names and the embedded payload is encoded and encrypted. To interact with the loader webshell, the threat actor uses HTTP POST requests to the compromised server.\n\nThe secondary webshell, which we call the payload, is embedded within the loader in encrypted form and contains additional functionality that we will discuss in further detail. When the threat actor wants to interact with the remote server, they provide data that the loader will use to modify a decryption key embedded within the loader that will be in turn used to decrypt the embedded TwoFace payload. Commands supported by the payload are execution of programs, up-, download and deletion of files and capability to manipulate MAC timestamps.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-twoface-webshell-persistent-access-point-lateral-movement/",
            "https://unit42.paloaltonetworks.com/unit42-oilrig-performs-tests-twoface-webshell/",
            "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0185/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/asp.twoface"
        ],
        "uuid": "f02989df-45bc-4162-ba5b-8617795ee749",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "twoface",
    "analysis": null
};