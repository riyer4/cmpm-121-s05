# Section 5 – Refactoring Code Smells in Practice

The main issues with this code that I caught:

1. Too many unnecessary comments -> explains code that is self-explanatory (Comment smell)
2. Repetitive code in the event listeners (Duplicated code smell)
3. The setup function was doing WAY too much (Long function smell)
4. The variable names were just letters (Mysterious name smell)

Fixes:

1. Removed most comments and replaced them with headers so we know what each block of code is doing.
2. I added a function called updateDisplay() that included the repetitive code so that function was called instead of having to duplicate that stack in each event listener.
3. I broke the setup function up so that one function was not handling everything. Now there are separate functions for handling the UI, getting the elements, updating the display, event listeners, setup, and starting the overall program.
4. I changed the variable names so that they were relevant to what they were representing.
