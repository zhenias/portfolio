import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private themeSubject = new BehaviorSubject<'light' | 'dark' | 'system'>('system');
  public currentTheme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
    this.watchSystemTheme();
  }

  setTheme(theme: 'light' | 'dark' | 'system') {
    this.themeSubject.next(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      this.themeSubject.next(savedTheme);
      this.applyTheme(savedTheme);
    } else {
      this.applyTheme('system');
    }
  }

  private applyTheme(theme: 'light' | 'dark' | 'system') {
    const isDark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private watchSystemTheme() {
    fromEvent(window.matchMedia('(prefers-color-scheme: dark)'), 'change').subscribe(() => {
      const current = this.themeSubject.value;
      if (current === 'system') {
        this.applyTheme('system');
      }
    });
  }
}
