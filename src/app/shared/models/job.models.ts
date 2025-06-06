export class Job {
    constructor(
      public id: number,
      public companyName: string,
      public title: string,
      public companyLogo: string,
      public reference: string,
      public location?: string,
      public industries?: string[],
      public types?: string[],
      public description?: string,
      public publishDate?: Date,
      public isFavourite?: boolean,
    ) {}
  }