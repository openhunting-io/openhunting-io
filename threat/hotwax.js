var threatdata = {
    "name": "Hotwax",
    "alias": "Hotwax, HOTWAX",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Hotwax",
        "names": [
            {
                "name": "Hotwax"
            },
            {
                "name": "HOTWAX"
            }
        ],
        "description": "HOTWAX is a module that upon starting imports all necessary system API functions, and searches for a .CHM file. HOTWAX decrypts a payload using the Spritz algorithm with a hard-coded key and then searches the target process and attempts to inject the decrypted payload module from the CHM file into the address space of the target process.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07180244/Lazarus_Under_The_Hood_PDF_final.pdf",
            "https://content.fireeye.com/apt/rpt-apt38",
            "https://www.welivesecurity.com/2017/02/16/demystifying-targeted-malware-used-polish-banks/",
            "https://www.virusbulletin.com/uploads/pdf/magazine/2018/VB2018-Kalnai-Poslusny.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hotwax"
        ],
        "uuid": "54742926-6bb1-4c80-aee5-86077acc36a9",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hotwax",
    "analysis": null
};