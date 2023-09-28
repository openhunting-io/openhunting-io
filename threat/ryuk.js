var threatdata = {
    "name": "Ryuk",
    "alias": "Ryuk",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Ryuk",
        "names": [
            {
                "name": "Ryuk"
            }
        ],
        "description": "Ryuk is a ransomware which encrypts its victim's files and asks for a ransom via bitcoin to release the original files. It is has been observed being used to attack companies or professional environments. Cybersecurity experts figured out that Ryuk and {{Hermes}} ransomware shares pieces of codes. Hermes is commodity ransomware that has been observed for sale on dark-net forums and used by multiple threat actors.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/",
            "https://www.csoonline.com/article/3541810/ryuk-ransomware-explained-a-targeted-devastatingly-effective-attack.html",
            "https://www.cybereason.com/blog/triple-threat-emotet-deploys-trickbot-to-steal-data-spread-ryuk-ransomware",
            "https://research.checkpoint.com/ryuk-ransomware-targeted-campaign-break/",
            "https://www.fireeye.com/blog/threat-research/2019/01/a-nasty-trick-from-credential-theft-malware-to-business-disruption.html",
            "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
            "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/ryuk-ransomware-attack-rush-to-attribution-misses-the-point/",
            "https://thedfirreport.com/2020/10/08/ryuks-return/",
            "https://cofense.com/the-ryuk-threat-why-bazarbackdoor-matters-most/",
            "https://www.deepinstinct.com/2020/11/24/ryuk-ransomware-the-deviance-is-in-the-variance/",
            "https://www.cybereason.com/blog/cybereason-vs.-ryuk-ransomware",
            "https://www.advanced-intel.com/post/crime-laundering-primer-inside-ryuk-crime-crypto-ledger-risky-asian-crypto-traders",
            "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "https://www.darkreading.com/vulnerabilities---threats/ryuks-rampage-has-lessons-for-the-enterprise/a/d-id/1340533",
            "https://www.advanced-intel.com/post/adversary-dossier-ryuk-ransomware-anatomy-of-an-attack-in-2021",
            "https://news.sophos.com/en-us/2021/05/06/mtr-in-real-time-pirates-pave-way-for-ryuk-ransomware/",
            "https://securityintelligence.com/articles/ryuk-ransomware-operators-shift-tactics/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/new-ryuk-ransomware-sample%e2%80%aftargets-webservers/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0446/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ryuk"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Ryuk"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=ryuk-ransomware"
        ],
        "uuid": "7ecebee3-176f-47c2-9b9d-4d086f283711",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--3d690b19-f459-4a76-a5dd-b76d289251c5",
        "pb_file": "ryuk-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "RYUK RANSOMWARE",
        "industries": [
            "healthcare"
        ],
        "regions": [],
        "malwares": [
            "Ryuk"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "Ryuk",
            "malware_alias": null,
            "malware": "win.ryuk",
            "last_update": "2021-04-03 06:08:28",
            "tags": [
                "Ryuk",
                "Ransomware",
                "UNC1878"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://microsoftestore.top/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsoftltdcorp.com.pl/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsofttop.wiki/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://microsoftupdate.work/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    },
                    {
                        "value": "http://mirosoftplaymarket.top/gate.php",
                        "timestamp": "2021-04-03 06:08:28"
                    }
                ],
                "domain": [
                    {
                        "value": "microsoftestore.top",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsoftltdcorp.com.pl",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsofttop.wiki",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "mirosoftplaymarket.top",
                        "timestamp": "2021-04-03 06:07:46"
                    },
                    {
                        "value": "microsoftupdate.work",
                        "timestamp": "2021-04-03 06:07:46"
                    }
                ],
                "ip:port": [
                    {
                        "value": "8.208.103.182:80",
                        "timestamp": "2021-04-02 18:26:30"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "88b1b4966650de59cef20c340b28739c52dc9ead91d9959a338a8e531ad38335",
                        "timestamp": "2021-03-11 03:30:13"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "6cad2f7dc809b9353a31753a438aef4e",
                        "timestamp": "2021-03-10 17:59:46"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-04-03 06:08:28",
    "mitre": [],
    "file_name": "ryuk"
};