export class Company {
    constructor(
        public name: string,
        public start_date: Date,
        public end_date: Date,
        public candidat: string,
        public activityArea: string,
    ) {}
}