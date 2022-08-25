import { IBpiSubject } from "../../bpiSubjects/models/bpiSubject.interface";

export interface IBpiSubjectAccount {
    id: string; // TODO: Add uuid after #491
    creatorBpiSubject: IBpiSubject;
    ownerBpiSubject: IBpiSubject;
    bpiAccounts: IBpiAccount[];
}