const rule = {
    "id": "7c9fb56b-c896-4571-abc9-8972c59d6037",
    "info": {
        "name": "Rules Detect SmsSpy",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2022-08-14 11:07:54",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for SmsSpy",
        "tags": [
            "smsspy",
            "Phishing",
            "spyware",
            "spy",
            "Android",
            "sms",
            "iran",
            "android",
            "Spyware",
            "malware",
            "apk",
            "phishing"
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
                        "a2826ba4482e722999068a8a93783415b342e0a226c8d2539cf4abde0998f408",
                        "dfff4a4b04439519096220fe478eeec9",
                        "a5821bf34bc58ca12ffb0d8b72279e24",
                        "5eb3cb08f601caa62cffec3d2defba76",
                        "1f83be974900b5fc7e8539dc0652d16c",
                        "e0ab94df143492a7acde410350ff530f",
                        "a20ab8e1e612b0af7114e447979b56c2",
                        "e7bd71811e8a31bcbc932eddaf1b58a4",
                        "5d0dd65ce1f027dcf5ca49bd882d5ca8c55f4c2e89eb6c1ef9c5505a57a7b10b",
                        "b6c115a3579945890f88e9228c334661cfd7568e37299acbad11c0836f71379a",
                        "64804c027a94014ddfb124a494117296",
                        "aad60e3f627c17ce29e2509d7b873241",
                        "b323e2165457a1fcefbfd741f8aa2d55aca9570bc73753d5b4dda7f32ab89ea6",
                        "128abf3ecfdaf44cd54804f16502ba28903f999977d43d1ae6fdc4261d70e1df",
                        "e7f22546c9d55cd9450f75a00b843316",
                        "9424590cd97109acb10643ca0eb2a74dc4a485ca40f0f74f2aa5b70f613b80d2",
                        "deb6f35674ff2e74374be6514eb93eb7",
                        "54e3cecd715d7b795a0a06529f95dedc",
                        "c3a58f18ab89040a5e799b43edea17bd",
                        "64805dcd0a4c81491f92caffee2242a9",
                        "798608ec017f4c3d17f662c9f6ceb056",
                        "cb0dd3d4234c701c0dc146f557ad3f77af82cfa9f5d7f4518bd358951b3b8d8e",
                        "1c273110f3aec84e76b13dff60521cc65731ef83657240f09cc9f5e0b1926c32",
                        "82ab11219419bc389cb12f78d9eb805d2297815f472673bb2e4d468c832114a5",
                        "df3d18f6b2ee85551b42324e59de7488afa9d459819a2e9cefe3e5ce5322939f",
                        "8d6ad99d699042486eac7005a84a0c37",
                        "68698c809d4e45f4fa2fc509fe9593f195f7465d66af76dd6dbd49aa0cedec5e",
                        "70873b6393810701c5febb099cb9a907",
                        "503121aedc5e3962334e6405313d1ca0b27459f18cac79523e5f4b4a45ca72d1",
                        "696718ea4d8dd29f28e3fbd7d838f053b614a2a363b1875dfbbf956e9ea4f9b3",
                        "ca832e611f3e0b3669949f59c6bd52ab2480027225ef2ff4f665dd6a2ba5eff1",
                        "f0a2cfd624fe220d2ed6ec019e7705543593ad0ee9804dd8871a03b0545b1d3b",
                        "2f1570b5b5723d3f4ddd615905e8c08f",
                        "c9120b2831923db835ea92103533cbe8",
                        "c2102a5db711cf89b1fc6208676f2100",
                        "e64a32bb27781eee9fb6f31401cf69ea",
                        "ca0d2a1f8081e66130801082ced73f04b8ac4f33adf6de58d4ca2a84bb6d799b",
                        "5c9c83dfbb213cc9525515204bf59ab28d189f4ed51407a53d275d32540a9518",
                        "90811a5e8f466cc48951e9bc7f8a86e5",
                        "f9a1f5df3dfd3ce8ace6e84dad969626558d1871506c874c4707d9c26f3fca55",
                        "39a9b6cef95e0c57b1178e4a5e2627b08bcb2ab12c79328087f304e941f4d112",
                        "ef9cec7b73b7a6416c806106aed2977f",
                        "8021c9b720936c858eb0339e14d73e98",
                        "26eedd79810ec6b40870da6a9d3e1336",
                        "824bc8f232feb2eefdcdda66dd56baf2eb654ede2aa3f4ce2351da26900a05ca",
                        "661d064b6e8b3673085a52e65659ccf2",
                        "b308a2d7a9bf30790eda451f17daaece",
                        "eacdab47fb5345749e40a4092bf1080f",
                        "8d0ece82b7e319a28e0a88aa20508b8b",
                        "097d00c242b9fec5b37b65fccfcb0f62",
                        "a7151099e1c44a2a7e6695e3c0d135012cbae04390bb52d1a56f8c2818a6f6a0",
                        "8e78ca8c85fcfe1c72d11a499bdf0042",
                        "324584f8081417a3a1695860bd915bae",
                        "a36910f85755cf66e7eceec3d529cede307b5d16f334b4eb5e3178d30a32f129",
                        "bb5974ee864d082952e7259e37443ad3",
                        "28534866fd54d7c6c1b2d36b9987130a2125ad94145689449ddfc24c2a74593e",
                        "b60277f91bd64608c7e75dbf004bcf3cb9f071df8af5a88b7ff1423051741e14",
                        "0411d0ab80171bf29a481608d60d4ad55f193b9bbb64c0520df2e4da941ed031",
                        "5f0433c7af799378d797ad97bef650485d516db42a5409cc77f47bf5a19e4934",
                        "d5f1d78bfd934d61a2d5f1209aa692e5",
                        "6978d1a52f097822b44ea2ed941f247faeedfdd95c5a623920cfe877dc08858e",
                        "e3fc59d0c60dfdcc64778b39d70635db1824254206dcc78a38c77b66a6c99b33",
                        "15a6a399a08e333964675e2c769cfdb87109bc7b75328a24ab3f0bdf08aecc1d",
                        "0b3b3c9fc527fcef6c6fd3b6ad4aae4d",
                        "562e7e90b680e4abb1c171ad01acbbbc",
                        "2652bd208ccd07637d7be824570290e700d8d6eb39193c431948bcf17af4a19c",
                        "d0e7e81298b72a41493a95145fd9bd20",
                        "2157a24f1a6a326007eafece5d54d7e1bcebd6781c49ccfc92e4f26f9922d4f8",
                        "8b3bdb4d51422199cb6c9eae4296c47c",
                        "d7f59b630b150d3a9b9c0b16480323f5",
                        "59cedb5ea89e38810819f149a4b9635866350d59e010c3133f8dda041577c9d7",
                        "433d78295b917843aedea5b7164546d0",
                        "2ea18b97e95171afabd9cfafa4813812",
                        "3f9c00569fffe07ae2d92aa597f6cd7f",
                        "fe8361e992d3c440910c1d96f5e982040318c027b4a14bbef5894893a7ea11b5",
                        "95a1793b5bd345b18eda377e529d74f360590764bf454dee96575e2f31706723",
                        "1bd1533dc9b6dde06ada49109d583dac49098ee232e181f727c26fcce658b89b",
                        "10fff3d8edaec12aaeee6e765b04b34a08f8d274dd8be40d0a8c203071640ed4",
                        "ce39ad1699ee035b6634191909f52b09",
                        "12bf2a03510389d22b83f52d1288f4d8",
                        "20b0f72cf58930a4eca482ac3f3ba4ba8425f030d6e4f9b6124b1e7b9239e5e4",
                        "eb2e0ce12822b17392bb163ed594768c15a4e06eee50447bfc4e8e6cf3a350fd",
                        "39b970b88f14edce68b21c496682ab250181df2ad0002447a585b8184e444954",
                        "64394537e0043a0d7f29ac7a914e9daf936f49cd57953898e996aa42229a6173",
                        "659e256fc0683f5f620573cc04ab5753",
                        "8898564cb04730349ec877885aa9d91c",
                        "c7ca08e574814e4cd3a9c37d04f69e68",
                        "ab6c0582e3013177834795bd595cb104",
                        "586aa3ddc711b43106c4326fb42d47aa",
                        "5c4c84194d849161126211f4e1d25318778e9f5b4bde6ef1c9e93660c5b49e47",
                        "a2404cf811143acdf0930edb1f09983a",
                        "aa72af92ebc2c7b250aa8cc1df6b8ee1fce190c1a6a715e9af99efc4de8ab10a",
                        "84d828ad9de91640959333c2b25475bcd875eded18a577670d2dcd7a4fab377b",
                        "ef2394a66a348f3d85eeb06bea20c68c",
                        "7e2c9f717adeda8c3bc7cdcdf362a7aa44b34dd39eb5199f90d3275cfe5b3751",
                        "0f58ea0d132c1d3a829432f5a8b051ab72ae01e9790096e1f98af52cbd969d3b",
                        "2aada524028ee165dc8364db956e69f0",
                        "554f6623ccd3428a1d49d1e539f98f0b",
                        "ce62915cc96735d1921613c9969882e352429c7aaab54145d270502d6b6068d2",
                        "20736d1c51fa0479691e3a2d8fba3ccd2d195fcf7f73b870de743b561384121f",
                        "b4412fd716ad4e69c5f77cd8da5a1e5c222cae1945bdae6c3d1eef929d3d60e4",
                        "c11edc2cf37e3dc4d963f2b15bcc2ff6be7fd1d8147e2f46b4bda17496895441",
                        "43060eb07bb46c2915469ceceb0ec79456278e48edd091752af580d416eb114d",
                        "f6f4aaa05472edd8ae7ddd75b37fd957",
                        "75bc0a1913c404f1c02eea4a95900226a53b3775af78ee035e0b39c369d44b4f",
                        "cb47e96d5c90d32dc9a55149e53fcc88b723a193bb5bf6b57db1d7cdef1d163c",
                        "76027584aeab0608e7c7116d73061422",
                        "c863eac37df1b80de26334d6dfce8aec",
                        "7cb17155fdedcaa1a61e68a6b7e47163",
                        "2d7fd308f3f45b6f206f112a5e13b2c5",
                        "49c96c56a5b73d068e63edeacffaa1344a97c521d2eb15856db32fda1edc2bcd",
                        "769587309d3182f0594a5ade73b7ce0e3593800786cd07edb631e4be01578d3b",
                        "55ba423284602722e8212f15899a5b40eab5fe69616d8b98e45a75e65b484d57",
                        "edc00cf79b6363376d2cc39d9dc78b52a98bb797dc4098396948d025f51817d5",
                        "94dc277ca7d5c57a2980edde83007a2718342a5a0e7cf530d19d124fd49e0bee",
                        "8482623610d437f8107454db8a518d15f7ed7529b3b081dd606a47c6de50cff7",
                        "d86da41bbac1a8c9e04313f0db3c76ab661692e83c218b673e038cb75e42994e",
                        "9e075d6929883ec5ae55948f32534e5c7a8294069a9b4decc8252c9693cfe067",
                        "7901eafc0a51652d2155476d18832bffab53ae988cf8b2d2d4dbce77bd5f2afb",
                        "7067fce8e28dd60f4ebd31602a80525eb9c53a8d58a759ce97daaf4f7c3f2b68",
                        "5de51a3f86597b5265ef33484c73f735",
                        "d01b86faa1c7265b55edcfde4099c2d5",
                        "cd945c9e94a13e2d74c6e4e9769901e9",
                        "50652564f0ebfad3c4c6ed7e0098e530",
                        "2838aea8d512225c0e22cd3c29da1e0b2787b5b4aed797253928d2e6889b3113",
                        "f2e8aa9b492503de843b9a71ad1d1b6120fd98d8a8c3b657ccd0d65d5c115389",
                        "82aef7e3d3ea24467454da66c042287c9ab7cc87f9cc80628afc9d3679e219ac",
                        "b1689311d6d55fd4b7465b944df181be",
                        "c8bc280e101a917eab5c0d407035c9f9d3a0486db97a5ccb7729c2d2a0a0b40d",
                        "63094a921f18d66317828d93f54f8a05",
                        "d3c047dc453f70b811090acb62601c3f",
                        "ee53eaf4d0c71e831165952e67cbacf0a0e2beed40142cef9bd36d8e01b821bd",
                        "b0c47f35a0d1e5405af9d7719b039f76",
                        "f9a6b22c95745c3cf3688849c7929715",
                        "a3347cc611e2a26180aa216fe9cde4bd",
                        "6320c822ba4ce417ffb82746dbf6f6f8",
                        "51dedbbac9392c65c06a77d0bf2f3edf",
                        "c70b315dd443e457712231455ef64257",
                        "8971f70b6ddcad8077f0832e4e96a249",
                        "69416a8738abcd758ec6390fe25f0d89cf517bc7eeff74edb970c065f8830760",
                        "b769cfce7ebf25e18cd94693453066a4",
                        "de6ca9b6c535bbaeec7ca37500e80f2dc7dc1e1933d21837a02caeb05e196a4f",
                        "2f405e59fa21dd98ef541b27b2e633c9",
                        "a3de93197b49d8621d74287ca25241174c07af4456bbaeb66348be9de59bed67",
                        "04b4f6aefde0a647337e2000dfc18ae5c1b973bbe57571322eed408fb0ecee0a",
                        "a4111f24f874e9f41b4bde70a633cf63",
                        "165b50a314f8cb2fecf26667a88ec9653c52d281d4edc47501f37cd28bc342c2",
                        "48f036784fa14badcf634dd8f01f81c1",
                        "5973ab7dbc8f7ac94b6a97139ff33316a8c79ec649c2340ffac6f6d55275706d",
                        "58132b9a32529b2eb30334751a9ee6e9",
                        "eda875144e24b7fb4bab10b128b2136a2646420fad67b8eb8e2a9a689f24f46e",
                        "707afd4ea72706318e70c8eae9ad40b9",
                        "de9baccfa93a6092f454288362480648",
                        "1ba63b23a3039d8d302133199f30609d",
                        "17d99170c4b21359edd4f82fcdf8ecda1f8c1bf38206ccdf6a44c441265737cc",
                        "b3b3236227c026d8c4040c2d44d705018c978f94531ff9a193fb93c835410c37",
                        "ff07fe0c840aaa562ce3c72f21ba08b20aa38b8bd92c4bb079865867cb31bfb1",
                        "bd95e05f1864f36e1e59c0ad6b1956cfd5a00a3fa884b2833d777f12639ee9a9",
                        "b6c404d446827bb8fd467065171ca007",
                        "f13ac0b04207652d9ef1094ce3504e791df223bbacf6e07dfb162d4e099d7105",
                        "99b77a3ac01ec88bab024bdef3c7102f",
                        "ef614d4739c1f94f8df5e662b843c01622e2e75d79f6df158afde0c32a5a4825",
                        "3492e21af117c43736a368f90b8109a0",
                        "f72e76a35befcab34d8be4cc4c1db80b2cfb6e14f10c48814d11e93eb843870b",
                        "214b05fd9b0f4c7536978e40a82807416bede838d21d96d7fe6d02a319de33d5",
                        "d4d678e1d0752fa8d470b4150a3eabd8",
                        "688d79d738a74eaf7f2d9c6660f215b2",
                        "8e986ed96fb34f880bca07ab871c151f42e4e325f8af340c5690665102d05248",
                        "b1c31c2f5204019768b4aaf9cdc081c5e84c7d605df9cdce33762370ae22bcd5",
                        "fb546ad32603bb22cb31a4f8c3bfeae2562ead79d1445022ec4db096038802a7",
                        "4055a4d60e6607d1a3c46e09c602341b",
                        "168578210a2dc51650394c37624fe3e8",
                        "fd72c4280312debf70b845157c2f6006",
                        "7ea17abb7bae548c4411077c0f8ca1e5",
                        "360fbf0eef153c745ca790d7e2222f1c0ea6e3edcbd42fb16d30b2f24e4dc402",
                        "6e0b0ebf0e009b9390e4d80d47e8ffc2e26bc4bd1b0c980a07e689decb8eb6d8",
                        "35b9b5b1b102e427bbb8a825a5da1231",
                        "b2c8b560cadfcf223e5deb4514222427",
                        "7ca5d947735b205f60f5dfa3bc40e1d007237723cd1d9651c49301f6a13d46bf",
                        "800b54fe297a0b81f77fefc679cd82e6",
                        "c141dbd38569bb42391bf82b84369f31",
                        "12ee7479ef95d0e0730e1dd564667e0c",
                        "59e124084e9e269b3c1d8789c27b60323cfaff0b3118152caf7cdc042bd1b945",
                        "3ef59e0e6fe475ec33cfb8797be8532f",
                        "14543c23ee227b202bd7975962efa159",
                        "37e0c324a74cfdf04b5b351c67da0f41",
                        "760d7c9f7b23b4cfe84161b8baed1597",
                        "4c96a751c1ba60c3d28a9413d71166401c796d1acb3d5f93d4fee20db7984344",
                        "d21b06d6862a661685a1e3a135477935d72903bd957175d113bfbba011db76b2",
                        "42c3b2be01a78a35e04eb997d4e8146fdc653075e2de42bdeafcecf46b1f935a",
                        "54b2ec346105aa9fb76bf7e52a31046ea96536b9f82dc2234d42c372c3abf857",
                        "505859975772f6379d59369b1a5b5c1425eaa57f3e82900e18a6f12eea5f8b2b",
                        "d67764a9c9fc29636c4ac2642c9980eb",
                        "7ec247424733c287c3322fc49f1a7766",
                        "4e9e6b28830190b0ee3655b2a1c348ba037ef584c66c14dcca929cfc53233e6b",
                        "739fa664e5dd312e0c911d6e6369f619",
                        "f484eec4910ce78568654e71bcab70d3",
                        "5f305b0118ddebe4573294660c8f7a71",
                        "de210b3d99fd7548f0e0d7455f0e5b52cdf8fbd84350df87630980950eec62fe",
                        "de17637e6d2ad45664b2353c5fd5f699",
                        "4ba0eefe26d249d370268139801bebf9",
                        "4ed2c0888048def2441087d03d847584c0f130c10e98d3978b80e4af8ef19fb7",
                        "b8143f7c7536c92b1634e62abe7ce24b9cc876b06b0a56e4261a3c90dea47201",
                        "7495392226c28c5aadab487648dfc9da5ce9f563c1deba3c52bce158dc72940e",
                        "375c3fc10047fc8d5ce3f404a5498488e6abc937e1d64edde11577d47b1b8d46",
                        "edabbcd43bb830e8d05c6f5a61efecac8a2536aeef5705b29739bc79aeee8b44",
                        "7b7a7efc35aa0aae4884657180499b90",
                        "bd8a5fef0c42876554714680c040a53f287c32bd3806e2706e2462fd421e46b5",
                        "6d94b156bd7fc19c1c95c12a0e0ce637",
                        "abb24d19adbbbf383c01a29c046a700e",
                        "795ca2925fcc2571a0ca3f30a5dfa08b4b033c8bfae59fbf50d91b681258f34e",
                        "8b52027cd37308ed21535fd02c5c2754879e2a6045479fdee71411c6ae14b697",
                        "ffd29c57df2fb49013dfad0cf4182921e6ec36df41d69a4cb7838b09a4ba779b",
                        "12c0e44d6002f381590e1c8c55a0c7a6",
                        "221ad4c97a6fd1a051c623f68de21a4ce67a46d543fdaf4f9ab5e5ffade3efc9",
                        "3b951817bde3a3c78db3c50b44a650ac6121e141f37a539057493efec1c10c2e",
                        "c9857019eba6f5cf315061862f26729b073766ada5084d067743c1526c86802a",
                        "ffe4e27bb08a840caad76909489e1459",
                        "d61b3f573f2153e76e5f56c9c49b2ffc",
                        "8b10d29548d66e9ff9d9241505e09b24425e38453991a41ea3836ca2c3223a06",
                        "a304150922a9b5b22842b8e6a8868385724a66bd7c0f7274460232437a71a106",
                        "c77a6be5aa3731705745a61d80837e9c",
                        "810604742e8e438a38524bc68ce4402c",
                        "55f442f21f70b9eb254c72503f056f9f9dce707274a619735b36e2c614365425",
                        "9b9c2e0bdf5480aabbd0ab79de16a826bdbd11a142ce117e3f49f44b0b91f4c7",
                        "ae41f017fa327e5739b1f0275ea121f4",
                        "59d8f28223785bed4afd69355663cc7cd156615517f994ee7792b7ef73c741e9",
                        "f3d7ae0cca189e97a1f405fd6f046aaaf264f1f084519eab50a3abef9f45c804",
                        "45bc9996f69dcfc6f484d368c22c11ec",
                        "6239a358904cb63718c1f76c99280ea4",
                        "c78c7d2aa73393f39ae9cf2ef5ff5685",
                        "401f71ac168d9a6505b85ee57988edd8764f44cc513c15fb2dfacb5087679388",
                        "7cfec1b1c793d5a12df0d6b9e84dfef5",
                        "d1904a4c9259c3cd0376b0874de93b7d",
                        "4f13c0a8a96ca5a98a613d5c83f9a402",
                        "6c1ac2546cd5e7a3ece5189df35c95ee8d4d51760252b8ce4ce54ac2516afba8",
                        "e012f0eb6f2475fadd1fdafffc8672e7",
                        "73ec42013f549f3b709852770c9e2769a56943173d304f939f6bcdf567cda4f1",
                        "dc9f73c8ec88a8b493a15a3cbcb36f15",
                        "2afc13957baf973fb9ed15021ca7610383c99e0a3933c736ef18c0d776e39473",
                        "73a32b0e2402e1b640fcb0ebc287a868",
                        "fdd19235e6886e2b4386a91852bb8bd464bbb08097d4bf4927c0a65a84276014",
                        "0de8f611e5e53f77baf3f3be289b1658",
                        "f493d784d06d6ecf87d38152146aa85c",
                        "4437b811bb6415eab024f9cf675ca4ce",
                        "912fc02f852a25231859ee7db52514bff980e5163e009c531f804ee88759ed70",
                        "a492cf1a84c67ed311f4f519082956be",
                        "c49c0246f033656fd50717c6f984345bdeee1918e83f9dd2ea59d75196a9ab6e",
                        "70ea43cc01fc151a91d7404db1754de886ac1e72ece27b29064ee4139227d1e8",
                        "500d7f035712d747891e43112b320c5c",
                        "fda0542c0af90cfbe94c0aa968d95535",
                        "a8c213e17f438cf39ce2c9000a4db74a7fa16f640c44ea7ebe8d533a687f2889",
                        "077704d00dbedb31dfd62c060e8fb5cb0d0ef5ff0784feaffbbbe0949b12649d",
                        "87f30af436938f2a776e7d2020457ea5599558e401a3389faaa8b5414e6e2721",
                        "355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082",
                        "d19bb4b16b00b6c088c624dd7a7f130e688c6502143c1763a572cf0b77ac7dfc",
                        "31dd9d7230683bfa08cd47699cec0ed547f527119f21dc55c5ca2d1160cdf607",
                        "b3e0b0fc4be88ca581d6be2573ef8db6",
                        "9198ad1e9bc309b1dd71a5f0cdb76df1",
                        "d716e8164fa29e5ade634235aeaca7d9",
                        "c830302bc7facd8e459bb76832fb58b4",
                        "62e226d2f45b8131ed551dfe47859a58078a6386d7277937788a3ba5a6c08ab9",
                        "6b14b895813139d9c0111aef64099d85eea34b267db0f17cda5eb43719f1dab7",
                        "4ba7de113a7e469941dc2aca2d7c4b9ba7c3073e401de2e8d9b3365f6e76a074",
                        "ee62ef16793c13ff2b3965a2c8407ffc9744c830f1f39799749b0fd281bf2f80",
                        "5223d17721ad60b71e9a811da2f7c3a290f99a214884a2b743cbb4c5151a7f2f",
                        "a893bf5ac73a9ce09eb04f948e05264eae3f11cdaed02cf317b22367c902519f",
                        "6b86e06ae5607ae4655bae936838d05a",
                        "26410eaa2e9ce793184ca7b9b88fb7feabfa50d16deada7c0768d019e64328ec",
                        "a97cff561077806ef3cf65b25f4e69a1",
                        "4f59c653be63b76afef598868785659dff0e3fa320884008fb6bb2e5639aa5bd",
                        "9b020d58e01e1c6f317111d41fe635607c5d6c37542d70f391a64e5d8aa7af43",
                        "e84005a2c1686ec21fc90de1ee81998670e4b67ff7f4b429421fe59249cfe5b6",
                        "29e545ade1c3a1c56c396f23da55ed44"
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
                        "dad-sarai.mom",
                        "adal1401.tk",
                        "li-frin3ds-dlt.ml",
                        "energy100.xyz",
                        "koskonn.ml",
                        "adl-eran.hgjgjg.tk",
                        "myadliran.com",
                        "pay-shaparrak.tk",
                        "fexmantui.ml",
                        "sana-24ir.tk",
                        "energy144.tk",
                        "cowbax.cf",
                        "myumlive.tk",
                        "daymanoi.ml",
                        "saham-darmelii.site",
                        "qtp-shabark.tk",
                        "chiyt7uyryu.tk",
                        "hx-shaparak.gq",
                        "yr8u3virhhe.tk",
                        "server-shirazzi.ga",
                        "sanapaoamla.ml",
                        "estelame.boutique",
                        "followern2.tk",
                        "re-service.tk",
                        "eadll-iran.ga",
                        "li-link.herokuapp.com",
                        "app-lurd.xyz",
                        "eadll-iran.ml",
                        "shatelmit.cf",
                        "baghbana.ml",
                        "sms-dynamite.tk",
                        "hfyfv.com",
                        "glaknohjujm.ml",
                        "adliran-sps.ml",
                        "klayteam.ga",
                        "odhcb.com",
                        "saberoi.gq",
                        "peygirir.tk",
                        "adliran-sps.tk",
                        "edalatum.ga",
                        "edalat-sana.mom",
                        "eabalaghiryt.tk",
                        "45.147.230.80",
                        "live-veigami.tk",
                        "er-dadsara.cf",
                        "5.255.91.5",
                        "afrod-saina.hgjgjg.tk",
                        "beheshti-rimoote.tk",
                        "payamsocialimon.site",
                        "sana-digital.ml",
                        "say-parapak.ga",
                        "indastanabade.xyz",
                        "re-service.ml",
                        "edlxe.tk",
                        "rbgh-app-shz.ml",
                        "dalateda.com",
                        "fg-mohanjek.ml",
                        "glycloud.ga",
                        "qtourq.ir",
                        "adlliranvw.tk",
                        "live-seexyi.tk",
                        "adlsana.live",
                        "omidkhan.herokuapp.com",
                        "pwhbeggeejv.ml",
                        "dxshapark.ga",
                        "eobxm.com",
                        "fexmantui.cf",
                        "adlt-iran.boutique",
                        "nazanin-rimot.tk",
                        "peygirie.net",
                        "dadsara19.baby",
                        "absolutely.ml",
                        "exartn.tk",
                        "newdominok.tk",
                        "narmblid.tk",
                        "eblaqie.sbs",
                        "edaltiir.ml",
                        "pep-saman-bmb.tk",
                        "iran-eblagh-ir.cf",
                        "saham-supporttm.ml",
                        "fjzgsgsbusnak.gq",
                        "sanaiys1.mom",
                        "he772bje8h.ml",
                        "saham-supoortto.ml",
                        "auvdthcetggy.tk",
                        "yooz-shop.tk",
                        "sana-blacka.tk",
                        "owbcg.com",
                        "bestmobi.tk",
                        "divar21665.xyz",
                        "linkstrtaj.ga",
                        "edlat-hamrah.mom",
                        "b93485m.tk",
                        "saham-daran-meli.tk",
                        "yun.ir",
                        "x-shaparak-spk.ml",
                        "halpopen-ir.tk",
                        "adlirantesla.gq",
                        "sanablagh.mom",
                        "ghcdroncsi.tk",
                        "rezrimot.ml",
                        "eblaghedalathamrah.tk",
                        "saaiy19.mom",
                        "192.210.144.171",
                        "u1736271.cp.regruhosting.ru",
                        "asdllran2.tk",
                        "er-dadsara.gq",
                        "king-mester.tk",
                        "scandarremote.xyz",
                        "edinaa.online",
                        "samane-sana.com",
                        "adliran-sps.cf",
                        "uc1-dadsara.cf",
                        "adrilnem.botvip.xyz",
                        "eddallatt.ml",
                        "adliran-high.cf",
                        "45.148.145.168",
                        "san-pomw.tk",
                        "kisiremot.gq",
                        "adliran-sps.ga",
                        "sanai19.baby",
                        "fjzgsgsbusnak.cf",
                        "oi-eblaeq.cf",
                        "bank-dari-iran-ir.cf",
                        "dxshapark.gq",
                        "mummy-vip.xyz",
                        "45.148.145.151",
                        "pi-linkere.cf",
                        "bpm-saraparak.ml",
                        "sanaadlin.tk",
                        "eblagh551.tk",
                        "siejjejysyhss.ga",
                        "nervoushastam.xyz",
                        "dadgahieir.ml",
                        "covax-ga.gq",
                        "amirali405.site",
                        "cmbat.gq",
                        "dxshapark.cf",
                        "aidl-iran.boutique",
                        "botvip.xyz",
                        "ratiovinn.tk",
                        "shatelmit.tk",
                        "glycloud.ml",
                        "wame-melat.tk",
                        "rimat-mani.tk",
                        "d-payment.ga",
                        "isr-shapark.ga",
                        "kdisiifksjskkalakd.tk",
                        "sana-eblgh-gov.tk",
                        "sana-emeil.ml",
                        "aeblagherto.tk",
                        "xwebapp.xyz",
                        "rubikas-otp.ml",
                        "edalatire.tk",
                        "185.235.43.67",
                        "the-host-pm.tk",
                        "kimo.vip",
                        "samanebox.tk",
                        "xfdl19.mom",
                        "radl-iran.cf",
                        "paygiri-online.ml",
                        "irq-shapark.tk",
                        "defeserremote.xyz",
                        "saham-darrmelii.ml",
                        "d1.kimo.vip",
                        "saham-edalatam.tk",
                        "yhsjsjanwba.ml",
                        "internet-digital.gq",
                        "edlat-sana.ml",
                        "ewblaqqieh.org",
                        "eblaghie-sanas.cf",
                        "mrlucy.ml",
                        "sanai151.mom",
                        "glycloud.tk",
                        "insaz-samane.xyz",
                        "tgdl.cf",
                        "yhsjsjanwba.tk",
                        "eazy-samanehh.xyz",
                        "cosmiad.xyz",
                        "omid-xbot.herokuapp.com",
                        "198.144.189.66",
                        "shaprkk.tk",
                        "213.202.212.117",
                        "sana-black.click",
                        "umlive.ml",
                        "sanavw.tk",
                        "edlat-sana.tk",
                        "adliran-sps.gq",
                        "zmbsjwguhssnnsnsnn.cf",
                        "qcyiranol.ml",
                        "eblaqie.org",
                        "20.77.43.47",
                        "88.218.17.147",
                        "eblaagh-lr.ml",
                        "shapark-eblagh.ml",
                        "adliran-sana1s.com",
                        "remote-phorot.ml",
                        "adl-eran.cf",
                        "afrod-saina.tk",
                        "easybals.ml",
                        "eblauvwhbs.ml",
                        "idbgm.com",
                        "elanmask.boutique",
                        "narmhide.tk",
                        "185.235.43.67:8080",
                        "eabalghiryt.tk",
                        "incoplish.tk",
                        "te1files.ddns.net",
                        "adliraniqw.cf"
                    ]
                }
            ]
        }
    ]
};