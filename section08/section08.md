# Building Functionality with Classes

Classes => Blueprints to create an object with some fields (values) and methods (functions) to represent a 'thing'.

## Modifiers

Keywords we can place in different methods and properties inside of the class to restrict access to different functions or different values.

-   `public` => This method can be caled anywhere, any time (default and implicit).
-   `private` => This method can only be called by other methods in this class. Used when a class can break other when called not safely by other developres - nothing related to be hacked or not.
-   `protected` => This method can be called by other methods in this class, or by other methods in child classes. Like private, but allows child classes to access the method.
