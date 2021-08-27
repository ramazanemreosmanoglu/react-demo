
<img src="https://i.imgur.com/2WTKLRa.png" alt="Demo" />
Simple React demo with django backend.

## Usage

Both django server and react server has to be running for the project to run.

Setting Django server up:

```
cd backend/
pip install django-cors-headers django
python manage.py migrate
python manage.py runserver
```

React:

```
cd demo/
npm install
npm run start
```

Then go to localhost:3000 to see project.
