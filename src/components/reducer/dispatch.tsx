import { ControllerNames } from "../ControllerNames";

// export function cleanDatasources(dispatch: any) {
//   dispatch({ type: "CLEAN_DATASOURCE" });
// }

// export function cleanUser(dispatch: any) {
//   dispatch({ type: "CLEAN_USER" });
// }

export default function ReduxStorage(
  data: any,
  dispatch: any,
  controllerName: ControllerNames
) {
  if (controllerName != undefined) {
    console.log(data);
    dispatch({ type: "CLEAN_" + controllerName, name:controllerName });

    data.map((item: any) =>
      dispatch({
        type: "ADD_" + controllerName,
        item: { ...item }, 
        name:controllerName
      })
    );
  }
  // switch (controllerName) {
  //   case ControllerNames.Datasource:
  //     cleanDatasources(dispatch)
  //     data.map((datasource: any) =>
  //       dispatch({ type: 'ADD_DATASOURCE', datasource: { ...datasource } })
  //     )
  //     break;
  //   case ControllerNames.Users:
  //       cleanUser(dispatch)
  //       data.map((users: any) =>
  //         dispatch({ type: 'ADD_USER', users: { ...users } })
  //       )
  //       break;
  //   default:
  //     break;
  // }
}
