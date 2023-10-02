var threatdata = {
    "name": "EternalRomance",
    "alias": "EternalRomance",
    "category": "Exploits",
    "type": "0-day",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "EternalRomance",
        "names": [
            {
                "name": "EternalRomance"
            }
        ],
        "description": "(Microsoft) ETERNALROMANCE is a remote code execution (RCE) exploit against the legacy SMBv1 file sharing protocol. It takes advantage of CVE-2017-0145, which has been patched with the MS17-010 security bulletin. One might note that file sharing over SMB is normally used only within local networks and that the SMB ports are typically blocked from the internet at the firewall. However, if an attacker has access to a vulnerable endpoint running SMB, the ability to run arbitrary code in kernel context from a remote location is a serious compromise.\n\nThis exploit was written to remotely install and launch an SMB backdoor. At the core of this exploit is a type confusion vulnerability leading to an attacker offset controlled arbitrary heap write. As with almost any heap corruption exploit, the attacker must know or control the layout of the heap to consistently succeed. With SMB, most objects are allocated in the non-paged pool.",
        "category": "Exploits",
        "type": [
            "0-day"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2017/06/16/analysis-of-the-shadow-brokers-release-and-mitigation-with-windows-10-virtualization-based-security/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:eternalromance"
        ],
        "uuid": "0ee2c1e7-406f-44af-9fbc-cc45b050f26f",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "eternalromance",
    "analysis": null,
    "articles": [],
    "mitre": []
};