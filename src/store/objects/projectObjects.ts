export class NewProject {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export class Project {
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
  authorId: string;
  createdAt: Date;

  constructor(
    title: string,
    content: string,
    authorFirstName: string,
    authorLastName: string,
    authorId: string
  ) {
    this.title = title;
    this.content = content;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.authorId = authorId;
    this.createdAt = new Date();
  }

  // copy(): Project {
  //   return Object.assign(Project, this);
  // }

  toObject(): Project & {} {
    return Object.assign({}, this);
  }
}

export class ProjectInbound {
  id: string;
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
  authorId: string;
  createdAt: Date;

  constructor(
    id: string,
    title: string,
    content: string,
    authorFirstName: string,
    authorLastName: string,
    authorId: string
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.authorId = authorId;
    this.createdAt = new Date();
  }

  // copy(): Project {
  //   return Object.assign(Project, this);
  // }

  toObject(): Project & {} {
    return Object.assign({}, this);
  }
}
