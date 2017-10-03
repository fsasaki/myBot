var accesstokens = require('./accesstokens');

var config = {};

config.accessTokenAPIAI = accesstokens.accessTokenAPIAI;
config.baseUrlAPIAPI = "https://api.api.ai/v1/";
config.slackbottoken = accesstokens.slackbottoken;
config.waitmessage = {"en" : "I will check, hold on.", "de" : "Ich werde das überprüfen, einen Moment"};
config.languageconfirmation =  {"en" : "You can now talk to me in English.", "de" : "Du kannst jetzt auf Deutsch mit mir sprechen."};
config.endpoint = "http://dbpedia.org/sparql?format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&query=";
config.queries = ["SELECT ?city ?population WHERE { ?city rdfs:label '@@@placeholder@@@'@en. ?city <http://dbpedia.org/ontology/populationTotal> ?population } LIMIT 10", "SELECT ?person ?birthday WHERE { ?person rdfs:label ?label. ?person <http://dbpedia.org/ontology/birthDate> ?birthday FILTER (regex(?label, '^.*@@@placeholder@@@.*$', 'xi')) } LIMIT 10"];
config.responses = {"en" : ["The population of @@@placeholder@@@ is @@@output@@@.", "The birthday of @@@placeholder@@@ is @@@output@@@."], "de" : ["Die Einwohnerzahl von @@@placeholder@@@ beträgt @@@output@@@.", "Der Geburtstag von @@@placeholder@@@ ist @@@output@@@."]};
config.outputVariables = ["population", "birthday"];
config.myDataBase = {"persons": [{"name": "Franz Schmidt", "department": "general IT", "qualifications": "mysql, php"},{"name": "Ina Mayer", "department": "general IT", "qualifications": "mysql, php, java"},{"name": "Sarah Schulz", "department": "IoT", "qualifications": "c++, java, mysql"}]};

module.exports = config;
