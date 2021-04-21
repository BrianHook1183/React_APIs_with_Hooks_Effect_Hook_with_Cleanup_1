# useEffect() with cleanup
Update this app to retreive a list of ToDo's from the jsonplaceholder API. Use this starter code for the application. You will, of course, need to add appropriate logic to make the application work.

Load the data from https://jsonplaceholder.typicode.com/todos?userId=3

## Success Criteria
### Functionality:
- ToDo's for userID 3 are loaded using fetch() and useEffect()
- useEffect() returns a cleanup function that will cancel the fetch()