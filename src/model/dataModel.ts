import { OncallDto } from 'src/app/services/Oncall_Dto';

/**
 * Employee Model which is representation of the
 * dto.It is the Model Object which is represented in the view.
 * Used by the Employee Component to show the View.
 */
export class dataModel {

    S_No: Number;
    Reported_Date_Time: Date;
    IA: String;
    IR_NO: String;
    Severity: number;
    Functional_Area: String;
    Reported_By: String;
    Problem_Reported: String;
    Root_Cause: String;
    Action_Resolution_Workaround: String;
    Long_Term_Solution_Needed: String;
    Redirected_teams: String;
    Time_hours: Number;
    Team: String;


  public static fromDTO(onCallDto: OncallDto): dataModel {
    const DataModel = new dataModel();
    DataModel.S_No = Number(onCallDto.SNo);
    DataModel.Reported_Date_Time = new Date(onCallDto.ReportedDateTime);
    DataModel.Team = onCallDto.Team;
    DataModel.Functional_Area = onCallDto.FunctionalArea;
    DataModel.IR_NO = onCallDto.IR;
    DataModel.Severity = Number(onCallDto.Severity);
    DataModel.Reported_By = onCallDto.ReportedBy;
    DataModel.Problem_Reported = onCallDto.ProblemReported;
    DataModel.IA = onCallDto.IA;
    DataModel.Root_Cause = onCallDto.RootCause;
    DataModel.Action_Resolution_Workaround = onCallDto.ActionResolutionWorkaround;
    DataModel.Long_Term_Solution_Needed=onCallDto.LongTermSolutionNeeded;
    DataModel.Redirected_teams = onCallDto.Redirectedtootherteams;
    DataModel.Time_hours = Number(onCallDto.Timetakentoresolvetheproblem);
    return DataModel;
  }

//   public toDTO(): IEmployeeDTO {
//     // console.log('dob', this.dateOfBirth);
//     // console.log('this', this);
//     const dto: IEmployeeDTO = {} as any;
//     dto.name = this.name;
//     dto.key = this.key;
//     const dateObj: Date = parseDate(this.dateOfBirth);
//     dto.date_of_birth = dateObj.toLocaleDateString();
//     dto.position_held = this.positionHeld;
//     return dto;
//   }

}
