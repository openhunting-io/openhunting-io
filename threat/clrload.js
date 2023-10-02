var threatdata = {
    "name": "CLRLoad",
    "alias": "CLRLoad",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-09-13",
    "all_data": {
        "tool": "CLRLoad",
        "names": [
            {
                "name": "CLRLoad"
            }
        ],
        "description": "(ESET) CLRLoad is a generic Windows PE that we have seen in both 32-and 64-bit versions. It is a loader written in C++ that loads the next stage ({{PNGLoad}}), which must be a Common Language Runtime (CLR) assembly DLL file. That code is loaded from a file located on disk in a legitimate directory, presumably to mislead victims or incident responders into thinking it is legitimate software.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/09/06/worok-big-picture/"
        ],
        "uuid": "680d43bb-786e-43f7-8e90-896fecb46d48",
        "last-card-change": "2022-09-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "clrload",
    "analysis": null,
    "articles": [],
    "mitre": []
};