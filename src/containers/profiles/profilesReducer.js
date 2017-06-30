export const CREATE_PROFILE = 'profile/CREATE_PROFILE';

export const initialState = {
  profiles: [
    {
      photo: "http://lorempixel.com/160/160/",
      location: "Sweden",
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
