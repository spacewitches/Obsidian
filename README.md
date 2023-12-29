# Manga Script for Obsidian QuickAdd Plugin
## Download
[Download Script](QuickAdd/manga.js)
## Description
This is a script based off of the [movies script](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Attachments/movies.js) @chhoumann made for the [QuickAdd](https://github.com/chhoumann/quickadd) plugin for Obsidian. It **does not** require an API key, thanks to @jikan-me/[the Jikan MyAnimeList API](https://docs.api.jikan.moe/) which is publicly accessible. 
## Disclaimer
This is provided as-is specifically for use with [Obsidian](https://obsidian.md/) and the [QuickAdd Plugin](https://github.com/chhoumann/quickadd). Feel free to modify it for other purposes, but coding is not my day job and I probably won't be able to walk you through it.
## Testing and Debugging
I've only tested this on my machine, which is running macOS Sonoma 14.2, version 1.5.3 of Obsidian, and 1.6.1 of QuickAdd. Please let me know if you encounter any issues. 
## Installation
[This documentation](https://minimal.guide/guides/movie-database) for the movie script is an excellent reference for getting scripts like this working and demonstrating how they might be used. 
<details>
  
<summary>To just get the script working:</summary>

1. [Download the script](QuickAdd/manga.js) and put it in your Obsidian Vault. I keep mine in a scripts folder to keep it out of the way and so I don't lose it.
2. Create your template, or at least the note that will become your template, so you can use it to configure a QuickAdd macro. I've found it's best practice to keep all my templates in the same folder, just like scripts.
3. Open QuickAdd settings
![image](https://github.com/spacewitches/Obsidian/assets/127813090/439d27c9-e916-4e31-a5a1-0211b42ddaac)
4. Click 'Manage Macros'
5. Type a name for your macro, mine is 'Add Manga', and click the 'Add Macro' button. Then when its name appears, click the 'Configure' button underneath it.
6. Click the text field under 'User Scripts', and select the 'manga' script. Click 'Add'.
![image](https://github.com/spacewitches/Obsidian/assets/127813090/1eb14a00-3c97-44f0-bd3c-0c62b727106b)
7. In the same window, click on the 'Template' button near the top, this will add an 'Untitled Template Choice'. Click on the cog icon next to it.
8. Add the template that you made earlier, in the 'Template Path' field.
![image](https://github.com/spacewitches/Obsidian/assets/127813090/76adc1b8-eaf0-4c9c-ac78-69ce6cb93182)
9. Click the button on the 'File Name Format' option and enter {{VALUE:FileName}}. When QuickAdd creates a new note using the script and the template, it's this setting that automatically names it with the title of the book you're adding.
10. OPTIONAL:
- As you can see, I have mine set up so that notes created with this template will be placed in a specific folder. This is achieved by using the 'Create in folder' option, typing the folder path into the text box and clicking 'Add'.
- The 'Choose folder when creating a new note' option means that every time a note is created with this template, there will be a prompt asking you which folder you'd like it to be created in.
- The 'Include subfolders' option also results in a prompt. For my movie script, I have it set up so that I have a 'Media' folder as my 'Create in Folder', and inside the 'Media' folder, I have a 'Movies' folder and a 'TV' folder. So when I create a new note with that script, I get a prompt asking if I want the new note created in the 'Movies' folder or the 'TV' folder.
- There's also (not pictured in the screenshots above) an 'Open' option that you can toggle, that will open the new note when it's created.
- All of these settings can be adjusted later if you're not sure. The only ones that are mandatory for the script to function as intended is the 'Template Path' and the 'File Name Format'.
11. Close the window, which will bring you back to the previous one, with the macro setttings and the script and the template listed at the top. Close this window as well.
12. You should be back at the QuickAdd Settings page. Click the dropdown menu next to the 'Add Choice' button, and select 'Macro'. Type the name of your macro in the text field, then click 'Add Choice'. It does not have to be the same name as the macro you just created. This is the command that you'll be able to choose from the command console to run the script.
  ![image](https://github.com/spacewitches/Obsidian/assets/127813090/8895a040-9127-44a2-9f27-49fe3c0ef12f)
13. Click the cog icon on the same line as the macro that you just created. Select the name of the macro you created earlier from the dropdown list. Close the window then click the lightning bolt icon next to the cog icon. This adds the command to the Obsidian command console.
14. You can run the script from the console if you've already set up a template. Otherwise it's not going to do much yet.
</details>

## Additional Documentation/Resources:
- [QuickAdd Repository](https://github.com/chhoumann/quickadd)
- [Jikan API Documentation](https://docs.api.jikan.moe/)
- [Minimal Theme Documentation](https://minimal.guide/guides/movie-database) 
