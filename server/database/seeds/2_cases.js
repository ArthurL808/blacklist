exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cases")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cases").insert([
        {
          caseNumber: "54868-5415",
          bailAmount: 12707.48,
          defendant_id: 37,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "0065-0656",
          bailAmount: 26695.44,
          defendant_id: 34,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "48951-2092",
          bailAmount: 16665.97,
          defendant_id: 92,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "68016-070",
          bailAmount: 6607.69,
          defendant_id: 5,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "59494-2001",
          bailAmount: 28943.58,
          defendant_id: 5,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "0781-2103",
          bailAmount: 23269.0,
          defendant_id: 59,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "63868-101",
          bailAmount: 29439.53,
          defendant_id: 89,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "63539-221",
          bailAmount: 18382.02,
          defendant_id: 80,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "16590-606",
          bailAmount: 28290.08,
          defendant_id: 65,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "61601-1132",
          bailAmount: 21183.73,
          defendant_id: 15,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "64038-630",
          bailAmount: 12085.9,
          defendant_id: 83,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "36800-918",
          bailAmount: 46294.38,
          defendant_id: 61,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "48951-5073",
          bailAmount: 8874.89,
          defendant_id: 99,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "76439-125",
          bailAmount: 26958.7,
          defendant_id: 87,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "0268-1102",
          bailAmount: 20423.17,
          defendant_id: 97,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "49035-721",
          bailAmount: 37101.5,
          defendant_id: 75,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "0054-3294",
          bailAmount: 46149.29,
          defendant_id: 68,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "49884-649",
          bailAmount: 40975.07,
          defendant_id: 70,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "36987-3146",
          bailAmount: 14383.05,
          defendant_id: 26,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "51672-4118",
          bailAmount: 39243.59,
          defendant_id: 45,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "59762-6733",
          bailAmount: 31523.4,
          defendant_id: 44,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "13734-117",
          bailAmount: 38488.72,
          defendant_id: 8,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "0049-0116",
          bailAmount: 10814.4,
          defendant_id: 14,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "61787-423",
          bailAmount: 43601.73,
          defendant_id: 39,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "0268-1365",
          bailAmount: 1020.79,
          defendant_id: 94,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "55154-2661",
          bailAmount: 21323.84,
          defendant_id: 90,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "53045-252",
          bailAmount: 6269.25,
          defendant_id: 38,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "59779-814",
          bailAmount: 14593.37,
          defendant_id: 27,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "37000-135",
          bailAmount: 16026.8,
          defendant_id: 16,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "13107-020",
          bailAmount: 22406.15,
          defendant_id: 99,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "68462-188",
          bailAmount: 20961.66,
          defendant_id: 88,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "43538-610",
          bailAmount: 22430.72,
          defendant_id: 96,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "52105-070",
          bailAmount: 32913.98,
          defendant_id: 49,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "33261-399",
          bailAmount: 35602.33,
          defendant_id: 10,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "49884-105",
          bailAmount: 11763.01,
          defendant_id: 9,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "59779-347",
          bailAmount: 29482.21,
          defendant_id: 36,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "64997-050",
          bailAmount: 2937.51,
          defendant_id: 30,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "36987-1485",
          bailAmount: 23533.0,
          defendant_id: 96,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "76282-417",
          bailAmount: 21746.87,
          defendant_id: 24,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "44946-1010",
          bailAmount: 10457.9,
          defendant_id: 57,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "43742-0298",
          bailAmount: 13274.19,
          defendant_id: 59,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "35356-605",
          bailAmount: 11787.11,
          defendant_id: 42,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "64117-266",
          bailAmount: 42257.94,
          defendant_id: 99,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "53808-0957",
          bailAmount: 16929.37,
          defendant_id: 35,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "43742-0134",
          bailAmount: 18096.11,
          defendant_id: 41,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "42747-224",
          bailAmount: 17008.07,
          defendant_id: 11,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "65044-1517",
          bailAmount: 33237.95,
          defendant_id: 49,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "59779-222",
          bailAmount: 22425.04,
          defendant_id: 81,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "41163-478",
          bailAmount: 26847.65,
          defendant_id: 48,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "0378-2722",
          bailAmount: 10657.46,
          defendant_id: 99,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "59779-993",
          bailAmount: 29867.97,
          defendant_id: 14,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "48951-9061",
          bailAmount: 23265.27,
          defendant_id: 93,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "68828-079",
          bailAmount: 25175.07,
          defendant_id: 2,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "33261-143",
          bailAmount: 24509.72,
          defendant_id: 14,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "65044-6587",
          bailAmount: 19413.12,
          defendant_id: 74,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "0245-0084",
          bailAmount: 27259.88,
          defendant_id: 38,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "36800-258",
          bailAmount: 41807.57,
          defendant_id: 50,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "63629-3198",
          bailAmount: 47142.08,
          defendant_id: 95,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "55513-005",
          bailAmount: 3659.52,
          defendant_id: 39,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "60429-760",
          bailAmount: 37357.39,
          defendant_id: 46,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "49288-0899",
          bailAmount: 5183.62,
          defendant_id: 16,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "55910-271",
          bailAmount: 18999.92,
          defendant_id: 35,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "0115-0692",
          bailAmount: 42668.91,
          defendant_id: 46,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "0032-1102",
          bailAmount: 49860.48,
          defendant_id: 6,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "0517-0101",
          bailAmount: 17391.75,
          defendant_id: 48,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "0406-0364",
          bailAmount: 17842.26,
          defendant_id: 49,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "13668-300",
          bailAmount: 27532.98,
          defendant_id: 59,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "43063-534",
          bailAmount: 34943.92,
          defendant_id: 25,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "59321-031",
          bailAmount: 39883.92,
          defendant_id: 50,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "0002-8315",
          bailAmount: 34166.83,
          defendant_id: 34,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "66993-025",
          bailAmount: 11878.85,
          defendant_id: 83,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "13668-037",
          bailAmount: 23902.22,
          defendant_id: 76,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "67345-0509",
          bailAmount: 6330.15,
          defendant_id: 63,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "67457-583",
          bailAmount: 39742.98,
          defendant_id: 20,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "33261-564",
          bailAmount: 9889.04,
          defendant_id: 47,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "66758-048",
          bailAmount: 34945.95,
          defendant_id: 32,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "54868-0018",
          bailAmount: 18840.25,
          defendant_id: 96,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "24385-214",
          bailAmount: 30250.34,
          defendant_id: 38,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "0527-1632",
          bailAmount: 19177.1,
          defendant_id: 86,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "33261-741",
          bailAmount: 3498.73,
          defendant_id: 92,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "0378-2264",
          bailAmount: 16468.7,
          defendant_id: 10,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "58118-0402",
          bailAmount: 22703.36,
          defendant_id: 13,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "46122-178",
          bailAmount: 13233.88,
          defendant_id: 79,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "0527-1379",
          bailAmount: 30322.96,
          defendant_id: 52,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "0173-0720",
          bailAmount: 8472.78,
          defendant_id: 68,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "25021-222",
          bailAmount: 41676.1,
          defendant_id: 82,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "37000-345",
          bailAmount: 49376.8,
          defendant_id: 23,
          severity: "misdemeanor",
          violence: "non-violent"
        },
        {
          caseNumber: "36987-1587",
          bailAmount: 32392.37,
          defendant_id: 76,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "55648-905",
          bailAmount: 30602.79,
          defendant_id: 4,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "63629-5241",
          bailAmount: 48629.85,
          defendant_id: 28,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "64725-0145",
          bailAmount: 12811.14,
          defendant_id: 95,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "30142-951",
          bailAmount: 38288.62,
          defendant_id: 41,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "59779-970",
          bailAmount: 24558.09,
          defendant_id: 87,
          severity: "felony",
          violence: "non-violent"
        },
        {
          caseNumber: "24236-496",
          bailAmount: 11322.93,
          defendant_id: 22,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "27437-110",
          bailAmount: 17533.51,
          defendant_id: 4,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "54868-6209",
          bailAmount: 22456.87,
          defendant_id: 48,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "67046-268",
          bailAmount: 18930.99,
          defendant_id: 44,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "64117-220",
          bailAmount: 42333.37,
          defendant_id: 59,
          severity: "misdemeanor",
          violence: "violent"
        },
        {
          caseNumber: "54868-2497",
          bailAmount: 34474.34,
          defendant_id: 36,
          severity: "felony",
          violence: "violent"
        },
        {
          caseNumber: "65121-494",
          bailAmount: 17396.07,
          defendant_id: 81,
          severity: "felony",
          violence: "non-violent"
        }
      ]);
    });
};
