const rule = {
    "id": "f9aad950-665c-48bf-a248-60c9d07afa94",
    "info": {
        "name": "Rules Detect NetWire RC",
        "author": "Openhunting",
        "date": "2023-09-08",
        "modified": "2023-09-27 18:37:46",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for NetWire RC",
        "tags": [
            "exe",
            "NetWire RAT",
            "rar",
            "netwire",
            "7z",
            "RAT",
            "Netwire",
            "NetWire"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "3735ffbb521ae0c533a5fe4d131c2e6e77ae78b2647511720ad8231d9208d803",
                        "ebd7f2bb9706dffff5358b19a2fb5da55983ecde4593cca7ab8ab2e8a975b5a1",
                        "979006b7422b4d2be9876c85263dabfe9d15e52dbf63bdff41bff04be2475d01",
                        "7891edd6d1b03f2fed8df3b4986b1827a41881cae17af34207ab5d75d3be07e2",
                        "a163607a059886c8fb885f9054c9afa3103c25cca976ea7ac082e1baf02fcd7c",
                        "b9352f368336209b221d9384011f3b97ea34b7afd46e8fa659d890bab7c0b8b7",
                        "3952d20010784df9f80ca5f283a2784a23e301b64c76e8a05225a7421d905fbc",
                        "12c2a8b7bc3fe5a43d660f797addd8f4a983b87d7eedd2b2ea9eaf030646b613",
                        "fef6e3ff56be7768e4ca6b2e83b1c33a0f99cc653c3ced640f4eb22ffdd6f77f",
                        "71f9ec40a29963c0e4948e565b2832dbe8b879143b74b432c2087b700a982dae",
                        "05a7f02fe45033fa2138139a914e597423ff7711a8a62f01fb7730d88f7f4e4c",
                        "289b1b674ae1d8ebd1693294b8f14560195fa8948c61b21478fa75aaa3d76301",
                        "5a8d72946b1e08785bba3e067a64cdf3735b46834d4edf4d87d1916bd416a777",
                        "2abc20764b812903f81d1787f8c47165713582e587a8f099ddacfc041937410c",
                        "e3b59ad472a4da79d33cd1b994394f9d405befb76ba377d1763010ecfb4c2591",
                        "c27e08d73e49e9e599ef84d8987f8b4d8a56f9dad4eddca8aec71649a40c21b6",
                        "083a52f7af54aca64643c1740c7e0990a5125c74c740c6bd796b765eead025b2",
                        "1dcddce0408092a22c015e183e463020a7231e1f5ca47e71acad4ddcfb0f2385",
                        "ce5b104a52cfe00e98c71ef31561136a2b23b58cabb5f02cb2e87ff5ccfd63f7",
                        "8143a5d0347139eadfdd5d38ceaf661057603f9245c70116f31b85fb07de02aa",
                        "97c7b0acbb0d187d280e20cd3ac147295ea599462d57f0d56488cda19fcaf3ed",
                        "e4b66d8eccf8e0ec2f33afb880b23e1a5dc131028bf91a4c5cbbbd883331fa65",
                        "397df3c5087765d46561e7c1befc53bd0853488f4826a4f0b9c9a62b9c7ba8ad",
                        "ccf433b26530eba6adfbc5a390b77702e6418df136a26abe3ef7b5a83e1637bb",
                        "306b63ef6d498f120a2bf3ddee4be41b",
                        "c0b7f83f13c13ce352e0e103596e99eb3e52b7dcadb400e29886b4db2a01e23a",
                        "557b7d3dbc3f34338f5a6c1467f399abc0b3ef004d7378b7ff78f80d96fbc244",
                        "bb988ff7e440eb871321f3d5ee94c7d241d4929e57b0e687e3ee61466b6880f6",
                        "d49f390fd0923bd15ebb0c458f915f702ef46cf82f377e18dc78fc19d1887e3d",
                        "9de81c4b0f4d76ada494588b6250165091db9f1b7e1b9cc84a4f621aafa92362",
                        "59dfc2ac190104ed3eff9c2c77f80e9e6ca18f84e7c4845ac713a30a8668280e",
                        "faf52d09b9f2a833c0fa7093cb9dd25d820aa06de68747ff2499f653a982dab1",
                        "a593d1ebc5de942993a01e1407b8b51d0a45d4a9f9ec2a9c29ff122bfdf935fc",
                        "1a00092e00ec3902038b0ead2b083c686503b33d0bdaa50e669dcf03763143fa",
                        "f47ab0c01091ea0f16b6d7f53c3faa30da6d36fe88eed46c36a23f52d797eddd",
                        "9613191364e6272274f5bac8196925658187800040ba64195d4e170154f0f24a",
                        "9d91b71402c15be478a70ca9c82cfc1192f379564b329e952909b26ef9033974",
                        "f1079cf4bfcc93d98a75ee56bac5fc02f9e8bbb2bf255f7c3d0b25504c539e40",
                        "d79ea371b04796b7433a6143387517306bc37835c4cf4c6962e0844325c018ee",
                        "73bfb6718b6bf93f5c731a0b06b55c14645cf7c78628d8026966ec0e84b46cc3",
                        "ef4fb21fec01aa193370b1ac7551aa759765b4e289f781b67d762e61335c7e41",
                        "4beb785c349edcd431c027e3f05ee4fbdda6f5cb640a8a85ab38bcb0caa13644",
                        "a1661db1b74b876a7e789fc6ebb4e34beafa2b48a08e13fd18927fbecc9d2ac4",
                        "4d3137651038dfe44ccf6440f6281dfb",
                        "bd62e723aff056a5f6dd9b9ece4f5ea4bae0a50cc3bdd5f4228fb265c2a96170",
                        "4cbd0b1a1f9ae0ceea57df4f35037077539cce88e44f41eda079505b1fe7d119",
                        "42c83dcdf20c46b9f92af417d23faf1c66f734b502ed700f423cb7d4810e282b",
                        "8da08a2702d91029011f6aa8d209c706e2763dd10af4597953af58e14bca1677",
                        "61722636c5cad31d212e7ea1da55d4fde3a7e93fc46f81484dd7597a684a8164",
                        "412ddee19aea2ce1e965b747857ffee10638af466fd2854ef6d9c6489cc6df26",
                        "f0b43a3f4821a4cf4b514144b496e4d7",
                        "2c512763d56b15d9fe7ee94debac42372987eb4db111e8910f5b002a90d03207",
                        "f04be193c52029bdefce7211c67c328a4bdfbaa2653679a6e528d86bf2d7dd9d",
                        "12a00f0af753d217cf68a32e549304bf6df86414b6a5b47a37b44cd91f36fe11",
                        "20a728ce6d005a7e6d451645c75da3c6c3a50d847ea1d6c638a8d153aa580797",
                        "a76fba179c4eae84f07c49deefad892f8284ac09d9b273a2c971fadb3ef46dd8",
                        "61b51a73f187a78f74ad533c8057c809173351b534b7fb90f5ed69ffff117522",
                        "66edaf17a90b459cdb7dc61fba04695a2fcfbe46e9112356db0be9fe3c96a4a1",
                        "88f47e23c6b59062ba27bebe4cd6004379567bb613a91ec0b83644986212cf8e",
                        "4bb5887d12b822628da418c65c8999b402dd262a58f4ee133a51f00a0c9e7881",
                        "674883d3be1b309ce3b57a48d49c2f3128e8df5a69f0c6bbf3c88303841a7a0f",
                        "40993feefb8af3c4a93426f9ff21815b24fa093fa650a9f46beae791e54ce8ce",
                        "6328c4a16d653cb10c3b042301b2d6c3",
                        "3e4d51c93e584902549b54e3b22595a4f78a87a9eb4648be7af3b5cc6a682078",
                        "8a5035fd03311d20137b4111bee190142fa9c653ed60e57be2802665fe8bdb24",
                        "9a0550bcf1c770a3febe17adb59aa91717654e4d660fca29bd7ccff14da6256f",
                        "6814190b4099c532caabe663df73d8ee0c7d70b55db3c69c56eefc1dc1d162f5",
                        "9add495b9373ca17ea4f158da84a200f3d5a52ce81bc535a575a5eac31bd76bb",
                        "fb292cb730b19011f2ff249f7a6f74e75850f9a6c18ff80589ccedb6dd7351c6",
                        "c8b3411fab52b5dd2f7f77fcfb39dbd4a09699cec46e08fbb5a9da9476d897cb",
                        "5dfa632fd080886a0b7a3c236e15081a41929e3d617f0aeb02c06d1c5d583b67",
                        "fe1ad30f890e6163aa52aa7865d16d8272f5c03bb74dc4bd673c537b11fb66a0",
                        "1f3f724caf07cb5b7b6f30175f24050a386196a82e524859f5da05d8ef7f1c59",
                        "c41eeb74c49849594a1644692d7238e8513ae8ab727cf72a3fa37552c16adefb",
                        "a2856e021b71721e15a64bcd1692b67962ba637c735952c6b1b797f279c0bfb5",
                        "25b31b8f4e2988107aaf85d99365907779a8ff3980afe21f86b8edd83119ac07",
                        "3bdf0bfc560e222d6b91542a5bae5a13baefd92d8a298ecaae561c601236dee2",
                        "66ba5ddfe4ba8eff18b461334b8e589d64ee3421fe7f5cd9e1c614e3661f70a3",
                        "7c12a820fd7e576f3a179cdccaefbfcd090e0f890fccfab7615bc294795dc244",
                        "e316b7696cac5176c6d0d675e1e6ff94228959ee8e307a172057788309b6f682",
                        "f3ad47ca842225f405e277f5f2b0521266fe65a90bf746ac39a67990835ddf14",
                        "b4d73b07aa627674b03f9c96dd5883dcd78b73e5baba6426dcc87ff0e771b265",
                        "2aa1d15919fbd54cbeaf4edf18782ad478415c092da6a8b3c464fab294efe2b0",
                        "c2a38018cf336685e3c760c614bbf4c3",
                        "418cf2d183b0ad4239752ae06861e629bf3e8f5ffec607c3eb4fae2ce130a5ff",
                        "dd10bbb6a4a85ae9ac6cf5ee9657e466ede164d19b3f40eb7c62e9083cec35d3",
                        "ff32e93cbeacbeda2437159fc90e1c0a4b6b1d7fa160a931fe80801ba6e3311d",
                        "6681f512ddb9e6ca52032673dd21545d799a6f5089b57db13d12dc721fc31299",
                        "474bf4f51f1a8bc1e58b372f0ecefa4361b0756292f72b25e0fa172746a2cae7",
                        "91224a3d13c8ff4be2f2150a9751f82fb6dd3797851537e449447aaad0788c81",
                        "11084f0e466c6e14a898cd1e806dcfddc4ae3c7819a617c3d0a54490989ba559",
                        "c539c08e04ef8ab4ee18e69ab3346214ffcbfd262679c558f7b5ca651767d61d",
                        "4c01cc3dd96c524054207f6b37a334c62549857f28c0286cc8dfc30b6d388e34",
                        "354a2f583f156689b4aa2128405f1cb56b7a5e0fb047a704212f48bc1011a797",
                        "8134262ab304b37a29171eecdcb31da91040fc713d1553a1042045195c5f321a",
                        "e7a98f2a24a517532dfd29f15bba52c4216da9eee8b848f6c50bab2a4f00cdf4",
                        "6b4dd13ea6241a6c8ad2c967d88f3336798dc1e30dd24cfa3377f9b363d70b2e",
                        "9133c16f469cf207152a1a8b2d8f0c59533d2f632b17828973c6a6a37b31fa97",
                        "dbf616ad9c72def90a363c076c2e66d25831350d2e1ad60b22675e2c0ad95e56",
                        "1bdbdce7a9004c024bc337cf6a0c4561d58243bcfcade3da942f75bf80fac8f2",
                        "8fb001ff8eff89d8c472579c21683a55aff13ff9599bef6a3e5571b2c919691b",
                        "bf59baba4bdfabcd1961156eb17e7973594710fa3b92063fec7b075626751599",
                        "b17c3b52340b1f33f4c2e5ce9eb6de617bd28c9525d12b56de031f5367bf7f9a",
                        "7c0d31bca17487efc3f743bb9cb5cf56b5f2fae638cf3681fdc692a5809c94be",
                        "6f8b2caa1ea1e3ba82c29a512848fbae0c756297ce269c244e8e55ce314abfa2",
                        "98f868900b27ba82ac18f919dc551ea15dc310813eb1538ebf2d0ab3afaa8328",
                        "3fbd38a88a5302483a14d8fa2510faf9",
                        "fc489e9cf7a79d1666fa00badd30659c7cd1bc2d8ab0d12cafe61a57e9e984ff",
                        "3e6a71d8ee8d92d8421ea97db9c658b657c8c4428c4670c9c491a3a7125c5bc4",
                        "5f473045fe133fcce4d86a6037ce3f16db7c63514b6fb5e213d01a611391bc16",
                        "f320e304c3a2e2edace08ccd0bc284b572577a5228e700226d164439b2751299",
                        "f0dbc51745cdb0456cde79039f1119c8362aee6a19b54d9a368c9fe3c3d75f0f",
                        "5d9d8df653e49a9bda60668f00988aa638e3825b8c4153363f689422a8396e3b",
                        "7f48b93d8c7378c8c447944f3f96504e304cb3d9546229a58811b99a7489aa03",
                        "5ed9dc08ff9847d0559f1bcd0665fa99",
                        "9a730f59ab11cad3b6d2a89aeeac3a2ef6954e49eb6be49b6dc2cd68586d5cb7",
                        "03d53a25652bbf853ab65f0428ebc68db0497654206b95bb86f0d45f0b0ebd70",
                        "75016c483a537a5c389491a7ca05c962898a6acd7ea4e120e92919e3ffe13296",
                        "4d6f207e2dff7b1f33487321b89578657fa9b4fa61f103320964944252760f89",
                        "ce302b5c2d09dd8397770de82dae1a109566fc0f06aa63314bb2d4b04fe44780",
                        "2a5b3dd54efe4713ac211e32a315e559b78b5932eafd9f9b3fce57a8c71281fe",
                        "c47c4a57e7521c6886ca3764b32ad1e5d8669f2fbf6b127fe7a832f1f3b74ec5",
                        "a664d6a9ca31c3769df8098758e284ee9f5771c65fc9cbe223867ac979c2787a",
                        "16fc50c5d5b5419d2a3244294c7d6a77087edca488ec63146b573b31f1526809",
                        "9ab101a311ed01a23dcf775fb9757912e278a30d81c0a55c83582511b31ca290",
                        "c8b9066450e7071d13f3681cba5b4bc36bdfaae57436737d79bf52ed0910dee4",
                        "59fc44577bd89c7f6ae86b0b13e7e19c4d17612b4d5696e6c70d2e88d5d8115e",
                        "4801317e331435ac031fe4d5bda0e668",
                        "b94b0e9d11aee48870666757792eb0a0c496fe35208a69f20f925fee86830b43",
                        "95d779aa8822d3ebf5dc273af4704ea8de24ff213f7bd3967da2161be964561d",
                        "79712cd9030282fbf73a6a8a0ada993f2b0f682d75a255cebf5a344896652306",
                        "6e75af8d5d325800f4cfcaab0ec5a96976011f10544863ec3f75ee2a21eaded3",
                        "1017cd3b4ebbae756f9041efcfaa82572d38f13d5c5f57a76d17207c62f1816b",
                        "f479713c70cbb107873b10f939f4e1ecf4f75b9b6094bb5da0111ed3bf7c3748",
                        "6b64c512504060c171eee898bb53f7d402ccb274f9350a2f543803c6ef23a6fd",
                        "ce290e5742bc54f3efdf7b024c762855431063d0793eef22167ee94d6142064c",
                        "0ba5cc3c96c4ceb5664082d6f2b97e03f2a8a635691da6a2361224f5ce01c7bc",
                        "c9b8ec8ccbe3b0ab195d0c472e3f8d6b6a00dc66eb8ab0bff71eb44ad4abd39d",
                        "05537902058bc265bf790af120df1723",
                        "e6a73ef757c834e155a039619a1fdb1388f2a7ebe80accae8d13deeb3fd66471",
                        "c657a69c6832a40ff81651b72dde98ebd3dd5cece06ee57afe835370a2d51a3a",
                        "cf0680b4dc60d19715ec53d5346d584c0a4b32a347a7c77af542074ad8887eb0",
                        "fbcb18aea5eb6c852b359e1567601ba038b34ec14d32ce57f3f175f56d8c018e",
                        "127007573df51102998a62eadf85c00b1aa4ae4df1b3bc2b03e0ee42ead574aa",
                        "466c6eed81c9e10b97b539264af394bef185fdfa72cd3550f62d6634dfb2acc3",
                        "05b2de276efd0e79419210cd2bb390a4c2d7dd00c9cb9ec8b7c26e400a23ee42",
                        "20229d2217d12e73f130c72645d7edf384c630973775d9f38326dfee0295cb12",
                        "7b9ca0050851272726f3fa7925196f2b0f680093cac7b15b9e124136f07cdac6",
                        "460834ec55aa694ab0d984921534e5b7111bcb024abb36f7bace052fdeb448e5",
                        "77256dbd8c0a417df262ad441056cc29c4ee5a70a9005b2fa4f32efbec768083",
                        "2f932748cb1a1cb526a7dbf5feab4375b647d60abc8df937581e54789aaac384",
                        "a05ef5de2d8063812442ec091bcef0d33e66d94ca54feb8744038552e1284489",
                        "dfcebd50558ab9bb59ccee7b97cb00147ccd0970ee4b3d1419bcfaff636bf4d4",
                        "7ce5e8a8e1662576b886631f8ad09bed03a917bcad5fb8714e9b116fe66fcbf1",
                        "af2db13c34ab1176d65a92db07e2bbad9977dcae53910faabaf0d2e8249a661d",
                        "efe7085d016f39d6e180df2cf41e774b28e64b3e1847b5e69386ef068bea5f20",
                        "5e07331528451fd7d7bb106d2e2d43d44f129d1a7f1b61ccb43bf083020251af",
                        "a6088606ecc54326d46811b36039438be527f944330a65ce925e260b20d7a63e",
                        "23ae26a2920f4b2fefdc074fa7f052da44992bd4ad639711eb38f8e11241a2b5",
                        "25cf559d1de914a23563ad710eb291840283e5e9963b3941e51799220cc09ea5",
                        "2335d5c9dea706909a69b949120c856012a6dbd3b66897d5cf0f21cad7bbd088",
                        "e366f96c9b5c5528426a116eb49ef445",
                        "97b80d2a80888ef78c3b8c36ba91182e96e6f75c4e1182319731b4b435cb54fe",
                        "849684689850c5c2966545101f9502544c2d69b71db493d3a6a8b30460d68e82",
                        "9a9ddbcb74bc37b8eb71fc0d4e3840e2e6435f7c9deb51f7e8e7f0bbd0cee473",
                        "026f32fe680ae9ca9d2b30c270da3d26e7e4cdda463ec3552542c1d934e646e8",
                        "1c862ab87bdff1d0cfcfece32a3683fe50b2f8239af74a20ee2b2e7b3a615372",
                        "dbafada7e8406895de0d99952e4543a123b453c9181e4b9244c8938e3cbc9d6d",
                        "e502fcf4ae5b5af00d0d58b55295cff685f473f8d57e750bfde618161d3ba006",
                        "42949a2f912c87695ebffdd714eae9ae470935a2323f75a937fa3521155b3701",
                        "b195a7551260fb1653ed0f7cff7bc54bed9c6547b6a8bec4bb3a17632f7fd774",
                        "161c254e5e68bdee07abde047b1977e95c9ac832f5b826a501f556eb67d84434",
                        "b6150a21a615d9fa58b1881d846101a1dd0588d124ad1522868ee0e885356f35",
                        "ca6e08d293d450577e851f2802190871e5eff5e0de36915151f63f421eaeaf13",
                        "43e61498399ac2110f53a170eaa2d37c85bc43473306088d156bf683e636c795",
                        "f05d63eabef55290135cd9437d0b8e1876a9ba11638c180509bb74e1c9954acb",
                        "3febd752fd788339704385830b8039f70e9535992567cae407924ba16b0ffce6",
                        "6ca83be643d77af8da636b80200781881cb6c4a9a1ad60d910c65d354478b7db",
                        "174d091dcf5a5b2c4af35b5df2e4094ddf31bc589208f7b79ff5fc0db2dde514",
                        "e7de1326af0d239c39acb80ce433319a01ea106bc3dfa6c335fc0ed9f2cf9537",
                        "0f67fd50b46ca7283dc172211a42e3ffab7b524a1e2e23433c34c88e657cd364",
                        "e2d7e9ebe6291fa44394be73420d2c355c4a072a37a63bd18e680a2e27a74d5b",
                        "9d57cb840a01e4cec341d775b7ce271610ca96356b2f6af1d32c0e0c0d1747e7",
                        "4d3e9edb10d13f410f4b127423891eb43f4f793fc2dafccd9a699e187be632db",
                        "652fd19e35ba70fddc3dc6731c4edfc2b8052dcbb722b02122649a87658a6a1c",
                        "fb07664d01b3b30662887c2a6dab5650a35d708f718430dc4bda2163672d291d",
                        "0407d9603346bef7d517049b8d4d4fa276c43ede60069cafb8e597eaadfed2a7",
                        "82e96593173c1407d138cca5418a00b0f5cd9960b32d8f03052eca9b33e68b44",
                        "131bb10cc4ff5d9ffc19ea9e2c336ba67fc2f2bc5e967e9279e016a252df2cf7",
                        "88052fb5de4066ee4e5cc069c44f7dc9c3720402af677faa456a7cd0fce20c50",
                        "98949b9cd7eb063eb4a2970136d3483b29891bd8c1c2ec6104e45b76f838ddf9",
                        "9146a53e1be10920deac35a79102920e2e84a538fcea062b06b82d2d148d7a01",
                        "cf2aec2969353dc99a7f715ac818212b42b8cff7a58c9109442f2c65ff62de42",
                        "12f743c8c38d6f091300ca7b0dc380a88a3ceb5da025ed44b9a49991a47868b7",
                        "e0e64690fdb217b04baa9e71524f0d37ef5217772b7d527784ebf7bebf50c565",
                        "f74fe2e268460819040182e30bc54b5b787e0fb819cc8bc54b37ec43f5eb354a"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "uhie.hopto.org",
                        "185.140.53.144",
                        "184.75.221.195",
                        "208.115.113.39",
                        "185.157.162.238",
                        "95.179.210.210",
                        "194.5.98.101",
                        "193.56.29.131",
                        "79.134.225.44",
                        "188.165.245.148",
                        "xman2.duckdns.org",
                        "147.124.221.3",
                        "184.164.77.132",
                        "194.5.98.100",
                        "91.193.75.209",
                        "192.71.172.201",
                        "23.105.131.236",
                        "45.133.174.214",
                        "185.157.162.187",
                        "185.157.160.184",
                        "185.140.53.154",
                        "171.22.30.21",
                        "185.246.220.65",
                        "79.134.225.77",
                        "198.12.91.245",
                        "96.9.210.11",
                        "212.193.29.37",
                        "5.39.223.27",
                        "122.180.86.185",
                        "154.12.227.9",
                        "193.31.30.138",
                        "194.5.98.5",
                        "185.202.175.82",
                        "184.75.221.59",
                        "64.42.179.51",
                        "nie7ur3wtt.hopto.org",
                        "185.140.53.139",
                        "91.207.57.115",
                        "104.222.188.99",
                        "192.3.53.100",
                        "74.201.28.67",
                        "193.56.29.117",
                        "146.70.79.79",
                        "192.227.128.163",
                        "217.64.151.217",
                        "91.192.100.7",
                        "141.98.101.133",
                        "194.5.98.178",
                        "185.103.96.143",
                        "69.12.64.134",
                        "31.210.20.226",
                        "51.161.104.138",
                        "85.31.46.78",
                        "144.91.120.8",
                        "securedns360.hopto.org",
                        "192.169.69.25",
                        "185.252.178.171",
                        "212.193.30.96",
                        "62.197.136.163",
                        "51.77.67.168",
                        "128.127.105.184",
                        "216.250.250.29",
                        "37.0.11.6",
                        "185.140.53.161",
                        "66.42.43.177",
                        "ohioohioa.com",
                        "217.160.243.54",
                        "91.193.75.135",
                        "184.75.223.211",
                        "66.154.103.106",
                        "37.0.14.197",
                        "149.102.132.253",
                        "217.64.151.194",
                        "194.5.98.97",
                        "onelove03.duckdns.org",
                        "85.209.134.105",
                        "194.5.97.181",
                        "74.201.28.116",
                        "192.227.130.26",
                        "108.61.176.244",
                        "194.5.97.98",
                        "184.75.221.171",
                        "194.156.90.31",
                        "31.220.4.216",
                        "84.38.132.36",
                        "194.5.98.25",
                        "45.83.88.218",
                        "51.195.57.232",
                        "194.5.97.8",
                        "91.214.169.69",
                        "185.216.71.251",
                        "212.192.246.209",
                        "142.11.215.106",
                        "184.105.237.196",
                        "80.76.51.220",
                        "212.192.241.50",
                        "212.192.246.89",
                        "167.114.141.185",
                        "78.142.18.183",
                        "45.133.1.47",
                        "79.134.225.107",
                        "213.152.161.239",
                        "184.75.221.211",
                        "80.66.64.136",
                        "103.150.8.20",
                        "194.5.97.9",
                        "194.5.98.252",
                        "161.35.116.7",
                        "185.157.162.241",
                        "99.38.102.122",
                        "37.0.14.203",
                        "185.140.53.138",
                        "185.140.53.129",
                        "31.214.141.181",
                        "23.105.131.166",
                        "185.140.53.142",
                        "184.105.192.5",
                        "37.120.247.24",
                        "193.161.193.99",
                        "103.224.240.69",
                        "192.169.69.26",
                        "194.5.97.75",
                        "79.134.225.111",
                        "194.5.98.213",
                        "194.5.97.17",
                        "185.140.53.61",
                        "91.134.183.120",
                        "185.157.161.104",
                        "139.28.38.235",
                        "195.133.18.26",
                        "156.96.113.208",
                        "101.99.94.212",
                        "66.63.168.12",
                        "109.205.178.244",
                        "23.146.242.147",
                        "185.24.233.3",
                        "108.62.118.223",
                        "194.5.98.176",
                        "92.118.190.184",
                        "79.134.225.92",
                        "198.44.237.131",
                        "194.5.97.12",
                        "194.5.98.251",
                        "185.228.19.147",
                        "104.37.1.32",
                        "64.44.168.203",
                        "43.154.232.190",
                        "62.113.215.200",
                        "exportmunic007.duckdns.org",
                        "45.144.225.128",
                        "107.150.23.149",
                        "91.193.75.179",
                        "54.36.4.180",
                        "154.53.40.254",
                        "194.5.98.59",
                        "37.0.14.214",
                        "217.64.149.78",
                        "136.244.116.58",
                        "147.124.214.72",
                        "info1.dynamic-dns.net",
                        "185.174.40.148",
                        "104.144.69.139",
                        "191.101.130.161",
                        "nowancenorly.ddns.net",
                        "79.134.225.9",
                        "194.147.140.14",
                        "216.218.135.118",
                        "185.244.26.199",
                        "91.193.75.228",
                        "207.244.226.86",
                        "193.23.127.96",
                        "193.187.91.95",
                        "185.157.161.20",
                        "185.136.165.182",
                        "217.64.149.117",
                        "188.127.230.199",
                        "37.120.234.120",
                        "95.179.208.77",
                        "194.5.98.126",
                        "37.0.14.206",
                        "136.144.41.26",
                        "185.236.203.119",
                        "194.5.98.188",
                        "156.96.62.59",
                        "107.172.73.148",
                        "89.238.150.43",
                        "185.244.30.11",
                        "84.38.132.32",
                        "75.127.1.244",
                        "136.244.118.148",
                        "188.165.232.179",
                        "104.254.90.235",
                        "79.134.225.7",
                        "37.120.145.160",
                        "2.56.56.96",
                        "5.181.234.154",
                        "193.183.217.73",
                        "192.236.147.202",
                        "194.5.97.214",
                        "185.140.53.33",
                        "94.23.200.96",
                        "185.239.238.163",
                        "176.107.178.179",
                        "64.42.179.67",
                        "45.57.161.9",
                        "185.216.71.60",
                        "194.36.111.59",
                        "172.93.164.142",
                        "217.64.127.195",
                        "185.236.203.105",
                        "194.5.98.140",
                        "107.182.129.65",
                        "193.142.146.203",
                        "212.193.30.230",
                        "netwire.linkpc.net",
                        "194.5.98.48",
                        "45.144.225.174",
                        "kingshakes1.linkpc.net",
                        "199.195.253.181",
                        "213.152.186.35",
                        "212.192.246.220",
                        "194.5.97.122",
                        "185.157.161.92",
                        "185.208.158.210",
                        "194.147.140.4",
                        "5.2.68.71",
                        "37.120.141.190",
                        "173.249.17.53",
                        "194.5.98.7",
                        "136.144.41.252",
                        "94.46.246.30",
                        "51.15.19.32",
                        "20.225.154.34",
                        "91.245.255.120",
                        "37.0.14.198",
                        "87.251.79.111",
                        "194.5.212.164",
                        "37.0.14.199",
                        "104.168.190.126",
                        "23.105.131.227",
                        "52.188.19.78",
                        "151.80.223.229",
                        "185.24.233.14",
                        "185.197.30.108"
                    ]
                }
            ]
        }
    ]
};