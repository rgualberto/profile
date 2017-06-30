export const CREATE_PROFILE = 'profile/CREATE_PROFILE';

export const initialState = {
  profiles: [
    {
      userId: 123,
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
      currentProject: "Duis in nunc ultrices, viverra lorem sed, suscipit mauris. Nullam maximus, sapien non facilisis mattis, magna ex sodales ipsum, eget tristique sapien ante quis libero. Praesent pretium velit ac odio egestas fringilla. Cras nec tortor dignissim, efficitur ligula nec, imperdiet odio. Etiam in augue felis. Duis iaculis placerat vulputate. Aliquam in mauris tempor risus egestas blandit ac ut lacus."
    },
    {
      userId: 456,
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
      currentProject: "In mattis arcu arcu, convallis volutpat eros consequat vitae. Pellentesque ultricies vulputate magna nec facilisis. Nullam consectetur risus orci, tincidunt molestie libero tempus eu. Vivamus a mauris vel nunc gravida laoreet finibus eu erat. Vestibulum sollicitudin volutpat nisl ac rhoncus. Nulla volutpat elit nec ante molestie, lacinia egestas neque molestie. Nulla nulla purus, ornare non vehicula at, blandit vel purus. Vivamus vitae ipsum id dui porttitor malesuada aliquam quis lacus. Cras quam nisi, finibus ac tellus quis, lobortis convallis nisl. Mauris viverra imperdiet placerat. Ut in eros sit amet ligula viverra luctus. Etiam ultrices ultricies pellentesque. Fusce malesuada vehicula egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  ]
};

export const profileDefaults = {
  photo: ''
};

export const profilesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CREATE_PROFILE:
        return {
          ...state
        };
      default:
        return state;
    }
};

export const createProfile = () => ({ type: CREATE_PROFILE });

export default profilesReducer;
