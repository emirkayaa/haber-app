import { trigger, transition, query, style, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':enter', [animate('500ms ease', style({ opacity: 1 }))], { optional: true }),
  ]),
]);