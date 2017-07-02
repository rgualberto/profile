import _ from 'lodash';
export const HYDRATE_PROFILES = 'profile/HYDRATE_PROFILES';
export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';

export const initialState = {
  profiles: [
    {
      userId: 123,
      isEditMode: false,
      photo: "http://lorempixel.com/160/160/",
      name: "Sven Motorson",
      location: "Boston",
      education: [
        {
          degree: "Bachelors of Engineering: Mechanical",
          school: "Carnegie Mellon University"
        },
        {
          degree: "Masters of Engineering: Mechanical",
          school: "Carnegie Mellon University"
        },
        {
          degree: "Docterates of Engineering: Mechanical",
          school: "Massachusetts Institute of Technology"
        }
      ],
      currentProject: "Duis in nunc ultrices, viverra lorem sed, suscipit mauris. Nullam maximus, sapien non facilisis mattis, magna ex sodales ipsum, eget tristique sapien ante quis libero. Praesent pretium velit ac odio egestas fringilla. Cras nec tortor dignissim, efficitur ligula nec, imperdiet odio. Etiam in augue felis. Duis iaculis placerat vulputate. Aliquam in mauris tempor risus egestas blandit ac ut lacus.",
      wikis: [
        {
          title: "Engine",
          uriParam: "engine"
        },
        {
          title: "Electric motor",
          uriParam: "Electric_motor"
        }
      ]
    },
    {
      userId: 456,
      isEditMode: false,
      photo: "http://lorempixel.com/160/160/",
      name: "Alice Mendelson",
      location: "Baltimore",
      education: [
        {
          degree: "Bachelors of Science: Biomedical Science",
          school: "Rutgers University"
        },
        {
          degree: "Masters of Science: Biomedical Science",
          school: "Rutgers University"
        },
        {
          degree: "Docterates of Science: Biomedical Science",
          school: "Johns Hopkins University"
        }
      ],
      currentProject: "In mattis arcu arcu, convallis volutpat eros consequat vitae. Pellentesque ultricies vulputate magna nec facilisis. Nullam consectetur risus orci, tincidunt molestie libero tempus eu. Vivamus a mauris vel nunc gravida laoreet finibus eu erat. Vestibulum sollicitudin volutpat nisl ac rhoncus. Nulla volutpat elit nec ante molestie, lacinia egestas neque molestie. Nulla nulla purus, ornare non vehicula at, blandit vel purus. Vivamus vitae ipsum id dui porttitor malesuada aliquam quis lacus. Cras quam nisi, finibus ac tellus quis, lobortis convallis nisl. Mauris viverra imperdiet placerat. Ut in eros sit amet ligula viverra luctus. Etiam ultrices ultricies pellentesque. Fusce malesuada vehicula egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      wikis: []
    }
  ]
};

export const profilesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case HYDRATE_PROFILES: {
        const existingData = window.localStorage.getItem('profileData');
        const profiles = _.isNull(existingData) ? state.profiles : JSON.parse(existingData);

        return {
          ...state,
          profiles
        };
      }
      case UPDATE_PROFILE: {
        const newProfiles = [
          ..._.reject(state.profiles, ['userId', action.userId]),
          {
            ..._.find(state.profiles, ['userId', action.userId]),
            ...action.profileData
          }
        ];

        window.localStorage.setItem('profileData', JSON.stringify(newProfiles));

        return {
          ...state,
          profiles: newProfiles
        };
      }
      default:
        return state;
    }
};

export const hydrateProfiles = () => ({ type: HYDRATE_PROFILES });

export const updateProfile = (userId, profileData) => ({
  type: UPDATE_PROFILE,
  userId,
  profileData
});

export default profilesReducer;
