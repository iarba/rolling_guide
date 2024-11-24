var flags_EX1_TEST = [
    {"name": "phase", "values": ["Fire", "Ice", "Lightning"], "default": "Fire"},
    {"name": "TEST", "values": ["Test1", "Test2"], "default": "Test1"}
  ];
var tape_EX1_TEST = [
  {"action": AC_WAIT, time: 5000},
  {"action": AC_RENDER, "img": "https://i.imgur.com/Y1FQH4V.png"},
  {"action": AC_WAIT, time: 15000},
  {"action": AC_RENDER, "img": "https://i.imgur.com/wMKE14s.jpeg", "cond": {"flag": "phase", "value": "Fire"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/ij9GR7Q.jpeg", "cond": {"flag": "phase", "value": "Ice"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/K0BNeSw.jpeg", "cond": {"flag": "phase", "value": "Lightning"}},
  {"action": AC_WAIT, time: 15000},
  {"action": AC_RENDER, "img": "https://i.imgur.com/wMKE14s.jpeg", "cond": {"flag": "phase", "value": "Fire"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/ij9GR7Q.jpeg", "cond": {"flag": "phase", "value": "Ice"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/K0BNeSw.jpeg", "cond": {"flag": "phase", "value": "Lightning"}},
  {"action": AC_WAIT, time: 15000},
  {"action": AC_RENDER, "img": "https://i.imgur.com/wMKE14s.jpeg", "cond": {"flag": "phase", "value": "Fire"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/ij9GR7Q.jpeg", "cond": {"flag": "phase", "value": "Ice"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/K0BNeSw.jpeg", "cond": {"flag": "phase", "value": "Lightning"}},
  {"action": AC_WAIT, time: 15000},
  {"action": AC_RENDER, "img": "https://i.imgur.com/wMKE14s.jpeg", "cond": {"flag": "phase", "value": "Fire"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/ij9GR7Q.jpeg", "cond": {"flag": "phase", "value": "Ice"}},
  {"action": AC_RENDER, "img": "https://i.imgur.com/K0BNeSw.jpeg", "cond": {"flag": "phase", "value": "Lightning"}},
  {"action": AC_WAIT, time: 47000},
  {"action": AC_END},
  {"action": AC_END}
  ]