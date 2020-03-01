exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cases")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cases").insert([
        {
          caseNumber: "49288-0763",
          bailAmount: "40836.75",
          defendant_id: 10,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "49999-028",
          bailAmount: "39785.08",
          defendant_id: 19,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "68084-756",
          bailAmount: "45778.12",
          defendant_id: 6,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "63843-509",
          bailAmount: "1913.14",
          defendant_id: 19,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "51206-202",
          bailAmount: "12027.83",
          defendant_id: 15,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "51208-001",
          bailAmount: "19493.60",
          defendant_id: 10,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "53622-001",
          bailAmount: "22794.06",
          defendant_id: 20,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "42961-004",
          bailAmount: "48634.11",
          defendant_id: 5,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "63629-2782",
          bailAmount: "29340.50",
          defendant_id: 13,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "49999-965",
          bailAmount: "19209.16",
          defendant_id: 15,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "48951-2037",
          bailAmount: "5270.70",
          defendant_id: 18,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "21695-425",
          bailAmount: "27339.65",
          defendant_id: 2,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "41163-437",
          bailAmount: "31749.47",
          defendant_id: 13,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "54868-3832",
          bailAmount: "28766.10",
          defendant_id: 6,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0093-4232",
          bailAmount: "47525.42",
          defendant_id: 3,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "49817-1991",
          bailAmount: "49183.62",
          defendant_id: 14,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "63323-024",
          bailAmount: "44096.29",
          defendant_id: 17,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "55154-5704",
          bailAmount: "554.50",
          defendant_id: 1,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0436-0672",
          bailAmount: "10419.41",
          defendant_id: 4,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "51815-223",
          bailAmount: "43380.86",
          defendant_id: 12,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "24909-107",
          bailAmount: "34394.25",
          defendant_id: 3,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "68094-599",
          bailAmount: "7850.69",
          defendant_id: 7,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "43269-808",
          bailAmount: "15590.33",
          defendant_id: 11,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "63941-411",
          bailAmount: "5678.99",
          defendant_id: 17,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "68479-200",
          bailAmount: "37430.42",
          defendant_id: 3,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "42291-602",
          bailAmount: "12165.26",
          defendant_id: 2,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "63323-411",
          bailAmount: "45265.27",
          defendant_id: 6,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "45802-282",
          bailAmount: "16846.64",
          defendant_id: 10,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "62481-4565",
          bailAmount: "24887.66",
          defendant_id: 6,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "63941-693",
          bailAmount: "2846.04",
          defendant_id: 3,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "50466-575",
          bailAmount: "39292.33",
          defendant_id: 6,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "36987-3145",
          bailAmount: "26565.33",
          defendant_id: 5,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0115-1330",
          bailAmount: "21272.55",
          defendant_id: 14,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "61380-264",
          bailAmount: "19427.65",
          defendant_id: 13,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0078-0354",
          bailAmount: "48066.48",
          defendant_id: 4,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "57469-062",
          bailAmount: "33042.74",
          defendant_id: 6,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "54868-4992",
          bailAmount: "2841.25",
          defendant_id: 13,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "68405-054",
          bailAmount: "13710.70",
          defendant_id: 10,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "62273-003",
          bailAmount: "36235.31",
          defendant_id: 5,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "0603-5803",
          bailAmount: "32541.17",
          defendant_id: 6,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "33992-3002",
          bailAmount: "20907.88",
          defendant_id: 12,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "54868-1959",
          bailAmount: "21020.08",
          defendant_id: 7,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "58668-4061",
          bailAmount: "30874.47",
          defendant_id: 2,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "55714-4404",
          bailAmount: "7104.25",
          defendant_id: 10,
          violence: "violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "65044-0545",
          bailAmount: "44176.82",
          defendant_id: 6,
          violence: "non-violent",
          severity: "felony"
        },
        {
          caseNumber: "59762-0057",
          bailAmount: "1508.72",
          defendant_id: 9,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "61010-8200",
          bailAmount: "22377.35",
          defendant_id: 11,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "33992-8804",
          bailAmount: "823.43",
          defendant_id: 7,
          violence: "non-violent",
          severity: "misdemeanor"
        },
        {
          caseNumber: "0268-1266",
          bailAmount: "31963.59",
          defendant_id: 18,
          violence: "violent",
          severity: "felony"
        },
        {
          caseNumber: "16590-058",
          bailAmount: "14664.69",
          defendant_id: 13,
          violence: "violent",
          severity: "misdemeanor"
        }
      ]);
    });
};
