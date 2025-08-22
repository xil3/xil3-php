class Article {
    constructor(id, author, title, seoTitle, body, dateCreated = new Date()) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.seoTitle = seoTitle;
        this.body = body;
        this.dateCreated = dateCreated;
    }

    static articles = [
        new Article(
            1,
            'Jon',
            'Welcome to Xil3',
            'welcome-to-xil3',
            'This is the first article on our new Node.js blog.',
            new Date('2018-03-20')
        )
    ];

    static findAll() {
        return this.articles;
    }

    static findById(id) {
        return this.articles.find(article => article.id == id);
    }

    static create(data) {
        const newId = this.articles.length > 0 ? Math.max(...this.articles.map(a => a.id)) + 1 : 1;
        const article = new Article(
            newId,
            data.author,
            data.title,
            data.seoTitle,
            data.body
        );
        this.articles.push(article);
        return article;
    }

    static update(id, data) {
        const index = this.articles.findIndex(article => article.id == id);
        if (index !== -1) {
            this.articles[index] = {
                ...this.articles[index],
                author: data.author,
                title: data.title,
                seoTitle: data.seoTitle,
                body: data.body
            };
            return this.articles[index];
        }
        return null;
    }

    static delete(id) {
        const index = this.articles.findIndex(article => article.id == id);
        if (index !== -1) {
            return this.articles.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = Article;