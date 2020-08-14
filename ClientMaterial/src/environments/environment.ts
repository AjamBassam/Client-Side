// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const vehicle = "vehicle";
const vehicule = "vehicule";

export const env = {
  production: false,
  SERVER_URL: "http://localhost:3000",
  CLIENT_URL: "http://localhost:4200",
  // routes
  REGISTER: {
    en: "register",
    fr: "inscription"
  },
  LOGIN: {
    en: "login",
    fr: "connexion"
  },
  LIST_YOUR_VEHICLE: {
    en: `list-your-${vehicle}-for-rent`,
    fr: `lister-votre-${vehicule}-a-louer`
  },
  VEHICLE_RENTALS: {
    en: `${vehicle}-rentals`,
    fr: `location-des-${vehicule}s`
  },
  VEHICLE: {
    en: vehicle,
    fr: vehicule,
  },
  FAVORITES: {
    en: "favorites",
    fr: "favoris"
  },
  ACCOUNT: {
    en: "account",
    fr: "compte"
  },
  USER_PROFILE: {
    en: "user-profile",
    fr: "profile-utilisateur"
  },

  // parameters
  CITY: "location",
  LAT: "latitude",
  LNG: "longitude",
  DATE_RANGE: "date-range",
  ID: "id",
  // post
  USER: "user",
  LOGOUT: "logout",
  DELETE: "delete",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
