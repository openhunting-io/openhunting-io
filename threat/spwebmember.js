var threatdata = {
    "name": "spwebmember",
    "alias": "spwebmember",
    "category": "Tools",
    "type": "Info stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "spwebmember",
        "names": [
            {
                "name": "spwebmember"
            }
        ],
        "description": "(NCC Group) spwebmember was written in Microsoft .NET and includes hardcoded values for client project names for data extraction. The tool would connect to the SQL SharePoint database and issue a query to dump all data from the database to a temporary file affixed with 'spdata'.",
        "category": "Tools",
        "type": [
            "Info stealer"
        ],
        "information": [
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/march/apt15-is-alive-and-strong-an-analysis-of-royalcli-and-royaldns/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0227/"
        ],
        "uuid": "9fecb3bc-1a93-4a5f-b95b-f98d3157f4a5",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "spwebmember",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "spwebmember",
            "procedure_code": "s0227",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0227",
            "techniques": [
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1213.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1213/002",
                    "technique_name": "data from information repositories : sharepoint",
                    "technique_description": "adversaries may leverage the sharepoint repository as a source to mine valuable information. sharepoint will often contain useful information for an adversary to learn about the structure and functionality of the internal network and systems. for example, the following is a list of example information that may hold potential value to an adversary and may also be found on sharepoint:",
                    "procedure_description": "spwebmember is used to enumerate and dump information from microsoft sharepoint.[3]"
                }
            ]
        }
    ]
};