var threatdata = {
    "name": "Zeus OpenSSL",
    "alias": "Zeus OpenSSL, Zeus Sphinx, XSphinx",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer, Botnet, Downloader",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Zeus OpenSSL",
        "names": [
            {
                "name": "Zeus OpenSSL"
            },
            {
                "name": "Zeus Sphinx"
            },
            {
                "name": "XSphinx"
            }
        ],
        "description": "(Malpedia) In June 2016, the version 1.5.4.0 (PE timestamp: 2016.05.11) appeared, downloaded by {{ZLoader}} (known as DEloader at that time). OpenSSL 1.0.1p is statically linked to it, thus its size is roughly 1.2 MB. In subsequent months, that size increased up to 1.6 MB.\nIn January 2017, with version 1.14.8.0, OpenSSL 1.0.2j was linked to it, increasing the size to 1.8 MB. Soon after also in January 2017, with version v1.15.0.0 the code was obfuscated, blowing up the size of the binary to 2.2 MB.\n\nPlease note that IBM X-Force decided to call win.zloader/win.zeus_openssl 'Zeus Sphinx', after mentioning it as 'a new version of Zeus Sphinx' in their initial post in August 2016. Malpedia thus lists the alias 'Zeus XSphinx' for win.zeus_openssl - the X to refer to IBM X-Force.\n\nZeus Sphinx on the one hand has the following versioning ('slow increase')\n- 2015/09 v1.0.1.0 (Zeus Sphinx size: 1.5 MB)\n- 2016/02 v1.0.1.2 (Zeus Sphinx size: 1.5 MB)\n- 2016/04 v1.0.2.0 (Zeus Sphinx size: 1.5 MB)\n\nZeus OpenSSL on the other hand has the following versioning ('fast increase')\n- 2016/05 v1.5.4.0 (Zeus OpenSSL size: 1.2 MB)\n- 2017/01 v1.14.8.0 (Zeus OpenSSL size: 1.8 MB)\n- 2017/01 v1.15.0.0 (Zeus OpenSSL size: 2.2 MB)",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer",
            "Botnet",
            "Downloader"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-terdot-a-zloader-malicious-downloader.html",
            "https://asert.arbornetworks.com/great-dga-sphinx/",
            "https://securityintelligence.com/brazil-cant-catch-a-break-after-panda-comes-the-sphinx/",
            "https://blog.malwarebytes.com/cybercrime/2017/01/zbot-with-legitimate-applications-on-board/",
            "https://securityintelligence.com/posts/zeus-sphinx-trojan-awakens-amidst-coronavirus-spam-frenzy/",
            "https://securityintelligence.com/posts/zeus-sphinx-back-in-business-some-core-modifications-arise/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zeus_openssl",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.zeus_sphinx"
        ],
        "uuid": "0e1c08c2-3e35-4ad7-bb51-3c135b5065d8",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "zeus_openssl",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securityintelligence.com/posts/zeus-sphinx-back-in-business-some-core-modifications-arise/",
            "date": "2020-05-11",
            "organization": "SecurityIntelligence",
            "author": "Nir Shwarts",
            "title": "Zeus Sphinx Back in Business: Some Core Modifications Arise",
            "categories": [
                "Zeus Sphinx"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/zeus-sphinx-trojan-awakens-amidst-coronavirus-spam-frenzy/",
            "date": "2020-03-30",
            "organization": "IBM",
            "author": "Amir Gandler",
            "title": "Zeus Sphinx Trojan Awakens Amidst Coronavirus Spam Frenzy",
            "categories": [
                "Zeus OpenSSL",
                "Zloader"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/brazil-cant-catch-a-break-after-panda-comes-the-sphinx/",
            "date": "2016-08-16",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "Brazil Can\u2019t Catch a Break: After Panda Comes the Sphinx",
            "categories": [
                "Zeus OpenSSL"
            ]
        },
        {
            "data_url": "https://securityaffairs.co/wordpress/39592/cyber-crime/sphinx-variant-zeus-trojan.html",
            "date": "2015-08-26",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "Sphinx, a new variant of Zeus available for sale in the underground",
            "categories": [
                "Zeus Sphinx"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20160130165709/http://darkmatters.norsecorp.com/2015/08/24/sphinx-new-zeus-variant-for-sale-on-the-black-market/",
            "date": "2015-08-24",
            "organization": "DarkMatters",
            "author": "Bev Robb",
            "title": "Sphinx: New Zeus Variant for Sale on the Black Market",
            "categories": [
                "Zeus Sphinx"
            ]
        }
    ],
    "mitre": []
};