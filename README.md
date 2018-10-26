### Pomodoro Host

[Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) is a time management method. This project works as a time recorder, storing the quantity of the intervals(25mins) that you spend on different jobs(projects).

The app will run on a server side. It use nodejs and expressJS to host the static webpage and a json data file. It even can be deployed on raspberry pi.

#### Usage

- start

```
node app.js
```

- client side event trigger

```
curl -d '{"name":"__JOB__", "intervals":"0"}' -H "Content-Type: application/json" -X POST http://__server IP __:__server PORT__/time-api
```

1.  if **obj.name** exist, then **obj.interval** add one.
2.  if **obj.name** non exist, then **obj** will be added in json file

#### In Future

1.  Will add delete function.
2.  Will polish UI(static webpage).
3.  Will have a applescript version client side script, which can be easily called by productivity application(Bettertouchtool,Hammerspoon).
4.  Will use websocket for real time update on webpage
