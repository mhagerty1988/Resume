var bio = {
    "name": "Michael John Hagerty",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "parched_with_thirst_iam@hotmail.com",
        "github": "MichaelHagerty1988",
        "location": "Mexico City"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Junior web developer with front-end skills. Experienced in creating beautiful, interactive, multi-functional and responsive sites with simplistic layouts for the best user experience.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", ]
};


//bio
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedJob = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = (formattedName + formattedJob);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);


    //contact
    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedNameRole);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);



    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < 5; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    for (var info = 0; info < 4; info++) {
        $("#topContacts").append(formattedContactInfo[info]);
        $("#footerContacts").append(formattedContactInfo[info]);
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Grants Pass High School",
        "location": "Grants Pass, OR",
        "degree": "High School Diploma",
        "majors": ["Information Technology"],
        "dates": "2002-2006",
        "url": "http://www.grantspass.k12.or.us/Page/25",
    }, {
        "name": "Everest",
        "location": "Portland, OR",
        "degree": "N/A",
        "majors": ["CompTIA A+, N+, Security+ and Microsoft MCTS"],
        "dates": "2012",
        "url": "N/A"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};
//education
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDate);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(internet) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", internet.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", internet.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", internet.dates);
        $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%", internet.url);
        $(".education-entry:last").append(formattedURL);
    });
};


education.display();

var work = {
    "jobs": [{
        "title": "Bartender",
        "employer": "Ed´s Deli",
        "dates": "May 2015-January 2016",
        "location": "Portland, OR",
        "description": "Offered an exceptional experience for our guests. Occasional housekeeping was required as well."
    }, {
        "title": "Prep Cook",
        "employer": "Midpoint Cafe",
        "dates": "December 2014-January 2016",
        "location": "Portland, OR",
        "description": "Prepared orders for the chef and the second shift."
    }, {
        "title": "Production Technician",
        "employer": "Aerotek",
        "dates": "2013-2015",
        "location": "Portland, OR",
        "description": "Programmed and operated various CNC and CAM machines."
    }]
};
//work
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedYears = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedYears);
        var formattedCity = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedCity);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

//projects
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "Created a responsive portfolio that features projects built with HTML5, CSS3, Bootstrap and JavaScript.",
        "images": ["/Users/Mountains/Desktop/Mike´s Udacity Folder/resumebuilder/images/197x148.gif", ]
    }, ]
};

projects.display = function() {
  for (var images = 0; images < 4; images++) {}
    projects.projects.forEach(function(p) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", p.dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
        $(".project-entry:last").append(formattedProjectDescription);
        for (var i = 0; i < p.images.length; i++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
        $(".project-entry:last").append(formattedProjectImage);
        }
    });
};





projects.display();

$("#mapDiv").append(googleMap);
