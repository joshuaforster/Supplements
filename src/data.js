const supplements = [
  {
    id: 1,
    name: 'Vitamin C',
    otherNames: ['Ascorbic Acid'],
    overview: 'Vitamin C, also known as ascorbic acid, is a vital nutrient that acts as an antioxidant, helping protect cells from damage...',
    rda: '40mg per day for adults',
    naturalSources: ['Oranges', 'Strawberries', 'Broccoli', 'Kiwi fruit', 'Bell peppers'],
    neededFor: 'Growth, development, and repair of all body tissues, formation of collagen, absorption of iron...',
    toxicity: 'More than 2000mg per day can cause nausea, diarrhoea, and stomach cramps.',
    uses: 'Used to prevent and treat scurvy, common cold, immune system deficiencies, skin aging...',
    sideEffects: 'Possible side effects include nausea, vomiting, heartburn, and headache. Rarely, it may cause kidney stones...',
    precautions: 'Those with kidney problems or a history of kidney stones should consult a doctor before use.',
    interactions: 'Can interact with certain medications like statins and chemotherapy drugs.',
    dosing: 'The recommended daily allowance is 40mg for adults, but doses may vary based on age, sex, and medical conditions.',
    reviews: [], // Placeholder for user-generated reviews
    foodEquivalent: {
      description: 'To meet the daily RDA of Vitamin C for adults, you could consume...',
      examples: [
        '1 medium orange (approx. 130g) - provides about 70mg of Vitamin C',
        '100g of strawberries (about 1/2 cup) - provides approximately 59mg of Vitamin C',
        '75g of broccoli (about 1/2 cup chopped) - provides approximately 51mg of Vitamin C'
      ]
    },
    dietOrSupplement: {
      recommendation: 'A good diet is generally adequate for most people. Vitamin C is abundant in fruits and vegetables...',
      whenSupplementNeeded: 'Supplements might be necessary for people with certain medical conditions...'
    },
    bgImage:'/orange2.png'
  },
  {
    id: 2,
    name: 'Vitamin B12',
    otherNames: ['Cobalamin'],
    overview: 'Vitamin B12, also known as cobalamin, is crucial for maintaining healthy nerve tissue, brain function, and the production of red blood cells...',
    rda: '2.4µg per day for adults',
    naturalSources: ['Beef', 'Chicken', 'Fish', 'Milk', 'Cheese', 'Eggs'],
    neededFor: 'Formation of red blood cells, brain function, and DNA synthesis.',
    toxicity: 'Has a low potential for toxicity. The body absorbs only as much as it needs, and any excess passes through your urine.',
    uses: 'Helps prevent megaloblastic anemia, aids in the production of energy, and is crucial for neurological function.',
    sideEffects: 'Rare, but overconsumption can sometimes lead to dizziness, headache, anxiety, nausea, and vomiting.',
    precautions: 'People with certain health conditions, like pernicious anemia, should be cautious and consult with a doctor.',
    interactions: 'May interact with medications like proton pump inhibitors, metformin, and certain antibiotics.',
    dosing: 'While the RDA is 2.4µg, doses for specific conditions or deficiencies may be higher, as prescribed by a healthcare professional.',
    reviews: [], // Placeholder for user-generated reviews
    foodEquivalent: {
      description: 'To meet the daily RDA of Vitamin B12 for adults, you could consume...',
      examples: [
        '4 hard-boiled eggs (each egg approx. 50g) - provides about 0.6µg of Vitamin B12 per egg',
        '1 small fillet of salmon (approx. 150g) - provides about 2.6µg of Vitamin B12',
        '1 cup of milk (approx. 244g) - provides about 1.2µg of Vitamin B12'
      ]
    },
    dietOrSupplement: {
      recommendation: 'For most people with a varied diet, including animal products, supplementation is not necessary...',
      whenSupplementNeeded: 'Vegans, vegetarians, and older adults may require supplements or fortified foods...'
    }
  },
  {
    id: 3,
    name: 'Vitamin D',
    otherNames: ['Cholecalciferol (D3)', 'Ergocalciferol (D2)'],
    overview: 'Vitamin D, also known as the "sunshine vitamin," is crucial for the absorption of calcium and phosphorus, making it essential for healthy bones and teeth...',
    rda: '10µg (400 IU) per day for adults',
    naturalSources: ['Fatty fish (such as salmon, mackerel, and sardines)', 'Egg yolks', 'Fortified foods (such as milk, orange juice, and cereals)'],
    neededFor: 'Maintaining healthy bones and teeth, supporting immune, brain, and nervous system health...',
    toxicity: 'Taking too much Vitamin D can lead to Vitamin D toxicity, which can cause symptoms such as nausea, vomiting, weakness...',
    uses: 'Prevents osteoporosis, rickets in children, and bone disorders in adults. May reduce the risk of certain cancers, type 1 diabetes, and multiple sclerosis.',
    sideEffects: 'Rare but may include hypercalcemia, which can lead to nausea, weakness, and kidney issues.',
    precautions: 'People with hyperparathyroidism, lymphoma, kidney disease, or high blood calcium levels should be cautious.',
    interactions: 'Vitamin D may interact with steroid medications, weight loss drugs, and medicines used to lower cholesterol.',
    dosing: 'The recommended daily allowance is 10µg for adults, but higher doses may be recommended for those with Vitamin D deficiency as per a doctors advice.',
    reviews: [],// Placeholder for user-generated reviews
    foodEquivalent: {
      description: 'To meet the daily RDA of Vitamin D for adults, you could consume...',
      examples: [
        '1 serving of fatty fish (approx. 100g of salmon) - provides about 10µg (400 IU) of Vitamin D',
        '2 large egg yolks (approx. 40g) - provides about 1.2µg (48 IU) of Vitamin D',
        '1 cup of fortified milk (approx. 240ml) - provides about 2.5µg (100 IU) of Vitamin D'
      ]
    },
    dietOrSupplement: {
      recommendation: 'While a good diet and adequate sunlight exposure are generally adequate for most people, Vitamin D deficiency is common...',
      whenSupplementNeeded: 'Supplements are recommended for those at risk of deficiency, such as older adults, people with limited sun exposure...'
    }
  },
  {
    id: 4,
    name: 'Omega-3 Fatty Acids',
    overview: 'Omega-3 fatty acids are essential fats that you must get from your diet. They have important benefits for your heart, brain, and metabolism...',
    rda: 'There is no established RDA, but a daily intake of 250-500mg of EPA and DHA is often recommended for adults.',
    naturalSources: ['Fatty fish (such as salmon, mackerel, and sardines)', 'Flaxseeds', 'Walnuts', 'Chia seeds', 'Hemp seeds'],
    neededFor: 'Supporting heart health, brain function, and anti-inflammatory responses.',
    toxicity: 'High doses can lead to blood thinning and increase the risk of bleeding...',
    foodEquivalent: {
      description: 'To meet the daily recommended intake of Omega-3 for adults, you could consume:',
      examples: [
        '1 serving of fatty fish (approx. 100g of salmon) - provides up to 2.6g of EPA and DHA',
        '1 tablespoon of flaxseed oil - provides about 7.3g of ALA (alpha-linolenic acid, a type of Omega-3)',
        '1 ounce (28g) of walnuts - provides about 2.5g of ALA'
      ]
    },
    dietOrSupplement: {
      recommendation: 'While Omega-3 supplements are available, incorporating Omega-3-rich foods into your diet is preferable for most people.',
      whenSupplementNeeded: 'Supplements may be beneficial for people who do not consume fish or enough ALA-rich plant foods.'
    },
    otherNames: ['Eicosapentaenoic Acid (EPA)', 'Docosahexaenoic Acid (DHA)', 'Alpha-linolenic Acid (ALA)'],
    uses: 'To prevent heart disease and stroke, to reduce blood pressure, improve symptoms of psychiatric disorders, and reduce the risk of chronic diseases.',
    sideEffects: 'Possible side effects include fishy aftertaste, gastrointestinal disturbances, and bloating.',
    precautions: 'Consult with a healthcare provider before using Omega-3 supplements, especially if you are taking blood thinners or have a bleeding disorder.',
    interactions: 'Omega-3 supplements can interact with blood thinners, blood pressure medications, and others.',
    dosing: 'For adults, a daily intake of 250-500mg of combined EPA and DHA is commonly recommended.',
    reviews: [] // Placeholder for user-generated reviews
  },
  {
    id: 5,
    name: 'Magnesium',
    overview: 'Magnesium is a crucial mineral for over 300 enzyme reactions in the human body, related to muscle and nerve function, blood glucose control, and blood pressure regulation. It is also needed for making protein, bone, and DNA.',
    rda: '400-420mg per day for adult men, 310-320mg per day for adult women',
    naturalSources: ['Green leafy vegetables (e.g., spinach, kale)', 'Nuts and seeds', 'Whole grains', 'Legumes', 'Bananas'],
    neededFor: 'Muscle and nerve function, enzyme reactions, energy production, and the structural development of bones.',
    toxicity: 'Excessive intake can cause diarrhea, nausea, and abdominal cramping. Extremely high intakes can lead to irregular heartbeat and cardiac arrest.',
    foodEquivalent: {
      description: 'To meet the daily RDA of Magnesium for adults, you could consume:',
      examples: [
        '1 cup of cooked spinach (approx. 180g) - provides about 157mg of magnesium',
        '1 ounce (28g) of almonds - provides about 80mg of magnesium',
        '1 cup of cooked black beans (approx. 172g) - provides about 120mg of magnesium'
      ]
    },
    dietOrSupplement: {
      recommendation: 'A balanced diet can meet most people\'s magnesium needs. However, supplementation might be necessary for those with magnesium deficiency due to medical conditions or medications.',
      whenSupplementNeeded: 'Individuals with gastrointestinal diseases, type 2 diabetes, alcohol dependence, and older adults may require magnesium supplements.'
    },
    otherNames: ['N/A'], // Magnesium doesn't have widely recognized other names but may be referred to based on its compound forms (e.g., magnesium oxide, magnesium citrate).
    uses: 'Used to prevent and treat magnesium deficiency, osteoporosis, cardiovascular disease, and certain conditions related to mental health.',
    sideEffects: 'High doses or rapid administration can lead to hypermagnesemia, which may cause muscle weakness, difficulty breathing, and cardiac arrest.',
    precautions: 'People with kidney failure should avoid taking magnesium supplements without consulting a healthcare provider.',
    interactions: 'Magnesium can interact with antibiotics, diuretics, bisphosphonates, and medications used to treat osteoporosis.',
    dosing: 'The dosing depends on the individual\'s age, sex, and health condition. For adults, the general recommendation is 400-420mg for men and 310-320mg for women.',
    reviews: [] // Placeholder for user-generated reviews
  },
  {
    id: 6,
    name: 'Zinc',
    overview: 'Zinc is a vital mineral that your body uses in countless ways. It is essential for immune function, wound healing, DNA synthesis, and cell division. Zinc is also needed for the senses of taste and smell. Because the body does not store excess zinc, it must be consumed regularly as part of the diet.',
    rda: '11mg per day for adult men, 8mg per day for adult women',
    naturalSources: ['Meat', 'Shellfish', 'Legumes (chickpeas, lentils, beans)', 'Seeds and nuts', 'Dairy'],
    neededFor: 'Immune function, wound healing, DNA synthesis, and cell division.',
    toxicity: 'High doses can cause nausea, vomiting, loss of appetite, stomach cramps, diarrhea, and headaches. Chronic high intake can lead to copper deficiency.',
    foodEquivalent: {
      description: 'To meet the daily RDA of Zinc for adults, you could consume:',
      examples: [
        '3 ounces (85g) of cooked beef - provides about 7mg of zinc',
        '1 ounce (28g) of pumpkin seeds - provides about 2.2mg of zinc',
        '1 cup of cooked lentils (approx. 198g) - provides about 2.5mg of zinc'
      ]
    },
    dietOrSupplement: {
      recommendation: 'Most people can achieve adequate zinc intake through a varied diet, especially one that includes meat and seafood.',
      whenSupplementNeeded: 'Vegetarians, pregnant and breastfeeding women, and people with certain medical conditions may benefit from zinc supplements.'
    },
    otherNames: ['N/A'], // Zinc is typically known just as zinc, but it comes in various forms like zinc oxide, zinc sulfate, etc.
    uses: 'Zinc supplements are used to boost the immune system, treat zinc deficiency, and potentially reduce the duration of colds.',
    sideEffects: 'Possible side effects include gastrointestinal issues such as stomach upset, nausea, and diarrhea.',
    precautions: 'Zinc can interact with certain medications, including antibiotics and diuretics. High doses over a long period may interfere with the absorption of other important minerals.',
    interactions: 'Zinc may interact with penicillamine, quinolone antibiotics, and tetracycline antibiotics. It/s advised to take zinc supplements at a different time of day to these medications.',
    dosing: 'The general recommended daily dose for adults is 11mg for men and 8mg for women, but higher doses may be recommended for treating deficiency or other conditions.',
    reviews: [] // Placeholder for user-generated reviews
  },
    {
      id: 7,
      name: 'Whey Protein',
      overview: 'Whey Protein is a high-quality protein derived from dairy, rich in all essential amino acids. Its highly digestible and absorbed quickly compared to other proteins, making it a popular choice among athletes, bodybuilders, and those looking to increase their protein intake.',
      rda: 'There is no established RDA for protein supplements, but 20-25g of whey protein per serving is commonly recommended for muscle repair and growth.',
      naturalSources: ['Dairy products', 'Whey protein supplements', 'Protein bars'],
      neededFor: 'Muscle repair, muscle growth, and as a supplemental source of protein for individuals with increased protein requirements.',
      toxicity: 'Consuming high amounts can lead to digestive issues such as bloating, cramps, and diarrhea. Individuals with lactose intolerance should proceed with caution.',
      foodEquivalent: {
        description: 'Whey protein is most commonly consumed as a supplement rather than through specific foods.',
        examples: [
          '1 scoop of whey protein powder (approx. 30g) - provides about 20-25g of protein',
          'Whey protein bars and ready-to-drink shakes vary in protein content'
        ]
      },
      dietOrSupplement: {
        recommendation: 'While most people can meet their protein needs through diet, whey protein supplements can be beneficial for athletes, bodybuilders, and those unable to meet their protein needs.',
        whenSupplementNeeded: 'Recommended for individuals looking to increase muscle mass, improve athletic performance, or those who have difficulty meeting protein needs through diet alone.'
      }
    },
    {
      id: 8,
      name: 'Casein Protein',
      overview: 'Casein protein is a slow-digesting protein found in milk that provides a sustained release of amino acids. Its often consumed before bed to aid with muscle recovery and reduce muscle breakdown while fasting overnight.',
      rda: 'Like whey protein, there is no established RDA, but 20-30g before bed is commonly suggested to support muscle recovery.',
      naturalSources: ['Dairy products', 'Casein protein powders'],
      neededFor: 'Muscle recovery, reducing muscle breakdown, and providing a sustained source of protein.',
      toxicity: 'Excessive intake may cause digestive issues, such as bloating and cramps, especially in individuals with lactose intolerance or dairy sensitivities.',
      foodEquivalent: {
        description: 'Casein is primarily consumed as a supplement in powder form.',
        examples: [
          '1 scoop of casein protein powder (approx. 30g) - provides about 20-30g of protein',
          'Casein is also naturally present in dairy products, but in lower concentrations compared to supplements'
        ]
      },
      dietOrSupplement: {
        recommendation: 'For those with adequate protein intake from their diet, additional casein may not be necessary. However, it can be beneficial for muscle recovery, especially when consumed before sleep.',
        whenSupplementNeeded: 'Beneficial for individuals looking for overnight muscle recovery support, bodybuilders, and those with high protein requirements.'
      }
    },
    {
      id: 9,
      name: 'Creatine',
      overview: 'Creatine is a substance found naturally in muscle cells. It helps your muscles produce energy during heavy lifting or high-intensity exercise. Taking creatine as a supplement is very popular among athletes and bodybuilders in order to gain muscle, enhance strength, and improve exercise performance.',
      rda: 'There is no RDA, but 3-5g daily is commonly recommended for maintaining elevated muscle creatine levels.',
      naturalSources: ['Red meat', 'Fish'],
      neededFor: 'Improving exercise performance, increasing muscle mass, and aiding in muscle recovery.',
      toxicity: 'Creatine is generally considered safe to use, although long-term consumption of high doses is not recommended. Possible side effects can include weight gain, dehydration, digestive issues, and kidney stress in those with preexisting conditions.',
      foodEquivalent: {
        description: 'Creatine is mainly consumed as a supplement since the concentration in natural food sources is much lower.',
        examples: [
          '1 scoop of creatine monohydrate powder (approx. 5g)',
          'Consuming large amounts of red meat or fish could provide creatine, but not in significant amounts compared to supplements'
        ]
      },
      dietOrSupplement: {
        recommendation: 'While creatine is found in some foods, supplementation is far more effective for increasing muscle creatine levels and improving performance.',
        whenSupplementNeeded: 'Highly recommended'
      }
    },
    {
      id: 10, // Note: Adjust the ID based on the next sequence in your array
      name: 'BCAAs (Branched-Chain Amino Acids)',
      otherNames: ['Leucine', 'Isoleucine', 'Valine'],
      overview: 'BCAAs consist of three essential amino acids: leucine, isoleucine, and valine. These amino acids are essential because the body cannot produce them and must be obtained from food. BCAAs are crucial for muscle protein synthesis, muscle growth, and recovery after exercise.',
      rda: 'Not established. Supplemental doses typically range from 5-20g per day, divided before and after workouts.',
      naturalSources: ['Meat', 'Fish', 'Eggs', 'Dairy products', 'Legumes', 'Nuts'],
      neededFor: 'Muscle growth, enhancing exercise performance, reducing fatigue, and accelerating recovery after workouts.',
      toxicity: 'BCAAs are generally considered safe for consumption with no well-documented toxicity levels. However, excessive intake without exercise may lead to imbalances in amino acid levels.',
      uses: 'Popular among athletes and bodybuilders for muscle growth, endurance, and recovery. Also used in medical settings to treat liver diseases.',
      sideEffects: 'Generally well tolerated. High doses may cause fatigue, coordination problems, or nausea. People with ALS or Maple Syrup Urine Disease should avoid BCAA supplements.',
      precautions: 'Consult with a healthcare provider before starting BCAA supplementation, especially if pregnant, breastfeeding, or have a medical condition.',
      interactions: 'BCAAs may interact with medications for diabetes and chronic alcohol users due to potential effects on blood sugar levels and liver health.',
      dosing: 'Typical doses range from 5-20g per day, often split into pre- and post-workout doses. The ratio of leucine to isoleucine to valine is commonly 2:1:1.',
      reviews: [], // Placeholder for user-generated reviews
      foodEquivalent: {
        description: 'While BCAAs are found in protein-rich foods, supplementation is preferred for targeted doses especially for athletic performance.',
        examples: [
          'A chicken breast or a piece of salmon can provide a healthy dose of BCAAs, but exact amounts can vary.',
          'Dairy products like milk and cheese are also good sources.'
        ]
      },
      dietOrSupplement: {
        recommendation: 'For individuals with a high-protein diet, additional BCAA supplementation might not be necessary but can offer benefits for muscle recovery and growth in athletes and those engaging in regular intense exercise.',
        whenSupplementNeeded: 'Recommended for athletes, bodybuilders, or individuals looking to enhance muscle recovery, growth, and performance.'
      }
    },
    {
      id: 11,
      name: 'Ashwagandha',
      overview: 'An ancient medicinal herb with multiple health benefits, including reducing stress and anxiety, improving brain function, and possibly aiding in reducing symptoms of depression.',
      rda: '300-500mg daily with meals is commonly recommended, though doses can vary depending on the specific use.',
      naturalSources: ['Ashwagandha is primarily taken in supplement form, derived from the root or leaves of the Withania somnifera plant.'],
      neededFor: 'Stress relief, improved brain function, and enhanced well-being.',
      toxicity: 'Well tolerated when taken at recommended doses; high doses may cause stomach upset, diarrhea, and vomiting.',
      uses: 'Stress reduction, enhancing cognitive function, improving sleep quality, and potentially aiding in muscle growth and strength.',
      sideEffects: 'Possible side effects include diarrhea, nausea, and vomiting at high doses.',
      precautions: 'Pregnant or breastfeeding women and individuals with autoimmune diseases should avoid ashwagandha.',
      interactions: 'May interact with thyroid, blood sugar, and blood pressure medications.',
      dosing: '300-500mg daily, often divided into two doses, with meals.',
      reviews: [],
      foodEquivalent: {
        description: 'Ashwagandha is not found in food sources; it is typically consumed as a supplement.',
        examples: []
      },
      dietOrSupplement: {
        recommendation: 'Primarily taken as a supplement due to its not being commonly found in dietary sources.',
        whenSupplementNeeded: 'Beneficial for individuals experiencing stress and those looking to improve cognitive function and overall well-being.'
      }
    },
    {
      id: 12,
      name: 'Turmeric/Curcumin',
      overview: 'Turmeric contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties. It may also help improve symptoms of depression and arthritis.',
      rda: '500-2000mg of curcuminoids per day is often recommended.',
      naturalSources: ['Turmeric root, which is commonly used as a spice in cooking.'],
      neededFor: 'Reducing inflammation, combating oxidative stress, and improving joint health.',
      toxicity: 'High doses may cause digestive issues, but turmeric is safe for most people when consumed in food.',
      uses: 'Managing arthritis, reducing inflammation, enhancing skin health, and potentially lowering the risk of heart disease.',
      sideEffects: 'High doses can lead to gastrointestinal problems.',
      precautions: 'Should be used with caution in people with gallbladder problems, bleeding disorders, or those on blood thinners.',
      interactions: 'Can interact with blood thinners and drugs that reduce stomach acid.',
      dosing: '500-2000mg of curcuminoids per day, often in divided doses.',
      reviews: [],
      foodEquivalent: {
        description: 'Turmeric is used as a spice and can be included in meals, but supplement forms are needed to achieve therapeutic doses of curcumin.',
        examples: [
          'Adding turmeric powder to curries, smoothies, and teas.'
        ]
      },
      dietOrSupplement: {
        recommendation: 'A supplement is recommended for therapeutic doses; however, turmeric can be included in the diet for general health benefits.',
        whenSupplementNeeded: 'People with inflammatory conditions, joint pain, or digestive issues may benefit from supplementation.'
      }
    },
    {
      id: 13,
      name: 'Green Tea Extract',
      overview: 'Derived from green tea leaves, this extract is rich in antioxidants, particularly epigallocatechin gallate (EGCG), which is beneficial for heart health, fat loss, and preventing cancer.',
      rda: 'Not established; supplements typically contain 250-500mg of EGCG per serving.',
      naturalSources: ['Green tea leaves are the natural source of green tea extract.'],
      neededFor: 'Antioxidant protection, improved heart health, and enhanced weight loss efforts.',
      toxicity: 'Generally safe, but high doses can cause liver problems, nausea, and irritability.',
      uses: 'Weight loss, improving cardiovascular health, and reducing the risk of chronic diseases.',
      sideEffects: 'Possible side effects include stomach upset, constipation, and headaches.',
      precautions: 'People with liver problems or those taking medications that affect liver function should use with caution.',
      interactions: 'Can interact with stimulants, certain medications for heart and blood pressure, and blood thinners.',
      dosing: '250-500mg of EGCG per serving, depending on the specific product and intended use.',
      reviews: [],
      foodEquivalent: {
        description: 'While drinking green tea provides some of the same benefits, concentrated extract supplements offer a more potent dose of antioxidants.',
        examples: [ 'Drinking 3-5 cups of green tea daily provides health benefits, but supplements concentrate these effects.'
      ]
    },
    dietOrSupplement: {
      recommendation: 'Drinking green tea is beneficial for overall health, but supplements are useful for targeted health goals like weight loss and antioxidant support.',
      whenSupplementNeeded: 'Particularly beneficial for those looking to support weight management and cardiovascular health.'
    },
  },
  {
    id: 14,
    name: 'Fiber Supplements',
    overview: 'Fiber supplements are used to improve digestive health, aid in weight management, and help lower cholesterol levels. They can also regulate blood sugar levels.',
    rda: 'The recommended daily intake of fiber is 25g for women and 38g for men, but this can vary based on individual dietary needs.',
    naturalSources: ['Whole grains', 'Fruits', 'Vegetables', 'Legumes', 'Nuts', 'Seeds'],
    neededFor: 'Digestive health, blood sugar regulation, and cholesterol management.',
    toxicity: 'Excessive intake can lead to gastrointestinal discomfort, bloating, and gas.',
    uses: 'To supplement dietary intake of fiber, especially for individuals not consuming enough fruits, vegetables, and whole grains.',
    sideEffects: 'May include bloating, gas, and altered bowel movements, especially if intake is suddenly increased.',
    precautions: 'Should be increased gradually to prevent gastrointestinal discomfort. Adequate water intake is also important.',
    interactions: 'Can interact with certain medications by affecting their absorption.',
    dosing: 'Varies based on the type of fiber and individual needs, but generally, supplements are taken to reach the daily fiber intake goals.',
    reviews: [],
    foodEquivalent: {
      description: 'Dietary fiber is best obtained from whole food sources, but supplements can help reach daily goals.',
      examples: []
    },
    dietOrSupplement: {
      recommendation: 'Most people should aim to get their fiber from food sources, but supplements can be beneficial for those not meeting their needs through diet alone.',
      whenSupplementNeeded: 'Useful for individuals with digestive issues, those on restricted diets, and to help manage blood sugar and cholesterol levels.'
    }
  },
  {
    id: 15,
    name: 'Vitamin E',
    overview: 'Vitamin E is a powerful antioxidant that helps protect cells from damage. It is also important for healthy skin, eyes, and immune function.',
    rda: 'The recommended dietary allowance for adults is 15mg (22.4 IU) per day.',
    naturalSources: ['Nuts and seeds', 'Spinach and broccoli', 'Vegetable oils'],
    neededFor: 'Cell protection from oxidative damage, skin health, and immune support.',
    toxicity: 'High doses can interfere with blood clotting and increase the risk of bleeding.',
    uses: 'Used to prevent coronary heart disease, support eye health, and reduce the risk of cancer.',
    sideEffects: 'Rare, but high doses can lead to nausea, diarrhea, and stomach cramps.',
    precautions: 'People taking blood thinners should consult a healthcare provider before starting vitamin E supplements.',
    interactions: 'May interact with blood thinners and other medications.',
    dosing: '15mg (22.4 IU) per day for adults, though higher doses may be prescribed for specific medical conditions.',
    reviews: [],
    foodEquivalent: {
      description: 'A balanced diet typically provides adequate vitamin E, but supplements can help fill nutritional gaps.',
      examples: []
    },
    dietOrSupplement: {
      recommendation: 'A healthy diet is usually sufficient, but supplements may be beneficial for those with certain health conditions or dietary restrictions.',
      whenSupplementNeeded: 'Supplementation may be advised for individuals with vitamin E deficiency or those at risk of heart disease.'
    }
  },

  ];
  

  export default supplements