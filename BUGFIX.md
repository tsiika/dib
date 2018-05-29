# Bugs
29/05/2018 __ID:2__
- Editing is not working properly.
    - When you choose link to edit and make the changes some reason first link on the list gets the edits, not the selected one. 


24/05/2018 __ID: 1__
- When selecting the site from dashboard to show individual information about site, React doesn't parse the ID of selected site correctly. This will follow error  500 and now showing any data.
    - In backend you can see the data correctly using Insomnia for viewing for example.
- This same problem occurs also in editing site.
- Deleting the data is also affected by this.

# Bugfixes
__ID:1__

- The bug occured because I simply forgot to add underscore for react-router-dom's Routes.

Before:
```
<Route path='/show/:id' component={Show} /> 
<Route path='/edit/:id' component={Edit} /> 
```
After:
```
<Route path='/show/:_id' component={Show} /> 
<Route path='/edit/:_id' component={Edit} /> 
```