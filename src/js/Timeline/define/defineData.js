Timeline.prototype.defineData = function() {
  const timeline = this;
  const data = [];

  data.push({
    "company":"PwC EMERGING TECHNOLOGY LAB",
    "description":"Designed, developed, and managed the creation of emerging technology prototypes as part of PwC’s National Advisory consulting group. Particular focus in Augmented, Mixed, and Virtual Reality applications for enterprise clients.",
    "color":"#e0301e",
    "startDate":new Date("01/01/2015"),
    "endDate":new Date(),
    "roles":[
      {
        "title":"Senior Manager",
        "startDate":new Date("07/01/2019"),
        "endDate":new Date()
      },
      {
        "title":"Manager",
        "startDate":new Date("07/01/2017"),
        "endDate":new Date("06/30/2019")
      },
      {
        "title":"Senior Associate",
        "startDate":new Date("01/01/2015"),
        "endDate":new Date("06/30/2017")
      }
    ]
  });

  data.push({
    "company":"TBWA\\CHIAT\\DAY",
    "description":"Created tools for automated reporting and visualization of data from advertising campaigns for major global brands including Michelin and Infiniti.",
    "startDate":new Date("09/01/2012"),
    "endDate":new Date("12/31/2014"),
    "roles":[
      {
        "title":"Senior Analyst",
        "startDate":new Date("09/01/2012"),
        "endDate":new Date("12/31/2014")
      }
    ]
  });

  data.push({
    "company":"DIGITAL THIRD COAST",
    "description":"Worked as marketing strategist, data analyst, and automation developer for digital marketing startup.",
    "startDate":new Date("10/01/2009"),
    "endDate":new Date("08/31/2012"),
    "roles":[
      {
        "title":"Senior Analyst",
        "startDate":new Date("01/01/2011"),
        "endDate":new Date("08/31/2012")
      },
      {
        "title":"Analyst",
        "startDate":new Date("10/01/2009"),
        "endDate":new Date("12/31/2010")
      }
    ]
  });

  return data;
}
