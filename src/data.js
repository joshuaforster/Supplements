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
    }
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
    
  ];
  

  export default supplements