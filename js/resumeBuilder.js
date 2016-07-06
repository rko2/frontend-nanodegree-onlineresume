'use strict';

var bio = {
  'name' : 'Ryan Ko',
  'role' : ' Front-End.',
  'contacts' : {
    'mobile' : '(217)-722-2855',
    'email' : ' rko2@uchicago.edu',
    'location' : ' Chicago, Illinois'
  },
  'welcomemessage' : ' Hello. Welcome to my online resume.',
  'skills' : [
    ' French (basic)',
    ' Russian (intermediate-advanced)',
    ' German (basic)',
    ' Spanish (intermediate)',
    ' Korean (heritage)',
    ' Portuguese (basic)',
    ' HTML',
    ' CSS',
    ' JavaScript',
    ' Basic R',
    ' Basic Stata',
    ' Basic Photoshop']
};

bio.display = function(){
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomemessage);
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var pic = 'images_fixed/profile-200x200.jpg';
  var formattedbioPic = HTMLbioPic.replace('%data%', pic);
  $('#header').prepend(formattedbioPic);
  var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedemail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts, #footerContacts').append(formattedmobile);
  $('#topContacts, #footerContacts').append(formattedemail);
  $('#topContacts, #footerContacts').append(formattedLocation);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedwelcomeMsg);

  var formattedSkillsStart = HTMLskillsStart;

  if (bio.skills.length) {
    $('#header').append(formattedSkillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
      $('#skills').append(formattedSkills);
    }
  }

};

$('#header').append(bio.display);

var inName = function(name){
  var names = name.split(' ');
  var first_nameletter = names[0].slice(0, 1);
  var first_nameletterPreCap = names[0].slice(0, 1);
  first_nameletterCap = first_nameletterPreCap.toUpperCase();
  var first_nameFinal = names[0].replace(first_nameletter, first_nameletterCap);
  var cap_last = names[1].toUpperCase();
  var final_name = first_nameFinal.concat(' ', cap_last);
  return final_name;
};

$('#main').append(internationalizeButton);

var work = {
  'jobs' : [
    {
      'employer' : 'ChicagoTwentySomething',
      'position' : 'Graphic Design Intern',
      'location' : 'Chicago, IL',
      'startdate' : 'June 2014 - August 2014',
      'description' : 'Finish graphic design assignments without direct supervision, and under a self-starting schedule.'
    },
    {
      'employer' : 'LiveWatch Security',
      'position' : 'Security Consultant',
      'location' : 'Chicago, IL',
      'startdate' : 'July 2015 - present',
      'description' : 'Effectively communicate with a wide variety of clients and develop security solutions based on their specific needs. Display responsibility, ability to work independently without constant supervision, and ability to stay alert and ready during all hours of shift. Effectively close sales over the phone in high volume. Demonstrate resilience and ability to maintain high energy at all times.'
    }
  ]
};

var formattedWorkStart = HTMLworkStart;

work.display = function(){
  for (var i = 0; i < work.jobs.length; i++) {
    var formattedworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
    var formattedworkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].position);
    var formattedworkDate = HTMLworkDates.replace('%data%', work.jobs[i].startdate);
    var formattedworkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
    var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
    $('#workExperience').append(formattedWorkStart);
    $('.work-entry:last').append(formattedEmployerTitle, formattedWorkStart, formattedworkDate, formattedworkDescription);
  }
};

$('#workExperience').append(work.display);

var education = {
  'schools': [
    {
    'LastSchool' : 'University Laboratory High School',
    'Degree' : 'High School Diploma',
    'YearsAttended' : '2007 - 2011',
    'location' : 'Urbana, IL',
    'Major' : 'N/A'
    },
    {
    'LastSchool' : 'Korea University (고려대학교)',
    'Degree' : 'Certificate',
    'YearsAttended' : 'Summer 2012',
    'location' : 'Seoul, South Korea',
    'Major' : 'Economics'
    },
    {
    'LastSchool' : 'University of Chicago',
    'Degree' : 'BA',
    'YearsAttended' : '2011 - 2015',
    'location' : 'Chicago, IL',
    'Major' : 'Economics with minor in Russian'
    }
  ],
  'onlineCourses' : [
    {
    'title' : 'Front-End Web Developer Nanodegree',
    'school' : 'Udacity',
    'date' : 'July 2015 - Present',
    'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
    'title' : 'Microsoft Excel Basic',
    'school' : 'Infinite Skills through Udemy',
    'date' : 'September 2015',
    'url' : 'https://www.udemy.com/microsoft-excel-2013-course-beginners-intermediate-training/learn/#/'
    }
  ]
};

education.display = function(){
  for (var i = 0; i < education.schools.length; i++) {
    var formattedSchoolStart = HTMLschoolStart;
    var formattedSchool = HTMLschoolName.replace('%data%', education.schools[i].LastSchool);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].Degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].YearsAttended);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].Major);
    var formattedNameDegree = formattedSchool + formattedSchoolDegree;
    $('#education').append(formattedSchoolStart),
    $('.education-entry:last').append(formattedNameDegree),
    $('.education-entry:last').append(formattedSchoolDates),
    $('.education-entry:last').append(formattedSchoolLocation),
    $('.education-entry:last').append(formattedSchoolMajor)
  }
    var formattedOnlineClasses = HTMLonlineClasses;
    $('#education').append(formattedOnlineClasses);
  for (var course in education.onlineCourses) {
    var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
    var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
    var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
    var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
    var formattedonlineSchoolCourse = formattedonlineTitle + formattedonlineSchool;
    $('#education').append(formattedSchoolStart),
    $('.education-entry:last').append(formattedonlineSchoolCourse),
    $('.education-entry:last').append(formattedonlineDates),
    $('.education-entry:last').append(formattedonlineURL)
  }
};

$('#education').append(education.display);

var projects = {
  'projects': [
    {
  'projectStart' : 'July 2015',
  'projectTitle' : 'Online Portfolio',
  'projectDescription' : 'This is an online portfolio with all of my projects.',
  'projectImage' : 'images_fixed/RonaldoPaint-200x200.jpg'
    },
    {
  'projectStart' : 'August 2015',
  'projectTitle' : 'Online Resume',
  'projectDescription' : 'This is an online resume constructed as part of my course through Udacity.',
  'projectImage' : 'images_fixed/resume1-200x200.jpg'
    }
  ]
};

projects.display = function(){
  for (var i = 0; i < projects.projects.length; i++) {
    var formattedprojectStart = HTMLprojectStart.replace('%data%', projects.projects[i].projectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].projectTitle);
    var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].projectDescription);
    var formattedprojectImage = HTMLprojectImage.replace('%data%', projects.projects[i].projectImage);
    $('#projectsFlex').append(formattedprojectStart);
    $('.project-entry:last').append(formattedprojectTitle);
    $('.project-entry:last').append(formattedprojectDescription);
    $('.project-entry:last').append(formattedprojectImage);
  }
};

$('#projects').append(projects.display);

var travel = {
  'places' : [
    {
      'location' : 'Alicante, Spain'
    },
    {
      'location' : 'Athens, Greece'
    },
    {
      'location' : 'Nashville, Tennessee'
    },
    {
      'location' : 'New York City, New York'
    },
    {
      'location' : 'Boston, Massachusetts'
    },
    {
      'location' : 'San Francisco, California'
    }
  ]
};

$('#mapDiv').append(googleMap);
