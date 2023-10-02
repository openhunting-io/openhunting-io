var threatdata = {
    "name": "Geppei",
    "alias": "Geppei",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-11-18",
    "all_data": {
        "tool": "Geppei",
        "names": [
            {
                "name": "Geppei"
            }
        ],
        "description": "(Symantec) The first malicious activity Symantec researchers saw on victim machines was the presence of a previously undocumented dropper (Trojan.Geppei). It uses PyInstaller, which converts Python script to an executable file.\nGeppei reads commands from a legitimate IIS log. IIS logs are meant to record data from IIS, such as web pages and apps. The attackers can send commands to a compromised web server by disguising them as web access requests. IIS logs them as normal but Trojan.Geppei can read them as commands.\nThe commands read by Geppei contain malicious encoded .ashx files. These files are saved to an arbitrary folder determined by the command parameter and they run as backdoors.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/cranefly-new-tools-technique-geppei-danfuan"
        ],
        "uuid": "46e2b498-934d-47a5-9dab-9d4cdda34c97",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "geppei",
    "analysis": null,
    "articles": [],
    "mitre": []
};