export interface Job {
    id : string;
    title: string;
    url: string;
    platform: string;
    isEasyApply: boolean;
    usedJobscan: boolean;
    applicantNumber: number;
    jobscanPercentage?: number;
    hasContactedEmployee: boolean;
    postAge: number;
  }