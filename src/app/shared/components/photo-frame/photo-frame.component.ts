import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() public liked = new EventEmitter<void>();
  @Input() public description = '';
  @Input() public src = '';
  @Input() public likes = 0;
  private debounceSubject: Subject<void> = new Subject();
  private unsubscrive: Subject<void> = new Subject();

  constructor() {}

  public ngOnInit() {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscrive))
      .subscribe(() => this.liked.emit());
  }

  public ngOnDestroy(): void {
    this.unsubscrive.next();
    this.unsubscrive.complete();
  }

  public like() {
    this.debounceSubject.next();
  }
}
