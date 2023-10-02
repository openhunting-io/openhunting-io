var threatdata = {
    "name": "Transparent Tribe, APT 36",
    "alias": "Transparent Tribe, APT 36, ProjectM, Mythic Leopard, TEMP.Lapis, Copper Fieldstone, Earth Karkaddan, STEPPY-KAVACH",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Transparent Tribe, APT 36",
        "names": [
            {
                "name": "Transparent Tribe",
                "name-giver": "Proofpoint"
            },
            {
                "name": "APT 36",
                "name-giver": "Mandiant"
            },
            {
                "name": "ProjectM",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Mythic Leopard",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TEMP.Lapis",
                "name-giver": "FireEye"
            },
            {
                "name": "Copper Fieldstone",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Earth Karkaddan",
                "name-giver": "Trend Micro"
            },
            {
                "name": "STEPPY-KAVACH",
                "name-giver": "Securonix"
            }
        ],
        "country": [
            "Pakistan"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(Proofpoint) Proofpoint researchers recently uncovered evidence of an advanced persistent threat (APT) against Indian diplomatic and military resources. Our investigation began with malicious emails sent to Indian embassies in Saudi Arabia and Kazakstan but turned up connections to watering hole sites focused on Indian military personnel and designed to drop a remote access Trojan (RAT) with a variety of data exfiltration functions. Our analysis shows that many of the campaigns and attacks appear related by common IOCs, vectors, payloads, and language, but the exact nature and attribution associated with this APT remain under investigation.\nAt this time, the background and analysis in this paper provide useful forensics and detail our current thinking on the malware that we have dubbed \u201cMSIL/Crimson\u201d.\n\nTransparent Tribe may be related to {{Gorgon Group}} and {{SideCopy}}.\n\nTransparant Tribe has been observed to use the Andromeda botnet (operated by {{Andromeda Spider}}).",
        "observed-sectors": [
            "Defense",
            "Education",
            "Embassies",
            "Government"
        ],
        "observed-countries": [
            "Afghanistan",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Belgium",
            "Botswana",
            "Bulgaria",
            "Canada",
            "China",
            "Czech",
            "Germany",
            "India",
            "Iran",
            "Japan",
            "Kazakhstan",
            "Kenya",
            "Malaysia",
            "Mongolia",
            "Nepal",
            "Netherlands",
            "Oman",
            "Pakistan",
            "Romania",
            "Saudi Arabia",
            "Spain",
            "Sweden",
            "Thailand",
            "Turkey",
            "UAE",
            "UK",
            "USA"
        ],
        "tools": [
            "Amphibeon",
            "Android RAT",
            "beendoor",
            "Bezigate",
            "Bozok",
            "BreachRAT",
            "CapraRAT",
            "Crimson RAT",
            "DarkComet",
            "Limepad",
            "Luminosity RAT",
            "Mobzsar",
            "MumbaiDown",
            "njRAT",
            "ObliqueRAT",
            "Peppy RAT",
            "QuasarRAT",
            "SilentCMD",
            "Stealth Mango",
            "UPDATESEE",
            "USBWorm",
            "Waizsar RAT"
        ],
        "operations": [
            {
                "date": "2012",
                "activity": "Operation \u201cTransparent Tribe\u201d\nOn February 11, 2016, we discovered two attacks minutes apart directed towards officials at Indian embassies in both Saudi Arabia and Kazakhstan. Both e-mails (Fig. 1, 2) were sent from the same originating IP address (5.189.145[.]248) belonging to Contabo GmbH, a hosting provider that seems to be currently favored by these threat actors. The e-mails also likely utilized Rackspace\u2019s MailGun service and both of them were carrying the same exact attachment.\nhttps://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf"
            },
            {
                "date": "2016-03",
                "activity": "Indian TV station CNN-IBN has discovered that Pakistani officials were collecting data about Indian troop movements using an Android app called SmeshApp.\nhttps://news.softpedia.com/news/smeshapp-removed-from-play-store-because-pakistan-used-it-to-spy-on-indian-army-501936.shtml"
            },
            {
                "date": "2016-03",
                "activity": "Operation \u201cC-Major\u201d\nTrend Micro is reporting on a third campaign, which they\u2019ve named Operation C-Major. According to the security firm, this campaign targeted Indian military officials via spear-phishing emails, distributing spyware to its victims via an Adobe Reader vulnerability.\nhttps://news.softpedia.com/news/another-case-of-a-pakistani-apt-spying-on-indian-military-personnel-502093.shtml\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/operation-c-major-actors-also-used-android-blackberry-mobile-spyware-targets/"
            },
            {
                "date": "2017-02",
                "activity": "This blog post describes another attack campaign where attackers impersonated identity of Indian think tank IDSA (Institute for Defence Studies and Analyses) and sent out spear-phishing emails to target officials of the Central Bureau of Investigation (CBI) and possibly the officials of Indian Army.\nhttps://cysinfo.com/cyber-attack-targeting-cbi-and-possibly-indian-army-officials/"
            },
            {
                "date": "2019-06",
                "activity": "Over the past year, we have seen this group undergo an evolution, stepping up its activities, starting massive infection campaigns, developing new tools and strengthening their focus on Afghanistan.\nhttps://securelist.com/transparent-tribe-part-1/98127/\nhttps://securelist.com/transparent-tribe-part-2/98233/"
            },
            {
                "date": "2020-01",
                "activity": "Investigating APT36 or Earth Karkaddan\u2019s Attack Chain and Malware Arsenal\nhttps://www.trendmicro.com/en_us/research/22/a/investigating-apt36-or-earth-karkaddans-attack-chain-and-malware.html"
            },
            {
                "date": "2020-01",
                "activity": "Transparent tribe is back with a new campaign after several years of (apparently) inactivity. We can confirm that this campaign is completely new, relying on the registration record of the C2 that dates back to 29 January 2020.\nhttps://blog.yoroi.company/research/transparent-tribe-four-years-later/"
            },
            {
                "date": "2020 Early",
                "activity": "TransparentTribe started using a new module named USBWorm at the beginning of 2020, as well as improving its custom .NET tool named CrimsonRAT.\nhttps://securelist.com/apt-trends-report-q1-2020/96826/"
            },
            {
                "date": "2020-03",
                "activity": "APT36 spreads fake coronavirus health advisory\nhttps://blog.malwarebytes.com/threat-analysis/2020/03/apt36-jumps-on-the-coronavirus-bandwagon-delivers-crimson-rat/"
            },
            {
                "date": "2020-04",
                "activity": "Operation \u201cHoney Trap\u201d\nAPT36 Targets Defense Organizations in India\nhttps://www.seqrite.com/blog/operation-honey-trap-apt36-targets-defense-organizations-in-india/"
            },
            {
                "date": "2021-02",
                "activity": "ObliqueRAT returns with new campaign using hijacked websites\nhttps://blog.talosintelligence.com/2021/02/obliquerat-new-campaign.html"
            },
            {
                "date": "2021-06",
                "activity": "Transparent Tribe campaign uses new bespoke malware to target Indian government officials\nhttps://blog.talosintelligence.com/2022/03/transparent-tribe-new-campaign.html"
            },
            {
                "date": "2021-12",
                "activity": "Transparent Tribe begins targeting education sector in latest campaign\nhttps://blog.talosintelligence.com/2022/07/transparent-tribe-targets-education.html"
            },
            {
                "date": "2022",
                "activity": "APT-36 Uses New TTPs and New Tools to Target Indian Governmental Organizations\nhttps://www.zscaler.com/blogs/security-research/apt-36-uses-new-ttps-and-new-tools-target-indian-governmental-organizations"
            },
            {
                "date": "2022-07",
                "activity": "Love scam or espionage? Transparent Tribe lures Indian and Pakistani officials\nhttps://www.welivesecurity.com/2023/03/07/love-scam-espionage-transparent-tribe-lures-indian-pakistani-officials/"
            },
            {
                "date": "2022-07",
                "activity": "Pakistan-Aligned Threat Actor Expands Interest in Indian Education Sector\nhttps://www.sentinelone.com/labs/transparent-tribe-apt36-pakistan-aligned-threat-actor-expands-interest-in-indian-education-sector/"
            },
            {
                "date": "2022-11",
                "activity": "New STEPPY#KAVACH Attack Campaign Likely Targeting Indian Government: Technical Insights and Detection Using Securonix\nhttps://www.securonix.com/blog/new-steppykavach-attack-campaign/"
            },
            {
                "date": "2023-04",
                "activity": "Cyber Espionage in India: Decoding APT-36's New Linux Malware Campaign\nhttps://www.uptycs.com/blog/cyber_espionage_in_india_decoding_apt_36_new_linux_malware"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/06/apt_group_sends_spea.html",
            "https://www.crowdstrike.com/blog/adversary-of-the-month-for-may/",
            "https://cyberstanc.com/blog/a-look-into-apt36-transparent-tribe/",
            "https://blog.talosintelligence.com/2021/05/transparent-tribe-infra-and-targeting.html",
            "https://blog.talosintelligence.com/2022/02/whats-with-shared-vba-code.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0134/"
        ],
        "uuid": "be967aec-2b55-45f2-86e8-7f22cc66db85",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "transparent_tribe_apt_36",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "transparent tribe",
            "procedure_code": "g0134",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0134",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/001",
                    "technique_name": "acquire infrastructure : domains",
                    "technique_description": "adversaries may acquire domains that can be used during targeting. domain names are the human readable names used to represent one or more ip addresses. they can be purchased or, in some cases, acquired for free.",
                    "procedure_description": "transparent tribe has registered domains to mimic file sharing, government, defense, and research websites for use in targeted campaigns.[68][69]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/001",
                    "technique_name": "compromise infrastructure : domains",
                    "technique_description": "adversaries may hijack domains and/or subdomains that can be used during targeting. domain registration hijacking is the act of changing the registration of a domain name without the permission of the original registrant. adversaries may gain access to an email account for the person listed as the owner of the domain. the adversary can then claim that they forgot their password in order to make changes to the domain registration. other possibilities include social engineering a domain registration help desk to gain access to an account or taking advantage of renewal process gaps.",
                    "procedure_description": "transparent tribe has compromised domains for use in targeted malicious campaigns.[17]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1608.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1608/004",
                    "technique_name": "stage capabilities : drive-by target",
                    "technique_description": "adversaries may prepare an operational environment to infect systems that visit a website over the normal course of browsing. endpoint systems may be compromised through browsing to adversary controlled sites, as in drive-by compromise. in such cases, the user's web browser is typically targeted for exploitation (often not requiring any extra user interaction once landing on the site), but adversaries may also set up websites for non-exploitation behavior such as application access token. prior to drive-by compromise, adversaries must stage resources needed to deliver that exploit to users who browse to an adversary controlled site. drive-by content can be staged on adversary controlled infrastructure that has been acquired (acquire infrastructure) or previously compromised (compromise infrastructure).",
                    "procedure_description": "transparent tribe has set up websites with malicious hyperlinks and iframes to infect targeted victims with crimson, njrat, and other malicious tools.[8][9][10]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "transparent tribe has used websites with malicious hyperlinks and iframes to infect targeted victims with crimson, njrat, and other malicious tools.[51][52][53]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "transparent tribe has sent spearphishing e-mails with attachments to deliver malicious payloads.[228][229][230][231][232]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "transparent tribe has embedded links to malicious downloads in e-mails.[103][104]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "transparent tribe has crafted vbs-based malicious documents.[158][159]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "transparent tribe has crafted malicious files to exploit cve-2012-0158 and cve-2010-3333 for execution.[88]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "transparent tribe has directed users to open urls hosting malicious content.[66][67]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "transparent tribe has used weaponized documents in e-mail to compromise targeted systems.[239][240][241][242][243]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "transparent tribe can hide legitimate directories and replace them with malicious copies of the same name.[48]"
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
                    "procedure_description": "transparent tribe can mimic legitimate windows directories by using the same icons and names.[171]"
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
                    "procedure_description": "transparent tribe has dropped encoded executables on compromised hosts.[334]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568",
                    "technique_link": "https://attack.mitre.org/techniques/T1568",
                    "technique_name": "dynamic resolution",
                    "technique_description": "adversaries may dynamically establish connections to command and control infrastructure to evade common detections and remediations. this may be achieved by using malware that shares a common algorithm with the infrastructure the adversary uses to receive the malware's communications. these calculations can be used to dynamically adjust parameters such as the domain name, ip address, or port number the malware uses for command and control.",
                    "procedure_description": "transparent tribe has used dynamic dns services to set up c2.[18]"
                }
            ]
        },
        {
            "procedure_name": "mythic",
            "procedure_code": "s0699",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0699",
            "techniques": [
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1119",
                    "technique_link": "https://attack.mitre.org/techniques/T1119",
                    "technique_name": "automated collection",
                    "technique_description": "once established within a system or network, an adversary may use automated techniques for collecting internal data. methods for performing this technique could include use of a command and scripting interpreter to search for and copy information fitting set criteria such as file type, location, or name at specific time intervals. in cloud-based environments, adversaries may also use cloud apis, command line interfaces, or extract, transform, and load (etl) services to automatically collect data. this functionality could also be built into remote access tools.",
                    "procedure_description": "mythic supports scripting of file downloads from agents.[28]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "mythic supports http-based c2 profiles.[222]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/002",
                    "technique_name": "application layer protocol : file transfer protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with transferring files to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "mythic supports smb-based peer-to-peer c2 profiles.[10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "mythic supports dns-based c2 profiles.[44]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132",
                    "technique_link": "https://attack.mitre.org/techniques/T1132",
                    "technique_name": "data encoding",
                    "technique_description": "adversaries may encode data to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system. use of data encoding may adhere to existing protocol specifications and includes use of ascii, unicode, base64, mime, or other binary-to-text and character encoding systems.  some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "mythic provides various transform functions to encode and/or randomize c2 data.[6]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "mythic supports ssl encrypted c2.[36]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "mythic can use a list of c2 urls as fallback mechanisms in case one ip or domain gets blocked.[33]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "mythic supports websocket and tcp-based c2 profiles.[40]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1572",
                    "technique_link": "https://attack.mitre.org/techniques/T1572",
                    "technique_name": "protocol tunneling",
                    "technique_description": "adversaries may tunnel network communications to and from a victim system within a separate protocol to avoid detection/network filtering and/or enable access to otherwise unreachable systems. tunneling involves explicitly encapsulating a protocol within another. this behavior may conceal malicious traffic by blending in with existing traffic and/or provide an outer layer of encryption (similar to a vpn). tunneling could also enable routing of network packets that would otherwise not reach their intended destination, such as smb, rdp, or other traffic that would be filtered by network appliances or not routed over the internet.",
                    "procedure_description": "mythic can use socks proxies to tunnel traffic through another protocol.[25]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/001",
                    "technique_name": "proxy : internal proxy",
                    "technique_description": "adversaries may use an internal proxy to direct command and control traffic between two or more systems in a compromised environment. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use internal proxies to manage command and control communications inside a compromised environment, to reduce the number of simultaneous outbound network connections, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between infected systems to avoid suspicion. internal proxy connections may use common peer-to-peer (p2p) networking protocols, such as smb, to better blend in with the environment.",
                    "procedure_description": "mythic can leverage a peer-to-peer c2 profile between agents.[17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "mythic can leverage a modified socks5 proxy to tunnel egress c2 traffic.[18]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/004",
                    "technique_name": "proxy : domain fronting",
                    "technique_description": "adversaries may take advantage of routing schemes in content delivery networks (cdns) and other services which host multiple domains to obfuscate the intended destination of https traffic or traffic tunneled through https.  domain fronting involves using different domain names in the sni field of the tls header and the host field of the http header. if both domains are served from the same cdn, then the cdn may route to the address specified in the http header after unwrapping the tls header. a variation of the the technique, \"domainless\" fronting, utilizes a sni field that is left blank; this may allow the fronting to work even when the cdn attempts to validate that the sni and http host fields match (if the blank sni fields are ignored).",
                    "procedure_description": "mythic supports domain fronting via custom request headers.[4]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1030",
                    "technique_link": "https://attack.mitre.org/techniques/T1030",
                    "technique_name": "data transfer size limits",
                    "technique_description": "an adversary may exfiltrate data in fixed size chunks instead of whole files or limit packet sizes below certain thresholds. this approach may be used to avoid triggering network data transfer threshold alerts.",
                    "procedure_description": "mythic supports custom chunk sizes used to upload/download files.[10]"
                }
            ]
        }
    ]
};