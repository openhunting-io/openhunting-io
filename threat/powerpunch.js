var threatdata = {
    "name": "PowerPunch",
    "alias": "PowerPunch",
    "category": "Malware",
    "type": "Downloader, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PowerPunch",
        "names": [
            {
                "name": "PowerPunch"
            }
        ],
        "description": "(Microsoft) PowerPunch is executed from within PowerShell as a one-line command, encoded using Base64. These binaries also exhibit features that rely on data from the compromised host to inform encryption of the next stage. PowerPunch also provides an excellent example of this. The VolumeSerialNumber of the host serves as the basis for a multibyte XOR key. The key is applied to an executable payload downloaded directly from adversary infrastructure, allowing for an encryption key unique to the target host. Ultimately, a next-stage executable is remotely retrieved and dropped to disk prior to execution.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/02/04/actinium-targets-ukrainian-organizations/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0685/"
        ],
        "uuid": "2653faee-fcff-4add-8934-b0ae27606c61",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerpunch",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "powerpunch",
            "procedure_code": "s0685",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0685",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "powerpunch has the ability to execute through powershell.[106]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1480/001",
                    "technique_name": "execution guardrails : environmental keying",
                    "technique_description": "adversaries may environmentally key payloads or other features of malware to evade defenses and constraint execution to a specific target environment. environmental keying uses cryptography to constrain execution or actions based on adversary supplied environment specific conditions that are expected to be present on the target. environmental keying is an implementation of execution guardrails that utilizes cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.",
                    "procedure_description": "powerpunch can use the volume serial number from a target host to generate a unique xor key for the next stage payload.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "powerpunch can use base64-encoded scripts.[44]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "powerpunch can download payloads from adversary infrastructure.[193]"
                }
            ]
        }
    ]
};