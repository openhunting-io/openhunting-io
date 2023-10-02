var threatdata = {
    "name": "Rdasrv",
    "alias": "Rdasrv",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "Rdasrv",
        "names": [
            {
                "name": "Rdasrv"
            }
        ],
        "description": "(Trend Micro) Rdasrv\u2014one of the earliest PoS RAM scrapers\u2014was first discovered at the end of 2011. It has no specific family name so it is called by the service name that it installs\u2014rdasrv.\n\nWhen first executed, the malware is installed as a service called \u201crdasrv.\u201d Name variations exist but rdasrv is most commonly used. The sample analyzed installed a service called \u201crdpclip.\u201d The installer script executes the malware using the /install parameter. The malware then passes function cc_data_scraper_main to StartServiceCtrlDispatcher. The cc_data_scraper_main function registers itself to handle service control requests using RegisterServiceCtrlHandler. The malware is now installed and ready to scrape the process memory for Tracks 1 and 2 credit card data.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.wired.com/wp-content/uploads/2014/09/wp-pos-ram-scraper-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rdasrv"
        ],
        "uuid": "a7b775e0-34a3-4ecb-9d8b-c107e84e9b28",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rdasrv",
    "analysis": null,
    "articles": [],
    "mitre": []
};