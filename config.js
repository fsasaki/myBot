var accesstokens = require('./accesstokens');

var config = {};

config.accessTokenAPIAI = accesstokens.accessTokenAPIAI;
config.baseUrlAPIAPI = "https://api.api.ai/v1/";
config.slackbottoken = accesstokens.slackbottoken;
config.waitmessage = {"en" : "I will check, hold on.", "de" : "Ich werde das überprüfen, einen Moment"};
config.birthdatepicturestring = { "en" : "MMMM Do YYYY", "de" : "Do MMMM YYYY"};
config.languageconfirmation =  {"en" : "You can now talk to me in English.", "de" : "Du kannst jetzt auf Deutsch mit mir sprechen."};
config.languagechange = {"en" : "speak.*english", "de" : "sprich.*deutsch"};
config.noanswer = {"en" : "Sorry, I don't know the answer to your question.", "de" : "Ich kann die Frage leider nicht beantworten."};
config.showcapabilities = {"en" : "I can tell you about the birthdate of a famous person, about the population of a city, provide general information about something, and I can translate expressions between languages. Not a lot, but I am eager to learn more :)", "de" : "Ich kann dir den Geburtstag einer berühmten Person nennen, die Einwohnerzahl einer Stadt herausfinden, generelle Informationen über etwas geben, oder einen Ausdruck zwischen Sprachen übersetzen. Junge, ich kann nicht viel, aber ich lerne gerne dazu :)"};
config.helpme = {"en" : "Sorry, I cannot give you health.", "de" : "Ich kann dir leider keine Hülle geben."};

config.queries = ["SELECT ?city ?population WHERE { ?city rdfs:label '@@@placeholder@@@'@en. ?city <http://dbpedia.org/ontology/populationTotal> ?population } LIMIT 10", "SELECT ?person ?birthday (count(distinct ?o) as ?count) WHERE { ?person rdfs:label '@@@placeholder@@@'@en. ?person ?p ?o. ?person <http://dbpedia.org/ontology/birthDate> ?birthday }  GROUP BY ?person ?birthday ORDER BY DESC (?count) LIMIT 1", "SELECT ?uri(count(distinct ?o) as ?count) ?labeltargetlanguage WHERE { ?uri rdfs:label '@@@placeholder@@@'@@@@sourcelanguage@@@. ?uri ?p ?o. ?uri rdfs:label ?labeltargetlanguage. FILTER ( lang(?labeltargetlanguage) = '@@@targetlanguage@@@' ) } GROUP BY ?uri ?labeltargetlanguage ORDER BY DESC (?count) LIMIT 1", "SELECT ?uri(count(distinct ?o) as ?count) ?comment ?wikipage WHERE { ?uri rdfs:label '@@@placeholder@@@'@@@@sourcelanguage@@@. ?uri ?p ?o. ?uri rdfs:comment ?comment. ?uri <http://xmlns.com/foaf/0.1/isPrimaryTopicOf> ?wikipage FILTER ( lang(?comment) = '@@@sourcelanguage@@@' ) } GROUP BY ?uri ?comment ?wikipage ORDER BY DESC (?count) LIMIT 1 "];

config.responses = {"en" : ["The population of @@@placeholder@@@ is @@@output@@@.", "The birthday of @@@placeholder@@@ is @@@output@@@.", "The translation of @@@placeholder@@@ is @@@output@@@.", "This is what I have found about @@@placeholder@@@: @@@output@@@" ], "de" : ["Die Einwohnerzahl von @@@placeholder@@@ beträgt @@@output@@@.", "Der Geburtstag von @@@placeholder@@@ ist @@@output@@@.", "Die Übersetzung von @@@placeholder@@@ ist @@@output@@@.", "Das habe ich über @@@placeholder@@@ gefunden: @@@output@@@"]};

config.outputVariables = ["population", "birthday", "labeltargetlanguage", "comment"];
config.wikidataEndpoint = "https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=";
config.dbpediaendpoints = { "en" : "http://dbpedia.org/sparql?format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&query=", "de" : "http://de.dbpedia.org/sparql?format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on&query="}
config.myDataBase = {"persons": [{"name": "Franz Schmidt", "department": "general IT", "qualifications": "mysql, php"},{"name": "Ina Mayer", "department": "general IT", "qualifications": "mysql, php, java"},{"name": "Sarah Schulz", "department": "IoT", "qualifications": "c++, java, mysql"}]};

module.exports = config;
