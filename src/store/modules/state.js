export const state = {

  universitylist: [
    {
      id: 1,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 2,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 3,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 4,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 5,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0',
          subjects: [
            {
              name: 'mathematics',
              value: 170,
              selected: true

            }
          ]

        }

      ]

    },
    {
      id: 6,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',
      location: '',
      subjects: [],

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0',
          professions: [],
          universities: [],
          countUniversities: 0,
          countProfessions: 0

        }
      ]

    }
  ],
  professions: [
    {
      id:1,
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
  selected_univers: [],
  selected_subjects: [],
  ege_value: 0,
  subjects: [
    {
      name: 'Биология',
      value: 0,
      required: false,
      selected: false
    },
    {
      name: 'География',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'Иностранный язык',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'Информатика',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'История',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'Литература',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'Математика',
      value: 0,
      required: false,
      selected: true

    },
    {
      name: 'Обществознание',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'Русский язык',
      value: 0,
      required: false,
      selected: true
    },
    {
      name: 'Физика',
      value: 0,
      required: false,
      selected: false
    },
    {
      name: 'Химия',
      value: 0,
      required: false,
      selected: false
    }
  ],
  user_location: 'all'

}
