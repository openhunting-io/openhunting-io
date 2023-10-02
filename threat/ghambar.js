var threatdata = {
    "name": "Ghambar",
    "alias": "Ghambar",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "Ghambar",
        "names": [
            {
                "name": "Ghambar"
            }
        ],
        "description": "Currently, we identify this malware family as \u201cGhambar,\u201d due to the word being used in some function names and variables inside the same malware\u2019s code\u037e also subsequent samples expose potentially personally identifiable information and alternative names. While Ghambar does not seem to share any significant codebase with past tools, we believe that Ghambar might be the successor of {{TinyZBot}}, which is one of the artifacts described by Cylance in the Operation Cleaver report. Similar to TinyZBot, Ghambar is also developed in C# and it employs the same SOAP\u00adbased command and control protocol. While it is provided with fewer features, Ghambar appears better designed and with a cleaner code style.\n\nInterestingly, Ghambar is designed to leave as little footprint on the system as possible. When collecting screenshots, clipboard data, and intercepted keystrokes, it attempts to directly send the data to the C&C without writing on disk.\n\nWhile executing a parallel keylogger, Ghambar is also able to receive instructions from the C&C on additional tasks to execute. These tasks can be additional plugins to be downloaded and executed, generic tasks on the file system, or a number of predefined commands.\n\nGhambar is provided with a full\u00adfeatured plugins system. If instructed to do so by the C&C, the malware is able to download, store, and execute any given plugin.\n\nOther than generally creating, deleting and fetching files, Ghambar is also able to executed a number of predefined commands if instructed to do so by the C&C. The commands, identified by a command\u00adtype identifier, include the following:\n\u2022 Self\u00addestruct\u037e\n\u2022 Execute a command through 'cmd.exe' and return output\u037e\n\u2022 Take a screenshot\u037e\n\u2022 Shutdown the computer\u037e\n\u2022 Restart the computer\u037e\n\u2022 Logoff the user\u037e\n\u2022 Lock the computer\u037e\n\u2022 Turn on and off the monitor\u037e\n\u2022 Set and copy clipboard data\u037e\n\u2022 Enable or disable mouse/keyboard (although these procedures are not yet implemented)\u037e\n\u2022 \u201cEnable or disable desktop\u201d (not implemented)\u037e\n\u2022 Trigger a BSOD (also, not implemented).\n\nWhile the sample we obtained might be an earlier stage still under development, Ghambar is alreadyprovided with enough features to make it a fully\u00adfunctional backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://iranthreats.github.io/us-16-Guarnieri-Anderson-Iran-And-The-Soft-War-For-Internet-Dominance-paper.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ghambar"
        ],
        "uuid": "622b301b-0b13-410c-a772-2c9d6194a606",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ghambar",
    "analysis": null,
    "articles": [],
    "mitre": []
};