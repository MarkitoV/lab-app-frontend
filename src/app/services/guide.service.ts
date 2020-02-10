import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Guide } from '../interfaces/Guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  URI = 'http://localhost:3000/api/guides';

  constructor(private http: HttpClient) { }

  createGuide(title: string, description: string, subjectCode: string, subjectName: string, numberLab: string, semester: string, docent: string, publishDate: string, deliveryDate: string, workingTime: string, bodyPath: string, codePath: string, image: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('subjectCode', subjectCode);
    fd.append('subjectName', subjectName);
    fd.append('numberLab', numberLab);
    fd.append('semester', semester);
    fd.append('docent', docent);
    fd.append('publishDate', publishDate);
    fd.append('deliveryDate', deliveryDate);
    fd.append('workingTime', workingTime);
    fd.append('image', image);
    fd.append('bodyPath', bodyPath);
    fd.append('codePath', codePath);

    return this.http.post(this.URI, fd);
  }

  getGuides() {
    return this.http.get<any>(this.URI);
  }

  getGuide(id: string) {
    return this.http.get<Guide>(`${this.URI}/${id}`);
  }

  deleteGuide(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }
}
