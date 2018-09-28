# Bugs

28/09/2018 __ID:4__
- Front-end responsivity problems.
    - Responsivity is not working properly.
    - Also there is excess white space around the root div which is causing problems with the site.
    - The navigation bar is bit off.

04/06/2018 __ID:3__
- Front-end authentication problems
    - Login and registration works fine, but authorization for certain pages is not functioning properly.
        - Viewing the dashboard after login is not working. 
        - Adding new links is not behind any authorized paths, but it still gives 401 at backend.



29/05/2018 __ID:2__
- Editing is not working properly.
    - When you choose link to edit and make the changes some reason first link on the list gets the edits, not the selected one. 


24/05/2018 __ID: 1__
- When selecting the site from dashboard to show individual information about site, React doesn't parse the ID of selected site correctly. This will follow error  500 and now showing any data.
    - In backend you can see the data correctly using Insomnia for viewing for example.
- This same problem occurs also in editing site.
- Deleting the data is also affected by this.

# Bugfixes

<hr/>


__ID:3__
- Bug occured in passport.js configuration file. Simply one underscore had to be removed.

Before:
```
User.findOne({id: jwt_payload._id}
```

After:

```
User.findOne({id: jwt_payload.id}
```


<hr/>

__ID:2__

- Bug was at the REST API. Just change of method fixed the problem.

Before: 

```
router.put('/links/:id', function(req, res, next) {
    Link.findOneAndUpdate(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});
```


After: 
```
router.put('/links/:id', function(req, res, next) {
    Link.findByIdAndUpdate(req.params.id, req.body, function(err, link) {
        if (err) return next(err);
        res.json(link);
    });
});
```

<hr/>

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