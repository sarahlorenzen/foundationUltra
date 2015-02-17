## Change-log for foundationUltra

- Added font awesome to the bower dependencies
- Added grunt dependencies 
- created changelog
- Added gruntfile.js
- created grunt task to install bower deps
- Added .bowerrc to direct assets to install location

- Created TAG v1.0.1   Deps Included 

- Added grunt copy task to aid development
- Changed Js Asets structure
- updated main page to match
- created copy task to move fontawesome scss to own scss dir rather than wrking originals
- created copy task to move foundationApps SCSS
- created copy task to move foundationSites SCSS
- Created compile task to turn scss to css for all of the above

- Created TAG v1.0.2 Added Grunt Task Runner

- Went through the files one by one removed any unwanted bloat and examine future use if any 
    - From - SITES -GONE
        - Alert Boxes as will replace with notifications
        - Buttons & Buttons Groups - Once again replacing in apps
        - Dropdown buttons
        - Keystrokes - never found an real use
        - Forms - Updated in apps
        - Labels
        - magellan
        - Progress Bars - updated in apps
        - Range Slider
        - reveal
        - Split buttons
        - switches 
        - tabs for the momment ??
        - thumbs
        - type
        - offcanvas
        - visibility
- Uncommented both apps and sites setting files so that I can remove the above from them aswell before merging into one
