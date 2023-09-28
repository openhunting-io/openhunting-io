var threatdata = {
    "name": "Conti",
    "alias": "Conti",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "Conti",
        "names": [
            {
                "name": "Conti"
            }
        ],
        "description": "(Carbon Black) Conti uses a large number of independent threads to perform encryption, allowing up to 32 simultaneous encryption efforts, resulting in faster encryption compared to many other families.\n\nConti also utilizes command line options to allow for control over how it scans for data, suggesting that the malware may commonly be spread and directly controlled by an adversary. This control introduces the novel ability of skipping the encryption of local files and only targeting networked SMB shares, including those from IP addresses specifically provided by the adversary. This is a very rare ability that\u2019s previously been seen with the Sodinokibi ransomware family.\n\nAnother new technique, documented in very few ransomware families, is the use of the Windows Restart Manager to ensure that all files can be encrypted. Just as Windows will attempt to cleanly shut down open applications when the operating system is rebooted, the ransomware will utilize the same functionality to cleanly close the application that has a file locked. By doing so, the file is freed up for encryption.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.carbonblack.com/blog/tau-threat-discovery-conti-ransomware/",
            "https://areteir.com/wp-content/uploads/2020/08/Arete_Insight_Is-Conti-the-new-Ryuk_August2020.pdf",
            "https://www.zdnet.com/article/conti-ryuk-joins-the-ranks-of-ransomware-gangs-operating-data-leak-sites/",
            "https://www.cybereason.com/blog/cybereason-vs.-conti-ransomware",
            "https://www.coveware.com/conti-ransomware",
            "https://thedfirreport.com/2021/05/12/conti-ransomware/",
            "https://www.bleepingcomputer.com/news/security/fbi-conti-ransomware-attacked-16-us-healthcare-first-responder-orgs/",
            "https://unit42.paloaltonetworks.com/conti-ransomware-gang/",
            "https://cycrafttechnology.medium.com/conti-ransomware-in-taiwan-45b44f1ab0d8",
            "https://threatpost.com/affiliate-leaks-conti-ransomware-playbook/168442/",
            "https://blog.talosintelligence.com/2021/09/Conti-leak-translation.html",
            "https://news.sophos.com/en-us/2021/09/03/conti-affiliates-use-proxyshell-exchange-exploit-in-ransomware-attacks/",
            "https://www.csoonline.com/article/3638056/conti-ransomware-explained-and-why-its-one-of-the-most-aggressive-criminal-groups.html",
            "https://www.bleepingcomputer.com/news/security/australian-govt-raises-alarm-over-conti-ransomware-attacks/",
            "https://www.cisa.gov/uscert/ncas/alerts/aa21-265a",
            "https://blog.talosintelligence.com/2022/05/conti-and-hive-ransomware-operations.html",
            "https://www.malvuln.com/advisory/9eb9197cd58f4417a27621c4e1b25a71.txt",
            "https://www.trendmicro.com/en_us/research/22/f/conti-vs-lockbit-a-comparative-analysis-of-ransomware-groups.html",
            "https://arcticwolf.com/resources/blog/conti-and-akira-chained-together/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0575/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.conti"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:conti"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=conti-ransomware",
            "https://usa.kaspersky.com/about/press-releases/2023_kaspersky-releases-tool-for-decrypting-conti-based-ransomware"
        ],
        "uuid": "6c920e0b-25d1-4496-b7d2-4cdf5b9d0b9b",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--ef0b4ddc-97ae-4094-a18c-d93d3eca1455",
        "pb_file": "conti-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "CONTI RANSOMWARE",
        "industries": [
            "construction",
            "education",
            "energy",
            "entertainment",
            "financial-services",
            "government-public-services",
            "healthcare",
            "hospitality-leisure",
            "manufacturing",
            "mining",
            "non-profit",
            "pharmaceuticals",
            "retail",
            "technology",
            "telecommunications",
            "utilities"
        ],
        "regions": [
            "AU",
            "BS",
            "CA",
            "CH",
            "DE",
            "ES",
            "FR",
            "GB",
            "IE",
            "IN",
            "IT",
            "JP",
            "MX",
            "NZ",
            "TW",
            "US"
        ],
        "malwares": [
            "Conti"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "Conti",
            "malware_alias": null,
            "malware": "win.conti",
            "last_update": "2023-04-25 18:49:31",
            "tags": [
                "conti",
                "Ransomware",
                "Conti"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "ebeca2df24a55c629cf0ce0d4b703ed632819d8ac101b1b930ec666760036124",
                        "timestamp": "2023-04-25 18:49:31"
                    },
                    {
                        "value": "edfe81babf50c2506853fd8375f1be0b7bebbefb2e5e9a33eff95ec23e867de1",
                        "timestamp": "2022-12-07 05:06:23"
                    },
                    {
                        "value": "4f17d7fa344b970890ed1bc52a0da95146cab9fe56ecabafafacb0ad212558c9",
                        "timestamp": "2022-05-13 18:59:28"
                    },
                    {
                        "value": "1f782c00f48835beffd1cb068c1b43854b5f1542966dd5926589fece4a5058b3",
                        "timestamp": "2022-05-13 18:59:31"
                    },
                    {
                        "value": "64485b3ea7ab067e7a83611f8c4caaf74482cdacb8a41bf118d967de3f1b51b2",
                        "timestamp": "2022-02-27 20:14:47"
                    },
                    {
                        "value": "e298d3e4ea2610e43eedcdc3171998943d645c187779f431424b7c0b39650d05",
                        "timestamp": "2022-02-27 20:14:46"
                    },
                    {
                        "value": "cf487bd54e487585cd052e982fd765cbc0d8d164cc21b8635e55475182dadf00",
                        "timestamp": "2022-02-27 20:14:45"
                    },
                    {
                        "value": "2586026617b117506dfe326f50e45476ce765a74fe48c8650d32980a4dfe5ee9",
                        "timestamp": "2022-02-27 20:14:45"
                    },
                    {
                        "value": "ea524e8b0dd046561b59a8d4da5a122aeff02036c87bb03056437a1d0f584039",
                        "timestamp": "2022-02-27 20:14:44"
                    },
                    {
                        "value": "1dea453e5344898c9a66309bd6d1cf6e21c56eb1427c026aac84b14a6b23f7fc",
                        "timestamp": "2022-02-27 20:14:43"
                    },
                    {
                        "value": "8f368b029a3a5517cb133529274834585d087a2d3a5875d03ea38e5774019c8a",
                        "timestamp": "2022-02-24 06:01:39"
                    },
                    {
                        "value": "e30779c98cc860a022ea2b144176f73387b7306160445c351fbb4de9133db045",
                        "timestamp": "2022-02-24 06:01:36"
                    },
                    {
                        "value": "e58dde6a12fa539480a9e2d6f8342a7942703027969d396c19f1acffadcf284e",
                        "timestamp": "2022-02-24 06:01:32"
                    },
                    {
                        "value": "1490e74b93b40176975836156dc62210b7670ab5eb38f153a21cda8c72bebc76",
                        "timestamp": "2022-02-24 06:01:23"
                    },
                    {
                        "value": "34366c9a9ac34dd9016abd406cffe713a3e8606e8600e6cb07e0242904f91a5b",
                        "timestamp": "2022-02-24 06:01:27"
                    },
                    {
                        "value": "a7bff21d2695168b3f4aad1aa084f3a986d074a363ae52c7545536a98f00fe63",
                        "timestamp": "2022-02-24 06:01:19"
                    },
                    {
                        "value": "198667b1eda010a431dfb051a101cc73ead1d45ba8d0f6641ec1c14bca4106f3",
                        "timestamp": "2022-02-24 06:01:12"
                    },
                    {
                        "value": "ef870eae64e28ebd71c8ad909af39ea9a072256bfd634210f4de24ded5a3304a",
                        "timestamp": "2022-02-24 06:01:09"
                    },
                    {
                        "value": "4bfd58d4e4a6fe5e91b408bc190a24d352124902085f9c2da948ad7d79b72618",
                        "timestamp": "2022-02-24 06:01:06"
                    },
                    {
                        "value": "66a57f4322182ffd7318bc81e5d7502db53a3153c28d9312dd6b443430936d46",
                        "timestamp": "2022-02-24 06:01:00"
                    },
                    {
                        "value": "eae876886f19ba384f55778634a35a1d975414e83f22f6111e3e792f706301fe",
                        "timestamp": "2023-04-25 18:49:31"
                    },
                    {
                        "value": "603fbfe3d00baa8aa65288169af993b1a43cb6d02718204130922af513cc404b",
                        "timestamp": "2022-02-24 06:00:56"
                    },
                    {
                        "value": "63e649bceaf74d6969434a4da1d71b4dc877d7eb32508d393a73d0737c70f1b6",
                        "timestamp": "2022-02-24 06:00:53"
                    },
                    {
                        "value": "3995502a85cc12c6962740989c4fb800d514bdf2ec667fdb7e4c8206adca0235",
                        "timestamp": "2022-02-24 06:00:46"
                    },
                    {
                        "value": "7236c8098c55ea1d144f4d6646e8cab8c7fdbde1d127d409b0d6a4ff1029628e",
                        "timestamp": "2022-02-24 06:00:50"
                    },
                    {
                        "value": "eacaab8d6520c9bf9dec6cbdffa7c4ad8c15fd57dd4165cf895a0aaae3ffe371",
                        "timestamp": "2022-02-24 06:00:43"
                    },
                    {
                        "value": "1cfa2a966e7bfff50dd2026e890844af18deb672b96e941769a2e5fc3c1e0802",
                        "timestamp": "2022-02-24 06:00:40"
                    },
                    {
                        "value": "14f9538dd611ca701bdbc6b34a0562e8b18c2492ff323b32557b36673434541a",
                        "timestamp": "2022-02-24 06:00:33"
                    },
                    {
                        "value": "2d61e25b007c15e20c3269cccfc4f3986493ac2f5fa7ee627c7a9059109f664e",
                        "timestamp": "2022-02-24 06:00:37"
                    },
                    {
                        "value": "f20ed03ba228b36064517c1e5fff9ae40d957451a5c6d9a48f9bbe2c3dd881b7",
                        "timestamp": "2022-02-24 06:00:29"
                    },
                    {
                        "value": "49dc5a243d322cd4d467e5f24b61ff749869564ddcf6a2f700839cf5ae9e37ea",
                        "timestamp": "2022-02-24 06:00:25"
                    },
                    {
                        "value": "3e2ce6fd7b53224df92581b800ce9a6605eae878d4165df9ae8f73a488be3fa5",
                        "timestamp": "2022-02-24 06:00:17"
                    },
                    {
                        "value": "d1e0164c68c9ee348c437127c3a037d08767e9be5aded7a304bb1300a4a1aa35",
                        "timestamp": "2022-02-24 06:00:22"
                    },
                    {
                        "value": "74aa5ff53c56c0eaf29d4fce536a55fa42d55cffa77b83671f8ef5bfa958665d",
                        "timestamp": "2022-02-24 06:00:09"
                    },
                    {
                        "value": "f0a674f3a449561a102eac9ee445b18bb15536429dca0c0ee020054952dd4899",
                        "timestamp": "2022-02-24 06:00:00"
                    },
                    {
                        "value": "28fea198b1a127ecc10411d711c4df087fc2aa371223a02c13cad92dc465fc69",
                        "timestamp": "2022-02-24 05:59:56"
                    },
                    {
                        "value": "bc87bb72ce1ab19b2cff617a894fc1acf30bd3f9d2994235189ca8e5057fb354",
                        "timestamp": "2022-02-24 05:59:58"
                    },
                    {
                        "value": "197dbb411a94c31ba2e150c24365ee37278a17b5c0211a0c667caf298bbd0dd1",
                        "timestamp": "2022-02-24 05:59:54"
                    },
                    {
                        "value": "2f4f45f6624d1992bb474d7b245ebe8c316c0f8093fd1e313756c69680b844e6",
                        "timestamp": "2022-02-24 05:59:52"
                    },
                    {
                        "value": "b6d909bb2315ec139fa4704eead928f140919a621e22234160c7a1bfc6d2529e",
                        "timestamp": "2022-02-24 05:59:50"
                    },
                    {
                        "value": "2f3d784f71d8c629d4ac3a2fac242db09b68d617873b2b0de461ba943ec42519",
                        "timestamp": "2022-02-24 05:59:48"
                    },
                    {
                        "value": "e043dea504d025f18f406d9649b64498338f3330ab9cf30e4efe9c0c2c0231df",
                        "timestamp": "2022-02-24 05:59:43"
                    },
                    {
                        "value": "1ce8a939b3e7d84c59c12dc9e1091532f4336dac533847b6533b01d9dcf494e9",
                        "timestamp": "2022-05-13 18:59:34"
                    },
                    {
                        "value": "c8b1bb5ea01880b26e0d061216f6a408be85234e6deb241634017183adddcb2f",
                        "timestamp": "2022-02-24 05:59:41"
                    },
                    {
                        "value": "d3c75c5bc4ae087d547bd722bd84478ee6baf8c3355b930f26cc19777cd39d4c",
                        "timestamp": "2022-02-24 05:59:38"
                    },
                    {
                        "value": "0aaacd11d8b956d317489d060e72946d28ab6aef9be1b541aff9904a750f4b51",
                        "timestamp": "2022-02-24 05:59:36"
                    },
                    {
                        "value": "1be34c1ed6ad862678d6c5e58c190f0a86014975af6d79519b2006aa7614df79",
                        "timestamp": "2022-02-24 05:59:33"
                    },
                    {
                        "value": "c67ba4c6e872dbcd2b1281c33fb033f886d8472ea021cf3974a445c4b804fec2",
                        "timestamp": "2022-02-24 05:59:31"
                    },
                    {
                        "value": "dd4867c49f6080ac516b290e9dd1f131598b0222d038afccce5af55c133bf92a",
                        "timestamp": "2022-02-24 05:59:29"
                    },
                    {
                        "value": "64a3a3ec70d20636299b8fe4f50c2b4d077f9934ee2d6ccf7d440b05b9770f56",
                        "timestamp": "2022-02-24 05:59:26"
                    },
                    {
                        "value": "844cc2551f8bbfd505800bd3d135d93064600a55c45894f89f80b81fea3b0fa1",
                        "timestamp": "2022-02-24 05:59:24"
                    },
                    {
                        "value": "8b26138a0e371f06fb51679c8d89f661c6ace3d35a90e569887a1b14ac5938e7",
                        "timestamp": "2022-02-24 05:59:21"
                    },
                    {
                        "value": "3cc671401bf8bc4527a18e302ae9e673ba78f7f2273bab71ebc3fae8f2f25c07",
                        "timestamp": "2022-02-24 05:59:16"
                    },
                    {
                        "value": "3125aa67fc6e09a00aad39e0eb8024b849d54de353b1a45b5297d4c5d5e87941",
                        "timestamp": "2022-02-24 05:59:19"
                    },
                    {
                        "value": "004ede55a972e10d9a21bcf338b4907d6eed65bf5ad6abbbd5aec7d8484bdedf",
                        "timestamp": "2022-02-24 05:59:13"
                    },
                    {
                        "value": "6fce6b5f101ab504115f1251a842d55c50a046d7fd92d1fe0f42e430900bc8c5",
                        "timestamp": "2022-02-24 05:59:10"
                    },
                    {
                        "value": "949ee1522f6b132960d02bdd0681e28b0635a266d5ec7dcaa6838806beb927be",
                        "timestamp": "2022-02-24 05:59:08"
                    },
                    {
                        "value": "d417f3785a33da8b26ce68b62e66bdf7d46869b692fe325541a7be2b98119bd1",
                        "timestamp": "2022-02-24 05:59:06"
                    },
                    {
                        "value": "58e3640032796983185ef3ce07d0fbce620514a73909d8573f72264a57ac8379",
                        "timestamp": "2022-02-24 05:59:02"
                    },
                    {
                        "value": "9006eb87d3e0357ca3bb046c3db93e1aacfeaf5dd6d9ca751d35fe1e9bc77ed5",
                        "timestamp": "2022-02-24 05:58:56"
                    },
                    {
                        "value": "1fa52ca9e2fbb3b80e63b6cbfc776bf1c14d434afe50167a4b11ffdbe1987b79",
                        "timestamp": "2022-02-24 05:59:00"
                    },
                    {
                        "value": "d6fb956ada8728768d0bfeb98402cbb4db0358fa2c0a28966669e770d72b75a5",
                        "timestamp": "2022-02-24 05:58:54"
                    },
                    {
                        "value": "f7b83f07f6fec1df0fa73c935c96dc2ec8fbe0de3b17bb56f9963c92c22715c3",
                        "timestamp": "2022-02-24 05:58:51"
                    },
                    {
                        "value": "04bf10cd8186fa18bdec9948ae88099dd86ef444af46b20b444b351929a8f71b",
                        "timestamp": "2022-02-24 05:58:48"
                    },
                    {
                        "value": "64f1a2e5f52292fba8f64a851c466d558f1607cac783f30015f6df9e0dbce1c5",
                        "timestamp": "2022-04-29 17:21:13"
                    },
                    {
                        "value": "240ef5b7c57e2bb4a7c92668c71e96b40e5ef010350e0b552b559df10313a884",
                        "timestamp": "2022-02-24 05:58:43"
                    },
                    {
                        "value": "620aceceb5eb0b43cf1a504fa6044675f114611a49e1c9c583da02b6eeddf507",
                        "timestamp": "2022-02-24 05:58:40"
                    },
                    {
                        "value": "d43b52e3453ce77d2694a239232f39341a98fa704954a558125e74a85f22a346",
                        "timestamp": "2022-02-24 05:58:37"
                    },
                    {
                        "value": "bd47cc015a113fae8f86975c2e59e2342c971bae162648f84a628c313caf1eca",
                        "timestamp": "2022-02-24 05:58:33"
                    },
                    {
                        "value": "c16a3ccc2ca18a936e56cb91cb271caef8b69076cf7bfa5af5867fbb7b71539b",
                        "timestamp": "2022-02-24 05:58:29"
                    },
                    {
                        "value": "52c356000529ec0927939a7374457f4386533efede771d71af737cad253369d8",
                        "timestamp": "2022-02-24 05:58:26"
                    },
                    {
                        "value": "184a36e242695e5f5a7bbb63cbf1a32a7bd434ab80bf5e39373ef76af794523e",
                        "timestamp": "2022-02-24 05:58:22"
                    },
                    {
                        "value": "e08bb07279311220463ea080ab02b42358aed73e4ebaebe1aa956746349c2941",
                        "timestamp": "2022-02-24 05:58:18"
                    },
                    {
                        "value": "7ca57576c6a2d7dbf49faeafd4804c6b86d9af7fff1390c58a30eb9d9bf2fbfd",
                        "timestamp": "2022-02-24 05:58:14"
                    },
                    {
                        "value": "1442db21423296acfbd729481cc5f3edb80591383a009f9feeb0ef2675cfc487",
                        "timestamp": "2022-02-24 05:58:10"
                    },
                    {
                        "value": "703ee3222eccd0e355b9ef414be9153fa3a2ad8efb8176fee887d7744a9f632f",
                        "timestamp": "2022-02-24 05:58:06"
                    },
                    {
                        "value": "307a8158e698680c7186e3c1481b29186d8b265bb83662397a54f235b0c9a3d1",
                        "timestamp": "2022-02-24 05:58:03"
                    },
                    {
                        "value": "d7868354f2dfe79e91adef4f7b24bcb60772a76c577bcc5c71709c8a3e26eb5d",
                        "timestamp": "2022-02-24 05:58:01"
                    },
                    {
                        "value": "35d49eb7fa8740a53d6a84de7fd9b7d177df8d96d25a67b1bc18d2b685988828",
                        "timestamp": "2022-02-24 05:57:58"
                    },
                    {
                        "value": "78023bc371e17e552cbf39390c9752edd3ecf7c3ee0c1624da8497792732f194",
                        "timestamp": "2022-02-24 05:57:56"
                    },
                    {
                        "value": "4182ba86379572a9e66a14c4338d123b51642e894724d40928aa453da65f507a",
                        "timestamp": "2022-02-24 05:57:53"
                    },
                    {
                        "value": "c0fbff383681c6acb239bdee0a8f17282d1502bb5c32a500a3971e1cb7039b1a",
                        "timestamp": "2022-02-24 05:57:51"
                    },
                    {
                        "value": "81ada6f810948fd3babd1f514db82a519fb289ba03c05941145b345ecf8ac7df",
                        "timestamp": "2022-02-24 05:57:48"
                    },
                    {
                        "value": "d167d334fa5ef8043b606f82682b87a1f201216df1c5540d289ee42439aa71ca",
                        "timestamp": "2022-02-24 05:57:44"
                    },
                    {
                        "value": "0b0b902af452e1c949a609a3b29a9de21dac639846c77427de06e6e63c1fe904",
                        "timestamp": "2022-02-24 05:57:41"
                    },
                    {
                        "value": "97469cb72db2b734861a1a7d27b2f90275b304ea87e5664cdfd75f2f4591922c",
                        "timestamp": "2022-02-24 05:57:37"
                    },
                    {
                        "value": "4e3b5c5f42afbc601982cd49b723b493da0928d753548c7ed5e25927a597835b",
                        "timestamp": "2022-02-24 05:57:34"
                    },
                    {
                        "value": "8df9b346bf591629a9eb0bf9f32c545a1266873495ceec9ba990be1dd22b9aa9",
                        "timestamp": "2022-02-24 05:57:30"
                    },
                    {
                        "value": "473bcbcba12296b08b765b4f7c2beea5f56f263d5e6c0d15c1006af28f6172e8",
                        "timestamp": "2022-02-24 05:57:26"
                    },
                    {
                        "value": "d65864746746fd0718dba86bb077fdce60e491b6addd41f05752ad52a3d3aace",
                        "timestamp": "2022-02-24 05:57:23"
                    },
                    {
                        "value": "61556c295a2788ebc9b82f1a214e9a79f87152a80f63febc1a039ab20a2c9be4",
                        "timestamp": "2022-02-24 05:57:19"
                    },
                    {
                        "value": "983c499dd64ba2067a00f8ed032b1b367b2cc191d0ab3573c766efdd656c2cf9",
                        "timestamp": "2022-02-24 05:57:15"
                    },
                    {
                        "value": "0460cfa76fb0a02be92b0bc99a09168ebe38dbc8eeb1aa966dca66f0e849b53d",
                        "timestamp": "2022-02-24 05:57:12"
                    },
                    {
                        "value": "5c278c04bb19196dc8559d45b9728b3ba0c1bc5cdd20a766f56248e561c6f5a6",
                        "timestamp": "2022-02-24 05:57:04"
                    },
                    {
                        "value": "f848c62dbc910ee32990161cc598f550707d26c524394be35c7bdb7a62626047",
                        "timestamp": "2022-02-24 05:57:08"
                    },
                    {
                        "value": "1201e76d42f85feb89d64e6fd497144ed3afe66281b2464e84f3b889f2867c9b",
                        "timestamp": "2022-02-24 05:57:01"
                    },
                    {
                        "value": "87e6f7b20ea2bd35d947d9100fe6291dfe186cfedea5d451be14bab5d2518e89",
                        "timestamp": "2022-02-24 05:56:57"
                    },
                    {
                        "value": "fe1652f4b828c9f98ff4a37829f4a988ad3c1601fc0dff7f99fe941ae4e81864",
                        "timestamp": "2022-02-27 20:14:48"
                    },
                    {
                        "value": "2d3dc442e7c1d55a1b28e0d91a3f14def468f3b704e35ead441953413b9a5b4a",
                        "timestamp": "2022-02-24 05:56:50"
                    },
                    {
                        "value": "e422aa32b5f26a15aedba1bf597a163cd99c4c7777608bf05c8be3b404d825a1",
                        "timestamp": "2022-02-24 05:56:47"
                    },
                    {
                        "value": "626a1863c6cb57977bf75596d78b51cb8208fadec3d68eba1dd7b5a3c88578ce",
                        "timestamp": "2022-02-24 05:56:43"
                    },
                    {
                        "value": "0fd062f86151b9d49d65b8f12c52737600bff8bb3462aba7bf23d820bf4d5518",
                        "timestamp": "2022-02-24 05:56:40"
                    },
                    {
                        "value": "c49584e33e2fa854cc80114ff467f862260afe79199ccbe4d96b7542a3cd87d1",
                        "timestamp": "2022-02-24 05:56:36"
                    },
                    {
                        "value": "2a170da70452af68b6c6ff4c0821349c0490e9bdca16c2bc6a6a40dac59bc334",
                        "timestamp": "2022-02-24 05:56:33"
                    },
                    {
                        "value": "83626579f6334700cb26ec528383f902a4152baf31a3d10482eee019039658ad",
                        "timestamp": "2022-02-24 05:56:30"
                    },
                    {
                        "value": "03597628e999d791f4cc442328024235db9a929467a62ef0a00c91a76161f0e1",
                        "timestamp": "2022-02-24 05:56:27"
                    },
                    {
                        "value": "23e95ba67603234352ff2864dc7fa54742f501e5922f01f8c182dbefc116f97f",
                        "timestamp": "2022-02-24 05:56:23"
                    },
                    {
                        "value": "dbfee080eb99d2c1fcba7e7d72191cef3b9f00ebd279a62147ccfb1ae17bdd84",
                        "timestamp": "2022-02-24 05:56:20"
                    },
                    {
                        "value": "c14f8bc656284715516f26935afe487a1d584f56ffabbcb98f2974f6ca6cd3a4",
                        "timestamp": "2022-02-24 05:56:16"
                    },
                    {
                        "value": "6d11b0f83d725b745fc10a5224ce4cb0582c7f4e912347f681f1fbe599bb5c27",
                        "timestamp": "2022-02-24 05:56:13"
                    },
                    {
                        "value": "8907548328b9bc8e04d0949e4a0e3bb9b749b45a32d9d95cbb9d6b27154d4310",
                        "timestamp": "2022-02-24 05:56:05"
                    },
                    {
                        "value": "bf5c167f6f4c6ff2cb86d1d3bbde94f86533f0fb18db13489ec18403ea3a0396",
                        "timestamp": "2022-02-24 05:56:02"
                    },
                    {
                        "value": "53b1c1b2f41a7fc300e97d036e57539453ff82001dd3f6abf07f4896b1f9ca22",
                        "timestamp": "2022-02-24 05:56:00"
                    },
                    {
                        "value": "4d8e709832dc3b6cc9283dc2c79eac0d9a4092b1a3b180d7cc7ec6902b7a128c",
                        "timestamp": "2022-02-24 05:55:57"
                    },
                    {
                        "value": "f99c69327a746f4fde02b7a550cf6c9f48e5e22fcb49bea0e3e4bc5a3efa605c",
                        "timestamp": "2022-02-24 05:55:51"
                    },
                    {
                        "value": "fc783af396a1bd9c81613cd051db69e778c102953aec0d6f67743846f3b862e6",
                        "timestamp": "2022-02-24 05:55:54"
                    },
                    {
                        "value": "c47d935ef7d88780968dfd3b68bbb7879a806e8b5d9373c920f3bf522159486f",
                        "timestamp": "2022-02-24 05:55:48"
                    },
                    {
                        "value": "46112e017bc7804816e3b85f25630c283085ba74c7de0a4c1cf840d8a702f487",
                        "timestamp": "2022-02-24 05:55:46"
                    },
                    {
                        "value": "5cf0a6ac9786638a063eea9ab68508f31e537072bbcea27371f9121d2668a251",
                        "timestamp": "2022-02-24 05:55:42"
                    },
                    {
                        "value": "6ee0ab481d61828f19c749809d2623aad295042228da1148643d7c656ab3632f",
                        "timestamp": "2022-02-24 05:55:39"
                    },
                    {
                        "value": "1a5d66450670c057bce6eff656b86dce21e729c46c86362ed50fe79c1b074f15",
                        "timestamp": "2022-02-24 05:55:31"
                    },
                    {
                        "value": "dbc76355c56a885a1475174fb5325d61b875fd6207ef465cae05617b49463a38",
                        "timestamp": "2022-02-24 05:55:34"
                    },
                    {
                        "value": "f11724258acba02fa817e411878cd2506c09f4d00fcc47302f55dc7748d50fd9",
                        "timestamp": "2022-02-24 05:55:27"
                    },
                    {
                        "value": "d338295d50d5b39d8377c593f6d46feb512823e2724704448cc885b40c5056e0",
                        "timestamp": "2022-02-24 05:55:24"
                    },
                    {
                        "value": "808ab5f285878221da8fedda2220ebf5563e5b73729943d5cf63c7444c8dabc4",
                        "timestamp": "2022-02-24 05:55:21"
                    },
                    {
                        "value": "6815e1e06e29863290319eb3e814ae2a394271aa2f95cc7c31a649c4c2f4fd04",
                        "timestamp": "2022-02-24 05:55:17"
                    },
                    {
                        "value": "5eb02378eec4ce180d28d3d9410b7ccaeaa1cd5f15c8bfd8c398579c0f7ed2ed",
                        "timestamp": "2022-02-24 05:55:13"
                    },
                    {
                        "value": "a5751a46768149c5ddf318fd75afc66b3db28a5b76254ee0d6ae27b21712e266",
                        "timestamp": "2022-02-24 05:55:06"
                    },
                    {
                        "value": "259eba04b9141fd6af0763f9c3f4dd0f114bff3d4bc52573962ba7ef923369c2",
                        "timestamp": "2022-02-24 05:54:58"
                    },
                    {
                        "value": "17ac91a36237d8f37dcee961ba74c9310a45c009780ea092c3a1e428870ff8a1",
                        "timestamp": "2022-02-24 05:55:00"
                    },
                    {
                        "value": "e7ce83a1a5163487d86538344c4f37c72a795b07b03a40db7d36ec81a442d685",
                        "timestamp": "2022-02-24 05:54:56"
                    },
                    {
                        "value": "63b44f7fe68cb8a05fa98c5acc59851d4b73f5bbd76e9910c94042c523da8d5b",
                        "timestamp": "2022-02-24 05:54:54"
                    },
                    {
                        "value": "05c8aaae3fb6c9605f5c69f8eb73cc2c1f08bd72213492e24f221a2ef60508a3",
                        "timestamp": "2022-02-24 05:54:51"
                    },
                    {
                        "value": "73bd8c2aa71f5dcd9d2ddd79e53656c6ae3db2535e08cf9dab1cd13bdd6d5ea3",
                        "timestamp": "2022-02-24 05:54:47"
                    },
                    {
                        "value": "03b9c7a3b73f15dfc2dcb0b74f3e971fdda7d1d1e2010c6d1861043f90a2fecd",
                        "timestamp": "2022-02-24 05:54:49"
                    },
                    {
                        "value": "e532662996409a0f959353768936d95444ffee71d5f14536d603e031f183b012",
                        "timestamp": "2022-02-24 05:54:45"
                    },
                    {
                        "value": "e26f1702c232991efaed7177aaafd2f294d2315461a1619cb42541ef0aa8ae77",
                        "timestamp": "2022-02-24 05:54:43"
                    },
                    {
                        "value": "b3ebc0e725d6a9bd59a3c322dd6f67ccbf09b3c152ffef3e4f46d19eafcbde17",
                        "timestamp": "2022-02-24 05:54:40"
                    },
                    {
                        "value": "1ef1ff8b1e81815d13bdd293554ddf8b3e57490dd3ef4add7c2837ddc67f9c24",
                        "timestamp": "2022-05-13 18:59:25"
                    },
                    {
                        "value": "a5aeae61d5045abdc28dd0e78bd1cef6e4bc2beb5360696959f532a616435f70",
                        "timestamp": "2022-02-24 05:54:34"
                    },
                    {
                        "value": "ca87ce6c73fad0e70ac28e9ac9e0eeaf945298e26218b5bf986843053c891705",
                        "timestamp": "2022-02-24 05:54:36"
                    },
                    {
                        "value": "81792fcbaad868d2e4aca1ed372f4a5abb34372d3265d5712a65cdfe05e42df8",
                        "timestamp": "2022-02-24 05:54:32"
                    },
                    {
                        "value": "2fc6d7df9252b1e2c4eb3ad7d0d29c188d87548127c44cebc40db9abe8e5aa35",
                        "timestamp": "2022-02-24 05:54:29"
                    },
                    {
                        "value": "79e41bb5b4edef24742f9e376add4bafdb9cbeb9cb8ae256a36df74694d820b9",
                        "timestamp": "2022-02-24 05:54:26"
                    },
                    {
                        "value": "98c2e87de165909adedd40206fbda7a1f71a457d5aa97e9ab48546ab76ce3f6e",
                        "timestamp": "2022-02-24 05:54:19"
                    },
                    {
                        "value": "b42d07f0b72879bf21e99f39a21edae1a38c3fd62393bd4e88f1032f561855f9",
                        "timestamp": "2022-02-24 05:54:23"
                    },
                    {
                        "value": "2452cf5c6fccf361fa27131d9b261a60253eef8b96e6e2f524c85beea6488bd0",
                        "timestamp": "2022-02-24 05:54:16"
                    },
                    {
                        "value": "1ee0bbfe78f6da5eea5e4aad6992cfcfe3aa824584c04aa3fba5a0d9c605b997",
                        "timestamp": "2022-02-24 05:54:12"
                    },
                    {
                        "value": "740ba8dc67571ffa4773ff6eb52ed745b5bf6e7fe93c941070da4c3915787476",
                        "timestamp": "2022-02-24 05:54:09"
                    },
                    {
                        "value": "3db6e8df73f12b6a9fa9adb6ad87b017d530a9d736909338042735ed00a9463b",
                        "timestamp": "2022-02-24 05:56:09"
                    },
                    {
                        "value": "90cfbbe316c94611fdb48029b5302df0980395528a812404cacbc39ef1a6bde0",
                        "timestamp": "2022-02-24 05:54:05"
                    },
                    {
                        "value": "6f7043b24d9b4c30006781402f0cef2543c8f3e9087d79f6bcff43b1418ad21d",
                        "timestamp": "2022-02-24 05:54:02"
                    },
                    {
                        "value": "d8a0d25776c28e17e724da2b1c8fdae28d7c6b32cfa9d3d2a20f3f57ff370488",
                        "timestamp": "2022-02-24 05:54:00"
                    },
                    {
                        "value": "1c4da8bf2089e82a1665f7ac350eeea291dae7509d58dbfc2037ddc1997bfd13",
                        "timestamp": "2022-02-24 05:53:58"
                    },
                    {
                        "value": "c97572a81dade2cc7d86b853196cd3487249f3495e8fbdd5bbad351421101b6b",
                        "timestamp": "2022-02-24 05:53:56"
                    },
                    {
                        "value": "d6b7b27e13700aaa7f108bf9e76473717a7a1665198e9aafcc2d2227ca11bba9",
                        "timestamp": "2022-02-24 05:53:54"
                    },
                    {
                        "value": "ae9ac54c03cabf642eb079b548fac353a477b5c11ec93296a5578715001c5f1c",
                        "timestamp": "2022-02-24 05:53:50"
                    },
                    {
                        "value": "b422ced27d9358665699d37648a640db10ade85e591a4cc6ceb16f01dbf9b3d6",
                        "timestamp": "2022-02-24 05:53:48"
                    },
                    {
                        "value": "fe6e84192da5c0210d4bd51e809792b28e60edb337917f903a7e9a31bc40cf86",
                        "timestamp": "2022-02-24 05:53:46"
                    },
                    {
                        "value": "5c5d05c4dcc9489ed527a1a607f0e2884d10558451662bcc849e36da7eca570c",
                        "timestamp": "2022-02-24 05:53:43"
                    },
                    {
                        "value": "a47d7ff36064cab056d56dca4c466b4e98b331e4aed1d7aee2790cb9a94b1793",
                        "timestamp": "2022-02-24 05:53:41"
                    },
                    {
                        "value": "904e0855772f56721cc157641a26bb7963651e5a45c3bb90764328b17081abd5",
                        "timestamp": "2022-02-24 05:53:38"
                    },
                    {
                        "value": "c57d20e273337da5239f1573212adc60eacf470873e67ea135508c7c749da37b",
                        "timestamp": "2022-02-24 05:53:35"
                    },
                    {
                        "value": "49b2c44d9a304035e586a15c1eb06101dcd64cdc17b64a0d69d253e653ff25a7",
                        "timestamp": "2022-02-24 05:53:33"
                    },
                    {
                        "value": "227164b06f201b07a8b82800adcc6a831cadaed6709d1473fd4182858fbd80a5",
                        "timestamp": "2022-02-24 05:53:30"
                    },
                    {
                        "value": "040fcbd360c7498756519cb0e687120bd623da80784034ea89178409491b1c44",
                        "timestamp": "2022-02-24 05:53:26"
                    },
                    {
                        "value": "a05c8129e607c6d0976d79f69c6a020d15767a9ef3a9c9f1570c5193a7b5b76b",
                        "timestamp": "2022-02-24 05:53:23"
                    },
                    {
                        "value": "60c16e45c5cbe88a38911f1e3176d90444e4884261d8481d4d719acec1bc5025",
                        "timestamp": "2022-02-24 05:53:21"
                    },
                    {
                        "value": "d21f53277c689939d94eced15e37c2f1e9bcbf547314ee26f4b21eee2102edbf",
                        "timestamp": "2022-02-24 05:53:18"
                    },
                    {
                        "value": "09a0e87008e34a7a434c5d853600f693ab9de181e1f863ef6a90edf8c3fccd54",
                        "timestamp": "2022-02-24 05:53:15"
                    },
                    {
                        "value": "e285531e6b2774041cf240f612e9472a8fedd7c2ec2a3d796af72f73272f56c6",
                        "timestamp": "2022-02-24 05:53:13"
                    },
                    {
                        "value": "3ab3c4ffcf366dcbe660506295dcef82d058cb25b1c0b362cc62371a19a0d5f8",
                        "timestamp": "2022-02-24 05:53:10"
                    },
                    {
                        "value": "895493271f3e61a7bc6338f51a127d629b3f47c13e87b0a56f61ad42c3377689",
                        "timestamp": "2022-02-24 05:53:07"
                    },
                    {
                        "value": "1125cdabe2e146734ffc13137f23901377509408c4531ea17fcb99d6666815f0",
                        "timestamp": "2022-02-24 05:53:04"
                    },
                    {
                        "value": "dd1c312400365691de6abd0b2ae79a671dea9a0aaddd354f720614716564d7d7",
                        "timestamp": "2022-02-24 05:53:01"
                    },
                    {
                        "value": "6f0c6f447a18ad9fd81382b062d16d07eede05a15ab75870c0fdb43d421bb42d",
                        "timestamp": "2022-02-24 05:52:58"
                    },
                    {
                        "value": "9e2ad47329661f8f65ca72dd32dc4e7dee931c148af4c71562d9fb347c8fc39d",
                        "timestamp": "2022-02-24 05:52:55"
                    },
                    {
                        "value": "15ac17280f7e4b43eb21c090792465494eede0937897c271eb1cc14733dc371e",
                        "timestamp": "2021-12-16 17:15:35"
                    },
                    {
                        "value": "677bb54137bb7c811fb5c7f3d64880619e72eb5adc6e0be7f8f70a7094688a32",
                        "timestamp": "2021-12-16 17:15:34"
                    },
                    {
                        "value": "1ac3786a4cff03a66aebf942643dc04ba75ef412dc889a9deb0bde3df404b850",
                        "timestamp": "2021-12-16 17:15:33"
                    },
                    {
                        "value": "ba73f5c3a29254086490d525d8e892df8e9cf88ce0cafcbad958b1ba01e8222a",
                        "timestamp": "2021-12-16 17:15:32"
                    },
                    {
                        "value": "c36728e99f92b081dbe0479781d414c5c85b2ebfa35e46c9151efd4caf2124f8",
                        "timestamp": "2021-12-06 15:45:28"
                    },
                    {
                        "value": "1dc9ca76545f967f4411aa1fb1834d0eacea4297520b7fb8aee1745d019008d1",
                        "timestamp": "2021-12-06 15:45:27"
                    },
                    {
                        "value": "e00fd91efb00ef5c4096eb52a40188f090888018f9c340b48ceea8db65d0a11f",
                        "timestamp": "2021-12-06 15:45:26"
                    },
                    {
                        "value": "ee93d7c53b631d33dbd2abd36af51e6880f73ab3be8d945f357ff3b4f8e0270a",
                        "timestamp": "2021-12-06 15:45:25"
                    },
                    {
                        "value": "a4c6f1b8fa158df05434ce436b18c0a12d63d0d81f07738d2b4d78eb2651cc7c",
                        "timestamp": "2021-05-25 18:04:44"
                    },
                    {
                        "value": "0bb0e2a51144c71718b5b8d91f0818d324c7934f2869b7722e4854c1327a0ecf",
                        "timestamp": "2021-05-25 18:04:44"
                    },
                    {
                        "value": "0fb5dbb86d0ce3889044b8b5004692f88fc81609fa2e2136b0ba9a410403f151",
                        "timestamp": "2021-05-25 18:04:44"
                    },
                    {
                        "value": "ecc5488a5d42ca1eaf37111f14e30d0da128c660306f86e2ced0098daf74b3d0",
                        "timestamp": "2021-05-25 18:04:44"
                    },
                    {
                        "value": "d21c71a090cd6759efc1f258b4d087e82c281ce65a9d76f20a24857901e694fc",
                        "timestamp": "2021-05-19 09:10:47"
                    },
                    {
                        "value": "a25b453cf679a36f9b7611d4b492ba8dc6223b1a1a02fc8c0da4a104dcf4fa12",
                        "timestamp": "2021-05-13 07:18:41"
                    },
                    {
                        "value": "af1408a4d276842bea2ff1528fc1d2b93889a1fc4a91c6594fc27af325120da8",
                        "timestamp": "2021-05-13 07:18:41"
                    },
                    {
                        "value": "6906a72cfe38eb73bc668e6d0e7558997e365a6aa3760f77ab1dda6d88cc81d0",
                        "timestamp": "2021-05-13 07:18:41"
                    },
                    {
                        "value": "036a4795d259d36b3396cd3a0fd46d4a103337c96fe911f5c362d5682bd58ba9",
                        "timestamp": "2021-05-13 07:18:40"
                    },
                    {
                        "value": "909224f5de1c33d7bf71242ab16269a11b8a36b457ab1c55f37098887e26e0e5",
                        "timestamp": "2022-02-24 05:57:50"
                    },
                    {
                        "value": "d29b8160e51dd29474f3464111fc888da8adb2bc2f0d4f29ce71219ffc846bd5",
                        "timestamp": "2022-02-24 06:00:24"
                    },
                    {
                        "value": "3a3a7b91d8890a05d46d7974a0d4e1fa32a1cc6784ddfac6203841291826c700",
                        "timestamp": "2021-04-26 09:24:28"
                    },
                    {
                        "value": "0639bd0b76f285b2f5cad9ca40f7fa54439a9304aff7903648a35763d298f424",
                        "timestamp": "2021-04-26 09:24:28"
                    },
                    {
                        "value": "1a00e34a91f41549541f2dc69959dbd804b57bcd3d38665a4d182a2d3db56b71",
                        "timestamp": "2021-03-31 12:48:51"
                    },
                    {
                        "value": "888917af893dba578a9f4427cdd2a58d05be1e38c1b687352969e236a4136166",
                        "timestamp": "2022-02-24 06:00:58"
                    },
                    {
                        "value": "62e70efef5075232feada6857c97b388ec98e1bb175c501c429117f550a1ad66",
                        "timestamp": "2022-02-24 06:00:42"
                    },
                    {
                        "value": "cdd9772750c4bbe47b952dc22824a1e5acf753acc40f123815971535deec10fd",
                        "timestamp": "2021-03-31 12:48:51"
                    },
                    {
                        "value": "456dc28731284188734ef4724d38dca91dcba6c780e6268603365967522cdd6e",
                        "timestamp": "2022-02-24 05:57:03"
                    },
                    {
                        "value": "e505815e8a4c215f2ae567d8cf8de8a737c13c6f6990c113db6943ae30b93af9",
                        "timestamp": "2021-03-22 14:00:31"
                    },
                    {
                        "value": "4478feb1e3c98220f50ce341665087b7f6c1d9c290e42f54812bc55da5b3707d",
                        "timestamp": "2022-02-24 05:58:12"
                    },
                    {
                        "value": "e76c7056eb310097574fd6b3d04d7bd91ca409ea390b635a55006d3c365994df",
                        "timestamp": "2021-03-22 14:00:31"
                    }
                ],
                "url": [
                    {
                        "value": "https://contirecovery.info",
                        "timestamp": "2023-04-25 18:48:23"
                    },
                    {
                        "value": "http://m232fdxbfmbrcehbrj5iayknxnggf6niqfj6x4iedrgtab4qupzjlaid.onion",
                        "timestamp": "2023-04-25 18:48:22"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "c7c5b8b0703950c40e6614bf957f94c1",
                        "timestamp": "2022-12-07 05:06:24"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-04-25 18:49:31",
    "mitre": [],
    "file_name": "conti"
};