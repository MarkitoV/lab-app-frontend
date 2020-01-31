export interface Guide {
  _id?:         string;
  title:        string;
  description:  string;
  subjectCode:  string;
  subjectName:  string;
  numberLab:    number;
  semester:     string;
  docent:       string;
  publishDate:  Date;
  deliveryDate: Date;
  workingTime:  number;
  bodyPath:     string;
  codePath:     string;
  imagePath:    string;
}