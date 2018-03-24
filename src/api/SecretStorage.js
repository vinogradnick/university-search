export default {
  _univers: [
    {
      'id': 1,
      'name': 'Национального исследовательского университета "Высшая школа экономики"',
      'about': 'about university',
      'priceEducation': '100 000',
      'average_priceEducation': '1000',
      'placeEducation': 25,
      'average_ege': 120,
      'website_link': 'link',
      'location': 'Пермь',
      'subjects': [],
      'educationPrograms': [
        {
          'name': 'education program name',
          'about': 'about education programs',
          'priceEducation': 10000,
          'edu_code': '0.0.0',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0
        }
      ]
    },
    {
      'id': 2,
      'name': 'Пермская государственная фармацевтическая академия',
      'about': 'Пермская государственная фармацевтическая академия организована в 1936 году как Пермский государственный фармацевтический институт.Академия имеет лицензию Федеральной службы по надзору в сфере образования и науки на право ведения образовательной деятельности в сфере высшего, послевузовского и дополнительного профессионального образования от 05.03.2013 г. № 0560 и свидетельство о государственной аккредитации от 05.02.2015 г.  № 1186 (сроком действия до 05 февраля 2021 года) на право выдачи выпускникам, прошедшим итоговую государственную аттестацию, документов об образовании государственного образца.',
      'priceEducation': '110000',
      'average_priceEducation': '1000',
      'placeEducation': 25,
      'average_ege': 110,
      'website_link': 'http://www.pfa.ru',
      'location': 'Пермь',
      'educationPrograms': [
        {
          'name': 'Биотехнология',
          'about': 'интеграция естественных и инженерных наук, позволяющая наиболее полно реализовать возможности живых организмов или их производные для создания и модификации продуктов или процессов различного назначения',
          'priceEducation': 60000,
          'edu_code': '19.03.01',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'freeCountPlaces': 15,
          'CountPlaces': 50,
          'passEgeValue': 110
        },
        {
          'name': 'Фармация',
          'about': 'комплекс научно-практических дисциплин, изучающих проблемы создания, безопасности, исследования, хранения, изготовления, отпуска и маркетинга лекарственных средств, а также поиска природных источников лекарственных субстанций.',
          'priceEducation': 110000,
          'edu_code': '33.05.01',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'passEgeValue': 110,
          'freeCountPlaces': 215,
          'CountPlaces': 50
        },
        {
          'name': 'Химическая технология',
          'about': 'интеграция естественных и инженерных наук, позволяющая наиболее полно реализовать возможности живых организмов или их производные для создания и модификации продуктов или процессов различного назначения',
          'priceEducation': 110000,
          'edu_code': '33.05.01',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'passEgeValue': 110,
          'freeCountPlaces': 215,
          'CountPlaces': 100
        }
      ]
    },
    {
      'id': 3,
      'name': 'Российская академия народного хозяйства и государственной службы при Президенте РФ — филиал в г. Пермь',
      'about': '',
      'priceEducation': '110000',
      'average_priceEducation': '1000',
      'placeEducation': 25,
      'average_ege': 105,
      'website_link': 'http://www.perm.ranepa.ru/abitur',
      'location': 'Пермь',
      'educationPrograms': [
        {
          'name': 'Государственное и муниципальное управление',
          'about': '',
          'priceEducation': 87720,
          'edu_code': '38.03.04',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'freeCountPlaces': 5,
          'CountPlaces': 20,
          'passEgeValue': 110
        },
        {
          'name': 'Менеджмент',
          'about': '',
          'priceEducation': 85680,
          'edu_code': '38.03.02',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'passEgeValue': 105,
          'freeCountPlaces': 215,
          'CountPlaces': 40
        },
        {
          'name': 'Экономика',
          'about': '',
          'priceEducation': 86700,
          'edu_code': '33.05.01',
          'professions': [],
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'passEgeValue': 105,
          'freeCountPlaces': 5,
          'CountPlaces': 30
        },
        {
          'name': 'Юриспруденция',
          'about': '',
          'priceEducation': 89760,
          'edu_code': '40.03.01',
          'professions': [],
          'specification': 'Гражданское право',
          'universities': [],
          'countUniversities': 0,
          'countProfessions': 0,
          'passEgeValue': 105,
          'freeCountPlaces': 5,
          'CountPlaces': 20
        }
      ]
    }
  ],
  _professions: [
    {
      id: 1,
      name: 'professionName',
      about: 'about',
      educationPrograms: [],
      countPrograms: 0,
      countUniversities: 0,
      perspective: 0,
      subjests: [],
      priceEducation: 0,
      rate: 20
    }
  ],

  _educationprograms: [
    {
      'name': 'Биотехнология',
      'about': 'интеграция естественных и инженерных наук, позволяющая наиболее полно реализовать возможности живых организмов или их производные для создания и модификации продуктов или процессов различного назначения',
      'priceEducation': 60000,
      'edu_code': '19.03.01',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'freeCountPlaces': 15,
      'CountPlaces': 50,
      'passEgeValue': 110
    },
    {
      'name': 'Фармация',
      'about': 'комплекс научно-практических дисциплин, изучающих проблемы создания, безопасности, исследования, хранения, изготовления, отпуска и маркетинга лекарственных средств, а также поиска природных источников лекарственных субстанций.',
      'priceEducation': 110000,
      'edu_code': '33.05.01',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'passEgeValue': 110,
      'freeCountPlaces': 215,
      'CountPlaces': 50
    },
    {
      'name': 'Химическая технология',
      'about': 'интеграция естественных и инженерных наук, позволяющая наиболее полно реализовать возможности живых организмов или их производные для создания и модификации продуктов или процессов различного назначения',
      'priceEducation': 110000,
      'edu_code': '33.05.01',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'passEgeValue': 110,
      'freeCountPlaces': 215,
      'CountPlaces': 100
    },
    {
      'name': 'Государственное и муниципальное управление',
      'about': '',
      'priceEducation': 87720,
      'edu_code': '38.03.04',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'freeCountPlaces': 5,
      'CountPlaces': 20,
      'passEgeValue': 110
    },
    {
      'name': 'Менеджмент',
      'about': '',
      'priceEducation': 85680,
      'edu_code': '38.03.02',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'passEgeValue': 105,
      'freeCountPlaces': 215,
      'CountPlaces': 40
    },
    {
      'name': 'Экономика',
      'about': '',
      'priceEducation': 86700,
      'edu_code': '33.05.01',
      'professions': [],
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'passEgeValue': 105,
      'freeCountPlaces': 5,
      'CountPlaces': 30
    },
    {
      'name': 'Юриспруденция',
      'about': '',
      'priceEducation': 89760,
      'edu_code': '40.03.01',
      'professions': [],
      'specification': 'Гражданское право',
      'universities': [],
      'countUniversities': 0,
      'countProfessions': 0,
      'passEgeValue': 105,
      'freeCountPlaces': 5,
      'CountPlaces': 20
    }
  ]
}