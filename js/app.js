/**
 * Created by NoteSamsung on 25/06/2016.
 */
var mainApp = angular.module('mainApp', []);

mainApp.controller('MainController', function MainController($scope) {
    $scope.phone = "+55 (082) 9.9316-7395";
    $scope.email = "k-heiner@hotmail.com";
    $scope.skype = "khwesten.heiner";
    $scope.address = "Av. Sebastião Correia Rocha, Nº 1113 - Bl. 03 Ap. 02";
    $scope.provincyState = "Tabuleiro do Martins - Maceió / AL";
    $scope.urlMaps = "https://www.google.com.br/maps/place/Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57061-410/@-9.5934739,-35.7692318,15z/data=!3m1!4b1!4m2!3m1!1s0x70148940e6771d9:0x3f32b2a34da75b70";

    $scope.language = [
        {
            phrase: "O 10 nunca será alcançado, pois assim como o homem, a tecnologia está em constante evolução.",
            menuKnowledge: "Conhecimento",
            menuFreelance: "Freelances",
            menuExperience: "Experiência",
            description: "Graduado em análise de sistemas pela Faculdade de Ciências Exatas e Tecnológicas (FACET)" +
            " do Centro de Estudos Superiores de Maceió (CESMAC) <br>" +
            "Pós-graduado em Engenharia de software também pela FACET/CESMAC.",
            situation: "Brasileiro, solteiro - 25 anos",
            jobs: [
                {
                    tools: "SCRUM, HTML5, CSS3, JS(jQuery, Angular, Ionic), PHP(Smarty)/Java(Jax-rs, dropwizard)/NodeJs, MySql e SOAP/REST/GraphQl",
                    company: "Meu Tutor",
                    date: "Atual (desde 03/14)",
                    position: "Engenheiro de software Full-Stack",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP(Smarty, Doctrine, Laravel e CodeIgniter), MySql e SOAP/REST",
                    company: "@Comunicação",
                    date: "Atual (desde 12/16)",
                    position: "Programador Full-Stack Sr. (remoto)",
                    locate: "Maceió/AL - PR/SP"
                },
                {
                    tools: "HTML5, CSS3, JS, PHP e MySql",
                    company: "TECK S",
                    date: "Atual (desde 07/16)",
                    position: "Engenheiro de software Full-Stack",
                    locate: "Maceió/AL - João Pessoa/PB"
                },
                {
                    tools: "MVC, HTML5, CSS3, JS(DurandalJS), PHP(Slim/Doctrine), MySql e REST",
                    company: "Locadados",
                    date: "2014-2015",
                    position: "Programador Full-Stack Sr. (remoto)",
                    locate: "Maceió/AL - Recife/PE"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP e Postgress",
                    company: "Bluevox",
                    date: "2014",
                    position: "Programador Full-Stack Pleno",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Tami Eventos",
                    date: "2014",
                    position: "Programador PHP Pleno (remoto)",
                    locate: "Maceió/AL"
                },
                {
                    tools: "Java, MySql e CMD script",
                    company: "Farmácia Permanente",
                    date: "2013",
                    position: "Analista Help Desk",
                    locate: "Maceió/AL"
                },
                {
                    tools: "CorelDraw e Photoshop",
                    company: "Promo Comunicação Visual",
                    date: "2012-2013",
                    position: "Gerente/ Design",
                    locate: "Maceió/AL"
                },
                {
                    tools: "TDD, Java, Hibernate e Oracle",
                    company: "Indra/Politec",
                    date: "2012",
                    position: "Programador Java Jr.",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Associação de Software Livre do Nordeste",
                    date: "2011-2012",
                    position: "Programador PHP Jr.",
                    locate: "Maceió/AL"
                }
            ],

            freelances: [
                {
                    url: "",
                    name: "ProgressMe",
                    date: "2016",
                    description: "Criação de API de acesso a dados para 'jogo' que simula um processo interno da empresa, usando PHP + Slim + MySql."
                },
                {
                    url: "http://www.epizzaonline.com.br",
                    name: "E-Pizza",
                    date: "2016",
                    description: "Site de gerenciamento do estabelecimento e delivery, usando Symfony2 e MySql. Criação dos modulos de gerenciamento de estoque, pedidos, garçons e motoboys."
                },
                {
                    url: "",
                    name: "Congresso Alagoano de Tecnologia (COALTI)",
                    date: "2011 / 2014 / 2016 (em construção)",
                    description: "Site para o evento, usando PHP(Doctrine + Slim), AngularJS, MySql e API MOIP para pagamentos. Gerenciamento de palestrantes, palestras, usuários, pagamentos e certificados."
                },
                {
                    url: "",
                    name: "Congresso Acadêmico Integrado de Inovação e Tecnologia (CAIITE)",
                    date: "2015",
                    description: "Plataforma para gerenciamento do evento, usando PHP, Bootstrap e MySql. Gerenciamento de trabalhos enviados(upload de arquivos) e gerenciamento de correção por parte da banca examinadora, geração de certificado e gerenciamento de participantes."
                },
                {
                    url: "http://www.ufal.br/pinacoteca/",
                    name: "Pinacoteca",
                    date: "2014",
                    description: "Site para a pinacoteca da Universidade Federal de Alagoas (UFAL), usando PHP, Bootstrap e MySql. Gerenciamento de eventos, notícias, acervo de imagens, editais e agendamento de visita via email."
                },
                {
                    url: "http://www.treinal.com.br/",
                    name: "Treinal",
                    date: "2014",
                    description: "Site para escola de treinamentos, usando PHP, Bootstrap e MySql. Gerenciamento de cursos, pagamentos e participantes."
                }
            ]
        },
        {
            phrase: "The 10 will never be reached, as well as man, the technology is constantly evolving.",
            menuKnowledge: "Knowledge",
            menuFreelance: "Freelances",
            menuExperience: "Experiences",
            description: "Degree in system analysis from Faculdade de Ciências Exatas e Tecnológias (FACET) of" +
            " Centro de Estudos Superiores de Maceió (CESMAC) \n\r " +
            "Post-degree in Software Engineering from Faculdade" +
            " de Ciências Exatas e Tecnológias (FACET) of Centro de Estudos Superiores de Maceió (CESMAC).",
            situation: "Brazilian, single - 25 years",
            jobs: [
                {
                    tools: "SCRUM, HTML5, CSS3, JS(jQuery, Angular, Ionic), PHP(Smarty)/Java(Jax-rs, dropwizard)/NodeJs, MySql e SOAP/REST/GraphQl",
                    company: "Meu Tutor",
                    date: "Current (since 03/14)",
                    position: "Full-Stack software engineer",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP(Smarty, Doctrine, Laravel e CodeIgniter), MySql e SOAP/REST",
                    company: "@Comunicação",
                    date: "Current (since 12/16)",
                    position: "Full-Stack Sr. Developer (remote)",
                    locate: "Maceió/AL - PR/SP"
                },
                {
                    tools: "HTML5, CSS3, JS, PHP e MySql",
                    company: "TECK S",
                    date: "Current (since 07/16)",
                    position: "Full-Stack software engineer",
                    locate: "Maceió/AL - João Pessoa/PB"
                },
                {
                    tools: "MVC, HTML5, CSS3, JS(DurandalJS), PHP(Slim/Doctrine), MySql e REST",
                    company: "Locadados",
                    date: "2014-2015",
                    position: "Full-Stack Sr. developer (remote)",
                    locate: "Maceió/AL - Recife/PE"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP e Postgress",
                    company: "Bluevox",
                    date: "2014",
                    position: "Full-Stack Plain developer",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Tami Eventos",
                    date: "2014",
                    position: "PHP Plain developer (remote)",
                    locate: "Maceió/AL"
                },
                {
                    tools: "Java, MySql e CMD script",
                    company: "Farmácia Permanente",
                    date: "2013",
                    position: "Help Desk analyst",
                    locate: "Maceió/AL"
                },
                {
                    tools: "CorelDraw e Photoshop",
                    company: "Promo Comunicação Visual",
                    date: "2012-2013",
                    position: "Manager/ Design",
                    locate: "Maceió/AL"
                },
                {
                    tools: "TDD, Java, Hibernate e Oracle",
                    company: "Indra/Politec",
                    date: "2012",
                    position: "Java Jr. developer",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Associação de Software Livre do Nordeste",
                    date: "2011-2012",
                    position: "PHP Jr. developer",
                    locate: "Maceió/AL"
                }
            ],

            freelances: [
                {
                    url: "",
                    name: "ProgressMe",
                    date: "2016",
                    description: "Creation of API to database access for the 'game' that simulate the internal process of company, developed with PHP + Slim + MySql."
                },
                {
                    url: "http://www.epizzaonline.com.br",
                    name: "E-Pizza",
                    date: "2016",
                    description: "Management website of company and delivery, developed with Symfony2 + MySql. Creation of management modules of stock, request, bartender and motorcycle courier."
                },
                {
                    url: "",
                    name: "Congresso Alagoano de Tecnologia (COALTI)",
                    date: "2011 / 2014 / 2016",
                    description: "Website for event, developed with PHP + Doctrine + Slim + AngularJs + Moip API + MySql. Management of speakers, lectures, users, payments and certificates."
                },
                {
                    url: "",
                    name: "Congresso Acadêmico Integrado de Inovação e Tecnologia (CAIITE)",
                    date: "2015",
                    description: "Management platform from event, developed with PHP + Bootstrap + MySql. Management of sent jobs(file upload) and management of corrections, generating of certificates and management of participants."
                },
                {
                    url: "http://www.ufal.br/pinacoteca/",
                    name: "Pinacoteca",
                    date: "2014",
                    description: "Website from Pinacoteca of Universidade Federal de Alagoas (UFAL), developed with PHP + Bootstrap + MySQl. Management of events, notices, collection of images, notice and visit scheduling by email."
                },
                {
                    url: "http://www.treinal.com.br/",
                    name: "Treinal",
                    date: "2014",
                    description: "Website for training school, developed with PHP + Bootstrap + MySql. Management of courses, payments and participants."
                }
            ]
        },
        {
            phrase: "El 10 nunca se alcanzará, al igual que el hombre, la tecnología está en constante evolución.",
            menuKnowledge: "Conocimiento",
            menuFreelance: "Freelances",
            menuExperience: "Experiencia",
            description: "Licenciatura en Análisis de Sistemas en la Facultad de Ciencias Exactas y Tecnológicas (FACET) del Centro de Estudios Superiores de Maceió (CESMAC)" +
            "\n\r Postgrado en ingeniería de software también por FACET/CESMAC.",
            situation: "Brasileño, solo - 25 años",
            jobs: [
                {
                    tools: "SCRUM, HTML5, CSS3, JS(jQuery, Angular, Ionic), PHP(Smarty)/Java(Jax-rs, dropwizard)/NodeJs, MySql e SOAP/REST/GraphQl",
                    company: "Meu Tutor",
                    date: "Actual (de 03/14)",
                    position: "Ingeniero de software Full-Stack",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP(Smarty, Doctrine, Laravel e CodeIgniter), MySql e SOAP/REST",
                    company: "@Comunicação",
                    date: "Actual (de 12/16)",
                    position: "Programador Full-Stack Sr.(remoto)",
                    locate: "Maceió/AL - PR/SP"
                },
                {
                    tools: "HTML5, CSS3, JS, PHP e MySql",
                    company: "TECK S",
                    date: "Actual (de 07/16)",
                    position: "Ingeniero de software Full-Stack",
                    locate: "Maceió/AL - João Pessoa/PB"
                },
                {
                    tools: "MVC, HTML5, CSS3, JS(DurandalJS), PHP(Slim/Doctrine), MySql e REST",
                    company: "Locadados",
                    date: "2014-2015",
                    position: "Programador Full-Stack Sr. (remoto)",
                    locate: "Maceió/AL - Recife/PE"
                },
                {
                    tools: "HTML5, CSS3, JS(jQuery), PHP e Postgress",
                    company: "Bluevox",
                    date: "2014",
                    position: "Programador Full-Stack Pleno",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Tami Eventos",
                    date: "2014",
                    position: "Programador PHP Pleno (remoto)",
                    locate: "Maceió/AL"
                },
                {
                    tools: "Java, MySql e CMD script",
                    company: "Farmácia Permanente",
                    date: "2013",
                    position: "Analista Help Desk",
                    locate: "Maceió/AL"
                },
                {
                    tools: "CorelDraw e Photoshop",
                    company: "Promo Comunicação Visual",
                    date: "2012-2013",
                    position: "Gerente/ Design",
                    locate: "Maceió/AL"
                },
                {
                    tools: "TDD, Java, Hibernate e Oracle",
                    company: "Indra/Politec",
                    date: "2012",
                    position: "Programador Java Jr.",
                    locate: "Maceió/AL"
                },
                {
                    tools: "HTML, CSS, JS, PHP e MySql",
                    company: "Associação de Software Livre do Nordeste",
                    date: "2011-2012",
                    position: "Programador PHP Jr.",
                    locate: "Maceió/AL"
                }
            ],

            freelances: [
                {
                    url: "",
                    name: "ProgressMe",
                    date: "2016",
                    description: "Creación de API para acceder a la base de datos para el 'juego' que simulan el proceso interno de la empresa, desarrollado con PHP + MySQL + delgado."
                },
                {
                    url: "http://www.epizzaonline.com.br",
                    name: "E-Pizza",
                    date: "2016",
                    description: "Sitio web de gestión de la empresa y la entrega, desarrollada con Symfony2 + MySQL. Creación de módulos de gestión de existencias, petición, barman y servicio de mensajería moto."
                },
                {
                    url: "",
                    name: "Congresso Alagoano de Tecnologia (COALTI)",
                    date: "2011 / 2014 / 2016",
                    description: "Sitio Web para el evento, desarrollado con PHP + Doctrina + Slim + + API AngularJS MoIP + MySQL. Gestión de altavoces, conferencias, los usuarios, los pagos y certificados."
                },
                {
                    url: "",
                    name: "Congresso Acadêmico Integrado de Inovação e Tecnologia (CAIITE)",
                    date: "2015",
                    description: "La plataforma de gestión de eventos, desarrollado con PHP + MySQL + Bootstrap. Gestión de los trabajos enviados (carga de archivos) y la gestión de correcciones, de generación de certificados y la gestión de los participantes."
                },
                {
                    url: "http://www.ufal.br/pinacoteca/",
                    name: "Pinacoteca",
                    date: "2014",
                    description: "Sitio Web de Pinacoteca de la Universidad Federal de Alagoas (UFAL), desarrollado con la Gestión de PHP + MySQL + Bootstrap. De eventos, avisos colección de imágenes, notificación y visitar la programación por correo electrónico."
                },
                {
                    url: "http://www.treinal.com.br/",
                    name: "Treinal",
                    date: "2014",
                    description: "Sitio web de la escuela de formación, desarrollado con la Gestión de PHP + MySQL + Bootstrap. De cursos, los pagos y los participantes."
                }
            ]
        }
    ];

    $scope.main = $scope.language[0];
});
