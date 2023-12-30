# Minimal Theme CSS Snippets

## Custom Callouts

[DOWNLOAD](calloutsOutline.md)

Just a few changes here and there, I've put comments in the stylesheet that describe what each section does. Works in v1.5.3 of Obsidian, v7.4.6 of Minimal.

<details>
  <summary> Screenshot</summary>
  
![image](https://github.com/spacewitches/Obsidian/assets/127813090/75cfa731-abe7-4aa6-9180-4c6aacd85bab)

![image](https://github.com/spacewitches/Obsidian/assets/127813090/d14ff84c-5d5d-444f-9643-34528610ea69)

</details>

## Kanban Plugin

[DOWNLOAD](kanbanPlugin.css)

Restyle of the kanban board, the colors pull from the yellow, cyan, red, and green that can be set with the extended colors for Minimal with the Style Settings plugin. It should be easy enough to replace the colors with your own. I only have 4 lanes coded out so the colors will repeat starting on lane 5. 

You could theoretically add infinite colors, just copy and paste the code for a lane, swap the colors, and most importantly change the first line under each lane. The `4n+x` part - the number in front of the 'n' indicates how many lanes/colors total you're working with, and the 'x' is the lane number itself. So for the fifth lane, *all* lanes will need to have `5n`, and the fifth one will have `5n+5`. 

<details>
  <summary> Screenshot</summary>

![image](https://github.com/spacewitches/Obsidian/assets/127813090/36b32c51-439c-497f-8482-f49a46352478)

</details>
