var threatdata = {
    "name": "GpUpdates.exe",
    "alias": "GpUpdates.exe",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-04-24",
    "all_data": {
        "tool": "GpUpdates.exe",
        "names": [
            {
                "name": "GpUpdates.exe"
            }
        ],
        "description": "(Epic Turla) The droppers are misidentified as packed by Armadillo but in reality they\u2019re built using now defunct Chilkat software, \u2018Zip2Secure\u2019 to create self-extracting executables. The packing alone has led the droppers to be detected under generic AV detections but the subcomponents have low-to-no detections at this time.\n\nThe Zip2Secure configuration entrusts the distribution of the files contained therein to \u2018{{Distribute.exe}}\u2019, which places the files and silently registers the subcomponents with regsvr32.exe.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.epicturla.com/blog/the-lost-nazar"
        ],
        "uuid": "2d1ee7a1-0d40-43c8-a24a-d1d903daaeb6",
        "last-card-change": "2020-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gpupdates.exe",
    "analysis": null
};