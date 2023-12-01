var threatdata = {
    "name": "Conti",
    "alias": "Conti",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-10-03",
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
                "Ransomware",
                "Conti",
                "conti"
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
    "file_name": "conti",
    "articles": [
        {
            "data_url": "https://medium.com/@lcam/lighting-the-exfiltration-infrastructure-of-a-lockbit-affiliate-and-more-f57fbb7a4e79",
            "date": "2023-10-03",
            "organization": "",
            "author": "Luca Mella",
            "title": "Lighting the Exfiltration Infrastructure of a LockBit Affiliate (and more)",
            "categories": [
                "LockBit",
                "LockBit",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2023-CTI-007.pdf",
            "date": "2023-09-12",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "FIN12: A Cybercriminal Group with Multiple Ransomware",
            "categories": [
                "BlackCat",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "MimiKatz",
                "Nokoyawa Ransomware",
                "PLAY",
                "Royal Ransom",
                "Ryuk",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/multiple-foreign-nationals-charged-connection-trickbot-malware-and-conti-ransomware",
            "date": "2023-09-07",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "Multiple Foreign Nationals Charged in Connection with Trickbot Malware and Conti Ransomware Conspiracies",
            "categories": [
                "Conti",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://arcticwolf.com/resources/blog/conti-and-akira-chained-together/",
            "date": "2023-07-26",
            "organization": "Arctic Wolf",
            "author": "Steven Campbell",
            "title": "Conti and Akira: Chained Together",
            "categories": [
                "Akira",
                "Conti"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/trickbot-conti-crypters-where-are-they-now/",
            "date": "2023-06-27",
            "organization": "SecurityIntelligence",
            "author": "Charlotte Hammond",
            "title": "The Trickbot/Conti Crypters: Where Are They Now?",
            "categories": [
                "Black Basta",
                "Conti",
                "Mount Locker",
                "PhotoLoader",
                "Royal Ransom",
                "SystemBC",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://github.com/EmissarySpider/ransomware-descendants",
            "date": "2023-06-17",
            "organization": "Github (EmissarySpider)",
            "author": "EmissarySpider",
            "title": "ransomware-descendants",
            "categories": [
                "Babuk",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.first.org/resources/papers/conf2023/FIRSTCON23-TLPCLEAR-Staubmann-Busy-Bees.pptx",
            "date": "2023-06-08",
            "organization": "VMRay",
            "author": "Patrick Staubmann",
            "title": "Busy Bees - The Transformation of BumbleBee",
            "categories": [
                "BumbleBee",
                "Cobalt Strike",
                "Conti",
                "Meterpreter",
                "Sliver"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/from-royal-with-love-88fa05ff7f65",
            "date": "2023-03-10",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "From Royal With Love",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "PLAY",
                "Royal Ransom",
                "Somnia"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2023/02/10/malware-analysis-8.html",
            "date": "2023-02-10",
            "organization": "cocomelonc",
            "author": "cocomelonc",
            "title": "Malware analysis: part 8. Yara rule example for MurmurHash2. MurmurHash2 in Conti ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://securityaffairs.com/141666/cyber-crime/lockbit-green-ransomware-variant.html",
            "date": "2023-02-01",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "New LockBit Green ransomware variant borrows code from Conti ransomware",
            "categories": [
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2023/01/04/malware-tricks-26.html",
            "date": "2023-01-04",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware development tricks: part 26. Mutex. C++ example.",
            "categories": [
                "AsyncRAT",
                "Conti",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/luna-moth-callback-phishing/",
            "date": "2022-11-21",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kristopher Russo",
            "title": "Threat Assessment: Luna Moth Callback Phishing Campaign",
            "categories": [
                "BazarBackdoor",
                "Conti"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/09/esxi-targeting-ransomware-the-threats-that-are-after-your-virtual-machines-part-1.html",
            "date": "2022-09-28",
            "organization": "vmware",
            "author": "Giovanni Vigna",
            "title": "ESXi-Targeting Ransomware: The Threats That Are After Your Virtual Machines (Part 1)",
            "categories": [
                "Avoslocker",
                "Babuk",
                "Black Basta",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "Luna",
                "RansomEXX",
                "RedAlert Ransomware",
                "REvil"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/09/threat-report-illuminating-volume-shadow-deletion.html",
            "date": "2022-09-20",
            "organization": "vmware",
            "author": "Dana Behling",
            "title": "Threat Report: Illuminating Volume Shadow Deletion",
            "categories": [
                "Conti",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/advintel-s-state-of-emotet-aka-spmtools-displays-over-million-compromised-machines-through-2022",
            "date": "2022-09-13",
            "organization": "AdvIntel",
            "author": "Advanced Intelligence",
            "title": "AdvIntel's State of Emotet aka \"SpmTools\" Displays Over Million Compromised Machines Through 2022",
            "categories": [
                "Conti",
                "Cobalt Strike",
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-vs-monti-a-reinvention-or-just-a-simple-rebranding",
            "date": "2022-09-07",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Conti vs. Monti: A Reinvention or Just a Simple Rebranding?",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2022/09/the-curious-case-of-monti-ransomware-a-real-world-doppelganger",
            "date": "2022-09-07",
            "organization": "Blackberry",
            "author": "Anuj Soni",
            "title": "The Curious Case of \u201cMonti\u201d Ransomware: A Real-World Doppelganger",
            "categories": [
                "Conti",
                "MimiKatz",
                "Veeam Dumper"
            ]
        },
        {
            "data_url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE54L7v",
            "date": "2022-08-22",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Extortion Economics - Ransomware\u2019s new business model",
            "categories": [
                "BlackCat",
                "Conti",
                "Hive",
                "REvil",
                "AgendaCrypt",
                "Black Basta",
                "BlackCat",
                "Brute Ratel C4",
                "Cobalt Strike",
                "Conti",
                "Hive",
                "Mount Locker",
                "Nokoyawa Ransomware",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/bumblebee-malware-projector-libra/",
            "date": "2022-08-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "Flight of the Bumblebee: Email Lures and File Sharing Services Lead to Malware",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0802.pdf",
            "date": "2022-08-02",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Initial Access Brokers Are Key to Rise in Ransomware Attacks",
            "categories": [
                "Azorult",
                "BlackMatter",
                "Conti",
                "Mars Stealer",
                "Raccoon",
                "RedLine Stealer",
                "Taurus Stealer",
                "Vidar"
            ]
        },
        {
            "data_url": "https://securelist.com/luna-black-basta-ransomware/106950",
            "date": "2022-07-20",
            "organization": "Kaspersky",
            "author": "Marc Rivero L\u00f3pez",
            "title": "Luna and Black Basta \u2014 new ransomware for Windows, Linux and ESXi",
            "categories": [
                "Black Basta",
                "Conti"
            ]
        },
        {
            "data_url": "https://securelist.com/modern-ransomware-groups-ttps/106824/",
            "date": "2022-06-23",
            "organization": "Kaspersky",
            "author": "Nikita Nazarov",
            "title": "The hateful eight: Kaspersky\u2019s guide to modern ransomware groups\u2019 TTPs (Download Form)",
            "categories": [
                "BlackByte",
                "BlackCat",
                "Clop",
                "Conti",
                "Hive",
                "LockBit",
                "Mespinoza",
                "RagnarLocker"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2022/06/23093553/Common-TTPs-of-the-modern-ransomware_low-res.pdf",
            "date": "2022-06-23",
            "organization": "Kaspersky",
            "author": "Nikita Nazarov",
            "title": "The hateful eight: Kaspersky\u2019s guide to modern ransomware groups\u2019 TTPs",
            "categories": [
                "Conti",
                "Hive",
                "BlackByte",
                "BlackCat",
                "Clop",
                "LockBit",
                "Mespinoza",
                "Ragnarok"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/the-sound-of-malware.html",
            "date": "2022-06-23",
            "organization": "Trellix",
            "author": "Christiaan Beek",
            "title": "The Sound of Malware",
            "categories": [
                "Conti",
                "VHD Ransomware"
            ]
        },
        {
            "data_url": "https://attackiq.com/2022/06/15/attack-graph-emulating-the-conti-ransomware-teams-behaviors/",
            "date": "2022-06-15",
            "organization": "AttackIQ",
            "author": "Jackson Wells",
            "title": "Attack Graph Emulating the Conti Ransomware Team\u2019s Behaviors",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.threatstop.com/blog/first-conti-then-hive-costa-rica-gets-hit-with-ransomware-again",
            "date": "2022-06-15",
            "organization": "ThreatStop",
            "author": "Ofir Ashman",
            "title": "First Conti, then Hive: Costa Rica gets hit with ransomware again",
            "categories": [
                "Conti",
                "Hive",
                "Conti",
                "Hive"
            ]
        },
        {
            "data_url": "https://eclypsium.com/2022/06/02/conti-targets-critical-firmware/",
            "date": "2022-06-02",
            "organization": "Eclypsium",
            "author": "Eclypsium",
            "title": "Conti Targets Critical Firmware",
            "categories": [
                "Conti",
                "HermeticWiper",
                "TrickBot",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://thehackernews.com/2022/05/malware-analysis-trickbot.html",
            "date": "2022-05-24",
            "organization": "The Hacker News",
            "author": "Florian Goutin",
            "title": "Malware Analysis: Trickbot",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/pdf/datasheet-ransomware-in-Q1-2022.pdf",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "LockBit, Conti, and BlackCat Lead Pack  Amid Rise in Active RaaS and Extortion Groups: Ransomware in Q1 2022 (PDF)",
            "categories": [
                "BlackCat",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-by-the-numbers/lockbit-conti-and-blackcat-lead-pack-amid-rise-in-active-raas-and-extortion-groups-ransomware-in-q1-2022",
            "date": "2022-05-23",
            "organization": "Trend Micro",
            "author": "Matsugaya Shingo",
            "title": "LockBit, Conti, and BlackCat Lead Pack Amid Rise in Active RaaS and Extortion Groups: Ransomware in Q1 2022",
            "categories": [
                "BlackCat",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/discontinued-the-end-of-conti-s-brand-marks-new-chapter-for-cybercrime-landscape",
            "date": "2022-05-20",
            "organization": "AdvIntel",
            "author": "Yelisey Boguslavskiy",
            "title": "DisCONTInued: The End of Conti\u2019s Brand Marks New Chapter For Cybercrime Landscape",
            "categories": [
                "AvosLocker",
                "Black Basta",
                "BlackByte",
                "BlackCat",
                "Conti",
                "HelloKitty",
                "Hive"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/WizardSpider_TLPWHITE_v.1.4.pdf",
            "date": "2022-05-18",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "Wizard Spider In-Depth Analysis",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/hydra-with-three-heads-blackbyte-the-future-of-ransomware-subsidiary-groups",
            "date": "2022-05-17",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Hydra with Three Heads: BlackByte & The Future of Ransomware Subsidiary Groups",
            "categories": [
                "BlackByte",
                "Conti"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/malware-before-ransomware-trojan-information-stealer-cobalt-strike",
            "date": "2022-05-12",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "What malware to look for if you want to prevent a ransomware attack",
            "categories": [
                "Conti",
                "BumbleBee",
                "Cobalt Strike",
                "IcedID",
                "Sliver"
            ]
        },
        {
            "data_url": "https://securelist.com/new-ransomware-trends-in-2022/106457/",
            "date": "2022-05-11",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "New ransomware trends in 2022",
            "categories": [
                "BlackCat",
                "Conti",
                "DEADBOLT",
                "DoubleZero",
                "LockBit",
                "PartyTicket",
                "StealBit"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=cYx7sQRbjGA",
            "date": "2022-05-05",
            "organization": "YouTube (The Vertex Project)",
            "author": "Ryan Hallbeck",
            "title": "Contileaks: Identifying, Extracting, & Modeling Bitcoin Addresses",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/787/original/ransomware-chats.pdf?1651576098",
            "date": "2022-05-03",
            "organization": "Cisco",
            "author": "Kendall McKay",
            "title": "Conti and Hive ransomware operations: Leveraging victim chats for insights",
            "categories": [
                "Conti",
                "Hive"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/05/conti-and-hive-ransomware-operations.html",
            "date": "2022-05-03",
            "organization": "Talos Intelligence",
            "author": "JON MUNSHAW",
            "title": "Conti and Hive ransomware operations: What we learned from these groups' victim chats",
            "categories": [
                "Conti",
                "Hive"
            ]
        },
        {
            "data_url": "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/787/original/ransomware-chats.pdf",
            "date": "2022-05-02",
            "organization": "Cisco Talos",
            "author": "Kendall McKay",
            "title": "Conti and Hive  ransomware operations: Leveraging victim chats for insights",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "Hive"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/04/29/adventures-in-the-land-of-bumblebee-a-new-malicious-loader/",
            "date": "2022-04-29",
            "organization": "NCC Group",
            "author": "Mike Stokkel",
            "title": "Adventures in the land of BumbleBee \u2013 a new malicious loader",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-annex-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect (Annex)",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "PlugX",
                "RokRAT",
                "Inception Framework",
                "Red Menshen"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker",
            "date": "2022-04-28",
            "organization": "Symantec",
            "author": "Karthikeyan C Kasiviswanathan",
            "title": "Ransomware: How Attackers are Breaching Corporate Networks",
            "categories": [
                "AvosLocker",
                "Conti",
                "Emotet",
                "Hive",
                "IcedID",
                "PhotoLoader",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-emotet-ransomware-conti-leaks",
            "date": "2022-04-26",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Conti and Emotet: A constantly destructive duo",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "Emotet",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/gold-ulrick-continues-conti-operations-despite-public-disclosures",
            "date": "2022-04-21",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "GOLD ULRICK Continues Conti Operations Despite Public Disclosures",
            "categories": [
                "Conti",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/microsoft-exchange-servers-hacked-to-deploy-hive-ransomware/",
            "date": "2022-04-20",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Microsoft Exchange servers hacked to deploy Hive ransomware",
            "categories": [
                "Babuk",
                "BlackByte",
                "Conti",
                "Hive",
                "LockFile"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-group-targets-esxi-hypervisors-with-its-linux-variant.html",
            "date": "2022-04-18",
            "organization": "Trellix",
            "author": "Marc Elias",
            "title": "Conti Group Targets ESXi Hypervisors With its Linux Variant",
            "categories": [
                "Conti",
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/04/lessons-from-conti-leaks.html",
            "date": "2022-04-17",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Lessons from the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Emotet",
                "IcedID",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/karakurt-revealed-as-data-extortion-arm-of-conti-cybercrime-syndicate/",
            "date": "2022-04-15",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Karakurt revealed as data extortion arm of Conti cybercrime syndicate",
            "categories": [
                "Anchor",
                "BazarBackdoor",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://arcticwolf.com/resources/blog/karakurt-web",
            "date": "2022-04-15",
            "organization": "Arctic Wolf",
            "author": "Arctic Wolf",
            "title": "The Karakurt Web: Threat Intel and Blockchain Analysis Reveals Extension of Conti Business Model",
            "categories": [
                "Conti",
                "Diavol",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.connectwise.com/resources/conti-profile",
            "date": "2022-04-12",
            "organization": "ConnectWise",
            "author": "ConnectWise CRU",
            "title": "Threat Profile: Conti",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/investigation/2022/04/11/malw-inv-conti-2.html",
            "date": "2022-04-11",
            "organization": "",
            "author": "cocomelonc",
            "title": "Conti ransomware source code investigation - part 2",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hackers-use-contis-leaked-ransomware-to-attack-russian-companies/",
            "date": "2022-04-09",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Hackers use Conti's leaked ransomware to attack Russian companies",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.reversinglabs.com/blog/conversinglabs-ep-2-conti-pivots-as-ransomware-as-a-service-struggles",
            "date": "2022-04-08",
            "organization": "ReversingLabs",
            "author": "Paul Roberts",
            "title": "ConversingLabs Ep. 2: Conti pivots as ransomware as a service struggles",
            "categories": [
                "Conti",
                "Emotet",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.trmlabs.com/post/analysis-corroborates-suspected-ties-between-conti-and-ryuk-ransomware-groups-and-wizard-spider",
            "date": "2022-04-06",
            "organization": "TRM Labs",
            "author": "TRM Labs",
            "title": "TRM Analysis Corroborates Suspected Ties Between Conti and Ryuk Ransomware Groups and Wizard Spider",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2022/04/04/stolen-images-campaign-ends-in-conti-ransomware/",
            "date": "2022-04-04",
            "organization": "The DFIR Report",
            "author": "@0xtornado",
            "title": "Stolen Images Campaign Ends in Conti Ransomware",
            "categories": [
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/tutorial/2022/04/02/malware-injection-18.html",
            "date": "2022-04-02",
            "organization": "Github (cocomelonc)",
            "author": "cocomelonc",
            "title": "Malware development tricks. Find kernel32.dll base: asm style. C++ example.",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-leaks-examining-the-panama-papers-of-ransomware.html",
            "date": "2022-03-31",
            "organization": "Trellix",
            "author": "John Fokker",
            "title": "Conti Leaks: Examining the Panama Papers of Ransomware",
            "categories": [
                "LockBit",
                "Amadey",
                "Buer",
                "Conti",
                "IcedID",
                "LockBit",
                "Mailto",
                "Maze",
                "PhotoLoader",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/03/31/conti-nuation-methods-and-techniques-observed-in-operations-post-the-leaks/",
            "date": "2022-03-31",
            "organization": "nccgroup",
            "author": "Nikolaos Pantazopoulos",
            "title": "Conti-nuation: methods and techniques observed in operations post the leaks",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "QakBot"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/investigation/2022/03/27/malw-inv-conti-1.html",
            "date": "2022-03-27",
            "organization": "",
            "author": "cocomelonc",
            "title": "Conti ransomware source code investigation - part 1",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/conti-ransomware-attacks-persist-updated-version-despite-leaks",
            "date": "2022-03-25",
            "organization": "Zscaler",
            "author": "Brett Stone-Gross",
            "title": "Conti Ransomware Attacks Persist With an Updated Version Despite Leaks",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/gone-in-52-seconds-and-42-minutes-a-comparative-analysis-of-ransomware-encryption-speed.html",
            "date": "2022-03-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "Gone in 52 Seconds\u2026and 42 Minutes: A Comparative Analysis of Ransomware Encryption Speed",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/gold-ulrick-leaks-reveal-organizational-structure-and-relationships",
            "date": "2022-03-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "GOLD ULRICK Leaks Reveal Organizational Structure and Relationships",
            "categories": [
                "Conti",
                "Emotet",
                "IcedID",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://content.secureworks.com/-/media/Files/US/Reports/Monthly%20Threat%20Intelligence/Secureworks_ECO1_ThreatIntelligenceExecutiveReport2022Vol2.ashx",
            "date": "2022-03-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Threat Intelligence Executive Report Volume 2022, Number 2",
            "categories": [
                "Conti",
                "Emotet",
                "IcedID",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-leaks-cybercrime-fire-team",
            "date": "2022-03-23",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Conti puts the \u2018organized\u2019 in organized crime",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.threatstop.com/blog/conti-ransomware-source-code-leaked",
            "date": "2022-03-22",
            "organization": "ThreatStop",
            "author": "Ofir Ashman",
            "title": "Conti ransomware leaks - what happens when hackers support Russia",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/conti-affiliate-exposed-new-domain-names-ip-addresses-and-email-addresses-uncovered-by-esentire",
            "date": "2022-03-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Conti Affiliate Exposed: New Domain Names, IP Addresses and Email Addresses Uncovered",
            "categories": [
                "HelloKitty",
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "FiveHands",
                "HelloKitty",
                "IcedID"
            ]
        },
        {
            "data_url": "https://threatpost.com/conti-ransomware-v-3-including-decryptor-leaked/179006/",
            "date": "2022-03-21",
            "organization": "Threat Post",
            "author": "Lisa Vaas",
            "title": "Conti Ransomware V. 3, Including Decryptor, Leaked",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/analysis-of-leaked-conti-intrusion-procedures-by-esentires-threat-response-unit-tru",
            "date": "2022-03-18",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Analysis of Leaked Conti Intrusion Procedures by eSentire\u2019s Threat Response Unit (TRU)",
            "categories": [
                "Conti",
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/03/17/the-ransomware-threat-intelligence-center/",
            "date": "2022-03-17",
            "organization": "Sophos",
            "author": "Tilly Travers",
            "title": "The Ransomware Threat Intelligence Center",
            "categories": [
                "ATOMSILO",
                "Avaddon",
                "AvosLocker",
                "BlackKingdom Ransomware",
                "BlackMatter",
                "Conti",
                "Cring",
                "DarkSide",
                "dearcry",
                "Dharma",
                "Egregor",
                "Entropy",
                "Epsilon Red",
                "Gandcrab",
                "Karma",
                "LockBit",
                "LockFile",
                "Mailto",
                "Maze",
                "Nefilim",
                "RagnarLocker",
                "Ragnarok",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "Snatch",
                "WannaCryptor",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/exposing-initial-access-broker-ties-conti/",
            "date": "2022-03-17",
            "organization": "Google",
            "author": "Vladislav Stolyarov",
            "title": "Exposing initial access broker with ties to Conti",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/exposing-initial-access-broker-ties-conti",
            "date": "2022-03-17",
            "organization": "Google",
            "author": "Vladislav Stolyarov",
            "title": "Exposing initial access broker with ties to Conti",
            "categories": [
                "BazarBackdoor",
                "BumbleBee",
                "Conti",
                "EXOTIC LILY"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/suspected-conti-ransomware-activity-in-the-auto-manufacturing-sector/",
            "date": "2022-03-16",
            "organization": "Dragos",
            "author": "Josh Hanrahan",
            "title": "Suspected Conti Ransomware Activity in the Auto Manufacturing Sector",
            "categories": [
                "Conti",
                "Emotet"
            ]
        },
        {
            "data_url": "https://www.symantec.broadcom.com/hubfs/SED/SED_Threat_Hunter_Reports_Alerts/SED_FY22Q2_SES_Ransomware-Threat-Landscape_WP.pdf",
            "date": "2022-03-16",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "The Ransomware Threat Landscape: What to Expect in 2022",
            "categories": [
                "AvosLocker",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Emotet",
                "Hive",
                "Karma",
                "Mespinoza",
                "Nemty",
                "Squirrelwaffle",
                "VegaLocker",
                "WastedLocker",
                "Yanluowang",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://www.prevailion.com/what-wicked-webs-we-unweave/",
            "date": "2022-03-15",
            "organization": "Prevailion",
            "author": "Matt Stafford",
            "title": "What Wicked Webs We Un-weave",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2022/leaks-of-conti-ransomware-group-paint-picture-of-a-surprisingly-normal-tech-start-up-sort-of/",
            "date": "2022-03-10",
            "organization": "",
            "author": "Check Point Research",
            "title": "Leaks of Conti Ransomware Group Paint Picture of a Surprisingly Normal Tech Start-Up\u2026 Sort Of",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/cisa-updates-conti-ransomware-alert-with-nearly-100-domain-names/",
            "date": "2022-03-09",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "CISA updates Conti ransomware alert with nearly 100 domain names",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://yoroi.company/research/conti-ransomware-source-code-a-well-designed-cots-ransomware/",
            "date": "2022-03-08",
            "organization": "Yoroi",
            "author": "Luigi Martire",
            "title": "Conti Ransomware source code: a well-designed COTS ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.mbsd.jp/2022/03/08/assets/images/MBSD_Summary_of_ContiLeaks_Rev3.pdf",
            "date": "2022-03-08",
            "organization": "MBSD",
            "author": "MBSD",
            "title": "ContiLeaks",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://therecord.media/conti-leaks-the-panama-papers-of-ransomware/",
            "date": "2022-03-08",
            "organization": "The Record",
            "author": "Dina Temple-Raston",
            "title": "Inside Conti leaks: The Panama Papers of ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://github.com/whichbuffer/Conti-Ransomware-IOC",
            "date": "2022-03-08",
            "organization": "Github (whichbuffer)",
            "author": "Arda B\u00fcy\u00fckkaya",
            "title": "Conti-Ransomware-IOC",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.cyberscoop.com/ransomware-gang-conti-bounced-back/",
            "date": "2022-03-07",
            "organization": "CyberScoop",
            "author": "Suzanne Smalley",
            "title": "Ransomware gang Conti has already bounced back from damage caused by chat leaks, experts say",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/22/c/cyberattacks-are-prominent-in-the-russia-ukraine-conflict/IOC%20Resource%20for%20Russia-Ukraine%20Conflict-Related%20Cyberattacks-03032022.pdf",
            "date": "2022-03-03",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "IOC Resource for Russia-Ukraine  Conflict-Related Cyberattacks",
            "categories": [
                "ClipBanker",
                "Conti",
                "HermeticWiper",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/22/c/cyberattacks-are-prominent-in-the-russia-ukraine-conflict.html",
            "date": "2022-03-03",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Cyberattacks are Prominent in the Russia-Ukraine Conflict",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "Emotet",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://cluster25.io/2022/03/02/contis-source-code-deep-dive-into/",
            "date": "2022-03-02",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "Conti's Source Code: Deep-Dive Into",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.eldiario.es/tecnologia/capos-cibercrimen-avisan-contratacaran-si-hackea-rusia_1_8795458.html",
            "date": "2022-03-02",
            "organization": "elDiario",
            "author": "Carlos del Castillo",
            "title": "Cybercrime bosses warn that they will \"fight back\" if Russia is hacked",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=uORuVVQzZ0A",
            "date": "2022-03-02",
            "organization": "Youtube (OALabs)",
            "author": "Sergei Frankoff",
            "title": "Botleggers Exposed - Analysis of The Conti Leaks Malware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://threatpost.com/conti-ransomware-decryptor-trickbot-source-code-leaked/178727/",
            "date": "2022-03-02",
            "organization": "Threatpost",
            "author": "Lisa Vaas",
            "title": "Conti Ransomware Decryptor, TrickBot Source Code Leaked",
            "categories": [
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.cyberark.com/resources/threat-research-blog/conti-group-leaked",
            "date": "2022-03-02",
            "organization": "CyberArk",
            "author": "CyberArk Labs",
            "title": "Conti Group Leaked!",
            "categories": [
                "TeamTNT",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2022/03/conti-ransomware-group-diaries-part-ii-the-office/",
            "date": "2022-03-02",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Conti Ransomware Group Diaries, Part II: The Office",
            "categories": [
                "Conti",
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://arcticwolf.com/resources/blog/conti-ransomware-leak-analyzed",
            "date": "2022-03",
            "organization": "Arctic Wolf",
            "author": "Arctic Wolf",
            "title": "Conti Ransomware: An Analysis of Key Findings",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/conti-ransomware-source-code-leaked-by-ukrainian-researcher/",
            "date": "2022-03-01",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Conti Ransomware source code leaked by Ukrainian researcher",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://twitter.com/TheDFIRReport/status/1498642512935800833",
            "date": "2022-03-01",
            "organization": "Twitter (@TheDFIRReport)",
            "author": "The DFIR Report",
            "title": "Twitter thread with highlights from conti leaks",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://share.vx-underground.org/Conti/",
            "date": "2022-03-01",
            "organization": "",
            "author": "VX-Underground",
            "title": "Leaks: Conti / Trickbot",
            "categories": [
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://medium.com/@whickey000/how-i-cracked-conti-ransomware-groups-leaked-source-code-zip-file-e15d54663a8",
            "date": "2022-03-01",
            "organization": "Medium whickey000",
            "author": "Wade Hickey",
            "title": "How I Cracked CONTI Ransomware Group\u2019s Leaked Source Code ZIP File",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/02/28/conti-and-karma-actors-attack-healthcare-provider-at-same-time-through-proxyshell-exploits/?cmp=30728",
            "date": "2022-02-28",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "Conti and Karma actors attack healthcare provider at same time through ProxyShell exploits",
            "categories": [
                "Conti",
                "Karma"
            ]
        },
        {
            "data_url": "https://github.com/TheParmak/conti-leaks-englished",
            "date": "2022-02-28",
            "organization": "Github (TheParmak)",
            "author": "TheParmak",
            "title": "conti-leaks-englished",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://medium.com/@arnozobec/analyzing-conti-leaks-without-speaking-russian-only-methodology-f5aecc594d1b",
            "date": "2022-02-28",
            "organization": "Medium arnozobec",
            "author": "Arnaud Zobec",
            "title": "Analyzing conti-leaks without speaking russian \u2014 only methodology",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/conti-ransomwares-internal-chats-leaked-after-siding-with-russia/",
            "date": "2022-02-27",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Conti ransomware's internal chats leaked after siding with Russia",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://therecord.media/conti-ransomware-gang-chats-leaked-by-pro-ukraine-member/",
            "date": "2022-02-27",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Conti ransomware gang chats leaked by pro-Ukraine member",
            "categories": [
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.redhotcyber.com/post/il-ransomware-conti-si-schiera-a-favore-della-russia",
            "date": "2022-02-25",
            "organization": "Red Hot Cyber",
            "author": "Red Hot Cyber",
            "title": "Il ransomware Conti si schiera a favore della Russia.",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/pdfs/resources/whitepaper/an-empirically-comparative-analysis-of-ransomware-binaries.pdf",
            "date": "2022-02-23",
            "organization": "splunk",
            "author": "Shannon Davis",
            "title": "An Empirically Comparative Analysis of Ransomware Binaries",
            "categories": [
                "Avaddon",
                "Babuk",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "LockBit",
                "Maze",
                "Mespinoza",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/24-hours-from-log4shell-to-local-admin-deep-dive-into-conti-gang-attack-on-fortune-500-dfir",
            "date": "2022-02-23",
            "organization": "AdvIntel",
            "author": "Vitali Kremez",
            "title": "24 Hours From Log4Shell to Local Admin: Deep-Dive Into Conti Gang Attack on Fortune 500 (DFIR)",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2022/02/22/cyberthreats-during-russian-ukrainian-tensions-what-can-we-learn-from-history-to-be-prepared/",
            "date": "2022-02-22",
            "organization": "Sophos",
            "author": "Chester Wisniewski",
            "title": "Cyberthreats during Russian-Ukrainian tensions: what can we learn from history to be prepared?",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bankinfosecurity.com/cybercrime-moves-conti-ransomware-absorbs-trickbot-malware-a-18573",
            "date": "2022-02-22",
            "organization": "Bankinfo Security",
            "author": "Matthew J. Schwartz",
            "title": "Cybercrime Moves: Conti Ransomware Absorbs TrickBot Malware",
            "categories": [
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://securityaffairs.co/wordpress/128190/cyber-crime/conti-ransomware-takes-over-trickbot.html",
            "date": "2022-02-20",
            "organization": "Security Affairs",
            "author": "Pierluigi Paganini",
            "title": "The Conti ransomware group takes over TrickBot malware operation and plans to replace it with BazarBackdoor malware.",
            "categories": [
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/conti-ransomware-gang-takes-over-trickbot-malware-operation/",
            "date": "2022-02-18",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Conti ransomware gang takes over TrickBot malware operation",
            "categories": [
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://cyware.com/news/ransomware-becomes-deadlier-conti-makes-the-most-money-39e17bae/",
            "date": "2022-02-14",
            "organization": "",
            "author": "Cyware",
            "title": "Ransomware Becomes Deadlier, Conti Makes the Most Money",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/dragos-ics-ot-ransomware-analysis-q4-2021/",
            "date": "2022-02-09",
            "organization": "Dragos",
            "author": "Anna Skelton",
            "title": "Dragos ICS/OT Ransomware Analysis: Q4 2021",
            "categories": [
                "LockBit",
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hhs-conti-ransomware-encrypted-80-percent-of-irelands-hse-it-systems/",
            "date": "2022-02-04",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "HHS: Conti ransomware encrypted 80% of Ireland's HSE IT systems",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.coveware.com/blog/2022/1/26/ransomware-as-a-service-innovation-curve",
            "date": "2022-01-27",
            "organization": "",
            "author": "CoveWare",
            "title": "Ransomware as a Service Innovation Curve",
            "categories": [
                "Conti",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/taiwanese-apple-and-tesla-contractor-hit-by-conti-ransomware/",
            "date": "2022-01-27",
            "organization": "BleepingComputer",
            "author": "Sergiu Gatlan",
            "title": "Taiwanese Apple and Tesla contractor hit by Conti ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://medium.com/cycraft/the-road-to-ransomware-resilience-c1ca37036efd",
            "date": "2022-01-24",
            "organization": "CyCraft",
            "author": "CyCraft AI",
            "title": "The Road to Ransomware Resilience, Part 2: Behavior Analysis",
            "categories": [
                "Conti",
                "Prometheus",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://damonmccoy.com/papers/Ransomware_eCrime22.pdf",
            "date": "2022",
            "organization": "Symposium on Electronic Crime Research",
            "author": "Ian W. Gray",
            "title": "Money Over Morals: A Business Analysis of Conti Ransomware",
            "categories": [
                "Conti",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.silentpush.com/blog/consequences-the-conti-leaks-and-future-problems",
            "date": "2022",
            "organization": "Silent Push",
            "author": "Silent Push",
            "title": "Consequences- The Conti Leaks and future problems",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/log4j-vulnerabilities-attacks",
            "date": "2021-12-23",
            "organization": "Symantec",
            "author": "Siddhesh Chandrayan",
            "title": "Log4j Vulnerabilities: Attack Insights",
            "categories": [
                "Tsunami",
                "Conti",
                "Dridex",
                "Khonsari",
                "Orcus RAT",
                "TellYouThePass"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/ransomware-advisory-log4shell-exploitation-for-initial-access-lateral-movement",
            "date": "2021-12-17",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Ransomware Advisory: Log4Shell Exploitation for Initial Access & Lateral Movement",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/12/13/diavol-ransomware/",
            "date": "2021-12-13",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Diavol Ransomware",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.darktrace.com/en/blog/the-double-extortion-business-conti-ransomware-gang-finds-new-avenues-of-negotiation/",
            "date": "2021-12-08",
            "organization": "Darktrace",
            "author": "Justin Fier",
            "title": "The double extortion business: Conti Ransomware Gang finds new avenues of negotiation",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.hse.ie/eng/services/publications/conti-cyber-attack-on-the-hse-full-report.pdf",
            "date": "2021-12-03",
            "organization": "HSE",
            "author": "HSE",
            "title": "Conti cyber attack on the HSE",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-conti",
            "date": "2021-12-01",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Ransomware Spotlight: Conti",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/",
            "date": "2021-11-29",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "CONTInuing the Bazar Ransomware Story",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/intelligence-insights-november-2021/",
            "date": "2021-11-18",
            "organization": "Red Canary",
            "author": "The Red Canary Team",
            "title": "Intelligence Insights: November 2021",
            "categories": [
                "Andromeda",
                "Conti",
                "LockBit",
                "QakBot",
                "Squirrelwaffle"
            ]
        },
        {
            "data_url": "https://blog.qualys.com/vulnerabilities-threat-research/2021/11/18/conti-ransomware",
            "date": "2021-11-18",
            "organization": "Qualys",
            "author": "Ghanshyam More",
            "title": "Conti Ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/Conti_TLPWHITE_v1.6_WVcSEtc.pdf",
            "date": "2021-11-18",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "Conti Ransomware Group In-Depth Analysis",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.elliptic.co/blog/conti-ransomware-nets-at-least-25.5-million-in-four-months",
            "date": "2021-11-18",
            "organization": "Elliptic",
            "author": "Elliptic Intel",
            "title": "Conti Ransomware Nets at Least $25.5 Million in Four Months",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/ransomware-graphic-blog",
            "date": "2021-11-16",
            "organization": "IronNet",
            "author": "IronNet Threat Research",
            "title": "How IronNet's Behavioral Analytics Detect REvil and Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "IcedID",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.truesec.com/hub/blog/proxyshell-qbot-and-conti-ransomware-combined-in-a-series-of-cyber-attacks",
            "date": "2021-11-15",
            "organization": "TRUESEC",
            "author": "Fabio Viggiani",
            "title": "ProxyShell, QBot, and Conti Ransomware Combined in a Series of Cyberattacks",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "QakBot"
            ]
        },
        {
            "data_url": "https://cybersecurity.att.com/blogs/security-essentials/stories-from-the-soc-powershell-proxyshell-conti-ttps-oh-my",
            "date": "2021-11-10",
            "organization": "AT&T",
            "author": "Josh Gomez",
            "title": "Stories from the SOC - Powershell, Proxyshell, Conti TTPs OH MY!",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-from-shatak-emails-to-the-conti-ransomware",
            "date": "2021-11-09",
            "organization": "Cybereason",
            "author": "Aleksandar Milenkoski",
            "title": "THREAT ANALYSIS REPORT: From Shatak Emails to the Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/11/07/conti-ransomware-cheat-sheet/",
            "date": "2021-11-07",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "CONTI Ransomware: Cheat Sheet",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-2",
            "date": "2021-11-02",
            "organization": "unh4ck",
            "author": "Cyb3rSn0rlax",
            "title": "Detecting CONTI CobaltStrike Lateral Movement Techniques - Part 2",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/shipping-companies-ransomware-credentials",
            "date": "2021-11-02",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Cybercrime underground flush with shipping companies\u2019 credentials",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-1",
            "date": "2021-10-26",
            "organization": "unh4ck",
            "author": "Hamza OUADIA",
            "title": "Detecting CONTI CobaltStrike Lateral Movement Techniques - Part 1",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/10/conti-ransom-gang-starts-selling-access-to-victims/",
            "date": "2021-10-25",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Conti Ransom Gang Starts Selling Access to Victims",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.huntandhackett.com/blog/advanced-ip-scanner-the-preferred-scanner-in-the-apt-toolbox",
            "date": "2021-10-22",
            "organization": "HUNT & HACKETT",
            "author": "Krijn de Mik",
            "title": "Advanced IP Scanner: the preferred scanner in the A(P)T toolbox",
            "categories": [
                "Conti",
                "DarkSide",
                "Dharma",
                "Egregor",
                "Hades",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-as-a-service-enabler-of-widespread-attacks",
            "date": "2021-10-05",
            "organization": "Trend Micro",
            "author": "Fyodor Yarochkin",
            "title": "Ransomware as a Service: Enabler of Widespread Attacks",
            "categories": [
                "Cerber",
                "Conti",
                "DarkSide",
                "Gandcrab",
                "Locky",
                "Nefilim",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/10/04/bazarloader-and-the-conti-leaks/",
            "date": "2021-10-04",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarLoader and the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/backup-removal-solutions-from-conti-ransomware-with-love",
            "date": "2021-09-29",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Backup \u201cRemoval\u201d Solutions - From Conti Ransomware With Love",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-265a",
            "date": "2021-09-22",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA21-265A) Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-big-game-hunting-ttps-shifted-after-darkside-pipeline-attack/",
            "date": "2021-09-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Big Game Hunting TTPs Continue to Shift After DarkSide Pipeline Attack",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "BlackMatter",
                "Clop",
                "Conti",
                "CryptoLocker",
                "DarkSide",
                "DoppelPaymer",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/09/13/bazarloader-to-conti-ransomware-in-32-hours/",
            "date": "2021-09-13",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarLoader to Conti Ransomware in 32 Hours",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/09/03/conti-affiliates-use-proxyshell-exchange-exploit-in-ransomware-attacks/",
            "date": "2021-09-03",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "Conti affiliates use ProxyShell Exchange exploit in ransomware attacks",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/09/Conti-leak-translation.html",
            "date": "2021-09-02",
            "organization": "Talos",
            "author": "Caitlin Huey",
            "title": "Translated: Talos' insights from the recently leaked Conti ransomware playbook",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.sekoia.io/en/an-insider-insights-into-conti-operations-part-two/",
            "date": "2021-08-19",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "An insider insights into Conti operations \u2013 Part two",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/hunting-for-corporate-insurance-policies-indicators-of-ransom-exfiltrations",
            "date": "2021-08-17",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Hunting for Corporate Insurance Policies: Indicators of [Ransom] Exfiltration",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.sekoia.io/en/an-insider-insights-into-conti-operations-part-one",
            "date": "2021-08-17",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "An insider insights into Conti operations \u2013 Part one",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.advanced-intel.com/post/secret-backdoor-behind-conti-ransomware-operation-introducing-atera-agent",
            "date": "2021-08-11",
            "organization": "Advanced Intelligence",
            "author": "Vitali Kremez",
            "title": "Secret \"Backdoor\" Behind Conti Ransomware Operation: Introducing Atera Agent",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=hmaWy9QIC7c",
            "date": "2021-08-10",
            "organization": "Youtube (OALabs)",
            "author": "OALabs",
            "title": "Leaked Conti Ransomware Playbook - Red Team Reacts",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://lifars.com/wp-content/uploads/2021/10/ContiRansomware_Whitepaper.pdf",
            "date": "2021-08-10",
            "organization": "LIFARS",
            "author": "Vlad Pasca",
            "title": "A Detailed Analysis of The Last  Version of Conti Ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://threatpost.com/affiliate-leaks-conti-ransomware-playbook/168442/",
            "date": "2021-08-06",
            "organization": "Threat Post",
            "author": "Elizabeth Montalbano",
            "title": "Angry Affiliate Leaks Conti Ransomware Gang Playbook",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://nakedsecurity.sophos.com/2021/08/06/conti-ransomware-affiliate-goes-rogue-leaks-company-data/",
            "date": "2021-08-06",
            "organization": "Sophos Naked Security",
            "author": "Paul Ducklin",
            "title": "Conti ransomware affiliate goes rogue, leaks \u201cgang data\u201d",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://therecord.media/disgruntled-ransomware-affiliate-leaks-the-conti-gangs-technical-manuals/",
            "date": "2021-08-05",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Disgruntled ransomware affiliate leaks the Conti gang\u2019s technical manuals",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://twitter.com/AltShiftPrtScn/status/1423188974298861571",
            "date": "2021-08-05",
            "organization": "Twitter (@AltShiftPrtScn)",
            "author": "Peter Mackenzie",
            "title": "Tweet on Conti ransomware affiliates using AnyDesk, Atera, Splashtop, Remote Utilities and ScreenConnect to maintain network access",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/angry-conti-ransomware-affiliate-leaks-gangs-attack-playbook/",
            "date": "2021-08-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Angry Conti ransomware affiliate leaks gang's attack playbook",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2021/08/ransomware-gangs-and-the-name-game-distraction/",
            "date": "2021-08-05",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Gangs and the Name Game Distraction",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Babuk",
                "Cerber",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "FriedEx",
                "Gandcrab",
                "Hermes",
                "Maze",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/08/01/bazarcall-to-conti-ransomware-via-trickbot-and-cobalt-strike/",
            "date": "2021-08-01",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "BazarCall to Conti Ransomware via Trickbot and Cobalt Strike",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://twitter.com/AltShiftPrtScn/status/1417849181012647938",
            "date": "2021-07-21",
            "organization": "Twitter (@AltShiftPrtScn)",
            "author": "Peter Mackenzie",
            "title": "Tweet on Conti ransomware actor installing AnyDesk for remote access in victim environment",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://assets.sentinelone.com/ransomware-enterprise/conti-ransomware-unpacked",
            "date": "2021-07-08",
            "organization": "SentinelOne",
            "author": "Idan Weizman",
            "title": "Conti Unpacked: Understanding Ransomware Development as a Response to Detection - A Detailed Technical Analysis",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/diavol-new-ransomware-used-by-wizard-spider",
            "date": "2021-07-01",
            "organization": "Fortinet",
            "author": "Dor Neemani",
            "title": "Diavol - A New Ransomware Used By Wizard Spider?",
            "categories": [
                "Conti",
                "Diavol"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/the-most-prolific-ransomware-families-a-defenders-guide",
            "date": "2021-07-01",
            "organization": "DomainTools",
            "author": "Chad Anderson",
            "title": "The Most Prolific Ransomware Families: A Defenders Guide",
            "categories": [
                "REvil",
                "Conti",
                "Egregor",
                "Maze",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.cynet.com/attack-techniques-hands-on/shelob-moonlight-spinning-a-larger-web/",
            "date": "2021-06-30",
            "organization": "Cynet",
            "author": "Max Malyutin",
            "title": "Shelob Moonlight \u2013 Spinning a Larger Web From IcedID to CONTI, a Trojan and Ransomware collaboration",
            "categories": [
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/conti-ransomware-gang/",
            "date": "2021-06-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Richard Hickman",
            "title": "Conti Ransomware Gang: An Overview",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-double-extortion-and-beyond-revil-clop-and-conti",
            "date": "2021-06-15",
            "organization": "Trend Micro",
            "author": "Janus Agcaoili",
            "title": "Ransomware Double Extortion and Beyond: REvil, Clop, and Conti",
            "categories": [
                "Clop",
                "Conti",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/how-to-defend-against-conti-darkside-revil-and-other-ransomware/",
            "date": "2021-06-02",
            "organization": "CrowdStrike",
            "author": "Josh Dalman",
            "title": "Under Attack: Protecting Against Conti, DarkSide, REvil and Other Ransomware",
            "categories": [
                "DarkSide",
                "Conti",
                "DarkSide",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2021/210521.pdf",
            "date": "2021-05-20",
            "organization": "FBI",
            "author": "FBI",
            "title": "Alert Number CP-000147-MW: Conti Ransomware Attacks Impact Healthcare and First Responder Networks",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.ie/pdfs/HSE_Conti_140521_UPDATE.pdf",
            "date": "2021-05-16",
            "organization": "NCSC Ireland",
            "author": "NCSC Ireland",
            "title": "Ransomware Attack on Health Sector - UPDATE 2021-05-16",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/05/12/conti-ransomware/",
            "date": "2021-05-12",
            "organization": "",
            "author": "The DFIR Report",
            "title": "Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/hunting-ransomware-inhibiting-system-backup-or-recovery/",
            "date": "2021-05-06",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "Ransomware: Hunting for Inhibiting System Backup or Recovery",
            "categories": [
                "Avaddon",
                "Conti",
                "DarkSide",
                "LockBit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nemty",
                "PwndLocker",
                "RagnarLocker",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Snatch",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://securityandtechnology.org/wp-content/uploads/2021/04/IST-Ransomware-Task-Force_Final_Report.pdf",
            "date": "2021-04-29",
            "organization": "The Institute for Security and Technology",
            "author": "The Institute for Security and Technology",
            "title": "Combating Ransomware A Comprehensive Framework for Action: Key Recommendations from the  Ransomware Task Force",
            "categories": [
                "Conti",
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.coveware.com/blog/ransomware-attack-vectors-shift-as-new-software-vulnerability-exploits-abound",
            "date": "2021-04-26",
            "organization": "CoveWare",
            "author": "CoveWare",
            "title": "Ransomware Attack Vectors Shift as New Software Vulnerability Exploits Abound",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "Egregor",
                "LockBit",
                "Mailto",
                "Phobos",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://vulnerability.ch/2021/04/ransomware-and-date-leak-site-publication-time-analysis/",
            "date": "2021-04-25",
            "organization": "Vulnerability.ch Blog",
            "author": "Corsin Camichel",
            "title": "Ransomware and Data Leak Site Publication Time Analysis",
            "categories": [
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mespinoza",
                "Nefilim",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.mbsd.jp/research/20210413/conti-ransomware/",
            "date": "2021-04-13",
            "organization": "MBSD",
            "author": "Takashi Yoshikawa",
            "title": "Unraveling the internal structure of the Conti Ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://analyst1.com/blog/ransom-mafia-analysis-of-the-worlds-first-ransomware-cartel",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia - Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "SunCrypt",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://analyst1.com/file-assets/RANSOM-MAFIA-ANALYSIS-OF-THE-WORLD%E2%80%99S-FIRST-RANSOMWARE-CARTEL.pdf",
            "date": "2021-04-07",
            "organization": "ANALYST1",
            "author": "Jon DiMaggio",
            "title": "Ransom Mafia Analysis of the World's First Ransomware Cartel",
            "categories": [
                "Conti",
                "Egregor",
                "LockBit",
                "Maze",
                "RagnarLocker",
                "Ryuk",
                "SunCrypt",
                "TA2101",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-006.pdf",
            "date": "2021-02-25",
            "organization": "ANSSI",
            "author": "CERT-FR",
            "title": "Ryuk Ransomware",
            "categories": [
                "BazarBackdoor",
                "Buer",
                "Conti",
                "Emotet",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/02/16/conti-ransomware-evasive-by-nature/",
            "date": "2021-02-16",
            "organization": "SophosLabs Uncut",
            "author": "Andrew Brandt",
            "title": "Conti ransomware: Evasive by nature",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/02/16/conti-ransomware-attack-day-by-day/",
            "date": "2021-02-16",
            "organization": "SophosLabs Uncut",
            "author": "Michael Heller",
            "title": "A Conti ransomware attack day-by-day",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/02/16/what-to-expect-when-youve-been-hit-with-conti-ransomware/",
            "date": "2021-02-16",
            "organization": "SophosLabs Uncut",
            "author": "Peter Mackenzie",
            "title": "What to expect when you\u2019ve been hit with Conti ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://cti-league.com/wp-content/uploads/2021/02/CTI-League-Darknet-Report-2021.pdf",
            "date": "2021-02-11",
            "organization": "CTI LEAGUE",
            "author": "CTI LEAGUE",
            "title": "CTIL Darknet Report \u2013 2021",
            "categories": [
                "Conti",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2021/02/Conti-Ransomware.pdf",
            "date": "2021-02-04",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "CONTI Modus Operandi and Bitcoin Tracking",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://twitter.com/AltShiftPrtScn/status/1350755169965924352",
            "date": "2021-01-17",
            "organization": "Twitter (@AltShiftPrtScn)",
            "author": "Peter Mackenzie",
            "title": "Tweet on Conti Ransomware group exploiting FortiGate VPNs to drop in CobaltStrike loaders",
            "categories": [
                "Cobalt Strike",
                "Conti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-conti-ransomware",
            "date": "2021-01-12",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "Cybereason vs. Conti Ransomware",
            "categories": [
                "BazarBackdoor",
                "Conti"
            ]
        },
        {
            "data_url": "http://chuongdong.com/reverse%20engineering/2020/12/15/ContiRansomware/",
            "date": "2020-12-15",
            "organization": "Chuongdong blog",
            "author": "Chuong Dong",
            "title": "Conti Ransomware v2",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://0xthreatintel.medium.com/reversing-conti-ransomware-bfce15019e74",
            "date": "2020-12-15",
            "organization": "Medium 0xthreatintel",
            "author": "0xthreatintel",
            "title": "Reversing Conti Ransomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://github.com/cdong1012/ContiUnpacker",
            "date": "2020-12-12",
            "organization": "Github (cdong1012)",
            "author": "Chuong Dong",
            "title": "ContiUnpacker: An automatic unpacker for Conti rasnomware",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/the-malware-that-usually-installs-ransomware-and-you-need-to-remove-right-away/",
            "date": "2020-11-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "The malware that usually installs ransomware and you need to remove right away",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "FriedEx",
                "MegaCortex",
                "Phorpiex",
                "PwndLocker",
                "QakBot",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://ke-la.com/zooming-into-darknet-threats-targeting-jp-orgs-kela/",
            "date": "2020-11-18",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "Zooming into Darknet Threats Targeting Japanese Organizations",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "LockBit",
                "Maze",
                "REvil",
                "Snake"
            ]
        },
        {
            "data_url": "https://public.intel471.com/blog/ransomware-as-a-service-2020-ryuk-maze-revil-egregor-doppelpaymer/",
            "date": "2020-11-16",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Ransomware-as-a-service: The pandemic within a pandemic",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Egregor",
                "Hakbit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-informationen-en/leakware-ransomware-hybrid-attacks/",
            "date": "2020-10-23",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "Leakware-Ransomware-Hybrid Attacks",
            "categories": [
                "Avaddon",
                "Clop",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nefilim",
                "RagnarLocker",
                "REvil",
                "Sekhmet",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/wizard-spider-adversary-update/",
            "date": "2020-10-16",
            "organization": "CrowdStrike",
            "author": "The Crowdstrike Intel Team",
            "title": "WIZARD SPIDER Update: Resilient, Reactive and Resolute",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://ke-la.com/to-attack-or-not-to-attack-targeting-the-healthcare-sector-in-the-underground-ecosystem/",
            "date": "2020-10-01",
            "organization": "KELA",
            "author": "Victoria Kivilevich",
            "title": "To Attack or Not to Attack: Targeting the Healthcare Sector in the Underground Ecosystem",
            "categories": [
                "Conti",
                "DoppelPaymer",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk",
                "SunCrypt"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/what-is-behind-ransomware-attacks-increase.html",
            "date": "2020-09-29",
            "organization": "PWC UK",
            "author": "Andy Auld",
            "title": "What's behind the increase in ransomware attacks this year?",
            "categories": [
                "DarkSide",
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Mailto",
                "PwndLocker",
                "QakBot",
                "REvil",
                "Ryuk",
                "SMAUG",
                "SunCrypt",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ryuk-successor-conti-ransomware-releases-data-leak-site/",
            "date": "2020-08-25",
            "organization": "BleepingComputer",
            "author": "Lawrence Abrams",
            "title": "Ryuk successor Conti Ransomware releases data leak site",
            "categories": [
                "Conti"
            ]
        },
        {
            "data_url": "https://areteir.com/wp-content/uploads/2020/08/Arete_Insight_Is-Conti-the-new-Ryuk_August2020.pdf",
            "date": "2020-08-18",
            "organization": "Arete",
            "author": "Arete Incident Response",
            "title": "Is Conti the New Ryuk?",
            "categories": [
                "Conti",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/blog/tau-threat-discovery-conti-ransomware/",
            "date": "2020-07-08",
            "organization": "VMWare Carbon Black",
            "author": "Brian Baskin",
            "title": "TAU Threat Discovery: Conti Ransomware",
            "categories": [
                "Conti"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "conti",
            "procedure_code": "s0575",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0575",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "conti can utilize command line options to allow an attacker control over how it scans and encrypts files.[89][59]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "conti has used api calls during execution.[60][61]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "conti has loaded an encrypted dll into memory and then executes it.[17][18]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "conti has decrypted its payload using a hardcoded aes-256 key.[61][62]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "conti can use compiler-based obfuscation for its code, encrypt dlls, and hide windows api calls.[86][87][48]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "conti has loaded an encrypted dll into memory and then executes it.[17][18]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "conti can discover files on a local system.[82]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "conti can enumerate remote open smb network shares using netshareenum().[23][24]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "conti can enumerate through all open processes to search for any that have the string \"sql\" in their process name.[65]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "conti has the ability to discover hosts on a target network.[29]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "conti can retrieve the arp cache from the local system by using the getipnettable() api call and check to ensure ip addresses it connects to are for local, non-internet, systems.[60]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "conti can enumerate routine network connections from a compromised host.[25]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "conti can spread via smb and encrypts files on different hosts, potentially compromising an entire network.[21][22]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1080",
                    "technique_link": "https://attack.mitre.org/techniques/T1080",
                    "technique_name": "taint shared content",
                    "technique_description": "adversaries may deliver payloads to remote systems by adding content to shared storage locations, such as network drives or internal code repositories. content stored on network drives or in other shared locations may be tainted by adding malicious programs, scripts, or exploit code to otherwise valid files. once a user opens the shared tainted content, the malicious portion can be executed to run the adversary's code on a remote system. adversaries may use tainted shared content to move laterally.",
                    "procedure_description": "conti can spread itself by infecting other remote machines via network shared drives.[3][4]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "conti can use createiocompletionport(), postqueuedcompletionstatus(), and getqueuedcompletionport() to rapidly encrypt files, excluding those with the extensions of .exe, .dll, and .lnk. it has used a different aes-256 encryption key per file with a bundled ras-4096 public encryption key that is unique for each victim. conti can use \"windows restart manager\" to ensure files are unlocked and open for encryption.[36][5][37][38][31]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "conti can delete windows volume shadow copies using vssadmin.[24]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "conti can stop up to 146 windows services related to security, backup, database, and email solutions through the use of net stop.[13]"
                }
            ]
        }
    ]
};