const rule = {
    "id": "294cf58e-e11e-44c8-ae64-557bbba66ce0",
    "info": {
        "name": "Rules Detect Cerberus",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2023-09-15 06:16:17",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Cerberus",
        "tags": [
            "Cerberus",
            "cerberus",
            "Android",
            "apk",
            "iran"
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
                        "2192345562b9fb1536465d31f465015cb8b0a029fa118166de0d6975bd00448b",
                        "5287663a491c5b823280dd9c1c4de45972ccc5f803148f5a6e360d3aa164349e",
                        "4b75ca3210c17313731434a7665810594cd5493ff2836ffc566a249c477c714b",
                        "1fa6c1d55c22381d0751bf71a383944bbc0792c899e8b39ff60582cb8541c8ce",
                        "745eadd29be72626e6686654ed778a12e9270193854ed911d961256f8791fc2b",
                        "63c460bf2652832ccda5e0749a6d4c79ef1ce47d125d52407f3f0428cc131f38",
                        "9058e9fc037a8732b07a4466abbb5a1c8ba299d4c5a87a4fbc4aa42ffe7021a6",
                        "94645cdd0927079bc4d0e3046b618e90f5194c242983cbc561b553cbf91c2d09",
                        "c6f35accd37dc1440ff1fe474d6e4dc94be2e58cebc66dca6c6d860a8c2bc4ad",
                        "4ff6ea5fd58662f21827ffe33518aea786edf954d46a53da6ac47b562ec56aee",
                        "82e9ac0fa8d6699ac3bf8fd75dfef57b81fc874d7b5992eda93fcb8298104fee",
                        "d81c00d48f918cab3bdfdb461378872db0e2a076c648b07a8e80d9093fd35b75",
                        "2339f4612352ed6d989da4d84dd42a25032b532d3ebaf8a009beb3fac12ffbca",
                        "0706aff99ddb41d810d081490cb6b2b70d9ee0092a642716d7ce28011ce616a5",
                        "d526dfa52f69d2dcc86165bbdc77440d320088a359a14d8ad529b3a2ad1d71c4",
                        "10cc9cecc20f248ca5ba40c3798a602c",
                        "c51085d2f81eb3ba8d4a7b8786167899",
                        "1868837e0602c6a783d7db7254eb204b"
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
                        "tham1pheac.store",
                        "2eupn46nkraaexi.gq",
                        "4h4zhra3dhjtjhg.gq",
                        "7xpjeyf5rz8y6g6.gq",
                        "v3avcsvhztgvdxe.gq",
                        "j66t2i59ns2dotp.gq",
                        "96hfnoofmhunevc.gq",
                        "cjkj5ivhqjh8ut8.gq",
                        "tqtktnb6yi67yxy.gq",
                        "tj9cn3zp5crfqxx.gq",
                        "enbfb6k96sxik4a.gq",
                        "2otxkxmd23rrxxr.gq",
                        "8bku86hff8jiqhf.gq",
                        "androidapi429.cf",
                        "c84yd7iszpqtacd.gq",
                        "kv24aksxcgzqm9c.gq",
                        "px64mcpp9bdv6jc.gq",
                        "u6xgvpva2qhqcgz.gq",
                        "xvtimr62f9bviap.gq",
                        "yp78t3biphda7ag.gq",
                        "lpopaeradad.shop",
                        "molapermeradao.shop",
                        "baybaybayiliyorum.tk",
                        "yenihizmetaski.fit",
                        "quarterstudy.ga",
                        "univerpromo.ga",
                        "gostmarest.ga",
                        "morestandersolt.ga",
                        "comparistakres.ga",
                        "pandemitccbm-giris87.com",
                        "pandmeitccbmtrgirisi887.com",
                        "tcbmuygulamapandemigirisiniz78.com",
                        "pandemitccbm-giris147.com",
                        "pandemitccbm-giris177.com",
                        "tccbmpandemidestegigirisi769.com",
                        "tccbmpandemidestegigirisi789.com",
                        "tccbmpandemigirisiniztr6736.com",
                        "tcccbmpandemi-giris.com",
                        "adssad21.top",
                        "azerkardeskazkardes.site",
                        "dsafhkj2dsfnjlks.top",
                        "dsfdsfklkjsaiu.top",
                        "dsgdfsgdsf.top",
                        "hanidestekazerkardeslere.site"
                    ]
                }
            ]
        }
    ]
};