# Stocks List
Add stocks
See a graphical representation

## Credits
Heavily edited from [https://blog.logrocket.com/using-react-django-create-app-tutorial/](https://github.com/diogosouza/django-react-logrocket) 

### Running the Django project

First, create a Python virtual environment to isolate the projects:

```bash
python3 -m venv env
```

Then, activate it:

```bash
source env/bin/activate
```

`cd` into the _venv_ and add the Django dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

Finally, `cd` into the _django-react-logrocket_ folder and run the project:

```bash
python manage.py runserver
```

That's it!

Access the address http://localhost:8000/api/students/ and check if the API is up.

### Running the React project

First, `cd` the _students-frontend_ directory and run:

```bash
npm install
npm start
