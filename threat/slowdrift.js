var threatdata = {
    "name": "SLOWDRIFT",
    "alias": "SLOWDRIFT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "SLOWDRIFT",
        "names": [
            {
                "name": "SLOWDRIFT"
            }
        ],
        "description": "(FireEye) SLOWDRIFT is a launcher that communicates via cloud based infrastructure. It sends system information to the attacker command and control and then downloads and executes additional payloads.\n\nLure documents distributing SLOWDRIFT were not tailored for specific victims, suggesting that TEMP.Reaper is attempting to widen its target base across multiple industries and in the private sector.\n\nSLOWDRIFT was seen being deployed against academic and strategic targets in South Korea using lure emails with documents leveraging the HWP exploit.\n\nRecent SLOWDRIFT samples were uncovered in June 2017 with lure documents pertaining to cyber crime prevention and news stories. These documents were last updated by the same actor who developed {{KARAE}}, {{POORAIM}} and {{ZUMKONG}}.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0218/"
        ],
        "uuid": "1ef291f7-d98a-4335-9f5a-bef15b828929",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "slowdrift",
    "analysis": null
};