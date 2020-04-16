// Model object from MongoDB and server


export interface OncallDto {
    SNo:string,
    ReportedDateTime: string,
    IA: string,
    IR: string,
    Severity: string,
    FunctionalArea: string,
    ReportedBy: string,
    ProblemReported: string,
    RootCause: string,
    ActionResolutionWorkaround: string,
    LongTermSolutionNeeded: string,
    Redirectedtootherteams: string
    Timetakentoresolvetheproblem: string,
    Team: string
}
  