var threatdata = {
    "name": "Jaff",
    "alias": "Jaff, Rakhni",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2021-04-25",
    "all_data": {
        "tool": "Jaff",
        "names": [
            {
                "name": "Jaff"
            },
            {
                "name": "Rakhni"
            }
        ],
        "description": "(Fortinet) Like many ransomware variants, Jaff ransomware commonly arrives as a pdf attachment. Once you open the attachment, it displays a one-line document along with a pop-up message asking whether you want to open an embedded.\n\nAfter downloading the binary file, Jaff ransomware starts decrypting part of the malware code. It uses a simple code redirection routine as an anti-analysis trick to stretch the time it requires to analyze the actual malicious code. In between code execution, it uses garbage code that is not relevant to the malware execution.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/looking-into-jaff-ransomware.html",
            "http://malware-traffic-analysis.net/2017/05/16/index.html",
            "https://www.proofpoint.com/us/threat-insight/post/jaff-new-ransomware-from-actors-behind-distribution-of-dridex-locky-bart",
            "http://blog.talosintelligence.com/2017/05/jaff-ransomware.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jaff"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:jaff"
        ],
        "playbook": [
            "https://www.nomoreransom.org/uploads/RakhniDecryptor_how-to_guide.pdf"
        ],
        "uuid": "7e7db440-de10-4fa9-89f2-60aba7351ac4",
        "last-card-change": "2021-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "jaff",
    "analysis": null
};