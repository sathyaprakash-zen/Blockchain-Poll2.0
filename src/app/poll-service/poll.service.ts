import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  getPolls(): Observable<Poll[]> {
     return of([
      {
        id: 1,
      question: 'Do you like cat or dogs?',
      thumbnail: 'localhost:4200/assets/glasspaperlogocopy2.png',
      results: [0, 5, 7],
      options: ['Cats', 'Dogs', 'None'],
      voted: true,
    },
    {
      id: 2,
      question: 'Best month for summer holidays?',
      thumbnail: 'localhost:4200/assets/glasspaperlogocopy2.png',
      results: [1, 6, 4],
      options: ['June', 'July', 'August'],
      voted: false,
    },
     ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
