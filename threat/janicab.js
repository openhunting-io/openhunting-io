var threatdata = {
    "name": "Janicab",
    "alias": "Janicab",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Janicab",
        "names": [
            {
                "name": "Janicab"
            }
        ],
        "description": "(F-Secure) For Windows OS, this malware was delivered via a document that exploited CVE-2012-0158. In addition, we've also seen it delivered in a form of a Microsoft Shell Link (.lnk) file that drops an embedded encoded VBScript, sometime from 2013 until recently.\n\nThere are several tricks the dropper uses for obfuscating its purpose:\n\n- Filename with double extension (Example: .jpg.lnk or .doc.lnk)\n- Using the icon of notepad.exe (instead of the default, cmd.exe)\n- Possibly sensitive data zeroed out, for example, machine identifier and relative path\n\nBut the most interesting part is the use of an undocumented method for hiding the command line argument string from Windows explorer. Typically, the target and its arguments are visible in Windows explorer as a single string in the shortcut properties, when the user right-clicks on the shortcut icon. However, the command line argument is not visible in this scenario.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://archive.f-secure.com/weblog/archives/00002803.html",
            "https://archive.f-secure.com/weblog/archives/00002576.html",
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/",
            "https://www.macmark.de/blog/osx_blog_2013-08-a.php",
            "https://sec0wn.blogspot.com/2018/12/powersing-from-lnk-files-to-janicab.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0163/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.janicab"
        ],
        "uuid": "44b545b8-3815-40f9-8e4d-e6e49aec793d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "janicab",
    "analysis": null
};