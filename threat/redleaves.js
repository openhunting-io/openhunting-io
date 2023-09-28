var threatdata = {
    "name": "RedLeaves",
    "alias": "RedLeaves, BUGJUICE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "RedLeaves",
        "names": [
            {
                "name": "RedLeaves"
            },
            {
                "name": "BUGJUICE"
            }
        ],
        "description": "(US-CERT) The REDLEAVES implant consists of three parts: an executable, a loader, and the implant shellcode. The REDLEAVES implant is a remote administration Trojan (RAT) that is built in Visual C++ and makes heavy use of thread generation during its execution. The implant contains a number of functions typical of RATs, including system enumeration and creating a remote shell back to the C2.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-117A",
            "http://blog.macnica.net/blog/2017/12/post-8c22.html",
            "https://www.accenture.com/t20180423T055005Z__w__/se-en/_acnmedia/PDF-76/Accenture-Hogfish-Threat-Analysis.pdf",
            "http://blog.jpcert.or.jp/.s/2017/04/redleaves---malware-based-on-open-source-rat.html",
            "https://www.jpcert.or.jp/magazine/acreport-redleaves.html",
            "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "http://go.recordedfuture.com/hubfs/reports/cta-2019-0206.pdf",
            "https://github.com/nccgroup/Cyber-Defence/tree/master/Technical%20Notes/Red%20Leaves"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0153/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.redleaves"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:redleaves"
        ],
        "uuid": "30de5fb0-f7b6-4795-9732-e90515d91451",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RedLeaves",
            "malware_alias": "BUGJUICE",
            "malware": "win.redleaves",
            "last_update": "2022-03-03 10:38:51",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "2b7e4e5758699f924f50615e8fe48e13bf428d7aa1fcbfb2ed4f64a0fd6a8f93",
                        "timestamp": "2022-03-03 10:38:51"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-03 10:38:51",
    "mitre": [],
    "file_name": "redleaves",
    "analysis": null
};