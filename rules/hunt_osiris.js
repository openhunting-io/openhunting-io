const rule = {
    "id": "2f6f87ca-a6b2-4e32-a8b2-523cf9ad8f86",
    "info": {
        "name": "Rules Detect Osiris",
        "author": "Openhunting",
        "date": "2021-05-16",
        "modified": "2021-09-04 12:30:30",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Osiris",
        "tags": [
            "osiris",
            "Kronos"
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
                        "e2984796f7308cdb70c172b14182a6f10dc9ed293d1c2dfac9c464f2e52599a0",
                        "28a020186c35ffc344fc71837693b7be3d5adaec4f24610915eb31ec15a626fd",
                        "63cfd63d995ec04f7c337708ff20ce4e2e118ab32e92395f1a815847bd2c01e2",
                        "09e90f1b1169b4725f8f7f5daabde617449a1a6817f12eaacc945451e001c62f",
                        "682b4509a0389207b6af79873f0b2c8b238b87ceacca3f44d2afe4f494dfe6e2",
                        "585ff16b69976f92d9d507b1b43c2ced804cf4fb30e822cf19f404a4f2245a96",
                        "500eeeea41a7991921fbd5ef01d164c0ee07809cdee3538d3309868204e1ac4f",
                        "82b2930af51d8cdb57db169338d9bead52d3c82769c4542f1465367c55cfc2ee",
                        "48bfc8877fa7102efd2cecf40b4f59166662d2a87f61ae1ad84b75bf14342c44",
                        "873608a4b03e2d7cdb4b8e618aa97636d635da35709c051913629929994846ee",
                        "541cd2039c7c3d9e4e5ff9b811a61f709a55580352135b403139a5288fa06f32",
                        "adde4ae9951c7eaf0e6da38a6d4a48d17c1992685b70e98cd3c248aca49dafe9",
                        "18cd059c6141fcff83f1a715a3599a35e18ee0e41500844ae9691f62df264d6e",
                        "9420352e6f0bd18b2e3cd99144ab76c1fca76b96bdba6e07b83bd5d1d2fb790b",
                        "e89dfa2bac41f774380b4f4a4f5f65002a054f0de9bccf26cbf16b2ef3f913de",
                        "fee88005a72b0dec13b45092e47b5275498e26beca1fae2193ab89e48e689c09",
                        "fe647c25fed5c6c15d6ecc449337110f1670a2d212617775d7b9f57667750c48",
                        "592b2eeb513d11fa7ec4e840f2db9f810e2aee3b16114cbad882b2157adad356",
                        "6d2ce3c4afc1f61a88ae30588ea913021ab6ce52a1f961879f07a621bde07f93",
                        "2d47ffef26bfea2b14c0690860487fd532005b70fcbd4d7695a738e4f1d5ff4d",
                        "b6e4ffe7aa6d987b3710729ce594007e5709a020de8ef4e4d48eaafbe7250903",
                        "d7634d1df27b569aaf2dd52f8f310027"
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
                        "95.214.235.237",
                        "wifoweijijfoiwjweoi.xyz",
                        "wifoweijijfoiwjweoi.xyz",
                        "wifoweijijfoiwjweoi.xyx"
                    ]
                }
            ]
        }
    ]
};