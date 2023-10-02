var threatdata = {
    "name": "LEOUNCIA",
    "alias": "LEOUNCIA, shoco",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "LEOUNCIA",
        "names": [
            {
                "name": "LEOUNCIA"
            },
            {
                "name": "shoco"
            }
        ],
        "description": "(FireEye) Like Vinself, Leouncia is a powerful backdoor that is designed to take complete control over the infected machine.\nSimilar to Vinself, Leouncia also uses HTTP to carry its custom obfuscated payload. I found Leouncia's obfuscation techniques far more sophisticated than what I found within Vinself. Moreover, Leouncia tries its best to hide its presence from signature based sensors. It generates its http communication randomly by using varying levels of system information in conjunction with Windows random number generation APIs. The result is that every instance of its C&C communication will be different from the previous one.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2010/12/leouncia-yet-another-backdoor.html",
            "https://www.fireeye.com/blog/threat-research/2010/12/leouncia-yet-another-backdoor-part-2.html",
            "https://www.rsaconference.com/writable/presentations/file_upload/crwd-t11-hide_and_seek-how_threat_actors_respond_in_the_face_of_public_exposure.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.leouncia"
        ],
        "uuid": "660fc052-443f-4b96-8357-06b48255b32b",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "leouncia",
    "analysis": null,
    "articles": [],
    "mitre": []
};