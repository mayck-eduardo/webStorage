// --- 1. ESTRUTURA DE DADOS COMPLETA (66 Livros / 1189 Capítulos) ---

// NOTA: A estrutura BIBLE_STRUCTURE permanece a mesma, pois as chaves "gn 1", "ex 2"
// são essenciais para o JSON de backup e para a lógica interna. A mudança é apenas na exibição.

const BIBLE_STRUCTURE = {
    "GENESIS": {
        "gn 1": false, "gn 2": false, "gn 3": false, "gn 4": false, "gn 5": false, "gn 6": false, "gn 7": false, "gn 8": false, "gn 9": false, "gn 10": false, "gn 11": false, "gn 12": false, "gn 13": false, "gn 14": false, "gn 15": false, "gn 16": false, "gn 17": false, "gn 18": false, "gn 19": false, "gn 20": false, "gn 21": false, "gn 22": false, "gn 23": false, "gn 24": false, "gn 25": false, "gn 26": false, "gn 27": false, "gn 28": false, "gn 29": false, "gn 30": false, "gn 31": false, "gn 32": false, "gn 33": false, "gn 34": false, "gn 35": false, "gn 36": false, "gn 37": false, "gn 38": false, "gn 39": false, "gn 40": false, "gn 41": false, "gn 42": false, "gn 43": false, "gn 44": false, "gn 45": false, "gn 46": false, "gn 47": false, "gn 48": false, "gn 49": false, "gn 50": false
    },
    "ÊXODO": {
        "ex 1": false, "ex 2": false, "ex 3": false, "ex 4": false, "ex 5": false, "ex 6": false, "ex 7": false, "ex 8": false, "ex 9": false, "ex 10": false, "ex 11": false, "ex 12": false, "ex 13": false, "ex 14": false, "ex 15": false, "ex 16": false, "ex 17": false, "ex 18": false, "ex 19": false, "ex 20": false, "ex 21": false, "ex 22": false, "ex 23": false, "ex 24": false, "ex 25": false, "ex 26": false, "ex 27": false, "ex 28": false, "ex 29": false, "ex 30": false, "ex 31": false, "ex 32": false, "ex 33": false, "ex 34": false, "ex 35": false, "ex 36": false, "ex 37": false, "ex 38": false, "ex 39": false, "ex 40": false
    },
    "LEVÍTICO": {
        "lv 1": false, "lv 2": false, "lv 3": false, "lv 4": false, "lv 5": false, "lv 6": false, "lv 7": false, "lv 8": false, "lv 9": false, "lv 10": false, "lv 11": false, "lv 12": false, "lv 13": false, "lv 14": false, "lv 15": false, "lv 16": false, "lv 17": false, "lv 18": false, "lv 19": false, "lv 20": false, "lv 21": false, "lv 22": false, "lv 23": false, "lv 24": false, "lv 25": false, "lv 26": false, "lv 27": false
    },
    "NÚMEROS": {
        "nm 1": false, "nm 2": false, "nm 3": false, "nm 4": false, "nm 5": false, "nm 6": false, "nm 7": false, "nm 8": false, "nm 9": false, "nm 10": false, "nm 11": false, "nm 12": false, "nm 13": false, "nm 14": false, "nm 15": false, "nm 16": false, "nm 17": false, "nm 18": false, "nm 19": false, "nm 20": false, "nm 21": false, "nm 22": false, "nm 23": false, "nm 24": false, "nm 25": false, "nm 26": false, "nm 27": false, "nm 28": false, "nm 29": false, "nm 30": false, "nm 31": false, "nm 32": false, "nm 33": false, "nm 34": false, "nm 35": false, "nm 36": false
    },
    "DEUTERONÔMIO": {
        "dt 1": false, "dt 2": false, "dt 3": false, "dt 4": false, "dt 5": false, "dt 6": false, "dt 7": false, "dt 8": false, "dt 9": false, "dt 10": false, "dt 11": false, "dt 12": false, "dt 13": false, "dt 14": false, "dt 15": false, "dt 16": false, "dt 17": false, "dt 18": false, "dt 19": false, "dt 20": false, "dt 21": false, "dt 22": false, "dt 23": false, "dt 24": false, "dt 25": false, "dt 26": false, "dt 27": false, "dt 28": false, "dt 29": false, "dt 30": false, "dt 31": false, "dt 32": false, "dt 33": false, "dt 34": false
    },
    "JOSUÉ": {
        "js 1": false, "js 2": false, "js 3": false, "js 4": false, "js 5": false, "js 6": false, "js 7": false, "js 8": false, "js 9": false, "js 10": false, "js 11": false, "js 12": false, "js 13": false, "js 14": false, "js 15": false, "js 16": false, "js 17": false, "js 18": false, "js 19": false, "js 20": false, "js 21": false, "js 22": false, "js 23": false, "js 24": false
    },
    "JUÍZES": {
        "jz 1": false, "jz 2": false, "jz 3": false, "jz 4": false, "jz 5": false, "jz 6": false, "jz 7": false, "jz 8": false, "jz 9": false, "jz 10": false, "jz 11": false, "jz 12": false, "jz 13": false, "jz 14": false, "jz 15": false, "jz 16": false, "jz 17": false, "jz 18": false, "jz 19": false, "jz 20": false, "jz 21": false
    },
    "RUTE": {
        "rt 1": false, "rt 2": false, "rt 3": false, "rt 4": false
    },
    "1 SAMUEL": {
        "1sm 1": false, "1sm 2": false, "1sm 3": false, "1sm 4": false, "1sm 5": false, "1sm 6": false, "1sm 7": false, "1sm 8": false, "1sm 9": false, "1sm 10": false, "1sm 11": false, "1sm 12": false, "1sm 13": false, "1sm 14": false, "1sm 15": false, "1sm 16": false, "1sm 17": false, "1sm 18": false, "1sm 19": false, "1sm 20": false, "1sm 21": false, "1sm 22": false, "1sm 23": false, "1sm 24": false, "1sm 25": false, "1sm 26": false, "1sm 27": false, "1sm 28": false, "1sm 29": false, "1sm 30": false, "1sm 31": false
    },
    "2 SAMUEL": {
        "2sm 1": false, "2sm 2": false, "2sm 3": false, "2sm 4": false, "2sm 5": false, "2sm 6": false, "2sm 7": false, "2sm 8": false, "2sm 9": false, "2sm 10": false, "2sm 11": false, "2sm 12": false, "2sm 13": false, "2sm 14": false, "2sm 15": false, "2sm 16": false, "2sm 17": false, "2sm 18": false, "2sm 19": false, "2sm 20": false, "2sm 21": false, "2sm 22": false, "2sm 23": false, "2sm 24": false
    },
    "1 REIS": {
        "1rs 1": false, "1rs 2": false, "1rs 3": false, "1rs 4": false, "1rs 5": false, "1rs 6": false, "1rs 7": false, "1rs 8": false, "1rs 9": false, "1rs 10": false, "1rs 11": false, "1rs 12": false, "1rs 13": false, "1rs 14": false, "1rs 15": false, "1rs 16": false, "1rs 17": false, "1rs 18": false, "1rs 19": false, "1rs 20": false, "1rs 21": false, "1rs 22": false
    },
    "2 REIS": {
        "2rs 1": false, "2rs 2": false, "2rs 3": false, "2rs 4": false, "2rs 5": false, "2rs 6": false, "2rs 7": false, "2rs 8": false, "2rs 9": false, "2rs 10": false, "2rs 11": false, "2rs 12": false, "2rs 13": false, "2rs 14": false, "2rs 15": false, "2rs 16": false, "2rs 17": false, "2rs 18": false, "2rs 19": false, "2rs 20": false, "2rs 21": false, "2rs 22": false, "2rs 23": false, "2rs 24": false, "2rs 25": false
    },
    "1 CRÔNICAS": {
        "1cr 1": false, "1cr 2": false, "1cr 3": false, "1cr 4": false, "1cr 5": false, "1cr 6": false, "1cr 7": false, "1cr 8": false, "1cr 9": false, "1cr 10": false, "1cr 11": false, "1cr 12": false, "1cr 13": false, "1cr 14": false, "1cr 15": false, "1cr 16": false, "1cr 17": false, "1cr 18": false, "1cr 19": false, "1cr 20": false, "1cr 21": false, "1cr 22": false, "1cr 23": false, "1cr 24": false, "1cr 25": false, "1cr 26": false, "1cr 27": false, "1cr 28": false, "1cr 29": false
    },
    "2 CRÔNICAS": {
        "2cr 1": false, "2cr 2": false, "2cr 3": false, "2cr 4": false, "2cr 5": false, "2cr 6": false, "2cr 7": false, "2cr 8": false, "2cr 9": false, "2cr 10": false, "2cr 11": false, "2cr 12": false, "2cr 13": false, "2cr 14": false, "2cr 15": false, "2cr 16": false, "2cr 17": false, "2cr 18": false, "2cr 19": false, "2cr 20": false, "2cr 21": false, "2cr 22": false, "2cr 23": false, "2cr 24": false, "2cr 25": false, "2cr 26": false, "2cr 27": false, "2cr 28": false, "2cr 29": false, "2cr 30": false, "2cr 31": false, "2cr 32": false, "2cr 33": false, "2cr 34": false, "2cr 35": false, "2cr 36": false
    },
    "ESDRAS": {
        "ed 1": false, "ed 2": false, "ed 3": false, "ed 4": false, "ed 5": false, "ed 6": false, "ed 7": false, "ed 8": false, "ed 9": false, "ed 10": false
    },
    "NEEMIAS": {
        "ne 1": false, "ne 2": false, "ne 3": false, "ne 4": false, "ne 5": false, "ne 6": false, "ne 7": false, "ne 8": false, "ne 9": false, "ne 10": false, "ne 11": false, "ne 12": false, "ne 13": false
    },
    "ESTER": {
        "et 1": false, "et 2": false, "et 3": false, "et 4": false, "et 5": false, "et 6": false, "et 7": false, "et 8": false, "et 9": false, "et 10": false
    },
    "JÓ": {
        "jó 1": false, "jó 2": false, "jó 3": false, "jó 4": false, "jó 5": false, "jó 6": false, "jó 7": false, "jó 8": false, "jó 9": false, "jó 10": false, "jó 11": false, "jó 12": false, "jó 13": false, "jó 14": false, "jó 15": false, "jó 16": false, "jó 17": false, "jó 18": false, "jó 19": false, "jó 20": false, "jó 21": false, "jó 22": false, "jó 23": false, "jó 24": false, "jó 25": false, "jó 26": false, "jó 27": false, "jó 28": false, "jó 29": false, "jó 30": false, "jó 31": false, "jó 32": false, "jó 33": false, "jó 34": false, "jó 35": false, "jó 36": false, "jó 37": false, "jó 38": false, "jó 39": false, "jó 40": false, "jó 41": false, "jó 42": false
    },
    "SALMOS": {
        "sl 1": false, "sl 2": false, "sl 3": false, "sl 4": false, "sl 5": false, "sl 6": false, "sl 7": false, "sl 8": false, "sl 9": false, "sl 10": false, "sl 11": false, "sl 12": false, "sl 13": false, "sl 14": false, "sl 15": false, "sl 16": false, "sl 17": false, "sl 18": false, "sl 19": false, "sl 20": false, "sl 21": false, "sl 22": false, "sl 23": false, "sl 24": false, "sl 25": false, "sl 26": false, "sl 27": false, "sl 28": false, "sl 29": false, "sl 30": false, "sl 31": false, "sl 32": false, "sl 33": false, "sl 34": false, "sl 35": false, "sl 36": false, "sl 37": false, "sl 38": false, "sl 39": false, "sl 40": false, "sl 41": false, "sl 42": false, "sl 43": false, "sl 44": false, "sl 45": false, "sl 46": false, "sl 47": false, "sl 48": false, "sl 49": false, "sl 50": false, "sl 51": false, "sl 52": false, "sl 53": false, "sl 54": false, "sl 55": false, "sl 56": false, "sl 57": false, "sl 58": false, "sl 59": false, "sl 60": false, "sl 61": false, "sl 62": false, "sl 63": false, "sl 64": false, "sl 65": false, "sl 66": false, "sl 67": false, "sl 68": false, "sl 69": false, "sl 70": false, "sl 71": false, "sl 72": false, "sl 73": false, "sl 74": false, "sl 75": false, "sl 76": false, "sl 77": false, "sl 78": false, "sl 79": false, "sl 80": false, "sl 81": false, "sl 82": false, "sl 83": false, "sl 84": false, "sl 85": false, "sl 86": false, "sl 87": false, "sl 88": false, "sl 89": false, "sl 90": false, "sl 91": false, "sl 92": false, "sl 93": false, "sl 94": false, "sl 95": false, "sl 96": false, "sl 97": false, "sl 98": false, "sl 99": false, "sl 100": false, "sl 101": false, "sl 102": false, "sl 103": false, "sl 104": false, "sl 105": false, "sl 106": false, "sl 107": false, "sl 108": false, "sl 109": false, "sl 110": false, "sl 111": false, "sl 112": false, "sl 113": false, "sl 114": false, "sl 115": false, "sl 116": false, "sl 117": false, "sl 118": false, "sl 119": false, "sl 120": false, "sl 121": false, "sl 122": false, "sl 123": false, "sl 124": false, "sl 125": false, "sl 126": false, "sl 127": false, "sl 128": false, "sl 129": false, "sl 130": false, "sl 131": false, "sl 132": false, "sl 133": false, "sl 134": false, "sl 135": false, "sl 136": false, "sl 137": false, "sl 138": false, "sl 139": false, "sl 140": false, "sl 141": false, "sl 142": false, "sl 143": false, "sl 144": false, "sl 145": false, "sl 146": false, "sl 147": false, "sl 148": false, "sl 149": false, "sl 150": false
    },
    "PROVÉRBIOS": {
        "pv 1": false, "pv 2": false, "pv 3": false, "pv 4": false, "pv 5": false, "pv 6": false, "pv 7": false, "pv 8": false, "pv 9": false, "pv 10": false, "pv 11": false, "pv 12": false, "pv 13": false, "pv 14": false, "pv 15": false, "pv 16": false, "pv 17": false, "pv 18": false, "pv 19": false, "pv 20": false, "pv 21": false, "pv 22": false, "pv 23": false, "pv 24": false, "pv 25": false, "pv 26": false, "pv 27": false, "pv 28": false, "pv 29": false, "pv 30": false, "pv 31": false
    },
    "ECLESIASTES": {
        "ec 1": false, "ec 2": false, "ec 3": false, "ec 4": false, "ec 5": false, "ec 6": false, "ec 7": false, "ec 8": false, "ec 9": false, "ec 10": false, "ec 11": false, "ec 12": false
    },
    "CANTARES": {
        "ct 1": false, "ct 2": false, "ct 3": false, "ct 4": false, "ct 5": false, "ct 6": false, "ct 7": false, "ct 8": false
    },
    "ISAÍAS": {
        "is 1": false, "is 2": false, "is 3": false, "is 4": false, "is 5": false, "is 6": false, "is 7": false, "is 8": false, "is 9": false, "is 10": false, "is 11": false, "is 12": false, "is 13": false, "is 14": false, "is 15": false, "is 16": false, "is 17": false, "is 18": false, "is 19": false, "is 20": false, "is 21": false, "is 22": false, "is 23": false, "is 24": false, "is 25": false, "is 26": false, "is 27": false, "is 28": false, "is 29": false, "is 30": false, "is 31": false, "is 32": false, "is 33": false, "is 34": false, "is 35": false, "is 36": false, "is 37": false, "is 38": false, "is 39": false, "is 40": false, "is 41": false, "is 42": false, "is 43": false, "is 44": false, "is 45": false, "is 46": false, "is 47": false, "is 48": false, "is 49": false, "is 50": false, "is 51": false, "is 52": false, "is 53": false, "is 54": false, "is 55": false, "is 56": false, "is 57": false, "is 58": false, "is 59": false, "is 60": false, "is 61": false, "is 62": false, "is 63": false, "is 64": false, "is 65": false, "is 66": false
    },
    "JEREMIAS": {
        "jr 1": false, "jr 2": false, "jr 3": false, "jr 4": false, "jr 5": false, "jr 6": false, "jr 7": false, "jr 8": false, "jr 9": false, "jr 10": false, "jr 11": false, "jr 12": false, "jr 13": false, "jr 14": false, "jr 15": false, "jr 16": false, "jr 17": false, "jr 18": false, "jr 19": false, "jr 20": false, "jr 21": false, "jr 22": false, "jr 23": false, "jr 24": false, "jr 25": false, "jr 26": false, "jr 27": false, "jr 28": false, "jr 29": false, "jr 30": false, "jr 31": false, "jr 32": false, "jr 33": false, "jr 34": false, "jr 35": false, "jr 36": false, "jr 37": false, "jr 38": false, "jr 39": false, "jr 40": false, "jr 41": false, "jr 42": false, "jr 43": false, "jr 44": false, "jr 45": false, "jr 46": false, "jr 47": false, "jr 48": false, "jr 49": false, "jr 50": false, "jr 51": false, "jr 52": false
    },
    "LAMENTAÇÕES": {
        "lm 1": false, "lm 2": false, "lm 3": false, "lm 4": false, "lm 5": false
    },
    "EZEQUIEL": {
        "ez 1": false, "ez 2": false, "ez 3": false, "ez 4": false, "ez 5": false, "ez 6": false, "ez 7": false, "ez 8": false, "ez 9": false, "ez 10": false, "ez 11": false, "ez 12": false, "ez 13": false, "ez 14": false, "ez 15": false, "ez 16": false, "ez 17": false, "ez 18": false, "ez 19": false, "ez 20": false, "ez 21": false, "ez 22": false, "ez 23": false, "ez 24": false, "ez 25": false, "ez 26": false, "ez 27": false, "ez 28": false, "ez 29": false, "ez 30": false, "ez 31": false, "ez 32": false, "ez 33": false, "ez 34": false, "ez 35": false, "ez 36": false, "ez 37": false, "ez 38": false, "ez 39": false, "ez 40": false, "ez 41": false, "ez 42": false, "ez 43": false, "ez 44": false, "ez 45": false, "ez 46": false, "ez 47": false, "ez 48": false
    },
    "DANIEL": {
        "dn 1": false, "dn 2": false, "dn 3": false, "dn 4": false, "dn 5": false, "dn 6": false, "dn 7": false, "dn 8": false, "dn 9": false, "dn 10": false, "dn 11": false, "dn 12": false
    },
    "OSÉIAS": {
        "os 1": false, "os 2": false, "os 3": false, "os 4": false, "os 5": false, "os 6": false, "os 7": false, "os 8": false, "os 9": false, "os 10": false, "os 11": false, "os 12": false, "os 13": false, "os 14": false
    },
    "JOEL": {
        "jl 1": false, "jl 2": false, "jl 3": false
    },
    "AMÓS": {
        "am 1": false, "am 2": false, "am 3": false, "am 4": false, "am 5": false, "am 6": false, "am 7": false, "am 8": false, "am 9": false
    },
    "OBADIAS": {
        "ob 1": false
    },
    "JONAS": {
        "jn 1": false, "jn 2": false, "jn 3": false, "jn 4": false
    },
    "MIQUEIAS": {
        "mq 1": false, "mq 2": false, "mq 3": false, "mq 4": false, "mq 5": false, "mq 6": false, "mq 7": false
    },
    "NAUM": {
        "na 1": false, "na 2": false, "na 3": false
    },
    "HABACUQUE": {
        "hc 1": false, "hc 2": false, "hc 3": false
    },
    "SOFONIAS": {
        "sf 1": false, "sf 2": false, "sf 3": false
    },
    "AGEU": {
        "ag 1": false, "ag 2": false
    },
    "ZACARIAS": {
        "zc 1": false, "zc 2": false, "zc 3": false, "zc 4": false, "zc 5": false, "zc 6": false, "zc 7": false, "zc 8": false, "zc 9": false, "zc 10": false, "zc 11": false, "zc 12": false, "zc 13": false, "zc 14": false
    },
    "MALAQUIAS": {
        "ml 1": false, "ml 2": false, "ml 3": false, "ml 4": false
    },
    "MATEUS": {
        "mt 1": false, "mt 2": false, "mt 3": false, "mt 4": false, "mt 5": false, "mt 6": false, "mt 7": false, "mt 8": false, "mt 9": false, "mt 10": false, "mt 11": false, "mt 12": false, "mt 13": false, "mt 14": false, "mt 15": false, "mt 16": false, "mt 17": false, "mt 18": false, "mt 19": false, "mt 20": false, "mt 21": false, "mt 22": false, "mt 23": false, "mt 24": false, "mt 25": false, "mt 26": false, "mt 27": false, "mt 28": false
    },
    "MARCOS": {
        "mc 1": false, "mc 2": false, "mc 3": false, "mc 4": false, "mc 5": false, "mc 6": false, "mc 7": false, "mc 8": false, "mc 9": false, "mc 10": false, "mc 11": false, "mc 12": false, "mc 13": false, "mc 14": false, "mc 15": false, "mc 16": false
    },
    "LUCAS": {
        "lc 1": false, "lc 2": false, "lc 3": false, "lc 4": false, "lc 5": false, "lc 6": false, "lc 7": false, "lc 8": false, "lc 9": false, "lc 10": false, "lc 11": false, "lc 12": false, "lc 13": false, "lc 14": false, "lc 15": false, "lc 16": false, "lc 17": false, "lc 18": false, "lc 19": false, "lc 20": false, "lc 21": false, "lc 22": false, "lc 23": false, "lc 24": false
    },
    "JOÃO": {
        "jo 1": false, "jo 2": false, "jo 3": false, "jo 4": false, "jo 5": false, "jo 6": false, "jo 7": false, "jo 8": false, "jo 9": false, "jo 10": false, "jo 11": false, "jo 12": false, "jo 13": false, "jo 14": false, "jo 15": false, "jo 16": false, "jo 17": false, "jo 18": false, "jo 19": false, "jo 20": false, "jo 21": false
    },
    "ATOS DOS APÓSTOLOS": {
        "at 1": false, "at 2": false, "at 3": false, "at 4": false, "at 5": false, "at 6": false, "at 7": false, "at 8": false, "at 9": false, "at 10": false, "at 11": false, "at 12": false, "at 13": false, "at 14": false, "at 15": false, "at 16": false, "at 17": false, "at 18": false, "at 19": false, "at 20": false, "at 21": false, "at 22": false, "at 23": false, "at 24": false, "at 25": false, "at 26": false, "at 27": false, "at 28": false
    },
    "ROMANOS": {
        "rm 1": false, "rm 2": false, "rm 3": false, "rm 4": false, "rm 5": false, "rm 6": false, "rm 7": false, "rm 8": false, "rm 9": false, "rm 10": false, "rm 11": false, "rm 12": false, "rm 13": false, "rm 14": false, "rm 15": false, "rm 16": false
    },
    "1 CORÍNTIOS": {
        "1co 1": false, "1co 2": false, "1co 3": false, "1co 4": false, "1co 5": false, "1co 6": false, "1co 7": false, "1co 8": false, "1co 9": false, "1co 10": false, "1co 11": false, "1co 12": false, "1co 13": false, "1co 14": false, "1co 15": false, "1co 16": false
    },
    "2 CORÍNTIOS": {
        "2co 1": false, "2co 2": false, "2co 3": false, "2co 4": false, "2co 5": false, "2co 6": false, "2co 7": false, "2co 8": false, "2co 9": false, "2co 10": false, "2co 11": false, "2co 12": false, "2co 13": false
    },
    "GÁLATAS": {
        "gl 1": false, "gl 2": false, "gl 3": false, "gl 4": false, "gl 5": false, "gl 6": false
    },
    "EFÉSIOS": {
        "ef 1": false, "ef 2": false, "ef 3": false, "ef 4": false, "ef 5": false, "ef 6": false
    },
    "FILIPENSES": {
        "fp 1": false, "fp 2": false, "fp 3": false, "fp 4": false
    },
    "COLOSSENSES": {
        "cl 1": false, "cl 2": false, "cl 3": false, "cl 4": false
    },
    "1 TESSALONICENSES": {
        "1ts 1": false, "1ts 2": false, "1ts 3": false, "1ts 4": false, "1ts 5": false
    },
    "2 TESSALONICENSES": {
        "2ts 1": false, "2ts 2": false, "2ts 3": false
    },
    "1 TIMÓTEO": {
        "1tm 1": false, "1tm 2": false, "1tm 3": false, "1tm 4": false, "1tm 5": false, "1tm 6": false
    },
    "2 TIMÓTEO": {
        "2tm 1": false, "2tm 2": false, "2tm 3": false, "2tm 4": false
    },
    "TITO": {
        "tt 1": false, "tt 2": false, "tt 3": false
    },
    "FILEMOM": {
        "fm 1": false
    },
    "HEBREUS": {
        "hb 1": false, "hb 2": false, "hb 3": false, "hb 4": false, "hb 5": false, "hb 6": false, "hb 7": false, "hb 8": false, "hb 9": false, "hb 10": false, "hb 11": false, "hb 12": false, "hb 13": false
    },
    "TIAGO": {
        "tg 1": false, "tg 2": false, "tg 3": false, "tg 4": false, "tg 5": false
    },
    "1 PEDRO": {
        "1pe 1": false, "1pe 2": false, "1pe 3": false, "1pe 4": false, "1pe 5": false
    },
    "2 PEDRO": {
        "2pe 1": false, "2pe 2": false, "2pe 3": false
    },
    "1 JOÃO": {
        "1jo 1": false, "1jo 2": false, "1jo 3": false, "1jo 4": false, "1jo 5": false
    },
    "2 JOÃO": {
        "2jo 1": false
    },
    "3 JOÃO": {
        "3jo 1": false
    },
    "JUDAS": {
        "jd 1": false
    },
    "APOCALIPSE": {
        "ap 1": false, "ap 2": false, "ap 3": false, "ap 4": false, "ap 5": false, "ap 6": false, "ap 7": false, "ap 8": false, "ap 9": false, "ap 10": false, "ap 11": false, "ap 12": false, "ap 13": false, "ap 14": false, "ap 15": false, "ap 16": false, "ap 17": false, "ap 18": false, "ap 19": false, "ap 20": false, "ap 21": false, "ap 22": false
    }
};

let progressData = {};
const TOTAL_CHAPTERS = 1189; 

// --- 2. FUNÇÕES DE ARMAZENAMENTO E CÁLCULO (sem alterações) ---

function loadProgress() {
    const savedData = localStorage.getItem('bibleProgress');
    if (savedData) {
        try {
            progressData = JSON.parse(savedData);
        } catch (e) {
            console.error("Erro ao carregar progresso do localStorage:", e);
            progressData = BIBLE_STRUCTURE;
        }
    } else {
        progressData = BIBLE_STRUCTURE; 
    }
    updateUI();
}

function saveProgress() {
    localStorage.setItem('bibleProgress', JSON.stringify(progressData));
    updateUI(); 
}

function calculateProgress() {
    let chaptersRead = 0;
    if (Object.keys(progressData).length === 0) return { chaptersRead: 0, percentage: "0.00" };

    for (const book in progressData) {
        if (progressData.hasOwnProperty(book) && typeof progressData[book] === 'object') {
            for (const chapter in progressData[book]) {
                if (progressData[book][chapter] === true) {
                    chaptersRead++;
                }
            }
        }
    }
    const percentage = (chaptersRead / TOTAL_CHAPTERS) * 100;
    return { chaptersRead, percentage: percentage.toFixed(2) };
}

// --- NOVO: FUNÇÃO PARA MARCAR LIVRO INTEIRO ---

function toggleBookStatus(bookName) {
    // 1. Verifica o status atual do livro: Se todos os capítulos estão lidos, o novo status será FALSE.
    // Se pelo menos um não estiver lido, o novo status será TRUE (lido).
    const chapters = progressData[bookName];
    if (!chapters) return; // Garante que o livro existe

    // Verifica se todos estão TRUE (lidos)
    const isBookComplete = Object.values(chapters).every(status => status === true);
    
    // O novo status será o oposto do status completo
    const newStatus = !isBookComplete;

    // 2. Aplica o novo status a todos os capítulos
    for (const chapterKey in chapters) {
        chapters[chapterKey] = newStatus;
    }

    saveProgress(); // Salva e atualiza UI
    // O alert é opcional, mas útil para feedback imediato no celular:
    alert(`Livro "${bookName}" marcado como ${newStatus ? 'LIDO' : 'NÃO LIDO'}.`);
}


// --- 3. FUNÇÕES DE INTERFACE (UI) (ALTERADA) ---

function updateUI() {
    const { chaptersRead, percentage } = calculateProgress();
    const progressFill = document.getElementById('progressFill');
    
    // Atualiza barra de progresso
    progressFill.style.width = percentage + '%';
    progressFill.textContent = `${percentage}% (${chaptersRead}/${TOTAL_CHAPTERS})`;

    renderChapters(); 
}

function renderChapters() {
    const container = document.getElementById('booksContainer');
    container.innerHTML = ''; 

    for (const bookName in progressData) {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        
        const chapters = progressData[bookName];
        const chapterCount = Object.keys(chapters).length;
        const readCount = Object.values(chapters).filter(c => c === true).length;
        const isBookComplete = readCount === chapterCount;
        
        // CUIDADO: O innerHTML é usado aqui para simplificar a injeção do botão.
        bookDiv.innerHTML = `
            <h3 style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                ${bookName} 
                <small>(${readCount}/${chapterCount})</small>
            </h3>
            <button 
                onclick="toggleBookStatus('${bookName}')" 
                style="
                    padding: 8px 12px; 
                    margin-bottom: 15px;
                    border: none;
                    border-radius: 5px;
                    background-color: ${isBookComplete ? '#E57373' : '#66BB6A'};
                    color: white;
                    cursor: pointer;
                    font-weight: bold;
                "
            >
                ${isBookComplete ? 'NÃO LIDO' : 'LIDO'}
            </button>
            <div id="${bookName.replace(/\s/g, '_')}Chapters"></div>
        `;

        const chaptersContainer = bookDiv.querySelector(`#${bookName.replace(/\s/g, '_')}Chapters`);

        for (const chapterKey in chapters) {
            const chapterButton = document.createElement('span');
            chapterButton.className = 'chapter-btn';
            
            // ALTERAÇÃO AQUI: Remove a sigla e mantém apenas o número
            const chapterNumber = chapterKey.split(' ')[1]; 
            chapterButton.textContent = chapterNumber; 

            if (progressData[bookName][chapterKey] === true) {
                chapterButton.classList.add('read');
            }

            // Adiciona o evento de clique para marcar/desmarcar
            chapterButton.onclick = (function(bName, cKey) {
                return function() {
                    progressData[bName][cKey] = !progressData[bName][cKey];
                    saveProgress(); 
                };
            })(bookName, chapterKey);

            chaptersContainer.appendChild(chapterButton);
        }
        container.appendChild(bookDiv);
    }
}

// --- 4. FUNÇÃO DE BACKUP (EXPORTAR) (sem alterações) ---

function downloadJson() {
    const dataStr = JSON.stringify(progressData, null, 4);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = 'bible_progress_backup.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
    alert("Backup 'bible_progress_backup.json' gerado e baixado.");
}

// --- 5. FUNÇÃO DE IMPORTAÇÃO (UPLOAD) (sem alterações) ---

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (confirm("Tem certeza que deseja substituir o progresso atual com o arquivo importado?")) {
                progressData = importedData;
                localStorage.setItem('bibleProgress', JSON.stringify(progressData));
                updateUI();
                alert("Progresso importado com sucesso!");
            }
        } catch (error) {
            alert("Erro: O arquivo não é um JSON válido ou a estrutura está incorreta.");
            console.error("Erro na importação:", error);
        }
    };
    reader.readAsText(file);
    event.target.value = null; 
}

// --- 6. INICIALIZAÇÃO ---
window.onload = loadProgress;