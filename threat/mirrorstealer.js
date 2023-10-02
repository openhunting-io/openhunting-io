var threatdata = {
    "name": "MirrorStealer",
    "alias": "MirrorStealer",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "MirrorStealer",
        "names": [
            {
                "name": "MirrorStealer"
            }
        ],
        "description": "(ESET) MirrorStealer, internally named 31558_n.dll by MirrorFace, is a credential stealer. To the best of our knowledge, this malware has not been publicly described. In general, MirrorStealer steals credentials from various applications such as browsers and email clients. Interestingly, one of the targeted applications is Becky!, an email client that is currently only available in Japan. All the stolen credentials are stored in %TEMP%\\31558.txt and since MirrorStealer doesn\u2019t have the capability to exfiltrate the stolen data, it depends on other malware to do it.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/12/14/unmasking-mirrorface-operation-liberalface-targeting-japanese-political-entities/"
        ],
        "uuid": "5826f248-287f-4b28-a5fe-03a46ee71957",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mirrorstealer",
    "analysis": null,
    "articles": [],
    "mitre": []
};