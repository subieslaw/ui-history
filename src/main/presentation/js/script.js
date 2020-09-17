$(document).ready(function () {
    const HistoryElement = ({ year, title, img, description, gistUrl, id, position }) => `
    <div class="container ${position}">
      <div class="content">
        <h2>${year}</h2>
        <h4>${title}</h4>
        <h4><img src="${img}" width="128" height="128" /> </h4>
        <p> 
        ${description}
        </p>
        <div>
            <a href="${gistUrl}">${gistUrl.substring(0, 32)}...</a>
        </div>
      </div>
    </div>
  `;

    $('.timeline').html([

        {
            year: 'Welcome everybody!'
            , title: 'Quick history of UI Framework, internet and everything'
            , gistUrl: 'https://gist.github.com/subieslaw/3c24d18b43380de8d3c3ece9ca082b3f'
            , img: 'http://pixelartmaker.com/art/d7397d2f0e2df12.png'
            , description: ''
            , position: 'right'
        }
        , {
            year: '1990'
            , title: 'Start of everything'
            , gistUrl: '...'
            , img: 'https://i.imgur.com/GXwFlnv.jpg'
            , description: 'Web 1.0, WWW, Poland becomes the first country in Eastern Europe to begin abolishing its state socialist economy. Poland also withdraws from the Warsaw Pact.'
            , position: 'left'
        },
        , {
            year: '1994'
            , title: 'W3C.org'
            , gistUrl: 'https://www.w3.org/'
            , img: 'https://www.w3.org/Icons/WWW/w3c_home_nb.png'
            , description: 'World Wide Web Consortium (W3C) has been created!'
            , position: 'right'
        },
        , {
            year: '1995'
            , title: 'Language Explosion'
            , gistUrl: ''
            , img: 'https://www.focus.pl/media/cache/default_view/uploads/media/default/0001/05/04abcd5b3170f65436054e83cc34c2b32e7da7e2.jpeg'
            , description: 'PHP, Ruby, Java, JavaScript ... Amazon, Internet Explorer'
            , position: 'left'
        },
        , {
            year: '1996'
            , title: 'More goodies'
            , gistUrl: 'https://web.archive.org/web/19960601000000*/http://www.bbh.com/'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tom_Holland_MTV_2018_%2801%29.jpg/597px-Tom_Holland_MTV_2018_%2801%29.jpg'
            , description: 'ASP 1.0, CSS 1.0, Macromedia Flash 1.0'
            , position: 'right'
        },
        , {
            year: '1999'
            , title: 'JSP'
            , img: 'https://beginnersbook.com/wp-content/uploads/2013/11/IncludeAction-output.png'
            , gistUrl: 'http://www.java2s.com/Tutorials/Java/JSP/0010__JSP__HelloWorld.htm'
            , description: 'Jakarta Server Pages (JSP; formerly JavaServer Pages) is a collection of technologies that helps software developers create dynamically generated web pages based on HTML, XML, SOAP, or other document types. Released in 1999 by Sun Microsystems, JSP is similar to PHP and ASP, but uses the Java programming language.'
            , position: 'left'
        },
        , {
            year: '2000'
            , title: '.com bubble'
            , img: 'https://greenmangotrading.files.wordpress.com/2014/12/cs-2000-dot-com-bubble-chart-1.jpg?w=300&h=184'
            , gistUrl: 'https://greenmangotrading.wordpress.com/2014/12/14/case-study-dot-com-bubble/'
            , description: 'DotCom crash'
            , position: 'right'
        },
        , {
            year: '2000'
            , title: 'Apache Struts 1.0'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Struts_logo.gif'
            , gistUrl: 'https://mkyong.com/struts/struts-hello-world-example/'
            , description: 'Apache Struts 1 is an open-source web application framework for developing Java EE web applications. It uses and extends the Java Servlet API to encourage developers to adopt a model–view–controller (MVC) architecture. It was originally created by Craig McClanahan and donated to the Apache Foundation in May 2000. Formerly located under the Apache Jakarta Project and known as Jakarta Struts, it became a top-level Apache project in 2005'
            , position: 'left'
        },
        , {
            year: '2001'
            , title: 'Wikipedia!'
            , img: 'https://illtron.net/static/img/IE6-alert.png#block'
            , gistUrl: 'https://pl.wikipedia.org/wiki/Internet_Explorer_6'
            , description: 'Wikipedia has been created and to keep everything in balance Microsoft is releasing IE 6.0'
            , position: 'right'
        },
        , {
            year: '2002'
            , title: 'Spring MVC'
            , img: 'https://www.logicbig.com/tutorials/spring-framework/spring-web-mvc/spring-mvc-intro/images/high-level.png'
            , gistUrl: 'https://www.tutorialspoint.com/spring/spring_mvc_hello_world_example.htm'
            , description: 'The Spring Framework is an application framework and inversion of control container for the Java platform. The framework`s core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to the Enterprise JavaBeans (EJB) model. The Spring Framework is open source.'
            , position: 'left'
        },
        , {
            year: '2002'
            , title: 'Vaadin'
            , img: 'https://avatars3.githubusercontent.com/u/1171922?s=200&v=4'
            , gistUrl: 'https://vaadin.com/docs/v8/framework/introduction/intro-walkthrough.html'
            , description: 'Vaadin (Finnish pronunciation: [ˈʋɑːdin]) is an open-source platform for web application development. The Vaadin Platform includes a set of web components, a Java web framework, and a set of tools and application starters. Its flagship product, Vaadin Platform (previously Vaadin Framework) allows the implementation of HTML5 web user interfaces using the Java Programming Language.'
            , position: 'right'
        },
        , {
            year: '2002'
            , title: 'Apache Tapestry'
            , img: 'https://tapestry.apache.org/index.data/apache-tapestry-icontext-600.png'
            , gistUrl: 'http://jumpstart.doublenegative.com.au/jumpstart/helloworldexplained'
            , description: 'Apache Tapestry is an open-source component-oriented Java web application framework conceptually similar to JavaServer Faces and Apache Wicket.[2] Tapestry was created by Howard Lewis Ship,[when?] and was adopted by the Apache Software Foundation as a top-level project in 2006. Tapestry emphasizes simplicity, ease of use, and developer productivity. It adheres to the Convention over Configuration paradigm, eliminating almost all XML configuration.[4] Tapestry uses a modular approach to web development by having a strong binding between each user interface component (object) on the web page and its corresponding Java class. This component-based architecture borrows many ideas from WebObjects.'
            , position: 'left'
        },
        , {
            year: '2004'
            , title: 'JSF'
            , img: 'https://netbeans.org/images_www/articles/72/web/jsf20-support/code-completion.png'
            , gistUrl: 'https://mkyong.com/jsf2/jsf-2-0-hello-world-example/'
            , description: 'Jakarta Server Faces (JSF; formerly JavaServer Faces) is a Java specification for building component-based user interfaces for web applications[1] and was formalized as a standard through the Java Community Process being part of the Java Platform, Enterprise Edition. It is also a MVC web framework that simplifies construction of user interfaces (UI) for server-based applications by using reusable UI components in a page.'
            , position: 'right'
        },
        , {
            year: '2004'
            , title: 'Adobe Flex'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Flex_4_icon.png'
            , gistUrl: 'https://help.adobe.com/pl_PL/as3/learn/WS5b3ccc516d4fbf351e63e3d118a9b90204-7fdf.html'
            , description: 'Apache Flex, formerly Adobe Flex, is a software development kit (SDK) for the development and deployment of cross-platform rich Internet applications based on the Adobe Flash platform. Initially developed by Macromedia and then acquired by Adobe Systems, Adobe donated Flex to the Apache Software Foundation in 2011[2] and it was promoted to a top-level project in December 2012.'
            , position: 'left'
        },
        , {
            year: '2004'
            , title: 'Rails'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ruby_on_Rails_logo.jpg/189px-Ruby_on_Rails_logo.jpg'
            , gistUrl: 'https://github.com/mjhea0/rails-helloworld'
            , description: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don`t repeat yourself (DRY), and the active record pattern.'
            , position: 'right'
        },
        , {
            year: '2005'
            , title: 'Dojo'
            , img: 'https://dojotoolkit.org/reference-guide/1.10/_images/rounded_corners.png'
            , gistUrl: 'https://www.webagesolutions.com/documents/Dojo1.0-Tutorials.pdf'
            , description: 'Dojo Toolkit (stylized as dōjō toolkit) is an open-source modular JavaScript library (or more specifically JavaScript toolkit) designed to ease the rapid development of cross-platform, JavaScript/Ajax-based applications and web sites. It was started by Alex Russell, Dylan Schiemann, David Schontzler, and others in 2004.'
            , position: 'left'
        },
        , {
            year: '2005'
            , title: 'Apache Wicket'
            , img: 'https://wicket.apache.org/img/logo-apachewicket.svg'
            , gistUrl: 'https://jaxenter.com/tutorial-apache-wicket-the-fun-web-framework-104503.html'
            , description: 'Apache Wicket, commonly referred to as Wicket, is a component-based web application framework for the Java programming language conceptually similar to JavaServer Faces and Tapestry. It was originally written by Jonathan Locke in April 2004. Version 1.0 was released in June 2005. It graduated into an Apache top-level project in June 2007.'
            , position: 'right'
        },
        , {
            year: '2005'
            , title: 'Struct 2'
            , img: 'https://cert.pse-online.pl/wp-content/uploads/2018/08/struts-logo-e1535097686780.png'
            , gistUrl: 'https://www.tutorialspoint.com/struts_2/struts_examples.htm'
            , description: 'Apache Struts 2 is an open-source web application framework for developing Java EE web applications. It uses and extends the Java Servlet API to encourage developers to adopt a model–view–controller (MVC) architecture. The WebWork framework spun off from Apache Struts 1 aiming to offer enhancements and refinements while retaining the same general architecture of the original Struts framework. In December 2005, it was announced that WebWork 2.2 was adopted as Apache Struts 2, which reached its first full release in February 2007.'
            , position: 'left'
        },
        , {
            year: '2005'
            , title: 'Grails'
            , img: 'https://i2.wp.com/www.evoketechnologies.com/wp-content/uploads/2015/02/Grails-logo.png?w=320&ssl=1'
            , gistUrl: 'https://josdem.io/techtalk/grails/hello_world/'
            , description: 'Grails is an open source web application framework that uses the Apache Groovy programming language (which is in turn based on the Java platform). It is intended to be a high-productivity framework by following the "coding by convention" paradigm, providing a stand-alone development environment and hiding much of the configuration detail from the developer.'
            , position: 'right'
        },
        , {
            year: '2005'
            , title: 'Django'
            , img: 'https://miro.medium.com/max/875/1*nnmReMTx0I47i2-kzdG0Lw.jpeg'
            , gistUrl: 'https://djangocentral.com/create-a-hello-world-django-application/'
            , description: 'Django (/ˈdʒæŋɡoʊ/ JANG-goh; sometimes stylized as django) is a Python-based free and open-source web framework that follows the model-template-views (MTV) architectural pattern.[9][10] It is maintained by the Django Software Foundation (DSF), an American independent organization established as a 501(c)(3) non-profit.'
            , position: 'left'
        },
        , {
            year: '2005'
            , title: 'CakePHP'
            , img: 'https://gvimalanand.files.wordpress.com/2018/04/cake-php-img.png'
            , gistUrl: 'https://kumarchetan.com/blog/2010/04/13/hello-world-in-cakephp-3-steps/'
            , description: 'CakePHP is an open-source web framework. It follows the model–view–controller (MVC) approach and is written in PHP, modeled after the concepts of Ruby on Rails, and distributed under the MIT License.'
            , position: 'right'
        },
        , {
            year: '2005'
            , title: 'BBH company page'
            , img: 'https://web.archive.org/web/20050525234055im_/http://www.bbh.com/images/BBH-web_logo.gif'
            , gistUrl: 'https://web.archive.org/web/20050525234055/http://www.bbh.com/'
            , description: 'Catching up with trends ...'
            , position: 'left'
        },
        , {
            year: '2005 ... and beyond'
            , title: 'jQuery, GWT, plan, SASS, extJS, less ...'
            , img: 'http://www.rosu-ciocodeica.com/future-internet-of-things-prediction/iot-internet-of-things.jpg'
            , gistUrl: ''
            , description: 'Want more ?'
            , position: 'right'
        },
        

    ].map(HistoryElement).join(''));

    $("button").click(function (x) {
        $("#" + this.nextElementSibling.id).fadeToggle(500);
    });

});