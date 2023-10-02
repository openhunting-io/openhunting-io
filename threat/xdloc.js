var threatdata = {
    "name": "XDLoc",
    "alias": "XDLoc",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "XDLoc",
        "names": [
            {
                "name": "XDLoc"
            }
        ],
        "description": "(ESET) XDLoc is a location discovery plug-in that retrieves a list of nearby Wi-Fi access points. It uses the WlanGetNetworkBssListWindows API function to retrieve the list of nearby BSSIDs and their signal strengths (RSSI). This information is then written in <CURRENT_DIRECTORY>\\wgl.dat. We believe that this information can be combined with databases of geolocation of known Wi-Fi access points in order to approximate the location of the victim\u2019s device.",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "7bf7ba03-ce5a-4e89-bc72-da7d6c344370",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xdloc",
    "analysis": null,
    "articles": [],
    "mitre": []
};