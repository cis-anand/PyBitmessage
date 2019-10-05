<?xml version="1.0" ?><!DOCTYPE TS><TS language="es" sourcelanguage="en" version="2.0">
<context>
    <name>AddAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="29"/>
        <source>Label</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="39"/>
        <source>Address</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>AddressValidator</name>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="32"/>
        <source>Invalid</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="34"/>
        <source>Validating...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="104"/>
        <source>Address already present as one of your identities.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="71"/>
        <source>Although the Bitmessage address you entered was valid, it doesn&apos;t match the chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="98"/>
        <source>Chan name/passphrase needed. You didn&apos;t enter a chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="109"/>
        <source>Address too new. Although that Bitmessage address might be valid, its version number is too new for us to handle. Perhaps you need to upgrade Bitmessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="114"/>
        <source>The Bitmessage address is not valid.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EmailGatewayDialog</name>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="14"/>
        <source>Email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="30"/>
        <source>Register on email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="82"/>
        <source>Account status at email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="95"/>
        <source>Change account settings at email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="108"/>
        <source>Unregister from email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="69"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="23"/>
        <source>Desired email address (including @mailchuck.com):</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="59"/>
        <source>@mailchuck.com</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="307"/>
        <source>Registration failed:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="309"/>
        <source>The requested email address is not available, please try a new one.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="356"/>
        <source>Sending email gateway registration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="364"/>
        <source>Sending email gateway unregistration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="370"/>
        <source>Sending email gateway status request</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EmailGatewayRegistrationDialog</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2266"/>
        <source>Registration failed:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2266"/>
        <source>The requested email address is not available, please try a new one. Fill out the new desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.py" line="102"/>
        <source>Email gateway registration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.py" line="103"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.
Please type the desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Mailchuck</name>
    <message>
        <location filename="../bitmessageqt/account.py" line="225"/>
        <source># You can use this to configure your email gateway account
# Uncomment the setting you want to use
# Here are the options:
# 
# pgp: server
# The email gateway will create and maintain PGP keys for you and sign, verify,
# encrypt and decrypt on your behalf. When you want to use PGP but are lazy,
# use this. Requires subscription.
#
# pgp: local
# The email gateway will not conduct PGP operations on your behalf. You can
# either not use PGP at all, or use it locally.
#
# attachments: yes
# Incoming attachments in the email will be uploaded to MEGA.nz, and you can
# download them from there by following the link. Requires a subscription.
#
# attachments: no
# Attachments will be ignored.
# 
# archive: yes
# Your incoming emails will be archived on the server. Use this if you need
# help with debugging problems or you need a third party proof of emails. This
# however means that the operator of the service will be able to read your
# emails even after they have been delivered to you.
#
# archive: no
# Incoming emails will be deleted from the server as soon as they are relayed
# to you.
#
# masterpubkey_btc: BIP44 xpub key or electrum v1 public seed
# offset_btc: integer (defaults to 0)
# feeamount: number with up to 8 decimal places
# feecurrency: BTC, XBT, USD, EUR or GBP
# Use these if you want to charge people who send you emails. If this is on and
# an unknown person sends you an email, they will be requested to pay the fee
# specified. As this scheme uses deterministic public keys, you will receive
# the money directly. To turn it off again, set &quot;feeamount&quot; to 0. Requires
# subscription.
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/account.py" line="299"/>
        <source># You can use this to configure your email gateway account
# Uncomment the setting you want to use
# Here are the options:
#
# pgp: server
# The email gateway will create and maintain PGP keys for you and sign, verify,
# encrypt and decrypt on your behalf. When you want to use PGP but are lazy,
# use this. Requires subscription.
#
# pgp: local
# The email gateway will not conduct PGP operations on your behalf. You can
# either not use PGP at all, or use it locally.
#
# attachments: yes
# Incoming attachments in the email will be uploaded to MEGA.nz, and you can
# download them from there by following the link. Requires a subscription.
#
# attachments: no
# Attachments will be ignored.
#
# archive: yes
# Your incoming emails will be archived on the server. Use this if you need
# help with debugging problems or you need a third party proof of emails. This
# however means that the operator of the service will be able to read your
# emails even after they have been delivered to you.
#
# archive: no
# Incoming emails will be deleted from the server as soon as they are relayed
# to you.
#
# masterpubkey_btc: BIP44 xpub key or electrum v1 public seed
# offset_btc: integer (defaults to 0)
# feeamount: number with up to 8 decimal places
# feecurrency: BTC, XBT, USD, EUR or GBP
# Use these if you want to charge people who send you emails. If this is on and
# an unknown person sends you an email, they will be requested to pay the fee
# specified. As this scheme uses deterministic public keys, you will receive
# the money directly. To turn it off again, set &quot;feeamount&quot; to 0. Requires
# subscription.
</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="180"/>
        <source>Reply to sender</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="182"/>
        <source>Reply to channel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="184"/>
        <source>Add sender to your Address Book</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="188"/>
        <source>Add sender to your Blacklist</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="388"/>
        <source>Move to Trash</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="195"/>
        <source>Undelete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="198"/>
        <source>View HTML code as formatted text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="202"/>
        <source>Save message as...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="206"/>
        <source>Mark Unread</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="359"/>
        <source>New</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="133"/>
        <source>Enable</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="136"/>
        <source>Disable</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="139"/>
        <source>Set avatar...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="129"/>
        <source>Copy address to clipboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="308"/>
        <source>Special address behavior...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="254"/>
        <source>Email gateway</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="126"/>
        <source>Delete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="376"/>
        <source>Send message to this address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="332"/>
        <source>Subscribe to this address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="344"/>
        <source>Add New Address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="391"/>
        <source>Copy destination address to clipboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="395"/>
        <source>Force send</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="614"/>
        <source>One of your addresses, %1, is an old version 1 address. Version 1 addresses are no longer supported. May we delete it now?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1083"/>
        <source>Waiting for their encryption key. Will request it again soon.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="990"/>
        <source>Encryption key request queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1089"/>
        <source>Queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1092"/>
        <source>Message sent. Waiting for acknowledgement. Sent at %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1095"/>
        <source>Message sent. Sent at %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1002"/>
        <source>Need to do work to send message. Work is queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1101"/>
        <source>Acknowledgement of the message received %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2199"/>
        <source>Broadcast queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1110"/>
        <source>Broadcast on %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1113"/>
        <source>Problem: The work demanded by the recipient is more difficult than you are willing to do. %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1116"/>
        <source>Problem: The recipient&apos;s encryption key is no good. Could not encrypt message. %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1119"/>
        <source>Forced difficulty override. Send should start soon.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1122"/>
        <source>Unknown status: %1 %2</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1663"/>
        <source>Not Connected</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1253"/>
        <source>Show Bitmessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../plugins/indicator_libmessaging.py" line="22"/>
        <source>Send</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1276"/>
        <source>Subscribe</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1282"/>
        <source>Channel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="763"/>
        <source>Quit</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1508"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1512"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 %1 
It is important that you back up this file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1519"/>
        <source>Open keys.dat?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1516"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1519"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 %1 
It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1526"/>
        <source>Delete trash?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1526"/>
        <source>Are you sure you want to delete all trashed messages?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1544"/>
        <source>bad passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1544"/>
        <source>You must type your passphrase. If you don&apos;t have one then this is not the form for you.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1567"/>
        <source>Bad address version number</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1557"/>
        <source>Your address version number must be a number: either 3 or 4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1567"/>
        <source>Your address version number must be either 3 or 4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1608"/>
        <source>Chan name needed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1608"/>
        <source>You didn&apos;t enter a chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1628"/>
        <source>Address already present</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1628"/>
        <source>Could not add chan because it appears to already be one of your identities.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1632"/>
        <source>Success</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1603"/>
        <source>Successfully created chan. To let others join your chan, give them the chan name and this Bitmessage address: %1. This address also appears in &apos;Your Identities&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1612"/>
        <source>Address too new</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1612"/>
        <source>Although that Bitmessage address might be valid, its version number is too new for us to handle. Perhaps you need to upgrade Bitmessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1616"/>
        <source>Address invalid</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1616"/>
        <source>That Bitmessage address is not valid.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1624"/>
        <source>Address does not match chan name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1624"/>
        <source>Although the Bitmessage address you entered was valid, it doesn&apos;t match the chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1632"/>
        <source>Successfully joined chan. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1648"/>
        <source>Connection lost</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1698"/>
        <source>Connected</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1825"/>
        <source>Message trashed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1916"/>
        <source>The TTL, or Time-To-Live is the length of time that the network will hold the message.
 The recipient must get it during this time. If your Bitmessage client does not hear an acknowledgement, it
 will resend the message automatically. The longer the Time-To-Live, the
 more work your computer must do to send the message. A Time-To-Live of four or five days is often appropriate.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1961"/>
        <source>Message too long</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1961"/>
        <source>The message that you are trying to send is too long by %1 bytes. (The maximum is 261644 bytes). Please cut it down before sending.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2003"/>
        <source>Error: Your account wasn&apos;t registered at an email gateway. Sending registration now as %1, please wait for the registration to be processed before retrying sending.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2008"/>
        <source>Error: Bitmessage addresses start with BM-   Please check %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2011"/>
        <source>Error: The address %1 is not typed or copied correctly. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2014"/>
        <source>Error: The address %1 contains invalid characters. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2017"/>
        <source>Error: The address version in %1 is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2020"/>
        <source>Error: Some data encoded in the address %1 is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2023"/>
        <source>Error: Some data encoded in the address %1 is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Error: Some data encoded in the address %1 is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2029"/>
        <source>Error: Something is wrong with the address %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2151"/>
        <source>Error: You must specify a From address. If you don&apos;t have one, go to the &apos;Your Identities&apos; tab.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2088"/>
        <source>Address version number</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2088"/>
        <source>Concerning the address %1, Bitmessage cannot understand address version numbers of %2. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2092"/>
        <source>Stream number</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2092"/>
        <source>Concerning the address %1, Bitmessage cannot handle stream numbers of %2. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2097"/>
        <source>Warning: You are currently not connected. Bitmessage will do the work necessary to send the message but it won&apos;t send until you connect.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2143"/>
        <source>Message queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2147"/>
        <source>Your &apos;To&apos; field is empty.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2208"/>
        <source>Right click one or more entries in your address book and select &apos;Send message to this address&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2223"/>
        <source>Fetched address from namecoin identity.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2336"/>
        <source>New Message</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2260"/>
        <source>From </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2638"/>
        <source>Sending email gateway registration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="61"/>
        <source>Address is valid.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="101"/>
        <source>The address you entered was invalid. Ignoring it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2366"/>
        <source>Error: You cannot add the same address to your address book twice. Try renaming the existing one if you want.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3446"/>
        <source>Error: You cannot add the same address to your subscriptions twice. Perhaps rename the existing one if you want.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2488"/>
        <source>Restart</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2474"/>
        <source>You must restart Bitmessage for the port number change to take effect.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2488"/>
        <source>Bitmessage will use your proxy from now on but you may want to manually restart Bitmessage now to close existing connections (if any).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2517"/>
        <source>Number needed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2517"/>
        <source>Your maximum download and upload rate must be numbers. Ignoring what you typed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2598"/>
        <source>Will not resend ever</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2598"/>
        <source>Note that the time limit you entered is less than the amount of time Bitmessage waits for the first resend attempt therefore your messages will never be resent.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2611"/>
        <source>Sending email gateway unregistration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2615"/>
        <source>Sending email gateway status request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="152"/>
        <source>Passphrase mismatch</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="152"/>
        <source>The passphrase you entered twice doesn&apos;t match. Try again.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>Choose a passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>You really do need a passphrase.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3122"/>
        <source>Address is gone</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3122"/>
        <source>Bitmessage cannot find your address %1. Perhaps you removed it?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3131"/>
        <source>Address disabled</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3131"/>
        <source>Error: The address from which you are trying to send is disabled. You&apos;ll have to enable it on the &apos;Your Identities&apos; tab before using it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3020"/>
        <source>Entry added to the Address Book. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3226"/>
        <source>Entry added to the blacklist. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3231"/>
        <source>Error: You cannot add the same address to your blacklist twice. Try renaming the existing one if you want.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3364"/>
        <source>Moved items to trash.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3311"/>
        <source>Undeleted item.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3335"/>
        <source>Save As...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3344"/>
        <source>Write error.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3423"/>
        <source>No addresses selected.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3488"/>
        <source>If you delete the subscription, messages that you already received will become inaccessible. Maybe you can consider disabling the subscription instead. Disabled subscriptions will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the subscription?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3736"/>
        <source>If you delete the channel, messages that you already received will become inaccessible. Maybe you can consider disabling the channel instead. Disabled channels will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the channel?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3866"/>
        <source>Do you really want to remove this avatar?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3874"/>
        <source>You have already set an avatar for this address. Do you really want to overwrite it?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4313"/>
        <source>Start-on-login not yet supported on your OS.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4306"/>
        <source>Minimize-to-tray not yet supported on your OS.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4309"/>
        <source>Tray notifications not yet supported on your OS.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4480"/>
        <source>Testing...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4237"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="45"/>
        <source>The address should start with &apos;&apos;BM-&apos;&apos;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="50"/>
        <source>The address is not typed or copied correctly (the checksum failed).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="56"/>
        <source>The version number of this address is higher than this software can support. Please upgrade Bitmessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="62"/>
        <source>The address contains invalid characters.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="67"/>
        <source>Some data encoded in the address is too short.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="72"/>
        <source>Some data encoded in the address is too long.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="77"/>
        <source>Some data encoded in the address is malformed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4289"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="188"/>
        <source>Address is an old type. We cannot display its past broadcasts.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="203"/>
        <source>There are no recent broadcasts from this address to display.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4374"/>
        <source>You are using TCP port %1. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="673"/>
        <source>Bitmessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="674"/>
        <source>Identities</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="675"/>
        <source>New Identity</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="738"/>
        <source>Search</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="739"/>
        <source>All</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="746"/>
        <source>To</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="748"/>
        <source>From</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="750"/>
        <source>Subject</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="743"/>
        <source>Message</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="752"/>
        <source>Received</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../plugins/indicator_libmessaging.py" line="23"/>
        <source>Messages</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="694"/>
        <source>Address book</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="696"/>
        <source>Address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="697"/>
        <source>Add Contact</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="698"/>
        <source>Fetch Namecoin ID</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="705"/>
        <source>Subject:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="704"/>
        <source>From:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="701"/>
        <source>To:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="703"/>
        <source>Send ordinary Message</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="707"/>
        <source>Send Message to your Subscribers</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="708"/>
        <source>TTL:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../plugins/indicator_libmessaging.py" line="24"/>
        <source>Subscriptions</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="719"/>
        <source>Add new Subscription</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="753"/>
        <source>Chans</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="737"/>
        <source>Add Chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="758"/>
        <source>File</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="769"/>
        <source>Settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="765"/>
        <source>Help</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="761"/>
        <source>Import keys</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="762"/>
        <source>Manage keys</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="764"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="766"/>
        <source>F1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="767"/>
        <source>Contact support</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="768"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="770"/>
        <source>Regenerate deterministic addresses</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="771"/>
        <source>Delete all trashed messages</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="772"/>
        <source>Join / Create chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="234"/>
        <source>All accounts</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="56"/>
        <source>Zoom level %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="92"/>
        <source>Error: You cannot add the same address to your list twice. Perhaps rename the existing one if you want.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="123"/>
        <source>Add new entry</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4334"/>
        <source>Display the %1 recent broadcast(s) from this address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1836"/>
        <source>New version of PyBitmessage is available: %1. Download it from https://github.com/Bitmessage/PyBitmessage/releases/latest</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2885"/>
        <source>Waiting for PoW to finish... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2894"/>
        <source>Shutting down Pybitmessage... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2913"/>
        <source>Waiting for objects to be sent... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2930"/>
        <source>Saving settings... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2943"/>
        <source>Shutting down core... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2949"/>
        <source>Stopping notifications... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2953"/>
        <source>Shutdown imminent... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/bitmessageui.py" line="714"/>
        <source>%n hour(s)</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="853"/>
        <source>%n day(s)</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2851"/>
        <source>Shutting down PyBitmessage... %1%</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1197"/>
        <source>Sent</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="112"/>
        <source>Generating one new address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="191"/>
        <source>Done generating address. Doing work necessary to broadcast it...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="217"/>
        <source>Generating %1 new addresses.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="322"/>
        <source>%1 is already in &apos;Your Identities&apos;. Not adding it again.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="376"/>
        <source>Done generating address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="228"/>
        <source>SOCKS5 Authentication problem: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Disk full</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Alert: Your disk or data storage volume is full. Bitmessage will now exit.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1104"/>
        <source>Error! Could not find sender address (your address) in the keys.dat file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="625"/>
        <source>Doing work necessary to send broadcast...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="658"/>
        <source>Broadcast sent on %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="768"/>
        <source>Encryption key was requested earlier.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="840"/>
        <source>Sending a request for the recipient&apos;s encryption key.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="865"/>
        <source>Looking up the receiver&apos;s public key</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="923"/>
        <source>Problem: Destination is a mobile device who requests that the destination be included in the message but this is disallowed in your settings.  %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="954"/>
        <source>Doing work necessary to send message.
There is no required difficulty for version 2 addresses like this.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="990"/>
        <source>Doing work necessary to send message.
Receiver&apos;s required difficulty: %1 and %2</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1032"/>
        <source>Problem: The work demanded by the recipient (%1 and %2) is more difficult than you are willing to do. %3</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1056"/>
        <source>Problem: You are trying to send a message to yourself or a chan but your encryption key could not be found in the keys.dat file. Could not encrypt message. %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1098"/>
        <source>Doing work necessary to send message.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1260"/>
        <source>Message sent. Waiting for acknowledgement. Sent on %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1086"/>
        <source>Doing work necessary to request encryption key.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1422"/>
        <source>Broadcasting the public key request. This program will auto-retry if they are offline.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1429"/>
        <source>Sending public key request. Waiting for reply. Requested at %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../upnp.py" line="278"/>
        <source>UPnP port mapping established on port %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../upnp.py" line="303"/>
        <source>UPnP port mapping removed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="258"/>
        <source>Mark all messages as read</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2708"/>
        <source>Are you sure you would like to mark all messages read?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1107"/>
        <source>Doing work necessary to send broadcast.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2786"/>
        <source>Proof of work pending</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2786"/>
        <source>%n object(s) pending proof of work</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2786"/>
        <source>%n object(s) waiting to be distributed</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2786"/>
        <source>Wait until these tasks finish?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="119"/>
        <source>The name %1 was not found.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="130"/>
        <source>The namecoin query failed (%1)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="134"/>
        <source>Unknown namecoin interface type: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="139"/>
        <source>The namecoin query failed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="156"/>
        <source>The name %1 has no associated Bitmessage address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="185"/>
        <source>Success!  Namecoind version %1 running.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="196"/>
        <source>Success!  NMControll is up and running.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="199"/>
        <source>Couldn&apos;t understand NMControl.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../namecoin.py" line="209"/>
        <source>The connection to namecoin failed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../proofofwork.py" line="132"/>
        <source>Your GPU(s) did not calculate correctly, disabling OpenCL. Please report to the developers.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="305"/>
        <source>Send message to this chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3914"/>
        <source>Set notification sound...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="398"/>
        <source>Send update</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="664"/>
        <source>
        Welcome to easy and secure Bitmessage
            * send messages to other people
            * send broadcast messages like twitter or
            * discuss in chan(nel)s with other people
        </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="844"/>
        <source>not recommended for chans</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1262"/>
        <source>Quiet Mode</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1654"/>
        <source>Problems connecting? Try enabling UPnP in the Network Settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1990"/>
        <source>You are trying to send an email instead of a bitmessage. This requires registering with a gateway. Attempt to register?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2022"/>
        <source>Error: Bitmessage addresses start with BM-   Please check the recipient address %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2028"/>
        <source>Error: The recipient address %1 is not typed or copied correctly. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2034"/>
        <source>Error: The recipient address %1 contains invalid characters. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2040"/>
        <source>Error: The version of the recipient address %1 is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2048"/>
        <source>Error: Some data encoded in the recipient address %1 is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2056"/>
        <source>Error: Some data encoded in the recipient address %1 is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2064"/>
        <source>Error: Some data encoded in the recipient address %1 is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2072"/>
        <source>Error: Something is wrong with the recipient address %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2218"/>
        <source>Error: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2336"/>
        <source>From %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2748"/>
        <source>Disconnecting</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2748"/>
        <source>Connecting</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2748"/>
        <source>Bitmessage will now drop all connections. Are you sure?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2748"/>
        <source>Bitmessage will now start connecting to network. Are you sure?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2810"/>
        <source>Synchronisation pending</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2810"/>
        <source>Bitmessage hasn&apos;t synchronised with the network, %n object(s) to be downloaded. If you quit now, it may cause delivery delays. Wait until the synchronisation finishes?</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2831"/>
        <source>Not connected</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2831"/>
        <source>Bitmessage isn&apos;t connected to the network. If you quit now, it may cause delivery delays. Wait until connected and the synchronisation finishes?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2855"/>
        <source>Waiting for network connection...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2867"/>
        <source>Waiting for finishing synchronisation...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3932"/>
        <source>You have already set a notification sound for this address book entry. Do you really want to overwrite it?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4029"/>
        <source>Copy subject to clipboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4174"/>
        <source>Error occurred: could not load message from disk.</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/address_dialogs.py" line="211"/>
        <source>Display the %n recent broadcast(s) from this address.</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addressvalidator.py" line="73"/>
        <source>Passphrase and address appear to be valid.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="666"/>
        <source>Go online</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="666"/>
        <source>Go offline</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="715"/>
        <source>Clear</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="18"/>
        <source>inbox</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="19"/>
        <source>new</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="20"/>
        <source>sent</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="21"/>
        <source>trash</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../plugins/menu_qrcode.py" line="99"/>
        <source>Show QR-code</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MessageView</name>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>Follow external link</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>The link &quot;%1&quot; will open in a browser. It may be a security risk, it could de-anonymise you or download malicious data. Are you sure?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="134"/>
        <source>HTML detected, click here to display</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="146"/>
        <source>Click here to disable HTML</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MsgDecode</name>
    <message>
        <location filename="../helper_msgcoding.py" line="84"/>
        <source>The message has an unknown encoding.
Perhaps you should upgrade Bitmessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../helper_msgcoding.py" line="88"/>
        <source>Unknown encoding</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NewAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="14"/>
        <source>Create new Address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="23"/>
        <source>Here you may generate as many addresses as you like. Indeed, creating and abandoning addresses is encouraged. You may generate addresses by using either random numbers or by using a passphrase. If you use a passphrase, the address is called a &quot;deterministic&quot; address.
The &apos;Random Number&apos; option is selected by default but deterministic addresses have several pros and cons:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="37"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Pros:&lt;br/&gt;&lt;/span&gt;You can recreate your addresses on any computer from memory. &lt;br/&gt;You need-not worry about backing up your keys.dat file as long as you can remember your passphrase. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cons:&lt;br/&gt;&lt;/span&gt;You must remember (or write down) your passphrase if you expect to be able to recreate your keys if they are lost. &lt;br/&gt;You must remember the address version number and the stream number along with your passphrase. &lt;br/&gt;If you choose a weak passphrase and someone on the Internet can brute-force it, they can read your messages and send messages as you.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="66"/>
        <source>Use a random number generator to make an address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="79"/>
        <source>Use a passphrase to make addresses</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="89"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="96"/>
        <source>Make deterministic addresses</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="102"/>
        <source>Address version number: 4</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="109"/>
        <source>In addition to your passphrase, you must remember these numbers:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="126"/>
        <source>Passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="133"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="153"/>
        <source>Stream number: 1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="173"/>
        <source>Retype passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="200"/>
        <source>Randomly generate address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="206"/>
        <source>Label (not shown to anyone except you)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="216"/>
        <source>Use the most available stream</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="226"/>
        <source> (best if this is the first of many addresses you will create)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="236"/>
        <source>Use the same stream as an existing address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="246"/>
        <source>(saves you some bandwidth and processing power)</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NewSubscriptionDialog</name>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="26"/>
        <source>Label</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="36"/>
        <source>Address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="59"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QRCodeDialog</name>
    <message>
        <location filename="../plugins/menu_qrcode.py" line="64"/>
        <source>QR-code</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SpecialAddressBehaviorDialog</name>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="14"/>
        <source>Special Address Behavior</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="20"/>
        <source>Behave as a normal address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="30"/>
        <source>Behave as a pseudo-mailing-list address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="37"/>
        <source>Mail received to a pseudo-mailing-list address will be automatically broadcast to subscribers (and thus will be public).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="47"/>
        <source>Name of the pseudo-mailing-list:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="249"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context encoding="UTF-8">
    <name>aboutDialog</name>
    <message>
        <location filename="../bitmessageqt/about.ui" line="14"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="68"/>
        <source>PyBitmessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="69"/>
        <source>version ?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Distributed under the MIT/X11 software license; see &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="59"/>
        <source>This is Beta software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="70"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright Â© 2012-2016 Jonathan Warren&lt;br/&gt;Copyright Â© 2013-2016 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message encoding="UTF-8">
        <location filename="../bitmessageqt/about.ui" line="49"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2012-2019 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="69"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Distributed under the MIT/X11 software license; see &lt;a href=&quot;https://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;https://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>blacklist</name>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="17"/>
        <source>Use a Blacklist (Allow all incoming messages except those on the Blacklist)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="27"/>
        <source>Use a Whitelist (Block all incoming messages except those on the Whitelist)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="34"/>
        <source>Add new entry</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="85"/>
        <source>Name or Label</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="90"/>
        <source>Address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="162"/>
        <source>Blacklist</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="164"/>
        <source>Whitelist</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>connectDialog</name>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="14"/>
        <source>Bitmessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="20"/>
        <source>Bitmessage won&apos;t connect to anyone until you let it. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="27"/>
        <source>Connect now</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="37"/>
        <source>Let me configure special network settings first</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="44"/>
        <source>Work offline</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>helpDialog</name>
    <message>
        <location filename="../bitmessageqt/help.ui" line="14"/>
        <source>Help</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="20"/>
        <source>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="30"/>
        <source>As Bitmessage is a collaborative project, help can be found online in the Bitmessage Wiki:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>iconGlossaryDialog</name>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="20"/>
        <source>Icon Glossary</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="36"/>
        <source>You have no connections with other peers. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="53"/>
        <source>You have made at least one connection to a peer using an outgoing connection but you have not yet received any incoming connections. Your firewall or home router probably isn&apos;t configured to forward incoming TCP connections to your computer. Bitmessage will work just fine but it would help the Bitmessage network if you allowed for incoming connections and will help you be a better-connected node.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.py" line="85"/>
        <source>You are using TCP port ?. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="96"/>
        <source>You do have connections with other peers and your firewall is correctly configured.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/dialogs.py" line="64"/>
        <source>You are using TCP port %1. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>networkstatus</name>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="39"/>
        <source>Total connections:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="185"/>
        <source>Since startup:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="201"/>
        <source>Processed 0 person-to-person messages.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="230"/>
        <source>Processed 0 public keys.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="217"/>
        <source>Processed 0 broadcasts.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="282"/>
        <source>Inventory lookups per second: 0</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="243"/>
        <source>Objects to be synced:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="152"/>
        <source>Stream #</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="116"/>
        <source>Connections</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="244"/>
        <source>Since startup on %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="140"/>
        <source>Down: %1/s  Total: %2</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="146"/>
        <source>Up: %1/s  Total: %2</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="221"/>
        <source>Total Connections: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="236"/>
        <source>Inventory lookups per second: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="256"/>
        <source>Up: 0 kB/s</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="269"/>
        <source>Down: 0 kB/s</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="757"/>
        <source>Network Status</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="70"/>
        <source>byte(s)</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="93"/>
        <source>Object(s) to be synced: %n</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="105"/>
        <source>Processed %n person-to-person message(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="116"/>
        <source>Processed %n broadcast message(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="127"/>
        <source>Processed %n public key(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="120"/>
        <source>Peer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="123"/>
        <source>IP address or hostname</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="128"/>
        <source>Rating</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="131"/>
        <source>PyBitmessage tracks the success rate of connection attempts to individual nodes. The rating ranges from -1 to 1 and affects the likelihood of selecting the node in the future</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="136"/>
        <source>User agent</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="139"/>
        <source>Peer&apos;s self-reported software</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="144"/>
        <source>TLS</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="147"/>
        <source>Connection encryption</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="155"/>
        <source>List of streams negotiated between you and the peer</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>newChanDialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="97"/>
        <source>Dialog</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="98"/>
        <source>Create a new chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="103"/>
        <source>Join a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="100"/>
        <source>Create a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="101"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly then the chan will be secure and private. If you and someone else both create a chan with the same chan name then it is currently very likely that they will be the same chan.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="105"/>
        <source>Chan name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="104"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a normal person-to-person message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="106"/>
        <source>Chan bitmessage address:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="26"/>
        <source>Create or join a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly, then the chan will be secure and private. However if you and someone else both create a chan with the same chan name, the same chan will be shared.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="56"/>
        <source>Chan passphrase/name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="63"/>
        <source>Optional, for advanced usage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="76"/>
        <source>Chan address</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="101"/>
        <source>Please input chan name/passphrase:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>newchandialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="68"/>
        <source>Successfully created / joined chan %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="75"/>
        <source>Chan creation / joining failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="82"/>
        <source>Chan creation / joining cancelled</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>proofofwork</name>
    <message>
        <location filename="../proofofwork.py" line="196"/>
        <source>C PoW module built successfully.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../proofofwork.py" line="199"/>
        <source>Failed to build C PoW module. Please build it manually.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../proofofwork.py" line="211"/>
        <source>C PoW module unavailable. Please build it.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>regenerateAddressesDialog</name>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="14"/>
        <source>Regenerate Existing Addresses</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="30"/>
        <source>Regenerate existing addresses</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="36"/>
        <source>Passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="53"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="89"/>
        <source>Address version number:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="131"/>
        <source>Stream number:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="153"/>
        <source>1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="173"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="180"/>
        <source>You must check (or not check) this box just like you did (or didn&apos;t) when you made your addresses the first time.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="190"/>
        <source>If you have previously made deterministic addresses but lost them due to an accident (like hard drive failure), you can regenerate them here. If you used the random number generator to make your addresses then this form will be of no use to you.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>settingsDialog</name>
    <message>
        <location filename="../bitmessageqt/settings.py" line="483"/>
        <source>Settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="484"/>
        <source>Start Bitmessage on user login</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="485"/>
        <source>Tray</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="486"/>
        <source>Start Bitmessage in the tray (don&apos;t show main window)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="491"/>
        <source>Minimize to tray</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="492"/>
        <source>Close to tray</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="495"/>
        <source>Show notification when message received</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="500"/>
        <source>Run in Portable Mode</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="501"/>
        <source>In Portable Mode, messages and config files are stored in the same directory as the program rather than the normal application-data folder. This makes it convenient to run Bitmessage from a USB thumb drive.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="508"/>
        <source>Willingly include unencrypted destination address when sending to a mobile device</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="513"/>
        <source>Use Identicons</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="514"/>
        <source>Reply below Quote</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="515"/>
        <source>Interface Language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="516"/>
        <source>System Settings</source>
        <comment>system</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="517"/>
        <source>User Interface</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="522"/>
        <source>Listening port</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="523"/>
        <source>Listen for connections on port:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="524"/>
        <source>UPnP:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="525"/>
        <source>Bandwidth limit</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="526"/>
        <source>Maximum download rate (kB/s): [0: unlimited]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="527"/>
        <source>Maximum upload rate (kB/s): [0: unlimited]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="529"/>
        <source>Proxy server / Tor</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="530"/>
        <source>Type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="531"/>
        <source>Server hostname:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="601"/>
        <source>Port:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="533"/>
        <source>Authentication</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="602"/>
        <source>Username:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="535"/>
        <source>Pass:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="536"/>
        <source>Listen for incoming connections when using proxy</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="541"/>
        <source>none</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="542"/>
        <source>SOCKS4a</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="543"/>
        <source>SOCKS5</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="544"/>
        <source>Network Settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="549"/>
        <source>Total difficulty:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="550"/>
        <source>The &apos;Total difficulty&apos; affects the absolute amount of work the sender must complete. Doubling this value doubles the amount of work.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="556"/>
        <source>Small message difficulty:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="557"/>
        <source>When someone sends you a message, their computer must first complete some work. The difficulty of this work, by default, is 1. You may raise this default for new addresses you create by changing the values here. Any new addresses you create will require senders to meet the higher difficulty. There is one exception: if you add a friend or acquaintance to your address book, Bitmessage will automatically notify them when you next send a message that they need only complete the minimum amount of work: difficulty 1. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="566"/>
        <source>The &apos;Small message difficulty&apos; mostly only affects the difficulty of sending small messages. Doubling this value makes it almost twice as difficult to send a small message but doesn&apos;t really affect large messages.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="573"/>
        <source>Demanded difficulty</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="578"/>
        <source>Here you may set the maximum amount of work you are willing to do to send a message to another person. Setting these values to 0 means that any value is acceptable.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="584"/>
        <source>Maximum acceptable total difficulty:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="585"/>
        <source>Maximum acceptable small message difficulty:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="586"/>
        <source>Max acceptable difficulty</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="473"/>
        <source>Hardware GPU acceleration (OpenCL)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="592"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage can utilize a different Bitcoin-based program called Namecoin to make addresses human-friendly. For example, instead of having to tell your friend your long Bitmessage address, you can simply tell him to send a message to &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;(Getting your own Bitmessage address into Namecoin is still rather difficult).&lt;/p&gt;&lt;p&gt;Bitmessage can use either namecoind directly or a running nmcontrol instance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="600"/>
        <source>Host:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="603"/>
        <source>Password:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="604"/>
        <source>Test</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="605"/>
        <source>Connect to:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="606"/>
        <source>Namecoind</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="607"/>
        <source>NMControl</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="608"/>
        <source>Namecoin integration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="613"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By default, if you send a message to someone and he is offline for more than two days, Bitmessage will send the message again after an additional two days. This will be continued with exponential backoff forever; messages will be resent after 5, 10, 20 days ect. until the receiver acknowledges them. Here you may change that behavior by having Bitmessage give up after a certain number of days or months.&lt;/p&gt;&lt;p&gt;Leave these input fields blank for the default behavior. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="622"/>
        <source>Give up after</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="623"/>
        <source>and</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="624"/>
        <source>days</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="625"/>
        <source>months.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="626"/>
        <source>Resends Expire</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="493"/>
        <source>Hide connection notifications</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="528"/>
        <source>Maximum outbound connections: [0: none]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="591"/>
        <source>Hardware GPU acceleration (OpenCL):</source>
        <translation type="unfinished"/>
    </message>
</context>
</TS>