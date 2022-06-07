import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article, FAVORITE_ARTICLES} from 'src/app/models/article';
import { ArticleState } from 'src/app/reducers/app.states';
import * as fromActions from '../../actions/article.actions';
import * as articleReducer from '../../reducers/article.reducer';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles$: Observable<Article[]>;

	constructor(private store: Store<ArticleState>) {
		this.articles$ = store.select(articleReducer.getArticles);
	}
	showJavaArticles() {
		this.store.dispatch(fromActions.JavaArticlesAction());
	}
	showAngularArticles() {
		this.store.dispatch(fromActions.AngularArticlesAction());
	}
	showFavoriteArticles() {
		this.store.dispatch(fromActions.FavoriteArticlesAction({ payload: FAVORITE_ARTICLES }));
	}

  ngOnInit(): void {
  }

}
