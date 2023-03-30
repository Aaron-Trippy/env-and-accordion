# Environmental Variable

1. Create a file at the root of the project

```
.env
```

2. inside the .env file, add hte text:

- you must use `NEXT_PUBLIC` or else this will not work

```
NEXT_PUBLIC_TITLE = "Digital Design and Development"
```

3. On the page, in between the export and report, write the variable:

```
var title = process.env.NEXT_PUBLIC_TITLE;
```

4. In between the main tag, write:

```
{main}
```

5. Make sure the `.gitignore` file has the `.env` inside

- you want to prevent the secret title from being shown.

## BCIT Data from Digital Design and Development Diploma

[Digital Design and Development Diploma Courses] (https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/#courses)
