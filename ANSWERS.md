- [x] Why would you use class component over function components (removing hooks from the question)?

> If hooks didn't exist, then I would use a class component anywhere I need to save a state. But since hooks *do* exist, the only reason I would choose a class component over a functional one is when maintaining legacy code.

- [x] Name three lifecycle methods and their purposes.

1. Mounting (birth): The component is being built and rendered for the first time. In class components, `componentDidMount()` is called.
2. Updating (life): The component is active and re-rendering as state changes.
3. Unmounting (death) - The component is removed from the screen. In class components, `componentWillUnmount()` can be called if cleanup is necessary.

- [x] What is the purpose of a custom hook?

> Custom hooks provide extra functionality. Some examples are grouping items together or creating data persistence with session storage or local storage.


- [x] Why is it important to test our apps?

> Because if we don't test the apps, the users/customers will. And that will lead to unhappy customers and unemployed developers.
> Writing unit test is also important for future maintainers of a codebase. If a change is made, it is easier to tell if that change breaks something.
