var threatdata = {
    "name": "GLASSES",
    "alias": "GLASSES, Wordpress Bruteforcer",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "GLASSES",
        "names": [
            {
                "name": "GLASSES"
            },
            {
                "name": "Wordpress Bruteforcer"
            }
        ],
        "description": "(Citizen Lab) The dropped executable connects to a website and downloads a single HTML page. The site appears to be part of a legitimate website for an eyeglasses company, suggesting that it has been compromised.\n\nThe accessed page contains an anchor with an encoded command in it. The malware looks for the string in the anchor tag with the target NewRef, and then decodes it to a command. The link itself is empty, so that there is nothing to click on and it is invisible on the page. Another page on the same site, aboutus.htm, contains a different command although the URL is not apparently used by this binary.\n\nLooking through the malware code, it is evident that this is a simple downloader with only two commands.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://citizenlab.ca/2013/02/apt1s-glasses-watching-a-human-rights-organization/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.glasses"
        ],
        "uuid": "36aef054-c9d1-43e1-bdcd-973f18961dda",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "glasses",
    "analysis": null,
    "articles": [],
    "mitre": []
};