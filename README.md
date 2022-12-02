# ABS
Chrome Extension and Firefox Addon to automatically perform a number of daily searches and collect bonus reward points.

New version 1.2.31.5 2/12/22

![](/screenshots/popup.png)

Chrome & Firefox extensions removed, only available via Git now. This version is specifically to counter the accounts that end up at the URL with /?redref=amc at the end. As far as I can tell this will also work for accounts that don't have this problem as it's still a valid rewards URL so this should be universal.

To Install this extension in Chrome go in to Extensions, turn on Developer mode with the toggle in top right corner and then in the left corner click on load unpacked and point it to the src folder. As for Firefox you'll need to make a developer account with Firefox developer here - https://addons.mozilla.org/en-GB/firefox/ and follow the guide here - https://extensionworkshop.com/documentation/publish/submitting-an-add-on/, upload the files to get it signed (make sure to select for personal use, on your own only and DON'T publish it for all to download else it'll probably end up getting banned again) and in a short while you'll receive an email stating it's been created and you can return back to developer menu to download the .xpi file to install it manually in Firefox as normal.

NOTE 08/03/22 :- Delay now changed to 3 minutes instead of 1 to allow more time for searches to complete before rewards tasks start running.

NOTE 07/03/22 :- Rewards tasks will now run 60 seconds after searches start because searches were taking over all open tabs and not completing some of the rewards tasks, mainly the 30 pointer ones! If 60 seconds isn't long enough for you then just change the 60000 on line 16 of the file called open-rewards-tasks.js which you can find in the src/content-scripts folder, just add an extra 1000 to the 60000 for each second you need to add to the initial 60 seconds delay.

NOTE 12/11/21 :- If any issues regarding Rewards tabs not opening but searches work still then first try uninstalling the add-on and re-installing it again before opening a ticket. I do maintain it when and as needed and use it daily myself so am usually aware of any issue that breaks it and will be looking to get it working again ASAP. Thanks

NOTE 2/12/22 :- Updated rewards URL so that rewards start working again.

<a href="https://www.buymeacoffee.com/h4x0rm1k3" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Upcoming Features

Nothing currently planned. Please open an issue if you have any ideas!
