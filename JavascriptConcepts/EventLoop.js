// 1. We have a Global Execution Context (GEC)
// 2. We have a Call Stack where in the start of the execution the GEC will be pushed
// 3. Over the Call Stack we have a JavaScript Engine (JS engine) 
// 4. Over the JS engine we have a Browser which has some super powers LIKE timer, location, console, local storage
// 5. To use the Super Power of Browser we have the web api's 
// 6. Web api are not a part of JS which we initially tought
// 7. Some of the most popular web api's are 
        // a) setTimeout()
        // b) DOM API -> whatever we write using Document.
        // c) fetch()
        // d) localStorage
        // e) console
        // f) Location 
// 8. Apart from it we have a comcept of Callback queue --> whenever we use any callback function in our code then this 
// callback will get stored in the callback queue 

// 9. Then we have a concept of "EventLoop" which basically compare the Call Stack with Call back queue and whenever the 
// eventloop finds the call stack as empty then it pushes the callback from the callback queue to callstack to execute it

// 10. If we have a callback which get's runned after 2 sec and meanwhile we have a synchronous code which take 10 sec to 
//  execute so first it completed the synchronous code usign the Callstack and at the end it will fetch the callback from the
//  callback queue and then execute it at the end of the code.

// 11. We also have a concept of Microtask queue whose priority is much higher than the callback queue's priority
// 12. In microtask queue the fetch() function and promises will be taken care
// 13  So code written under the fetch() will get executed first even it's get's written at the bottom of normal callback
 
