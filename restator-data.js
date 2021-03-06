
/*
 * weapons est copié de
 * https://leekwars.com/api/weapon/get-all
 *
 * Structure :
 *     'id': { "id": id (int),
 *             "name": name (string),
 *             "level": level (int),
 *             "min_range": min (int),
 *             "max_range: max (int),
 *             "launch_type": type (int),
 *             "cost": cost (int),
 *             "area": area (int),
 *             "los": los (int),
 *             "template": templ (int),
 *             "effects" : effect (array)
 *           }
 * Pour les effets, chaque élement du tableau est :
 *    {"id": id (int),
 *     "type": ty (int),
 *     "value1": v1 (int),
 *     "value2": v2 (int),
 *     "turns": t (int),
 *     "targets": tar (int)
 *    }
 *
 */
var weapons = {"37":{"id":37,"name":"pistol","level":1,"min_range":1,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":15,"value2":5,"turns":0,"targets":31,"type":1}],"cost":3,"area":1,"los":1,"template":1},
               "38":{"id":38,"name":"machine_gun","level":5,"min_range":1,"max_range":6,"launch_type":0,"effects":[{"id":1,"value1":30,"value2":5,"turns":0,"targets":31,"type":1}],"cost":4,"area":1,"los":1,"template":2},
               "39":{"id":39,"name":"double_gun","level":9,"min_range":2,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":18,"value2":7,"turns":0,"targets":31,"type":1},{"id":1,"value1":5,"value2":3,"turns":0,"targets":31,"type":1}],"cost":4,"area":1,"los":1,"template":3},
               "41":{"id":41,"name":"shotgun","level":17,"min_range":1,"max_range":5,"launch_type":0,"effects":[{"id":1,"value1":33,"value2":10,"turns":0,"targets":31,"type":1}],"cost":5,"area":1,"los":1,"template":4},
               "45":{"id":45,"name":"magnum","level":27,"min_range":1,"max_range":8,"launch_type":1,"effects":[{"id":1,"value1":25,"value2":15,"turns":0,"targets":31,"type":1}],"cost":5,"area":1,"los":1,"template":5},
               "108":{"id":108,"name":"broadsword","level":30,"min_range":1,"max_range":1,"launch_type":1,"effects":[{"id":1,"value1":39,"value2":2,"turns":0,"targets":31,"type":1},{"id":18,"value1":0.3,"value2":0.1,"turns":1,"targets":31,"type":9}],"cost":5,"area":1,"los":1,"template":15},
               "42":{"id":42,"name":"laser","level":40,"min_range":2,"max_range":7,"launch_type":0,"effects":[{"id":1,"value1":43,"value2":16,"turns":0,"targets":31,"type":1}],"cost":6,"area":2,"los":1,"template":6},
               "109":{"id":109,"name":"axe","level":49,"min_range":1,"max_range":1,"launch_type":1,"effects":[{"id":1,"value1":44,"value2":33,"turns":0,"targets":31,"type":1},{"id":17,"value1":0.5,"value2":0.1,"turns":1,"targets":31,"type":9}],"cost":6,"area":1,"los":1,"template":16},
               "43":{"id":43,"name":"grenade_launcher","level":55,"min_range":4,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":45,"value2":8,"turns":0,"targets":31,"type":1}],"cost":6,"area":4,"los":1,"template":7},
               "46":{"id":46,"name":"flame_thrower","level":90,"min_range":2,"max_range":8,"launch_type":0,"effects":[{"id":1,"value1":35,"value2":5,"turns":0,"targets":31,"type":1},{"id":13,"value1":24,"value2":6,"turns":2,"targets":31,"type":7}],"cost":6,"area":2,"los":1,"template":8},
               "40":{"id":40,"name":"destroyer","level":109,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":1,"value1":40,"value2":20,"turns":0,"targets":31,"type":1},{"id":19,"value1":12,"value2":0,"turns":2,"targets":31,"type":9}],"cost":6,"area":1,"los":1,"template":9},
               "48":{"id":48,"name":"gazor","level":135,"min_range":2,"max_range":7,"launch_type":0,"effects":[{"id":13,"value1":27,"value2":5,"turns":3,"targets":31,"type":7}],"cost":7,"area":5,"los":1,"template":10},
               "60":{"id":60,"name":"b_laser","level":170,"min_range":2,"max_range":8,"launch_type":0,"effects":[{"id":1,"value1":50,"value2":10,"turns":0,"targets":31,"type":1},{"id":2,"value1":50,"value2":10,"turns":0,"targets":31,"type":2}],"cost":5,"area":2,"los":1,"template":13},
               "107":{"id":107,"name":"katana","level":211,"min_range":1,"max_range":1,"launch_type":1,"effects":[{"id":1,"value1":77,"value2":0,"turns":0,"targets":31,"type":1},{"id":19,"value1":20,"value2":0,"turns":1,"targets":31,"type":9},{"id":17,"value1":0.2,"value2":0.1,"turns":1,"targets":31,"type":9},{"id":18,"value1":0.2,"value2":0.1,"turns":1,"targets":31,"type":9}],"cost":7,"area":1,"los":1,"template":14},
               "44":{"id":44,"name":"electrisor","level":257,"min_range":7,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":70,"value2":10,"turns":0,"targets":31,"type":1}],"cost":7,"area":3,"los":1,"template":11},
               "47":{"id":47,"name":"m_laser","level":300,"min_range":4,"max_range":12,"launch_type":0,"effects":[{"id":1,"value1":90,"value2":10,"turns":0,"targets":31,"type":1}],"cost":8,"area":2,"los":1,"template":12}
              };






/*
 * chips est copié de
 * https://leekwars.com/api/chip/get-all
 *
 * Structure :
 *     'id': { "id": id (int),
 *             "name": name (string),
 *             "level": level (int),
 *             "min_range": min (int),
 *             "max_range: max (int),
 *             "launch_type": type (int),
 *             "cost": cost (int),
 *             "area": area (int),
 *             "cooldown": cool (int),
 *             "team_cooldown": tcool (int),
 *             "initial_cooldown": icool (int),
 *             "los": los (int),
 *             "template": templ (int),
 *             "effects" : effect (array)
 *           }
 * Pour les effets, chaque élement du tableau est :
 *    {"id": id (int),
 *     "type": ty (int),
 *     "value1": v1 (int),
 *     "value2": v2 (int),
 *     "turns": t (int),
 *     "targets": tar (int)
 *    }
 *
 */
var chips = {"1":{"id":1,"name":"shock","level":1,"min_range":0,"max_range":6,"launch_type":1,"effects":[{"id":1,"value1":5,"value2":2,"turns":0,"targets":31,"type":1}],"cost":2,"area":1,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":6},
             "19":{"id":19,"name":"pebble","level":4,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":1,"value1":2,"value2":15,"turns":0,"targets":31,"type":1}],"cost":2,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":12},
             "18":{"id":18,"name":"spark","level":7,"min_range":0,"max_range":10,"launch_type":1,"effects":[{"id":1,"value1":8,"value2":8,"turns":0,"targets":31,"type":1}],"cost":3,"area":1,"cooldown":0,"los":0,"team_cooldown":0,"initial_cooldown":0,"template":9},
             "2":{"id":2,"name":"ice","level":9,"min_range":0,"max_range":8,"launch_type":1,"effects":[{"id":1,"value1":17,"value2":2,"turns":0,"targets":31,"type":1}],"cost":4,"area":1,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":15},
             "3":{"id":3,"name":"bandage","level":10,"min_range":0,"max_range":6,"launch_type":1,"effects":[{"id":2,"value1":10,"value2":5,"turns":0,"targets":31,"type":2}],"cost":2,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":1},
             "21":{"id":21,"name":"helmet","level":11,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":6,"value1":15,"value2":0,"turns":2,"targets":30,"type":4}],"cost":3,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":19},
             "7":{"id":7,"name":"rock","level":15,"min_range":2,"max_range":6,"launch_type":1,"effects":[{"id":1,"value1":30,"value2":1,"turns":0,"targets":31,"type":1}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":13},
             "9":{"id":9,"name":"stretching","level":17,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":4,"value1":30,"value2":5,"turns":2,"targets":30,"type":3}],"cost":3,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":27},
             "23":{"id":23,"name":"wall","level":17,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":5,"value1":5,"value2":1,"turns":2,"targets":30,"type":4}],"cost":3,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":21},
             "8":{"id":8,"name":"protein","level":18,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":3,"value1":30,"value2":5,"turns":2,"targets":30,"type":3}],"cost":3,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":24},
             "20":{"id":20,"name":"shield","level":19,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":6,"value1":20,"value2":0,"turns":3,"targets":30,"type":4}],"cost":4,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":18},
             "4":{"id":4,"name":"cure","level":21,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":2,"value1":35,"value2":8,"turns":0,"targets":31,"type":2}],"cost":4,"area":1,"cooldown":2,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":2},
             "15":{"id":15,"name":"motivation","level":24,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":8,"value1":0.4,"value2":0.1,"turns":2,"targets":30,"type":3}],"cost":3,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":33},
             "6":{"id":6,"name":"flash","level":24,"min_range":1,"max_range":7,"launch_type":0,"effects":[{"id":1,"value1":19,"value2":5,"turns":0,"targets":31,"type":1}],"cost":4,"area":3,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":7},
             "14":{"id":14,"name":"leather_boots","level":27,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":7,"value1":0.4,"value2":0.1,"turns":2,"targets":30,"type":3}],"cost":3,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":30},
             "5":{"id":5,"name":"flame","level":29,"min_range":2,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":25,"value2":2,"turns":0,"targets":31,"type":1}],"cost":4,"area":1,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":10},
             "24":{"id":24,"name":"rampart","level":37,"min_range":2,"max_range":7,"launch_type":1,"effects":[{"id":5,"value1":7,"value2":1,"turns":3,"targets":30,"type":4}],"cost":5,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":22},
             "25":{"id":25,"name":"steroid","level":37,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":3,"value1":35,"value2":5,"turns":3,"targets":30,"type":3}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":25},
             "10":{"id":10,"name":"drip","level":45,"min_range":2,"max_range":6,"launch_type":1,"effects":[{"id":2,"value1":35,"value2":5,"turns":0,"targets":31,"type":2}],"cost":5,"area":4,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":3},
             "27":{"id":27,"name":"warm_up","level":47,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":4,"value1":35,"value2":5,"turns":3,"targets":30,"type":3}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":28},
             "73":{"id":73,"name":"puny_bulb","level":52,"min_range":1,"max_range":3,"launch_type":1,"effects":[{"id":14,"value1":1,"value2":0,"turns":0,"targets":31,"type":8}],"cost":6,"area":1,"cooldown":4,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":40},
             "22":{"id":22,"name":"armor","level":55,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":6,"value1":25,"value2":0,"turns":4,"targets":30,"type":4}],"cost":6,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":20},
             "30":{"id":30,"name":"stalactite","level":55,"min_range":2,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":64,"value2":3,"turns":0,"targets":31,"type":1}],"cost":6,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":16},
             "12":{"id":12,"name":"winged_boots","level":65,"min_range":2,"max_range":8,"launch_type":1,"effects":[{"id":7,"value1":0.5,"value2":0.1,"turns":3,"targets":30,"type":3}],"cost":4,"area":3,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":31},
             "11":{"id":11,"name":"vaccine","level":66,"min_range":0,"max_range":6,"launch_type":1,"effects":[{"id":2,"value1":34,"value2":4,"turns":3,"targets":30,"type":2}],"cost":6,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":5},
             "92":{"id":92,"name":"slow_down","level":68,"min_range":1,"max_range":8,"launch_type":1,"effects":[{"id":17,"value1":0.3,"value2":0.1,"turns":1,"targets":31,"type":9}],"cost":3,"area":1,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":55},
             "33":{"id":33,"name":"lightning","level":71,"min_range":2,"max_range":5,"launch_type":0,"effects":[{"id":1,"value1":35,"value2":12,"turns":0,"targets":27,"type":1}],"cost":4,"area":4,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":8},
             "29":{"id":29,"name":"fortress","level":72,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":5,"value1":9,"value2":1,"turns":3,"targets":30,"type":4}],"cost":6,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":23},
             "16":{"id":16,"name":"adrenaline","level":74,"min_range":2,"max_range":8,"launch_type":1,"effects":[{"id":8,"value1":0.5,"value2":0.1,"turns":3,"targets":30,"type":3}],"cost":4,"area":3,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":34},
             "32":{"id":32,"name":"rockfall","level":77,"min_range":5,"max_range":7,"launch_type":1,"effects":[{"id":1,"value1":48,"value2":8,"turns":0,"targets":31,"type":1}],"cost":5,"area":4,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":14},
             "89":{"id":89,"name":"loam","level":79,"min_range":1,"max_range":7,"launch_type":1,"effects":[{"id":12,"value1":35,"value2":5,"turns":0,"targets":22,"type":2}],"cost":5,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":52},
             "34":{"id":34,"name":"liberation","level":80,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":9,"value1":0,"value2":0,"turns":0,"targets":31,"type":5}],"cost":5,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":36},
             "31":{"id":31,"name":"iceberg","level":81,"min_range":3,"max_range":5,"launch_type":0,"effects":[{"id":1,"value1":72,"value2":8,"turns":0,"targets":31,"type":1}],"cost":7,"area":4,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":17},
             "94":{"id":94,"name":"tranquilizer","level":82,"min_range":1,"max_range":8,"launch_type":1,"effects":[{"id":18,"value1":0.3,"value2":0.1,"turns":1,"targets":31,"type":9}],"cost":3,"area":1,"cooldown":0,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":57},
             "35":{"id":35,"name":"regeneration","level":85,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":2,"value1":200,"value2":0,"turns":0,"targets":31,"type":2}],"cost":8,"area":1,"cooldown":-1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":4},
             "88":{"id":88,"name":"whip","level":88,"min_range":2,"max_range":6,"launch_type":1,"effects":[{"id":8,"value1":0.7,"value2":0.1,"turns":2,"targets":22,"type":3}],"cost":4,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":51},
             "67":{"id":67,"name":"armoring","level":90,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":12,"value1":25,"value2":5,"turns":0,"targets":31,"type":2}],"cost":5,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":38},
             "96":{"id":96,"name":"solidification","level":95,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":21,"value1":50,"value2":10,"turns":3,"targets":30,"type":3}],"cost":6,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":60},
             "97":{"id":97,"name":"venom","level":99,"min_range":1,"max_range":10,"launch_type":1,"effects":[{"id":13,"value1":15,"value2":5,"turns":2,"targets":31,"type":7}],"cost":4,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":61},
             "36":{"id":36,"name":"meteorite","level":102,"min_range":4,"max_range":8,"launch_type":1,"effects":[{"id":1,"value1":70,"value2":10,"turns":0,"targets":31,"type":1}],"cost":8,"area":4,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":11},
             "110":{"id":110,"name":"antidote","level":111,"min_range":0,"max_range":4,"launch_type":1,"effects":[{"id":23,"value1":0,"value2":0,"turns":0,"targets":30,"type":5}],"cost":3,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":70},
             "28":{"id":28,"name":"reflexes","level":127,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":4,"value1":40,"value2":5,"turns":3,"targets":30,"type":3}],"cost":7,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":29},
             "76":{"id":76,"name":"rocky_bulb","level":131,"min_range":1,"max_range":3,"launch_type":1,"effects":[{"id":14,"value1":4,"value2":0,"turns":0,"targets":31,"type":8}],"cost":10,"area":1,"cooldown":5,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":43},
             "100":{"id":100,"name":"thorn","level":132,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":20,"value1":3,"value2":1,"turns":3,"targets":30,"type":6}],"cost":4,"area":4,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":64},
             "26":{"id":26,"name":"doping","level":135,"min_range":0,"max_range":5,"launch_type":1,"effects":[{"id":3,"value1":40,"value2":5,"turns":3,"targets":30,"type":3},{"id":25,"value1":40,"value2":5,"turns":0,"targets":30,"type":0}],"cost":7,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":26},
             "91":{"id":91,"name":"acceleration","level":140,"min_range":3,"max_range":8,"launch_type":1,"effects":[{"id":7,"value1":0.7,"value2":0.1,"turns":3,"targets":22,"type":3}],"cost":4,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":54},
             "59":{"id":59,"name":"teleportation","level":150,"min_range":1,"max_range":12,"launch_type":1,"effects":[{"id":10,"value1":0,"value2":0,"turns":0,"targets":31,"type":5}],"cost":7,"area":1,"cooldown":10,"los":0,"team_cooldown":0,"initial_cooldown":1,"template":37},
             "77":{"id":77,"name":"iced_bulb","level":151,"min_range":1,"max_range":2,"launch_type":1,"effects":[{"id":14,"value1":5,"value2":0,"turns":0,"targets":31,"type":8}],"cost":12,"area":1,"cooldown":5,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":44},
             "102":{"id":102,"name":"ferocity","level":152,"min_range":1,"max_range":8,"launch_type":1,"effects":[{"id":3,"value1":60,"value2":10,"turns":2,"targets":22,"type":3}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":66},
             "106":{"id":106,"name":"fracture","level":160,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":19,"value1":20,"value2":5,"turns":2,"targets":31,"type":9},{"id":24,"value1":20,"value2":5,"turns":2,"targets":31,"type":9}],"cost":3,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":59},
             "80":{"id":80,"name":"remission","level":169,"min_range":0,"max_range":7,"launch_type":1,"effects":[{"id":2,"value1":66,"value2":11,"turns":0,"targets":30,"type":2}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":47},
             "85":{"id":85,"name":"devil_strike","level":171,"min_range":0,"max_range":0,"launch_type":1,"effects":[{"id":1,"value1":25,"value2":0,"turns":0,"targets":31,"type":1},{"id":1,"value1":25,"value2":0,"turns":0,"targets":31,"type":1},{"id":1,"value1":25,"value2":0,"turns":0,"targets":31,"type":1},{"id":1,"value1":25,"value2":0,"turns":0,"targets":31,"type":1},{"id":1,"value1":25,"value2":0,"turns":0,"targets":31,"type":1}],"cost":6,"area":5,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":50},
             "75":{"id":75,"name":"healer_bulb","level":174,"min_range":1,"max_range":2,"launch_type":1,"effects":[{"id":14,"value1":3,"value2":0,"turns":0,"targets":31,"type":8}],"cost":14,"area":1,"cooldown":7,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":42},
             "13":{"id":13,"name":"seven_league_boots","level":175,"min_range":0,"max_range":2,"launch_type":1,"effects":[{"id":7,"value1":0.5,"value2":0.1,"turns":3,"targets":14,"type":3}],"cost":6,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":32},
             "90":{"id":90,"name":"fertilizer","level":180,"min_range":1,"max_range":5,"launch_type":1,"effects":[{"id":12,"value1":80,"value2":10,"turns":0,"targets":22,"type":2}],"cost":6,"area":1,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":53},
             "103":{"id":103,"name":"collar","level":182,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":22,"value1":60,"value2":10,"turns":2,"targets":22,"type":3}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":67},
             "17":{"id":17,"name":"rage","level":196,"min_range":0,"max_range":3,"launch_type":1,"effects":[{"id":8,"value1":0.5,"value2":0.1,"turns":4,"targets":14,"type":3}],"cost":6,"area":1,"cooldown":5,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":35},
             "98":{"id":98,"name":"toxin","level":198,"min_range":1,"max_range":7,"launch_type":1,"effects":[{"id":13,"value1":25,"value2":10,"turns":3,"targets":31,"type":7}],"cost":5,"area":3,"cooldown":3,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":62},
             "93":{"id":93,"name":"ball_and_chain","level":199,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":17,"value1":0.4,"value2":0.1,"turns":2,"targets":31,"type":9}],"cost":5,"area":4,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":56},
             "105":{"id":105,"name":"burning","level":210,"min_range":4,"max_range":6,"launch_type":1,"effects":[{"id":1,"value1":78,"value2":9,"turns":0,"targets":21,"type":1},{"id":16,"value1":0,"value2":0,"turns":0,"targets":22,"type":1}],"cost":5,"area":5,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":69},
             "79":{"id":79,"name":"metallic_bulb","level":221,"min_range":1,"max_range":1,"launch_type":1,"effects":[{"id":14,"value1":7,"value2":0,"turns":0,"targets":31,"type":8}],"cost":16,"area":1,"cooldown":7,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":46},
             "68":{"id":68,"name":"inversion","level":222,"min_range":1,"max_range":16,"launch_type":0,"effects":[{"id":11,"value1":0,"value2":0,"turns":0,"targets":31,"type":5},{"id":2,"value1":50,"value2":0,"turns":0,"targets":30,"type":2},{"id":26,"value1":20,"value2":0,"turns":1,"targets":29,"type":0}],"cost":4,"area":1,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":1,"template":39},
             "95":{"id":95,"name":"soporific","level":230,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":18,"value1":0.4,"value2":0.1,"turns":2,"targets":31,"type":9}],"cost":5,"area":4,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":58},
             "104":{"id":104,"name":"bark","level":234,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":21,"value1":60,"value2":10,"turns":2,"targets":22,"type":3}],"cost":5,"area":1,"cooldown":1,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":68},
             "74":{"id":74,"name":"fire_bulb","level":250,"min_range":2,"max_range":3,"launch_type":1,"effects":[{"id":14,"value1":2,"value2":0,"turns":0,"targets":31,"type":8}],"cost":16,"area":1,"cooldown":6,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":41},
             "101":{"id":101,"name":"mirror","level":256,"min_range":0,"max_range":2,"launch_type":1,"effects":[{"id":20,"value1":5,"value2":1,"turns":3,"targets":30,"type":6}],"cost":5,"area":4,"cooldown":2,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":65},
             "81":{"id":81,"name":"carapace","level":259,"min_range":1,"max_range":6,"launch_type":1,"effects":[{"id":6,"value1":55,"value2":0,"turns":3,"targets":22,"type":4}],"cost":5,"area":1,"cooldown":2,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":48},
             "78":{"id":78,"name":"lightning_bulb","level":289,"min_range":1,"max_range":5,"launch_type":1,"effects":[{"id":14,"value1":6,"value2":0,"turns":0,"targets":31,"type":8}],"cost":16,"area":1,"cooldown":6,"los":1,"team_cooldown":1,"initial_cooldown":0,"template":45},
             "99":{"id":99,"name":"plague","level":297,"min_range":1,"max_range":5,"launch_type":1,"effects":[{"id":13,"value1":40,"value2":10,"turns":4,"targets":31,"type":7}],"cost":6,"area":5,"cooldown":4,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":63},
             "84":{"id":84,"name":"resurrection","level":301,"min_range":1,"max_range":20,"launch_type":1,"effects":[{"id":15,"value1":0,"value2":0,"turns":0,"targets":31,"type":2}],"cost":15,"area":1,"cooldown":10,"los":1,"team_cooldown":0,"initial_cooldown":0,"template":49}};

