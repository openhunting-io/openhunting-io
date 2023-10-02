var threatdata = {
    "name": "NewCT",
    "alias": "NewCT, CT",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "NewCT",
        "names": [
            {
                "name": "NewCT"
            },
            {
                "name": "CT"
            }
        ],
        "description": "(FireEye) The first-stage payload for RATs called \u201cCT/NewCT\u201d used by both the Moafee and DragonOK attack groups employs an evasive \u201cCPU core check\u201d technique. The payload attempts to detect the number of processor cores in the running environment, by calling the 'GetSystemInfo' API, which returns a structure with system data, including number of cores. If only one core is detected, it quits. This probably is an attempt to detect virtualized environments such as sandboxes, as well as other analysis environments used by reverse engineers, which often tend to be configured with a single core. If the CPU core check detects more than one core, it implants the {{NewCT2}} RAT in %temp%\\MSSoap.DLL(some variants will use BurnDCSrv.DLL and IntelAMTPP.DLL) and executes the written file.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.new_ct"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:newct"
        ],
        "uuid": "6b4292bd-b44f-4f30-82f9-2ee15bdac87e",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "newct",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-express",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE EXPRESS",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "IsSpace",
                "NewCT",
                "PlugX",
                "smac",
                "APT26"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf",
            "date": "2014-09-30",
            "organization": "FireEye",
            "author": "Thoufique Haq",
            "title": "OPERATION QUANTUM ENTANGLEMENT",
            "categories": [
                "NewCT",
                "DragonOK"
            ]
        },
        {
            "data_url": "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Operation Quantum Entanglement",
            "categories": [
                "IsSpace",
                "NewCT",
                "Poison Ivy",
                "SysGet"
            ]
        }
    ],
    "mitre": []
};