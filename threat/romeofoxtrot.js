var threatdata = {
    "name": "RomeoFoxtrot",
    "alias": "RomeoFoxtrot",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "RomeoFoxtrot",
        "names": [
            {
                "name": "RomeoFoxtrot"
            }
        ],
        "description": "(Novetta) Operating as a server mode RAT, RomeoFoxtrot uses a simple handshake to establish a connection and variant-dependent encryption to transfer data making the malware significantly less sophisticated from a network perspective than other members of the Romeo class. Despite the lack of network sophistication, RomeoFoxtrot provides a large number of commands to handle aspects of file management, process management, network proxying, and victim computer information enumeration.\n<b />There are two known variants of RomeoFoxtrot: RomeoFoxtrot-One and RomeoFoxtrot-Two. The RomeoFoxtrot family has been observed as the payload of the IndiaCharlie variants, with IndiaCharlie-One observed dropping RomeoFoxtrot-One and IndiaCharlie-Two observed dropping RomeoFoxtrot-Two. Functionally, the two variants are very similar with only two distinctions. The primary distinction is the inclusion of a configuration file for RomoeFoxtrot-Two that specifies the listening port, while RomeoFoxtrot-One uses a hardcoded value. The second is a renumbering of command identifiers. Given the similarities, the remainder of this section will simply refer to them equally as RomeoFoxtrot unless a particular detail is specific to one variant over the other.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "uuid": "042f93fa-2adf-4e6e-af8c-ccf96872e4a8",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeofoxtrot",
    "analysis": null,
    "articles": [],
    "mitre": []
};