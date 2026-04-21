import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title: string = 'Você seria um herói ou vilão?';
  
  questionSelected: any = {
    question: 'Qual super-poder você escolheria?',
    options: [
      { name: 'Raios-Lasers' },
      { name: 'Voar' },
      { name: 'Explodir coisas' },
      { name: 'Curar feridas' }
    ]
  };

  finished: boolean = false;
  answerSelected: string = 'Você muito provavelmente seria um super Herói!';
}
