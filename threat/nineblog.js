var threatdata = {
    "name": "NineBlog",
    "alias": "NineBlog",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-01",
    "all_data": {
        "actor": "NineBlog",
        "names": [
            {
                "name": "NineBlog",
                "name-giver": "FireEye"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(FireEye) FireEye has been tracking ongoing activity associated with a unique and relatively stealthy group we first identified in 2013 using the name \u201cAPT.NineBlog.\u201c The name NINEBLOG refers to a specific backdoor used by the threat group; some versions of the backdoor use the string \u2018nineblog\u2019 in their command and control (CnC) URI path.\n\nWe have observed this group targeting organizations primarily in South Asia and the Middle East. The threat group is notable because it employs Visual Basic Scripts (VBScripts) as a backdoor, a tactic we do not often observe. The group can maintain a low profile probably because the VBScripts are small and stealthy in their execution. The NINEBLOG malware is difficult to detect because the VBScripts are encoded and the actors employ SSL network communications. We have observed intermittent activity from this group since we first identified it in 2013, and we saw a spike in activity during mid-2015.\n\nWe assess that one of the probable targets of the group\u2019s 2015 campaign is a Southeast Asian government, based on the specificity of some of the decoy documents.\n\nIn addition to the anti-analysis techniques, the group has used SSL communications since we first identified this activity in 2013. The use of encrypted SSL traffic makes it extremely difficult to develop network-based signatures to detect the malware\u2019s communications.",
        "observed-sectors": [
            "Government"
        ],
        "observed-countries": [
            "South Asia, Southeast Asia and Middle East"
        ],
        "tools": [
            "NineBlog"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2013/08/the-curious-case-of-encoded-vb-scripts-apt-nineblog.html",
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-southeast-asia-fall-2015.pdf"
        ],
        "uuid": "c074decf-2ead-4731-8dca-4cd35cdc96af",
        "last-card-change": "2020-05-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nineblog",
    "analysis": null,
    "articles": [],
    "mitre": []
};