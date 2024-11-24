var tape_M4S_OT = [
    {"action": AC_WAIT, time: 5000}, // countdown 19:37 -> 19:42
    {"action": AC_RENDER, "img": "./img/m4s/nearfar1_OT.png"},
    {"action": AC_WAIT, time: 57000}, // 19:42 -> 20:39
    {"action": AC_RENDER, "img": "./img/m4s/nearfar2_tank.png"},
    {"action": AC_WAIT, time: 36000}, // 20:39 -> 21:15
    {"action": AC_RENDER, "img": "./img/m4s/ee1_OT.png"},
    {"action": AC_WAIT, time: 47000}, // 21:15 -> 22:02
    {"action": AC_RENDER, "img": "./img/m4s/ee2.png"},
    {"action": AC_WAIT, time: 40000}, // 22:02 -> 22:42
    {"action": AC_RENDER, "img": "./img/m4s/side_OT.png"},
    {"action": AC_WAIT, time: 13000}, // 22:42 -> 22:55
    {"action": AC_RENDER, "img": "./img/m4s/ee22.png"},
    {"action": AC_WAIT, time: 24000}, // 22:42 -> 23:06
    // TODO: rotate DN
    {"action": AC_RENDER, "img": "./img/m4s/dn.png"},
    {"action": AC_WAIT, time: 79000}, // 23:06 -> 24:25
    {"action": AC_RENDER, "img": "./img/common/tankbuster_swap_OT.png"},
    {"action": AC_WAIT, time: 10000}, // 24:25 -> 24:35
    // TODO: last phase of p1
    {"action": AC_RENDER, "img": "https://i.imgur.com/D57b1Uv.jpeg"},
    {"action": AC_END},
    {"action": AC_END}
    ];