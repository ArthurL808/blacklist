exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cases")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cases").insert([
        {
          caseNumber: "60512-8019",
          bailAmount: 46466.96,
          defendant_id: 19,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "49288-0012",
          bailAmount: 34409.44,
          defendant_id: 9,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "35573-200",
          bailAmount: 13467.27,
          defendant_id: 16,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "23731-6051",
          bailAmount: 43105.43,
          defendant_id: 1,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "23360-152",
          bailAmount: 7818.59,
          defendant_id: 14,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "37012-742",
          bailAmount: 8811.5,
          defendant_id: 7,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "66689-037",
          bailAmount: 39528.15,
          defendant_id: 13,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "63505-160",
          bailAmount: 28342.15,
          defendant_id: 7,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "64117-215",
          bailAmount: 35451.65,
          defendant_id: 1,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "58517-001",
          bailAmount: 6158.86,
          defendant_id: 4,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "69097-173",
          bailAmount: 43512.63,
          defendant_id: 18,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "60429-384",
          bailAmount: 40588.03,
          defendant_id: 20,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "51991-836",
          bailAmount: 7526.66,
          defendant_id: 19,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0591-0371",
          bailAmount: 37959.76,
          defendant_id: 1,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0185-5369",
          bailAmount: 18133.44,
          defendant_id: 15,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "57955-0723",
          bailAmount: 41474.15,
          defendant_id: 4,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "41250-827",
          bailAmount: 18348.99,
          defendant_id: 19,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "43742-0493",
          bailAmount: 22531.55,
          defendant_id: 1,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "51346-207",
          bailAmount: 1066.32,
          defendant_id: 15,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0113-2054",
          bailAmount: 31163.38,
          defendant_id: 18,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "54868-5020",
          bailAmount: 39924.7,
          defendant_id: 8,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "10544-186",
          bailAmount: 10372.99,
          defendant_id: 8,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "49738-258",
          bailAmount: 25733.17,
          defendant_id: 5,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "68428-732",
          bailAmount: 41976.63,
          defendant_id: 19,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "63739-809",
          bailAmount: 39308.69,
          defendant_id: 6,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "54868-6336",
          bailAmount: 38062.43,
          defendant_id: 15,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "51206-401",
          bailAmount: 20702.91,
          defendant_id: 10,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "63323-563",
          bailAmount: 42790.93,
          defendant_id: 12,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "51079-211",
          bailAmount: 26857.44,
          defendant_id: 8,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "68084-397",
          bailAmount: 9162.28,
          defendant_id: 16,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "66915-300",
          bailAmount: 41618.81,
          defendant_id: 20,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "52993-112",
          bailAmount: 23152.69,
          defendant_id: 9,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "59762-0073",
          bailAmount: 33909.47,
          defendant_id: 20,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "54868-5475",
          bailAmount: 24347.33,
          defendant_id: 13,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "17089-337",
          bailAmount: 48655.08,
          defendant_id: 6,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "41250-384",
          bailAmount: 6329.73,
          defendant_id: 18,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "11527-061",
          bailAmount: 41341.92,
          defendant_id: 14,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "64616-102",
          bailAmount: 47679.67,
          defendant_id: 10,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0268-0930",
          bailAmount: 6503.62,
          defendant_id: 15,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "0904-0201",
          bailAmount: 4209.86,
          defendant_id: 11,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0591-2611",
          bailAmount: 39348.16,
          defendant_id: 15,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "68084-274",
          bailAmount: 37768.31,
          defendant_id: 14,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0264-2205",
          bailAmount: 37988.21,
          defendant_id: 8,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "64092-031",
          bailAmount: 8230.5,
          defendant_id: 13,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "61570-072",
          bailAmount: 17488.28,
          defendant_id: 10,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "42874-012",
          bailAmount: 4479.79,
          defendant_id: 16,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "62211-261",
          bailAmount: 43837.68,
          defendant_id: 2,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "52125-245",
          bailAmount: 36234.87,
          defendant_id: 20,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "35356-703",
          bailAmount: 20143.12,
          defendant_id: 15,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "30142-544",
          bailAmount: 9310.93,
          defendant_id: 12,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "14783-250",
          bailAmount: 22625.5,
          defendant_id: 3,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "69082-600",
          bailAmount: 30838.62,
          defendant_id: 16,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "36987-3264",
          bailAmount: 12909.26,
          defendant_id: 3,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "33261-950",
          bailAmount: 10887.97,
          defendant_id: 18,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "68647-115",
          bailAmount: 28416.21,
          defendant_id: 2,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "51991-318",
          bailAmount: 16652.72,
          defendant_id: 12,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "50458-346",
          bailAmount: 39163.24,
          defendant_id: 7,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0113-8442",
          bailAmount: 26464.98,
          defendant_id: 5,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "52904-460",
          bailAmount: 17944.27,
          defendant_id: 18,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "43857-0007",
          bailAmount: 37197.33,
          defendant_id: 15,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0054-0017",
          bailAmount: 25511.91,
          defendant_id: 16,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "60505-6093",
          bailAmount: 30176.66,
          defendant_id: 14,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "53217-004",
          bailAmount: 19178.74,
          defendant_id: 13,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "55289-501",
          bailAmount: 22385.24,
          defendant_id: 16,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "0615-1393",
          bailAmount: 45980.99,
          defendant_id: 13,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "68462-468",
          bailAmount: 49298.3,
          defendant_id: 13,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "55289-932",
          bailAmount: 44748.04,
          defendant_id: 17,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "68151-0314",
          bailAmount: 22322.25,
          defendant_id: 11,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "59779-957",
          bailAmount: 5359.78,
          defendant_id: 3,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "63868-788",
          bailAmount: 5917.67,
          defendant_id: 7,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "62742-4048",
          bailAmount: 44759.97,
          defendant_id: 7,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "49288-0117",
          bailAmount: 48100.45,
          defendant_id: 19,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "61477-207",
          bailAmount: 20759.01,
          defendant_id: 12,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "66715-9723",
          bailAmount: 16357.87,
          defendant_id: 10,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "64406-016",
          bailAmount: 49235.3,
          defendant_id: 19,
          violence: "non-violent",
          severity: "felony"
        }
      ]);
    });
};
