var data = {
  "skills": [
    {
      "name": "Python",
      "since": 2008
    },
    {
      "name": "Django",
      "since": 2008
    },
    {
      "name": "PostgreSQL",
      "since": 2012
    },
    {
      "name": "HTML/CSS",
      "since": 2008
    },
    {
      "name": "Javascript",
      "since": 2008
    },
    {
      "name": "React/React Native",
      "since": 2015
    }
  ],
  "experience": [
    {
      "title": "Software Engineer",
      "description": "Working as a remote software engineer from Chile with the team in San Bruno, CA. Implementing the new design of our website and migrating the existing Django application to React. Remarkable achievements are the creation of realtime messaging application for our customers and integrations with third party services like 'Backgrounds Online'.",
      "company": "CareLinx",
      "location": "San Bruno, CA",
      "timeRange": "August 2015 - December 2017",
      "technologies": "Django, Django Rest Framework, React, React Native, Firebase, PostgreSQL"
    },
    {
      "title": "Senior Software Engineer",
      "description": "Participated on the architectural design of a new company project, implementing a 3-tier application using Django Rest Framework and an AngularJS client. Main achievement is 100% coverage on unit test for both Python and Javascript projects.",
      "company": "LawLogix",
      "location": "Temuco, Chile",
      "timeRange": "August 2014 – July 2015",
      "technologies": "Django Rest Framework, Celery, PostgreSQL, AngularJS, Grunt, Karma"
    },
    {
      "title": "Senior Software Engineer",
      "description": "Participated on the architectural design of a new company project, implementing a 3-tier application using Django Rest Framework and an AngularJS client. Main achievement is 100% coverage on unit test for both Python and Javascript projects.",
      "company": "LawLogix",
      "location": "Phoenix, AZ",
      "timeRange": "February 2014 – July 2014",
      "technologies": "Django Rest Framework, Celery, PostgreSQL, AngularJS, Grunt, Karma"
    },
    {
      "title": "Senior Software Engineer",
      "description": "Active member of software development team for the conversion project from legacy system to Django. Implemented test-driven development and trained new developers.",
      "company": "LawLogix Spa Chile",
      "location": "Santiago, Chile",
      "timeRange": "April 2013 – January 2014",
      "technologies": "Django, PostgreSQL, AngularJS"
    },
    {
      "title": "Software Engineer",
      "description": "Participated in one year J-1 exchange visitor training program at LawLogix in Phoenix, AZ. Successfully ported legacy code from existing LawLogix's product to Python using Django web framework.",
      "company": "LawLogix",
      "location": "Phoenix, AZ",
      "timeRange": "April 2012 – April 2013",
      "technologies": "Django, PostgreSQL, jQuery"
    },
    {
      "title": "Lead Programmer",
      "description": "Designed and implemented the site for a startup company that created an online marketplace for local services.",
      "company": "Foxido",
      "location": "Santiago, Chile",
      "timeRange": "September 2011 – February 2012",
      "technologies": "Django, MySQL, jQuery"
    },
    {
      "title": "Software Developer",
      "description": "Implemented an e-commerce system for the existing product catalogs (auto parts), connecting the client system to the main SAP services.",
      "company": "Derco",
      "location": "Santiago, Chile",
      "timeRange": "March 2011 – August 2011",
      "technologies": "ASP.NET, MS SQL Server, jQuery"
    },
    {
      "title": "Software Developer",
      "description": "Created and developed one project for a private finance company. This project provides a friendly user interface for existing web services on said company.",
      "company": "AreaWeb",
      "location": "Santiago, Chile",
      "timeRange": "November 2010 – February 2011",
      "technologies": "Django, ASP.NET, jQuery"
    },
    {
      "title": "Software Developer",
      "description": "Contributed in both server and client side development for a government project for birth control system on public medical hospitals.",
      "company": "Quintec",
      "location": "Santiago, Chile",
      "timeRange": "June 2010 – November 2010",
      "technologies": "ASP.NET, MS SQL Server, jQuery"
    },
    {
      "title": "Software Developer",
      "description": "Participated in numerous educational and commercial software projects. Main achievements are statistical data reports system for a private College and online catalog for educational resources.",
      "company": "TIDE",
      "location": "Temuco, Chile",
      "timeRange": "March 2008 – June 2010",
      "technologies": "Django, jQuery, FusionCharts, PHP, Magento, MySQL, Abode Flex"
    }
  ]
};


angular.module('resumeApp', []).
  controller('AppController', function($scope) {
    
    $scope.data = data;
    // items in the first column: half or half+1
    var firstColItemCount = Math.ceil($scope.data.skills.length / 2);
    $scope.data.skills1 = $scope.data.skills.slice(0, firstColItemCount);
    $scope.data.skills2 = $scope.data.skills.slice(firstColItemCount);

  });
