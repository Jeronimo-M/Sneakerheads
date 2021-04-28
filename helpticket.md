# PROJECT ISSUE TICKET

## Unexpected Behavior

> I don't understand fully how to pull up a user with their posts in Postman.

## Expected Behavior

> When I put localhost:3000/users/(any user id I made) in Postman, I get user with their posts.

## Reproduce the Error

> When I put localhost:3000/users/(any user id I made) in Postman, I get a 500 server error.


## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
"status": 500,
    "error": "Internal Server Error",
    "exception": "#<NoMethodError: undefined method `set_user' for #<UsersController:0x00000000005ac8>\nDid you mean?  set_request!>",
```

## Attempted Resolution

> If you haven't already, **Google your error message now**. See if those error messages return an answer. Include at least 2 resources you've tried to consult such as walk-throughs, stack overflow articles, and other discussion threads related to your error.

```md
1. https://stackoverflow.com/questions/56661844/error-in-postman-500-internal-server-error-api
2. https://stackoverflow.com/questions/45954398/api-call-returns-on-postman-but-returns-a-500-internal-server-error-when-called
```