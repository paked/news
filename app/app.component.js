System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, ARTICLES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.articles = ARTICLES;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-article',
                        template: "<h1>Articles</h1>\n  <ul>\n    <li *ngFor=\"#article of articles\">\n      <h2>{{article.title}}</h2>\n      <p>{{article.content}}</p>\n      <p>by {{article.author}}</p>\n    </li>\n  </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            ARTICLES = [
                {
                    id: 0,
                    title: 'Meerkat Caught Walking Alone',
                    content: 'Authorities have been shocked to find a lone Meerkat walking among the suburb of Harrison in Canberra. When asked what he was doing, "Zoo." was the only reply.',
                    author: 'Barty'
                },
                {
                    id: 1,
                    title: 'Is TS Viable Now That ES6 Exists?',
                    content: 'It is called TypeScript, not ClassScript for a reason.',
                    author: 'McFly'
                },
                {
                    id: 2,
                    title: 'Key',
                    content: 'They don\'t want you to succeed. They don\'t want you to win.',
                    author: 'K.'
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map