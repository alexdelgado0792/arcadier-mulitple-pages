# PROJECT_PREFIX - PLUGIN NAME
Some description for the plugin.

# File structure
The file structure of each Plug-in's source code:

>
    ├── admin                    
        ├── html
        ├── css
        └── scripts                
    ├── user                   
        ├── html
        ├── css
        └── scripts 

> admin folder contains the part of the code that executes for the marketplace administrator. 

> user folder has the code that executes for the merchants and buyers.


# How to install
1. Download repository.
2. Compress (.zip) the admin and user folder. 
3. Login to Arcadier Plug-in Developer Dashboard.
4. Create a new Plug-in.
5. Set Plugin as Private and add marketplace url <br/>(ie. my-sandbox.sandbox.arcadier.io)
6. If is needed add Custom Tables or Custom Fields.
7. Upload .zip file in the created Plug-in.
8. Save Plugin.
9. Login into your marketplace admin portal.
10. Go to Plug-in
11. Search for the Plug-in and install it.

# How to call CSS files 
```html
<!-- LOCALHOST STYLE -->
<link rel="stylesheet" href="../css/styles.css">
<link rel="stylesheet" href="../css/modal.css">
    
<!-- ARCADIER PLUGIN STYLE -->
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/modal.css">
```

#  How to call JS files

```html
<!-- LOCALHOST SCRIPTS -->
<script src="../scripts/scripts.js"></script>
<script src="../scripts/displayModal.js"></script>
    
<!-- ARCADIER PLUGIN SCRIPTS -->
<script src="scripts/scripts.js"></script>	
<script src="scripts/displayModal.js"></script>
```


# Ignore files
Always ignore  *.zip file
