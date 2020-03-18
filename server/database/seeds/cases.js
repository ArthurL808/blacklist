exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cases")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cases").insert([
        {
          caseNumber: "00-0382159",
          bailAmount: 5422.42,
          severity: "felony",
          violence: "non-violent",
          bail_id: 4
        },
        {
          caseNumber: "07-7501948",
          bailAmount: 9581.78,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 25
        },
        {
          caseNumber: "25-7202973",
          bailAmount: 7888.54,
          severity: "felony",
          violence: "non-violent",
          bail_id: 30
        },
        {
          caseNumber: "08-6717930",
          bailAmount: 1527.98,
          severity: "felony",
          violence: "non-violent",
          bail_id: 27
        },
        {
          caseNumber: "16-5292468",
          bailAmount: 9030.18,
          severity: "felony",
          violence: "violent",
          bail_id: 7
        },
        {
          caseNumber: "32-6024390",
          bailAmount: 4005.66,
          severity: "felony",
          violence: "non-violent",
          bail_id: 12
        },
        {
          caseNumber: "81-6787699",
          bailAmount: 5610.76,
          severity: "felony",
          violence: "violent",
          bail_id: 1
        },
        {
          caseNumber: "97-1937526",
          bailAmount: 6517.27,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 31
        },
        {
          caseNumber: "01-9231872",
          bailAmount: 4365.48,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 1
        },
        {
          caseNumber: "68-6662897",
          bailAmount: 6950.8,
          severity: "felony",
          violence: "violent",
          bail_id: 3
        },
        {
          caseNumber: "32-4807501",
          bailAmount: 6515.26,
          severity: "felony",
          violence: "violent",
          bail_id: 15
        },
        {
          caseNumber: "09-4782406",
          bailAmount: 2353.85,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 33
        },
        {
          caseNumber: "38-1977361",
          bailAmount: 2980.96,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 33
        },
        {
          caseNumber: "40-0812302",
          bailAmount: 2235.55,
          severity: "felony",
          violence: "non-violent",
          bail_id: 28
        },
        {
          caseNumber: "07-9539935",
          bailAmount: 5482.82,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 27
        },
        {
          caseNumber: "53-0961147",
          bailAmount: 6280.63,
          severity: "felony",
          violence: "violent",
          bail_id: 35
        },
        {
          caseNumber: "91-8501041",
          bailAmount: 7318.04,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 2
        },
        {
          caseNumber: "13-7988048",
          bailAmount: 9224.99,
          severity: "felony",
          violence: "non-violent",
          bail_id: 19
        },
        {
          caseNumber: "09-1076647",
          bailAmount: 4418.26,
          severity: "felony",
          violence: "violent",
          bail_id: 2
        },
        {
          caseNumber: "75-6534625",
          bailAmount: 1205.52,
          severity: "felony",
          violence: "violent",
          bail_id: 1
        },
        {
          caseNumber: "46-1248083",
          bailAmount: 9073.27,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 35
        },
        {
          caseNumber: "81-4464682",
          bailAmount: 4185.9,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 20
        },
        {
          caseNumber: "84-2285568",
          bailAmount: 7839.6,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 30
        },
        {
          caseNumber: "22-3981976",
          bailAmount: 7876.19,
          severity: "felony",
          violence: "violent",
          bail_id: 18
        },
        {
          caseNumber: "21-4603964",
          bailAmount: 5036.94,
          severity: "felony",
          violence: "violent",
          bail_id: 24
        },
        {
          caseNumber: "43-1985573",
          bailAmount: 4864.67,
          severity: "felony",
          violence: "violent",
          bail_id: 34
        },
        {
          caseNumber: "63-0922219",
          bailAmount: 1075.21,
          severity: "felony",
          violence: "violent",
          bail_id: 9
        },
        {
          caseNumber: "86-8067747",
          bailAmount: 7029.66,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 25
        },
        {
          caseNumber: "17-0471000",
          bailAmount: 1203.87,
          severity: "felony",
          violence: "non-violent",
          bail_id: 12
        },
        {
          caseNumber: "44-5425976",
          bailAmount: 7592.23,
          severity: "felony",
          violence: "violent",
          bail_id: 25
        },
        {
          caseNumber: "98-9800753",
          bailAmount: 1982.4,
          severity: "felony",
          violence: "non-violent",
          bail_id: 20
        },
        {
          caseNumber: "24-4963488",
          bailAmount: 3969.63,
          severity: "felony",
          violence: "non-violent",
          bail_id: 13
        },
        {
          caseNumber: "06-9646167",
          bailAmount: 5821.33,
          severity: "felony",
          violence: "violent",
          bail_id: 1
        },
        {
          caseNumber: "35-4128979",
          bailAmount: 7966.99,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 18
        },
        {
          caseNumber: "49-3720944",
          bailAmount: 7571.47,
          severity: "felony",
          violence: "violent",
          bail_id: 1
        },
        {
          caseNumber: "54-0854725",
          bailAmount: 2857.36,
          severity: "felony",
          violence: "violent",
          bail_id: 5
        },
        {
          caseNumber: "76-2952429",
          bailAmount: 1894.94,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 24
        },
        {
          caseNumber: "98-1314687",
          bailAmount: 4415.6,
          severity: "felony",
          violence: "non-violent",
          bail_id: 3
        },
        {
          caseNumber: "00-1796407",
          bailAmount: 6861.54,
          severity: "felony",
          violence: "non-violent",
          bail_id: 19
        },
        {
          caseNumber: "33-5507196",
          bailAmount: 5934.81,
          severity: "felony",
          violence: "violent",
          bail_id: 21
        },
        {
          caseNumber: "38-6913920",
          bailAmount: 8884.31,
          severity: "felony",
          violence: "violent",
          bail_id: 13
        },
        {
          caseNumber: "35-6494666",
          bailAmount: 9524.33,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 12
        },
        {
          caseNumber: "58-9501706",
          bailAmount: 8337.39,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 4
        },
        {
          caseNumber: "52-6087924",
          bailAmount: 5047.82,
          severity: "felony",
          violence: "violent",
          bail_id: 18
        },
        {
          caseNumber: "53-9423072",
          bailAmount: 6411.77,
          severity: "misdemeanor",
          violence: "non-violent",
          bail_id: 19
        },
        {
          caseNumber: "17-9041757",
          bailAmount: 2614.21,
          severity: "felony",
          violence: "non-violent",
          bail_id: 7
        },
        {
          caseNumber: "95-0536768",
          bailAmount: 2097.13,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 14
        },
        {
          caseNumber: "03-1436576",
          bailAmount: 1716.66,
          severity: "felony",
          violence: "non-violent",
          bail_id: 1
        },
        {
          caseNumber: "44-4722321",
          bailAmount: 7443.22,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 6
        },
        {
          caseNumber: "05-3604111",
          bailAmount: 1523.16,
          severity: "misdemeanor",
          violence: "violent",
          bail_id: 1
        }
      ]);
    });
};
