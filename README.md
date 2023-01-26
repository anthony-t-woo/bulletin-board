!['wireframe for bulletin board app'](/assets/wireframe.jpeg)

# Home Page

## HTML Setup

-   h1 for title
-   button for login/logout
-   button for create
-   div to inject data fetched from supabase

## State

-   let postsData = []

## Events

-   on page load
    -   is user logged in?
        -   yes, button text content should say log out
        -   no, button text content should say log in
    -   fetch render and append posts data to DOM
-   user clicks login/logout button
    -   if logged in, button should say log out and clicking it should log user out - button will change back to login
    -   if not logged in, button should redirect user to auth page where they can log in or register for an account
-   user clicks create button
    -   if logged in, the user will be redirected to create page
    -   if not logged in, button should redirect user to auth page where they can log in or register for an account

# Auth Page

## HTML Setup

    - Form for sign up
        - input for email
        - input for password
        - button for submit
    - Form for sign in
        - input for email
        - input for password
        - button for submit

## State

none

## Events

-   on page load
    -   is user logged in?
        -   yes, redirect to home page
        -   no, no redirect
-   user clicks sign in submit button
    -   call sign in function
    -   redirect to homepage if all checks out
-   user clicks sign up submit button
    -   call sign up function
    -   redirect to homepage if all checks out - they should be automatically signed in

# Create Page

## HTML Setup

-   Form for creating a post
    -   Topic
    -   Message
    -   Contact
    -   button to submit post

## State

none

## Events

-   on page load
    -   is user logged in?
        -   yes, no redirect
        -   no, redirect to auth page
-   user clicks submit button
    -   will call function to add data to supabase table
