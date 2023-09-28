var threatdata = {
    "name": "Carbanak",
    "alias": "Carbanak, Anunak, Sekur, Sekur RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Carbanak",
        "names": [
            {
                "name": "Carbanak"
            },
            {
                "name": "Anunak"
            },
            {
                "name": "Sekur"
            },
            {
                "name": "Sekur RAT"
            }
        ],
        "description": "(Kaspersky) Carbanak is a backdoor used by the attackers to compromise the victim's machine once the exploit, either in the spear phishing email or exploit kit, successfully executes its payload. This section provides a functional analysis of Carbanak\u2019s capabilities.\n\nCarbanak copies itself into \u201c%system32%\\com\u201d with the name \u201csvchost.exe\u201d with the file attributes: system, hidden and read-only. The original file created by the exploit payload is then deleted.\n\nTo ensure that Carbanak has autorun privileges the malware creates a new service. The naming syntax is \u201c<ServiceName>Sys\u201d where ServiceName is any existing service randomly chosen, with the first character deleted. For example, if the existing service \u0301s name is \u201caspnet\u201d and the visible name is \u201cAsp.net state service\u201d, the service created by the malware would be \u201caspnetSys\u201d with a visible name of \u201cSp.net state service\u201d.\n\nBefore creating the malicious service, Carbanak determines if either the avp.exe or avpui.exe processes (components of Kaspersky Internet Security) is running. If found on the target system, Carbanak will try to exploit a known vulnerability in Windows XP, Windows Server 2003, Windows Vista, Windows Server 2008, Windows 7, Windows 8, and Windows Server 2012, CVE-2013-3660, for local privilege escalation. We believe this is not relevant and that the attackers adapt their tools to the victim \u0301s defenses.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064518/Carbanak_APT_eng.pdf",
            "https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html",
            "https://www.fireeye.com/blog/threat-research/2019/04/carbanak-week-part-one-a-rare-occurrence.html",
            "https://www.fox-it.com/en/wp-content/uploads/sites/11/Anunak_APT-against-financial-institutions2.pdf",
            "https://documents.trendmicro.com/assets/white_papers/wp-cashing-in-on-atm-malware.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0030/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.carbanak"
        ],
        "uuid": "d4ee0ad6-9ba5-48cb-a289-f29476852d0e",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "carbanak",
    "analysis": null
};