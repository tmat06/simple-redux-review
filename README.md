Whenever a dispatch is called (callback) it calls the store. the store calls the reducer that it was subscribed to, which then runs the reducer. Reducer places a new state to the App. The component will then subscribe to the props in the mapStateToProps function

LIVE EXAMPLE:
![screen shot simple-redux-example.gif alt text](/simple-redux-example.gif)
