var app = angular.module('app', [
    'ngRoute',
    'app.controllers.Index',
    'app.controllers.Lang'
])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'partials/index.html', controller: 'Index'})
        .when('/servers', {templateUrl: 'partials/servers.html', controller: 'Index'})
        .when('/research', {templateUrl: 'partials/research.html', controller: 'Index'})
    $routeProvider.otherwise({redirectTo: '/'});
}]).factory('Lang', function($rootScope) {
    $rootScope.langStr = 'en';
    $rootScope.stringsDict = {
        'fr': {
            back:'Retour',
            intro: 'Bonjour ! Je suis développeur full-stack passionné par le  logiciel libre. Voici certain de mes projets.',
            software_projects: 'Projets logiciels',
            research: 'Recherche personnelle et académique',
            my_servers: 'Mes serveurs',
            main_storage: 'Serveur de stockage',
            mining: 'Minage de crypto-monnaies',
            main_lab: 'Laboratoire principal et archivage',
            p_research: 'Recherche personnelle',
            alsb: 'Advanced Least Significant Bit steganography',
            alsb_desc: 'Projet Rust explorant des améliorations sur l\'algorithme de stéganographie LSB.',
            lancoder_desc: 'Projet d\'encodage vidéo distribué avec implémentation des composantes de bas niveau (ordonnancement, pooling, etc.).',
            academic_r: 'Recherche académique',
            cap_desc_1: 'Logiciel fait en collaboration avec le professeur Christopher Fuhrman à l\'École des technologies supérieures.',
            cap_desc_2: 'Application Web Python permettant de planifier les cours Moodle de manière relative à l\'aide d\'un language dédié (DSL).',
            funded_by: 'Financé par',
            and: 'et'
        },
        'en': {
            back: 'Back',
            intro: "Hi! I'm a full-stack developer and free software enthusiast. Here is some stuff I do.",
            software_projects: 'Software projects',
            research: 'Personnal and academic research',
            my_servers: 'My servers',
            main_storage: 'Main storage',
            mining: 'Cryptocurrency mining',
            main_lab: 'Main lab and archival',
            p_research: 'Personnal research',
            alsb: 'Advanced Least Significant Bit steganography',
            alsb_desc: 'Rust project to explore improvements over the tradionnal LSB steganography algorithm.',
            lancoder_desc: 'Distributed computing with reimplementation of low level components (scheduling, pooling, messaging, etc.).',
            academic_r: 'Academic research',
            cap_desc_1: 'Software created with professor Christopher Fuhrman at the École des technologies supérieures.',
            cap_desc_2: 'Consists of a Python Web service with a Domain Specific Langage to create relative plannings of courses.',
            funded_by: 'Funded by',
            and: 'and'
        }
    }
      return {
        switchToLang : function(langStr) {
            $rootScope.langStr = langStr;
            $rootScope.strings = $rootScope.stringsDict[langStr];
        },
        is : function(langStr) {
            return $rootScope.langStr === langStr;
        }
      }
    });
