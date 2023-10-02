var threatdata = {
    "name": "XDUpload",
    "alias": "XDUpload",
    "category": "Malware",
    "type": "Info stealer, Exfiltration",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "XDUpload",
        "names": [
            {
                "name": "XDUpload"
            }
        ],
        "description": "(ESET) Like {{XDMonitor}}, XDUpload monitors removable drives and takes regular screenshots. The additional feature is that it will collect a list of files that are hard coded in the binary, as shown in Figure 11, and then upload the list to the C&C server. It uses %TEMP%\\fl637136486220077590.data to keep track of how many files from the static list have been uploaded.\nWe believe that the operators are checking the list of files from the C: drive, sent by {{XDList}}, and then selecting the ones that seem most interesting to them for exfiltration. What is surprising is that the paths are directly hard coded in the samples and not retrieved dynamically by a request to the C&C server. Thus, to collect additional files, the operators need to modify their source code, recompile and drop a new version of the plug-in on the victim\u2019s machine.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "03db88bb-8a3b-467d-940d-0ad5f126b562",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xdupload",
    "analysis": null,
    "articles": [],
    "mitre": []
};