
# Assignment Instructions

## Step 1: Initial Setup

- **Create a folder for the assignment and name it “a1_name_studentnumber”,** where ‘name’ is your first and last name and ‘studentnumber’ is your student number.
  
- **Use node’s “npm init” function to create a new package.**

- **Set the entry point to "a1.js".**

- **Create the a1.js file.**

- **Your assignment folder should now contain:**
  - (Assignment Folder)
    - data
      - bananas.txt
      - carrots.txt
      - onions.txt
      - tomatoes.txt
    - a1.js
    - log.txt

## Step 2: User Input

Modify the **a1.js** file to determine if the user wants to process a file or a directory. Implement the prompts using the "readline" module.

Example prompts and responses (user responses in green):

- **Do you wish to process a File (f) or directory (d):** f
  - **File:** log.txt
    - TODO: Process the file log.txt

- **Do you wish to process a File (f) or directory (d):** d
  - **Directory:** data
    - TODO: Process the directory data

- **Do you wish to process a File (f) or directory (d):** xyz
  - Invalid Selection

## Step 3: Processing the File

Using the **fs** module, when processing a file (e.g., "log.txt"), generate a detailed report with the following additional metrics:

- Number of lines in the file.
- Number of words.
- Number of characters.
- Frequency of each alphabet letter (case insensitive).

HINT: Make these functions so you can reuse them for Step 4. You will lose marks if you have repeated code that does the same thing.

## Step 4: Processing a Directory

When processing an entire directory (e.g., "data"), it must ONLY process .txt files. It must also include the output from Step 3 for ALL of the files in the directory, as well as:

- The total number of files in the directory.
- The cumulative size of all files in the directory.

NOTE: If the file and/or directory cannot be read, output the error to the console using "console.log(err.message);".
