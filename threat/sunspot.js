var threatdata = {
    "name": "SUNSPOT",
    "alias": "SUNSPOT",
    "category": "Malware",
    "type": "Rootkit",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SUNSPOT",
        "names": [
            {
                "name": "SUNSPOT"
            }
        ],
        "description": "(CrowdStrike) SUNSPOT is StellarParticle\u2019s malware used to insert the SUNBURST backdoor into software builds of the SolarWinds Orion IT management product.\nSUNSPOT monitors running processes for those involved in compilation of the Orion product and replaces one of the source files to include the SUNBURST backdoor code.\nSeveral safeguards were added to SUNSPOT to avoid the Orion builds from failing, potentially alerting developers to the adversary\u2019s presence.",
        "category": "Malware",
        "type": [
            "Rootkit"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/sunspot-malware-technical-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0562/"
        ],
        "uuid": "1d748959-f07e-49b8-acd5-ce46dbaee5d8",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sunspot",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "sunspot",
            "procedure_code": "s0562",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0562",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1195.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1195/002",
                    "technique_name": "supply chain compromise : compromise software supply chain",
                    "technique_description": "adversaries may manipulate application software prior to receipt by a final consumer for the purpose of data or system compromise. supply chain compromise of software can take place in a number of ways, including manipulation of the application source code, manipulation of the update/distribution mechanism for that software, or replacing compiled releases with a modified version.",
                    "procedure_description": "sunspot malware was designed and used to insert sunburst into software builds of the solarwinds orion it management product.[20]"
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
                    "procedure_description": "sunspot used windows api functions such as movefileex and ntqueryinformationprocess as part of the sunburst injection process.[163]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "sunspot modified its security token to grants itself debugging privileges by adding sedebugprivilege.[25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134",
                    "technique_link": "https://attack.mitre.org/techniques/T1134",
                    "technique_name": "access token manipulation",
                    "technique_description": "adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls. windows uses access tokens to determine the ownership of a running process. a user can manipulate access tokens to make a running process appear as though it is the child of a different process or belongs to someone other than the user that started the process. when this occurs, the process also takes on the security context associated with the new token.",
                    "procedure_description": "sunspot modified its security token to grants itself debugging privileges by adding sedebugprivilege.[25]"
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
                    "procedure_description": "sunspot decrypts sunburst, which was stored in aes128-cbc encrypted blobs.[224]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480",
                    "technique_link": "https://attack.mitre.org/techniques/T1480",
                    "technique_name": "execution guardrails",
                    "technique_description": "adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. guardrails ensure that a payload only executes against an intended target and reduces collateral damage from an adversary\u2019s campaign. values an adversary can provide about a target system or environment to use as guardrails may include specific network share names, attached physical devices, files, joined active directory (ad) domains, and local/external ip addresses.",
                    "procedure_description": "sunspot only replaces solarwinds orion source code if the md5 checksums of both the original source code file and backdoored replacement source code match hardcoded values.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "following the successful injection of sunburst, sunspot deleted a temporary file it created named inventorymanager.bk after restoring the original solarwinds orion source code to the software library.[231]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "sunspot was identified on disk with a filename of taskhostsvc.exe and it created an encrypted log file at c:\\windows\\temp\\vmware-vmdmp.log.[160]"
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
                    "procedure_description": "sunspot encrypted log entries it collected with the stream cipher rc4 using a hard-coded key. it also uses aes128-cbc encrypted blobs for sunburst source code and data extracted from the solarwinds orion <msbuild.exe process.[318]"
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
                    "procedure_description": "sunspot enumerated the orion software visual studio solution directory path.[293]"
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
                    "procedure_description": "sunspot monitored running processes for instances of msbuild.exe by hashing the name of each running process and comparing it to the corresponding value 0x53d525. it also extracted command-line arguments and individual arguments from the running msbuild.exe process to identify the directory path of the orion software visual studio solution.[243]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1565.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1565/001",
                    "technique_name": "data manipulation : stored data manipulation",
                    "technique_description": "adversaries may insert, delete, or manipulate data at rest in order to influence external outcomes or hide activity, thus threatening the integrity of the data. by manipulating stored data, adversaries may attempt to affect a business process, organizational understanding, and decision making.",
                    "procedure_description": "sunspot created a copy of the solarwinds orion software source file with a .bk extension to backup the original content, wrote sunburst using the same filename but with a .tmp extension, and then moved sunburst using movefileex to the original filename with a .cs extension so it could be compiled within orion software.[3]"
                }
            ]
        }
    ]
};